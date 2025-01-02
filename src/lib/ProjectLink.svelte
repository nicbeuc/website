<script>
  import Icon from "$lib/Icon.svelte";
  export let project;

  const {
    title,
    client,
    info,
    link,
    year,
    team,
    roles
  } = project;
</script>

<li>
  <article>
    <h3>
      {#if link}
        <a href={link} target="_blank">
          {title}
          <Icon name="arrow-top-right" --icon-size=".9em"/>
        </a>
      {:else}
        {title}
      {/if}
    </h3>
    <dl>
      <dt class="sr-only">Roles</dt>
      <dd>
        {#each roles as role, i}
          {i + 1 !== roles.length ? role + ', ' : role}
        {/each}
      </dd>
      <dt class="sr-only">Team</dt>
      <dd>Make Me Modern</dd>
    </dl>
    <p>{year}</p>
  </article>
</li>

<style>
  article {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas:
      "title year"
      "meta  year";
    column-gap: 1rem;
    row-gap: .6rem;

    @media screen and (max-width: 499px) {
      row-gap: .8rem;
    }
  }

  li:not(:first-of-type) {
    margin-top: 2.4rem;
  }

  p {
    grid-area: year;
    font-size: var(--font-size-body-sm);
    color: var(--color-neutral-600);
  }

  dl {
    display: flex;
    align-items: start;
    grid-area: meta;
  }

  dd {
    display: block;
    color: var(--color-neutral-700);
    font-size: 1rem;
    font-weight: 200;

    &:has(svg) {
      padding: 0;
    }

    & svg {
      width: 2rem;
      height: 2rem;
    }

    &:not(:last-of-type) {
      padding-inline-end: .8rem;
      margin-inline-end: .8rem;
      --__dotted-border-color: var(--dotted-border-color, var(--color-neutral-400));
      --__dotted-border-gap: var(--dotted-border-gap, 3px);
      background-size: 1px 100%, 100% 1px, 1px 100%, 100% 1px;
      background-repeat: no-repeat;
	    background-image: repeating-linear-gradient(0deg, transparent, transparent 1px, transparent 0, transparent var(--__dotted-border-gap), transparent 0), repeating-linear-gradient(90deg, transparent, transparent 1px, transparent 0, transparent var(--__dotted-border-gap), transparent 0), repeating-linear-gradient(180deg, var(--__dotted-border-color), var(--__dotted-border-color) 1px, transparent 0, transparent var(--__dotted-border-gap), var(--__dotted-border-color) 0), repeating-linear-gradient(270deg, transparent, transparent 1px, transparent 0, transparent var(--__dotted-border-gap), transparent 0);
	    background-position: 0 0, 0 0, 100% 0, 0 100%;
    }
  }

  h3 {
    grid-area: title;
    color: black;
    line-height: 1.8rem;
    margin-bottom: 0;
    display: flex;
    align-items: baseline;
    line-height: 1.2;
    gap: 1rem;
    font-weight: 300;

    & a {
      text-decoration: none;
      /* display: flex; */
      align-items: center;
      gap: .35em;

      & svg {
        display: inline;
        vertical-align: middle;
        transform: translateY(-.1rem);
        margin-inline-start: .35rem;
        color: var(--color-neutral-500);
        transition: color var(--transition-fast);
      }

      &:hover svg {
        color: black;
      }
    }
  }
</style>