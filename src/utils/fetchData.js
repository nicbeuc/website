export const projects = async () => {
	const projectFiles = import.meta.glob('/src/projects/*.md'); /**/
	const iterableProjectFiles = Object.entries(projectFiles);

	const projects = await Promise.all(
		iterableProjectFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const slug = path.split('/').at(-1)?.replace('.md', '');

			return {
				metadata: metadata,
				slug: slug
			};
		})
	);

	return projects;
};
