"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeParamsForURL = void 0;
var url_1 = require("url");
var lodash_1 = require("lodash");
var encodeParamsForURL = function (params) { return new url_1.URLSearchParams(purifyFromEmptiness(params)); };
exports.encodeParamsForURL = encodeParamsForURL;
var purifyFromEmptiness = function (object) { return (0, lodash_1.omitBy)(object, lodash_1.isEmpty); };
//# sourceMappingURL=url.js.map