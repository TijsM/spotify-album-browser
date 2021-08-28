<script>
  import { getNewReleases } from "../../lib/fetchSpotify.js";
  import HorizontalList from "../HorizontalList.svelte";
  import { AMOUNT_OF_ALBUMS_TO_FETCH } from "../../constants.js";

  let albums = [];

  const getData = async () => {
    const newAlbumsResponse = await getNewReleases();
    const newAlbums = newAlbumsResponse.albums.items;

    albums = [...newAlbums];
  };

  const loadAlbums = async () => {
    for (let i = 0; i < AMOUNT_OF_ALBUMS_TO_FETCH; i++) {
      getData();
    }
  };

  loadAlbums();
</script>

<HorizontalList title={"New releases"} loadMore={loadAlbums} {albums} />
