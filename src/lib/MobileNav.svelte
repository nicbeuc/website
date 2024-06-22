<script>
  import Icon from "./Icon.svelte";
  import Logo from "./Logo.svelte";
  import Link from "./Link.svelte";
  import { socialLinks } from "./constants";
</script>

<div class="mobile-nav">
  <div class="mobile-nav__inner">
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
    <details>
      <summary aria-label="View additional links">
        <Icon name="dots-vertical" --icon-size="16"/>
      </summary>
      <div class="overflow">
        <div class="overflow__info">
          <p><span>Nick Beuchat</span></p>
          <p>Designer & Creative Developer</p>
        </div>
        <ul>
          <li><Link href={socialLinks.mail}>Email</Link></li>
          <li><Link href={socialLinks.github} external>GitHub</Link></li>
          <li><Link href={socialLinks.readcv} external>Read.cv</Link></li>
        </ul>
      </div>
    </details>
  </div>
</div>

<style>
  .mobile-nav {
    position: fixed;
    bottom: 3.2rem;
    left: 0;
    right: 0;
    margin-inline: auto;
    width: fit-content;
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
    @media screen and (min-width: 800px) {
      display: none;
    }
  }

  .mobile-nav__inner {
    position: relative;
    display: grid;
    align-items: center;
    grid-template-columns: 4rem 1fr 4rem;
    height: 5.6rem;
    padding: 0 1rem;
    gap: 1rem;
  }

  summary {
    appearance: none;
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

  details > div {
    position: absolute;
    bottom: calc(100% + 1.6rem);
    left: 0;
    right: 0;
    padding: 2rem;
    background-color: white;
    border: var(--border);
    border-radius: 1.6rem;
    box-shadow:
      0px 0.4px 0.9px -10px rgba(0, 0, 0, 0.028),
      0px 1.1px 2.1px -10px rgba(0, 0, 0, 0.04),
      0px 2px 4px -10px rgba(0, 0, 0, 0.05),
      0px 3.6px 7.1px -10px rgba(0, 0, 0, 0.06),
      0px 6.7px 13.4px -10px rgba(0, 0, 0, 0.072),
      0px 16px 32px -10px rgba(0, 0, 0, 0.1);
  }

  nav {
    height: 100%;
    & ul {
      height: 100%;
      list-style: none;
      display: flex;
      align-items: center;
      margin: 0;
      padding: 0;
      justify-content: center;

      & li {
        height: 100%;
        padding-top: .8rem;
        padding-bottom: .8rem;
      }

      & a {
        width: 6.4rem;
        height: 100%;
        justify-content: center;
        border-radius: 1rem;

        &[aria-current] {
          background-color: var(--color-neutral-100);
          border: var(--border);
        }
      }
    }
  }

  .overflow__info {
    margin-bottom: 1.6rem;
    color: var(--color-neutral-700);

    & span {
      color: black;
    }

    & p + p {
      margin-top: 0;
      font-size: 1.2rem;
    }
  }

  .overflow ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>