<script>
  export let clicked;

  const heartElement = document.getElementsByClassName("heart");

  let shouldAnimate = false;

  const onClick = () => {
    clicked();
    shouldAnimate = true;
  };
</script>

<style>
  .heart {
    cursor: pointer;
    height: 50px;
    min-width: 65px;
    background-image: url("https://abs.twimg.com/a/1446542199/img/t1/web_heart_animation.png");
    background-position: left;
    background-repeat: no-repeat;
    background-size: 2900%;
  }

  .heart:hover {
    background-position: right;
  }

  .is_animating {
    animation: heart-burst 0.8s steps(28) 1;
    animation-fill-mode: forwards;
  }


  @keyframes heart-burst {
    from {
      background-position: left;
    }
    to {
      background-position: right;
    }
  }
</style>

<div class="heart" class:is_animating={shouldAnimate} on:click={onClick} />
