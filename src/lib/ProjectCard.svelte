<script>
  import Image from "$lib/Image.svelte";
  export let project;

  const {
      title,
      thumbnail,
      company,
      lead,
      year,
      tags,
      slug
    } = project;
</script>

<article>
  <Image alt="Project thumbnail for {title}" name={thumbnail} --aspect-ratio="3/2"/>
  <section>
    <a href="/project/{slug}" aria-label="Read case study for {title}"><h2>{title}</h2></a>
    <p>{lead}</p>
    <dl>
      <dt>Year</dt>
      <dd>{year}</dd>
      <dt>At</dt>
      <dd>{company}</dd>
    </dl>
  </section>
</article>

<style>
  article {
    position: relative;
  }

  section {
    margin-top: 3.2rem;
    display: grid;
    grid-template-columns: 1fr auto;
    column-gap: 2.4rem;
    grid-template-areas:
      "title meta"
      "lead  meta";
    align-items: start;
  }

  a {
    grid-area: title;
    text-decoration: none;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
    }
  }

  p {
    grid-area: lead;
    font-size: var(--font-size-body-sm);
  }

  dl {
    font-size: var(--font-size-body-sm);
    color: var(--color-neutral-600);
    grid-area: meta;
    display: grid;
    grid-template-columns: auto 1fr;
    min-width: 20rem;
    border-top: var(--border-dashed);
  }

  dd,dt {
    padding: .6rem 0;
    border-bottom: var(--border-dashed);
  }

  dd {
    text-align: right;
    color: black;
    padding-inline-start: 2rem;
  }
</style>