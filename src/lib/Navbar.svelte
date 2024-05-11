<script>
  import Link from "$lib/Link.svelte";
  import Logo from "./Logo.svelte";
  import { socialLinks } from "./constants";
</script>

<header>
  <div class="navbar__header">
    <a href="/">
      <Logo />
    </a>
  </div>
  <p><span>Nick Beuchat</span> is a designer and creative developer based in Knoxville.</p>
  <div class="navbar__links">
    <Link>Work <span>(3)</span></Link>
    <Link>Now</Link>
    <Link href={socialLinks.github} external>GitHub</Link>
    <Link href={socialLinks.readcv} external>Read.cv</Link>
    <Link href={socialLinks.mail} external>Mail</Link>
  </div>
  <div class="navbar__footer">
    <small><Link href="/colophon">Colophon</Link></small>
    <small>© {new Date().getFullYear()}</small>
  </div>
</header>

<style>
  header {
    padding: var(--padding-inline) calc(var(--padding-inline) / 2) var(--padding-inline) var(--padding-inline);
    height: 100vh;
    width: var(--navbar-width);
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto auto 1fr auto;
    position: fixed;
    top: 0;
    left: calc((max(100vw, var(--page-width)) - var(--page-width)) / 2);
    z-index: 1;

    @media screen and (max-width: 799px) {
      width: calc(min(100vw, var(--page-width)) - var(--padding-inline) * 2);
      left: calc(((max(100vw, var(--page-width)) - var(--page-width)) / 2) + var(--padding-inline));
      padding: 1.6rem 2rem;
      top: unset;
      bottom: var(--padding-inline);
      height: auto;
      background-color: var(--color-neutral-100);
      border-radius: 2.4rem;
      border: var(--border);
    }

    & > p {
      margin-top: 3.2rem;
      color: var(--color-neutral-600);

      & span {
        color: black;
        font-weight: bolder;
      }
    }
  }

  .navbar__links {
    display: flex;
    flex-direction: column;
    margin-top: 3.2rem;
    align-items: start;

    & a span {
      margin-inline-start: .4em;
      color: var(--color-neutral-500)
    }
  }

  .navbar__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1.6rem;
    border-top: var(--border);

    & .copyright {
      color: var(--color-neutral-600);
    }

    @media screen and (max-width: 799px) {
      display: none;
    }
  }
</style>