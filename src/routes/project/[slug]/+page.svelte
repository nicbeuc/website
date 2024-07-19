<script>
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
    <h1 class="page-title">{client}</h1>
    <dl class="meta">
      <dt>Client</dt>
      <dd>{client}</dd>
      <dt>Team</dt>
      <dd>{company}</dd>
      <dt>Year</dt>
      <dd>{year}</dd>
    </dl>
  </header>
	<svelte:component this={content} />
</article>

<style>
  header {
    padding-bottom: 3.2rem;
    margin-bottom: 3.2rem;
    border-bottom: var(--border);
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

  dl {
    font-size: var(--font-size-body-sm);
    color: var(--color-neutral-600);
    display: grid;
    grid-auto-flow: column dense;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    column-gap: 4.8rem;
    justify-content: start;

    & dd {
      color: black;
    }
  }
</style>