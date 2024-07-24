export function handleError({ error }) {
	console.error(error.stack);

	return {
		message: "Couldn't find that page.",
	};
}