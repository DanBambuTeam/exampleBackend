"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const localstrategy_1 = __importDefault(require("./strategies/localstrategy"));
passport_1.default.use(localstrategy_1.default);
