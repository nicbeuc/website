<script lang="ts">
  import Icon from "./Icon.svelte";

  export let href: string = '#';
  export let external = false;
</script>

{#if external}
  <a href={href ? href : '#'} target="_blank" rel="noopener">
    <slot />
    <!--<Icon name="arrow-diagonal" title="false" />-->
  </a>
{:else}
  <a href={href ? href : '#'}>
    <slot />
  </a>
{/if}

<style>
  a {
    text-decoration-line: underline;
    text-decoration-color: currentColor;
    text-decoration-style: dotted;
    text-underline-offset: .25em;
    color: var(--color-neutral-600);
    transition: all var(--transition-fast);
    display: inline-block;
    position: relative;

    &:hover,
    &:focus {
      color: inherit;
      text-decoration-color: transparent;

      &::after {
        opacity: 1;
      }
    }

    &::after {
      content: '';
      position: absolute;
      inset: 0 -.25em;
      background-color: var(--color-neutral-200);
      opacity: 0;
      transition-property: opacity;
      transition-duration: inherit;
      transition-timing-function: inherit;
      z-index: -1;
    }

    & svg {
      --icon-size: .85em;
      display: inline-block;
      margin-inline-end: .1em;
      margin-inline-start: -.1em;
    }
  }
</style>