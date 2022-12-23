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
const SMS_1 = __importDefault(require("../../helpers/SMS"));
const models_1 = require("../../models");
const sendBillMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { billID } = req.params;
        const data = yield models_1.BillModel.findOne({
            raw: true,
            where: { id: Number(billID) },
            attributes: ['id', 'total_price', 'createdAt'],
            include: [
                {
                    model: models_1.FlatModel,
                    attributes: ['id', 'flat_number'],
                    include: [{
                            model: models_1.UserModel,
                            attributes: [
                                'id',
                                'phone_number',
                            ],
                        }],
                },
            ],
        });
        const message = `Your Bill Coasts For Flat ${data['Flat.flat_number']} \n
    At ${new Date(data.createdAt).getMonth()}/${new Date(data.createdAt).getFullYear()} \n
    is ${data.total_price}.00 NIS \n
    BMS`;
        const recipient = data['Flat.User.phone_number'];
        (0, SMS_1.default)({ recipient, message })
            .then(() => res.json({ message: 'Send Successfully ' }));
    }
    catch (err) {
        next(err);
    }
});
exports.default = sendBillMessage;
