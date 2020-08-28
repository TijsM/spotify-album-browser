<script>
  import {
    getFavoriteArtists
  } from "../../lib/fetchSpotify.js";
  import Album from '../Album.svelte'

  export let userAlbums

  let favoriteArtists = []
  let albums

  const getData = async () => {
    //should load only 1 time
    favoriteArtists = await getFavoriteArtists(10);
  }


  const fetch10Albums = () => {
    for (let i = 0; i < 10; i++) {
      getData();
    }
  }

  const reload = () => {
    fetch10Albums()
  }

  fetch10Albums()

</script>

{  console.log('favs',favoriteArtists)}