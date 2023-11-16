"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhoneCallRedirect = /** @class */ (function () {
    function PhoneCallRedirect(client) {
        this.client = client;
        this.baseUrl = 'phone_call_redirects';
        this.client = client;
    }
    PhoneCallRedirect.prototype.create = function (_a) {
        var phone = _a.phone, customAttributes = _a.customAttributes;
        var data = {
            phone: phone,
            customAttributes: customAttributes,
        };
        return this.client.post({
            url: "/".concat(this.client.phoneCallRedirect.baseUrl, "/"),
            data: data,
        });
    };
    return PhoneCallRedirect;
}());
exports.default = PhoneCallRedirect;
//# sourceMappingURL=phoneCallRedirect.js.map