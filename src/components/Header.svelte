<script>
  import { scrollFullPage } from "../lib/scroll";
  import { Link } from "svelte-routing";
</script>

<div class="conversationalContainer">
  <div class="conversationalHeader">Hi there!</div>
  <div class="conversationalContent">
    By taking a look at your saved albums and your listening history we will
    suggest some alternatives.
    <button class="CTA" on:click={scrollFullPage}>Let's go →</button>
  </div>
  <div class="conversationalContent">
    Want to enjoy what's playing at the moment on a big screen?
    <Link to="/now-playing">
      <button class="CTA">Let's go →</button></Link
    >
  </div>
</div>

<style>
  .CTA {
    color: white;
    text-decoration: underline;
    background-color: transparent;
    cursor: pointer;
    border: none;
    padding: 0px;
  }
</style>
