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
        const { id } = req.user;
        console.log(`User Id: ${id}`);
        const { flat_number, is_open } = req.query;
        const billOpenOrClosed = {};
        if (is_open) {
            billOpenOrClosed.is_open = is_open;
        }
        const flastExistsOrNOt = {};
        if (flat_number) {
            flastExistsOrNOt.flat_number = flat_number;
        }
        let data = yield models_1.UserModel.findAll({
            raw: true,
            order: [
                ['Flats', 'Bills', 'id', 'DESC'],
            ],
            include: [{
                    model: models_1.FlatModel,
                    attributes: ['flat_number'],
                    where: flastExistsOrNOt,
                    include: [{
                            model: models_1.BillModel,
                            attributes: ['is_open', 'total_price', 'services', 'createdAt'],
                            required: false,
                        }],
                }],
            where: { id },
            attributes: [],
        });
        if (data[0]['Flats.Bills.id'] === null) {
            data = [];
        }
        if (is_open) {
            data = data.filter((x) => x['Flats.Bills.is_open'].toString() === is_open);
        }
        console.log('data: ', data);
        if (data) {
            res.json({ data });
        }
        else {
            res.json({ message: 'There is no bill that have this flat id' });
        }
    }
    catch (err) {
        console.log(err);
        next(err);
    }
});
