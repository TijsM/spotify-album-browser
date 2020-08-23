<script>
  const token = localStorage.getItem('bearer-token')
  const getUserData = async () => {
    const userData = await fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((res) => {
      return res.json()
    })
    .then(data => {
      localStorage.setItem('user-name', data.display_name)
    })
    .catch(err => {
      console.log("in error", err)
    });
  };

  getUserData();
</script>


Welcome {localStorage.getItem('user-name')}
<br>