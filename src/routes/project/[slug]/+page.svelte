<script>
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
	<svelte:component this={content} />
</article>