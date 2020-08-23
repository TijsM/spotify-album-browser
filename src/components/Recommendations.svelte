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

  const AMOUNT_OF_FETCHED_RELATED_ARTISTS = 20

  const RandomSelectionOfAlbums = []

  const getData = async () => {
    const _albums = await getAlbumsFromUser();
    albums = [..._albums];

    const randomAlbumIndex = Math.floor(Math.random()*albums.length)
    relatedArtists = await getRelatedArtists(albums[randomAlbumIndex].artists[0].id);
    const randomRelatedArtistIndex = Math.floor(Math.random()*relatedArtists.artists.length)

    getAlbumsFromArtist(relatedArtists.artists[randomRelatedArtistIndex].id).then((relAlbum) => {
      relatedAlbum = relatedAlbum
      console.log('relalbum', relAlbum)

      A_RANDOM_ALBUM = relAlbum.items[1]
    });
  };




  getData();



</script>



<Album albumData={A_RANDOM_ALBUM} loaded={LOADED}/>




