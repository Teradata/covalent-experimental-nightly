(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@covalent/experimental', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.experimental = {}), global.ng.core, global.ng.common));
}(this, function (exports, core, common) { 'use strict';

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
                        template: "<a href=\"https://github.com/Teradata/covalent\">Test Link</a>\n",
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

    exports.CovalentRenameMeModule = CovalentRenameMeModule;
    exports.TdRenameMeComponent = TdRenameMeComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=covalent-experimental.umd.js.map
