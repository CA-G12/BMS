"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addComplaints = exports.deleteSingleComplaint = exports.getSingleComplaint = exports.getAllComplaints = void 0;
const addComplaint_1 = __importDefault(require("./addComplaint"));
exports.addComplaints = addComplaint_1.default;
var getAllComplaints_1 = require("./getAllComplaints");
Object.defineProperty(exports, "getAllComplaints", { enumerable: true, get: function () { return __importDefault(getAllComplaints_1).default; } });
var getSingleComplaint_1 = require("./getSingleComplaint");
Object.defineProperty(exports, "getSingleComplaint", { enumerable: true, get: function () { return __importDefault(getSingleComplaint_1).default; } });
var deleteSingleComplaint_1 = require("./deleteSingleComplaint");
Object.defineProperty(exports, "deleteSingleComplaint", { enumerable: true, get: function () { return __importDefault(deleteSingleComplaint_1).default; } });
