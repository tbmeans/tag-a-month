// views.ts
import { PageData } from "./pageData";
import { Consts } from "./appConstants";

const render = function(data: PageData): string {
	return [
		'<!DOCTYPE html> <html lang="en"> <head> <meta charset="utf-8"> ',
		'<meta name="viewport" content="width=device-width, initial-scale=1">',
		'<title>Tag Pocket saves in bulk</title>',
		'<style> body{ background-color:#272727; ',
		'font-family: Segoe UI,Tahoma,Geneva,Verdana,sans-serif; ',
		'font-family: Arial,Helvetica,sans-serif; ',
		'color:#789; text-align:center; } ',
		'h1, h2, h3 { margin: 2rem auto; } footer { padding-top: 2rem; }',
		'button { border: none; border-radius: .4rem; background-color: #204060; ',
		'color: #a9a9a9; margin: .5rem; padding: .5rem 2rem; } ',
		'button:active { background-color: #406080; } </style> </head>',
		'<body> <header> <h2> Bulk tag your Pocket saves <br>',
		'with the year & month saved! </h2> </header> ',
		'<main> <p> ' + data.message + '</p> ',
		data.nexRoute === Consts.NEX1 && ('<a href="' + Consts.NEX1 + '">' +
				'<button type="button">' + Consts.NEX1[0].toUpperCase() +
						Consts.NEX1.slice(1) + '</button></a>') || '',
		'</main> <footer>' + Consts.FUT1 + Consts.FUT2 + '</footer> ',
		data.nexRoute === Consts.NEX2 && ('<script>' + Consts.COD1 + data.token +
				Consts.COD2 + Consts.COD3 + '</script> ') || 
						data.nexRoute === Consts.NEX3 && ('<script>' + Consts.COD4 +
								Consts.COD3 + '</script> ') || '',
		'</body></html>',
	].join('');
};

// don't ask for the access token on the auth route or else saves-dash won't have it
// auth route should just wait a delay then route to saves-dash. before res.end for 
// saves-dash go get the access code in the node create server
// but don't forget about cookies. cookie is what's keeping req token available,
// let it keep dash too AND ASK FOR AXSTOK on auth route

const views = { render };

export default views;

