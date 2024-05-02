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
    text-decoration: none;
    color: grey;
    transition: color var(--transition-fast);
    display: inline-block;
    position: relative;

    &:hover {
      color: inherit;

      &::after {
        opacity: 0;
      }
    }

    /* &::after {
      content: '';
      position: absolute;
      bottom: 0;
      height: 1px;
      right: 0;
      left: 0;
      background-color: currentColor;
      transition-property: opacity;
      transition-duration: inherit;
      transition-timing-function: inherit;
    } */
  }
</style>