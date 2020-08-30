<script>
  import AppTitle from "./components/Header.svelte";
  import Authorize from "./components/Authorize.svelte";
  import Recommendations from "./components/Recommendations.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<style>
  :global(body) {
    padding: 0px;
    height: 100vh;
    width: 98vw;
    box-sizing: border-box;
    background-color: #191414;
    overflow-x: hidden;
  }
  :global(h1) {
    color: #1db954;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  :global(div) {
    color: white;
  }

  main {
    text-align: center;
  }
</style>

<main>
  <AppTitle />

  {#if !localStorage.getItem('bearer-token')}
    <Authorize />
  {:else}
		<Recommendations />
		<Footer />
  {/if}


</main>
