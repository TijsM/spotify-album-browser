<script>
  import { getAlbumsFromUser } from "../lib/fetchSpotify.js";
  let albums = [];

  const getData = async( ) => {
    const _albums = await getAlbumsFromUser();
    albums = [..._albums]
  }
  getData()

</script>

<h2>
  Your Albums
</h2>

{#each albums as alb}
<div>
  {alb.artists[0].name} : {alb.name}
</div>
<hr />
{/each}
