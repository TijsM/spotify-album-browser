<script>
  import {
    getAlbumsFromArtist,
    getRelatedArtists,
    getAlbumsFromUser
  } from "../../lib/fetchSpotify.js";
  import HorizontalList from '../HorizontalList.svelte'

  export let userAlbums

  let randomSelectionOfAlbums = []
  let relatedArtists;

  const getData = async() => {
    const randomAlbumIndex = Math.floor(Math.random()*userAlbums.length)
    relatedArtists = await getRelatedArtists(userAlbums[randomAlbumIndex].artists[0].id);
    const randomRelatedArtistIndex = Math.floor(Math.random()*relatedArtists.artists.length)

    getAlbumsFromArtist(relatedArtists.artists[randomRelatedArtistIndex].id).then((relAlbum) => {
      const randomAlbumIndex = Math.floor(Math.random() * relAlbum.items.length)

      const tempArray = randomSelectionOfAlbums;
      tempArray.push(relAlbum.items[randomAlbumIndex])
      randomSelectionOfAlbums = [...tempArray]
    });
  }

  const fetch10Albums = () => {
    for (let i = 0; i < 10; i++) {
      getData();
    }
  }

  fetch10Albums()
</script>


<HorizontalList title="test" loadMore={fetch10Albums} albums={randomSelectionOfAlbums}/>