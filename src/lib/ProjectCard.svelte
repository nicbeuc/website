<script>
  import Image from "$lib/Image.svelte";
  export let project;

  const {
      client,
      thumbnail,
      company,
      lead,
      year,
      tags,
      slug
    } = project;
</script>

<article>
  <a href="/project/{slug}" aria-label="View case study for {client}">
    <Image alt="Project thumbnail for {client}" name={thumbnail} --aspect-ratio="3/2"/>
    <section>
      <p>{lead}</p>
      <dl class="meta">
        <dt>Client</dt>
        <dd>{client}</dd>
        <dt>Year</dt>
        <dd>{year}</dd>
        <dt>With</dt>
        <dd>{company}</dd>
      </dl>
      <dl class="tags">
        {#each tags as tag}
          <dd>{tag}</dd>
        {/each}
      </dl>
    </section>
  </a>
</article>

<style>
  article a {
    text-decoration: none;
    display: block;
    position: relative;
  }

  section {
    margin-top: 3.2rem;
    display: grid;
    grid-template-columns: 1fr auto;
    column-gap: 3.2rem;
    grid-template-areas:
      "lead  meta"
      "tags  meta";
    align-items: start;
  }

  p {
    grid-area: lead;
  }

  .meta {
    font-size: var(--font-size-body-sm);
    color: var(--color-neutral-600);
    grid-area: meta;
    display: grid;
    grid-template-columns: auto 1fr;
    min-width: 20rem;
    border-top: var(--border-dashed);

    & dd, & dt {
      padding: .6rem 0;
      border-bottom: var(--border-dashed);
    }

    & dd {
      text-align: right;
      color: black;
      padding-inline-start: 2rem;
    }
  }

  .tags {
    grid-area: tags;
    margin-top: 1.6rem;

    & dd {
      display: inline;
      padding: .4rem .8rem;
      border-radius: .4rem;
      font-size: var(--font-size-body-sm);
      color: var(--color-neutral-700);
      background-color: var(--color-neutral-200);
      margin-inline-end: .8rem;
    }
  }

</style>