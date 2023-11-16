"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.Operators = exports.Role = void 0;
var Role;
(function (Role) {
    Role["USER"] = "user";
    Role["LEAD"] = "lead";
})(Role = exports.Role || (exports.Role = {}));
var Operators;
(function (Operators) {
    Operators["AND"] = "AND";
    Operators["OR"] = "OR";
    Operators["EQUALS"] = "=";
    Operators["NOT_EQUALS"] = "!=";
    Operators["IN"] = "IN";
    Operators["NIN"] = "NIN";
    Operators["GREATER_THAN"] = ">";
    Operators["LESS_THAN"] = "<";
    Operators["CONTAINS"] = "~";
    Operators["NOT_CONTAINS"] = "!~";
    Operators["STARTS_WITH"] = "^";
    Operators["ENDS_WITH"] = "$";
})(Operators = exports.Operators || (exports.Operators = {}));
var Order;
(function (Order) {
    Order["DESC"] = "desc";
    Order["ASC"] = "asc";
})(Order = exports.Order || (exports.Order = {}));
//# sourceMappingURL=common.types.js.map