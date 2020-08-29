<script>
  import {
    getAlbumsFromArtist,
    getRelatedArtists,
    getAlbumsFromUser
  } from "../lib/fetchSpotify.js";
  import Authorize from './Authorize.svelte'
  import OnAlbums from './lists/OnAlbums.svelte'
  import OnFavoriteArtists from './lists/OnFavoriteArtists.svelte'
  import OnRecentArtists from './lists/OnRecentFavoriteArtists.svelte'

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
    <OnFavoriteArtists />
    <OnAlbums userAlbums={userAlbums}/>
    <OnRecentArtists />
  {/if}
{/if}





