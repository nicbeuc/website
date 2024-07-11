<script>
	export let data;

  $: ({
    client,
    thumbnail,
    company,
    lead,
    link,
    year,
    tags,
    content
  } = data);
</script>

<article>
	<svelte:component this={content} />
</article>