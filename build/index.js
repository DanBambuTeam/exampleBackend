"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const routes_1 = __importDefault(require("./routes/routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, routes_1.default)(app);
app.listen(config_1.default.port, () => {
    console.log('API ready from', config_1.default.port);
});
