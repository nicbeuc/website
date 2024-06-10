<script>
  import Link from "$lib/Link.svelte";
  import LastUpdated from "./LastUpdated.svelte";

  export let data;
</script>

<footer class="page-width">
  {#if data}
    <LastUpdated commitData={data}/>
  {/if}
  <small><Link href="/colophon">Colophon</Link></small>
  <small class="copyright">© {new Date().getFullYear()}</small>
</footer>

<style>
  footer {
    display: block;
    margin-top: 4.8rem;
    margin-bottom: 3.2rem;
    width: 100%;

    @media screen and (min-width: 800px) {
      display: none;
    }
  }
  .copyright {
    color: var(--color-neutral-600);
  }
</style>