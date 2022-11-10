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
/* eslint-disable no-console */
const connection_1 = __importDefault(require("./connection"));
const fakeData_1 = require("./fakeData");
const index_1 = require("../../models/index");
const insertDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connection_1.default.sync({ force: true });
        yield index_1.AnnouncementModel.bulkCreate(fakeData_1.announcements);
        yield index_1.AdvertisementModel.bulkCreate(fakeData_1.advertisements);
        yield index_1.ServiceModel.bulkCreate(fakeData_1.services);
        yield index_1.UserModel.bulkCreate(fakeData_1.users);
        yield index_1.FlatModel.bulkCreate(fakeData_1.flats);
        yield index_1.BillModel.bulkCreate(fakeData_1.bills);
        yield index_1.PaymentModel.bulkCreate(fakeData_1.payments);
        yield index_1.ComplaintsModel.bulkCreate(fakeData_1.complaints);
        yield index_1.ContactUsModel.bulkCreate(fakeData_1.contactUs);
        console.log('Build Database Successfully');
    }
    catch (err) {
        console.log('Build Database Failed', err);
    }
});
if (process.env.SEED) {
    insertDB();
}
exports.default = insertDB;
