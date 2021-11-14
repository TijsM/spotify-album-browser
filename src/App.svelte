<script>
  import { Router, Route } from "svelte-routing";

  import Home from "./screens/Home.svelte";
  import NowPlaying from "./screens/NowPlaying.svelte";
  import Recommendations from "./screens/Recommendations.svelte";

  import LogRocket from "logrocket";

  LogRocket.init("tbbppt/spotify-album-browser");

  export let url = "";
</script>

<Router {url}>
  <Route path="now-playing" component={NowPlaying} />
  <Route path="recommendations" component={Recommendations} />
  <Route path="/" component={Home} />
</Router>

<style>
</style>
