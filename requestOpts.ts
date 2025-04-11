// requestOpts.ts

interface Headers {
	[head: string]: string;
}

interface RequestOpts {
	hostname: string;
	path: string;
	method: string;
	headers: Headers;
}

export default function setOpts(pathEnd: string): RequestOpts {
	return {
		hostname: 'getpocket.com',
		path: '/v3' + pathEnd,
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=UTF-8',
			'X-Accept': 'application/json',
		},
	};
}
