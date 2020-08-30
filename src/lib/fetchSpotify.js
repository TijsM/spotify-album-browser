const token = localStorage.getItem("bearer-token");

export const getRelatedArtists = async (artistId) => {
  const artistData = await fetch(
    `https://api.spotify.com/v1/artists/${artistId}/related-artists`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  return await artistData.json();
};

export const getAlbumsFromArtist = async (artistId) => {
  const artistData = await fetch(
    `https://api.spotify.com/v1/artists/${artistId}/albums`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  return await artistData.json();
};

export const getFavoriteArtists = async (
  limit = 30,
  period = "medium_term"
) => {
  const favArtists = await fetch(
    `https://api.spotify.com/v1/me/top/artists?limit=${limit}&time_range=${period}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return await favArtists.json();
};

export const getAlbumsFromGenre = async (genres, artists) => {
  const genresString = encodeURI(genres.join(","));
  const artistsString = encodeURI(artists.join(","));


  const albumsOnGenre = await fetch(
    `https://api.spotify.com/v1/recommendations/?seed_genres=${genresString}&seed_artists=${artistsString}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  return await albumsOnGenre.json();
};

let fetched = 0;
let albums = [];
export const getAlbumsFromUser = async () => {
  let total = 0;
  const userAlbums = await fetch(
    `https://api.spotify.com/v1/me/albums?offset=${fetched}&limit=50`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  const data = await userAlbums.json();

  if (data.error) {
    return null;
  }

  data.items.forEach((album) => {
    albums.push(album.album);
    albums = [...albums];
  });

  //recursivly get all albums
  fetched += 50;
  total = data.total;

  if (fetched < total) {
    return getAlbumsFromUser();
  } else {
    return albums;
  }
};
