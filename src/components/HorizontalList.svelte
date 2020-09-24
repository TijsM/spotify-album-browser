<script>
  import Album from "./Album.svelte";
  import LoadAlbum from "./AlbumLoading.svelte";
  import LoadMore from "./LoadMore.svelte";
  import HighlightedTitle from "./HighlightedTitle.svelte";
  import { AMOUNT_OF_ALBUMS_TO_FETCH } from "../constants.js";

  export let title;
  export let albums;
  export let loadMore;
</script>

<style>
  .horizontalList {
    box-sizing: border-box;
    display: flex;
    overflow-x: scroll;
    padding: 0px;
    margin: 0px;
    margin-top: 20px;
    margin-bottom: 100px;
    max-width: 98vw;
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
    background: #00000000;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #00000000;
  }

  @media screen and (min-width: 800px) {
    ::-webkit-scrollbar-thumb {
      background: #84848443;
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #848484;
    }
  }
</style>

<HighlightedTitle {title} />
<div class="horizontalList">
  {#if AMOUNT_OF_ALBUMS_TO_FETCH <= albums.length}
    {#each albums as album}
      <Album albumData={album} />
    {/each}
    <LoadMore {loadMore} />
  {:else}
    {#each Array(AMOUNT_OF_ALBUMS_TO_FETCH) as unused}
      <LoadAlbum />
    {/each}
  {/if}
</div>
