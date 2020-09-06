<script>
  import { onMount } from "svelte";
  import {
    getAlbumsFromArtist,
    getRelatedArtists,
    getAlbumsFromUser,
  } from "../lib/fetchSpotify.js";
  import { scrollFullPage } from "../lib/scroll";
  import Authorize from "./Authorize.svelte";
  import OnAlbums from "./lists/OnAlbums.svelte";
  import OnFavoriteArtists from "./lists/OnFavoriteArtists.svelte";
  import OnGenre from "./lists/OnGenre.svelte";

  let isDiscconnected = false;
  let userAlbums = [];

  onMount(() => {
    scrollFullPage();
  });

  const getUserAlbums = async () => {
    const _albums = await getAlbumsFromUser();
    if (_albums === null) {
      isDiscconnected = true;
    }
    userAlbums = [..._albums];
  };

  getUserAlbums();
</script>

{#if isDiscconnected}
  <Authorize />
{:else}
  <OnGenre />
  <OnFavoriteArtists title="Based on your _favorite artists_" {userAlbums} />
  <OnAlbums {userAlbums} />
  <OnFavoriteArtists
    title="Based on your _recent history_"
    period="short_term"
    {userAlbums} />
  <OnFavoriteArtists
    title="Based on your _all time_ favorites"
    period="long_term"
    {userAlbums} />
{/if}
