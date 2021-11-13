<script>
  import { onMount } from "svelte";
  import {
    getAlbumsFromArtist,
    getRelatedArtists,
    getAlbumsFromUser,
  } from "../lib/fetchSpotify.js";
  import { scrollFullPage } from "../lib/scroll";
  import Authorize from "../components/Authorize.svelte";
  import OnAlbums from "../components/lists/OnAlbums.svelte";
  import OnFavoriteArtists from "../components/lists/OnFavoriteArtists.svelte";
  import OnMostSavedArtists from "../components/lists/OnMostSavedArtists.svelte";
  import OnRecentReleases from "../components/lists/OnRecentReleases.svelte";
  import OnGenre from "../components/lists/OnGenre.svelte";
  import NoAlbumsFound from "../components/NoAlbumsFound.svelte";
  import Footer from "../components/Footer.svelte";

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

<Footer />
