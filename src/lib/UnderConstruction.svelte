<script>
  import Icon from "$lib/Icon.svelte";
</script>

<div class="under-construction">
  <Icon name="cone" --icon-size="1.4rem"/><slot /><Icon name="cone" --icon-size="1.4rem"/>
</div>

<style>
  .under-construction {
    background-color: var(--color-neutral-100);
    border: var(--border);
    border-color: var(--color-neutral-200);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;
    padding-top: 6.4rem;
    padding-bottom: 6.4rem;
    border-radius: 1.6rem;
    background-image: repeating-linear-gradient(
      -45deg,
      var(--color-neutral-200) 0px,
      var(--color-neutral-200) 1px,
      transparent 1px,
      transparent 8px
    );
    background-size: 200% 200%;
    font-style: italic;
    color: var(--color-neutral-600);
    font-weight: 400;
    position: relative;
    overflow: hidden;
    mask-image: linear-gradient(to bottom, black 50%, transparent);
  }

  @media (prefers-reduced-motion: no-preference) {
    .under-construction {
      animation: animateBg 40s linear infinite;
    }
  }

  @keyframes animateBg {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 100% 100%;
    }
  }
</style>