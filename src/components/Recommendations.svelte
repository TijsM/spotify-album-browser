<script>
  import {
    getAnAlbumFromAnArtist,
    getRelatedArtists,
  } from "../lib/fetchSpotify.js";

  const token = localStorage.getItem("bearer-token");
  const albums = JSON.parse(localStorage.getItem("albums"));
  let relatedArtists;

  const getData = async () => {
    relatedArtists = await getRelatedArtists(albums[2].artists[0].id);
    getAnAlbumFromAnArtist(relatedArtists.artists[0].id).then((res) => {
      //TODO: store somewhere
      // console.log("relAlbum", res);
    });
  };

  getData();
</script>

hi!
