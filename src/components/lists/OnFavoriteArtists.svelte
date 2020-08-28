<script>
  import {
    getAlbumsFromArtist,
    getRelatedArtists,
    getAlbumsFromUser
  } from "../../lib/fetchSpotify.js";
  import Album from '../Album.svelte'

  export let userAlbums


  const fetch10Albums = () => {
    for (let i = 0; i < 10; i++) {
      getData();
    }
  }

  const reload = () => {
    fetch10Albums()
  }

  // fetch10Albums()

</script>