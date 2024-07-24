import { error as svelteError } from '@sveltejs/kit';

export const load = async ({ params }) => {
  try {
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
  } catch (error) {
    throw svelteError(404, 'Project not found.');
  }
}