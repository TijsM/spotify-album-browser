<script>
  import { getNowPlaying } from "../lib/fetchSpotify";
  import Authorize from "../components/Authorize.svelte";
  import { tokenIsExpired } from "../lib/tokenIsExpired";
  import { Link } from "svelte-routing";

  let data;
  let expired = false;

  const loadGetNowPlaying = async () => {
    if (tokenIsExpired()) {
      expired = true;
    } else {
      expired = false;
      const playingData = await getNowPlaying();
      const album = {
        album: playingData.item.album,
        name: playingData.item.name,
        artists: playingData.artists,
      };

      data = album;
    }
  };

  const getArtistString = (artists) => {
    let res = "";
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

{#if expired}
  <Authorize />
{:else if data}
  <div class="np-container">
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
  <div class="np-not-playing">
    <div class="conversationalContent">
      Start playing some songs from Spotify. <Link to="/recommendations">
        <button class="CTA">Start exploring here →</button></Link
      >
    </div>
  </div>
{/if}

<style>
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

  .np-bgImage {
    position: absolute;
    width: 125vw;
    height: 125vh;
    left: -12vw;
    top: -12vh;

    filter: blur(16px) brightness(25%);
    animation: pulse 50s infinite linear;
  }

  .np-not-playing {
    height: 100vh;
    display: flex;
    align-items: center;
    padding: 96px;
  }
  .CTA {
    color: white;
    text-decoration: underline;
    background-color: transparent;
    cursor: pointer;
    border: none;
    padding: 0px;
    margin-left: auto;
  }
  @keyframes pulse {
    0% {
      transform: scale(1) rotate(0deg);
    }
    25% {
      transform: scale(1.2) rotate(4deg);
    }
    50% {
      transform: scale(1) rotate(0deg);
    }
    75% {
      transform: scale(0.8) rotate(-4deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }
</style>
