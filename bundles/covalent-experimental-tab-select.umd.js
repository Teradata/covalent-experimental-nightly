(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/portal'), require('@covalent/core/common'), require('@angular/forms'), require('@angular/common'), require('@angular/material/tabs')) :
	typeof define === 'function' && define.amd ? define('@covalent/experimental/tab-select', ['exports', '@angular/core', '@angular/cdk/portal', '@covalent/core/common', '@angular/forms', '@angular/common', '@angular/material/tabs'], factory) :
	(factory((global.covalent = global.covalent || {}, global.covalent.experimental = global.covalent.experimental || {}, global.covalent.experimental['tab-select'] = {}),global.ng.core,global.ng.cdk.portal,global.common,global.ng.forms,global.ng.common,global.ng.material.tabs));
}(this, (function (exports,core,portal,common,forms,common$1,tabs) { 'use strict';

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
/* global Reflect, Promise */
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var TdTabOptionBase = /** @class */ (function () {
    function TdTabOptionBase(_viewContainerRef, _changeDetectorRef) {
        this._viewContainerRef = _viewContainerRef;
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdTabOptionBase;
}());
var _TdTabOptionMixinBase = common.mixinDisabled(TdTabOptionBase);
var TdTabOptionComponent = /** @class */ (function (_super) {
    __extends(TdTabOptionComponent, _super);
    function TdTabOptionComponent(_viewContainerRef, _changeDetectorRef) {
        return _super.call(this, _viewContainerRef, _changeDetectorRef) || this;
    }
    Object.defineProperty(TdTabOptionComponent.prototype, "content", {
        get: function () {
            return this._contentPortal;
        },
        enumerable: true,
        configurable: true
    });
    TdTabOptionComponent.prototype.ngOnInit = function () {
        this._contentPortal = new portal.TemplatePortal(this._content, this._viewContainerRef);
    };
    return TdTabOptionComponent;
}(_TdTabOptionMixinBase));
TdTabOptionComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-tab-option',
                template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>\n",
                styles: [""],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                inputs: ['disabled'],
            },] },
];
TdTabOptionComponent.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
    { type: core.ChangeDetectorRef, },
]; };
TdTabOptionComponent.propDecorators = {
    "_content": [{ type: core.ViewChild, args: [core.TemplateRef,] },],
    "value": [{ type: core.Input, args: ['value',] },],
};
var TdTabSelectBase = /** @class */ (function () {
    function TdTabSelectBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdTabSelectBase;
}());
var _TdTabSelectMixinBase = common.mixinControlValueAccessor(common.mixinDisabled(common.mixinDisableRipple(TdTabSelectBase)));
var TdTabSelectComponent = /** @class */ (function (_super) {
    __extends(TdTabSelectComponent, _super);
    function TdTabSelectComponent(_changeDetectorRef) {
        var _this = _super.call(this, _changeDetectorRef) || this;
        _this._subs = [];
        _this._values = [];
        _this._selectedIndex = 0;
        _this.valueChange = new core.EventEmitter();
        return _this;
    }
    Object.defineProperty(TdTabSelectComponent.prototype, "selectedIndex", {
        get: function () {
            return this._selectedIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdTabSelectComponent.prototype, "tabOptions", {
        get: function () {
            return this._tabOptions ? this._tabOptions.toArray() : undefined;
        },
        enumerable: true,
        configurable: true
    });
    TdTabSelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subs.push(this.valueChanges.subscribe(function (value) {
            _this._setValue(value);
        }));
    };
    TdTabSelectComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._refreshValues();
        this._subs.push(this._tabOptions.changes.subscribe(function () {
            _this._refreshValues();
        }));
        Promise.resolve().then(function () {
            _this._setValue(_this.value);
        });
    };
    TdTabSelectComponent.prototype.ngOnDestroy = function () {
        if (this._subs && this._subs.length) {
            this._subs.forEach(function (sub) {
                sub.unsubscribe();
            });
        }
    };
    TdTabSelectComponent.prototype.selectedIndexChange = function (selectedIndex) {
        this._selectedIndex = selectedIndex;
        var value = this._values[selectedIndex];
        this.value = value;
        this.valueChange.emit(value);
        this.onChange(value);
    };
    TdTabSelectComponent.prototype._refreshValues = function () {
        this._values = this.tabOptions.map(function (tabOption) {
            return tabOption.value;
        });
    };
    TdTabSelectComponent.prototype._setValue = function (value) {
        var index = this._values.indexOf(value);
        if (index > -1) {
            this._selectedIndex = index;
        }
        else {
            this.value = this._values.length ? this._values[0] : undefined;
            this._selectedIndex = 0;
        }
        this._changeDetectorRef.markForCheck();
    };
    return TdTabSelectComponent;
}(_TdTabSelectMixinBase));
TdTabSelectComponent.decorators = [
    { type: core.Component, args: [{
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [{
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return TdTabSelectComponent; }),
                        multi: true,
                    }],
                selector: 'td-tab-select',
                template: "<mat-tab-group [backgroundColor]=\"backgroundColor\"\n                [color]=\"color\"\n                [disableRipple]=\"disableRipple\"\n                [selectedIndex]=\"selectedIndex\"\n                (selectedIndexChange)=\"selectedIndexChange($event)\">\n  <ng-template let-tabOption\n                ngFor\n                [ngForOf]=\"tabOptions\">\n    <mat-tab [disabled]=\"tabOption.disabled || disabled\">\n      <ng-template matTabLabel>\n        <ng-template [cdkPortalOutlet]=\"tabOption.content\">\n        </ng-template>\n      </ng-template>\n    </mat-tab>\n  </ng-template>\n</mat-tab-group>\n",
                styles: [""],
                inputs: ['value', 'disabled', 'disableRipple'],
            },] },
];
TdTabSelectComponent.ctorParameters = function () { return [
    { type: core.ChangeDetectorRef, },
]; };
TdTabSelectComponent.propDecorators = {
    "_tabOptions": [{ type: core.ContentChildren, args: [TdTabOptionComponent,] },],
    "color": [{ type: core.Input, args: ['color',] },],
    "backgroundColor": [{ type: core.Input, args: ['backgroundColor',] },],
    "valueChange": [{ type: core.Output },],
};
var CovalentTabSelectModule = /** @class */ (function () {
    function CovalentTabSelectModule() {
    }
    return CovalentTabSelectModule;
}());
CovalentTabSelectModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [
                    TdTabSelectComponent,
                    TdTabOptionComponent,
                ],
                imports: [
                    common$1.CommonModule,
                    forms.FormsModule,
                    portal.PortalModule,
                    tabs.MatTabsModule,
                ],
                exports: [
                    TdTabSelectComponent,
                    TdTabOptionComponent,
                ],
            },] },
];
CovalentTabSelectModule.ctorParameters = function () { return []; };

exports.CovalentTabSelectModule = CovalentTabSelectModule;
exports.TdTabSelectBase = TdTabSelectBase;
exports._TdTabSelectMixinBase = _TdTabSelectMixinBase;
exports.TdTabSelectComponent = TdTabSelectComponent;
exports.TdTabOptionBase = TdTabOptionBase;
exports._TdTabOptionMixinBase = _TdTabOptionMixinBase;
exports.TdTabOptionComponent = TdTabOptionComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-experimental-tab-select.umd.js.map
