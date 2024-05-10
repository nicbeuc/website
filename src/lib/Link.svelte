<script lang="ts">
	import Icon from "./Icon.svelte";

  export let href: string = '#';
  export let external = false;
</script>

{#if external}
  <a href={href ? href : '#'} target="_blank" rel="noopener">
    <slot />
    <Icon name="arrow-diagonal" --icon-size=".8em"/>
  </a>
{:else}
  <a href={href ? href : '#'}>
    <slot />
  </a>
{/if}

<style>
  a {
    text-decoration: none;
    color: var(--color-neutral-600);
    transition: color var(--transition-fast);
    display: inline-flex;
    align-items: center;
    position: relative;
    min-height: 2.8rem;
    min-width: 10ch;

    &:hover {
      color: inherit;

      & svg {
        color: inherit;
      }
    }

    &[target="_blank"] {
      cursor: alias;
    }

    & svg {
      color: var(--color-neutral-500);
      display: inline-block;
      margin-inline-start: .4em;
      transition: color var(--transition-fast);
    }
  }
</style>