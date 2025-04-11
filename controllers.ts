// controllers.ts

import models from "./models";
import views from "./views";

export default function controllers(routeName: string, token: string) {
	return views.render(models.query(routeName, token));
}
