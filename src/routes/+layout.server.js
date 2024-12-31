import { GITHUB_TOKEN } from '$env/static/private';
import { githubAPIEndpoint } from '$/constants';

export const prerender = true;

export async function load() {
	try {
		const response = await fetch(githubAPIEndpoint, {
			headers: {
				Authorization: `token ${GITHUB_TOKEN}`
			}
		});

		const commitData = await response.json();
		const timestamp = new Date(commitData.commit.committer.date).toLocaleDateString('en-US', {
			year: '2-digit',
			month: '2-digit',
			day: '2-digit',
			hour12: false,
			hour: '2-digit',
  		minute: '2-digit',
  		second: '2-digit',
			timeZone: 'UTC'
		});

		const id = commitData.sha.slice(0, 7);

		const url = commitData.html_url;

		return {
			commitData: {
				timestamp,
				id,
				url
			}
		};
	} catch (error) {
		return {
			commitData: {
				error: {
					message: 'Could not fetch timestamp.'
				}
			}
		};
	}
}
