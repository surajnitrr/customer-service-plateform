"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subscription = /** @class */ (function () {
    function Subscription(client) {
        this.client = client;
        this.baseUrl = 'subscription_types';
        this.client = client;
    }
    Subscription.prototype.listTypes = function () {
        return this.client.get({
            url: "/".concat(this.baseUrl),
        });
    };
    return Subscription;
}());
exports.default = Subscription;
//# sourceMappingURL=subscription.js.map