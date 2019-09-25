import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __values, __read, __assign } from 'tslib';
import { chain, branchAndMerge, mergeWith, apply, url, template } from '@angular-devkit/schematics';
import { addPackageToPackageJson } from '@angular/material/schematics/ng-add/package-config';
import { strings } from '@angular-devkit/core';
import { getProjectFromWorkspace, getProjectTargetOptions } from '@angular/cdk/schematics';
import { getWorkspace } from '@schematics/angular/utility/config';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TdRenameMeComponent = /** @class */ (function () {
    function TdRenameMeComponent() {
        // stub
    }
    TdRenameMeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-renameMe',
                    template: "<a href=\"https://github.com/Teradata/covalent\"> Test Link </a>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    TdRenameMeComponent.ctorParameters = function () { return []; };
    return TdRenameMeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CovalentRenameMeModule = /** @class */ (function () {
    function CovalentRenameMeModule() {
    }
    CovalentRenameMeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [TdRenameMeComponent],
                    exports: [TdRenameMeComponent],
                },] }
    ];
    return CovalentRenameMeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var covalentCoreVersion = '2.0.0';
/** @type {?} */
var materialVersion = '7.0.1';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DynamicForms = /** @class */ (function () {
    function DynamicForms() {
    }
    /**
     * @param {?} options
     * @return {?}
     */
    DynamicForms.prototype.enabled = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return options.dynamicForms;
    };
    /**
     * @return {?}
     */
    DynamicForms.prototype.dependency = /**
     * @return {?}
     */
    function () {
        return '@covalent/dynamic-forms';
    };
    return DynamicForms;
}());
var Http = /** @class */ (function () {
    function Http() {
    }
    /**
     * @param {?} options
     * @return {?}
     */
    Http.prototype.enabled = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return options.http;
    };
    /**
     * @return {?}
     */
    Http.prototype.dependency = /**
     * @return {?}
     */
    function () {
        return '@covalent/http';
    };
    return Http;
}());
var Highlight = /** @class */ (function () {
    function Highlight() {
    }
    /**
     * @param {?} options
     * @return {?}
     */
    Highlight.prototype.enabled = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return options.highlight;
    };
    /**
     * @return {?}
     */
    Highlight.prototype.dependency = /**
     * @return {?}
     */
    function () {
        return '@covalent/highlight';
    };
    return Highlight;
}());
var Markdown = /** @class */ (function () {
    function Markdown() {
    }
    /**
     * @param {?} options
     * @return {?}
     */
    Markdown.prototype.enabled = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return options.markdown;
    };
    /**
     * @return {?}
     */
    Markdown.prototype.dependency = /**
     * @return {?}
     */
    function () {
        return '@covalent/markdown';
    };
    return Markdown;
}());
var FlavoredMarkdown = /** @class */ (function () {
    function FlavoredMarkdown() {
    }
    /**
     * @param {?} options
     * @return {?}
     */
    FlavoredMarkdown.prototype.enabled = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return options.flavoredMarkdown;
    };
    /**
     * @return {?}
     */
    FlavoredMarkdown.prototype.dependency = /**
     * @return {?}
     */
    function () {
        return '@covalent/flavored-markdown';
    };
    return FlavoredMarkdown;
}());
var TextEditor = /** @class */ (function () {
    function TextEditor() {
    }
    /**
     * @param {?} options
     * @return {?}
     */
    TextEditor.prototype.enabled = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return options.textEditor;
    };
    /**
     * @return {?}
     */
    TextEditor.prototype.dependency = /**
     * @return {?}
     */
    function () {
        return '@covalent/text-editor';
    };
    return TextEditor;
}());
var CodeEditor = /** @class */ (function () {
    function CodeEditor() {
    }
    /**
     * @param {?} options
     * @return {?}
     */
    CodeEditor.prototype.enabled = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return options.codeEditor;
    };
    /**
     * @return {?}
     */
    CodeEditor.prototype.dependency = /**
     * @return {?}
     */
    function () {
        return '@covalent/code-editor';
    };
    return CodeEditor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} options
 * @return {?}
 */
function addDependenciesAndFiles(options) {
    return chain([
        (/**
         * @param {?} host
         * @return {?}
         */
        function (host) {
            addPackageToPackageJson(host, '@angular/material', "~" + materialVersion);
            addPackageToPackageJson(host, '@covalent/core', "~" + covalentCoreVersion);
            /** @type {?} */
            var components = [
                new DynamicForms(),
                new Http(),
                new Highlight(),
                new Markdown(),
                new FlavoredMarkdown(),
                new TextEditor(),
                new CodeEditor(),
            ];
            components.forEach((/**
             * @param {?} component
             * @return {?}
             */
            function (component) {
                if (component.enabled(options)) {
                    addPackageToPackageJson(host, component.dependency(), "~" + covalentCoreVersion);
                }
            }));
        }),
        mergeFiles(options),
        addThemeToAngularJson(),
    ]);
}
/**
 * @param {?} options
 * @return {?}
 */
function mergeFiles(options) {
    /** @type {?} */
    var templateSource = apply(url('./files'), [
        template(__assign({}, strings, options)),
    ]);
    return branchAndMerge(mergeWith(templateSource));
}
/**
 * @return {?}
 */
function addThemeToAngularJson() {
    return (/**
     * @param {?} host
     * @return {?}
     */
    function (host) {
        var e_1, _a;
        /** @type {?} */
        var workspace = getWorkspace(host);
        /** @type {?} */
        var project = getProjectFromWorkspace(workspace);
        /** @type {?} */
        var targetOptions = getProjectTargetOptions(project, 'build');
        /** @type {?} */
        var assetPath = "src/theme.scss";
        /** @type {?} */
        var prebuiltThemePathSegment = "src/styles.scss";
        if (!targetOptions.styles) {
            targetOptions.styles = [assetPath];
        }
        else {
            /** @type {?} */
            var existingStyles = targetOptions.styles.map((/**
             * @param {?} s
             * @return {?}
             */
            function (s) { return (typeof s === 'string' ? s : s.input); }));
            try {
                for (var _b = __values(existingStyles.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = __read(_c.value, 2), index = _d[0], stylePath = _d[1];
                    if (stylePath === assetPath) {
                        return;
                    }
                    if (stylePath.includes(prebuiltThemePathSegment)) {
                        targetOptions.styles.splice(index, 0);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            targetOptions.styles.unshift(assetPath);
        }
        host.overwrite('angular.json', JSON.stringify(workspace, undefined, 2));
        return host;
    });
}

export { CovalentRenameMeModule, TdRenameMeComponent, addDependenciesAndFiles };
//# sourceMappingURL=covalent-experimental.js.map
