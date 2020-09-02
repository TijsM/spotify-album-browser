<script>
  import { onMount, afterUpdate } from "svelte";
  export let albumData;
</script>

<style>
  .container {
    flex-shrink: 0;
    max-width: 80%;
    width: 300px;
    max-width: 70%;
    margin: auto;
    margin: 25px;
    cursor: pointer;
  }

  img {
    width: 100%;
    margin-bottom: 15px;
  }

  .album {
    font-size: 1.4em;
    font-weight: bold;
    text-align: left;
  }
  .artist {
    text-align: left;
    opacity: 0.8;
  }
  .albumContainer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
</style>

{#if albumData}
  <div
    on:click={window.open(albumData.external_urls.spotify)}
    class="container">
    <img src={albumData.images[0].url} alt="album cover" />
    <div class="albumContainer">
      <div class="album">{albumData.artists[0].name}</div>
      <div class="artist">{albumData.name}</div>
    </div>
  </div>
{/if}
