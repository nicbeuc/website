<script>
  export let tags;
</script>

<dl>
  {#each tags as tag}
    <dd>{tag}</dd>
  {/each}
</dl>

<style>
  dd {
    display: inline;
    padding: .4rem .8rem;
    border-radius: .4rem;
    font-size: var(--font-size-body-sm);
    color: var(--color-neutral-700);
    background-color: var(--color-neutral-200);
    margin-inline-end: .8rem;
  }
</style>