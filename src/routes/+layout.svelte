<script>
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { onNavigate } from '$app/navigation';
	import { page, navigating } from '$app/stores';
	import ScrollFade from '$lib/ScrollFade.svelte';
	import Footer from '$lib/Footer.svelte';
	import { metaContent } from '$/constants';
	import '$styles/base.css';
	import SkipToContent from '$/lib/SkipToContent.svelte';
	import Header from '$/lib/Header.svelte';

	export let data;

	onNavigate((navigation) => {
		if ($navigating.to.url.pathname === $page.url.pathname || !document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	injectSpeedInsights();
</script>

<svelte:head>
	<meta property="og:image" content={metaContent.ogImage} />
</svelte:head>

<SkipToContent />
<ScrollFade />
<!-- <Header /> -->
<main id="main">
	<slot />
</main>
<Footer {data} />
<ScrollFade />

<style>
	main {
		max-width: var(--page-width);
		padding: var(--padding-inline);
		margin-inline: auto;

		@media screen and (max-width: 799px) {
			width: 100%;
			padding-bottom: 3.2rem;
			padding-top: 4.8rem;
		}
	}
</style>
