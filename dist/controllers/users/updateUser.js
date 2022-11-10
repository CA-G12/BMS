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
const validation_1 = require("../../validation");
const models_1 = require("../../models");
const helpers_1 = require("../../helpers");
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.user;
        if (!(Number(id) > 0)) {
            return res.json({ message: 'User Id must be a number and greater then 0' });
        }
        const { firstName, lastName, email, } = yield validation_1.updateUserSchema.validate(req.body, { abortEarly: false });
        const data = yield models_1.UserModel.update({
            first_name: firstName,
            last_name: lastName,
            email,
        }, {
            where: { id },
            returning: true,
        });
        console.log('data: ', data);
        res.cookie('fullName', `${firstName} ${lastName}`).json({ message: 'User Updated Successfully' });
    }
    catch (err) {
        if (err.name === 'ValidationError') {
            return next(new helpers_1.CustomError(400, err.errors));
        }
        next(err);
    }
});
exports.default = updateUser;
