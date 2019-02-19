"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DynamicForms = /** @class */ (function () {
    function DynamicForms() {
    }
    DynamicForms.prototype.enabled = function (options) {
        return options.dynamicForms;
    };
    DynamicForms.prototype.dependency = function () {
        return '@covalent/dynamic-forms';
    };
    return DynamicForms;
}());
exports.DynamicForms = DynamicForms;
var Http = /** @class */ (function () {
    function Http() {
    }
    Http.prototype.enabled = function (options) {
        return options.http;
    };
    Http.prototype.dependency = function () {
        return '@covalent/http';
    };
    return Http;
}());
exports.Http = Http;
var Highlight = /** @class */ (function () {
    function Highlight() {
    }
    Highlight.prototype.enabled = function (options) {
        return options.highlight;
    };
    Highlight.prototype.dependency = function () {
        return '@covalent/highlight';
    };
    return Highlight;
}());
exports.Highlight = Highlight;
var Markdown = /** @class */ (function () {
    function Markdown() {
    }
    Markdown.prototype.enabled = function (options) {
        return options.markdown;
    };
    Markdown.prototype.dependency = function () {
        return '@covalent/markdown';
    };
    return Markdown;
}());
exports.Markdown = Markdown;
var FlavoredMarkdown = /** @class */ (function () {
    function FlavoredMarkdown() {
    }
    FlavoredMarkdown.prototype.enabled = function (options) {
        return options.flavoredMarkdown;
    };
    FlavoredMarkdown.prototype.dependency = function () {
        return '@covalent/flavored-markdown';
    };
    return FlavoredMarkdown;
}());
exports.FlavoredMarkdown = FlavoredMarkdown;
//# sourceMappingURL=components.js.map