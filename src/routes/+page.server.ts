import { sub } from 'date-fns';
import PocketBase from 'pocketbase';

const pbURL = 'https://dry-weekend.pockethost.io/';

// I can only store the db date in UTC, and I dont wan't to convert it to the "correct time" there.
// But the local time is taking the time offset into account, so I have to subtract that in order to compare the two.
function convertToLocalUTC(date: Date): string {
	const convertedDate = sub(date, { hours: 7 });
	return convertedDate.toISOString().replace('T', ' ');
}

export async function load({ cookies }) {
	const client = new PocketBase(pbURL);
	const now = convertToLocalUTC(new Date(Date.now()));
	const records = await client.collection('events').getFullList({
		filter: `date >= "${now}" || endDate >= "${now}"`,
		sort: '-date'
	});

	records.sort((a, b) => {
		if ((a.endDate ?? a.date) > b.date) return 1;
		if ((a.endDate ?? a.date) < b.date) return -1;
		return 0;
	});

	const regionsCookie = cookies.get('regions');
	const regions = regionsCookie ? JSON.parse(regionsCookie) : [];
	return { records, regions };
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
