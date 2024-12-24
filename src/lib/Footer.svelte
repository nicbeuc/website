<script>
  import Link from "$lib/Link.svelte";
  import LastUpdated from "$lib/LastUpdated.svelte";

  export let data;

  const { commitData } = data;
</script>

<footer>
  {#if !commitData.error}
    <LastUpdated {commitData}/>
  {/if}
  <Link href="/colophon">Colophon</Link>
  <p>© {new Date().getFullYear()} Nick Beuchat</p>
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
    margin-bottom: 4.8rem;
    margin-top: 4.8rem;
    border-top: var(--border);
    padding-top: 4.8rem;
    width: 100%;
    position: relative;
    justify-content: center;
    font-size: var(--font-size-body-sm);
    /* view-transition-name: footer; */

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

    & p {
      color: var(--color-neutral-600);
    }
  }

  .copyright {
    color: var(--color-neutral-600);
  }
</style>