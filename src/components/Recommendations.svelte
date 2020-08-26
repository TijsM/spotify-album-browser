<script>
  import {
    getAlbumsFromArtist,
    getRelatedArtists,
    getAlbumsFromUser
  } from "../lib/fetchSpotify.js";
  import Album from './Album.svelte'
  import Authorize from './Authorize.svelte'

  let relatedArtists;
  let userAlbums;
  let A_RANDOM_ALBUM

  let isDiscconnected = false;

  const AMOUNT_OF_FETCHED_RELATED_ARTISTS = 20

  let randomSelectionOfAlbums = []

  const getData = async () => {
    const _albums = await getAlbumsFromUser();
    if(_albums === null){
      isDiscconnected = true
    }
    userAlbums = [..._albums];

    const randomAlbumIndex = Math.floor(Math.random()*userAlbums.length)
    relatedArtists = await getRelatedArtists(userAlbums[randomAlbumIndex].artists[0].id);
    const randomRelatedArtistIndex = Math.floor(Math.random()*relatedArtists.artists.length)

    getAlbumsFromArtist(relatedArtists.artists[randomRelatedArtistIndex].id).then((relAlbum) => {
      const randomAlbumIndex = Math.floor(Math.random() * relAlbum.items.length)
      A_RANDOM_ALBUM = relAlbum.items[randomAlbumIndex]

      const tempArray = randomSelectionOfAlbums;
      tempArray.push(relAlbum.items[randomAlbumIndex])
      randomSelectionOfAlbums = [...tempArray]
    });
  };

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

{#if isDiscconnected && localStorage.getItem('bearer-token')}
<Authorize />
{:else}
<div class="container">
  {#each randomSelectionOfAlbums as album}
  <Album albumData={album} />
  {/each}
  <div>
    <button on:click={reload}>reload</button>
  </div>
</div>
{/if}


<style>
  .container{
    display: flex;
    overflow-x: scroll;
    padding: 0px;
    margin: 0px;
    margin-top: 40px;
    max-width: 100vw;
    position: absolute;
    bottom: 50px;

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



