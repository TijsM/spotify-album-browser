<script>
  import {scrollFullPage} from '../lib/scroll'
</script>

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

<div class="conversationalContainer">
  <div class="conversationalHeader">Hi there!</div>
  <div class="conversationalContent">
    By taking a look at your saved albums and your listening history we will
    suggest some alternatives.
    <button class="CTA" on:click={scrollFullPage}>Let's go →</button>
  </div>
</div>
