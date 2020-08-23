<script>
  import {
    getAlbumsFromArtist,
    getRelatedArtists,
    getAlbumsFromUser
  } from "../lib/fetchSpotify.js";
  import Album from './Album.svelte'

  let relatedArtists;
  let userAlbums;
  let A_RANDOM_ALBUM

  const AMOUNT_OF_FETCHED_RELATED_ARTISTS = 20

  let randomSelectionOfAlbums = []

  const getData = async () => {
    const _albums = await getAlbumsFromUser();
    userAlbums = [..._albums];

    const randomAlbumIndex = Math.floor(Math.random()*userAlbums.length)
    relatedArtists = await getRelatedArtists(userAlbums[randomAlbumIndex].artists[0].id);
    const randomRelatedArtistIndex = Math.floor(Math.random()*relatedArtists.artists.length)

    getAlbumsFromArtist(relatedArtists.artists[randomRelatedArtistIndex].id).then((relAlbum) => {
      const randomAlbumIndex = Math.floor(Math.random() * relAlbum.items.length)
      console.log('index', randomAlbumIndex)
      A_RANDOM_ALBUM = relAlbum.items[randomAlbumIndex]

      const tempArray = randomSelectionOfAlbums;
      tempArray.push(relAlbum.items[randomAlbumIndex])
      randomSelectionOfAlbums = [...tempArray]
      console.log('fml', randomSelectionOfAlbums)
    });
  };

  for (let i = 0; i < 10; i++) {
    getData();
  }


</script>

{#each randomSelectionOfAlbums as album}
<Album albumData={album} />
{/each}





