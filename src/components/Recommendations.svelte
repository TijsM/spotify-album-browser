<script>
  console.log('d')
  const token = localStorage.getItem("bearer-token");
  const albums = JSON.parse(localStorage.getItem("albums"));

  const getRelatedArtists = async (artistId) => {
    const artistData = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}/related-artists`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    const data = await artistData.json();
    console.log("data", data);
  };

  getRelatedArtists(albums[0].artists[0].id)
</script>

hi!
