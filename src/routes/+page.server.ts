import { XataClient } from '../lib/xata';
import type { PageServerLoad } from './$types';

const xata = new XataClient({
	apiKey: import.meta.env.VITE_XATA_API_KEY,
	branch: import.meta.env.VITE_XATA_BRANCH
});

export const load: PageServerLoad = async () => {
	const friends = await xata.db.friends.getAll();

	return {
		friends
	};
};

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }: { request: Request }) => {
		const data = await request.formData();
		const name = data.get('name') as string;
		console.log(name);

		await xata.db.friends.create({ name });
	}
};
