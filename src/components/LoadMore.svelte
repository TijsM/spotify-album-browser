<script>
  export let loadMore
</script>


<div on:click={loadMore} class="loadMoreContainer">
  <img src="images/next.svg" alt="load more albums" class="nextIcon"/>
  <div>Load more</div>
</div>

<style>
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
</style>