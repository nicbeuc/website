<script>
  import ProjectCard from '$/lib/ProjectCard.svelte';
  export let data;

  $: ({ projects } = data);
</script>

<section>
  <h1 class="sr-only">Nick Beuchat - Designer and Creative Developer</h1>
  <p>Hi, I'm Nick Beuchat, a designer and creative developer with a passion for crafting simple, inclusive solutions for the web.</p>
  <p>Currently, I'm living and working in my hometown of Knoxville, TN, designing websites and user interfaces for Make Me Modern.</p>
</section>
<section>
  <h2>Featured Work</h2>
  {#each projects as project}
    <ProjectCard {project} />
  {/each}
</section>

<style>

  @media screen and (min-width: 800px) {
    section p:first-of-type {
      margin-top: 5.6rem;
    }
  }

  section:first-of-type {
    padding-bottom: 4.8rem;
    border-bottom: var(--border);
  }

  section + section {
    margin-top: 4.8rem;
  }

  section p + p {
    margin-top: 2.4rem;
  }
</style>