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
const passport_local_1 = require("passport-local");
const auth_service_1 = __importDefault(require("../../../services/auth.service"));
const service = new auth_service_1.default();
const options = {
    usernameField: 'email',
    passwordField: 'password'
};
const LocalStrategy = new passport_local_1.Strategy(options, (email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield service.getUser(email, password);
        done(null, user);
    }
    catch (error) {
        done(error, false);
    }
}));
exports.default = LocalStrategy;
