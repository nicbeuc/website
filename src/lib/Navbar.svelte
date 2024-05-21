<script>
  import Link from "$lib/Link.svelte";
  import Logo from "./Logo.svelte";
  import { socialLinks } from "./constants";

  export let timestamp;
  export let commitId;
</script>

<header>
  <div class="navbar__header">
    <a href="/">
      <Logo />
    </a>
  </div>
  <p><span>Nick Beuchat</span> is a designer and creative developer based in Knoxville.</p>
  <div class="navbar__links">
    <Link>Work</Link>
    <Link href="/now">Now</Link>
    <Link href={socialLinks.github} external>GitHub</Link>
    <Link href={socialLinks.readcv} external>Read.cv</Link>
    <Link href={socialLinks.mail} external>Mail</Link>
  </div>
  <div class="navbar__footer">
    {#if timestamp && commitId}
      <small class="timestamp">Last updated on {timestamp} {commitId}</small>
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
      width: 100%;
      left: 0;
      padding: var(--padding-inline);
      top: 0;
      height: 5.6rem;
      z-index: 1001;
    }

    & > p {
      margin-top: 3.2rem;
      color: var(--color-neutral-700);

      & span {
        color: black;
      }

      @media screen and (max-width: 799px) {
        display: none;
      }
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

    @media screen and (max-width: 799px) {
      display: none;
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

    @media screen and (max-width: 799px) {
      display: none;
    }
  }

  .timestamp {
    font-size: 1rem;
    padding: .4rem .8rem;
    background-color: var(--color-neutral-100);
    border-radius: 1rem;
    width: fit-content;
    grid-area: timestamp;
  }
</style>