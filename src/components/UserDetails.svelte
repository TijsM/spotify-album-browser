<script>
  const token = localStorage.getItem('bearer-token')
  const getUserData = async () => {
    const userData = await fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((res) => {
      console.log("result", res);
      console.log('body', res.body)
      return res.json()
    })
    .then(data => {
      console.log('data', data)
      localStorage.setItem('user-name', data.display_name)
    })
    .catch(err => {
      // localStorage.removeItem('bearer-token')
      console.log("in error", err)
    });
  };

  getUserData();
</script>
