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
      A_RANDOM_ALBUM = relAlbum.items[randomAlbumIndex]

      const tempArray = randomSelectionOfAlbums;
      tempArray.push(relAlbum.items[randomAlbumIndex])
      console.log(tempArray)
      randomSelectionOfAlbums = [...tempArray]
    });
  };

  for (let i = 0; i < 10; i++) {
    getData();
  }

</script>

<div class="container">
  {#each randomSelectionOfAlbums as album}
  <Album albumData={album} />
  {/each}
</div>


<style>
  .container{
    display: flex;
    overflow-x: scroll;
    padding: 0px;
    margin: 0px;
    margin-top: 40px;
  }

  /* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #00000000;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(136, 136, 136, 0.325);
  border-radius: 10px;

}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(223, 218, 218);
}

</style>



