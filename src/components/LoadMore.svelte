<script>
  export let loadMore
  console.log('loadmore', loadMore)
</script>


<div on:click={loadMore} class="loadMoreContainer">
  <img src="images/next.svg" alt="load more albums" class="nextIcon"/>
  <div>Load more</div>
</div>