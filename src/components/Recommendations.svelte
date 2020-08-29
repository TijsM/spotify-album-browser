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
    <OnFavoriteArtists title='Based on your _favorite artists_'  />
    <OnAlbums userAlbums={userAlbums}/>
    <OnFavoriteArtists title ='Based on your _recent history_' period='short_term'/>
  {/if}
{/if}





