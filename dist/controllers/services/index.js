"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServiceById = exports.updateServices = exports.postServices = exports.getServices = void 0;
var getServices_1 = require("./getServices");
Object.defineProperty(exports, "getServices", { enumerable: true, get: function () { return __importDefault(getServices_1).default; } });
var postServices_1 = require("./postServices");
Object.defineProperty(exports, "postServices", { enumerable: true, get: function () { return __importDefault(postServices_1).default; } });
var updateServices_1 = require("./updateServices");
Object.defineProperty(exports, "updateServices", { enumerable: true, get: function () { return __importDefault(updateServices_1).default; } });
var getServiceById_1 = require("./getServiceById");
Object.defineProperty(exports, "getServiceById", { enumerable: true, get: function () { return __importDefault(getServiceById_1).default; } });
