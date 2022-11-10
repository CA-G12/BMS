"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.signToken = exports.CustomError = void 0;
const customError_1 = __importDefault(require("./customError"));
exports.CustomError = customError_1.default;
const jwt_1 = require("./jwt");
Object.defineProperty(exports, "signToken", { enumerable: true, get: function () { return jwt_1.signToken; } });
Object.defineProperty(exports, "verifyToken", { enumerable: true, get: function () { return jwt_1.verifyToken; } });
