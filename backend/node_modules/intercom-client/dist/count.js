"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var count_types_1 = require("./count/count.types");
var Count = /** @class */ (function () {
    function Count(client) {
        this.client = client;
        this.baseUrl = 'counts';
        this.client = client;
    }
    Count.prototype.forApp = function () {
        return this.client.get({
            url: "/".concat(this.baseUrl),
        });
    };
    Count.prototype.countCompany = function () {
        return this.client.get({
            url: "/".concat(this.baseUrl),
            params: { type: count_types_1.CountType.COMPANY },
        });
    };
    Count.prototype.countCompanySegment = function () {
        return this.client.get({
            url: "/".concat(this.baseUrl),
            params: { type: count_types_1.CountType.COMPANY, count: count_types_1.CountEntity.SEGMENT },
        });
    };
    Count.prototype.countCompanyTag = function () {
        return this.client.get({
            url: "/".concat(this.baseUrl),
            params: { type: count_types_1.CountType.COMPANY, count: count_types_1.CountEntity.TAG },
        });
    };
    Count.prototype.countCompanyUser = function () {
        return this.client.get({
            url: "/".concat(this.baseUrl),
            params: { type: count_types_1.CountType.COMPANY, count: count_types_1.CountEntity.USER },
        });
    };
    Count.prototype.countConversation = function () {
        return this.client.get({
            url: "/".concat(this.baseUrl),
            params: { type: count_types_1.CountType.CONVERSATION },
        });
    };
    Count.prototype.countAdminConversation = function () {
        return this.client.get({
            url: "/".concat(this.baseUrl),
            params: { type: count_types_1.CountType.CONVERSATION, count: count_types_1.CountEntity.ADMIN },
        });
    };
    Count.prototype.countUser = function () {
        return this.client.get({
            url: "/".concat(this.baseUrl),
            params: { type: count_types_1.CountType.USER },
        });
    };
    Count.prototype.countUserSegment = function () {
        return this.client.get({
            url: "/".concat(this.baseUrl),
            params: { type: count_types_1.CountType.USER, count: count_types_1.CountEntity.SEGMENT },
        });
    };
    Count.prototype.countUserTag = function () {
        return this.client.get({
            url: "/".concat(this.baseUrl),
            params: { type: count_types_1.CountType.USER, count: count_types_1.CountEntity.TAG },
        });
    };
    return Count;
}());
exports.default = Count;
//# sourceMappingURL=count.js.map