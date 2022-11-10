"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { NODE_ENV, DEV_DB_URL, TEST_DB_URL, DATABASE_URL, } = process.env;
let url = '' || undefined;
let ssl = false;
switch (NODE_ENV) {
    case 'development':
        url = DEV_DB_URL;
        break;
    case 'production':
        url = DATABASE_URL;
        ssl = {
            rejectUnauthorized: false,
        };
        break;
    case 'test':
        url = TEST_DB_URL;
        break;
    default:
        throw new Error('The database url is invalid!');
}
if (!url)
    throw new Error('The database url is invalid!');
const sequelizeConfig = new sequelize_1.Sequelize(url, {
    logging: false,
    dialect: 'postgres',
    dialectOptions: {
        ssl,
    },
});
exports.default = sequelizeConfig;
