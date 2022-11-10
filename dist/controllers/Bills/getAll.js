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
    var _a;
    try {
        const payload = req.query;
        let { current, pageSize } = { current: 0, pageSize: 0 };
        if (payload.pagination) {
            current = payload.pagination.current;
            pageSize = payload.pagination.pageSize;
        }
        console.log('Testing');
        let filterStatus;
        if ((_a = payload.filters) === null || _a === void 0 ? void 0 : _a.is_open) {
            filterStatus = payload.filters.is_open.map((x) => (x === 'true'));
        }
        const { order, field, } = payload;
        const data = yield models_1.BillModel.findAll({
            raw: true,
            attributes: ['id', 'total_price', 'is_open', 'services'],
            include: [
                {
                    model: models_1.FlatModel,
                    attributes: ['id', 'flat_number'],
                    include: [{
                            model: models_1.UserModel,
                            attributes: [
                                'id',
                                'first_name',
                                'last_name',
                            ],
                        }],
                },
            ],
        });
        const total = data.length;
        let result = data.map((x) => {
            const electricity = x.services.filter((y) => y.name.trim() === 'كهرباء')[0].price;
            const naturalWater = x.services.filter((y) => y.name.trim() === 'مياه صحية')[0].price;
            const drinkingWater = x.services.filter((y) => y.name.trim() === 'مياه حلوة')[0].price;
            const generalServices = x.services.filter((y) => y.name.trim() === 'خدمات عامة')[0].price;
            return {
                id: x.id,
                flat_number: x['Flat.flat_number'],
                user_name: `${x['Flat.User.first_name']} ${x['Flat.User.last_name']}`,
                electricity,
                naturalWater,
                drinkingWater,
                generalServices,
                total_price: x.total_price,
                is_open: x.is_open,
            };
        });
        // Filtering
        if (filterStatus) {
            result = result.filter((x) => filterStatus.includes(x.is_open));
        }
        if (order === 'descend') {
            result = result.sort((a, b) => b[field] - a[field]);
        }
        else {
            result = result.sort((a, b) => a[field] - b[field]);
        }
        if (payload.pagination) {
            const start = ((current - 1) * pageSize);
            const end = start + pageSize;
            result = result.slice(start, end);
        }
        res.json({ result, total });
    }
    catch (err) {
        next(err);
    }
});
