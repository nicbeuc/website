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
    margin-top: 2rem;
    align-items: center;
    gap: .25em;

    @media screen and (max-width: 799px) {
      display: flex;
      justify-content: end;
    }
  }
</style>