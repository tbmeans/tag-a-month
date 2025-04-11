// server.ts
// Helper resource for how to set up a tsconfig.json and run tsc from
// digital ocean community tut, "setting-up-a-node-project-with-typescript".

import { createServer, request } from 'node:https';
import { readFileSync } from 'node:fs';
import { Consts } from './appConstants';
import setOpts from './requestOpts';
import { RequestBods } from './requestBods';
import controllers from './controllers';

const options = {
	key: readFileSync('private-key.pem'),
	cert: readFileSync('certificate.pem'),
};

const pathCompletions = (a: string) => {
	switch(a) {
		case Consts.NEX1:
			return "/oauth/request";
		case Consts.NEX2:
			return "/oauth/authorize";
		case Consts.NEX3:
			return "get"; // display data on arrival to saves-dash
		default:
			return "send"; // planned button on saves-dash somehow triggers this w/o a route
	}
};

createServer(options, (req, res) => {
	const rte = req.url.slice(1);
	const opt = setOpts(pathCompletions(rte));
	let token: any;
	let apiReq: any;
	let bod: RequestBods = {
		consumer_key: Consts.CONSUMER_KEY,
	}
	apiReq = request(opt, (apiRes) => {
		apiRes.on('data', (jsn) => {
			const obj = JSON.parse(jsn);
			if (Object.keys(obj).length < 3) {
				token = Object.values(obj)[0];
			} else {/* gobs n gobs of strings */}
		});
	});
	apiReq.write(bod);
	apiReq.end();
	// MESS: COOKIES MUST ONLY BE DONE ONCE PER TYPE TOKEN AND NOT DONE AT ALL OTHERWISE. res.setHeader('Set-Cookie', (rte === Const.NEX1 && 'reqtok=' + token || rte === Const.NEX2 && 'axstok=' + token);
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end(controllers(rte, token));
}).listen(3000);
