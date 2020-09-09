<script>
  import {
    getFavoriteArtists,
    getAlbumsFromGenre,
  } from "../../lib/fetchSpotify";
  import { getFavArtistsBasedOnAlbums } from "../../lib/getFavoriteArtists";
  import { AMOUNT_OF_ALBUMS_TO_FETCH } from "../../constants.js";
  import { getRandom } from "../../lib/getRandom.js";
  import HorizontalList from "../HorizontalList.svelte";

  let favoriteArtists = [];
  let selectedAlbums = [];

  let AMOUNT_ARTISTS = 0;
  let AMOUNT_GENRES = 5;

  const fetchFavoriteArtists = async () => {
    //fetch favorite artists from spotify
    favoriteArtists = await getFavoriteArtists(50);
    favoriteArtists = favoriteArtists.items;
    if (!favoriteArtists || favoriteArtists.length === 0) {
      //if spotify API fucks up, get favorite artists based on albums
      favoriteArtists = getFavArtistsBasedOnAlbums(
        userAlbums,
        AMOUNT_OF_ARTISTS
      );
    }
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

    return genresArray;
  };

  const getData = async () => {
    if (favoriteArtists.length === 0) {
      await fetchFavoriteArtists();
    }

    const genres = getGenresFromArtists();
    const topGenres = getSortedAmountGenres(genres).slice(0, AMOUNT_GENRES);
    const trimmedGenres = topGenres.map((genre) => genre.name);

    const artistIds = favoriteArtists.map((artist) => artist.id);
    const selectedArtists = [];

    for (let i = 0; i < AMOUNT_ARTISTS; i++) {
      selectedArtists.push(artistIds[getRandom(artistIds.length)]);
    }

    const albums = await getAlbumsFromGenre(trimmedGenres, selectedArtists);

    //recursivly change the parameters of the request to spotify
    if (albums.tracks.length === 0) {
      AMOUNT_ARTISTS += 1;
      AMOUNT_GENRES -= 1;
      getData();
      return;
    }

    let fetched = 0;
    while (fetched < AMOUNT_OF_ALBUMS_TO_FETCH) {
      const randomAlbum = albums.tracks[getRandom(albums.tracks.length)].album;

      const selectedIds = selectedAlbums.map((album) => album.id);

      if (!selectedIds.includes(randomAlbum.id)) {
        fetched += 1;
        const temp = [...selectedAlbums];
        temp.push(randomAlbum);
        selectedAlbums = [...temp];
      }
    }
  };

  getData();
</script>

<HorizontalList
  title="Based on your _genres_"
  loadMore={getData}
  albums={selectedAlbums} />
