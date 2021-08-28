<script>
  import { getNewReleases } from "../../lib/fetchSpotify.js";
  import HorizontalList from "../HorizontalList.svelte";
  import { AMOUNT_OF_ALBUMS_TO_FETCH } from "../../constants.js";

  let albums = [];

  const getData = async () => {
    const newAlbumsResponse = await getNewReleases();
    const newReleases = newAlbumsResponse.albums.items;
    const newAlbums = newReleases
      .filter((album) => album.album_type === "album")
      .sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
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
