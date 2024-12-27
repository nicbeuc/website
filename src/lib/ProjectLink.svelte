<script>
  import Icon from "$lib/Icon.svelte";
  import M3Icon from "$lib/M3Icon.svelte";
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
  {#if info?.length > 0}
    <p>{info}</p>
  {/if}
  <dl>
    <dt class="sr-only">Team</dt>
    <dd><span class="sr-only">Make Me Modern</span><M3Icon /></dd>
    <dt class="sr-only">Year</dt>
    <dd>{year}</dd>
    <dt class="sr-only">Roles</dt>
    <dd>
      {#each roles as role, i}
        {i + 1 !== roles.length ? role + ', ' : role}
      {/each}
    </dd>
  </dl>
</article>

<style>
  article {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas:
      "title meta"
      "info  meta";
    column-gap: 1rem;
    row-gap: .8rem;

    @media screen and (max-width: 499px) {
      row-gap: 1.2rem;
      grid-template-columns: 1fr;
      grid-template-areas:
        "title"
        "info"
        "meta";
    }

    &:not(:first-of-type) {
      margin-top: 2.8rem;

      @media screen and (max-width: 499px) {
        margin-top: 3.2rem;
      }
    }
  }

  p {
    grid-area: info;
    font-size: var(--font-size-body-sm);
    color: var(--color-neutral-600);
  }

  dl {
    display: flex;
    align-items: start;
    grid-area: meta;
    gap: .1rem;

    @media screen and (max-width: 499px) {
      gap: .6rem;
    }
  }

  dd {
    display: block;
    background-color: var(--color-neutral-100);
    color: var(--color-neutral-700);
    font-size: 1rem;
    font-weight: 400;
    line-height: 2rem;
    padding: 0 .6rem;
    border-radius: 100vw;
    box-shadow: 0 0 0 .1rem var(--color-neutral-300);

    &:has(svg) {
      padding: 0;
    }

    & svg {
      width: 2rem;
      height: 2rem;
    }
  }

  h3 {
    grid-area: title;
    color: black;
    font-size: var(--font-size-body-lg);
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
        color: var(--color-neutral-500);
        transition: color var(--transition-fast);
      }

      &:hover svg {
        color: black;
      }
    }

    &::after {
      content: '';
      position: relative;
      align-self: center;
      flex-grow: 1;
      border-bottom: var(--border-dashed);
      margin-top: .1rem;
    }

    @media screen and (max-width: 499px) {
      &::after {
        display: none;
      }
    }
  }
</style>