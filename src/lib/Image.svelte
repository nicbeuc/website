<script lang="ts">
  export let name: string;
  export let alt: string = '';

  const allImages = import.meta.glob('$images/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}', {
		import: 'default',
		eager: true,
		query: { enhanced: true }
	});
	let src = Object.entries(allImages).filter(([k, _]) => k.includes(name)).map(([_, v]) => v as string)[0];
</script>

{#if src}
	<enhanced:img class="img" {src} {alt} />
{:else}
	<p style="color:red;">Image not found</p>
{/if}

<style>
  .img {
    aspect-ratio: var(--aspect-ratio, unset);
    border-radius: var(--border-radius, var(--border-radius-media));
    border: var(--border-subtle);
    display: block;
    height: auto;
    object-fit: cover;
  }
</style>