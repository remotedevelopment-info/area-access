import type { HandleServerError } from '@sveltejs/kit';

export const handleError = (({ error }) => {
	console.log("Error =========> " , error);
	return {
		message: 'Whoops!',
		code: error
	};
}) satisfies HandleServerError;
