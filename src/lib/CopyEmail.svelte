<script>
  import { crossfade, slide } from "svelte/transition";
  import { cubicIn, cubicOut } from "svelte/easing";
  import Icon from "$lib/Icon.svelte";

  let emailCopied = false;

  const [send, receive] = crossfade({
    duration: 150,
    easing: cubicOut,
  });

  function handleClick() {
    navigator.clipboard.writeText('nick.beuchat@gmail.com');
    emailCopied = true;
    setTimeout(() => {
      emailCopied = false;
    }, 3000);
  }
</script>

<button on:click={handleClick} disabled={emailCopied}>
  <span class="sr-only">Copy email to clipboard</span>
  <span aria-hidden="true"><slot /></span>
  <div>
    {#if emailCopied}
      <div in:send={{ key: 'icons' }} out:receive={{ key: 'icons' }}>
        <Icon name="check" --icon-size=".8em" />
      </div>
    {:else}
      <div in:send={{ key: 'icons' }} out:receive={{ key: 'icons' }}>
        <Icon name="copy" --icon-size=".8em"/>
      </div>
    {/if}
  </div>
  {#if emailCopied}
    <span in:slide={{ axis: 'x', duration: 150, easing: cubicOut }} out:slide={{ axis: 'x', duration: 150, easing: cubicIn }} class="email-toast">Copied!</span>
  {/if}
</button>

<style>
  button {
    color: var(--color-neutral-600);
    transition: color var(--transition-fast), font-weight var(--transition-fast);
    display: inline-flex;
    align-items: center;
    position: relative;
    gap: .6rem;
    border: 0;
    padding: .4rem 0;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      color: inherit;

      & * {
        color: inherit;
      }
    }

    & div {
      width: .8em;
      height: .8em;
      display: inline-block;
      position: relative;

      & div {
        position: absolute;
        inset: 0;

        & svg {
          width: 100%;
          height: 100%;
          color: var(--color-neutral-500);
          transition: color var(--transition-fast);
        }
      }
    }
  }

  .email-toast {
    position: absolute;
    left: calc(100% + .4em);
    font-size: .75em;
    color: var(--color-neutral-700);
    background-color: var(--color-neutral-100);
    border-radius: 4px;
    line-height: 1;
    padding: .4rem .6rem;
  }
</style>