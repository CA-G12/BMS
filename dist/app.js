"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const path_1 = require("path");
const morgan_1 = __importDefault(require("morgan"));
const middleware_1 = require("./middleware");
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
const { env: { PORT, NODE_ENV }, } = process;
const app = (0, express_1.default)();
app.set('port', PORT || 5000);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, compression_1.default)());
app.use((0, cookie_parser_1.default)());
if (NODE_ENV === 'development') {
    app.use((0, morgan_1.default)('dev'));
}
app.use(middleware_1.Authenticate);
app.use('/api/v1', routes_1.default);
if (NODE_ENV === 'production') {
    app.use(express_1.default.static((0, path_1.join)(__dirname, '..', 'client', 'build')));
    app.get('*', (req, res) => {
        res.sendFile((0, path_1.join)(__dirname, '..', 'client', 'build', 'index.html'));
    });
}
app.use(middleware_1.clientError);
app.use(middleware_1.serverError);
exports.default = app;
