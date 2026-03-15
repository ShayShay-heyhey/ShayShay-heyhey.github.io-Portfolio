<script lang="ts">
	import Header from './header.svelte'
	import Footer from './footer.svelte'
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/fonts/index.css';

	let { children } = $props();

</script>
 <div class="layout">
	<Header/>

	<main>	
		{@render children()}
	</main>

	<Footer/>
 </div>

<style>

:global(html) {
	/* Hide scrollbar for WebKit browsers (Chrome, Safari, Edge) */
	scrollbar-width: none; /* Firefox */
	-ms-overflow-style: none; /* IE and Edge */
}

:global(html::-webkit-scrollbar) {
	/* Hide scrollbar for WebKit browsers */
	display: none;
}

	
	.layout{
		min-height: 100vh;
		min-height: 100dvh; 
		/* lets the body take up the whole page  */
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
	}
	

	main{
		padding-block: 1rem;
		background-color: black;
		/* flex for black bg to take up whole page  */
		flex-grow: 1; 
		overflow-x: hidden;
		font-family: 'Orbit', sans-serif;
	}
	@media (min-width: 1440px){
		.layout{
			padding-inline:0;
		}
		 
	}
</style>


<svelte:head><link rel="icon" href={favicon} /></svelte:head>
