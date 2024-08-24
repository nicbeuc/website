<div>
  <slot />
</div>

<style>
  div {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    gap: 1.6rem;
    margin-top: 3.2rem;

    @media screen and (max-width: 799px) {
      grid-auto-flow: row;
      grid-auto-columns: auto;
    }
  }
</style>