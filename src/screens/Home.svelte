<script>
  import AppTitle from "../components/Header.svelte";
  import Authorize from "../components/Authorize.svelte";
  import Footer from "../components/Footer.svelte";
  import { tokenIsExpired } from "../lib/tokenIsExpired";

  let expired = tokenIsExpired();
</script>

{#if expired}
  <Authorize />
{:else}
  <main>
    {#if !localStorage.getItem("bearer-token")}
      <Authorize />
    {:else}
      <AppTitle />

      <Footer />
    {/if}
  </main>
  ...
{/if}
