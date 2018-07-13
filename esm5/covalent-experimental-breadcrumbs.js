import { Component, ElementRef, Renderer2, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef, ContentChildren, Input, NgModule } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { merge } from 'rxjs/observable/merge';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

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

export { CovalentBreadcrumbsModule, TdBreadcrumbsComponent, TdBreadcrumbComponent as ɵa };
//# sourceMappingURL=covalent-experimental-breadcrumbs.js.map
