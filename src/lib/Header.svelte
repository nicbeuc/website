<script>
	import Logo from '$lib/Logo.svelte';
</script>

<header class="page-width">
	<a href="/">
		<Logo />
	</a>
</header>

<style>
	header {
		view-transition-name: header;
		position: fixed;
		top: 2rem;
		left: 0;
		right: 0;
		margin-inline: auto;
		z-index: 1000;
	}
	a[href='/'] {
		cursor: w-resize;
	}
</style>
