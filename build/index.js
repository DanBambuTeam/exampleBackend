"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const routes_1 = require("./routes/routes");
require('./utils/auth');
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('api/v1', routes_1.mainRouter);
app.listen(config_1.default.port, () => {
    console.log('API ready from', config_1.default.port);
});
