<script>
  const SPOTIFY_CLIENT_ID = "4b712dd1511c4e6381691f9f9a994254";
  const authorize_link = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${window.location.href}&scope=user-library-read%20user-library-modify%20user-top-read%20user-read-playback-state`;

  if (window.location.href.split("#access_token=")[1]) {
    const bearer = window.location.href
      .split("#access_token=")[1]
      .split("&token_type")[0];

    const expires_in = parseInt(
      window.location.href.split("expires_in=")[1],
      10
    );

    const expiryDate = new Date(new Date().getTime() + expires_in * 1000);
    localStorage.setItem("bearer-token", bearer);
    localStorage.setItem("expiry-date", expiryDate);

    if (bearer) {
      window.history.pushState("", "", "/");
      window.location.reload();
    }
  }
</script>

<div class="conversationalContainer">
  <div class="conversationalHeader">Let's log in with Spotify</div>

  <div class="conversationalContent">
    We do need access to your spotify account to provide you with personal
    recommendations.
  </div>
  <a href={authorize_link} class="spotifyButton">Log in with spotify</a>
</div>

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

  @media screen and (max-width: 700px) {
    .spotifyButton {
      width: 65%;
      font-size: 1.5em;
      padding: 15px;
      margin-top: 25px;
    }
  }
</style>
