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
const node_cron_1 = __importDefault(require("node-cron"));
const models_1 = require("../models");
const InseertBillsTask = () => {
    const Task = node_cron_1.default.schedule('* * * * 1 *', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const AllFlatsId = yield models_1.FlatModel.findAll({
                attributes: ['id'],
                where: { is_active: true },
                raw: true,
            });
            const AllServices = yield models_1.ServiceModel.findAll({
                raw: true,
                attributes: ['name', 'price', 'isFixed', 'description', 'isOpen'],
            });
            let total = 0;
            // eslint-disable-next-line no-plusplus
            for (let i = 0; i < AllServices.length; i++) {
                total += AllServices[i].price;
            }
            AllFlatsId.forEach((flat) => __awaiter(void 0, void 0, void 0, function* () {
                yield models_1.BillModel.create({
                    FlatId: flat.id,
                    services: AllServices,
                    is_open: true,
                    total_price: total,
                });
            }));
        }
        catch (e) {
            console.error(e);
        }
    }));
    Task.start();
};
exports.default = InseertBillsTask;
