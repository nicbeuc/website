<script>
  import Link from "$lib/Link.svelte";
  import LastUpdated from "$lib/LastUpdated.svelte";

  export let data;

  const { commitData } = data;
</script>

<footer class="dotted-border-top">
  <div class="footer__copyright">
    {#if !commitData.error}
      <LastUpdated {commitData}/>
    {/if}
    <p>© {new Date().getFullYear()} Nick Beuchat</p>
    <span>•</span>
    <Link href="/colophon">Colophon</Link>
  </div>
</footer>

<style>
  footer {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "updated updated"
      "links copyright";
    row-gap: .8rem;
    column-gap: .8rem;
    align-items: center;
    margin-top: 3.2rem;
    margin-bottom: 3.2rem;
    padding-top: 3.2rem;
    width: 100%;
    position: relative;
    justify-content: center;
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

    @media screen and (max-width: 799px) {
      margin-bottom: 8rem;
    }
  }

  .footer__copyright {
    color: var(--color-neutral-600);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: .5em;
    font-size: var(--font-size-body-xs);
    font-weight: 200;

    & > * {
      display: inline;
    }
  }
</style>