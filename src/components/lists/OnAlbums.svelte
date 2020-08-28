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

<div class="container">
  {#each randomSelectionOfAlbums as album}
  <Album albumData={album} />
  {/each}
  <div on:click={reload} class="loadMoreContainer">
    <img src="images/next.svg" alt="load more albums" class="nextIcon"/>
    <div>Load more</div>
  </div>
</div>

<style>
  .container{
    box-sizing: border-box;
    display: flex;
    overflow-x: scroll;
    padding: 0px;
    margin: 0px;
    margin-top: 40px;
    max-width: 98vw;

  }

  .loadMoreContainer{
    box-sizing: border-box;
    height: 200px;
    min-width: 200px;
    margin-left: 25px;
    margin-right: 8px;
    margin: 75px 8px 0px 25px; /*top right bottom left */
    border-radius: 100%;
    border: 1px solid #ffffff;
    padding: 40px;
    cursor: pointer;
  }

  .nextIcon{
    width: 80px;
  }

  /* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #00000000;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(136, 136, 136, 0.325);
  border-radius: 10px;

}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(223, 218, 218);
}

</style>

