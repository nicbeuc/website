<script lang="ts" context="module">
	export type IconName =
    | 'arrow-diagonal';
</script>

<script lang="ts">
  export let name: IconName;
  export let ariaHidden = true;
</script>

<svg
  aria-hidden={ariaHidden}
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style="width: var(--icon-size, 1.4rem);"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  {#if name == 'arrow-diagonal'}
    <path d="M5.63605 18.364L18.364 5.63603M18.364 5.63603L8.46446 5.63604M18.364 5.63603V15.5355"></path>
  {/if}
</svg>


<style>
  svg {
    height: var(--icon-size, 1.4rem);
  }
</style>