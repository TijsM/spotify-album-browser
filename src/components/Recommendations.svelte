<script>
  import {
    getAlbumsFromArtist,
    getRelatedArtists,
    getAlbumsFromUser
  } from "../lib/fetchSpotify.js";
  import Album from './Album.svelte'

  let relatedArtists;
  let albums;
  let relatedAlbum

  let A_RANDOM_ALBUM
  let LOADED = false

  const getData = async () => {
    const _albums = await getAlbumsFromUser();
    albums = [..._albums];

    relatedArtists = await getRelatedArtists(albums[2].artists[0].id);
    getAlbumsFromArtist(relatedArtists.artists[0].id).then((relAlbum) => {
      relatedAlbum = relatedAlbum
      console.log('relalbum', relAlbum)

      A_RANDOM_ALBUM = relAlbum.items[1]
      LOADED = true
    });
  };

  getData();
</script>

<Album albumData={A_RANDOM_ALBUM} loaded={LOADED}/>




