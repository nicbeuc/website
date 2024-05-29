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
    background-color: rgba(255, 255, 255, .75);
    -webkit-backdrop-filter: blur(.5rem);
    backdrop-filter: blur(.5rem);
    color: var(--color-neutral-700);
    border: var(--border);
    border-radius: 1.4rem;

    @media screen and (min-width: 800px) {
      display: none;
    }
  }
</style>