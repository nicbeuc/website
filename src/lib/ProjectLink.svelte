<script>
  import Icon from "$lib/Icon.svelte";
  import Link from "$lib/Link.svelte";
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
  <h3>{title}</h3>
  {#if info?.length > 0}
    <p>{info}</p>
  {/if}
  <!-- <dl>
    <dt>Role{roles.length > 1 ? 's' : ''}</dt>
    <dd>
      {#each roles as role, i}
        {i + 1 !== roles.length ? role + ', ' : role}
      {/each}
    </dd>
    <dt>Team</dt>
    <dd>{team}</dd>
    <dt>Year</dt>
    <dd>{year}</dd>
  </dl> -->
  {#if link}
    <Link href={link} external>View live site</Link>
  {/if}
</article>

<style>
  article {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas:
      "title link"
      "info  info"
      "meta  meta";

    @media screen and (max-width: 499px) {
      grid-template-areas:
        "title"
        "info"
        "meta"
        "link";
    }

    &:not(:first-of-type) {
      margin-top: 3.2rem;
      /* border-top: var(--border); */
    }

    & a {
      grid-area: link;
      align-self: baseline;
      line-height: 1.8rem;

      @media screen and (max-width: 499px) {
        margin-top: 1.6rem;
      }
    }
  }

  p {
    grid-area: info;
    font-size: var(--font-size-body-sm);
    color: var(--color-neutral-600);
  }

  dl {
    font-size: var(--font-size-body-sm);
    color: var(--color-neutral-600);
    display: grid;
    grid-area: meta;
    grid-auto-flow: column dense;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    column-gap: 2.4rem;
    justify-content: start;
    margin-top: 1.6rem;

    /* @media screen and (max-width: 949px) {
      grid-template-rows: repeat(4, auto);

      & dt:nth-of-type(even) {
        margin-top: 1.2rem;
      }
    } */

    @media screen and (max-width: 499px) {
      column-gap: 2.4rem;
    }

    & dd {
      color: black;
    }
  }

  h3 {
    grid-area: title;
    color: black;
    font-size: var(--font-size-body-lg);
    margin-bottom: .8rem;
    line-height: 1.8rem;
  }
</style>