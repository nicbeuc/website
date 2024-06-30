<script>
  import Icon from "$lib/Icon.svelte";
  import Logo from "$lib/Logo.svelte";
  import Link from "$lib/Link.svelte";
  import { socialLinks } from "$/constants";
  import { crossfade } from "svelte/transition";
  import { cubicOut, cubicIn } from "svelte/easing";
  import { onDestroy } from "svelte";

  let overflowRef;
  let overflowOpen = false;

  function transition(node, { duration, easing }) {
    return {
      duration,
      css: (t) => {
        const eased = easing(t);

        return `
          opacity: ${eased};
          transform: scale(${0.95 + (.05 * eased)}) translateY(${15 - (eased * 15)}px);
          filter: blur(${10 - (eased * 10)}px);
        `
      }
    }
  };

  const [send, receive] = crossfade({
    duration: 150
  });

  function handleClickOutside(event) {
    if (overflowOpen && overflowRef && !overflowRef.contains(event.target)) {
      overflowOpen = false;
      removeClickListener();
    }
  }

  function addClickListener() {
    if (typeof document !== 'undefined') {
      document.body.addEventListener('click', handleClickOutside);
    }
  }

  function removeClickListener() {
    if (typeof document !== 'undefined') {
      document.body.removeEventListener('click', handleClickOutside);
    }
  }

  $: if (overflowOpen) {
    addClickListener();
  } else {
    removeClickListener();
  }

  onDestroy(() => {
    removeClickListener();
  });
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
    <button aria-label={!overflowOpen ? 'View additional links' : 'Close additional links'} on:click|stopPropagation={() => overflowOpen = !overflowOpen}>
      {#if !overflowOpen}
        <div in:send={{ key: 'icons' }} out:receive={{ key: 'icons' }}>
          <Icon name="dots-vertical" --icon-size="16" />
        </div>
      {:else}
        <div in:send={{ key: 'icons' }} out:receive={{ key: 'icons' }}>
          <Icon name="close" --icon-size="16"/>
        </div>
      {/if}
    </button>
    {#if overflowOpen}
      <div class="overflow" in:transition={{ duration: 200, easing: cubicOut }} out:transition={{ duration: 200, easing: cubicIn }} bind:this={overflowRef}>
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
    {/if}
  </div>
</div>

<style>
  .mobile-nav {
    position: fixed;
    bottom: 2.4rem;
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
    isolation: isolate;
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
    z-index: 1;
  }

  button {
    appearance: none;
    position: relative;
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

    & > div {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .overflow {
    position: absolute;
    bottom: calc(100% + 1rem);
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
    z-index: -1;
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
    color: var(--color-neutral-600);

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