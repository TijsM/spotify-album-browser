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

  setInterval(() => {
    loadGetNowPlaying();
  }, 2500);
</script>

{#if data}
  <div class="np-container --bgImage: {data.album.images[0].url}">
    <div class="np-albumContainer">
      <img class="np-album" src={data.album.images[0].url} alt="album cover" />
      <p class="np-albumName">{data.album.name}</p>
    </div>
    <div class="np-data">
      <p class="np-artist">{getArtistString(data.album.artists)}</p>
      <p class="np-track">{data.name}</p>
    </div>
  </div>
  <img class="np-bgImage" src={data.album.images[0].url} alt="background" />
{:else}
  loading{/if}

<style>
  .np-bgImage {
    position: absolute;
    width: 100vw;
    height: 100vh;

    filter: blur(16px) brightness(25%);
  }
  .np-container {
    position: absolute;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
  }
  .np-data {
    display: flex;
    flex-direction: column;
  }
  .np-albumContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .np-album {
    height: 50%;
  }
  .np-albumName {
    color: white;
    flex-shrink: 0;
    font-size: 2em;
    text-align: left;
    margin: 8px;
    margin-top: 7vh;
    font-weight: bold;
  }

  .np-track {
    color: white;
    flex-shrink: 0;
    font-size: 4em;
    text-align: left;
    margin: 8px;
    font-weight: bold;
  }
  .np-artist {
    color: white;
    flex-shrink: 0;
    font-size: 3em;
    text-align: left;
    margin: 8px;
    font-weight: bold;
  }
</style>
