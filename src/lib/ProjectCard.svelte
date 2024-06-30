<script>
  import Image from "$lib/Image.svelte";
  export let project;

  const {title, thumbnail} = project;
</script>

<article>
  <Image alt="Project thumnail for {title}" name={thumbnail} --aspect-ratio="3/2"/>
</article>