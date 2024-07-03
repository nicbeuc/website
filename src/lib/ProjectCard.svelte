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
  <a href="/project/{slug}" aria-labelledby="view-project">
    <div class="media-wrapper">
      <Image alt="Project thumbnail for {client}" name={thumbnail} --aspect-ratio="3/2"/>
      <span id="view-project">View project <Icon name="eye" /></span>
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
  </a>
</article>

<style>
  a {
    text-decoration: none;
    display: block;
    position: relative;

    &:focus #view-project {
      opacity: 1;
      bottom: 2.4rem;
      filter: blur(0px);
      transform: translateX(-50%, -50%) scale(1);
    }

    @media (pointer:fine) {
      &:hover #view-project {
        opacity: 1;
        bottom: 2.4rem;
        filter: blur(0px);
        transform: translateX(-50%, -50%) scale(1);
      }
    }
  }

  .media-wrapper {
    border-radius: var(--border-radius-media);
    overflow: hidden;
    border: var(--border-subtle);
    position: relative;

    & span {
      display: flex;
      gap: .4rem;
      align-items: center;
      padding: .4rem .8rem;
      border-radius: .4rem;
      font-size: var(--font-size-body-sm);
      background-color: rgba(255, 255, 255, .75);
      border: 1px solid white;
      position: absolute;
      left: 50%;
      bottom: .4rem;
      opacity: 0;
      transition: all var(--transition-fast);
      transform: translateX(-50%) scale(0.9);
      filter: blur(10px);
      backdrop-filter: blur(10px);
    }
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