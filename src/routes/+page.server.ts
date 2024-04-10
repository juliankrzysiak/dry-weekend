import PocketBase from 'pocketbase';
import { format } from 'date-fns';

const url = 'https://dry-weekend.pockethost.io/';
const client = new PocketBase(url);

function removeUTC(date: string) {
	return date.slice(0, -1);
}

export async function load() {
	const records = await client.collection('events').getFullList({
		filter: 'date > @now',
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
		const data = await request.formData();

		if (data.get('username')) return;

		client.collection('suggestions').create({
			title: data.get('title'),
			url: data.get('url')
		});
	}
};
