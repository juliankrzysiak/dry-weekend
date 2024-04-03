import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export async function load() {
	const records = await pb.collection('events').getFullList({
		filter: 'date > @now',
		sort: '+date'
	});
	return { records };
}
