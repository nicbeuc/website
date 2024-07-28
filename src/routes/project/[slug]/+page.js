import { error as svelteError } from '@sveltejs/kit';

export const load = async ({ params }) => {
  try {
    const project = await import(`../../../projects/${params.slug}.md`);
    const {
      title,
      client,
      thumbnail,
      company,
      lead,
      link,
      year,
      tags,
      role
    } = project.metadata;
    const content = project.default;

    return {
      title,
      client,
      thumbnail,
      company,
      lead,
      link,
      year,
      tags,
      role,
      content
    };
  } catch (error) {
    throw svelteError(404, "Couldn't find that project.");
  }
}