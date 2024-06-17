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
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas:
      "lastupdated lastupdated"
      "links copyright";
    align-items: center;
    margin-top: 4.8rem;
    margin-bottom: 3.2rem;
    width: 100%;

    @media screen and (min-width: 800px) {
      display: none;
    }

    & *:first-child {
      grid-area: lastupdated;
    }

    & *:nth-child(2) {
      grid-area: links;
    }

    & *:nth-child(3) {
      grid-area: copyright;
      justify-self: end;
    }
  }
  .copyright {
    color: var(--color-neutral-600);
  }
</style>