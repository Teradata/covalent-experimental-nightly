(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('@covalent/experimental/template-rename-me-experiment-module', ['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.covalent = global.covalent || {}, global.covalent.experimental = global.covalent.experimental || {}, global.covalent.experimental['template-rename-me-experiment-module'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var TdRenameMeComponent = /** @class */ (function () {
    function TdRenameMeComponent() {
    }
    return TdRenameMeComponent;
}());
TdRenameMeComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-renameMe',
                styles: [""],
                template: "<a href=\"https://github.com/Teradata/covalent\"> Test Link </a>\n",
            },] },
];
TdRenameMeComponent.ctorParameters = function () { return []; };
var CovalentRenameMeModule = /** @class */ (function () {
    function CovalentRenameMeModule() {
    }
    return CovalentRenameMeModule;
}());
CovalentRenameMeModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                ],
                declarations: [
                    TdRenameMeComponent,
                ],
                exports: [
                    TdRenameMeComponent,
                ],
            },] },
];
CovalentRenameMeModule.ctorParameters = function () { return []; };

exports.CovalentRenameMeModule = CovalentRenameMeModule;
exports.TdRenameMeComponent = TdRenameMeComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-experimental-template-rename-me-experiment-module.umd.js.map
