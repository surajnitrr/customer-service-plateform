"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Team = /** @class */ (function () {
    function Team(client) {
        this.client = client;
        this.baseUrl = 'teams';
        this.client = client;
    }
    Team.prototype.find = function (_a) {
        var id = _a.id;
        return this.client.get({
            url: "/".concat(this.baseUrl, "/").concat(id),
        });
    };
    Team.prototype.list = function () {
        return this.client.get({
            url: "/".concat(this.baseUrl),
        });
    };
    return Team;
}());
exports.default = Team;
//# sourceMappingURL=team.js.map