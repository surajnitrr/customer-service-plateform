"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Note = /** @class */ (function () {
    function Note(client) {
        this.client = client;
        this.baseUrl = 'notes';
        this.client = client;
    }
    Note.prototype.create = function (_a) {
        var adminId = _a.adminId, body = _a.body, contactId = _a.contactId;
        var data = {
            admin_id: adminId,
            body: body,
        };
        return this.client.post({
            url: "/".concat(this.client.contacts.baseUrl, "/").concat(contactId, "/").concat(this.baseUrl),
            data: data,
        });
    };
    Note.prototype.find = function (_a) {
        var id = _a.id;
        return this.client.get({
            url: "/".concat(this.baseUrl, "/").concat(id),
        });
    };
    Note.prototype.list = function (_a) {
        var contactId = _a.contactId, page = _a.page, per_page = _a.perPage;
        var params = {
            page: page,
            per_page: per_page,
        };
        return this.client.get({
            url: "/".concat(this.client.contacts.baseUrl, "/").concat(contactId, "/").concat(this.baseUrl),
            params: params,
        });
    };
    return Note;
}());
exports.default = Note;
//# sourceMappingURL=note.js.map