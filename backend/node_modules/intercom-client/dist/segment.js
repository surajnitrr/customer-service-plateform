"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Segment = /** @class */ (function () {
    function Segment(client) {
        this.client = client;
        this.baseUrl = 'segments';
        this.client = client;
    }
    Segment.prototype.list = function (_a) {
        var include_count = _a.includeCount;
        var params = { include_count: include_count };
        return this.client.get({
            url: "/".concat(this.baseUrl),
            params: params,
        });
    };
    Segment.prototype.find = function (_a) {
        var id = _a.id, include_count = _a.includeCount;
        var params = { include_count: include_count };
        return this.client.get({
            url: "/".concat(this.baseUrl, "/").concat(id),
            params: params,
        });
    };
    return Segment;
}());
exports.default = Segment;
//# sourceMappingURL=segment.js.map