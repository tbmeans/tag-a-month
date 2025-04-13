// server.ts

import { createServer, IncomingMessage } from 'node:http';
import env from './env'
import { Consts } from './appConstants';
import controllers from './controllers';
import * as api from './apiRequests';

const hostname = env.IS_PRODUCTION && '0.0.0.0' || 'localhost';
const port = env.IS_PRODUCTION && 80 || 4000;

const getCookies = (req: IncomingMessage) => {
	if (req.headers.cookie == null) {
		return [ 'null' ];
	}
	return req.headers.cookie.split(';')
};

const isValidCookies = (cookies: string[]) => {
	return cookies.map((cookie, x) => {
		const [ key, val ] = cookie.split('=');
		const word = x === 0 && Consts.KEY1 || Consts.KEY2;
		return key === word && val?.length > 0;
	});
};

const server = createServer(function(req, res) {
	const route: string = req.url.slice(1);
	const cookies: string[] = getCookies(req);
	const cookieCt1AndIsInvalid: boolean = (cookies.length === 1 && 
			isValidCookies(cookies)[0] === false);
	const cookieCt1AndIsValid: boolean = (cookies.length === 1 &&
			isValidCookies(cookies)[0]);
	const cookieCt2AndIsInvalid: boolean = (cookies.length === 2 &&
			isValidCookies(cookies).includes(false));
	const cookieCt2AndIsValid: boolean = (cookies.length === 2 &&
		isValidCookies(cookies).every(v => v));
	let controller: any;
	let params: string[] = [ route ];

	// /*
	if (cookieCt1AndIsInvalid && route !== Consts.NEX1 ||
			cookieCt2AndIsInvalid) {
		controller = controllers.index;
	} else if (cookieCt1AndIsInvalid && route === Consts.NEX1) {
		const data = api.toOAuthCookie(api.setOpts(route),
				{ consumer_key: env.CONSUMER_KEY });
		if (data[0].includes(Consts.ERR1)) {
			controller = controllers.index;
			params[1] = data[0] + '<br>';
		} else {
			controller = controllers[route];
			params[1] = api.extractValue(data[0]);
			res.setHeader('Set-Cookie', data);
		}
	} else if (cookieCt1AndIsValid && route !== Consts.NEX2) {
		controller = controllers.login;
		params[1] = cookies[0].split('=')[1];
	} else if (cookieCt1AndIsValid && route === Consts.NEX2) {
		const data = api.toOAuthCookie(api.setOpts(route), {
			consumer_key: env.CONSUMER_KEY,
			code: cookies[0].split('=')[1]
		});
		if (data[0].includes(Consts.ERR1)) {
			controller = controllers.index;
			params[1] = data[0] + '<br>';
		} else {
			controller = controllers[route];
			res.setHeader('Set-Cookie', data);
		}
	} else if (cookieCt2AndIsValid && route !== Consts.NEX3) {
		controller = controllers[Consts.NEX2];
		// a different message that says 'restarting app' instead of auth's message?
	} else if (cookieCt2AndIsValid && route === Consts.NEX3) {
		// api data request to fill app form etc.
		controller = controllers[route];
	} // */
	/* // FOR COOKIE TEST
	res.setHeader('Set-Cookie', [
		'token=50334a54; Secure; HttpOnly',
		'username=tbmeans; Secure; HttpOnly'
	]); */
	res.writeHead(200, { 'Content-Type': 'text/html' }); 
	/* // FOR COOKIE TEST
	const [tk, un] = getCookies(req);
	controller = (x) => x;
	params = [ tk + '<br>' + un ]; */
	res.end(controller(...params));
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
