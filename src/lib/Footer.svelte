<script>
  import Link from "$lib/Link.svelte";
  import Icon from "$lib/Icon.svelte";
  import { socialLinks } from "$lib/constants";
</script>

<footer class="page-width">
  <div class="icons">
    <Link href={socialLinks.github} external>
      <Icon name="github" title="GitHub"/>
    </Link>
    <Link href={socialLinks.linkedin} external>
      <Icon name="linkedin" title="LinkedIn"/>
    </Link>
    <Link href={socialLinks.readcv} external>
      <Icon name="readcv" title="read.cv"/>
    </Link>
  </div>
  <div class="links">
    <small><Link href="/colophon">Colophon</Link></small>
    <small class="copyright">© {new Date().getFullYear()}</small>
  </div>
</footer>

<style>
  footer {
    padding-bottom: 6.4rem;
    margin-top: 6.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .links {
    display: flex;
    gap: 1.6rem;
  }
  .icons {
    display: flex;
    gap: 1.6rem;
  }
  .copyright {
    color: var(--color-neutral-600);
  }
</style>