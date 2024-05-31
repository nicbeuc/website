<script>
  import Icon from "./Icon.svelte";
</script>

<button>
  <Icon name="menu-dots" --icon-size="1.8rem"/>
</button>

<style>
  button {
    background: transparent;
    border: none;
    position: fixed;
    bottom: var(--padding-inline);
    right: var(--padding-inline);
    width: 4.8rem;
    height: 4.8rem;
    display: flex;
    z-index: 1001;
    justify-content: center;
    align-items: center;
    padding: 0;
    background-color: rgba(255, 255, 255, 1);
    /* -webkit-backdrop-filter: blur(.5rem);
    backdrop-filter: blur(.5rem); */
    color: var(--color-neutral-700);
    border: var(--border);
    border-radius: 1.4rem;
    box-shadow:
      0px 0.4px 0.9px -10px rgba(0, 0, 0, 0.028),
      0px 1.1px 2.1px -10px rgba(0, 0, 0, 0.04),
      0px 2px 4px -10px rgba(0, 0, 0, 0.05),
      0px 3.6px 7.1px -10px rgba(0, 0, 0, 0.06),
      0px 6.7px 13.4px -10px rgba(0, 0, 0, 0.072),
      0px 16px 32px -10px rgba(0, 0, 0, 0.1);

    @media screen and (min-width: 800px) {
      display: none;
    }
  }
</style>