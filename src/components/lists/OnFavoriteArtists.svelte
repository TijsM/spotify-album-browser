<script>
  import {
    getFavoriteArtists,
    getAlbumsFromArtist,
  } from "../../lib/fetchSpotify.js";
  import { AMOUNT_OF_ALBUMS_TO_FETCH } from "../../constants.js";
  import { getRandom } from "../../lib/getRandom.js";
  import HorizontalList from "../HorizontalList.svelte";
  import { getFavArtistsBasedOnAlbums } from "../../lib/getFavoriteArtists";

  export let title;
  export let period;
  export let userAlbums;

  let favoriteArtists = [];
  let albums = [];

  const AMOUNT_OF_ARTISTS = period ? 25 : 40;

  const fetchFavoriteArtists = async () => {
    //fetch favorite artists from spotify
    favoriteArtists = await getFavoriteArtists(AMOUNT_OF_ARTISTS, period);
    favoriteArtists = favoriteArtists.items;
    if(!favoriteArtists || favoriteArtists.length === 0){
      //if spotify API fucks up, get favorite artists based on albums
      favoriteArtists = getFavArtistsBasedOnAlbums(userAlbums, AMOUNT_OF_ARTISTS);
    }
  };

  const getData = async () => {
    if (favoriteArtists.length === 0) {
      await fetchFavoriteArtists();
    }

    const randomArtistIndex = getRandom(favoriteArtists.length);
    const randomArtist = favoriteArtists[randomArtistIndex];

    let artistAlbums = await getAlbumsFromArtist(randomArtist.id);

    artistAlbums = artistAlbums.items;
    const randomAlbumIndex = getRandom(artistAlbums.length);

    const tempArray = albums;
    tempArray.push(artistAlbums[randomAlbumIndex]);
    albums = [...tempArray];
  };

  const loadAlbums = () => {
    for (let i = 0; i < AMOUNT_OF_ALBUMS_TO_FETCH; i++) {
      getData();
    }
  };

  $: if (userAlbums.length !== 0) {
    loadAlbums();
  }
</script>

<HorizontalList {title} loadMore={loadAlbums} {albums} />
