import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ params, cookies }) => {
	const location = `${params.area}/login`;
	if (browser) {
		const sessionKey = cookies.get(params.area);
		if (!sessionKey) {
			if (browser) return await goto(location);
		} else {
			return {
				session: sessionKey
			};
		}
	} else throw redirect(302, location);
}) satisfies PageServerLoad;
