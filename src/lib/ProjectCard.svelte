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
    title,
    year,
    tags,
    slug,
    roles
  } = project;
</script>

<article>
  <a href="/project/{slug}" aria-labelledby="view-project">
    <div class="media-wrapper">
      <Image alt="Project thumbnail for {client}" name={thumbnail} --aspect-ratio="3/2"/>
      <span id="view-project">View project <Icon name="arrow-right" --icon-size="1.2em" /></span>
    </div>
    <section>
      <div class="info">
        <h3>{title}</h3>
        <p>{lead}</p>
      </div>
      <dl class="meta dotted-border-top">
        <dt class="dotted-border-bottom">Client</dt>
        <dd class="dotted-border-bottom">{client}</dd>
        <dt class="dotted-border-bottom">Role{roles.length > 1 && 's'}</dt>
        <dd class="dotted-border-bottom">
          {#each roles as role, i}
            {i + 1 !== roles.length ? role + ', ' : role}
          {/each}
        </dd>
        <dt class="dotted-border-bottom">Team</dt>
        <dd class="dotted-border-bottom">{company}</dd>
        <dt class="dotted-border-bottom">Year</dt>
        <dd class="dotted-border-bottom">{year}</dd>
      </dl>
    </section>
  </a>
</article>

<style>
  a {
    text-decoration: none;
    display: block;
    position: relative;

    & #view-project svg {
      color: var(--color-neutral-600);
    }

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
    overflow: hidden;
    position: relative;

    @media screen and (max-width: 499px) {
      overflow: visible;
    }

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
      backdrop-filter: var(--filter-blur-mid);
    }
  }

  section {
    margin-top: 3.2rem;
    display: grid;
    grid-template-columns: 1fr auto;
    column-gap: 3.2rem;
    grid-template-areas:
      "info  meta";
    align-items: start;

    @media screen and (max-width: 999px) {
      grid-template-columns: 1fr;
      row-gap: 2rem;
      grid-template-areas:
        "info"
        "meta";
    }
  }

  .info {
    grid-area: info;

    & h3 {
      font-size: var(--font-size-heading);
      margin-bottom: 1.2rem;
      color: black;
      font-weight: 300;
    }

    & p {
      color: var(--color-neutral-700);
      max-width: 40ch;
    }
  }

  .meta {
    font-size: var(--font-size-body-sm);
    color: var(--color-neutral-600);
    grid-area: meta;
    display: grid;
    grid-template-columns: auto 1fr;
    min-width: 22rem;

    @media screen and (max-width: 999px) {
      background-image: none !important;
      grid-auto-flow: column dense;
      grid-template-columns: auto;
      column-gap: 4.8rem;
      justify-content: start;
      grid-template-rows: repeat(4, auto);

      & dt:nth-of-type(even) {
        margin-top: 1.2rem;
      }

      & * {
        background-image: none !important;
      }
    }

    & dd, & dt {
      @media screen and (min-width: 1000px) {
        padding: .6rem 0;
      }
    }

    & dd {
      color: black;
      @media screen and (min-width: 1000px) {
        padding-inline-start: 2rem;
        text-align: right;
      }
    }
  }
</style>