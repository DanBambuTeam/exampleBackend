"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRouter = void 0;
const express_1 = require("express");
const user_router_1 = __importDefault(require("./user.router"));
const auth_router_1 = __importDefault(require("./auth.router"));
exports.mainRouter = (0, express_1.Router)();
exports.mainRouter
    .use('/user', user_router_1.default)
    .use('/auth', auth_router_1.default);
// function routerApi(app: any) {
//     const router = Router();
//     app.use('/api/v1/', router);
//     router.use('/user', userRouter);
//     router.use('/auth', authRouter);
// }
// export default routerApi;
