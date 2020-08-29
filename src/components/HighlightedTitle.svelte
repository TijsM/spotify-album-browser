<script>
  export let title;

  const titleArray = title.split("_");
  const htmlString = titleArray
    .map((part, index) => {
      if (index === 1) {
        return `<span class='highlighted'> ${part} </span>`;
      }
      return part;
    })
    .join("");
</script>

<h2>{@html htmlString}</h2>

<style>
  h2 {
    text-align: left;
    color: white;
    margin-top: 50px;
    margin-bottom: 0px;
    margin-left: 16px;
    font-size: 2em;
  }

  :global(.highlighted) {
    background-color: #1db954;
  }
</style>
