<script>
  import ProjectCard from '$lib/ProjectCard.svelte';
  import InlineLink from '$lib/InlineLink.svelte';
  import { metaContent } from '$/constants';
  export let data;

  const projects = data.projects;
</script>

<svelte:head>
  <title>{ metaContent.title }</title>
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

<style>
  section:first-of-type {
    padding-bottom: 4.8rem;
    border-bottom: var(--border);
  }

  section + section {
    margin-top: 4.8rem;
  }

  section p + p {
    margin-top: 1.6rem;
  }

  section h2 {
    color: var(--color-neutral-600);
  }
</style>