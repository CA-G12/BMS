"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContact = exports.addContact = void 0;
const contactus_1 = __importDefault(require("./contactus"));
exports.addContact = contactus_1.default;
const getContact_1 = __importDefault(require("./getContact"));
exports.getContact = getContact_1.default;
