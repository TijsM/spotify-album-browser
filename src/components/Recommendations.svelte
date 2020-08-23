<script>
  import {
    getAnAlbumFromAnArtist,
    getRelatedArtists,
    getAlbumsFromUser
  } from "../lib/fetchSpotify.js";

  // const albums = JSON.parse(localStorage.getItem("albums"));
  let relatedArtists;
  let albums;

  const getData = async () => {
    const _albums = await getAlbumsFromUser();
    albums = [..._albums];

    relatedArtists = await getRelatedArtists(albums[2].artists[0].id);
    getAnAlbumFromAnArtist(relatedArtists.artists[0].id).then((res) => {
      //TODO: store somewhere
      console.log("related album", res);
    });
  };

  getData();
</script>

hi!
