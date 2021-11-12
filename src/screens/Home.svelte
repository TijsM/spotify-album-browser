<script>
  import AppTitle from "../components/Header.svelte";
  import Authorize from "../components/Authorize.svelte";
  import Recommendations from "../components/Recommendations.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<main>
  <AppTitle />

  {#if !localStorage.getItem("bearer-token")}
    <Authorize />
  {:else}
    <!-- <Recommendations /> -->
    <Footer />
  {/if}
</main>
