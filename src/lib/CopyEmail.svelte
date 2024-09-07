<script>
  import Icon from "$lib/Icon.svelte";

  function handleClick() {
    navigator.clipboard.writeText('nick.beuchat@gmail.com');
    alert("Email copied to clipboard.");
  }
</script>

<button on:click={handleClick}>
  <span class="sr-only">Copy email to clipboard</span>
  <span aria-hidden="true"><slot /></span>
  <Icon name="copy" --icon-size=".8em"/>
</button>

<style>
  button {
    color: var(--color-neutral-600);
    transition: color var(--transition-fast), font-weight var(--transition-fast);
    display: inline-flex;
    align-items: center;
    position: relative;
    gap: .6rem;
    border: 0;
    padding: .4rem 0;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      color: inherit;

      & * {
        color: inherit;
      }
    }

    & svg {
      color: var(--color-neutral-500);
      display: inline-block;
      transition: color var(--transition-fast);
    }
  }
</style>