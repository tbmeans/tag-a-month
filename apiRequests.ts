// apiRequests.ts

import { Consts } from './appConstants';
import { request } from 'node:http';

export interface ApiHeaders {
	[head: string]: string;
}

export interface RequestOpts {
	hostname: string;
	path: string;
	method: string;
	headers: ApiHeaders;
}

export interface RequestBods {
	consumer_key: string;
	redirect_uri?: string;
	code?: string;
	access_token?: string;
	tag?: string;
}

const setOpts = (routeName: string): RequestOpts => {
	const names: string[] = [
		Consts.NEX1,
		Consts.NEX2,
		Consts.NEX3,
	];
	const actions: string[] = [
		"/oauth/request",
		"/oauth/authorize",
		'/get',
		'/send',
	];
	return {
		hostname: 'getpocket.com',
		path: '/v3' + actions[names.indexOf(routeName)],
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=UTF-8',
			'X-Accept': 'application/json',
		},
	};
};

const toOAuthCookie = (opt: RequestOpts, bod: RequestBods): any[] => {
	const keys = [ 'token', 'username' ];
	const vals: any[] = [];
	const req = request(opt, (res) => {
		res.on('data', (jsn) => {
			const [ dat1, dat2 ] = Object.values(JSON.parse(jsn));
			vals[0] = dat1;
			if (dat2) {
				vals[1] = dat2;
			}
		});
	});
	req.on('error', (err) => {
		vals[0] = Consts.ERR1 + err.message;
	});
	req.write(bod);
	req.end();
	return (vals[0].includes(Consts.ERR1) && vals ||
			vals.map((v, x) => keys[x] + '=' + v + Consts.OPTS));
};

const extractValue = (cookie: string) => {
	return cookie.slice(cookie.indexOf('=') + 1, cookie.indexOf(';'))
};

const toData = (opt: RequestOpts, bod: RequestBods) => {};

export { setOpts, toOAuthCookie, extractValue, toData, }
