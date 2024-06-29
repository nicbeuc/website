import { fetchProjects } from '../../../utils/fetchData';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const projects = await fetchProjects();
	return json(projects);
};
