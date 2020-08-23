<script>
  const authorize_link = `https://accounts.spotify.com/authorize?client_id=${__myapp.env.SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=http://localhost:5000/&scope=user-read-private%20user-read-email%20user-library-read`;

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


<div>
  <a href="{authorize_link}">Log in with spotify</a>
</div>

<style>
  div{
    background-color: #1DB954;
    padding: 10px;
    max-width: 300px;
    margin: auto;
    border-radius: 25px;
  }
  a {
    color: white;
    text-decoration: none;

  }
</style>
