<script>
  import { getFavArtistsBasedOnAlbums } from "../../lib/getFavoriteArtists";
  import { getAlbumsFromArtist } from "../../lib/fetchSpotify";
  import { getRandom } from "../../lib/getRandom.js";
  import HorizontalList from "../HorizontalList.svelte";
  import { AMOUNT_OF_ALBUMS_TO_FETCH } from "../../constants.js";

  export let userAlbums;

  const TOP_X_ARTISTS = 25;

  let selectedAlbums = [];

  //prevent a million re-renders
  const getFavArtists = () => {
    return getFavArtistsBasedOnAlbums(userAlbums, TOP_X_ARTISTS);
  }

  const getData = async () => {
    const favArtists = getFavArtists()
    const randomArtist = favArtists[getRandom(TOP_X_ARTISTS)]?.id;
    let albums = await getAlbumsFromArtist(randomArtist);
    albums = albums.items;
    const album = albums[getRandom(albums.length)]

    const tempArray = selectedAlbums;
    tempArray.push(album);
    selectedAlbums = [...tempArray];
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

<HorizontalList
  title="Based on your _most saved_ artists"
  loadMore={loadAlbums}
  albums={selectedAlbums} />
