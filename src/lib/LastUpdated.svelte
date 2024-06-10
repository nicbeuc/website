<script>
  import Link from "$lib/Link.svelte";
  export let commitData;
</script>

<small>Last updated on {commitData.timestamp} <Link href={commitData.url} external>{commitData.id}</Link></small>

<style>
  small {
    font-size: 1rem;
    padding: .4rem 1.2rem;
    background-color: var(--color-neutral-100);
    border: var(--border);
    border-radius: 1rem;
    align-items: center;
    width: 100%;
    grid-area: timestamp;
    display: flex;
    justify-content: space-between;
    margin-bottom: .8rem;

    & a {
      margin-inline-start: .5em;
      justify-content: end;
    }
  }
</style>