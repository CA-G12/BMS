"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middleware_1 = require("../middleware");
const router = (0, express_1.Router)();
router.use((req, _, next) => (0, middleware_1.Authorize)(req, _, next, 'user'));
router.get('/:userId', controllers_1.allUserPayments);
exports.default = router;
