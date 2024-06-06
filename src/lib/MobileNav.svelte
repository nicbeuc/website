<script>
  import Icon from "./Icon.svelte";
  import Logo from "./Logo.svelte";
  import Link from "./Link.svelte";
  import { socialLinks } from "./constants";
</script>

<button>
  <Icon name="menu-dots" --icon-size="1.8rem"/>
</button>
<div class="drawer">
  <div class="drawer__header">
    <a href="/" title="Go to the homepage">
      <Logo />
    </a>
  </div>
  <div class="drawer__info">
    <p><span>Nick Beuchat</span></p>
    <p>Designer & Creative Developer</p>
  </div>
  <nav class="drawer__links">
    <Link href="/">Home</Link>
    <Link href="/now">Now</Link>
    <Link href={socialLinks.mail}>Email</Link>
    <Link href={socialLinks.github} external>GitHub</Link>
    <Link href={socialLinks.readcv} external>Read.cv</Link>
  </nav>
</div>

<style>
  button {
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


  .drawer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 7.2rem;
    width: calc(100% - 3.2rem);
    height: calc(100% - 9rem);
    margin-inline: auto;
    background-color: white;
    padding: 2.4rem;
    border-radius: 1.4rem;
    border: var(--border);
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