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
const helpers_1 = require("../../helpers");
const models_1 = require("../../models");
const advsSchems_1 = __importDefault(require("../../validation/advsSchems"));
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, startDate, endDate, image, description, } = yield advsSchems_1.default.validate({
            title: req.body.title,
            startDate: req.body.start_date,
            endDate: req.body.end_date,
            image: req.body.image,
            description: req.body.description,
        }, { abortEarly: false });
        const data = yield models_1.AdvertisementModel.update({
            title, start_date: startDate, end_date: endDate, image, description,
        }, { where: { id }, returning: true });
        res.json({ data: data[1] });
    }
    catch (err) {
        if (err.name === 'ValidationError') {
            return next(new helpers_1.CustomError(400, err.errors));
        }
        return next(err);
    }
});
