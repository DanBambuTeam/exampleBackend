"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.API_PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || 'asdasdawejnawmkld12312kl4n3k'
};
exports.default = config;
