<script>
  import Album from "./Album.svelte";
  import LoadMore from "./LoadMore.svelte";
  import HighlightedTitle from "./HighlightedTitle.svelte";

  export let title;
  export let albums;
  export let loadMore;
</script>

<HighlightedTitle {title}/>
<div class="horizontalList">
  {#each albums as album}
    <Album albumData={album} />
  {/each}

  <LoadMore loadMore={loadMore}/>
</div>

<style>
  .horizontalList{
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
  ::-webkit-scrollbar-track{
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