import { App } from "./app"

require('dotenv').config();

new App().server.listen(3000);
