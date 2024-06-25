<script>
  import Link from "$lib/Link.svelte";
  import Icon from "$lib/Icon.svelte";
  export let commitData;
</script>

<small>Updated {commitData.timestamp} <Link href={commitData.url} external><Icon name="branch" --icon-size="12"/>{commitData.id}</Link></small>

<style>
  small {
    font-size: var(--font-size-body-sm);
    /* background-color: var(--color-neutral-100);
    border: var(--border);
    border-radius: 1rem; */
    align-items: center;
    width: 100%;
    grid-area: timestamp;
    display: flex;
    justify-content: space-between;
    /* margin-bottom: .8rem; */

    & a {
      margin-inline-start: .5em;
      justify-content: end;
    }
  }
</style>