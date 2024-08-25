<script>
  import Icon from "$lib/Icon.svelte";
</script>

<small><Icon name="asterisk" --icon-size=".75em"/><span><slot/></span></small>

<style>
  small {
    font-style: italic;
    color: var(--color-neutral-600);
    font-size: var(--font-size-body-xs);
    display: inline-flex;
    margin-top: 1.6rem;
    align-items: center;
    gap: .25em;
  }
</style>