(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('@angular/material/icon')) :
	typeof define === 'function' && define.amd ? define('@covalent/experimental/breadcrumbs', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/common', '@angular/material/icon'], factory) :
	(factory((global.covalent = global.covalent || {}, global.covalent.experimental = global.covalent.experimental || {}, global.covalent.experimental.breadcrumbs = {}),global.ng.core,global.rxjs,global.Rx.Observable.prototype,global.ng.common,global.ng.material.icon));
}(this, (function (exports,core,rxjs,operators,common,icon) { 'use strict';

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
    { type: core.Component, args: [{
                selector: 'td-breadcrumb, a[td-breadcrumb]',
                styles: [":host .td-breadcrumb{height:48px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host .td-breadcrumb ::ng-deep>*{margin:0 10px}:host .td-breadcrumb-separator-icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}:host.mat-button{min-width:0;padding:0}"],
                template: "<span *ngIf=\"displayCrumb\" class=\"td-breadcrumb\">\n  <ng-content></ng-content>\n  <mat-icon *ngIf=\"_displayIcon\"\n            class=\"td-breadcrumb-separator-icon\"\n            [style.cursor]=\"'default'\"\n            (click)=\"_handleIconClick($event)\">\n    {{separatorIcon}}\n  </mat-icon>\n</span>\n",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
            },] },
];
TdBreadcrumbComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ChangeDetectorRef, },
]; };
TdBreadcrumbComponent.propDecorators = {
    "displayBinding": [{ type: core.HostBinding, args: ['style.display',] },],
};
var TdBreadcrumbsComponent = /** @class */ (function () {
    function TdBreadcrumbsComponent(_elementRef, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._resizeSubscription = rxjs.Subscription.EMPTY;
        this._widthSubject = new rxjs.Subject();
        this._resizing = false;
        this.hiddenBreadcrumbs = new Array();
        this.separatorIcon = 'navigate_next';
    }
    TdBreadcrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._resizeSubscription = rxjs.merge(rxjs.fromEvent(window, 'resize').pipe(operators.debounceTime(10)), this._widthSubject.asObservable().pipe(operators.distinctUntilChanged())).subscribe(function () {
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
            var element = ((this._elementRef.nativeElement));
            var style = window.getComputedStyle(element);
            var borderLeft = parseInt(style.borderLeft, 10);
            var borderRight = parseInt(style.borderRight, 10);
            var marginLeft = parseInt(style.marginLeft, 10);
            var marginRight = parseInt(style.marginRight, 10);
            var paddingLeft = parseInt(style.paddingLeft, 10);
            var paddingRight = parseInt(style.paddingRight, 10);
            return element.getBoundingClientRect().width - borderLeft - borderRight - marginLeft - marginRight - paddingLeft - paddingRight;
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
    { type: core.Component, args: [{
                selector: 'td-breadcrumbs',
                styles: [":host{display:block;width:100%}:host .td-breadcrumbs{white-space:nowrap}"],
                template: "<div class=\"td-breadcrumbs\">\n  <ng-content></ng-content>\n</div>\n",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
            },] },
];
TdBreadcrumbsComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.ChangeDetectorRef, },
]; };
TdBreadcrumbsComponent.propDecorators = {
    "_breadcrumbs": [{ type: core.ContentChildren, args: [TdBreadcrumbComponent,] },],
    "separatorIcon": [{ type: core.Input, args: ['separatorIcon',] },],
};
var CovalentBreadcrumbsModule = /** @class */ (function () {
    function CovalentBreadcrumbsModule() {
    }
    return CovalentBreadcrumbsModule;
}());
CovalentBreadcrumbsModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    icon.MatIconModule,
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

exports.CovalentBreadcrumbsModule = CovalentBreadcrumbsModule;
exports.TdBreadcrumbsComponent = TdBreadcrumbsComponent;
exports.ɵa = TdBreadcrumbComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-experimental-breadcrumbs.umd.js.map
