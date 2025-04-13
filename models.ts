// messageModel.ts
import { PageData } from './pageData';
import { Consts } from './appConstants';

const query = function(
	routeName: string,
	token: string = '',
	errorMessage: string = ''
): PageData {
	let message: string;
	let nexRoute: string;

	switch(routeName) {
		case Consts.NEX1:
			message = Consts.MSG2;
			nexRoute = Consts.NEX2;
			break;
		case Consts.NEX2:
			message = Consts.MSG3;
			nexRoute = Consts.NEX3;
			break;
		case Consts.NEX3:
			message = Consts.MSG4;
			nexRoute = Consts.NEX3;
			break;
		default:
			message = errorMessage + Consts.MSG1;
			nexRoute = Consts.NEX1;
	}

	return { message, nexRoute, token };
};

const models = { query };

export default models;
