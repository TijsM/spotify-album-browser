<script>
  import {
    getAlbumsFromArtist,
    getRelatedArtists,
    getAlbumsFromUser
  } from "../lib/fetchSpotify.js";
  import Authorize from './Authorize.svelte'
  import OnAlbums from './lists/OnAlbums.svelte'

  let relatedArtists;
  let userAlbums;

  let isDiscconnected = false;

  let randomSelectionOfAlbums = []

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
  {/if}
{/if}


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



