<script>
  import {
    getAlbumsFromArtist,
    getRelatedArtists,
    getAlbumsFromUser,
  } from "../lib/fetchSpotify.js";
  import Authorize from "./Authorize.svelte";
  import OnAlbums from "./lists/OnAlbums.svelte";
  import OnFavoriteArtists from "./lists/OnFavoriteArtists.svelte";
  import OnGenre from "./lists/OnGenre.svelte";

  let isDiscconnected = false;
</script>

{#if isDiscconnected && localStorage.getItem('bearer-token')}
  <Authorize />
{:else}

  <OnGenre />
  <OnFavoriteArtists title="Based on your _favorite artists_" />
  <OnAlbums />
  <OnFavoriteArtists
    title="Based on your _recent history_"
    period="short_term" />
  <OnFavoriteArtists
    title="Based on your _all time_ favorites"
    period="long_term" />
{/if}
