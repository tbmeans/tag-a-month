// server.ts
// Helper resource for how to set up a tsconfig.json and run tsc from
// digital ocean community tut, "setting-up-a-node-project-with-typescript".

import { createServer, request } from 'node:http';
import { Consts } from './appConstants';
import env from './env';
import setOpts from './requestOpts';
import { RequestBods } from './requestBods';
import controllers from './controllers';

const hostname = env.IS_PRODUCTION && '0.0.0.0' || 'localhost';
const port = env.IS_PRODUCTION && 80 || 3000;

const server = createServer((req, res) => {
	const rte = req.url.slice(1);
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end('controllercall');
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
