<script lang="ts">
  import { page } from "$app/stores";
	import Icon from "$lib/Icon.svelte";

  export let href: string = '#';
  export let external = false;
  export let locked = false;
</script>

{#if locked}
  <span>
    <slot />
    <Icon name="lock" --icon-size=".8em"/>
  </span>
{:else}
  <a href={href ? href : '#'} target={external ? "_blank" : null} rel={external ? "noopener" : null} aria-current={$page.url.pathname === href || null}>
    <slot />
    {#if external}
      <Icon name="arrow-top-right" --icon-size=".8em"/>
    {/if}
  </a>
{/if}

<style>
  a {
    text-decoration: none;
    color: var(--color-neutral-600);
    transition: color var(--transition-fast), font-weight var(--transition-fast);
    display: inline-flex;
    align-items: center;
    position: relative;
    gap: .6rem;
    /* min-width: 10ch; */

    &:hover {
      color: black;

      & * {
        color: inherit;
      }
    }

    &[aria-current] {
      color: black;
      font-weight: 400;
    }

    &[target="_blank"] {
      cursor: alias;
    }

    & svg {
      color: var(--color-neutral-500);
      display: inline-block;
      transition: color var(--transition-fast);
    }
  }

  span {
    color: var(--color-neutral-500);
    cursor: not-allowed;
    display: inline-flex;
    align-items: center;
    position: relative;
    gap: .6rem;

    & svg {
      color: var(--color-neutral-400);
      display: inline-block;
      transition: color var(--transition-fast);
    }
  }
</style>