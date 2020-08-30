<style>
  .container {
    text-align: left;
    margin-left: 16px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .hi{
    flex-grow: 0;
    color: #1DB954;
    font-size: 6em;
    margin-bottom: 100px;
  }
  .content {
    flex-shrink: 0;
    font-size: 4em;
    text-align: left;
    max-width: 60%;
  }

  a{
    color: white;
    text-decoration: underline;
  }
</style>

<div class='container'>
  <div class="hi">Hi there!</div>
  <div class="content">
    By taking a look at your saved albums and your listening history we will
    suggest some alternatives. <a href="/">Let's go!</a>
  </div>
</div>
