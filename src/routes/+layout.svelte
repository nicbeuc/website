<script>
  import '../styles/base.css';
  import Navbar from "$lib/Navbar.svelte";
  import ScrollFade from '$lib/ScrollFade.svelte';

  export let data;
</script>

<div class="wrapper">
  <ScrollFade />
  <Navbar commitData={data}/>
  <main class="page-width">
    <slot />
  </main>
  <ScrollFade />
</div>

<style>
  .wrapper {
    --max-width: var(--page-width);
    --navbar-width: 36rem;
    max-width: var(--max-width);
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    width: 100%;
    margin-inline: auto;

    @media screen and (max-width: 799px) {
      flex-direction: column;
    }
  }
</style>