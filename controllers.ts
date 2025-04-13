// controllers.ts

import models from "./models";
import views from "./views";

const index = (routeName: string, errorMessage: string = ''): string => {
	return views.index.render(models.query(routeName, '', errorMessage));
};

const login = (routeName: string, token: string): string => {
	return views.login.render(models.query(routeName, token));
};

const auth = (routeName: string): string => {
	return views.auth.render(models.query(routeName));
};

const app1 = (routeName: string): string => {
	return views.app1.render(models.query(routeName));
};

export default { index, login, auth, app1, }
