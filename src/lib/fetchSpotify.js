const token = localStorage.getItem("bearer-token");

export const getUserData = async () => {
  const userData = await fetch(`https://api.spotify.com/v1/me`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  const user = await userData.json();

  localStorage.setItem("user-name", user.display_name);
  return user;
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

export const getFavoriteArtists = async (limit = 30) => {
  const favArtists = await fetch(
    `https://api.spotify.com/v1/me/top/artists?limit=${limit}`,
    {
      headers: {
        Authorization: "Bearer " + token
        // Authorization: "Bearer " + 'BQBDN2_LoyQw1u6rRT6C6o0-rXeybyfBj0LMEuq-4zLmxeLyO9gr_4Aq-ydXjpgkFq-xPGHPnIBxnbXrPO4E2MFBg3-cjGXjxEETHwBuwOBxnFj-Wn_b320Q92Inp0rZknaH345PCQJNbr7_j-xURwWRqPZEBnhWuyEUm-xpos_dBtWA-wf4Pg',
      },
    }
  );


  return await favArtists.json();
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
