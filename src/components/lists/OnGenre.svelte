<script>
  // get all albums from user
  // get all artists from the albums
  // get genre from the tracks
  // get recommendations with the "seed track" https://developer.spotify.com/documentation/web-api/reference/browse/get-recommendations/
  import { getFavoriteArtists } from "../../lib/fetchSpotify";
  import { AMOUNT_OF_ALBUMS_TO_FETCH } from "../../constants.js";
  import { generateKeyPair } from "crypto";

  let favoriteArtists = [];

  const fetchFavoriteArtists = async () => {
    favoriteArtists = await getFavoriteArtists(50);
    favoriteArtists = favoriteArtists.items;
  };

  const getGenresFromArtists = () => {
    const genres = {};
    favoriteArtists.forEach((artist) => {
      artist.genres.forEach((genre) => {
        if (genres[genre]) {
          genres[genre] = genres[genre] + 1;
        } else {
          genres[genre] = 1;
        }
      });
    });

    return genres;
  };

  const getSortedAmountGenres = (genres) => {
    let genresArray = Object.entries(genres);
    genresArray = genresArray.map((genre) => {
      return {
        name: genre[0],
        amount: genre[1],
      };
    });

    genresArray = genresArray.sort((a, b) => {
      const amountA = a.amount;
      const amountB = b.amount;
      let comp = 0;
      if (amountA < amountB) {
        return 1;
      } else if (amountA > amountB) {
        return -1;
      }
      return comp;
    });


    return genresArray
  }

  const getData = async () => {
    if (favoriteArtists.length === 0) {
      await fetchFavoriteArtists();
    }

    const genres = getGenresFromArtists();
    const topGenres = getSortedAmountGenres(genres).slice(0, 3);
  };

  const loadAlbums = () => {
    for (let i = 0; i < AMOUNT_OF_ALBUMS_TO_FETCH; i++) {
      getData();
    }
  };

  loadAlbums();

  console.log("her");
</script>
