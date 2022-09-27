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
const bcrypt_1 = __importDefault(require("bcrypt"));
const userList = [{
        id: 1,
        name: 'Danielo',
        email: 'daniel.sanchez@bambu-mobile.com',
        password: '1234'
    }];
class UserService {
    constructor() { }
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield userList;
            return users;
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = userList.find(item => item.id == id);
            if (!user) {
                return {
                    message: 'Usuario no encontrado'
                };
            }
            return user;
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = userList.find(item => item.email === email);
            if (!user) {
                return {
                    message: 'email no encontrado'
                };
            }
            return user;
        });
    }
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const hash = yield bcrypt_1.default.hash(body.password, 10);
            const newUser = Object.assign(Object.assign({}, body), { password: hash });
            userList.push(newUser);
            return newUser;
        });
    }
    update(id, changes) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = userList.findIndex(item => item.id == id);
            let userUpdated = userList[index];
            userList[index] = Object.assign(Object.assign({}, userUpdated), changes);
            return userList[index];
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = userList.findIndex(item => item.id == id);
            userList.splice(index, 1);
            return {
                message: 'Usuario eliminado'
            };
        });
    }
}
exports.default = UserService;
