"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var scroll_1 = __importDefault(require("./scroll"));
var url_1 = require("./util/url");
var Company = /** @class */ (function () {
    function Company(client) {
        this.client = client;
        this.baseUrl = 'companies';
        this.client = client;
        this.scroll = new scroll_1.default(this.client, this.baseUrl);
    }
    Company.prototype.create = function (_a) {
        var createdAt = _a.createdAt, companyId = _a.companyId, name = _a.name, monthlySpend = _a.monthlySpend, plan = _a.plan, size = _a.size, website = _a.website, industry = _a.industry, customAttributes = _a.customAttributes;
        var data = {
            remote_created_at: createdAt,
            company_id: companyId,
            name: name,
            monthly_spend: monthlySpend,
            plan: plan,
            size: size,
            website: website,
            industry: industry,
            custom_attributes: customAttributes,
        };
        return this.client.post({
            url: "/".concat(this.baseUrl),
            data: data,
        });
    };
    Company.prototype.update = function (_a) {
        var createdAt = _a.createdAt, companyId = _a.companyId, name = _a.name, monthlySpend = _a.monthlySpend, plan = _a.plan, size = _a.size, website = _a.website, industry = _a.industry, customAttributes = _a.customAttributes;
        var data = {
            remote_created_at: createdAt,
            name: name,
            monthly_spend: monthlySpend,
            plan: plan,
            size: size,
            website: website,
            industry: industry,
            custom_attributes: customAttributes,
        };
        return this.client.put({
            url: "/".concat(this.baseUrl, "/").concat(companyId),
            data: data,
        });
    };
    Company.prototype.find = function (_a) {
        var companyId = _a.companyId, name = _a.name;
        var query = {
            company_id: companyId,
            name: name,
        };
        return this.client.get({
            url: "/".concat(this.baseUrl),
            params: (0, url_1.encodeParamsForURL)(query),
        });
    };
    Company.prototype.delete = function (_a) {
        var id = _a.id;
        return this.client.delete({
            url: "/".concat(this.baseUrl, "/").concat(id),
        });
    };
    Company.prototype.list = function (_a) {
        var page = _a.page, per_page = _a.perPage, order = _a.order, tag_id = _a.tagId, segment_id = _a.segmentId;
        var params = {
            page: page,
            per_page: per_page,
            order: order,
            tag_id: tag_id,
            segment_id: segment_id,
        };
        return this.client.get({
            url: "/".concat(this.baseUrl),
            params: params,
        });
    };
    Company.prototype.attachContact = function (_a) {
        var contactId = _a.contactId, companyId = _a.companyId;
        var data = {
            id: companyId,
        };
        return this.client.post({
            url: "/".concat(this.client.contacts.baseUrl, "/").concat(contactId, "/").concat(this.baseUrl),
            data: data,
        });
    };
    Company.prototype.detachContact = function (_a) {
        var contactId = _a.contactId, companyId = _a.companyId;
        return this.client.delete({
            url: "/".concat(this.client.contacts.baseUrl, "/").concat(contactId, "/").concat(this.baseUrl, "/").concat(companyId),
        });
    };
    Company.prototype.listAttachedContacts = function (_a) {
        var companyId = _a.companyId, page = _a.page, perPage = _a.perPage;
        var params = { page: page, perPage: perPage };
        return this.client.get({
            url: "/".concat(this.baseUrl, "/").concat(companyId, "/").concat(this.client.contacts.baseUrl),
            params: params,
        });
    };
    Company.prototype.listAttachedSegments = function (_a) {
        var companyId = _a.companyId;
        return this.client.get({
            url: "/".concat(this.baseUrl, "/").concat(companyId, "/").concat(this.client.segments.baseUrl),
        });
    };
    return Company;
}());
exports.default = Company;
//# sourceMappingURL=company.js.map