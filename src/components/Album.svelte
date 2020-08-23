<script>
  import { onMount, afterUpdate } from "svelte";
  export let albumData;
</script>

{#if albumData}
<div class="container">
  <img src="{albumData.images[0].url}" alt="album cover image" />
  <div class="albumContainer">
    <div class="album">
      {albumData.artists[0].name}
    </div>
    <div class="artist">
      {albumData.name}
    </div>
  </div>
</div>
{/if}

<style>
  .container {
    flex-shrink: 0;
    width: 80%;
    width: 500px;
    margin: auto;
    margin: 25px;
  }

  img {
    width: 100%;
    margin-bottom: 15px;
  }

  .album {
    font-size: 1.4em;
    font-weight: bold;
  }
  .artist {
    opacity: 0.8;
  }
  .albumContainer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
</style>
