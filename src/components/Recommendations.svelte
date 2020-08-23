<script>
  const token = localStorage.getItem("bearer-token");
  let total = 0;
  let fetched = 0;
  let albums = [];
  const getUserAlbums = async () => {
    const userAlbums = await fetch(
      `https://api.spotify.com/v1/me/albums??offset=${fetched}&limit=50`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const data = await userAlbums.json();

    data.items.forEach(album => {
      albums.push(album.album)
      albums = [...albums]
      console.log(album.album)
    })

    //recursivly get all albums
    fetched += 50;
    total = data.total;
    if(fetched < total){
      getUserAlbums();
    }
  };
  getUserAlbums();

</script>


<h2>
  Your Albums
</h2>

{#each albums as alb}
<div>
  title: {alb.name}
  artist: {alb.artists[0].name}
</div>
<hr>
{/each}

{total}
{fetched}
{albums.length}



recommendations will come here
