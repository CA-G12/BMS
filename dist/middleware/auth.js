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
exports.GetUserData = exports.Authorize = exports.Authenticate = exports.GenerateToken = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const helpers_1 = require("../helpers");
dotenv_1.default.config();
const GenerateToken = (payload, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = yield (0, helpers_1.signToken)(payload);
        res.cookie('token', token).cookie('fullName', `${payload.first_name} ${payload.last_name}`).json({ message: 'Logged in Successfully', role: payload.role });
    }
    catch (err) {
        next(err);
    }
});
exports.GenerateToken = GenerateToken;
const Authenticate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.cookies;
        if (token) {
            const user = yield (0, helpers_1.verifyToken)(token);
            if (user) {
                req.user = {
                    role: user.role,
                    id: user.id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                };
            }
        }
        next();
    }
    catch (err) {
        next(err);
    }
});
exports.Authenticate = Authenticate;
const GetUserData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.cookies;
        if (token) {
            const user = yield (0, helpers_1.verifyToken)(token);
            if (user) {
                const userData = {
                    role: user.role,
                    id: user.id,
                    fullName: `${user.first_name} ${user.last_name}`,
                };
                res.json(userData);
                return;
            }
        }
        res.json(null);
    }
    catch (err) {
        next(err);
    }
});
exports.GetUserData = GetUserData;
const Authorize = (req, _, next, user_role = null) => {
    try {
        if (req.user) {
            const { role } = req.user;
            if (!user_role)
                next();
            else {
                if (!role || role !== user_role) {
                    throw new helpers_1.CustomError(401, 'You are not Authorized');
                }
                next();
            }
        }
        else {
            throw new helpers_1.CustomError(401, 'You are not Authorized');
        }
    }
    catch (err) {
        next(err);
    }
};
exports.Authorize = Authorize;
