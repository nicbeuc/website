<script>
	import Logo from '$lib/Logo.svelte';
</script>

<header>
	<nav class="wrapper">
		<ul>
			<li>
				<a href="/" class="logo">
					<span class="sr-only">Home</span>
					<Logo />
				</a>
			</li>
			<li>
				<a href="#" class="nav-item">Info</a>
			</li>
			<li>
				<a href="#" class="nav-item">Work</a>
			</li>
			<li>
				<a href="#" class="nav-item">About</a>
			</li>
			<li>
				<a href="#" class="nav-item">Lab</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		--logo-size: 1.25rem;
		--logo-color: var(--color-neutral-700);
		view-transition-name: header;
		position: fixed;
		left: 0;
		right: 0;
		margin-inline: auto;
		z-index: 1000;
	}

	.wrapper {
		width: fit-content;
		margin-inline: auto;
		max-width: 20rem;
		margin-top: 1rem;
		padding: 0.75rem 1.25rem;
		border: 1px solid rgba(255, 255, 255, 0.75);
		background-color: rgba(255, 255, 255, 0.25);
		backdrop-filter: blur(8px);
		border-radius: 100vw;
	}

	.logo {
		display: block;
		position: relative;
		margin-right: 0.75rem;
		padding-right: 1.5rem;
	}

	.logo::after {
		content: '';
		position: absolute;
		height: calc(100% + 0.5rem);
		bottom: -0.25rem;
		top: -0.25rem;
		right: 0;
		width: 1px;
		background: linear-gradient(to top, transparent, var(--color-neutral-300) 30% 70%, transparent);
	}

	.wrapper ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		align-items: center;
	}

	.nav-item {
		display: block;
		text-decoration: none;
		padding-inline: 0.5rem;
		font-size: 0.85rem;
		font-weight: 300;
		letter-spacing: -0.025ch;
		line-height: 1;
		color: var(--color-neutral-700);
	}
</style>
