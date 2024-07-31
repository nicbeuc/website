<script>
  import Link from "$lib/Link.svelte";
  import LastUpdated from "$lib/LastUpdated.svelte";

  export let data;

  const { commitData } = data;
</script>

<footer class="page-width">
  {#if !commitData.error}
    <LastUpdated {commitData}/>
  {/if}
  <small><Link href="/colophon">Colophon</Link></small>
  <small class="copyright">© {new Date().getFullYear()} Nick Beuchat</small>
</footer>

<style>
  footer {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
    grid-template-areas:
      "updated updated"
      "links copyright";
    row-gap: .8rem;
    align-items: center;
    margin-bottom: 3.2rem;
    padding-top: 3.2rem;
    width: 100%;
    position: relative;
    /* view-transition-name: footer; */

    @media screen and (min-width: 800px) {
      display: none;
    }

    & *:first-child {
      grid-area: updated;
    }

    & *:nth-child(2) {
      grid-area: links;
    }

    & *:nth-child(3) {
      grid-area: copyright;
      justify-self: end;
    }

    &::after {
      content: '';
      position: absolute;
      left: var(--padding-inline);
      right: var(--padding-inline);
      height: 1px;
      top: 0;
      background-color: var(--color-neutral-200)
    }

    @media screen and (max-width: 799px) {
      margin-bottom: 11rem;
    }
  }

  .copyright {
    color: var(--color-neutral-600);
  }
</style>