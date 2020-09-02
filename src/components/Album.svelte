<script>
  export let albumData;
  import { saveAlbum } from "../lib/fetchSpotify";
  import Like from "./Like.svelte";

  const save = (id) => {
    console.log('clicked', id)
    event.stopPropagation();
    saveAlbum(id);
  };
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

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }

  .container:active{
    background-color:transparent;
    text-decoration: none;
  }

  img {
    width: 100%;
    margin-bottom: 15px;
  }

  .meta {
    display: flex;
    justify-content: space-between;
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
    <div class="meta">
      <div class="albumContainer">
        <div class="album">{albumData.artists[0].name}</div>
        <div class="artist">{albumData.name}</div>
      </div>
      <Like
        clicked={() => {
          save(albumData.id);
        }} />
    </div>
  </div>
{/if}
