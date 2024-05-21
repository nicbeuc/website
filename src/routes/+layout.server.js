import { GITHUB_TOKEN } from '$env/static/private';
import { githubAPIEndpoint } from '$lib/constants';

export async function load() {
	try {
		const response = await fetch(githubAPIEndpoint, {
			headers: {
				Authorization: `token ${GITHUB_TOKEN}`
			}
		});

		const commitData = await response.json();
		const timestamp = new Date(commitData.commit.committer.date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});

		const id = commitData.sha.slice(0, 7);

		const url = commitData.url;

		return {
			timestamp,
			id,
			url
		};
	} catch (error) {
		console.error('Error fetching timestamp');
	}
}
