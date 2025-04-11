// appConstants.ts

import PLATFORM_CONSUMER_KEY from "./env";

export enum Consts {
	MSG1 = "Login to connect with Pocket",
	MSG2 = "Preparing to login and obtain a request token from Pocket.",
	MSG3 = "Logging in and authorizing.",
	MSG4 = "Organize your saves.",
	NEX1 = "login",
	NEX2 = "auth",
	NEX3 = "saves-dash",
	FUT1 = " 2025, Tim Means. Makes use of the ",
	FUT2 = '<a href="https://getpocket.com/developer/">Pocket API</a>.',
	COD1 = 'const DEST = "https://getpocket.com/auth/authorize?request_token=',
	COD2 = '&redirect_uri=https://spaghetti.us-east-1.s3-amazonaws.com/auth"; ',
	COD3 = 'const promcall = (res) => { setTimeout(() => res(DEST), 3000); }; ' +
			'const delay = () => new Promise(promcall); const redir = async ' +
					'function() { window.location.href = await delay(); }; redir();',
	COD4 = 'const DEST = "https://localhost:3000/saves-dash";', /*
	COD4 = 'const DEST = "https://spaghetti.us-east-1.s3-amazonaws.com' +
			'/saves-dash";', */
	CONSUMER_KEY = PLATFORM_CONSUMER_KEY,  /* for git repo's sake, abstracted away */
}
