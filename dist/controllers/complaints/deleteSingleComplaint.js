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
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!(Number(id) > 0)) {
            return res.status(400).json({ message: 'Complaint Id must be a number and greater then 0' });
        }
        const data = yield models_1.ComplaintsModel.destroy({ where: { id } });
        if (!data) {
            res.status(400).json({ message: 'Complaint unavailable' });
        }
        else {
            res.json({ message: 'Delete Complaint Successfully' });
        }
    }
    catch (err) {
        next(err);
    }
});
