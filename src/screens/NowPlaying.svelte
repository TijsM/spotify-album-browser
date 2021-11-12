<script>
  import { getNowPlaying } from "../lib/fetchSpotify";

  let data;

  const loadGetNowPlaying = async () => {
    const playingData = await getNowPlaying();
    const album = {
      album: playingData.item.album,
      name: playingData.item.name,
      artists: playingData.artists,
    };

    data = album;
    console.log(JSON.stringify(album));
  };

  const getArtistString = (artists) => {
    let res = "";
    console.log("arts", artists);
    artists.forEach((artist) => {
      if (res !== "") {
        res = res.concat(", ");
      }
      res = res.concat(artist.name);
    });

    return res;
  };

  loadGetNowPlaying();
</script>

{#if data}
  <div class="container">
    <img class="album" src={data.album.images[0].url} alt="Italian Trulli" />
    <p class="artist">{getArtistString(data.album.artists)}</p>
    <p class="artist">{data.name}</p>
  </div>
{:else}
  loading{/if}

<style>
  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .album {
    height: 60%;
  }

  .artist {
    color: white;
  }
</style>
