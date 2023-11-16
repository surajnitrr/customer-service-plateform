"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Article = /** @class */ (function () {
    function Article(client) {
        this.client = client;
        this.baseUrl = 'articles';
        this.client = client;
    }
    Article.prototype.create = function (_a) {
        var title = _a.title, description = _a.description, body = _a.body, authorId = _a.authorId, state = _a.state, parentId = _a.parentId, parentType = _a.parentType, translatedContent = _a.translatedContent;
        var data = {
            title: title,
            description: description,
            body: body,
            author_id: authorId,
            state: state,
            parent_id: parentId,
            parent_type: parentType,
            translated_content: translatedContent,
        };
        return this.client.post({
            url: "/".concat(this.baseUrl),
            data: data,
        });
    };
    Article.prototype.find = function (_a) {
        var id = _a.id;
        return this.client.get({
            url: "/".concat(this.baseUrl, "/").concat(id),
        });
    };
    Article.prototype.update = function (_a) {
        var id = _a.id, title = _a.title, description = _a.description, body = _a.body, authorId = _a.authorId, state = _a.state, parentId = _a.parentId, parentType = _a.parentType, translatedContent = _a.translatedContent;
        var data = {
            title: title,
            description: description,
            body: body,
            author_id: authorId,
            state: state,
            parent_id: parentId,
            parent_type: parentType,
            translated_content: translatedContent,
        };
        return this.client.put({
            url: "/".concat(this.baseUrl, "/").concat(id),
            data: data,
        });
    };
    Article.prototype.delete = function (_a) {
        var id = _a.id;
        return this.client.delete({
            url: "/".concat(this.baseUrl, "/").concat(id),
        });
    };
    Article.prototype.list = function (_a) {
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
    return Article;
}());
exports.default = Article;
//# sourceMappingURL=article.js.map