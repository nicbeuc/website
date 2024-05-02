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

</style>