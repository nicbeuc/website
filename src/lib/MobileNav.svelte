<script>
  import Icon from "./Icon.svelte";
  import Logo from "./Logo.svelte";
  import Link from "./Link.svelte";
  import { socialLinks } from "./constants";
</script>

<div class="mobile-nav">
  <Logo />
  <nav>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/now">Now</Link>
      </li>
    </ul>
  </nav>
  <button aria-label="View additional links">
    <Icon name="dots-vertical" --icon-size="16"/>
  </button>
</div>

<style>
  .mobile-nav svg {
    justify-self: center;
  }

  .mobile-nav {
    position: fixed;
    bottom: 3.2rem;
    left: 0;
    right: 0;
    margin-inline: auto;
    width: calc(100% - (var(--padding-inline) * 2));
    max-width: 24rem;
    display: grid;
    align-items: center;
    grid-template-columns: 4rem 1fr 4rem;
    height: 5.6rem;
    padding: 0 1rem;
    border-radius: 1.6rem;
    box-shadow:
      0px 0.4px 0.9px -10px rgba(0, 0, 0, 0.028),
      0px 1.1px 2.1px -10px rgba(0, 0, 0, 0.04),
      0px 2px 4px -10px rgba(0, 0, 0, 0.05),
      0px 3.6px 7.1px -10px rgba(0, 0, 0, 0.06),
      0px 6.7px 13.4px -10px rgba(0, 0, 0, 0.072),
      0px 16px 32px -10px rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, 1);
    border: var(--border);
    z-index: 1001;
  }

  button {
    display: flex;
    width: 4rem;
    height: 4rem;
    background-color: var(--color-neutral-100);
    border: var(--border);
    justify-content: center;
    align-items: center;
    padding: 0;
    color: var(--color-neutral-700);
    border-radius: 1rem;
  }

  nav {
    & ul {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;
      justify-content: center;

      & a {
        padding: 1rem;
      }
    }
  }
</style>