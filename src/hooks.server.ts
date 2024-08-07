const securityHeaders = {
	'Content-Security-Policy':
		"default-src 'self' https:; img-src 'self' data:; frame-ancestors 'none'; script-src 'self' 'unsafe-inline'",
	'Referrer-Policy': 'same-origin',
	'Strict-Transport-Security': 'max-age=63072000',
	'X-Content-Type-Options': 'nosniff'
};
export const handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	Object.entries(securityHeaders).forEach(([header, value]) => response.headers.set(header, value));

	return response;
};
