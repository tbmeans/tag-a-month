// views.ts
import { PageData } from "./pageData";
import { Consts } from "./appConstants";

const index = {
	render: (data: PageData): string => {
		return [
			Consts.DOCH,
			Consts.STY1,
			Consts.BODH,
			'<main><p>' + data.message + '</p>',
			'<a href="' + data.nexRoute + '">' + Consts.BTN1 + '</a></main>',
			Consts.FOOT,
			Consts.DOCC,
		].join(' ');
	},
};

const login = {
	render: (data: PageData): string => {
		return [
			Consts.DOCH,
			Consts.STY1,
			Consts.BODH,
			'<main><p>' + data.message + '</p></main>',
			'<script>',
			Consts.COD1 + data.token + Consts.COD2 + data.nexRoute + Consts.COD3,
			'</script>',
			Consts.FOOT,
			Consts.DOCC,
		].join(' ');
	},
};

const auth = {
	render: (data: PageData): string => {
		return [
			Consts.DOCH,
			Consts.STY1,
			Consts.BODH,
			'<main><p>' + data.message + '</p></main>',
			'<script>' + Consts.COD4 + data.nexRoute + Consts.COD3 + '</script>',
			Consts.FOOT,
			Consts.DOCC,
		].join(' ');
	},
};

const app1 = {
	render: (data: PageData): string => {
		return [
			Consts.DOCH,
			Consts.STY1,
			Consts.BODH,
			'<main><p>' + data.message + '</p>',
			Consts.FOOT,
			Consts.DOCC,
		].join(' ');
	},
};

export default { index, login, auth, app1, };
