<script>
  console.log("d");
  const token = localStorage.getItem("bearer-token");
  const albums = JSON.parse(localStorage.getItem("albums"));
  let relatedArtists;

  const getRelatedArtists = async (artistId) => {
    const artistData = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}/related-artists`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    relatedArtists = await artistData.json();
    console.log("relatedArtists", relatedArtists);
  };

  const getAnAlbumFromAnArtist = async (artistId) => {
    console.log('here')
    const artistData = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}/albums`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

      
    console.log("a related artist", await artistData.json());
  };

  getRelatedArtists(albums[2].artists[0].id).then(er => {
    getAnAlbumFromAnArtist(relatedArtists.artists[0].id);
  });

</script>

hi!
