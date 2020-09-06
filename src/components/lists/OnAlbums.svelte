<script>
  import {
    getAlbumsFromArtist,
    getRelatedArtists,
    getAlbumsFromUser,
  } from "../../lib/fetchSpotify.js";
  import { getRandom } from "../../lib/getRandom.js";
  import { AMOUNT_OF_ALBUMS_TO_FETCH } from "../../constants.js";
  import HorizontalList from "../HorizontalList.svelte";

  export let userAlbums;

  let randomSelectionOfAlbums = [];
  let relatedArtists;

  const getData = async () => {
    const randomAlbumIndex = getRandom(userAlbums.length);
    relatedArtists = await getRelatedArtists(
      userAlbums[randomAlbumIndex].artists[0].id
    );
    const randomRelatedArtistIndex = Math.floor(
      Math.random() * relatedArtists.artists.length
    );

    getAlbumsFromArtist(
      relatedArtists.artists[randomRelatedArtistIndex].id
    ).then((relAlbum) => {
      const randomAlbumIndex = getRandom(relAlbum.items.length);

      const tempArray = randomSelectionOfAlbums;
      tempArray.push(relAlbum.items[randomAlbumIndex]);
      randomSelectionOfAlbums = [...tempArray];
    });
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
  title="Based on your _saved albums_"
  loadMore={loadAlbums}
  albums={randomSelectionOfAlbums} />
