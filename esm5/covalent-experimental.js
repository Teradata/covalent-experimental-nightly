import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var TdRenameMeComponent = /** @class */ (function () {
    function TdRenameMeComponent() {
    }
    return TdRenameMeComponent;
}());
TdRenameMeComponent.decorators = [
    { type: Component, args: [{
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
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
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

export { CovalentRenameMeModule, TdRenameMeComponent };
//# sourceMappingURL=covalent-experimental.js.map
