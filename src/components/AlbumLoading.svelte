<div class="container">
  <div class="imgContainer"></div>
  <div class="data">
    <div class="album"></div>
    <div class="artist"></div>
  </div>
</div>

<style>
  .container {
    flex-shrink: 0;
    max-width: 80%;
    width: 300px;
    height: 363px;
    margin: auto;
    margin: 25px;
  }

  .imgContainer {
    width: 300px;
    height: 300px;
    background-color:#2d2525; /* base color: #191414 */

  }

  .albumContainer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .album {
    width: 45%;
    height: 32px;
    margin-top: 8px;
    background-color:#2d2525;
  }

  .artist {
    width: 70%;
    height: 64px;
    margin-top: 8px;
    background-color: #2d2525;
  }
</style>
