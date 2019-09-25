(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular-devkit/schematics'), require('@angular/material/schematics/ng-add/package-config'), require('@angular-devkit/core'), require('@angular/cdk/schematics'), require('@schematics/angular/utility/config')) :
    typeof define === 'function' && define.amd ? define('@covalent/experimental', ['exports', '@angular/core', '@angular/common', '@angular-devkit/schematics', '@angular/material/schematics/ng-add/package-config', '@angular-devkit/core', '@angular/cdk/schematics', '@schematics/angular/utility/config'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.experimental = {}), global.ng.core, global.ng.common, global.schematics, global.ng.material.schematics['ng-add']['package-config'], global.core$1, global.ng.cdk.schematics, global.config));
}(this, function (exports, core, common, schematics, packageConfig, core$1, schematics$1, config) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdRenameMeComponent = /** @class */ (function () {
        function TdRenameMeComponent() {
            // stub
        }
        TdRenameMeComponent.decorators = [
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
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
        return schematics.chain([
            (/**
             * @param {?} host
             * @return {?}
             */
            function (host) {
                packageConfig.addPackageToPackageJson(host, '@angular/material', "~" + materialVersion);
                packageConfig.addPackageToPackageJson(host, '@covalent/core', "~" + covalentCoreVersion);
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
                        packageConfig.addPackageToPackageJson(host, component.dependency(), "~" + covalentCoreVersion);
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
        var templateSource = schematics.apply(schematics.url('./files'), [
            schematics.template(__assign({}, core$1.strings, options)),
        ]);
        return schematics.branchAndMerge(schematics.mergeWith(templateSource));
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
            var workspace = config.getWorkspace(host);
            /** @type {?} */
            var project = schematics$1.getProjectFromWorkspace(workspace);
            /** @type {?} */
            var targetOptions = schematics$1.getProjectTargetOptions(project, 'build');
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

    exports.CovalentRenameMeModule = CovalentRenameMeModule;
    exports.TdRenameMeComponent = TdRenameMeComponent;
    exports.addDependenciesAndFiles = addDependenciesAndFiles;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=covalent-experimental.umd.js.map
