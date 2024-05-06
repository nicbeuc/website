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
    color: var(--color-neutral-600);
    transition: color var(--transition-fast);
    display: inline-block;
    position: relative;

    &:hover {
      color: inherit;
    }

    &[target="_blank"] {
      cursor: alias;
    }
  }
</style>