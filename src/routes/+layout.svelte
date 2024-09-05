<script>
  import { onNavigate } from '$app/navigation';
  import { page, navigating } from '$app/stores';
  import Navbar from "$lib/Navbar.svelte";
  import ScrollFade from '$lib/ScrollFade.svelte';
  import MobileNav from '$lib/MobileNav.svelte';
	import Footer from '$lib/Footer.svelte';
  import ogImage from '$images/og-image.jpg';
  import '$styles/base.css';

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
</script>

<svelte:head>
  <meta property="og:image" content={ogImage} />
</svelte:head>

<div class="wrapper">
  <ScrollFade />
  <Navbar {data}/>
  <main>
    <slot />
  </main>
  <MobileNav/>
  <Footer {data}/>
  <ScrollFade />
</div>

<style>
  .wrapper {
    --max-width: var(--page-width);
    --navbar-width: 30rem;
    max-width: var(--max-width);
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    width: 100%;
    margin-inline: auto;

    @media screen and (max-width: 799px) {
      flex-direction: column;
      justify-content: space-between;
      min-height: 100vh;
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
  }

  @keyframes fade-out {
    to {
      opacity: 0;
    }
  }

  @keyframes slide-down {
    from {
      transform: translateY(20px);
    }
  }

  @keyframes slide-up {
    to {
      transform: translateY(-20px);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    :root::view-transition-old(root) {
      animation: 100ms cubic-bezier(0.4, 0, 1, 1) both fade-out, 350ms cubic-bezier(0.370, 0.265, 0.025, 1.000) both slide-up;
    }

    :root::view-transition-new(root) {
      animation: 250ms cubic-bezier(0, 0, 0.2, 1) 100ms both fade-in, 350ms cubic-bezier(0.370, 0.265, 0.025, 1.000) both
          slide-down;
    }
  }
</style>