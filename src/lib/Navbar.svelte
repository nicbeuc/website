<script>
  import Link from "$lib/Link.svelte";
  import Logo from "$lib/Logo.svelte";
  import LastUpdated from "$lib/LastUpdated.svelte";
  import CopyEmail from "$lib/CopyEmail.svelte";
  import { socialLinks } from "$/constants";

  export let data;

  const { commitData } = data;
</script>

<header class="dotted-border-right">
  <div class="navbar__header">
    <a class="navbar__logo" href="/" title="Go to the homepage">
      <Logo />
    </a>
    <nav class="navbar__links">
      <Link href="/">Home</Link>
      <Link locked>About</Link>
      <Link locked>Notes</Link>
      <Link locked>Lab</Link>
    </nav>
  </div>
  <div class="navbar__footer dotted-border-top">
    <div class="navbar__links">
      <CopyEmail>Email</CopyEmail>
      <Link href={socialLinks.github} external>GitHub</Link>
      <Link href={socialLinks.readcv} external>Read.cv</Link>
      <Link href="/resume.pdf" download>Resumé</Link>
    </div>
    <div class="navbar__copyright dotted-border-top">
      {#if !commitData.error}
        <LastUpdated {commitData}/>
      {/if}
      <p>© {new Date().getFullYear()} Nick Beuchat</p>
      <span>•</span>
      <Link href="/colophon">Colophon</Link>
    </div>
  </div>
</header>

<style>
  header {
    margin-top: 4.8rem;
    margin-bottom: 4.8rem;
    padding: 0 var(--padding-inline);
    height: calc(100vh - 9.6rem);
    width: var(--navbar-width);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: calc((max(100vw, var(--page-width)) - var(--page-width)) / 2);
    z-index: 1;
    view-transition-name: navbar;

    @media screen and (max-width: 799px) {
      display: none;
    }
  }

  .navbar__header .navbar__links {
    margin-top: 2.4rem;
  }

  .navbar__logo {
    display: flex;
    width: fit-content;
  }

  .navbar__info {
    margin-top: 2.4rem;
    color: var(--color-neutral-600);

    & p:first-of-type {
      color: black;
      line-height: 2.4rem;

      @media screen and (max-width: 799px) {
        font-size: 1.2rem;
      }
    }

    & p + p {
      margin-top: 0;
      font-size: 1.2rem;
      line-height: 2rem;
    }

    @media screen and (max-width: 799px) {
      margin-top: 0;

      & p {
        line-height: 1.35;
      }
    }
  }

  .navbar__links {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    & > * {
      padding-top: .4rem;
      padding-bottom: .4rem;
    }

    & a span {
      margin-inline-start: .4em;
      color: var(--color-neutral-500)
    }

    @media screen and (max-width: 799px) {
      display: none;
    }
  }

  .navbar__footer {
    padding-top: 2.4rem;
    margin-top: 2.4rem;
    @media screen and (max-width: 799px) {
      display: none;
    }
  }

  .navbar__copyright {
    color: var(--color-neutral-600);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: .5em;
    padding-top: 2.4rem;
    margin-top: 2.4rem;
    font-size: var(--font-size-body-xs);
    font-weight: 200;

    & > * {
      display: inline;
    }
  }
</style>