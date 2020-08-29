<script>
  const SPOTIFY_CLIENT_ID = "4b712dd1511c4e6381691f9f9a994254";
  const authorize_link = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${window.location.href}&scope=user-top-read%20user-read-private%20user-read-email%20user-library-read`;


  console.log(window.location.href)

  const params = new URLSearchParams(window.location.href);
  if (window.location.href.split("#access_token=")[1]) {
    const bearer = window.location.href
      .split("#access_token=")[1]
      .split("&token_type")[0];
    localStorage.setItem("bearer-token", bearer);
    if (bearer) {
      window.history.pushState("", "", "/");
      window.location.reload();
    }
  }
</script>

<a href="{authorize_link}" class="spotifyButton">
  Log in with spotify
</a>

<style>
  .spotifyButton {
    display: block;
    background-color: #1db954;
    padding: 10px;
    max-width: 300px;
    margin:  25px auto;
    border-radius: 25px;color: white;
    text-decoration: none;
  }
</style>
