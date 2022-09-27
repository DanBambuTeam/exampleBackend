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
const express_1 = __importDefault(require("express"));
const user_service_1 = __importDefault(require("../services/user.service"));
const router = express_1.default.Router();
const service = new user_service_1.default();
router.get('/', (_req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield service.find();
        res.status(200).json(users);
    }
    catch (error) {
    }
}));
router.post('/', (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newitem = req.body;
        console.log(newitem);
        const newUser = yield service.create(newitem);
        res.status(201).json(newUser);
    }
    catch (error) {
        throw new Error('Algo anda mal');
    }
}));
router.get('/:id', (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield service.findOne(id);
        res.json(user);
    }
    catch (error) {
        throw new Error('Ups! Algo salio mal');
    }
}));
router.patch('/:id', (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const changes = req.body;
        const userUpdated = yield service.update(id, changes);
        res.json(userUpdated);
    }
    catch (error) {
        throw new Error('Ups! Algo salio mal');
    }
}));
router.delete('/:id', (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const identifier = req.params.id;
        const userDeleted = yield service.delete(identifier);
        res.json(userDeleted);
    }
    catch (error) {
    }
}));
exports.default = router;
