"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataExport = /** @class */ (function () {
    function DataExport(client) {
        this.client = client;
        this.baseUrl = 'export';
        this.client = client;
    }
    DataExport.prototype.find = function (_a) {
        var id = _a.id;
        return this.client.get({
            url: "/".concat(this.baseUrl, "/content/data/").concat(id),
        });
    };
    DataExport.prototype.create = function (_a) {
        var createdAtBefore = _a.createdAtBefore, createdAtAfter = _a.createdAtAfter;
        var data = {
            created_at_before: createdAtBefore,
            created_at_after: createdAtAfter,
        };
        return this.client.post({
            url: "/".concat(this.client.dataExport.baseUrl, "/content/data/"),
            data: data,
        });
    };
    DataExport.prototype.cancel = function (_a) {
        var id = _a.id;
        return this.client.post({
            url: "/".concat(this.baseUrl, "/cancel/").concat(id),
            data: {},
        });
    };
    return DataExport;
}());
exports.default = DataExport;
//# sourceMappingURL=dataExport.js.map