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
const models_1 = require("../../models");
const validation_1 = require("../../validation");
const helpers_1 = require("../../helpers");
const addComplaints = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description } = yield validation_1.complaintsSchema.validate(req.body, { abortEarly: false });
        const data = yield models_1.ComplaintsModel.create({
            title, description, UserId: 1, // UserId should be from token when Authorization is done
        });
        return res.status(201).json({
            message: 'Complaints Added Successfully', data,
        });
    }
    catch (error) {
        console.log(error);
        if (error.name === 'ValidationError') {
            return next(new helpers_1.CustomError(400, error.errors));
        }
        return next(error);
    }
});
exports.default = addComplaints;
