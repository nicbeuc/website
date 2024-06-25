<div></div>

<style>
  div {
    position: fixed;
    width: min(100vw, var(--page-width));
    height: var(--padding-inline);
    backdrop-filter: blur(10px);
    z-index: 1000;
    pointer-events: none;

    &::before {
      content: "";
      position: absolute;
      inset: 0px;
    }

    &:first-child {
      mask-image: linear-gradient(to bottom, rgb(0, 0, 0), rgba(0, 0, 0, 0));
      top: 0;

      &::before {
        background: linear-gradient(to bottom, var(--color-bg), rgba(255, 255, 255, .5));
      }

      @media screen and (max-width: 799px) {
        display: none;

      }
    }

    &:not(:first-child) {
      mask-image: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0));
      bottom: 0;

      &::before {
        background: linear-gradient(to top, var(--color-bg), rgba(255, 255, 255, .5));
      }
    }

    @media screen and (max-width: 799px) {
      height: 3.2rem;
    }
  }
</style>