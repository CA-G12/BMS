"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientError = exports.serverError = void 0;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const serverError = (err, req, res, next) => {
    if (!err.status) {
        res.status(500).json({ message: 'Internal Server Error!' });
    }
    else {
        res.status(err.status).json({ message: err.message });
    }
};
exports.serverError = serverError;
const clientError = (req, res) => {
    res.status(404).json({ message: 'Not Found' });
};
exports.clientError = clientError;
