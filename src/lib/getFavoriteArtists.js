export const getFavArtistsBasedOnAlbums = (albums, amountOfArtists) => {
  const artists = getAllArtistIds(albums);
  const countedArtists = countAlbumsFromArtist(artists);
  const sorted = sortArtists(countedArtists);
  const result = formatArtists(sorted);
  return result.slice(0, amountOfArtists);
};

const getAllArtistIds = (albums) => {
  const artistArrays = albums.map((album) => {
    //some artists are list due to the [0]
    return album.artists.map((art) => art.id)[0];
  });

  return artistArrays.map((art) => art);
};

const countAlbumsFromArtist = (artists) => {
  let counted = {};
  artists.forEach((art) => {
    if (counted[art]) {
      counted[art] = counted[art] + 1;
    } else {
      counted[art] = 1;
    }
  });

  return counted;
};

const sortArtists = (artists) => {
  const sortable = [];
  for (let i in artists) {
    sortable.push([i, artists[i]]);
  }

  return sortable.sort(function (a, b) {
    return b[1] - a[1];
  });
};

const formatArtists = (sorted) => {
  const formatted = sorted.map((art) => {
   return({
      id: art[0],
    });
  });

  return formatted
};
