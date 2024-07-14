<script>
  import Tags from '$lib/Tags.svelte';
  import { metaContent as meta } from '$/constants';
	export let data;

  const {
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
    <h1>{client}</h1>
    <p>{year}</p>
    <Tags {tags} ref="page-tags"/>
  </header>
	<svelte:component this={content} />
</article>

<style>
  header {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: baseline;
    grid-template-areas:
      "title year"
      "tags  tags";
    margin-bottom: 2.4rem;
    & h1 {
      grid-area: title;
      margin-inline-end: 1.6rem;
    }

    & p {
      grid-area: year;
      color: var(--color-neutral-600);
      font-size: var(--font-size-body-sm);
    }
  }

  :global([ref="page-tags"]) {
    grid-area: tags;
    margin-top: .8rem;
  }
</style>