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
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = require("bcrypt");
const validation_1 = require("../../validation");
const models_1 = require("../../models");
const helpers_1 = require("../../helpers");
const signup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { flatNumber } = req.body;
        const { firstName, lastName, phoneNumber, email, password, } = yield validation_1.signUpSchema.validate(req.body, { abortEarly: false });
        const hashedPassword = yield (0, bcrypt_1.hash)(password, 10);
        const [user, created] = yield models_1.UserModel.findOrCreate({
            where: { phone_number: phoneNumber },
            defaults: {
                first_name: firstName,
                last_name: lastName,
                email,
                phone_number: phoneNumber,
                hashed_password: hashedPassword,
                role: 'user',
            },
        });
        const { id } = user;
        yield models_1.FlatModel.update({ is_active: true, UserId: id }, {
            where: {
                flat_number: flatNumber,
            },
        });
        if (!created) {
            throw new helpers_1.CustomError(400, 'Phone Number Already Exist');
        }
        res.status(201).json({ message: 'User Created Successfully', status: 201 });
    }
    catch (err) {
        if (err.name === 'ValidationError') {
            return next(new helpers_1.CustomError(400, err.errors));
        }
        next(err);
    }
});
exports.default = signup;
