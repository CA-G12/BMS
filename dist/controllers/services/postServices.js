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
const helpers_1 = require("../../helpers");
const models_1 = require("../../models");
const validation_1 = require("../../validation");
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, price, isFixed, description, isOpen, } = yield validation_1.servicesSchema.validate(req.body, { abortEarly: false });
        const data = yield models_1.ServiceModel.create({
            name, price, isFixed, description, isOpen,
        });
        res.status(201).json({ data });
    }
    catch (err) {
        if (err.name === 'ValidationError') {
            return next(new helpers_1.CustomError(400, err.errors));
        }
        return next(err);
    }
});
