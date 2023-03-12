import type { HandleServerError } from '@sveltejs/kit';

export const handleError = (({ error }) => {
	return {
		message: 'Whoops!',
		code: error
	};
}) satisfies HandleServerError;
