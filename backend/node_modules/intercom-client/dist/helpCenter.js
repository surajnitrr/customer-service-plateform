"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HelpCenter = /** @class */ (function () {
    function HelpCenter(client) {
        this.collections = new Collection(client);
        this.sections = new Section(client);
    }
    return HelpCenter;
}());
exports.default = HelpCenter;
var Collection = /** @class */ (function () {
    function Collection(client) {
        this.client = client;
        this.baseUrl = 'help_center/collections';
        this.client = client;
    }
    Collection.prototype.create = function (_a) {
        var name = _a.name, description = _a.description, translatedContent = _a.translatedContent;
        var data = {
            name: name,
            description: description,
            translated_content: translatedContent,
        };
        return this.client.post({
            url: "/".concat(this.baseUrl),
            data: data,
        });
    };
    Collection.prototype.find = function (_a) {
        var id = _a.id;
        return this.client.get({
            url: "/".concat(this.baseUrl, "/").concat(id),
        });
    };
    Collection.prototype.update = function (_a) {
        var id = _a.id, name = _a.name, description = _a.description, translatedContent = _a.translatedContent;
        var data = {
            name: name,
            description: description,
            translated_content: translatedContent,
        };
        return this.client.put({
            url: "/".concat(this.baseUrl, "/").concat(id),
            data: data,
        });
    };
    Collection.prototype.delete = function (_a) {
        var id = _a.id;
        return this.client.delete({
            url: "/".concat(this.baseUrl, "/").concat(id),
        });
    };
    Collection.prototype.list = function (_a) {
        var page = _a.page, per_page = _a.perPage;
        var params = {
            page: page,
            per_page: per_page,
        };
        return this.client.get({
            url: "/".concat(this.baseUrl),
            params: params,
        });
    };
    return Collection;
}());
var Section = /** @class */ (function () {
    function Section(client) {
        this.client = client;
        this.baseUrl = 'help_center/sections';
        this.client = client;
    }
    Section.prototype.create = function (_a) {
        var name = _a.name, parentId = _a.parentId, translatedContent = _a.translatedContent;
        var data = {
            name: name,
            parent_id: parentId,
            translated_content: translatedContent,
        };
        return this.client.post({
            url: "/".concat(this.baseUrl),
            data: data,
        });
    };
    Section.prototype.find = function (_a) {
        var id = _a.id;
        return this.client.get({
            url: "/".concat(this.baseUrl, "/").concat(id),
        });
    };
    Section.prototype.update = function (_a) {
        var id = _a.id, name = _a.name, parentId = _a.parentId, translatedContent = _a.translatedContent;
        var data = {
            name: name,
            parent_id: parentId,
            translated_content: translatedContent,
        };
        return this.client.put({
            url: "/".concat(this.baseUrl, "/").concat(id),
            data: data,
        });
    };
    Section.prototype.delete = function (_a) {
        var id = _a.id;
        return this.client.delete({
            url: "/".concat(this.baseUrl, "/").concat(id),
        });
    };
    Section.prototype.list = function (_a) {
        var page = _a.page, per_page = _a.perPage;
        var params = {
            page: page,
            per_page: per_page,
        };
        return this.client.get({
            url: "/".concat(this.baseUrl),
            params: params,
        });
    };
    return Section;
}());
//# sourceMappingURL=helpCenter.js.map