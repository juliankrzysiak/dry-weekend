import { format } from 'date-fns';

export default function formatDate(date: string, endDate: string): string {
	if (endDate) {
		const firstDate = format(removeUTC(date), 'EEEE, MMMM d');
		const secondDate = format(removeUTC(endDate), 'MMM d');
		return (date = `${firstDate} - ${secondDate}`);
	} else return (date = format(removeUTC(date), 'EEEE, MMMM d · h:mm aaa'));
}

function removeUTC(date: string) {
	return date.slice(0, -1);
}
