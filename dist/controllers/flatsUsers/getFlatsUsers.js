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
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { order, page } = req.query;
        const sortingOrder = (order === 'descend') ? 'DESC' : 'ASC';
        const limitNum = 5;
        const total = yield models_1.FlatModel.count({ include: [{ model: models_1.UserModel }] });
        if (!(Number(page) > 0)) {
            throw new helpers_1.CustomError(400, 'Query Parameter Page is required and must be a number greater than 0');
        }
        const offsetNum = (+(page) - 1) * limitNum;
        const queryResult = yield models_1.FlatModel.findAll({
            order: [
                ['id', `${sortingOrder}`],
            ],
            raw: true,
            attributes: ['id', 'flat_number'],
            include: [{
                    model: models_1.UserModel,
                    attributes: ['first_name', 'last_name', 'phone_number', 'id', 'email'],
                }],
            offset: offsetNum,
            limit: limitNum,
        });
        const result = queryResult.map((x) => ({
            id: x.id,
            flat_number: x.flat_number,
            full_name: `${x['User.first_name']} ${x['User.last_name']}`,
            phone_number: x['User.phone_number'],
        }));
        res.json({ result, total });
    }
    catch (err) {
        next(err);
    }
});
