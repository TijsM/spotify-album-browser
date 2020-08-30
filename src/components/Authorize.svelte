<script>
  const SPOTIFY_CLIENT_ID = "4b712dd1511c4e6381691f9f9a994254";
  const authorize_link = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${window.location.href}&scope=user-top-read%20user-read-private%20user-read-email%20user-library-read`;

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

<style>
  .spotifyButton {
    display: block;
    background-color: #1db954;
    border-radius: 50px;
    color: white;
    text-decoration: none;
    font-size: 2.5em;
    margin-top: 100px;
    padding: 25px;
    width: 450px;
    text-align: center;
  }
</style>

<div class="conversationalContainer">
  <div class="conversationalHeader">Let's log in with Spotify</div>

  <div class="conversationalContent">
    We do need access to your spotify account to provide you with personal
    recommendations.
  </div>
  <a href={authorize_link} class="spotifyButton">Log in with spotify</a>
</div>
