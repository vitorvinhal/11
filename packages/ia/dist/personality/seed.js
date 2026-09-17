"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PERSONAS_SEED = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
exports.PERSONAS_SEED = JSON.parse((0, fs_1.readFileSync)((0, path_1.resolve)(__dirname, 'seed.json'), 'utf8'));
