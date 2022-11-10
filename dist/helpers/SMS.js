"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_sdk_1 = __importDefault(require("@vonage/server-sdk"));
const customError_1 = __importDefault(require("./customError"));
dotenv_1.default.config();
const SendSMS = ({ recipient, message }) => {
    const { SMS_SECRET, SMS_KEY, PHONE_NUMBER_CODE, } = process.env;
    const vonage = new server_sdk_1.default({
        apiKey: SMS_KEY,
        apiSecret: SMS_SECRET,
    });
    const sender = 'BMS';
    vonage.message.sendSms(sender, PHONE_NUMBER_CODE + recipient, message, {}, (err, responseData) => {
        if (err) {
            throw new Error(err.status);
        }
        else if (responseData.messages[0].status === '0') {
            return true;
        }
        else {
            throw new customError_1.default(400, `Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    });
    return false;
};
exports.default = SendSMS;
