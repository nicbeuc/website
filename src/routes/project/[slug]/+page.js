export const load = async ({ params }) => {
	const project = await import(`../../../projects/${params.slug}.md`);
	const {
    client,
    thumbnail,
    company,
    lead,
    link,
    year,
    tags
  } = project.metadata;
	const content = project.default;

	return {
    client,
    thumbnail,
    company,
    lead,
    link,
    year,
    tags,
    content
	};
}