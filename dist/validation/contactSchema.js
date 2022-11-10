"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
const contactSchema = (0, yup_1.object)({
    name: (0, yup_1.string)().required(),
    email: (0, yup_1.string)().email().required(),
    phone: (0, yup_1.string)().min(10).required(),
    subject: (0, yup_1.string)().required(),
    description: (0, yup_1.string)().required(),
});
exports.default = contactSchema;
