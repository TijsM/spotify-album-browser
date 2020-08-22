<script>
  const authorize_link = `https://accounts.spotify.com/authorize?client_id=${__myapp.env.SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=http://localhost:5000/&scope=user-read-private%20user-read-email`;

  const params = new URLSearchParams(window.location.href);
  if (window.location.href.split("#access_token=")[1]) {
    const bearer = window.location.href
      .split("#access_token=")[1]
      .split("&token_type")[0];
    localStorage.setItem("bearer-token", bearer);
    if (bearer) {
      window.history.pushState("", "", "/");
    }
  }
</script>
<hr />

{#if localStorage.getItem('bearer-token')}
<div>Your are signed in!</div>

{:else}
<a href="{authorize_link}">authenticate with spotify</a>
{/if}
