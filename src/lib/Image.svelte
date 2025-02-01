<script lang="ts">
  export let name: string = '';
  export let alt: string = '';
  export let caption: any = null;

  const allImages = import.meta.glob('$images/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}', {
		import: 'default',
		eager: true,
		query: { enhanced: true }
	});
	const src = Object.entries(allImages).filter(([k, _]) => k.includes(name)).map(([_, v]) => v as string)[0] || null;
</script>

<figure>
  {#if src}
    <enhanced:img class="img" {src} {alt} />
    {#if caption}
      <figcaption>{caption}</figcaption>
    {/if}
  {:else}
	  <img class="img" alt="Not found" src="/media-placeholder.svg" width="800" height="500" />
  {/if}
</figure>

<style>

  @media screen and (max-width: 499px) {
    figure {
      margin-inline: calc(var(--padding-inline) * -1);
    }

    figcaption {
      padding-inline: var(--padding-inline);
    }
  }
  .img {
    aspect-ratio: var(--aspect-ratio, unset);
    display: block;
    height: auto;
    object-fit: cover;

    @media screen and (min-width: 500px) {
      border-radius: var(--border-radius, var(--border-radius-media));
      border: var(--border);
    }
  }
</style>