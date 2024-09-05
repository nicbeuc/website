<script>
  import ProjectCard from '$lib/ProjectCard.svelte';
  import InlineLink from '$lib/InlineLink.svelte';
  import UnderConstruction from '$lib/UnderConstruction.svelte';
  import { metaContent } from '$/constants';
  export let data;

  const projects = data.projects;
</script>

<svelte:head>
  <title>{ metaContent.title }</title>
  <meta name="description" content="Nick Beuchat is a designer and creative developer with a passion for crafting simple, inclusive solutions for the web.">
</svelte:head>

<section>
  <h1 class="sr-only">Nick Beuchat - Designer and Creative Developer</h1>
  <p>Hi, I'm Nick Beuchat, a designer and creative developer with a passion for crafting simple, inclusive solutions for the web.</p>
  <p>Currently, I'm living and working in my hometown of Knoxville, TN, designing and developing user experiences for <InlineLink href="https://makememodern.com" external>Make Me Modern.</InlineLink></p>
</section>
<section>
  <h2>Featured Work</h2>
  {#if projects.length}
    {#each projects as project}
      <ProjectCard {project} />
    {/each}
  {/if}
</section>
<section>
  <h2>Personal Projects</h2>
  <UnderConstruction>Coming Soon</UnderConstruction>
</section>

<style>
  section + section {
    border-top: var(--border);
    margin-top: 4.8rem;
    padding-top: 4.8rem;
  }

  section p + p {
    margin-top: 1.6rem;
  }

  section h2 {
    color: var(--color-neutral-600);
  }
</style>