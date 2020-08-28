<script>
  import {
    getAlbumsFromArtist,
    getRelatedArtists,
    getAlbumsFromUser
  } from "../../lib/fetchSpotify.js";
  import Album from '../Album.svelte'

  export let userAlbums

  let randomSelectionOfAlbums = []
  let relatedArtists;

  const getData = async() => {
    const randomAlbumIndex = Math.floor(Math.random()*userAlbums.length)
    relatedArtists = await getRelatedArtists(userAlbums[randomAlbumIndex].artists[0].id);
    const randomRelatedArtistIndex = Math.floor(Math.random()*relatedArtists.artists.length)

    getAlbumsFromArtist(relatedArtists.artists[randomRelatedArtistIndex].id).then((relAlbum) => {
      const randomAlbumIndex = Math.floor(Math.random() * relAlbum.items.length)

      const tempArray = randomSelectionOfAlbums;
      tempArray.push(relAlbum.items[randomAlbumIndex])
      randomSelectionOfAlbums = [...tempArray]
    });
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

<div class="horizontalList">
  {#each randomSelectionOfAlbums as album}
  <Album albumData={album} />
  {/each}
  <div on:click={reload} class="loadMoreContainer">
    <img src="images/next.svg" alt="load more albums" class="nextIcon"/>
    <div>Load more</div>
  </div>
</div>

<style>

</style>

