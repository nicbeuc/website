<script lang="ts">
  import { page } from "$app/stores";
	import Icon from "$lib/Icon.svelte";

  export let href: string = '#';
  export let external = false;
</script>

<a href={href ? href : '#'} target={external ? "_blank" : null} rel={external ? "noopener" : null} aria-current={$page.url.pathname === href || null}>
  <slot />
  {#if external}
    <Icon name="arrow-diagonal" --icon-size=".8em"/>
  {/if}
</a>

<style>
  a {
    text-decoration: none;
    color: var(--color-neutral-600);
    transition: color var(--transition-fast);
    display: inline-flex;
    align-items: center;
    position: relative;
    gap: .4rem;
    /* min-width: 10ch; */

    &:hover {
      color: inherit;

      & * {
        color: inherit;
      }
    }

    &[aria-current] {
      color: inherit;
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
</style>