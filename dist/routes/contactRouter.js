"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middleware_1 = require("../middleware");
const router = (0, express_1.Router)();
router.get('/', (req, _, next) => (0, middleware_1.Authorize)(req, _, next, 'admin'), controllers_1.getContact);
router.post('/', controllers_1.addContact);
exports.default = router;
