<script>
	import AppTitle from './components/Header.svelte'
	import Authorize from './components/Authorize.svelte'
	import Recommendations from './components/Recommendations.svelte'

</script> 
<main>
<AppTitle/>

{#if !localStorage.getItem('bearer-token')}
<Authorize/>
{/if}

<Recommendations/>
</main>

<style>
	:global(body){
		padding: 0px;
		height: 100vh;
		width: 98vw;
		box-sizing: border-box;
		background-color: #191414;
		overflow: hidden;
	}
	 :global(h1) {
		color: #1DB954;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	:global(div){
		color: white;
	}

	main {
		text-align: center;

	}
</style>