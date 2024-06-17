import { isAfter, endOfWeek, format } from 'date-fns';
import type { RecordModel } from 'pocketbase';

export function formatDate(date: string, endDate: string): string {
	if (endDate) {
		const firstDate = format(removeUTC(date), 'EEEE, MMMM d');
		const secondDate = format(removeUTC(endDate), 'MMM d');
		return (date = `${firstDate} - ${secondDate}`);
	} else return (date = format(removeUTC(date), 'EEEE, MMMM d · h:mm aaa'));
}

function removeUTC(date: string) {
	return date.slice(0, -1);
}

export function checkLastEventOfWeek(records: RecordModel[], index: number) {
	const endDate = endOfWeek(records[index]?.endDate || records[index]?.date, { weekStartsOn: 2 });
	const nextDate = records[index + 1]?.endDate || records[index + 1]?.date;
	return isAfter(nextDate, endDate);
}
