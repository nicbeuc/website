<script lang="ts">
  export let href: string = '#';
  export let title: string;
</script>

{#if title}
  <a href={href ? href : '#'} {title}>
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

    &:hover {
      color: inherit;
    }
  }
</style>