<script>
  import Link from "$lib/Link.svelte";
  import Logo from "./Logo.svelte";
  import { socialLinks } from "./constants";

  export let commitData;
</script>

<header>
  <div class="navbar__header">
    <a href="/" title="Go to the homepage">
      <Logo />
    </a>
  </div>
  <div class="navbar__info">
    <p><span>Nick Beuchat</span></p>
    <p>Designer & Creative Developer</p>
  </div>
  <div class="navbar__links">
    <Link href="/">Home</Link>
    <Link href="/now">Now</Link>
    <Link href={socialLinks.mail}>Email</Link>
    <Link href={socialLinks.github} external>GitHub</Link>
    <Link href={socialLinks.readcv} external>Read.cv</Link>
  </div>
  <div class="navbar__footer">
    {#if commitData}
      <small class="timestamp">Last updated on {commitData.timestamp} <Link href={commitData.url} external>{commitData.id}</Link></small>
    {/if}
    <small><Link href="/colophon">Colophon</Link></small>
    <small class="copyright">© {new Date().getFullYear()}</small>
  </div>
</header>

<style>
  header {
    padding: var(--padding-inline);
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
      display: none;
      position: relative;
      width: 100%;
      left: 0;
      padding: var(--padding-inline);
      top: 0;
      height: auto;
      z-index: 1001;
    }
  }

  .navbar__info {
    margin-top: 3.2rem;
    color: var(--color-neutral-700);

    & span {
      color: black;
    }

    & p + p {
      margin-top: 0;
      font-size: 1.2rem;
    }
  }

  .navbar__links {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    & a span {
      margin-inline-start: .4em;
      color: var(--color-neutral-500)
    }
  }

  .navbar__footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "timestamp timestamp"
      "links copyright";
    align-items: center;
    justify-content: space-between;

    & .copyright {
      color: var(--color-neutral-600);
      justify-self: end;
    }
  }

  .timestamp {
    font-size: 1rem;
    padding: .4rem 1.2rem;
    background-color: var(--color-neutral-100);
    border: var(--border);
    border-radius: 1rem;
    align-items: center;
    width: 100%;
    grid-area: timestamp;
    display: flex;
    justify-content: space-between;
    margin-bottom: .8rem;

    & a {
      margin-inline-start: .5em;
      justify-content: end;
    }
  }
</style>