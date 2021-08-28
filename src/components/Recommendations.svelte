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
  import OnMostSavedArtists from "./lists/OnMostSavedArtists.svelte";
  import OnRecentReleases from "./lists/OnRecentReleases.svelte";
  import OnGenre from "./lists/OnGenre.svelte";
  import NoAlbumsFound from "./NoAlbumsFound.svelte";

  let isDiscconnected = false;
  let userAlbums = [];

  let albumsLoaded = false;

  onMount(() => {
    scrollFullPage();
  });

  const getUserAlbums = async () => {
    const _albums = await getAlbumsFromUser();
    if (_albums === null) {
      isDiscconnected = true;
    }
    userAlbums = [..._albums];
    albumsLoaded = true;
  };

  getUserAlbums();
</script>

{#if isDiscconnected}
  <Authorize />
{:else}
  <!-- check if albums are loaded, and there are actually albums in the array -->
  {#if albumsLoaded && !(!userAlbums || userAlbums.length > 0)}
    <NoAlbumsFound />
  {:else}
    <OnGenre />
    <OnRecentReleases />
    <OnFavoriteArtists title="Based on your _favorite artists_" {userAlbums} />
    <OnAlbums {userAlbums} />
    <OnMostSavedArtists {userAlbums} />
    <OnFavoriteArtists
      title="Based on your _recent history_"
      period="short_term"
      {userAlbums}
    />
    <OnFavoriteArtists
      title="Based on your _all time_ favorites"
      period="long_term"
      {userAlbums}
    />
  {/if}
{/if}
