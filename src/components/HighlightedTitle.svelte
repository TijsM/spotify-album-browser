<script>
  import Annotation from "svelte-rough-notation";
  import { onMount } from "svelte";

  export let title;

  let rn;
  let visible = false;
  onMount(() => {
    setTimeout(() => {
      visible = true;
    }, 1000);
  });
</script>


<h2>
  {#each title.split("_") as part, i} {#if i === 1}
  <span>
    <Annotation
      bind:visible
      bind:this="{rn}"
      color="#1DB954"
      type="highlight"
      padding="{2}"
    >
      {part}
    </Annotation>
  </span>
  {:else} {part} {/if} {/each}
</h2>

<style>
  h2 {
    text-align: left;
    color: white;
    margin-top: 50px;
    margin-bottom: 0px;
    margin-left: 16px;
    font-size: 2em;
  }

  :global(.highlighted) {
    background-color: #1db954;
  }
</style>
