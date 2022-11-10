"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const app_1 = __importDefault(require("./app"));
const connection_1 = __importDefault(require("./database/config/connection"));
const CronJobs_1 = __importDefault(require("./CronJobs"));
const port = app_1.default.get('port');
connection_1.default.sync()
    .then(() => {
    app_1.default.listen(port, () => {
        (0, CronJobs_1.default)();
        // eslint-disable-next-line no-console
        console.log(`The Server is running on http://localhost:${port}`);
    });
})
    .catch(() => console.log('Error on synchronizing db'));
