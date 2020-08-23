<script>
	import AppTitle from './components/Header.svelte'
	import Albums from './components/Albums.svelte'
	import Authorize from './components/Authorize.svelte'
	import UserProfile from './components/userDetails.svelte'
	import Recommendations from './components/recommendations.svelte'

</script>
<main>
<AppTitle/>

{#if localStorage.getItem('bearer-token')}
<div>Your are signed in!</div>

{:else}
<Authorize/>
{/if}

<UserProfile/>
<Albums/>
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