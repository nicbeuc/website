<script>
  export let tags, ref;
</script>

<dl {ref}>
  {#each tags as tag}
    <dd>{tag}</dd>
  {/each}
</dl>

<style>
  dd {
    display: inline;
    padding: .6rem 1rem;
    border-radius: .8rem;
    font-size: var(--font-size-body-sm);
    color: var(--color-neutral-700);
    background-color: var(--color-neutral-200);
    margin-inline-end: .8rem;
  }
</style>