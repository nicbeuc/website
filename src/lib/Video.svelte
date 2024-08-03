<script lang="ts">
  export let name: string;

  const allMp4s = import.meta.glob('$videos/*.mp4', {
		import: 'default',
		eager: true,
	});
	let srcMp4 = Object.entries(allMp4s).filter(([k, _]) => k.includes(name)).map(([_, v]) => v as string)[0];

  const allWebms = import.meta.glob('$videos/*.mp4', {
		import: 'default',
		eager: true,
	});
	let srcWebm = Object.entries(allWebms).filter(([k, _]) => k.includes(name)).map(([_, v]) => v as string)[0];

  const allPosters = import.meta.glob('$videos/posters/*.jpg', {
		import: 'default',
		eager: true,
	});
	let srcPoster = Object.entries(allPosters).filter(([k, _]) => k.includes(name)).map(([_, v]) => v as string)[0];
</script>

<div class="video-wrapper">
  {#if srcMp4 || srcMp4}
    <video
      width="100%"
      height="100%"
      poster={srcPoster ? srcPoster : null}
      autoplay
      loop
      muted
      defaultmuted
      playsinline
      preload="auto"
    >
      {#if srcWebm}
        <source src={srcWebm} type="video/webm"/>
      {/if}
      {#if srcMp4}
        <source src={srcMp4} type="video/mp4"/>
      {/if}
    </video>
  {:else}
    <p>Video not found.</p>
  {/if}
</div>

<style>
  div {
    overflow: hidden;
    border-radius: var(--border-radius, var(--border-radius-media));
  }

  video {
    display: block;
    height: auto !important;
    aspect-ratio: 16/9;
    width: 100%;
    object-fit: cover;
    transform: scale(1.003);
  }
</style>