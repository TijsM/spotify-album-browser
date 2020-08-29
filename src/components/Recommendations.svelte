<script>
  import {
    getAlbumsFromArtist,
    getRelatedArtists,
    getAlbumsFromUser
  } from "../lib/fetchSpotify.js";
  import Authorize from './Authorize.svelte'
  import OnAlbums from './lists/OnAlbums.svelte'
  import OnFavoriteArtists from './lists/OnFavoriteArtists.svelte'

  let userAlbums;

  let isDiscconnected = false;

  const getData = async () => {
    const _albums = await getAlbumsFromUser();
    if(_albums === null){
      isDiscconnected = true
    }
    userAlbums = [..._albums];
  };

  getData()
</script>

{#if isDiscconnected && localStorage.getItem('bearer-token')}
<Authorize />
{:else}
  {#if userAlbums}
    <OnAlbums userAlbums={userAlbums}/>
    <OnFavoriteArtists userAlbums={userAlbums}/>
  {/if}
{/if}


<style>
  :global(.nextIcon){
    width: 80px;
  }

  /* width */
  :global(::-webkit-scrollbar ){
    width: 5px;
  }

  /* Track */
  :global(::-webkit-scrollbar-track ){
    background: #00000000;
  }

  /* Handle */
  :global(::-webkit-scrollbar-thumb) {
    background: rgba(136, 136, 136, 0.325);
    border-radius: 10px;

  }

  /* Handle on hover */
  :global(::-webkit-scrollbar-thumb:hover) {
    background: rgb(223, 218, 218);
  }

</style>



