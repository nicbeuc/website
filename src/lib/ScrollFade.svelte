<div></div>

<style>
  div {
    position: fixed;
    width: min(100vw, var(--page-width));
    height: var(--padding-inline);
    z-index: 1000;
    pointer-events: none;
    isolation: isolate;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);

    &::before {
      content: "";
      position: absolute;
      inset: 0px;
      z-index: 1;
    }

    &:first-of-type {
      mask-image: linear-gradient(to bottom, rgb(0, 0, 0), rgba(0, 0, 0, 0));
      top: 0;

      &::before {
        background: linear-gradient(to bottom, var(--color-bg), rgba(255, 255, 255, 0));
      }

      @media screen and (max-width: 799px) {
        display: none;
      }
    }

    &:not(:first-of-type) {
      mask-image: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0));
      bottom: 0;

      &::before {
        background: linear-gradient(to top, var(--color-bg), rgba(255, 255, 255, 0));
      }

      @media screen and (max-width: 799px) {
        mask-image: linear-gradient(to top, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0));
      }
    }

    @media screen and (max-width: 799px) {
      height: 11rem;
    }
  }
</style>