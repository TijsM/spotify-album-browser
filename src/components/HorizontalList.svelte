<script>
  import Album from "./Album.svelte";
  import LoadMore from "./LoadMore.svelte";

  export let title;
  export let albums;
  export let loadMore;
</script>


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
    margin-top: 40px;
    max-width: 98vw;
  }
</style>