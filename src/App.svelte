<script>
	import AppTitle from './components/Header.svelte'
	import Recommendations from './components/Recommendations.svelte'
</script>
<main>
	<AppTitle/>
	<Recommendations/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	 :global(h1) {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>