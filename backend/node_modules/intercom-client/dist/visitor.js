"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Visitor = /** @class */ (function () {
    function Visitor(client) {
        this.client = client;
        this.baseUrl = 'visitors';
        this.client = client;
    }
    Visitor.prototype.find = function (_a) {
        var id = _a.id, userId = _a.userId;
        var query = userId ? { user_id: userId } : {};
        var url = "/".concat(this.baseUrl).concat(id ? "/".concat(id) : '');
        return this.client.get({
            url: url,
            params: query,
        });
    };
    Visitor.prototype.update = function (_a) {
        var id = _a.id, userId = _a.userId, name = _a.name, customAttributes = _a.customAttributes;
        var data = {
            id: id,
            user_id: userId,
            name: name,
            custom_attributes: customAttributes,
        };
        return this.client.put({
            url: "/".concat(this.baseUrl),
            data: data,
        });
    };
    Visitor.prototype.delete = function (_a) {
        var id = _a.id;
        return this.client.delete({
            url: "/".concat(this.baseUrl, "/").concat(id),
        });
    };
    Visitor.prototype.mergeToContact = function (_a) {
        var visitor = _a.visitor, user = _a.user, type = _a.type;
        var data = {
            visitor: {
                id: visitor.id,
                user_id: visitor.userId,
                email: visitor.email,
            },
            user: {
                id: user.id,
                user_id: user.userId,
                email: user.email,
            },
            type: type,
        };
        return this.client.post({
            url: "/".concat(this.baseUrl, "/convert"),
            data: data,
        });
    };
    return Visitor;
}());
exports.default = Visitor;
//# sourceMappingURL=visitor.js.map