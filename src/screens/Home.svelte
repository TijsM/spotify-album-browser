<script>
  import AppTitle from "../components/Header.svelte";
  import Authorize from "../components/Authorize.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<main>
  {#if !localStorage.getItem("bearer-token")}
    <Authorize />
  {:else}
    <AppTitle />

    <Footer />
  {/if}
</main>
