(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@covalent/experimental/template-rename-me-experiment-module', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.covalent = global.covalent || {}, global.covalent.experimental = global.covalent.experimental || {}, global.covalent.experimental['template-rename-me-experiment-module'] = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: rename-me.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdRenameMeComponent = /** @class */ (function () {
        function TdRenameMeComponent() {
            // stub
        }
        return TdRenameMeComponent;
    }());
    TdRenameMeComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'td-renameMe',
                    template: "<a href=\"https://github.com/Teradata/covalent\">Test Link</a>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    TdRenameMeComponent.ctorParameters = function () { return []; };

    /**
     * @fileoverview added by tsickle
     * Generated from: rename-me.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CovalentRenameMeModule = /** @class */ (function () {
        function CovalentRenameMeModule() {
        }
        return CovalentRenameMeModule;
    }());
    CovalentRenameMeModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: [TdRenameMeComponent],
                    exports: [TdRenameMeComponent],
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: covalent-experimental-template-rename-me-experiment-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CovalentRenameMeModule = CovalentRenameMeModule;
    exports.TdRenameMeComponent = TdRenameMeComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-experimental-template-rename-me-experiment-module.umd.js.map
