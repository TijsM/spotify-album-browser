<script>
  import { Router, Route } from "svelte-routing";

  import Home from "./screens/Home.svelte";
  import NowPlaying from "./screens/NowPlaying.svelte";

  import LogRocket from "logrocket";

  LogRocket.init("tbbppt/spotify-album-browser");

  export let url = "";
</script>

<Router {url}>
  <Route path="now-playing" component={NowPlaying} />
  <Route path="/" component={Home} />
</Router>

<style>
  :global(body) {
    padding: 0px;
    height: 100vh;
    width: 98vw;
    box-sizing: border-box;
    background-color: #191414;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  :global(div) {
    color: white;
  }

  main {
    text-align: center;
    background-color: #191414;
  }

  :global(.conversationalContainer) {
    text-align: left;
    margin-left: 16px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  :global(.conversationalHeader) {
    flex-grow: 0;
    color: #1db954;
    font-size: 6em;
    margin-bottom: 100px;
  }
  :global(.conversationalContent) {
    flex-shrink: 0;
    font-size: 4em;
    text-align: left;
    max-width: 60%;
  }

  @media screen and (max-width: 1000px) {
    :global(.conversationalContent) {
      max-width: 100%;
    }
  }

  @media screen and (max-width: 700px) {
    :global(.conversationalHeader) {
      font-size: 4em;
      margin-bottom: 25px;
    }

    :global(.conversationalContent) {
      font-size: 3em;
    }
  }

  @media screen and (max-width: 370px) {
    :global(.conversationalHeader) {
      font-size: 3em;
    }

    :global(.conversationalContent) {
      font-size: 2em;
    }
  }
</style>
