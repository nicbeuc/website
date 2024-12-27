<script lang="ts">
  export let href: string = '#';
  export let external = false;
</script>

{#if external}
  <a href={href ? href : '#'} target="_blank" rel="noopener">
    <slot />
  </a>
{:else}
  <a href={href ? href : '#'}>
    <slot />
  </a>
{/if}

<style>
  a {
    color: var(--color-neutral-600);
    transition: all var(--transition-fast);
    display: inline-block;
    position: relative;
    text-decoration: none;

    &:hover,
    &:focus-visible {
      color: inherit;
      text-decoration-color: transparent;

      &::after {
        opacity: 1;
      }

      &::before {
        opacity: 0;
      }
    }

    &[target="_blank"] {
      cursor: alias;
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
      border-radius: .4em;
    }

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      height: 1px;
      background-size: 1px 100%, 100% 1px, 1px 100%, 100% 1px;
      background-repeat: no-repeat;
      background-image: repeating-linear-gradient(0deg, transparent, transparent 1px, transparent 0, transparent 4px, transparent 0), repeating-linear-gradient(90deg, transparent, transparent 1px, transparent 0, transparent 4px, transparent 0), repeating-linear-gradient(180deg, transparent, transparent 1px, transparent 0, transparent 4px, transparent 0), repeating-linear-gradient(270deg, currentColor, currentColor 1px, transparent 0, transparent 4px, currentColor 0);
      background-position: 0 0, 0 0, 100% 0, 0 100%;
      transition-property: opacity;
      transition-duration: inherit;
      transition-timing-function: inherit;
    }

    & svg {
      --icon-size: .85em;
      display: inline-block;
      margin-inline-end: .1em;
      margin-inline-start: -.1em;
    }
  }
</style>