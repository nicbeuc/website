<script>
  import InlineLink from "$lib/InlineLink.svelte";
</script>

<slot />

<footer class="page-width">
  <small>© 2024 Nick Beuchat</small>
  <InlineLink href="/colophon" title="View colophon">Colophon</InlineLink>
</footer>

<style>
  footer {
    padding-bottom: 2.4rem;
  }
</style>