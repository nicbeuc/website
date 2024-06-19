<script>
  import Link from "$lib/Link.svelte";
</script>

<footer class="page-width">
  <small><Link href="/colophon">Colophon</Link></small>
  <small class="copyright">© {new Date().getFullYear()}</small>
</footer>

<style>
  footer {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas:
      "links copyright";
    align-items: center;
    margin-bottom: 3.2rem;
    padding-top: 3.2rem;
    width: 100%;
    position: relative;

    @media screen and (min-width: 800px) {
      display: none;
    }

    & *:first-child {
      grid-area: links;
    }

    & *:nth-child(2) {
      grid-area: copyright;
      justify-self: end;
    }

    &::after {
      content: '';
      position: absolute;
      left: var(--padding-inline);
      right: var(--padding-inline);
      height: 1px;
      top: 0;
      background-color: var(--color-neutral-300)
    }
  }
  .copyright {
    color: var(--color-neutral-600);
  }
</style>