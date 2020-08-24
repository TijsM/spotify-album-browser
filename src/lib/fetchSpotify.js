const token = localStorage.getItem("bearer-token");

export const getUserData = async () => {
  const userData = await fetch(`https://api.spotify.com/v1/me`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  const user = await userData.json();

  localStorage.setItem('user-name', user.display_name)
  return user
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

let fetched = 0;
let albums = [];
export const getAlbumsFromUser = async () => {
  let total = 0;
  const userAlbums = await fetch(
    `https://api.spotify.com/v1/me/albums??offset=${fetched}&limit=50`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  const data = await userAlbums.json();
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
