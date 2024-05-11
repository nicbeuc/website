<div></div>

<style>
  div {
    position: fixed;
    width: min(100vw, var(--page-width));
    height: var(--padding-inline);
    backdrop-filter: blur(5px);
    z-index: 1000;
    pointer-events: none;

    &::before {
      content: "";
      position: absolute;
      inset: 0px;
    }

    &:first-child {
      mask-image: linear-gradient(to bottom, rgb(0, 0, 0), transparent);
      top: 0;

      &::before {
        background: linear-gradient(to bottom, var(--color-bg), transparent);
      }
    }

    &:not(:first-child) {
      mask-image: linear-gradient(to top, rgb(0, 0, 0), transparent);
      bottom: 0;

      &::before {
        background: linear-gradient(to top, var(--color-bg), transparent);
      }
    }
  }
</style>