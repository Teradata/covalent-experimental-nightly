import { __extends } from 'tslib';
import { Component, NgModule, ElementRef, Renderer2, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef, ContentChildren, Input, ViewChild, TemplateRef, ViewContainerRef, forwardRef, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { merge } from 'rxjs/observable/merge';
import { MatIconModule } from '@angular/material/icon';
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
var TdBreadcrumbComponent = /** @class */ (function () {
    function TdBreadcrumbComponent(_elementRef, _renderer, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._changeDetectorRef = _changeDetectorRef;
        this._displayCrumb = true;
        this._width = 0;
        this.separatorIcon = 'navigate_next';
        this._displayIcon = true;
        this._renderer.addClass(this._elementRef.nativeElement, 'mat-button');
    }
    Object.defineProperty(TdBreadcrumbComponent.prototype, "displayCrumb", {
        get: function () {
            return this._displayCrumb;
        },
        set: function (shouldDisplay) {
            this._displayCrumb = shouldDisplay;
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdBreadcrumbComponent.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdBreadcrumbComponent.prototype, "displayBinding", {
        get: function () {
            return this._displayCrumb ? undefined : 'none';
        },
        enumerable: true,
        configurable: true
    });
    TdBreadcrumbComponent.prototype.ngAfterViewInit = function () {
        this._width = ((this._elementRef.nativeElement)).getBoundingClientRect().width;
        this._changeDetectorRef.markForCheck();
    };
    TdBreadcrumbComponent.prototype._handleIconClick = function (event) {
        event.stopPropagation();
        event.preventDefault();
    };
    return TdBreadcrumbComponent;
}());
TdBreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-breadcrumb, a[td-breadcrumb]',
                styles: [":host .td-breadcrumb{height:48px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host .td-breadcrumb ::ng-deep>*{margin:0 10px}:host mat-icon.material-icons.mat-icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}:host.mat-button{min-width:0;padding:0}"],
                template: "<span *ngIf=\"displayCrumb\" class=\"td-breadcrumb\">\n  <ng-content></ng-content>\n  <mat-icon *ngIf=\"_displayIcon\"\n            [style.cursor]=\"'default'\"\n            (click)=\"_handleIconClick($event)\">\n    {{separatorIcon}}\n  </mat-icon>\n</span>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
TdBreadcrumbComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ChangeDetectorRef, },
]; };
TdBreadcrumbComponent.propDecorators = {
    "displayBinding": [{ type: HostBinding, args: ['style.display',] },],
};
var TdBreadcrumbsComponent = /** @class */ (function () {
    function TdBreadcrumbsComponent(_elementRef, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._resizeSubscription = Subscription.EMPTY;
        this._widthSubject = new Subject();
        this._resizing = false;
        this.hiddenBreadcrumbs = new Array();
        this.separatorIcon = 'navigate_next';
    }
    TdBreadcrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._resizeSubscription = merge(fromEvent(window, 'resize').pipe(debounceTime(10)), this._widthSubject.asObservable().pipe(distinctUntilChanged())).subscribe(function () {
            if (!_this._resizing) {
                _this._resizing = true;
                setTimeout(function () {
                    _this.displayWidthAvailableCrumbs();
                    _this._resizing = false;
                    _this._changeDetectorRef.markForCheck();
                }, 100);
            }
        });
    };
    TdBreadcrumbsComponent.prototype.ngDoCheck = function () {
        if (this._elementRef && this._elementRef.nativeElement) {
            this._widthSubject.next(this.nativeElementWidth);
        }
    };
    TdBreadcrumbsComponent.prototype.ngAfterContentInit = function () {
        this.setCrumbIcons();
        this._changeDetectorRef.markForCheck();
    };
    TdBreadcrumbsComponent.prototype.ngOnDestroy = function () {
        this._resizeSubscription.unsubscribe();
    };
    Object.defineProperty(TdBreadcrumbsComponent.prototype, "nativeElementWidth", {
        get: function () {
            return ((this._elementRef.nativeElement)).getBoundingClientRect().width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdBreadcrumbsComponent.prototype, "count", {
        get: function () {
            return this._breadcrumbs ? this._breadcrumbs.length : 0;
        },
        enumerable: true,
        configurable: true
    });
    TdBreadcrumbsComponent.prototype.setCrumbIcons = function () {
        var _this = this;
        var breadcrumbArray = this._breadcrumbs.toArray();
        if (breadcrumbArray.length > 0) {
            breadcrumbArray[breadcrumbArray.length - 1]._displayIcon = false;
        }
        breadcrumbArray.forEach(function (breadcrumb) {
            breadcrumb.separatorIcon = _this.separatorIcon;
        });
    };
    TdBreadcrumbsComponent.prototype.displayWidthAvailableCrumbs = function () {
        var curTotCrumbWidth = 0;
        var crumbsArray = this._breadcrumbs.toArray();
        for (var i = this.hiddenBreadcrumbs.length; i < crumbsArray.length; i++) {
            curTotCrumbWidth += crumbsArray[i].width;
        }
        if (this.nativeElementWidth < curTotCrumbWidth) {
            crumbsArray[this.hiddenBreadcrumbs.length].displayCrumb = false;
            this.hiddenBreadcrumbs.push(crumbsArray[this.hiddenBreadcrumbs.length]);
            this.displayWidthAvailableCrumbs();
        }
        else {
            var totalHidden = this.hiddenBreadcrumbs.length - 1;
            for (var i = totalHidden; i >= 0; i--) {
                var hiddenCrumbWidth = crumbsArray[i].width;
                if ((curTotCrumbWidth + hiddenCrumbWidth) < this.nativeElementWidth) {
                    crumbsArray[i].displayCrumb = true;
                    crumbsArray[i + 1]._displayIcon = true;
                    this.hiddenBreadcrumbs.pop();
                    var newTotCrumbWidth = 0;
                    for (var j = this.hiddenBreadcrumbs.length; j < crumbsArray.length; j++) {
                        newTotCrumbWidth += crumbsArray[j].width;
                    }
                    curTotCrumbWidth = newTotCrumbWidth;
                }
                else if (i === totalHidden) {
                    break;
                }
            }
        }
    };
    return TdBreadcrumbsComponent;
}());
TdBreadcrumbsComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-breadcrumbs',
                styles: [":host .td-breadcrumbs{white-space:nowrap}"],
                template: "<div class=\"td-breadcrumbs\">\n  <ng-content></ng-content>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
TdBreadcrumbsComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: ChangeDetectorRef, },
]; };
TdBreadcrumbsComponent.propDecorators = {
    "_breadcrumbs": [{ type: ContentChildren, args: [TdBreadcrumbComponent,] },],
    "separatorIcon": [{ type: Input, args: ['separatorIcon',] },],
};
var CovalentBreadcrumbsModule = /** @class */ (function () {
    function CovalentBreadcrumbsModule() {
    }
    return CovalentBreadcrumbsModule;
}());
CovalentBreadcrumbsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatIconModule,
                ],
                declarations: [
                    TdBreadcrumbsComponent,
                    TdBreadcrumbComponent,
                ],
                exports: [
                    TdBreadcrumbsComponent,
                    TdBreadcrumbComponent,
                ],
            },] },
];
CovalentBreadcrumbsModule.ctorParameters = function () { return []; };
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

export { CovalentRenameMeModule, TdRenameMeComponent, CovalentBreadcrumbsModule, TdBreadcrumbsComponent, CovalentTabSelectModule, TdTabSelectBase, _TdTabSelectMixinBase, TdTabSelectComponent, TdTabOptionBase, _TdTabOptionMixinBase, TdTabOptionComponent, TdBreadcrumbComponent as ɵa };
//# sourceMappingURL=covalent-experimental.js.map
