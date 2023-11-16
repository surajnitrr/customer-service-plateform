"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataAttribute = /** @class */ (function () {
    function DataAttribute(client) {
        this.client = client;
        this.baseUrl = 'data_attributes';
        this.client = client;
    }
    DataAttribute.prototype.create = function (_a) {
        var name = _a.name, model = _a.model, data_type = _a.dataType, description = _a.description, options = _a.options;
        var data = {
            name: name,
            model: model,
            data_type: data_type,
            description: description,
            options: options,
        };
        return this.client.post({
            url: "/".concat(this.baseUrl),
            data: data,
        });
    };
    DataAttribute.prototype.update = function (_a) {
        var archived = _a.archived, description = _a.description, id = _a.id, options = _a.options;
        var data = {
            archived: archived,
            description: description,
            options: options,
        };
        return this.client.put({
            url: "/".concat(this.baseUrl, "/").concat(id),
            data: data,
        });
    };
    DataAttribute.prototype.list = function (_a) {
        var model = _a.model, include_archived = _a.includeArchived;
        var queryParams = {
            model: model,
            include_archived: include_archived,
        };
        return this.client.get({
            url: "/".concat(this.baseUrl),
            params: queryParams,
        });
    };
    return DataAttribute;
}());
exports.default = DataAttribute;
//# sourceMappingURL=dataAttribute.js.map