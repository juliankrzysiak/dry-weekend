import { parseDate } from '$lib';
import { addMonths } from 'date-fns';
import PocketBase from 'pocketbase';

const pbURL = 'https://dry-weekend.pockethost.io/';

export async function load({ cookies }) {
	const client = new PocketBase(pbURL);
	const monthAwayDate = parseDate(addMonths(Date.now(), 1));
	const records = await client.collection('events').getFullList({
		filter: `(date >= @todayStart || endDate >= @todayStart) && date <= "${monthAwayDate}"`,
		sort: '-date'
	});

	records.sort((a, b) => {
		if ((a.endDate ?? a.date) > b.date) return 1;
		if ((a.endDate ?? a.date) < b.date) return -1;
		return 0;
	});

	const region = cookies.get('region') || 'Los Angeles';
	return { records, region };
}

export const actions = {
	default: async ({ request }) => {
		const client = new PocketBase(pbURL);
		const data = await request.formData();

		const title = data.get('title');
		const url = data.get('url');
		const username = data.get('username');

		if (username) return;

		client.collection('suggestions').create({
			title,
			url
		});
		return { success: true };
	}
};
