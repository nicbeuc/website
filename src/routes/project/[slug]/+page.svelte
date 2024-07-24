<script>
  import Link from '$lib/Link.svelte';
  import Image from '$lib/Image.svelte';
  import Icon from '$lib/Icon.svelte';
  import { metaContent as meta } from '$/constants';
	export let data;

  const {
    title,
    client,
    thumbnail,
    company,
    lead,
    link,
    year,
    tags,
    content
  } = data;
</script>

<svelte:head>
  <title>{client} · {meta.title}</title>
</svelte:head>

<article>
  <header>
    <h1 class="page-title">{title}</h1>
    <dl class="meta">
      <dt>Client</dt>
      <dd>{client}</dd>
      <dt>Team</dt>
      <dd>{company}</dd>
      <dt>Year</dt>
      <dd>{year}</dd>
    </dl>
    {#if link}
      <Link href={link} external>View live site</Link>
    {/if}
  </header>
  <Image alt="Image of the {client} site" name={thumbnail} caption="A look at the final site" />
  <section>
    <svelte:component this={content} />
  </section>
</article>

<style>
  header {
    padding-bottom: 2.4rem;
    margin-bottom: 4.8rem;
    border-bottom: var(--border);
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas:
      "title title"
      "meta   link";

    @media screen and (max-width: 499px) {
      grid-template-areas:
        "title"
        "meta"
        "link";
    }

    & h1 {
      grid-area: title;
    }

    & a {
      grid-area: link;
      align-self: end;

      @media screen and (max-width: 499px) {
        margin-top: 1.6rem;
      }
    }
  }

  dl {
    font-size: var(--font-size-body-sm);
    color: var(--color-neutral-600);
    display: grid;
    grid-area: meta;
    grid-auto-flow: column dense;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    column-gap: 4.8rem;
    justify-content: start;

    @media screen and (max-width: 499px) {
      column-gap: 2.4rem;
    }

    & dd {
      color: black;
    }
  }

  section {
    margin-top: 4.8rem;
  }
</style>