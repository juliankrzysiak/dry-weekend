import PocketBase from 'pocketbase';

const url = 'https://dry-weekend.pockethost.io/';
const client = new PocketBase(url);

export async function load() {
	const records = await client.collection('events').getFullList({
		filter: 'date > @now',
		sort: '+date'
	});
	return { records };
}
