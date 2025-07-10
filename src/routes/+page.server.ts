import { parseDate } from '$lib';
import { addMonths } from 'date-fns';
import PocketBase from 'pocketbase';
import { PB_URL } from '$env/static/private';

export async function load({ cookies }) {
	const client = new PocketBase(PB_URL);
	const todayDate = parseDate(new Date(Date.now()));
	const monthAwayDate = parseDate(addMonths(todayDate, 1));
	// Comparing timestamp to date to keep today's event visible until tomorrow
	const records = await client.collection('events').getFullList({
		filter: `(date >= "${todayDate}" || endDate >= "${todayDate}") && date <= "${monthAwayDate}"`,
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
		const client = new PocketBase(PB_URL);
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
