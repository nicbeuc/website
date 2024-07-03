<script>
  import Image from "$lib/Image.svelte";
  import Icon from "$lib/Icon.svelte";
  export let project;

  const {
      client,
      thumbnail,
      company,
      lead,
      link,
      year,
      tags,
      slug
    } = project;
</script>

<article>
  <div class="media-wrapper">
    <Image alt="Project thumbnail for {client}" name={thumbnail} --aspect-ratio="3/2"/>
    <div class="links">
      <a href="/project/{slug}">View project <Icon name="eye" /></a>
      <a href="{link}" target="_blank">View live site</a>
    </div>
  </div>
  <section>
    <p>{lead}</p>
    <dl class="meta">
      <dt>Year</dt>
      <dd>{year}</dd>
      <dt>For</dt>
      <dd>{client}</dd>
      <dt>With</dt>
      <dd>{company}</dd>
    </dl>
    <dl class="tags">
      {#each tags as tag}
        <dd>{tag}</dd>
      {/each}
    </dl>
  </section>
</article>

<style>
  article {
    display: block;
    position: relative;
  }

  .media-wrapper {
    border-radius: var(--border-radius-media);
    overflow: hidden;
    border: var(--border-subtle);
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