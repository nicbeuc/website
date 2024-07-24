<script>
  import { page } from "$app/stores";
  import Link from "$lib/Link.svelte";
  import Icon from "$lib/Icon.svelte";
</script>

<div class="error-page">
  <hgroup>
    <p>{$page.status}</p>
    <h1>Couldn't find that page.</h1>
  </hgroup>
  <Link href="/">
    <Icon name="undo"/>
    Go back home
  </Link>
</div>

<style>
  .error-page {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  hgroup {
    text-align: center;
    margin-bottom: 2.4rem;
  }

  p {
    font-size: var(--font-size-heading);
    color: var(--color-neutral-600);
  }
</style>