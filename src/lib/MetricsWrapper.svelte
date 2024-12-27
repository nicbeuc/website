<div>
  <slot />
</div>

<style>
  div {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    gap: 2.4rem;
    margin-top: 3.2rem;
    max-width: var(--prose-width);

    @media screen and (max-width: 799px) {
      grid-auto-flow: row;
      grid-auto-columns: auto;
    }
  }
</style>