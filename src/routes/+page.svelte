<script>
  import ProjectCard from '$lib/ProjectCard.svelte';
  import ProjectLink from '$lib/ProjectLink.svelte';
  import InlineLink from '$lib/InlineLink.svelte';
  import UnderConstruction from '$lib/UnderConstruction.svelte';
  import M3Icon from '$lib/M3Icon.svelte';
  import { metaContent, otherProjects } from '$/constants';
  export let data;

  const projects = data.projects;
</script>

<svelte:head>
  <title>{ metaContent.title }</title>
  <meta name="description" content="Nick Beuchat is a designer and creative developer with a passion for crafting simple, inclusive solutions for the web.">
</svelte:head>

<section>
  <h1 class="sr-only">Nick Beuchat - Designer and Creative Developer</h1>
  <p><strong>Hi, I'm Nick Beuchat</strong>, a designer and creative developer with a passion for crafting simple, inclusive solutions for the web.</p>
  <p>Currently, I'm living and working in my hometown of Knoxville, TN, designing and developing user experiences for <span class="icon-wrapper"><M3Icon /></span><InlineLink href="https://makememodern.com" external>Make Me Modern.</InlineLink></p>
</section>
<section class="dotted-border-top">
  <h2>Featured Work</h2>
  {#if projects.length > 0}
    {#each projects as project}
      <ProjectCard {project} />
    {/each}
  {/if}
</section>
<section class="dotted-border-top">
  <h2>Other Work</h2>
  <ul>
    {#if otherProjects.length > 0}
      {#each otherProjects as project}
        <ProjectLink {project} />
      {/each}
    {/if}
  </ul>
</section>

<style>
  section + section {
    margin-top: 5.6rem;
    padding-top: 5.6rem;
  }

  section p + p {
    margin-top: 1.6rem;
  }

  section h2 {
    color: var(--color-neutral-600);
    margin-bottom: 3.2rem;
    font-weight: 200;
    font-size: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
</style>