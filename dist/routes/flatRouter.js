"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controllers/index");
const middleware_1 = require("../middleware");
const router = (0, express_1.Router)();
router.get('/', index_1.getFlats);
router.use((req, _, next) => (0, middleware_1.Authorize)(req, _, next, 'admin'));
router.get('/available', index_1.availableFlats);
router.get('/users', index_1.getFlatsUsers);
router.get('/:id', index_1.flatById);
router.put('/:id', index_1.updateFlat);
exports.default = router;
