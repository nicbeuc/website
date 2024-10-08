<script lang="ts">
  import Icon from "$lib/Icon.svelte";
  import { onMount } from "svelte";
  import { crossfade } from "svelte/transition";

  export let name: string;
  export let caption: string;

  let isVisible = false;
  let manuallyPaused = false;
  let video: HTMLVideoElement;

  const [send, receive] = crossfade({
    duration: 150
  });

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

  function handleMediaControlClick() {
    manuallyPaused ? video.play() : video.pause();
    manuallyPaused = !manuallyPaused;
  }

  onMount(() => {
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, {
      root: null,
      threshold: 0.5
    });

    if (video) observer.observe(video);

    return () => {
      observer.disconnect();
    }
  });

  $: if (isVisible && !manuallyPaused) {
    video?.play();
  } else {
    video?.pause();
  }
</script>

<div class="video">
  <div class="video-wrapper">
    {#if srcMp4 || srcMp4}
      <video
        width="100%"
        height="100%"
        poster={srcPoster ? srcPoster : null}
        loop
        muted
        defaultmuted
        playsinline
        preload="auto"
        bind:this={video}
      >
        {#if srcWebm}
          <source src={srcWebm} type="video/webm"/>
        {/if}
        {#if srcMp4}
          <source src={srcMp4} type="video/mp4"/>
        {/if}
      </video>
      <button
        on:click={handleMediaControlClick}
      >
        <span class="sr-only">Pause the video</span>
        <div class="button-inner">
          {#if manuallyPaused}
            <div in:send={{ key: 'mediaButtonIcons' }} out:receive={{ key: 'mediaButtonIcons' }}>
              <Icon name="play"/>
            </div>
          {:else}
            <div in:send={{ key: 'mediaButtonIcons' }} out:receive={{ key: 'mediaButtonIcons' }}>
              <Icon name="pause"/>
            </div>
          {/if}
        </div>
      </button>
    {:else}
      <p style="color:red;">Video not found.</p>
    {/if}
  </div>
  {#if caption}
  <p class="media-caption">{caption}</p>
  {/if}
</div>


<style>
  @media screen and (max-width: 499px) {
    .video {
      margin-inline: calc(var(--padding-inline) * -1);
    }

    p {
      padding-inline: var(--padding-inline);
    }
  }

  .video-wrapper {
    overflow: hidden;
    position: relative;
    isolation: isolate;
    @media screen and (min-width: 500px) {
      border-radius: var(--border-radius, var(--border-radius-media));
      border: var(--border);
    }
  }


  video {
    display: block;
    height: auto !important;
    width: 100%;
    object-fit: cover;
    transform: scale(1.003);
  }

  button {
    padding: 0;
    position: absolute;
    bottom: 1.6rem;
    right: 1.6rem;
    background-color: rgba(255, 255, 255, .75);
    border: 1px solid white;
    height: 3.2rem;
    width: 3.2rem;
    border-radius: 100vw;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: var(--shadow-low);
    backdrop-filter: var(--filter-blur-mid);
    color: black;

    & .button-inner {
      width: 100%;
      height: 100%;
      position: relative;

      & div {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    @media screen and (max-width: 499px) {
      width: 4rem;
      height: 4rem;
    }
  }
</style>