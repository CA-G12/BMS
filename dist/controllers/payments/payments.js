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
        const { userId } = req.params;
        if (!(Number(userId) > 0)) {
            return res.json({ message: 'User Id  must be a number and greater then 0' });
        }
        const data = yield models_1.UserModel.findAll({
            raw: true,
            include: [{
                    model: models_1.FlatModel,
                    attributes: ['flat_number'],
                    include: [{
                            model: models_1.BillModel,
                            attributes: ['is_open', 'total_price', 'services'],
                            required: false,
                        }],
                }],
            where: { id: userId },
            attributes: ['id'],
        });
        res.json({ data });
    }
    catch (err) {
        next(err);
    }
});
