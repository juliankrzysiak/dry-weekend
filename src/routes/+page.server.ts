import { format, sub } from 'date-fns';
import PocketBase from 'pocketbase';

const pbURL = 'https://dry-weekend.pockethost.io/';

function removeUTC(date: string) {
	return date.slice(0, -1);
}

// I can only store the db date in UTC, and I dont wan't to convert it to the "correct time" there.
// But the local time is taking the time offset into account, so I have to subtract that in order to compare the two.
function convertToLocalUTC(date: Date): string {
	const convertedDate = sub(date, { hours: date.getTimezoneOffset() / 60 });
	return convertedDate.toISOString().replace('T', ' ');
}

export async function load() {
	const client = new PocketBase(pbURL);
	const now = convertToLocalUTC(new Date(Date.now()));
	const records = await client.collection('events').getFullList({
		filter: `date >= "${now}" || endDate >= "${now}"`,
		sort: '+date'
	});
	records.map((record) => {
		if (record.endDate) {
			const firstDate = format(removeUTC(record.date), 'EEEE, MMMM d');
			const secondDate = format(removeUTC(record.endDate), 'd');
			return (record.date = `${firstDate} - ${secondDate}`);
		} else return (record.date = format(removeUTC(record.date), 'EEEE, MMMM d · h:mm aaa'));
	});
	return { records };
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
