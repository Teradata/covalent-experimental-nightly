import { __extends } from 'tslib';
import { Component, NgModule, Input, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, TemplateRef, ViewContainerRef, ContentChildren, forwardRef, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatePortal, PortalModule } from '@angular/cdk/portal';
import { mixinDisabled, mixinControlValueAccessor, mixinDisableRipple } from '@covalent/core/common';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { MatTabsModule } from '@angular/material/tabs';

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
var TdTabOptionBase = /** @class */ (function () {
    function TdTabOptionBase(_viewContainerRef, _changeDetectorRef) {
        this._viewContainerRef = _viewContainerRef;
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdTabOptionBase;
}());
var _TdTabOptionMixinBase = mixinDisabled(TdTabOptionBase);
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
        this._contentPortal = new TemplatePortal(this._content, this._viewContainerRef);
    };
    return TdTabOptionComponent;
}(_TdTabOptionMixinBase));
TdTabOptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-tab-option',
                template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>\n",
                styles: [""],
                changeDetection: ChangeDetectionStrategy.OnPush,
                inputs: ['disabled'],
            },] },
];
TdTabOptionComponent.ctorParameters = function () { return [
    { type: ViewContainerRef, },
    { type: ChangeDetectorRef, },
]; };
TdTabOptionComponent.propDecorators = {
    "_content": [{ type: ViewChild, args: [TemplateRef,] },],
    "value": [{ type: Input, args: ['value',] },],
};
var TdTabSelectBase = /** @class */ (function () {
    function TdTabSelectBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdTabSelectBase;
}());
var _TdTabSelectMixinBase = mixinControlValueAccessor(mixinDisabled(mixinDisableRipple(TdTabSelectBase)));
var TdTabSelectComponent = /** @class */ (function (_super) {
    __extends(TdTabSelectComponent, _super);
    function TdTabSelectComponent(_changeDetectorRef) {
        var _this = _super.call(this, _changeDetectorRef) || this;
        _this._subs = [];
        _this._values = [];
        _this._selectedIndex = 0;
        _this._stretchTabs = false;
        _this.valueChange = new EventEmitter();
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
    Object.defineProperty(TdTabSelectComponent.prototype, "stretchTabs", {
        get: function () {
            return this._stretchTabs;
        },
        set: function (stretchTabs) {
            this._stretchTabs = coerceBooleanProperty(stretchTabs);
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
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return TdTabSelectComponent; }),
                        multi: true,
                    }],
                selector: 'td-tab-select',
                template: "<mat-tab-group [attr.mat-stretch-tabs]=\"stretchTabs ? true : undefined\"\n                [backgroundColor]=\"backgroundColor\"\n                [color]=\"color\"\n                [disableRipple]=\"disableRipple\"\n                [selectedIndex]=\"selectedIndex\"\n                (selectedIndexChange)=\"selectedIndexChange($event)\">\n  <ng-template let-tabOption\n                ngFor\n                [ngForOf]=\"tabOptions\">\n    <mat-tab [disabled]=\"tabOption.disabled || disabled\">\n      <ng-template matTabLabel>\n        <ng-template [cdkPortalOutlet]=\"tabOption.content\">\n        </ng-template>\n      </ng-template>\n    </mat-tab>\n  </ng-template>\n</mat-tab-group>\n",
                styles: [""],
                inputs: ['value', 'disabled', 'disableRipple'],
            },] },
];
TdTabSelectComponent.ctorParameters = function () { return [
    { type: ChangeDetectorRef, },
]; };
TdTabSelectComponent.propDecorators = {
    "_tabOptions": [{ type: ContentChildren, args: [TdTabOptionComponent,] },],
    "stretchTabs": [{ type: Input, args: ['stretchTabs',] },],
    "color": [{ type: Input, args: ['color',] },],
    "backgroundColor": [{ type: Input, args: ['backgroundColor',] },],
    "valueChange": [{ type: Output },],
};
var CovalentTabSelectModule = /** @class */ (function () {
    function CovalentTabSelectModule() {
    }
    return CovalentTabSelectModule;
}());
CovalentTabSelectModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    TdTabSelectComponent,
                    TdTabOptionComponent,
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    PortalModule,
                    MatTabsModule,
                ],
                exports: [
                    TdTabSelectComponent,
                    TdTabOptionComponent,
                ],
            },] },
];
CovalentTabSelectModule.ctorParameters = function () { return []; };

export { CovalentRenameMeModule, TdRenameMeComponent, CovalentTabSelectModule, TdTabSelectBase, _TdTabSelectMixinBase, TdTabSelectComponent, TdTabOptionBase, _TdTabOptionMixinBase, TdTabOptionComponent };
//# sourceMappingURL=covalent-experimental.js.map
