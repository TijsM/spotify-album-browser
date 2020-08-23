<script>
  import { onMount, afterUpdate } from "svelte";
  export let albumData;
  export let loaded;

  afterUpdate(() => {
    console.log("after update name:", albumData);
  });

  console.log("loaded", loaded);
  console.log("albumData", albumData);
</script>

<!-- loaded: {loaded} -->

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
    width: 80%;
    max-width: 400px;
    margin: auto;
  }

  img {
    width: 100%;
  }

  .album{
    font-size: 1.4em;
    font-weight: bold;
  }
  .artist{
    opacity: 0.8;
  }
  .albumContainer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
</style>
