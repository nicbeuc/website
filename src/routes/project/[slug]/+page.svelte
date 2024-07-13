<script>
  import Tags from '$lib/Tags.svelte';
	export let data;

  const {
    client,
    thumbnail,
    company,
    lead,
    link,
    year,
    tags,
    content
  } = data;
</script>

<article>
  <header>
    <h1>{client}</h1>
    <p>{year}</p>
    <Tags {tags} />
  </header>
	<svelte:component this={content} />
</article>