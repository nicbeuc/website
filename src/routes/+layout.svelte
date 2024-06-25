<script>
  import '../styles/base.css';
  import Navbar from "$lib/Navbar.svelte";
  import ScrollFade from '$lib/ScrollFade.svelte';
  import MobileNav from '$lib/MobileNav.svelte';
	import Footer from '$lib/Footer.svelte';

  export let data;
</script>

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
    --navbar-width: 32rem;
    max-width: var(--max-width);
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    width: 100%;
    margin-inline: auto;

    @media screen and (max-width: 799px) {
      flex-direction: column;
      min-height: 100vh;
    }
  }
</style>