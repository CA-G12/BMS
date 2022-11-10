"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const validation_1 = require("../../validation");
const models_1 = require("../../models");
const helpers_1 = require("../../helpers");
const middleware_1 = require("../../middleware");
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { phoneNumber, password } = yield validation_1.loginValidation.validate(req.body, {
            abortEarly: false,
        });
        const user = yield models_1.UserModel.findOne({ where: { phone_number: phoneNumber } });
        if (!user) {
            throw new helpers_1.CustomError(400, 'User Doesn\'t Exist');
        }
        const { role, id, first_name, last_name, } = user;
        const comparePasswordResult = yield bcrypt_1.default.compare(password, user.hashed_password);
        if (!comparePasswordResult) {
            throw new helpers_1.CustomError(400, 'Invalid Password');
        }
        (0, middleware_1.GenerateToken)({
            id, role, first_name, last_name,
        }, res, next);
    }
    catch (err) {
        if (err.name === 'ValidationError') {
            return next(new helpers_1.CustomError(400, err.errors));
        }
        next(err);
    }
});
exports.default = login;
