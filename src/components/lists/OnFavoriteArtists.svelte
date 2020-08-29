<script>
  import { getFavoriteArtists, getAlbumsFromArtist } from "../../lib/fetchSpotify.js";
  import { getRandom } from "../../lib/getRandom.js";
  import HorizontalList from '../HorizontalList.svelte'


  export let userAlbums;

  let favoriteArtists = [];
  let albums = [];

  const AMOUNT_OF_ARTISTS = 40

  const fetchFavoriteArtists = async () => {
    favoriteArtists = await getFavoriteArtists(40);
    favoriteArtists = favoriteArtists.items
  };

  const getData = async () => {
    if(favoriteArtists.length === 0){
      await fetchFavoriteArtists()
    }

    const randomArtistIndex = getRandom(favoriteArtists.length)
    const randomArtist = favoriteArtists[randomArtistIndex]

    let artistAlbums = await getAlbumsFromArtist(randomArtist.id)

    artistAlbums = artistAlbums.items
    const randomAlbumIndex = getRandom(artistAlbums.length)

    const tempArray = albums;
      tempArray.push(artistAlbums[randomAlbumIndex])
      albums = [...tempArray]

  };

  const fetch10Albums = () => {
    for (let i = 0; i < 10; i++) {
      getData();
    }
  };

  const reload = () => {
    fetch10Albums();
  };

  fetch10Albums();
</script>


<HorizontalList title="test _test_ test" loadMore={fetch10Albums} albums={albums}/>
