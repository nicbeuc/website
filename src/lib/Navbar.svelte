<script>
  import Link from "$lib/Link.svelte";
  import Logo from "$lib/Logo.svelte";
  import LastUpdated from "$lib/LastUpdated.svelte";
  import CopyEmail from "$lib/CopyEmail.svelte";
  import { socialLinks } from "$/constants";

  export let data;

  const { commitData } = data;
</script>

<header>
  <div class="navbar__header">
    <a href="/" title="Go to the homepage">
      <Logo />
    </a>
  </div>
  <div class="navbar__info">
    <p>Nick Beuchat</p>
    <p>Designer & Creative Developer</p>
  </div>
  <nav class="navbar__links">
    <Link href="/">Home</Link>
    <Link href="/now">Now</Link>
    <!-- <Link href={socialLinks.mail}>Email</Link> -->
    <CopyEmail>Email</CopyEmail>
    <Link href={socialLinks.github} external>GitHub</Link>
    <Link href={socialLinks.readcv} external>Read.cv</Link>
  </nav>
  <div class="navbar__footer">
    {#if !commitData.error}
      <LastUpdated {commitData}/>
    {/if}
    <small><Link href="/colophon">Colophon</Link></small>
    <small class="copyright">© {new Date().getFullYear()} Nick Beuchat</small>
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
    view-transition-name: navbar;

    @media screen and (max-width: 799px) {
      display: none;
    }
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

    & a {
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "timestamp timestamp"
      "links copyright";
    row-gap: .8rem;
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
</style>