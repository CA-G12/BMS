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
const sequelize_1 = __importDefault(require("sequelize"));
const models_1 = require("../../models");
const Advertisement_1 = __importDefault(require("../../models/Advertisement"));
const Announcement_1 = __importDefault(require("../../models/Announcement"));
const AdminStatistics = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield models_1.UserModel.count();
        const advertisements = yield Advertisement_1.default.count();
        const announcements = yield Announcement_1.default.count();
        const complaints = yield models_1.ComplaintsModel.count();
        const messages = yield models_1.ContactUsModel.count();
        const usersBills = yield models_1.BillModel.findAll({
            group: 'Flat.User.id',
            raw: true,
            attributes: [
                [sequelize_1.default.fn('COUNT', sequelize_1.default.col('Bill.id')), 'n_bills'],
            ],
            include: [
                {
                    model: models_1.FlatModel,
                    attributes: [],
                    include: [{
                            model: models_1.UserModel,
                            attributes: [
                                'first_name',
                                'last_name',
                            ],
                        }],
                },
            ],
        });
        res.json({
            users,
            messages,
            advertisements,
            announcements,
            complaints,
            usersBills,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.default = AdminStatistics;
/*
    Users
    Complaints
    ContactUs
    Announcements
    Advertisemments
    Users-Bills
*/
