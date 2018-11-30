import { Component, NgModule, ElementRef, HostBinding, Renderer2, ChangeDetectionStrategy, ChangeDetectorRef, Input, ContentChildren, Injectable, Injector, ɵReflectionCapabilities, Optional, SkipSelf, Self, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
export { CovalentBreadcrumbsModule, TdBreadcrumbsComponent } from '@covalent/core/breadcrumbs';
export { CovalentTabSelectModule, TdTabSelectBase, _TdTabSelectMixinBase, TdTabSelectComponent, TdTabOptionBase, _TdTabOptionMixinBase, TdTabOptionComponent } from '@covalent/core/tab-select';
import { Router } from '@angular/router';
import { Subscription, Subject, fromEvent, merge, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { __extends, __spread, __values } from 'tslib';
import { mixinDisabled, mixinDisableRipple } from '@covalent/core/common';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { PortalModule } from '@angular/cdk/portal';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { HttpInterceptorService } from '@covalent/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdRenameMeComponent = /** @class */ (function () {
    function TdRenameMeComponent() {
        // stub
    }
    TdRenameMeComponent.decorators = [
        { type: Component, args: [{
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var CovalentRenameMeModule = /** @class */ (function () {
    function CovalentRenameMeModule() {
    }
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
                },] }
    ];
    return CovalentRenameMeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @enum {string} */
var StepState = {
    None: 'none',
    Required: 'required',
    Complete: 'complete',
};
var TdNavStepComponent = /** @class */ (function () {
    function TdNavStepComponent(_elementRef, router, _renderer, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this.router = router;
        this._renderer = _renderer;
        this._changeDetectorRef = _changeDetectorRef;
        this._displayStep = true;
        this._displayLine = true;
        this._width = 0;
        this._active = false;
        /**
         * state?: StepState
         * state of step
         * Defaults to none
         */
        this.state = StepState.None;
        this._renderer.addClass(this._elementRef.nativeElement, 'mat-button');
    }
    /**
     * @return {?}
     */
    TdNavStepComponent.prototype.isRequired = /**
     * @return {?}
     */
    function () {
        return true;
    };
    /**
     * @return {?}
     */
    TdNavStepComponent.prototype.isComplete = /**
     * @return {?}
     */
    function () {
        return true;
    };
    Object.defineProperty(TdNavStepComponent.prototype, "displayStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this._displayStep;
        },
        /**
         * Whether to display the step or not
         */
        set: /**
         * Whether to display the step or not
         * @param {?} shouldDisplay
         * @return {?}
         */
        function (shouldDisplay) {
            this._displayStep = shouldDisplay;
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavStepComponent.prototype, "displayLine", {
        get: /**
         * @return {?}
         */
        function () {
            return this._displayLine;
        },
        /**
         * Whether to display the step or not
         */
        set: /**
         * Whether to display the step or not
         * @param {?} shouldDisplay
         * @return {?}
         */
        function (shouldDisplay) {
            this._displayLine = shouldDisplay;
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavStepComponent.prototype, "active", {
        /**
         * Whether step is active
         */
        get: /**
         * Whether step is active
         * @return {?}
         */
        function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavStepComponent.prototype, "width", {
        /**
         * Width of the DOM element of the step
         */
        get: /**
         * Width of the DOM element of the step
         * @return {?}
         */
        function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavStepComponent.prototype, "displayBinding", {
        /**
         * Gets the display style of the crumb
         */
        get: /**
         * Gets the display style of the crumb
         * @return {?}
         */
        function () {
            // Set the display to none on the component, just in case the end user is hiding
            // and showing them instead of the component doing itself for reasons like responsive
            return this._displayStep ? undefined : 'none';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdNavStepComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // set the width from the actual rendered DOM element
        Promise.resolve().then(function () {
            _this._width = ((/** @type {?} */ (_this._elementRef.nativeElement))).getBoundingClientRect().width;
            _this._changeDetectorRef.markForCheck();
        });
    };
    /**
     * @return {?}
     */
    TdNavStepComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // Set this step to active if the step route and active route are the same
        if (this.router.url === this.routerLink) {
            this._active = true;
        }
    };
    TdNavStepComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-nav-step, a[td-nav-step]',
                    template: "<td-nav-step-header class=\"td-step-horizontal-header\"\n                [number]=\"number\"\n                [active]=\"active\"\n                [state]=\"state\"\n                [displayLine]=\"displayLine\">\n  <ng-template td-nav-step-header-label [ngIf]=\"true\"><ng-content></ng-content></ng-template>\n  <ng-template td-nav-step-header-sublabel class=\"td-nav-step-sublabel\" [ngIf]=\"sublabel\">{{sublabel}}</ng-template>\n</td-nav-step-header>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host .td-nav-step{height:48px;box-sizing:border-box;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:end;justify-content:flex-end}:host .td-nav-step ::ng-deep>*{margin:0 10px}"]
                }] }
    ];
    /** @nocollapse */
    TdNavStepComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Router },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    TdNavStepComponent.propDecorators = {
        routerLink: [{ type: Input, args: ['routerLink',] }],
        state: [{ type: Input, args: ['state',] }],
        sublabel: [{ type: Input, args: ['sublabel',] }],
        displayBinding: [{ type: HostBinding, args: ['style.display',] }]
    };
    return TdNavStepComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdHorizontalStepperComponent = /** @class */ (function () {
    function TdHorizontalStepperComponent(_elementRef, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._resizeSubscription = Subscription.EMPTY;
        this._widthSubject = new Subject();
        this._resizing = false;
        this._showLeftArrow = false;
        this._showRightArrow = false;
        this._leftHidden = 0;
        this._rightHidden = 0;
        // the list of hidden steps not shown right now (responsive)
        this.hiddenSteps = new Array();
    }
    /**
     * @return {?}
     */
    TdHorizontalStepperComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._resizeSubscription = merge(fromEvent(window, 'resize').pipe(debounceTime(10)), this._widthSubject.asObservable().pipe(distinctUntilChanged())).subscribe(function () {
            if (!_this._resizing) {
                _this._resizing = true;
                setTimeout(function () {
                    _this.displayWidthAvailableSteps();
                    _this._resizing = false;
                    _this._changeDetectorRef.markForCheck();
                }, 100);
            }
        });
    };
    /**
     * @return {?}
     */
    TdHorizontalStepperComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this._elementRef && this._elementRef.nativeElement) {
            this._widthSubject.next(this.nativeElementWidth);
        }
    };
    /**
     * @return {?}
     */
    TdHorizontalStepperComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.setStepSettings();
        this._changeDetectorRef.markForCheck();
    };
    /**
     * @return {?}
     */
    TdHorizontalStepperComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._resizeSubscription.unsubscribe();
    };
    Object.defineProperty(TdHorizontalStepperComponent.prototype, "nativeElementWidth", {
        /*
        * Current width of the element container
        */
        get: /*
          * Current width of the element container
          */
        /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var element = ((/** @type {?} */ (this._elementRef.nativeElement)));
            // Need to take into account border, margin and padding that might be around all the crumbs
            /** @type {?} */
            var style = window.getComputedStyle(element);
            /** @type {?} */
            var borderLeft = parseInt(style.borderLeft, 10);
            /** @type {?} */
            var borderRight = parseInt(style.borderRight, 10);
            /** @type {?} */
            var marginLeft = parseInt(style.marginLeft, 10);
            /** @type {?} */
            var marginRight = parseInt(style.marginRight, 10);
            /** @type {?} */
            var paddingLeft = parseInt(style.paddingLeft, 10);
            /** @type {?} */
            var paddingRight = parseInt(style.paddingRight, 10);
            return element.getBoundingClientRect().width - borderLeft - borderRight - marginLeft - marginRight - paddingLeft - paddingRight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdHorizontalStepperComponent.prototype, "count", {
        /**
         * The total count of individual steps
         */
        get: /**
         * The total count of individual steps
         * @return {?}
         */
        function () {
            return this._steps ? this._steps.length : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdHorizontalStepperComponent.prototype, "showLeftArrow", {
        /**
         * Should we show the left Arrow
         */
        get: /**
         * Should we show the left Arrow
         * @return {?}
         */
        function () {
            return this._showLeftArrow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdHorizontalStepperComponent.prototype, "showRightArrow", {
        /**
         * Should we show the right Arrow
         */
        get: /**
         * Should we show the right Arrow
         * @return {?}
         */
        function () {
            return this._showRightArrow;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdHorizontalStepperComponent.prototype.showHiddenLeftStep = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var stepsArray = this._steps.toArray();
        // show the left one
        stepsArray[this._leftHidden - 1].displayStep = true;
        this.hiddenSteps.splice(this._leftHidden - 1, 1);
        this._leftHidden--;
        // If no more hidden steps then hide left arrow
        if (this._leftHidden === 0) {
            this._showLeftArrow = false;
        }
        // hide the right one
        stepsArray[stepsArray.length - (this._rightHidden + 1)].displayStep = false;
        stepsArray[stepsArray.length - (this._rightHidden + 2)].displayLine = false;
        this.hiddenSteps.push(stepsArray[stepsArray.length - 1]);
        this._rightHidden++;
        this._showRightArrow = true;
    };
    /**
     * @return {?}
     */
    TdHorizontalStepperComponent.prototype.showHiddenRightStep = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var stepsArray = this._steps.toArray();
        // show the right one
        stepsArray[stepsArray.length - this._rightHidden].displayStep = true;
        stepsArray[stepsArray.length - (this._rightHidden + 1)].displayLine = true;
        this.hiddenSteps.pop();
        this._rightHidden--;
        // If no more hidden steps then hide right arrow
        if (this._rightHidden === 0) {
            this._showRightArrow = false;
        }
        // hide the left one
        stepsArray[this._leftHidden].displayStep = false;
        this.hiddenSteps.push(stepsArray[this._leftHidden]);
        this._leftHidden++;
        this._showLeftArrow = true;
    };
    /**
     * Set the step line separators and display numbers
     */
    /**
     * Set the step line separators and display numbers
     * @return {?}
     */
    TdHorizontalStepperComponent.prototype.setStepSettings = /**
     * Set the step line separators and display numbers
     * @return {?}
     */
    function () {
        /** @type {?} */
        var stepsArray = this._steps.toArray();
        if (stepsArray.length > 0) {
            // don't show the icon on the last breadcrumb
            stepsArray[stepsArray.length - 1].displayLine = false;
        }
        // set the index number of the step so can display that number in circle
        stepsArray.forEach(function (step, index) {
            step.number = index + 1;
        });
    };
    /**
     * @return {?}
     */
    TdHorizontalStepperComponent.prototype.displayWidthAvailableSteps = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var curTotStepWidth = 0;
        /** @type {?} */
        var stepsArray = this._steps.toArray();
        // calculate the current width of the shown steps
        for (var i = this.hiddenSteps.length; i < stepsArray.length; i++) {
            curTotStepWidth += stepsArray[i].width;
        }
        // get the active step index
        /** @type {?} */
        var activeIndex = stepsArray.findIndex(function (step) {
            return step.active === true;
        });
        // hide the first step if window size is smaller than all the step sizes
        if (this.nativeElementWidth < curTotStepWidth) {
            // determine if the active step is in the first or second half of the list
            // and check that all the left ones aren't already hidden (2nd check after && does that)
            // and hide on the opposite side of that
            if ((activeIndex >= stepsArray.length / 2) && (this._leftHidden < activeIndex)) {
                // left
                this._showRightArrow = false;
                this._showLeftArrow = true;
                this._leftHidden++;
                stepsArray[this._leftHidden - 1].displayStep = false;
                this.hiddenSteps.push(stepsArray[this.hiddenSteps.length]);
                // Check to see that all the possible ones on the right aren't already hidden
            }
            else if (this._rightHidden < stepsArray.length - activeIndex) {
                // right
                this._showRightArrow = true;
                this._showLeftArrow = false;
                this._rightHidden++;
                stepsArray[stepsArray.length - this._rightHidden].displayStep = false;
                this.hiddenSteps.push(stepsArray[stepsArray.length - this._rightHidden]);
            }
            this.displayWidthAvailableSteps();
        }
        else {
            // loop over all the hidden steps and see if adding them back in will
            // fit in the current window size
            /** @type {?} */
            var totalHidden = this.hiddenSteps.length - 1;
            for (var i = totalHidden; i >= 0; i--) {
                /** @type {?} */
                var hiddenStepWidth = stepsArray[i].width;
                if ((curTotStepWidth + hiddenStepWidth) < this.nativeElementWidth) {
                    // Determine if the active step is in the first or second half of the list
                    // and if its right and there are hidden left steps
                    // or if it left and there are no right hidden ones and some left hidden (using arrows can cause it to be unbalanced)
                    // then show the hidden ones on the left
                    if ((activeIndex >= stepsArray.length / 2 && this._leftHidden > 0) ||
                        (activeIndex < stepsArray.length / 2 && this._rightHidden === 0 && this._leftHidden > 0)) {
                        // left
                        stepsArray[this._leftHidden - 1].displayStep = true;
                        this.hiddenSteps.shift();
                        this._leftHidden--;
                        // If no more hidden steps then hide left arrow
                        if (this._leftHidden === 0) {
                            this._showLeftArrow = false;
                        }
                        // Check if there are any on the right hidden and show them
                    }
                    else if (this._rightHidden > 0) {
                        // right
                        stepsArray[stepsArray.length - this._rightHidden].displayStep = true;
                        this.hiddenSteps.pop();
                        this._rightHidden--;
                        // If no more hidden steps then hide right arrow
                        if (this._rightHidden === 0) {
                            this._showRightArrow = false;
                        }
                    }
                    // recalculate the total width based on adding back in a step
                    /** @type {?} */
                    var newTotStepWidth = 0;
                    for (var j = this.hiddenSteps.length; j < stepsArray.length; j++) {
                        newTotStepWidth += stepsArray[j].width;
                    }
                    curTotStepWidth = newTotStepWidth;
                }
                else if (i === totalHidden) {
                    // need to break out of loop here because the first in the hidden
                    // list can't fit in current window size
                    break;
                }
            }
        }
    };
    TdHorizontalStepperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-horizontal-nav-stepper',
                    template: "<span class=\"td-steps-header\">\n  <button *ngIf=\"showLeftArrow\" mat-icon-button (click)=\"showHiddenLeftStep()\">\n    <mat-icon>chevron_left</mat-icon>\n  </button>\n  <ng-content></ng-content>\n  <button *ngIf=\"showRightArrow\" mat-icon-button (click)=\"showHiddenRightStep()\">\n    <mat-icon>chevron_right</mat-icon>\n  </button>\n</span>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host .td-steps-header{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}"]
                }] }
    ];
    /** @nocollapse */
    TdHorizontalStepperComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    TdHorizontalStepperComponent.propDecorators = {
        _steps: [{ type: ContentChildren, args: [TdNavStepComponent,] }]
    };
    return TdHorizontalStepperComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdNavStepHeaderBase = /** @class */ (function () {
    function TdNavStepHeaderBase() {
    }
    return TdNavStepHeaderBase;
}());
/* tslint:disable-next-line */
/** @type {?} */
var _TdNavStepHeaderMixinBase = mixinDisableRipple(mixinDisabled(TdNavStepHeaderBase));
var TdNavStepHeaderComponent = /** @class */ (function (_super) {
    __extends(TdNavStepHeaderComponent, _super);
    function TdNavStepHeaderComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * state?: StepState or ['none' | 'required' | 'complete']
         * Sets styles for state of header.
         * Defaults to [StepState.None | 'none'].
         */
        _this.state = StepState.None;
        return _this;
    }
    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     */
    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     * @return {?}
     */
    TdNavStepHeaderComponent.prototype.isComplete = /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     * @return {?}
     */
    function () {
        return this.state === StepState.Complete;
    };
    /**
     * Returns 'true' if [state] equals to [StepState.Required | 'required'], else 'false'.
     */
    /**
     * Returns 'true' if [state] equals to [StepState.Required | 'required'], else 'false'.
     * @return {?}
     */
    TdNavStepHeaderComponent.prototype.isRequired = /**
     * Returns 'true' if [state] equals to [StepState.Required | 'required'], else 'false'.
     * @return {?}
     */
    function () {
        return this.state === StepState.Required;
    };
    TdNavStepHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-nav-step-header',
                    inputs: ['disableRipple'],
                    template: "<div class=\"td-step-header\"\n      matRipple\n      [matRippleDisabled]=\"disableRipple\"\n      [tabIndex]=\"0\">\n  <div class=\"td-circle\"\n      [class.mat-inactive]=\"(!active && !isComplete())\"\n      [class.mat-active]=\"active\"\n      *ngIf=\"!isRequired() && !isComplete()\">\n    <span *ngIf=\"(active || !isComplete())\">{{number || ''}}</span>\n  </div>\n  <div class=\"td-complete\" *ngIf=\"isComplete()\">\n    <mat-icon class=\"mat-complete\">check_circle</mat-icon>\n  </div>\n  <div class=\"td-triangle\"\n      *ngIf=\"isRequired()\">\n    <mat-icon class=\"mat-warn\">warning</mat-icon>\n  </div>\n  <div class=\"td-nav-step-label-wrapper\"\n        [class.mat-inactive]=\"(!active && !isComplete())\"\n        [class.mat-warn]=\"isRequired()\">\n    <div class=\"td-step-label\">\n      <ng-content select=\"[td-nav-step-header-label]\"></ng-content>\n    </div>\n    <div class=\"td-nav-step-sublabel\">\n      <ng-content select=\"[td-nav-step-header-sublabel]\"></ng-content>\n    </div>\n  </div>\n  <span class=\"td-nav-step-header-separator\"></span>\n  <mat-icon class=\"td-edit-icon\" *ngIf=\"isComplete() && !active\">mode_edit</mat-icon>\n  <span *ngIf=\"displayLine\" class=\"td-horizontal-line\"></span>\n</div>\n",
                    styles: [".td-step-header{position:relative;outline:0;height:72px;-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}.td-step-header:hover:not(.mat-disabled){cursor:pointer}.td-step-header mat-icon.td-edit-icon{margin:0 8px}.td-step-header mat-icon.mat-warn{font-size:24px;height:24px;width:24px}.td-step-header mat-icon.mat-complete{position:relative;left:-2px;top:2px;font-size:28px;height:24px;width:24px}.td-step-header .td-circle{height:24px;width:24px;line-height:24px;border-radius:99%;text-align:center;-ms-flex:none;flex:none}.td-step-header .td-circle mat-icon{margin-top:2px;font-weight:700}.td-step-header .td-triangle>mat-icon{font-size:25px}::ng-deep :not([dir=rtl]) .td-step-header .td-circle,::ng-deep :not([dir=rtl]) .td-step-header .td-complete,::ng-deep :not([dir=rtl]) .td-step-header .td-triangle{margin-left:8px;margin-right:0}::ng-deep [dir=rtl] .td-step-header .td-circle,::ng-deep [dir=rtl] .td-step-header .td-complete,::ng-deep [dir=rtl] .td-step-header .td-triangle{margin-left:0;margin-right:8px}.td-step-header .td-circle,.td-step-header .td-complete{font-size:14px}.td-step-header .td-nav-step-label-wrapper{padding-left:8px;padding-right:8px}.td-step-header .td-nav-step-header-separator{-ms-flex:1;flex:1;box-sizing:border-box}.td-horizontal-line{border-bottom-width:1px;border-bottom-style:solid;height:1px;position:relative;min-width:15px;-ms-flex:1;flex:1;box-sizing:border-box;display:block}::ng-deep :not([dir=rtl]) .td-horizontal-line{left:-6px;right:-3px}::ng-deep [dir=rtl] .td-horizontal-line{left:-3px;right:-6px}"]
                }] }
    ];
    TdNavStepHeaderComponent.propDecorators = {
        displayLine: [{ type: Input, args: ['displayLine',] }],
        number: [{ type: Input, args: ['number',] }],
        active: [{ type: Input, args: ['active',] }],
        state: [{ type: Input, args: ['state',] }]
    };
    return TdNavStepHeaderComponent;
}(_TdNavStepHeaderMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var CovalentNavStepperModule = /** @class */ (function () {
    function CovalentNavStepperModule() {
    }
    CovalentNavStepperModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatIconModule,
                        MatRippleModule,
                        PortalModule,
                    ],
                    declarations: [
                        TdHorizontalStepperComponent,
                        TdNavStepComponent,
                        TdNavStepHeaderComponent,
                    ],
                    exports: [
                        TdHorizontalStepperComponent,
                        TdNavStepComponent,
                    ],
                },] }
    ];
    return CovalentNavStepperModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var NOOP_HTTP = of(undefined);
/**
 * DO NOT MODIFY
 * Taken from angular since they dont expose this function
 * This is used internally to inject services from the constructor of the base service using the mixinHttp
 * \@internal
 * @param {?} types
 * @param {?} injector
 * @return {?}
 */
function injectArgs(types, injector) {
    /** @type {?} */
    var args = [];
    for (var i = 0; i < types.length; i++) {
        /** @type {?} */
        var arg = types[i];
        if (Array.isArray(arg)) {
            if (arg.length === 0) {
                throw new Error('Arguments array must have arguments.');
            }
            /** @type {?} */
            var type = undefined;
            /** @type {?} */
            var flags = 0 /* Default */;
            for (var j = 0; j < arg.length; j++) {
                /** @type {?} */
                var meta = arg[j];
                if (meta instanceof Optional || meta.ngMetadataName === 'Optional') {
                    /* tslint:disable */
                    flags |= 8 /* Optional */;
                }
                else if (meta instanceof SkipSelf || meta.ngMetadataName === 'SkipSelf') {
                    flags |= 4 /* SkipSelf */;
                }
                else if (meta instanceof Self || meta.ngMetadataName === 'Self') {
                    flags |= 2 /* Self */;
                }
                else if (meta instanceof Inject) {
                    type = meta.token;
                }
                else {
                    type = meta;
                }
                /* tslint:enable */
            }
            args.push(injector.get((/** @type {?} */ (type)), flags));
        }
        else {
            args.push(injector.get(arg));
        }
    }
    return args;
}
/**
 * Mixin to augment a service with http helpers.
 * \@internal
 * @param {?} base
 * @param {?} config
 * @return {?}
 */
function mixinHttp(base, config) {
    /**
     * Internal class used to get an instance of Injector for internal usage plus also
     * a way to inject services from the constructor of the underlying service
     * \@internal
     * @abstract
     */
    var HttpInternalClass = /** @class */ (function (_super) {
        __extends(HttpInternalClass, _super);
        function HttpInternalClass(_injector) {
            var _this = _super.apply(this, __spread(injectArgs(new ɵReflectionCapabilities().parameters(base), _injector))) || this;
            _this._injector = _injector;
            _this.buildConfig();
            return _this;
        }
        HttpInternalClass.decorators = [
            { type: Injectable },
        ];
        /** @nocollapse */
        HttpInternalClass.ctorParameters = function () { return [
            { type: Injector }
        ]; };
        return HttpInternalClass;
    }(base));
    /**
     * Actuall class being returned with all the hooks for http usage
     * @internal
     */
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(class_1.prototype, "baseUrl", {
            get: /**
             * @return {?}
             */
            function () {
                return (typeof (this.basePath) === 'string' ?
                    this.basePath.replace(/\/$/, '') : '') + this._baseUrl;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Method used to setup the configuration parameters and get an instance of the http service
         */
        /**
         * Method used to setup the configuration parameters and get an instance of the http service
         * @return {?}
         */
        class_1.prototype.buildConfig = /**
         * Method used to setup the configuration parameters and get an instance of the http service
         * @return {?}
         */
        function () {
            this.http = this._injector.get(config.httpServiceType || HttpClient);
            this._baseUrl = config && config.baseUrl ? config.baseUrl.replace(/\/$/, '') : '';
            this._baseHeaders = config && config.baseHeaders ? config.baseHeaders : new HttpHeaders();
            this._defaultObserve = config && config.defaultObserve ? config.defaultObserve : 'body';
            this._defaultResponseType = config && config.defaultResponseType ? config.defaultResponseType : 'json';
        };
        /**
         * Method used to build the default headers using the base headers
         */
        /**
         * Method used to build the default headers using the base headers
         * @return {?}
         */
        class_1.prototype.buildHeaders = /**
         * Method used to build the default headers using the base headers
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var headersObj = {};
            this._baseHeaders.keys().forEach(function (key) {
                headersObj[key] = _this._baseHeaders.get(key);
            });
            return new HttpHeaders(headersObj);
        };
        /* tslint:disable-next-line */
        /* tslint:disable-next-line */
        /**
         * @template HttpResponse
         * @param {?} method
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
        class_1.prototype.buildRequest = /* tslint:disable-next-line */
        /**
         * @template HttpResponse
         * @param {?} method
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
        function (method, url, options) {
            return this._buildRequest(method, url, options);
        };
        /**
         * Method used to build the request depending on the `http` service and TdHttpMethod
         */
        /**
         * Method used to build the request depending on the `http` service and TdHttpMethod
         * @param {?} method
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
        class_1.prototype._buildRequest = /**
         * Method used to build the request depending on the `http` service and TdHttpMethod
         * @param {?} method
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
        function (method, url, options) {
            if (options === void 0) { options = {}; }
            if (!options.responseType) {
                options.responseType = this._defaultResponseType;
            }
            if (!options.observe) {
                options.observe = this._defaultObserve;
            }
            if (!options.headers) {
                options.headers = this.buildHeaders();
            }
            else {
                /** @type {?} */
                var headers_1 = this.buildHeaders();
                if (options.headers instanceof HttpHeaders) {
                    ((/** @type {?} */ (options.headers))).keys().forEach(function (key) {
                        headers_1 = headers_1.set(key, ((/** @type {?} */ (options.headers))).get(key));
                    });
                }
                else {
                    for (var key in options.headers) {
                        headers_1 = headers_1.set(key, (/** @type {?} */ (options.headers[key])));
                    }
                }
                options.headers = headers_1;
            }
            if (this.http instanceof HttpInterceptorService || this.http instanceof Http) {
                /** @type {?} */
                var headers_2 = new Headers();
                ((/** @type {?} */ (options.headers))).keys().forEach(function (key) {
                    headers_2.set(key, ((/** @type {?} */ (options.headers))).get(key));
                });
                /** @type {?} */
                var params_1 = new URLSearchParams();
                if (options.params) {
                    if (options.params instanceof HttpParams) {
                        options.params.keys().forEach(function (key) {
                            params_1.set(key, ((/** @type {?} */ (options.params))).get(key));
                        });
                    }
                    else {
                        for (var key in options.params) {
                            params_1.set(key, (/** @type {?} */ (options.params[key])));
                        }
                    }
                }
                /** @type {?} */
                var observable = ((/** @type {?} */ (this.http))).request(url, {
                    headers: headers_2,
                    method: method,
                    body: options.body ? options.body : undefined,
                    params: params_1,
                });
                if (options.observe === 'body') {
                    if (options.responseType === 'json') {
                        return (/** @type {?} */ (observable.pipe(map(function (response) { return response.json(); }))));
                    }
                    else if (options.responseType === 'text') {
                        return (/** @type {?} */ (observable.pipe(map(function (response) { return response.text(); }))));
                    }
                    else if (options.responseType === 'blob') {
                        return (/** @type {?} */ (observable.pipe(map(function (response) { return response.blob(); }))));
                    }
                    else if (options.responseType === 'arraybuffer') {
                        return (/** @type {?} */ (observable.pipe(map(function (response) { return response.arrayBuffer(); }))));
                    }
                }
                else if (options.observe === 'events') {
                    throw Error('"events" not suppported in @angular/http');
                }
                return observable;
            }
            else {
                return ((/** @type {?} */ (this.http))).request(method, url, options);
            }
        };
        return class_1;
    }(HttpInternalClass));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var tdHttpRESTParam = Symbol('TdHttpRESTParam');
/**
 * Abstract implementation of the http param decorator
 * \@internal
 * @param {?} type
 * @param {?=} param
 * @return {?}
 */
function TdAbstractParam(type, param) {
    return function (target, propertyKey, parameterIndex) {
        /** @type {?} */
        var parameters = Reflect.getOwnMetadata(tdHttpRESTParam, target, propertyKey) || [];
        parameters.push({
            index: parameterIndex,
            param: param,
            type: type,
        });
        Reflect.defineMetadata(tdHttpRESTParam, parameters, target, propertyKey);
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Method used to copy parameters from an array or HttpParams object
 * into a centrilized HttpParams object
 * \@internal
 * @param {?} target
 * @param {?} source
 * @return {?}
 */
function parseParams(target, source) {
    /** @type {?} */
    var queryParams = target;
    if (source instanceof HttpParams) {
        source.keys().forEach(function (key) {
            // skip if value is undefined
            if (((/** @type {?} */ (source))).get(key) !== undefined) {
                queryParams = queryParams.set(key, ((/** @type {?} */ (source))).get(key));
            }
        });
    }
    else {
        for (var key in source) {
            // skip if value is undefined
            if ((/** @type {?} */ (source[key])) !== undefined) {
                queryParams = queryParams.set(key, (/** @type {?} */ (source[key])));
            }
        }
    }
    return queryParams;
}
/**
 * Abstract implementation of the http method decorator
 * \@internal
 * @param {?} config
 * @return {?}
 */
function TdAbstractMethod(config) {
    return function (target, propertyName, descriptor) {
        /** @type {?} */
        var wrappedFunction = descriptor.value;
        // replace method call with our own and proxy it
        descriptor.value = function () {
            var e_1, _a, e_2, _b;
            try {
                /** @type {?} */
                var replacedPath = config.path;
                /** @type {?} */
                var parameters = Reflect.getOwnMetadata(tdHttpRESTParam, target, propertyName);
                /** @type {?} */
                var newArgs = [];
                /** @type {?} */
                var body = void 0;
                /** @type {?} */
                var queryParams = new HttpParams();
                if (parameters) {
                    try {
                        // map parameters and see which type they are to act on them
                        for (var parameters_1 = __values(parameters), parameters_1_1 = parameters_1.next(); !parameters_1_1.done; parameters_1_1 = parameters_1.next()) {
                            var parameter = parameters_1_1.value;
                            if (parameter.type === 'param') {
                                newArgs[parameter.index] = arguments[parameter.index];
                                replacedPath = replacedPath.replace(':' + parameter.param, arguments[parameter.index]);
                            }
                            else if (parameter.type === 'body') {
                                newArgs[parameter.index] = arguments[parameter.index];
                                body = arguments[parameter.index];
                            }
                            else if (parameter.type === 'queryParams') {
                                newArgs[parameter.index] = arguments[parameter.index];
                                /** @type {?} */
                                var qParams = arguments[parameter.index];
                                if (config.options && config.options.params) {
                                    queryParams = parseParams(queryParams, config.options.params);
                                }
                                if (qParams) {
                                    queryParams = parseParams(queryParams, qParams);
                                }
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (parameters_1_1 && !parameters_1_1.done && (_a = parameters_1.return)) _a.call(parameters_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                // tslint:disable-next-line
                /** @type {?} */
                var url = this.baseUrl + replacedPath;
                /** @type {?} */
                var options = Object.assign({}, config.options, {
                    body: body,
                    params: queryParams,
                });
                // tslint:disable-next-line
                /** @type {?} */
                var request = this.buildRequest(config.method, url, options);
                if (parameters) {
                    try {
                        // see which one was the response parameter so we can set the request observable
                        for (var parameters_2 = __values(parameters), parameters_2_1 = parameters_2.next(); !parameters_2_1.done; parameters_2_1 = parameters_2.next()) {
                            var parameter = parameters_2_1.value;
                            if (parameter.type === 'response') {
                                newArgs[parameter.index] = request;
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (parameters_2_1 && !parameters_2_1.done && (_b = parameters_2.return)) _b.call(parameters_2);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                // tslint:disable-next-line
                /** @type {?} */
                var response = wrappedFunction.apply(this, newArgs);
                // if the response is NOOP_HTTP or undefined, then we return the request as it is
                // else we return the response from the inner function
                if (response === NOOP_HTTP || response === undefined) {
                    return request;
                }
                else {
                    return response;
                }
            }
            catch (error) {
                // tslint:disable-next-line
                console.error(error);
            }
        };
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Decorator that adds GET request capabilities to a method
 * @param {?} config
 * @return {?}
 */
function GET(config) {
    return TdAbstractMethod((/** @type {?} */ (Object.assign({
        method: 'GET',
    }, config))));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Decorator that adds POST request capabilities to a method
 * @param {?} config
 * @return {?}
 */
function POST(config) {
    return TdAbstractMethod((/** @type {?} */ (Object.assign({
        method: 'POST',
    }, config))));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Decorator that adds PATCH request capabilities to a method
 * @param {?} config
 * @return {?}
 */
function PATCH(config) {
    return TdAbstractMethod((/** @type {?} */ (Object.assign({
        method: 'PATCH',
    }, config))));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Decorator that adds PUT request capabilities to a method
 * @param {?} config
 * @return {?}
 */
function PUT(config) {
    return TdAbstractMethod((/** @type {?} */ (Object.assign({
        method: 'PUT',
    }, config))));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Decorator that adds DELETE request capabilities to a method
 * @param {?} config
 * @return {?}
 */
function DELETE(config) {
    return TdAbstractMethod((/** @type {?} */ (Object.assign({
        method: 'DELETE',
    }, config))));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Decorator used to give a service http capabilities
 * @param {?} config
 * @return {?}
 */
function TdHttp(config) {
    return function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return class_1;
        }(mixinHttp(constructor, config)));
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Decorator that is used to define which parameter is an http parameter in a method
 * @param {?} param
 * @return {?}
 */
function TdParam(param) {
    return TdAbstractParam('param', param);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Decorator that is used to define which parameter is the http body in a method
 * @return {?}
 */
function TdBody() {
    return TdAbstractParam('body');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Decorator that is used to define which parameter is the http response in a method
 * @return {?}
 */
function TdResponse() {
    return TdAbstractParam('response');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Decorator that is used to define which parameter is the http query parameters in a method
 * @return {?}
 */
function TdQueryParams() {
    return TdAbstractParam('queryParams');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { CovalentRenameMeModule, TdRenameMeComponent, CovalentNavStepperModule, TdHorizontalStepperComponent, GET, POST, PATCH, PUT, DELETE, TdHttp, TdParam, TdBody, TdResponse, TdQueryParams, mixinHttp, NOOP_HTTP, TdNavStepHeaderBase as ɵb, TdNavStepHeaderComponent as ɵd, _TdNavStepHeaderMixinBase as ɵc, TdNavStepComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtZXhwZXJpbWVudGFsLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL3RlbXBsYXRlLXJlbmFtZS1tZS1leHBlcmltZW50LW1vZHVsZS9yZW5hbWUtbWUuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL3RlbXBsYXRlLXJlbmFtZS1tZS1leHBlcmltZW50LW1vZHVsZS9yZW5hbWUtbWUubW9kdWxlLnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL25hdi1zdGVwcGVyL25hdi1zdGVwL25hdi1zdGVwLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9uYXYtc3RlcHBlci9ob3Jpem9udGFsLW5hdi1zdGVwcGVyL2hvcml6b250YWwtbmF2LXN0ZXBwZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL25hdi1zdGVwcGVyL25hdi1zdGVwLWhlYWRlci9uYXYtc3RlcC1oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL25hdi1zdGVwcGVyL25hdi1zdGVwcGVyLm1vZHVsZS50cyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9odHRwL2h0dHAubWl4aW4udHMiLCJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvaHR0cC9hY3Rpb25zL3BhcmFtcy9hYnN0cmFjdC1wYXJhbS5kZWNvcmF0b3IudHMiLCJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvaHR0cC9hY3Rpb25zL21ldGhvZHMvYWJzdHJhY3QtbWV0aG9kLmRlY29yYXRvci50cyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9odHRwL2FjdGlvbnMvbWV0aG9kcy9nZXQuZGVjb3JhdG9yLnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2h0dHAvYWN0aW9ucy9tZXRob2RzL3Bvc3QuZGVjb3JhdG9yLnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2h0dHAvYWN0aW9ucy9tZXRob2RzL3BhdGNoLmRlY29yYXRvci50cyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9odHRwL2FjdGlvbnMvbWV0aG9kcy9wdXQuZGVjb3JhdG9yLnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2h0dHAvYWN0aW9ucy9tZXRob2RzL2RlbGV0ZS5kZWNvcmF0b3IudHMiLCJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvaHR0cC9hY3Rpb25zL2NsYXNzL2h0dHAuZGVjb3JhdG9yLnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2h0dHAvYWN0aW9ucy9wYXJhbXMvcGFyYW0uZGVjb3JhdG9yLnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2h0dHAvYWN0aW9ucy9wYXJhbXMvYm9keS5kZWNvcmF0b3IudHMiLCJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvaHR0cC9hY3Rpb25zL3BhcmFtcy9yZXNwb25zZS5kZWNvcmF0b3IudHMiLCJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvaHR0cC9hY3Rpb25zL3BhcmFtcy9xdWVyeS1wYXJhbXMuZGVjb3JhdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1yZW5hbWVNZScsXG4gIHN0eWxlVXJsczogWycuL3JlbmFtZS1tZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVuYW1lLW1lLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRSZW5hbWVNZUNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gc3R1YlxuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBUZFJlbmFtZU1lQ29tcG9uZW50IH0gZnJvbSAnLi9yZW5hbWUtbWUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGRSZW5hbWVNZUNvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRkUmVuYW1lTWVDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50UmVuYW1lTWVNb2R1bGUge1xuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBBZnRlclZpZXdJbml0LCBPbkluaXQsIFJlbmRlcmVyMixcbiAgICAgICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmV4cG9ydCBlbnVtIFN0ZXBTdGF0ZSB7XG4gIE5vbmUgPSAnbm9uZScsXG4gIFJlcXVpcmVkID0gJ3JlcXVpcmVkJyxcbiAgQ29tcGxldGUgPSAnY29tcGxldGUnLFxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1uYXYtc3RlcCwgYVt0ZC1uYXYtc3RlcF0nLFxuICBzdHlsZVVybHM6IFsnLi9uYXYtc3RlcC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2LXN0ZXAuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGROYXZTdGVwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcblxuICBwcml2YXRlIF9kaXNwbGF5U3RlcDogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgX2Rpc3BsYXlMaW5lOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX2FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vIE51bWJlciB0byBkaXNwbGF5IGluIHN0ZXAgaGVhZGVyXG4gIG51bWJlcjogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiByb3V0ZXJMaW5rPzogc3RyaW5nXG4gICAqIHJvdXRlckxpbmsgdG8gbmF2aWdhdGUgdG9cbiAgICogRGVmYXVsdHMgdG8gZW1wdHlcbiAgICovXG4gIEBJbnB1dCgncm91dGVyTGluaycpIHJvdXRlckxpbms6IHN0cmluZztcblxuICAvKipcbiAgICogc3RhdGU/OiBTdGVwU3RhdGVcbiAgICogc3RhdGUgb2Ygc3RlcFxuICAgKiBEZWZhdWx0cyB0byBub25lXG4gICAqL1xuICBASW5wdXQoJ3N0YXRlJykgc3RhdGU6IFN0ZXBTdGF0ZSA9IFN0ZXBTdGF0ZS5Ob25lO1xuXG4gIC8qKlxuICAgKiBzdWJsYWJlbD86IHN0cmluZ1xuICAgKiBTdWJsYWJlbCB0byBkaXNwbGF5IGluIHN0ZXAgaGVhZGVyXG4gICAqIERlZmF1bHRzIHRvIGVtcHR5XG4gICAqL1xuICBASW5wdXQoJ3N1YmxhYmVsJykgc3VibGFiZWw6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXQtYnV0dG9uJyk7XG4gIH1cblxuICBpc1JlcXVpcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaXNDb21wbGV0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGdldCBkaXNwbGF5U3RlcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheVN0ZXA7XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciB0byBkaXNwbGF5IHRoZSBzdGVwIG9yIG5vdFxuICAgKi9cbiAgc2V0IGRpc3BsYXlTdGVwKHNob3VsZERpc3BsYXk6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNwbGF5U3RlcCA9IHNob3VsZERpc3BsYXk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBnZXQgZGlzcGxheUxpbmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlMaW5lO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZGlzcGxheSB0aGUgc3RlcCBvciBub3RcbiAgICovXG4gIHNldCBkaXNwbGF5TGluZShzaG91bGREaXNwbGF5OiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzcGxheUxpbmUgPSBzaG91bGREaXNwbGF5O1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgc3RlcCBpcyBhY3RpdmVcbiAgICovXG4gIGdldCBhY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaWR0aCBvZiB0aGUgRE9NIGVsZW1lbnQgb2YgdGhlIHN0ZXBcbiAgICovXG4gIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBkaXNwbGF5IHN0eWxlIG9mIHRoZSBjcnVtYlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JylcbiAgZ2V0IGRpc3BsYXlCaW5kaW5nKCk6IHN0cmluZyB7XG4gICAgLy8gU2V0IHRoZSBkaXNwbGF5IHRvIG5vbmUgb24gdGhlIGNvbXBvbmVudCwganVzdCBpbiBjYXNlIHRoZSBlbmQgdXNlciBpcyBoaWRpbmdcbiAgICAvLyBhbmQgc2hvd2luZyB0aGVtIGluc3RlYWQgb2YgdGhlIGNvbXBvbmVudCBkb2luZyBpdHNlbGYgZm9yIHJlYXNvbnMgbGlrZSByZXNwb25zaXZlXG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlTdGVwID8gdW5kZWZpbmVkIDogJ25vbmUnO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIC8vIHNldCB0aGUgd2lkdGggZnJvbSB0aGUgYWN0dWFsIHJlbmRlcmVkIERPTSBlbGVtZW50XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl93aWR0aCA9ICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gU2V0IHRoaXMgc3RlcCB0byBhY3RpdmUgaWYgdGhlIHN0ZXAgcm91dGUgYW5kIGFjdGl2ZSByb3V0ZSBhcmUgdGhlIHNhbWVcbiAgICBpZiAodGhpcy5yb3V0ZXIudXJsID09PSB0aGlzLnJvdXRlckxpbmspIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIE9uSW5pdCwgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgXG4gICAgICAgICBBZnRlckNvbnRlbnRJbml0LCBEb0NoZWNrLCBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBTdWJqZWN0LCBmcm9tRXZlbnQsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBUZE5hdlN0ZXBDb21wb25lbnQgfSBmcm9tICcuLi9uYXYtc3RlcC9uYXYtc3RlcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1ob3Jpem9udGFsLW5hdi1zdGVwcGVyJyxcbiAgc3R5bGVVcmxzOiBbJy4vaG9yaXpvbnRhbC1uYXYtc3RlcHBlci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9yaXpvbnRhbC1uYXYtc3RlcHBlci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZEhvcml6b250YWxTdGVwcGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBEb0NoZWNrLCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX3Jlc2l6ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIF93aWR0aFN1YmplY3Q6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcbiAgcHJpdmF0ZSBfcmVzaXppbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2hvd0xlZnRBcnJvdzogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9zaG93UmlnaHRBcnJvdzogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9sZWZ0SGlkZGVuOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9yaWdodEhpZGRlbjogbnVtYmVyID0gMDtcblxuICAvLyBhbGwgdGhlIHN1YiBjb21wb25lbnRzLCB3aGljaCBhcmUgdGhlIGluZGl2aWR1YWwgc3RlcHNcbiAgQENvbnRlbnRDaGlsZHJlbihUZE5hdlN0ZXBDb21wb25lbnQpIF9zdGVwczogUXVlcnlMaXN0PFRkTmF2U3RlcENvbXBvbmVudD47XG4gIC8vIHRoZSBsaXN0IG9mIGhpZGRlbiBzdGVwcyBub3Qgc2hvd24gcmlnaHQgbm93IChyZXNwb25zaXZlKVxuICBoaWRkZW5TdGVwczogVGROYXZTdGVwQ29tcG9uZW50W10gPSBuZXcgQXJyYXkoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3Jlc2l6ZVN1YnNjcmlwdGlvbiA9IG1lcmdlKFxuICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMCksXG4gICAgICApLFxuICAgICAgdGhpcy5fd2lkdGhTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICApLFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5fcmVzaXppbmcpIHtcbiAgICAgICAgdGhpcy5fcmVzaXppbmcgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXlXaWR0aEF2YWlsYWJsZVN0ZXBzKCk7XG4gICAgICAgICAgdGhpcy5fcmVzaXppbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudFJlZiAmJiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX3dpZHRoU3ViamVjdC5uZXh0KHRoaXMubmF0aXZlRWxlbWVudFdpZHRoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRTdGVwU2V0dGluZ3MoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3Jlc2l6ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLypcbiAgKiBDdXJyZW50IHdpZHRoIG9mIHRoZSBlbGVtZW50IGNvbnRhaW5lclxuICAqL1xuICBnZXQgbmF0aXZlRWxlbWVudFdpZHRoKCk6IG51bWJlciB7XG4gICAgbGV0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuXG4gICAgLy8gTmVlZCB0byB0YWtlIGludG8gYWNjb3VudCBib3JkZXIsIG1hcmdpbiBhbmQgcGFkZGluZyB0aGF0IG1pZ2h0IGJlIGFyb3VuZCBhbGwgdGhlIGNydW1ic1xuICAgIGxldCBzdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgIGxldCBib3JkZXJMZWZ0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5ib3JkZXJMZWZ0LCAxMCk7XG4gICAgbGV0IGJvcmRlclJpZ2h0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5ib3JkZXJSaWdodCwgMTApO1xuICAgIGxldCBtYXJnaW5MZWZ0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5tYXJnaW5MZWZ0LCAxMCk7XG4gICAgbGV0IG1hcmdpblJpZ2h0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5tYXJnaW5SaWdodCwgMTApO1xuICAgIGxldCBwYWRkaW5nTGVmdDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUucGFkZGluZ0xlZnQsIDEwKTtcbiAgICBsZXQgcGFkZGluZ1JpZ2h0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5wYWRkaW5nUmlnaHQsIDEwKTtcblxuICAgIHJldHVybiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC0gYm9yZGVyTGVmdCAtIGJvcmRlclJpZ2h0IC0gbWFyZ2luTGVmdCAtIG1hcmdpblJpZ2h0IC0gcGFkZGluZ0xlZnQgLSBwYWRkaW5nUmlnaHQ7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRvdGFsIGNvdW50IG9mIGluZGl2aWR1YWwgc3RlcHNcbiAgICovXG4gIGdldCBjb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zdGVwcyA/IHRoaXMuX3N0ZXBzLmxlbmd0aCA6IDA7XG4gIH1cblxuICAvKipcbiAgICogU2hvdWxkIHdlIHNob3cgdGhlIGxlZnQgQXJyb3dcbiAgICovXG4gIGdldCBzaG93TGVmdEFycm93KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93TGVmdEFycm93O1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3VsZCB3ZSBzaG93IHRoZSByaWdodCBBcnJvd1xuICAgKi9cbiAgZ2V0IHNob3dSaWdodEFycm93KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93UmlnaHRBcnJvdztcbiAgfVxuXG4gIHB1YmxpYyBzaG93SGlkZGVuTGVmdFN0ZXAoKTogdm9pZCB7XG4gICAgbGV0IHN0ZXBzQXJyYXk6IFRkTmF2U3RlcENvbXBvbmVudFtdID0gdGhpcy5fc3RlcHMudG9BcnJheSgpO1xuICAgIC8vIHNob3cgdGhlIGxlZnQgb25lXG4gICAgc3RlcHNBcnJheVt0aGlzLl9sZWZ0SGlkZGVuIC0gMV0uZGlzcGxheVN0ZXAgPSB0cnVlO1xuICAgIHRoaXMuaGlkZGVuU3RlcHMuc3BsaWNlKHRoaXMuX2xlZnRIaWRkZW4gLSAxLCAxKTtcbiAgICB0aGlzLl9sZWZ0SGlkZGVuLS07XG4gICAgLy8gSWYgbm8gbW9yZSBoaWRkZW4gc3RlcHMgdGhlbiBoaWRlIGxlZnQgYXJyb3dcbiAgICBpZiAodGhpcy5fbGVmdEhpZGRlbiA9PT0gMCkge1xuICAgICAgdGhpcy5fc2hvd0xlZnRBcnJvdyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGhpZGUgdGhlIHJpZ2h0IG9uZVxuICAgIHN0ZXBzQXJyYXlbc3RlcHNBcnJheS5sZW5ndGggLSAodGhpcy5fcmlnaHRIaWRkZW4gKyAxKV0uZGlzcGxheVN0ZXAgPSBmYWxzZTtcbiAgICBzdGVwc0FycmF5W3N0ZXBzQXJyYXkubGVuZ3RoIC0gKHRoaXMuX3JpZ2h0SGlkZGVuICsgMildLmRpc3BsYXlMaW5lID0gZmFsc2U7XG4gICAgdGhpcy5oaWRkZW5TdGVwcy5wdXNoKHN0ZXBzQXJyYXlbc3RlcHNBcnJheS5sZW5ndGggLSAxXSk7XG4gICAgdGhpcy5fcmlnaHRIaWRkZW4rKztcblxuICAgIHRoaXMuX3Nob3dSaWdodEFycm93ID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBzaG93SGlkZGVuUmlnaHRTdGVwKCk6IHZvaWQge1xuICAgIGxldCBzdGVwc0FycmF5OiBUZE5hdlN0ZXBDb21wb25lbnRbXSA9IHRoaXMuX3N0ZXBzLnRvQXJyYXkoKTtcbiAgICAvLyBzaG93IHRoZSByaWdodCBvbmVcbiAgICBzdGVwc0FycmF5W3N0ZXBzQXJyYXkubGVuZ3RoIC0gdGhpcy5fcmlnaHRIaWRkZW5dLmRpc3BsYXlTdGVwID0gdHJ1ZTtcbiAgICBzdGVwc0FycmF5W3N0ZXBzQXJyYXkubGVuZ3RoIC0gKHRoaXMuX3JpZ2h0SGlkZGVuICsgMSldLmRpc3BsYXlMaW5lID0gdHJ1ZTtcbiAgICB0aGlzLmhpZGRlblN0ZXBzLnBvcCgpO1xuICAgIHRoaXMuX3JpZ2h0SGlkZGVuLS07XG4gICAgLy8gSWYgbm8gbW9yZSBoaWRkZW4gc3RlcHMgdGhlbiBoaWRlIHJpZ2h0IGFycm93XG4gICAgaWYgKHRoaXMuX3JpZ2h0SGlkZGVuID09PSAwKSB7XG4gICAgICB0aGlzLl9zaG93UmlnaHRBcnJvdyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGhpZGUgdGhlIGxlZnQgb25lXG4gICAgc3RlcHNBcnJheVt0aGlzLl9sZWZ0SGlkZGVuXS5kaXNwbGF5U3RlcCA9IGZhbHNlO1xuICAgIHRoaXMuaGlkZGVuU3RlcHMucHVzaChzdGVwc0FycmF5W3RoaXMuX2xlZnRIaWRkZW5dKTtcbiAgICB0aGlzLl9sZWZ0SGlkZGVuKys7XG5cbiAgICB0aGlzLl9zaG93TGVmdEFycm93ID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHN0ZXAgbGluZSBzZXBhcmF0b3JzIGFuZCBkaXNwbGF5IG51bWJlcnNcbiAgICovXG4gIHByaXZhdGUgc2V0U3RlcFNldHRpbmdzKCk6IHZvaWQge1xuICAgIGxldCBzdGVwc0FycmF5OiBUZE5hdlN0ZXBDb21wb25lbnRbXSA9IHRoaXMuX3N0ZXBzLnRvQXJyYXkoKTtcbiAgICBpZiAoc3RlcHNBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBkb24ndCBzaG93IHRoZSBpY29uIG9uIHRoZSBsYXN0IGJyZWFkY3J1bWJcbiAgICAgIHN0ZXBzQXJyYXlbc3RlcHNBcnJheS5sZW5ndGggLSAxXS5kaXNwbGF5TGluZSA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBzZXQgdGhlIGluZGV4IG51bWJlciBvZiB0aGUgc3RlcCBzbyBjYW4gZGlzcGxheSB0aGF0IG51bWJlciBpbiBjaXJjbGVcbiAgICBzdGVwc0FycmF5LmZvckVhY2goKHN0ZXA6IFRkTmF2U3RlcENvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgc3RlcC5udW1iZXIgPSBpbmRleCArIDE7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGRpc3BsYXlXaWR0aEF2YWlsYWJsZVN0ZXBzKCk6IHZvaWQge1xuICAgIGxldCBjdXJUb3RTdGVwV2lkdGg6IG51bWJlciA9IDA7XG4gICAgbGV0IHN0ZXBzQXJyYXk6IFRkTmF2U3RlcENvbXBvbmVudFtdID0gdGhpcy5fc3RlcHMudG9BcnJheSgpO1xuICAgIC8vIGNhbGN1bGF0ZSB0aGUgY3VycmVudCB3aWR0aCBvZiB0aGUgc2hvd24gc3RlcHNcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSB0aGlzLmhpZGRlblN0ZXBzLmxlbmd0aDsgaSA8IHN0ZXBzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGN1clRvdFN0ZXBXaWR0aCArPSBzdGVwc0FycmF5W2ldLndpZHRoO1xuICAgIH1cbiAgICAvLyBnZXQgdGhlIGFjdGl2ZSBzdGVwIGluZGV4XG4gICAgbGV0IGFjdGl2ZUluZGV4OiBudW1iZXIgPSBzdGVwc0FycmF5LmZpbmRJbmRleCgoc3RlcDogVGROYXZTdGVwQ29tcG9uZW50KSA9PiB7XG4gICAgICByZXR1cm4gc3RlcC5hY3RpdmUgPT09IHRydWU7XG4gICAgfSk7XG4gICAgLy8gaGlkZSB0aGUgZmlyc3Qgc3RlcCBpZiB3aW5kb3cgc2l6ZSBpcyBzbWFsbGVyIHRoYW4gYWxsIHRoZSBzdGVwIHNpemVzXG4gICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudFdpZHRoIDwgY3VyVG90U3RlcFdpZHRoKSB7XG4gICAgICAvLyBkZXRlcm1pbmUgaWYgdGhlIGFjdGl2ZSBzdGVwIGlzIGluIHRoZSBmaXJzdCBvciBzZWNvbmQgaGFsZiBvZiB0aGUgbGlzdFxuICAgICAgLy8gYW5kIGNoZWNrIHRoYXQgYWxsIHRoZSBsZWZ0IG9uZXMgYXJlbid0IGFscmVhZHkgaGlkZGVuICgybmQgY2hlY2sgYWZ0ZXIgJiYgZG9lcyB0aGF0KVxuICAgICAgLy8gYW5kIGhpZGUgb24gdGhlIG9wcG9zaXRlIHNpZGUgb2YgdGhhdFxuICAgICAgaWYgKChhY3RpdmVJbmRleCA+PSBzdGVwc0FycmF5Lmxlbmd0aCAvIDIpICYmICh0aGlzLl9sZWZ0SGlkZGVuIDwgYWN0aXZlSW5kZXgpKSB7XG4gICAgICAgIC8vIGxlZnRcbiAgICAgICAgdGhpcy5fc2hvd1JpZ2h0QXJyb3cgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc2hvd0xlZnRBcnJvdyA9IHRydWU7XG4gICAgICAgIHRoaXMuX2xlZnRIaWRkZW4rKztcbiAgICAgICAgc3RlcHNBcnJheVt0aGlzLl9sZWZ0SGlkZGVuIC0gMV0uZGlzcGxheVN0ZXAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oaWRkZW5TdGVwcy5wdXNoKHN0ZXBzQXJyYXlbdGhpcy5oaWRkZW5TdGVwcy5sZW5ndGhdKTtcbiAgICAgIC8vIENoZWNrIHRvIHNlZSB0aGF0IGFsbCB0aGUgcG9zc2libGUgb25lcyBvbiB0aGUgcmlnaHQgYXJlbid0IGFscmVhZHkgaGlkZGVuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3JpZ2h0SGlkZGVuIDwgc3RlcHNBcnJheS5sZW5ndGggLSBhY3RpdmVJbmRleCkge1xuICAgICAgICAvLyByaWdodFxuICAgICAgICB0aGlzLl9zaG93UmlnaHRBcnJvdyA9IHRydWU7XG4gICAgICAgIHRoaXMuX3Nob3dMZWZ0QXJyb3cgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcmlnaHRIaWRkZW4rKztcbiAgICAgICAgc3RlcHNBcnJheVtzdGVwc0FycmF5Lmxlbmd0aCAtIHRoaXMuX3JpZ2h0SGlkZGVuXS5kaXNwbGF5U3RlcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhpZGRlblN0ZXBzLnB1c2goc3RlcHNBcnJheVtzdGVwc0FycmF5Lmxlbmd0aCAtIHRoaXMuX3JpZ2h0SGlkZGVuXSk7XG4gICAgICB9XG4gICAgICB0aGlzLmRpc3BsYXlXaWR0aEF2YWlsYWJsZVN0ZXBzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGxvb3Agb3ZlciBhbGwgdGhlIGhpZGRlbiBzdGVwcyBhbmQgc2VlIGlmIGFkZGluZyB0aGVtIGJhY2sgaW4gd2lsbFxuICAgICAgLy8gZml0IGluIHRoZSBjdXJyZW50IHdpbmRvdyBzaXplXG4gICAgICBsZXQgdG90YWxIaWRkZW46IG51bWJlciA9IHRoaXMuaGlkZGVuU3RlcHMubGVuZ3RoIC0gMTtcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IHRvdGFsSGlkZGVuOyBpID49IDA7IGktLSkge1xuICAgICAgICBsZXQgaGlkZGVuU3RlcFdpZHRoOiBudW1iZXIgPSBzdGVwc0FycmF5W2ldLndpZHRoO1xuICAgICAgICBpZiAoKGN1clRvdFN0ZXBXaWR0aCArIGhpZGRlblN0ZXBXaWR0aCkgPCB0aGlzLm5hdGl2ZUVsZW1lbnRXaWR0aCkge1xuICAgICAgICAgIC8vIERldGVybWluZSBpZiB0aGUgYWN0aXZlIHN0ZXAgaXMgaW4gdGhlIGZpcnN0IG9yIHNlY29uZCBoYWxmIG9mIHRoZSBsaXN0XG4gICAgICAgICAgLy8gYW5kIGlmIGl0cyByaWdodCBhbmQgdGhlcmUgYXJlIGhpZGRlbiBsZWZ0IHN0ZXBzXG4gICAgICAgICAgLy8gb3IgaWYgaXQgbGVmdCBhbmQgdGhlcmUgYXJlIG5vIHJpZ2h0IGhpZGRlbiBvbmVzIGFuZCBzb21lIGxlZnQgaGlkZGVuICh1c2luZyBhcnJvd3MgY2FuIGNhdXNlIGl0IHRvIGJlIHVuYmFsYW5jZWQpXG4gICAgICAgICAgLy8gdGhlbiBzaG93IHRoZSBoaWRkZW4gb25lcyBvbiB0aGUgbGVmdFxuICAgICAgICAgIGlmICgoYWN0aXZlSW5kZXggPj0gc3RlcHNBcnJheS5sZW5ndGggLyAyICYmIHRoaXMuX2xlZnRIaWRkZW4gPiAwKSB8fCBcbiAgICAgICAgICAgICAgKGFjdGl2ZUluZGV4IDwgc3RlcHNBcnJheS5sZW5ndGggLyAyICYmIHRoaXMuX3JpZ2h0SGlkZGVuID09PSAwICYmIHRoaXMuX2xlZnRIaWRkZW4gPiAwKSkge1xuICAgICAgICAgICAgLy8gbGVmdFxuICAgICAgICAgICAgc3RlcHNBcnJheVt0aGlzLl9sZWZ0SGlkZGVuIC0gMV0uZGlzcGxheVN0ZXAgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5oaWRkZW5TdGVwcy5zaGlmdCgpO1xuICAgICAgICAgICAgdGhpcy5fbGVmdEhpZGRlbi0tO1xuICAgICAgICAgICAgLy8gSWYgbm8gbW9yZSBoaWRkZW4gc3RlcHMgdGhlbiBoaWRlIGxlZnQgYXJyb3dcbiAgICAgICAgICAgIGlmICh0aGlzLl9sZWZ0SGlkZGVuID09PSAwKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Nob3dMZWZ0QXJyb3cgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBhcmUgYW55IG9uIHRoZSByaWdodCBoaWRkZW4gYW5kIHNob3cgdGhlbVxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fcmlnaHRIaWRkZW4gPiAwKSB7XG4gICAgICAgICAgICAvLyByaWdodFxuICAgICAgICAgICAgc3RlcHNBcnJheVtzdGVwc0FycmF5Lmxlbmd0aCAtIHRoaXMuX3JpZ2h0SGlkZGVuXS5kaXNwbGF5U3RlcCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmhpZGRlblN0ZXBzLnBvcCgpO1xuICAgICAgICAgICAgdGhpcy5fcmlnaHRIaWRkZW4tLTtcbiAgICAgICAgICAgIC8vIElmIG5vIG1vcmUgaGlkZGVuIHN0ZXBzIHRoZW4gaGlkZSByaWdodCBhcnJvd1xuICAgICAgICAgICAgaWYgKHRoaXMuX3JpZ2h0SGlkZGVuID09PSAwKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Nob3dSaWdodEFycm93ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHJlY2FsY3VsYXRlIHRoZSB0b3RhbCB3aWR0aCBiYXNlZCBvbiBhZGRpbmcgYmFjayBpbiBhIHN0ZXBcbiAgICAgICAgICBsZXQgbmV3VG90U3RlcFdpZHRoOiBudW1iZXIgPSAwO1xuICAgICAgICAgIGZvciAobGV0IGo6IG51bWJlciA9IHRoaXMuaGlkZGVuU3RlcHMubGVuZ3RoOyBqIDwgc3RlcHNBcnJheS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbmV3VG90U3RlcFdpZHRoICs9IHN0ZXBzQXJyYXlbal0ud2lkdGg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGN1clRvdFN0ZXBXaWR0aCA9IG5ld1RvdFN0ZXBXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSB0b3RhbEhpZGRlbikge1xuICAgICAgICAgIC8vIG5lZWQgdG8gYnJlYWsgb3V0IG9mIGxvb3AgaGVyZSBiZWNhdXNlIHRoZSBmaXJzdCBpbiB0aGUgaGlkZGVuXG4gICAgICAgICAgLy8gbGlzdCBjYW4ndCBmaXQgaW4gY3VycmVudCB3aW5kb3cgc2l6ZVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSUNhbkRpc2FibGUsIG1peGluRGlzYWJsZWQsIElDYW5EaXNhYmxlUmlwcGxlLCBtaXhpbkRpc2FibGVSaXBwbGUgfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5pbXBvcnQgeyBTdGVwU3RhdGUgfSBmcm9tICcuLi9uYXYtc3RlcC9uYXYtc3RlcC5jb21wb25lbnQnO1xuXG5leHBvcnQgY2xhc3MgVGROYXZTdGVwSGVhZGVyQmFzZSB7fVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGROYXZTdGVwSGVhZGVyTWl4aW5CYXNlID0gbWl4aW5EaXNhYmxlUmlwcGxlKG1peGluRGlzYWJsZWQoVGROYXZTdGVwSGVhZGVyQmFzZSkpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1uYXYtc3RlcC1oZWFkZXInLFxuICBpbnB1dHM6IFsnZGlzYWJsZVJpcHBsZSddLFxuICBzdHlsZVVybHM6IFsnLi9uYXYtc3RlcC1oZWFkZXIuY29tcG9uZW50LnNjc3MnIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYtc3RlcC1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZE5hdlN0ZXBIZWFkZXJDb21wb25lbnQgZXh0ZW5kcyBfVGROYXZTdGVwSGVhZGVyTWl4aW5CYXNlIGltcGxlbWVudHMgSUNhbkRpc2FibGUsIElDYW5EaXNhYmxlUmlwcGxlIHtcblxuICAvKipcbiAgICogU2hvdWxkIGRpc3BsYXkgdGhlIGxpbmUgYWZ0ZXIgdGhlIHN0ZXBcbiAgICovXG4gIEBJbnB1dCgnZGlzcGxheUxpbmUnKSBkaXNwbGF5TGluZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogTnVtYmVyIGFzc2lnbmVkIHRvIFtUZE5hdlN0ZXBIZWFkZXJDb21wb25lbnRdLlxuICAgKi9cbiAgQElucHV0KCdudW1iZXInKSBudW1iZXI6IG51bWJlcjtcblxuICAvKipcbiAgICogYWN0aXZlPzogYm9vbGVhblxuICAgKiBTZXRzIGZvciBhY3RpdmUvaW5hY3RpdmUgc3RhdGVzIG9uIGhlYWRlci5cbiAgICovXG4gIEBJbnB1dCgnYWN0aXZlJykgYWN0aXZlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBzdGF0ZT86IFN0ZXBTdGF0ZSBvciBbJ25vbmUnIHwgJ3JlcXVpcmVkJyB8ICdjb21wbGV0ZSddXG4gICAqIFNldHMgc3R5bGVzIGZvciBzdGF0ZSBvZiBoZWFkZXIuXG4gICAqIERlZmF1bHRzIHRvIFtTdGVwU3RhdGUuTm9uZSB8ICdub25lJ10uXG4gICAqL1xuICBASW5wdXQoJ3N0YXRlJykgc3RhdGU6IFN0ZXBTdGF0ZSA9IFN0ZXBTdGF0ZS5Ob25lO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zICd0cnVlJyBpZiBbc3RhdGVdIGVxdWFscyB0byBbU3RlcFN0YXRlLkNvbXBsZXRlIHwgJ2NvbXBsZXRlJ10sIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIGlzQ29tcGxldGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IFN0ZXBTdGF0ZS5Db21wbGV0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zICd0cnVlJyBpZiBbc3RhdGVdIGVxdWFscyB0byBbU3RlcFN0YXRlLlJlcXVpcmVkIHwgJ3JlcXVpcmVkJ10sIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIGlzUmVxdWlyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IFN0ZXBTdGF0ZS5SZXF1aXJlZDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRSaXBwbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuaW1wb3J0IHsgUG9ydGFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5cbmltcG9ydCB7IFRkSG9yaXpvbnRhbFN0ZXBwZXJDb21wb25lbnQgfSBmcm9tICcuL2hvcml6b250YWwtbmF2LXN0ZXBwZXIvaG9yaXpvbnRhbC1uYXYtc3RlcHBlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGROYXZTdGVwQ29tcG9uZW50IH0gZnJvbSAnLi9uYXYtc3RlcC9uYXYtc3RlcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGROYXZTdGVwSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uYXYtc3RlcC1oZWFkZXIvbmF2LXN0ZXAtaGVhZGVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRSaXBwbGVNb2R1bGUsXG4gICAgUG9ydGFsTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUZEhvcml6b250YWxTdGVwcGVyQ29tcG9uZW50LFxuICAgIFRkTmF2U3RlcENvbXBvbmVudCxcbiAgICBUZE5hdlN0ZXBIZWFkZXJDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUZEhvcml6b250YWxTdGVwcGVyQ29tcG9uZW50LFxuICAgIFRkTmF2U3RlcENvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnROYXZTdGVwcGVyTW9kdWxlIHtcblxufVxuIiwiaW1wb3J0IHsgVHlwZSwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIMOJwrVSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzLCBJbmplY3RGbGFncywgT3B0aW9uYWwsXG4gIFNraXBTZWxmLCBTZWxmLCBJbmplY3QsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzLCBVUkxTZWFyY2hQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEh0dHBJbnRlcmNlcHRvclNlcnZpY2UgfSBmcm9tICdAY292YWxlbnQvaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCB0eXBlIFRkSHR0cE1ldGhvZCA9ICdHRVQnIHwgJ1BPU1QnIHwgJ1BBVENIJyB8ICdERUxFVEUnIHwgJ0hFQUQnIHwgJ1BVVCcgfCAnT1BUSU9OUyc7XG5cbmV4cG9ydCB0eXBlIFRkSHR0cFJFU1RSZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuXG5leHBvcnQgdHlwZSBUZEh0dHBSRVNUT2JzZXJ2ZSA9ICdib2R5JyB8ICdyZXNwb25zZScgfCAnZXZlbnRzJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRIdHRwUkVTVENvbmZpZyB7XG4gIGJhc2VIZWFkZXJzPzogSHR0cEhlYWRlcnM7XG4gIGJhc2VVcmw6IHN0cmluZztcbiAgZGVmYXVsdE9ic2VydmU/OiBUZEh0dHBSRVNUT2JzZXJ2ZTtcbiAgZGVmYXVsdFJlc3BvbnNlVHlwZT86IFRkSHR0cFJFU1RSZXNwb25zZVR5cGU7XG4gIGh0dHBTZXJ2aWNlVHlwZT86IFR5cGU8SHR0cCB8IEh0dHBDbGllbnQgfCBIdHRwSW50ZXJjZXB0b3JTZXJ2aWNlPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRIdHRwUkVTVE9wdGlvbnMge1xuICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XG4gICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gIH07XG4gIG9ic2VydmU/OiBUZEh0dHBSRVNUT2JzZXJ2ZTtcbiAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcbiAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICB9O1xuICByZXNwb25zZVR5cGU/OiBUZEh0dHBSRVNUUmVzcG9uc2VUeXBlO1xuICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkSHR0cFJFU1RPcHRpb25zV2l0aEJvZHkgZXh0ZW5kcyBJVGRIdHRwUkVTVE9wdGlvbnMge1xuICBib2R5PzogYW55O1xufVxuXG5leHBvcnQgY29uc3QgTk9PUF9IVFRQOiBPYnNlcnZhYmxlPGFueT4gPSBvZih1bmRlZmluZWQpO1xuXG50eXBlIENvbnN0cnVjdG9yPFQ+ID0gbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gVDtcblxuLyoqXG4gKiBETyBOT1QgTU9ESUZZXG4gKiBUYWtlbiBmcm9tIGFuZ3VsYXIgc2luY2UgdGhleSBkb250IGV4cG9zZSB0aGlzIGZ1bmN0aW9uXG4gKiBUaGlzIGlzIHVzZWQgaW50ZXJuYWxseSB0byBpbmplY3Qgc2VydmljZXMgZnJvbSB0aGUgY29uc3RydWN0b3Igb2YgdGhlIGJhc2Ugc2VydmljZSB1c2luZyB0aGUgbWl4aW5IdHRwXG4gKiBAaW50ZXJuYWxcbiAqL1xuZnVuY3Rpb24gaW5qZWN0QXJncyh0eXBlczogKFR5cGU8YW55PnwgSW5qZWN0aW9uVG9rZW48YW55PnwgYW55W10pW10sIGluamVjdG9yOiBJbmplY3Rvcik6IGFueVtdIHtcbiAgY29uc3QgYXJnczogYW55W10gPSBbXTtcbiAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHR5cGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYXJnOiBhbnkgPSB0eXBlc1tpXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG4gICAgICBpZiAoYXJnLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FyZ3VtZW50cyBhcnJheSBtdXN0IGhhdmUgYXJndW1lbnRzLicpO1xuICAgICAgfVxuICAgICAgbGV0IHR5cGU6IFR5cGU8YW55Pnx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgICBsZXQgZmxhZ3M6IEluamVjdEZsYWdzID0gSW5qZWN0RmxhZ3MuRGVmYXVsdDtcblxuICAgICAgZm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IGFyZy5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBtZXRhOiBhbnkgPSBhcmdbal07XG4gICAgICAgIGlmIChtZXRhIGluc3RhbmNlb2YgT3B0aW9uYWwgfHwgbWV0YS5uZ01ldGFkYXRhTmFtZSA9PT0gJ09wdGlvbmFsJykge1xuICAgICAgICAgIC8qIHRzbGludDpkaXNhYmxlICovXG4gICAgICAgICAgZmxhZ3MgfD0gSW5qZWN0RmxhZ3MuT3B0aW9uYWw7XG4gICAgICAgIH0gZWxzZSBpZiAobWV0YSBpbnN0YW5jZW9mIFNraXBTZWxmIHx8IG1ldGEubmdNZXRhZGF0YU5hbWUgPT09ICdTa2lwU2VsZicpIHtcbiAgICAgICAgICBmbGFncyB8PSBJbmplY3RGbGFncy5Ta2lwU2VsZjtcbiAgICAgICAgfSBlbHNlIGlmIChtZXRhIGluc3RhbmNlb2YgU2VsZiB8fCBtZXRhLm5nTWV0YWRhdGFOYW1lID09PSAnU2VsZicpIHtcbiAgICAgICAgICBmbGFncyB8PSBJbmplY3RGbGFncy5TZWxmO1xuICAgICAgICB9IGVsc2UgaWYgKG1ldGEgaW5zdGFuY2VvZiBJbmplY3QpIHtcbiAgICAgICAgICB0eXBlID0gbWV0YS50b2tlbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0eXBlID0gbWV0YTtcbiAgICAgICAgfVxuICAgICAgICAvKiB0c2xpbnQ6ZW5hYmxlICovXG4gICAgICB9XG5cbiAgICAgIGFyZ3MucHVzaChpbmplY3Rvci5nZXQodHlwZSAhLCBmbGFncykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcmdzLnB1c2goaW5qZWN0b3IuZ2V0KGFyZykpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJncztcbn1cblxuLyoqIFxuICogTWl4aW4gdG8gYXVnbWVudCBhIHNlcnZpY2Ugd2l0aCBodHRwIGhlbHBlcnMuXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1peGluSHR0cChiYXNlOiBhbnksIGNvbmZpZzogSVRkSHR0cFJFU1RDb25maWcpOiBDb25zdHJ1Y3Rvcjxhbnk+IHtcbiAgLyoqXG4gICAqIEludGVybmFsIGNsYXNzIHVzZWQgdG8gZ2V0IGFuIGluc3RhbmNlIG9mIEluamVjdG9yIGZvciBpbnRlcm5hbCB1c2FnZSBwbHVzIGFsc29cbiAgICogYSB3YXkgdG8gaW5qZWN0IHNlcnZpY2VzIGZyb20gdGhlIGNvbnN0cnVjdG9yIG9mIHRoZSB1bmRlcmx5aW5nIHNlcnZpY2VcbiAgICogQGludGVybmFsXG4gICAqL1xuICBASW5qZWN0YWJsZSgpXG4gIGFic3RyYWN0IGNsYXNzIEh0dHBJbnRlcm5hbENsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIF9pbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICAgIHN1cGVyKC4uLmluamVjdEFyZ3MobmV3IMOJwrVSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzKCkucGFyYW1ldGVycyhiYXNlKSwgX2luamVjdG9yKSk7XG4gICAgICB0aGlzLmJ1aWxkQ29uZmlnKCk7XG4gICAgfVxuICAgIGFic3RyYWN0IGJ1aWxkQ29uZmlnKCk6IHZvaWQ7XG4gIH1cbiAgLyoqXG4gICAqIEFjdHVhbGwgY2xhc3MgYmVpbmcgcmV0dXJuZWQgd2l0aCBhbGwgdGhlIGhvb2tzIGZvciBodHRwIHVzYWdlXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgSHR0cEludGVybmFsQ2xhc3Mge1xuICAgIHByaXZhdGUgX2Jhc2VVcmw6IHN0cmluZztcbiAgICBnZXQgYmFzZVVybCgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICh0eXBlb2YodGhpcy5iYXNlUGF0aCkgPT09ICdzdHJpbmcnID9cbiAgICAgICAgdGhpcy5iYXNlUGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIDogJycpICsgdGhpcy5fYmFzZVVybDtcbiAgICB9XG4gICAgcHJpdmF0ZSBfYmFzZUhlYWRlcnM6IEh0dHBIZWFkZXJzO1xuICAgIHByaXZhdGUgX2RlZmF1bHRPYnNlcnZlPzogVGRIdHRwUkVTVE9ic2VydmU7XG4gICAgcHJpdmF0ZSBfZGVmYXVsdFJlc3BvbnNlVHlwZT86IFRkSHR0cFJFU1RSZXNwb25zZVR5cGU7XG5cbiAgICBodHRwOiBIdHRwQ2xpZW50IHwgSHR0cEludGVyY2VwdG9yU2VydmljZSB8IEh0dHA7XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdXNlZCB0byBzZXR1cCB0aGUgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIGFuZCBnZXQgYW4gaW5zdGFuY2Ugb2YgdGhlIGh0dHAgc2VydmljZVxuICAgICAqL1xuICAgIGJ1aWxkQ29uZmlnKCk6IHZvaWQge1xuICAgICAgdGhpcy5odHRwID0gdGhpcy5faW5qZWN0b3IuZ2V0KGNvbmZpZy5odHRwU2VydmljZVR5cGUgfHwgSHR0cENsaWVudCk7XG4gICAgICB0aGlzLl9iYXNlVXJsID0gY29uZmlnICYmIGNvbmZpZy5iYXNlVXJsID8gY29uZmlnLmJhc2VVcmwucmVwbGFjZSgvXFwvJC8sICcnKSA6ICcnO1xuICAgICAgdGhpcy5fYmFzZUhlYWRlcnMgPSBjb25maWcgJiYgY29uZmlnLmJhc2VIZWFkZXJzID8gY29uZmlnLmJhc2VIZWFkZXJzIDogbmV3IEh0dHBIZWFkZXJzKCk7XG4gICAgICB0aGlzLl9kZWZhdWx0T2JzZXJ2ZSA9IGNvbmZpZyAmJiBjb25maWcuZGVmYXVsdE9ic2VydmUgPyBjb25maWcuZGVmYXVsdE9ic2VydmUgOiAnYm9keSc7XG4gICAgICB0aGlzLl9kZWZhdWx0UmVzcG9uc2VUeXBlID0gY29uZmlnICYmIGNvbmZpZy5kZWZhdWx0UmVzcG9uc2VUeXBlID8gY29uZmlnLmRlZmF1bHRSZXNwb25zZVR5cGUgOiAnanNvbic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWV0aG9kIHVzZWQgdG8gYnVpbGQgdGhlIGRlZmF1bHQgaGVhZGVycyB1c2luZyB0aGUgYmFzZSBoZWFkZXJzXG4gICAgICovXG4gICAgYnVpbGRIZWFkZXJzKCk6IEh0dHBIZWFkZXJzIHtcbiAgICAgIGxldCBoZWFkZXJzT2JqOiB7W2tleTogc3RyaW5nXTogYW55fSA9IHt9O1xuICAgICAgdGhpcy5fYmFzZUhlYWRlcnMua2V5cygpLmZvckVhY2goKGtleTogYW55KSA9PiB7XG4gICAgICAgIGhlYWRlcnNPYmpba2V5XSA9IHRoaXMuX2Jhc2VIZWFkZXJzLmdldChrZXkpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IEh0dHBIZWFkZXJzKGhlYWRlcnNPYmopO1xuICAgIH1cblxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIGJ1aWxkUmVxdWVzdDxSZXNwb25zZT4obWV0aG9kOiAnUE9TVCcgfCAnUFVUJyB8ICdQQVRDSCcsIHVybDogc3RyaW5nLCBvcHRpb25zPzogSVRkSHR0cFJFU1RPcHRpb25zV2l0aEJvZHkpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPjtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICBidWlsZFJlcXVlc3Q8SHR0cFJlc3BvbnNlPihtZXRob2Q6ICdQT1NUJyB8ICdQVVQnIHwgJ1BBVENIJywgdXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBJVGRIdHRwUkVTVE9wdGlvbnNXaXRoQm9keSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPjtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICBidWlsZFJlcXVlc3Q8UmVzcG9uc2U+KG1ldGhvZDogJ0dFVCcgfCAnREVMRVRFJywgdXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBJVGRIdHRwUkVTVE9wdGlvbnMpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPjtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICBidWlsZFJlcXVlc3Q8SHR0cFJlc3BvbnNlPihtZXRob2Q6ICdHRVQnIHwgJ0RFTEVURScsIHVybDogc3RyaW5nLCBvcHRpb25zPzogSVRkSHR0cFJFU1RPcHRpb25zKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U+O1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIGJ1aWxkUmVxdWVzdDxSZXNwb25zZT4obWV0aG9kOiBUZEh0dHBNZXRob2QsIHVybDogc3RyaW5nLCBvcHRpb25zPzogSVRkSHR0cFJFU1RPcHRpb25zV2l0aEJvZHkpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPjtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICBidWlsZFJlcXVlc3Q8SHR0cFJlc3BvbnNlPihtZXRob2Q6IFRkSHR0cE1ldGhvZCwgdXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBJVGRIdHRwUkVTVE9wdGlvbnNXaXRoQm9keSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPiB7XG4gICAgICByZXR1cm4gdGhpcy5fYnVpbGRSZXF1ZXN0KG1ldGhvZCwgdXJsLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdXNlZCB0byBidWlsZCB0aGUgcmVxdWVzdCBkZXBlbmRpbmcgb24gdGhlIGBodHRwYCBzZXJ2aWNlIGFuZCBUZEh0dHBNZXRob2RcbiAgICAgKi9cbiAgICBwcml2YXRlIF9idWlsZFJlcXVlc3QobWV0aG9kOiBUZEh0dHBNZXRob2QsIHVybDogc3RyaW5nLCBvcHRpb25zOiBJVGRIdHRwUkVTVE9wdGlvbnNXaXRoQm9keSA9IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgIGlmICghb3B0aW9ucy5yZXNwb25zZVR5cGUpIHtcbiAgICAgICAgb3B0aW9ucy5yZXNwb25zZVR5cGUgPSB0aGlzLl9kZWZhdWx0UmVzcG9uc2VUeXBlO1xuICAgICAgfVxuICAgICAgaWYgKCFvcHRpb25zLm9ic2VydmUpIHtcbiAgICAgICAgb3B0aW9ucy5vYnNlcnZlID0gdGhpcy5fZGVmYXVsdE9ic2VydmU7XG4gICAgICB9XG4gICAgICBpZiAoIW9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICBvcHRpb25zLmhlYWRlcnMgPSB0aGlzLmJ1aWxkSGVhZGVycygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gdGhpcy5idWlsZEhlYWRlcnMoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuaGVhZGVycyBpbnN0YW5jZW9mIEh0dHBIZWFkZXJzKSB7XG4gICAgICAgICAgKDxIdHRwSGVhZGVycz5vcHRpb25zLmhlYWRlcnMpLmtleXMoKS5mb3JFYWNoKChrZXk6IGFueSkgPT4ge1xuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KGtleSwgKDxIdHRwSGVhZGVycz5vcHRpb25zLmhlYWRlcnMpLmdldChrZXkpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoa2V5LCA8YW55Pm9wdGlvbnMuaGVhZGVyc1trZXldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzID0gaGVhZGVycztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmh0dHAgaW5zdGFuY2VvZiBIdHRwSW50ZXJjZXB0b3JTZXJ2aWNlIHx8IHRoaXMuaHR0cCBpbnN0YW5jZW9mIEh0dHApIHtcbiAgICAgICAgbGV0IGhlYWRlcnM6IEhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICAoPEh0dHBIZWFkZXJzPm9wdGlvbnMuaGVhZGVycykua2V5cygpLmZvckVhY2goKGtleTogYW55KSA9PiB7XG4gICAgICAgICAgaGVhZGVycy5zZXQoa2V5LCAoPEh0dHBIZWFkZXJzPm9wdGlvbnMuaGVhZGVycykuZ2V0KGtleSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHBhcmFtczogVVJMU2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICBpZiAob3B0aW9ucy5wYXJhbXMpIHtcbiAgICAgICAgICBpZiAob3B0aW9ucy5wYXJhbXMgaW5zdGFuY2VvZiBIdHRwUGFyYW1zKSB7XG4gICAgICAgICAgICBvcHRpb25zLnBhcmFtcy5rZXlzKCkuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgcGFyYW1zLnNldChrZXksICg8SHR0cFBhcmFtcz5vcHRpb25zLnBhcmFtcykuZ2V0KGtleSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBvcHRpb25zLnBhcmFtcykge1xuICAgICAgICAgICAgICBwYXJhbXMuc2V0KGtleSwgPGFueT5vcHRpb25zLnBhcmFtc1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9ic2VydmFibGU6IE9ic2VydmFibGU8UmVzcG9uc2U+ID0gKDxIdHRwSW50ZXJjZXB0b3JTZXJ2aWNlPnRoaXMuaHR0cCkucmVxdWVzdCh1cmwsIHtcbiAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgIGJvZHk6IG9wdGlvbnMuYm9keSA/IG9wdGlvbnMuYm9keSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvcHRpb25zLm9ic2VydmUgPT09ICdib2R5Jykge1xuICAgICAgICAgIGlmIChvcHRpb25zLnJlc3BvbnNlVHlwZSA9PT0gJ2pzb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gPGFueT5vYnNlcnZhYmxlLnBpcGUoXG4gICAgICAgICAgICAgIG1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMucmVzcG9uc2VUeXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgICAgIHJldHVybiA8YW55Pm9ic2VydmFibGUucGlwZShcbiAgICAgICAgICAgICAgbWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSksXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5yZXNwb25zZVR5cGUgPT09ICdibG9iJykge1xuICAgICAgICAgICAgcmV0dXJuIDxhbnk+b2JzZXJ2YWJsZS5waXBlKFxuICAgICAgICAgICAgICBtYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuYmxvYigpKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnJlc3BvbnNlVHlwZSA9PT0gJ2FycmF5YnVmZmVyJykge1xuICAgICAgICAgICAgcmV0dXJuIDxhbnk+b2JzZXJ2YWJsZS5waXBlKFxuICAgICAgICAgICAgICBtYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKSksXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLm9ic2VydmUgPT09ICdldmVudHMnKSB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoJ1wiZXZlbnRzXCIgbm90IHN1cHBwb3J0ZWQgaW4gQGFuZ3VsYXIvaHR0cCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICg8SHR0cENsaWVudD50aGlzLmh0dHApLnJlcXVlc3QobWV0aG9kLCB1cmwsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbiIsImRlY2xhcmUgY29uc3QgUmVmbGVjdDogYW55O1xuZXhwb3J0IHR5cGUgVGRQYXJhbVR5cGUgPSAncGFyYW0nIHwgJ3Jlc3BvbnNlJyB8ICdib2R5JyB8ICdxdWVyeVBhcmFtcyc7XG5cbmV4cG9ydCBjb25zdCB0ZEh0dHBSRVNUUGFyYW06IFN5bWJvbCA9IFN5bWJvbCgnVGRIdHRwUkVTVFBhcmFtJyk7XG5cbi8qKlxuICogQWJzdHJhY3QgaW1wbGVtZW50YXRpb24gb2YgdGhlIGh0dHAgcGFyYW0gZGVjb3JhdG9yXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFRkQWJzdHJhY3RQYXJhbSh0eXBlOiBUZFBhcmFtVHlwZSwgcGFyYW0/OiBzdHJpbmcpOiBGdW5jdGlvbiB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBPYmplY3QsIHByb3BlcnR5S2V5OiBzdHJpbmcgfCBzeW1ib2wsIHBhcmFtZXRlckluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBsZXQgcGFyYW1ldGVyczogeyBpbmRleDogbnVtYmVyLCBwYXJhbTogc3RyaW5nLCB0eXBlOiBUZFBhcmFtVHlwZSB9W10gPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKHRkSHR0cFJFU1RQYXJhbSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSkgfHwgW107XG4gICAgcGFyYW1ldGVycy5wdXNoKHtcbiAgICAgIGluZGV4OiBwYXJhbWV0ZXJJbmRleCxcbiAgICAgIHBhcmFtOiBwYXJhbSxcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgfSk7XG4gICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YSh0ZEh0dHBSRVNUUGFyYW0sIHBhcmFtZXRlcnMsIHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgVGRIdHRwTWV0aG9kLCBJVGRIdHRwUkVTVE9wdGlvbnMsIElUZEh0dHBSRVNUT3B0aW9uc1dpdGhCb2R5LCBOT09QX0hUVFAgfSBmcm9tICcuLi8uLi9odHRwLm1peGluJztcbmltcG9ydCB7IFRkUGFyYW1UeXBlLCB0ZEh0dHBSRVNUUGFyYW0gfSBmcm9tICcuLi9wYXJhbXMvYWJzdHJhY3QtcGFyYW0uZGVjb3JhdG9yJztcblxuZGVjbGFyZSBjb25zdCBSZWZsZWN0OiBhbnk7XG5cbi8qKlxuICogTWV0aG9kIHVzZWQgdG8gY29weSBwYXJhbWV0ZXJzIGZyb20gYW4gYXJyYXkgb3IgSHR0cFBhcmFtcyBvYmplY3RcbiAqIGludG8gYSBjZW50cmlsaXplZCBIdHRwUGFyYW1zIG9iamVjdFxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBhcmFtcyh0YXJnZXQ6IEh0dHBQYXJhbXMsIHNvdXJjZTogSHR0cFBhcmFtcyB8IHtba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXX0pOiBIdHRwUGFyYW1zIHtcbiAgbGV0IHF1ZXJ5UGFyYW1zOiBIdHRwUGFyYW1zID0gdGFyZ2V0O1xuICBpZiAoc291cmNlIGluc3RhbmNlb2YgSHR0cFBhcmFtcykge1xuICAgIHNvdXJjZS5rZXlzKCkuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIC8vIHNraXAgaWYgdmFsdWUgaXMgdW5kZWZpbmVkXG4gICAgICBpZiAoKDxIdHRwUGFyYW1zPnNvdXJjZSkuZ2V0KGtleSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBxdWVyeVBhcmFtcyA9IHF1ZXJ5UGFyYW1zLnNldChrZXksICg8SHR0cFBhcmFtcz5zb3VyY2UpLmdldChrZXkpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gc291cmNlKSB7XG4gICAgICAvLyBza2lwIGlmIHZhbHVlIGlzIHVuZGVmaW5lZFxuICAgICAgaWYgKDxhbnk+c291cmNlW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBxdWVyeVBhcmFtcyA9IHF1ZXJ5UGFyYW1zLnNldChrZXksIDxhbnk+c291cmNlW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcXVlcnlQYXJhbXM7XG59XG5cbi8qKlxuICogQWJzdHJhY3QgaW1wbGVtZW50YXRpb24gb2YgdGhlIGh0dHAgbWV0aG9kIGRlY29yYXRvclxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZEFic3RyYWN0TWV0aG9kKGNvbmZpZzoge1xuICBtZXRob2Q6IFRkSHR0cE1ldGhvZCxcbiAgcGF0aDogc3RyaW5nLFxuICBvcHRpb25zPzogSVRkSHR0cFJFU1RPcHRpb25zLFxufSk6IEZ1bmN0aW9uIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgcHJvcGVydHlOYW1lOiBzdHJpbmcsIGRlc2NyaXB0b3I6IFR5cGVkUHJvcGVydHlEZXNjcmlwdG9yPEZ1bmN0aW9uPik6IGFueSB7XG4gICAgbGV0IHdyYXBwZWRGdW5jdGlvbjogRnVuY3Rpb24gPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIC8vIHJlcGxhY2UgbWV0aG9kIGNhbGwgd2l0aCBvdXIgb3duIGFuZCBwcm94eSBpdFxuICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoKTogYW55IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCByZXBsYWNlZFBhdGg6IHN0cmluZyA9IGNvbmZpZy5wYXRoO1xuICAgICAgICBsZXQgcGFyYW1ldGVyczogeyBpbmRleDogbnVtYmVyLCBwYXJhbTogc3RyaW5nLCB0eXBlOiBUZFBhcmFtVHlwZSB9W10gPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKHRkSHR0cFJFU1RQYXJhbSwgdGFyZ2V0LCBwcm9wZXJ0eU5hbWUpO1xuICAgICAgICBsZXQgbmV3QXJnczogYW55W10gPSBbXTtcbiAgICAgICAgbGV0IGJvZHk6IGFueTtcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zOiBIdHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICAgICAgaWYgKHBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAvLyBtYXAgcGFyYW1ldGVycyBhbmQgc2VlIHdoaWNoIHR5cGUgdGhleSBhcmUgdG8gYWN0IG9uIHRoZW1cbiAgICAgICAgICBmb3IgKGxldCBwYXJhbWV0ZXIgb2YgcGFyYW1ldGVycykge1xuICAgICAgICAgICAgaWYgKHBhcmFtZXRlci50eXBlID09PSAncGFyYW0nKSB7XG4gICAgICAgICAgICAgIG5ld0FyZ3NbcGFyYW1ldGVyLmluZGV4XSA9IGFyZ3VtZW50c1twYXJhbWV0ZXIuaW5kZXhdO1xuICAgICAgICAgICAgICByZXBsYWNlZFBhdGggPSByZXBsYWNlZFBhdGgucmVwbGFjZSgnOicgKyBwYXJhbWV0ZXIucGFyYW0sIGFyZ3VtZW50c1twYXJhbWV0ZXIuaW5kZXhdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyYW1ldGVyLnR5cGUgPT09ICdib2R5Jykge1xuICAgICAgICAgICAgICBuZXdBcmdzW3BhcmFtZXRlci5pbmRleF0gPSBhcmd1bWVudHNbcGFyYW1ldGVyLmluZGV4XTtcbiAgICAgICAgICAgICAgYm9keSA9IGFyZ3VtZW50c1twYXJhbWV0ZXIuaW5kZXhdO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJhbWV0ZXIudHlwZSA9PT0gJ3F1ZXJ5UGFyYW1zJykge1xuICAgICAgICAgICAgICBuZXdBcmdzW3BhcmFtZXRlci5pbmRleF0gPSBhcmd1bWVudHNbcGFyYW1ldGVyLmluZGV4XTtcbiAgICAgICAgICAgICAgbGV0IHFQYXJhbXM6IEh0dHBQYXJhbXMgfCB7W2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW119ID0gYXJndW1lbnRzW3BhcmFtZXRlci5pbmRleF07XG4gICAgICAgICAgICAgIGlmIChjb25maWcub3B0aW9ucyAmJiBjb25maWcub3B0aW9ucy5wYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcyA9IHBhcnNlUGFyYW1zKHF1ZXJ5UGFyYW1zLCBjb25maWcub3B0aW9ucy5wYXJhbXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChxUGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMgPSBwYXJzZVBhcmFtcyhxdWVyeVBhcmFtcywgcVBhcmFtcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIGxldCB1cmw6IHN0cmluZyA9IHRoaXMuYmFzZVVybCArIHJlcGxhY2VkUGF0aDtcbiAgICAgICAgbGV0IG9wdGlvbnM6IElUZEh0dHBSRVNUT3B0aW9uc1dpdGhCb2R5ID0gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnLm9wdGlvbnMsIHtcbiAgICAgICAgICBib2R5OiBib2R5LFxuICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbXMsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgbGV0IHJlcXVlc3Q6IGFueSA9IHRoaXMuYnVpbGRSZXF1ZXN0KGNvbmZpZy5tZXRob2QsIHVybCwgb3B0aW9ucyk7XG4gICAgICAgIGlmIChwYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgLy8gc2VlIHdoaWNoIG9uZSB3YXMgdGhlIHJlc3BvbnNlIHBhcmFtZXRlciBzbyB3ZSBjYW4gc2V0IHRoZSByZXF1ZXN0IG9ic2VydmFibGVcbiAgICAgICAgICBmb3IgKGxldCBwYXJhbWV0ZXIgb2YgcGFyYW1ldGVycykge1xuICAgICAgICAgICAgaWYgKHBhcmFtZXRlci50eXBlID09PSAncmVzcG9uc2UnKSB7XG4gICAgICAgICAgICAgIG5ld0FyZ3NbcGFyYW1ldGVyLmluZGV4XSA9IHJlcXVlc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBsZXQgcmVzcG9uc2U6IGFueSA9IHdyYXBwZWRGdW5jdGlvbi5hcHBseSh0aGlzLCBuZXdBcmdzKTtcbiAgICAgICAgLy8gaWYgdGhlIHJlc3BvbnNlIGlzIE5PT1BfSFRUUCBvciB1bmRlZmluZWQsIHRoZW4gd2UgcmV0dXJuIHRoZSByZXF1ZXN0IGFzIGl0IGlzXG4gICAgICAgIC8vIGVsc2Ugd2UgcmV0dXJuIHRoZSByZXNwb25zZSBmcm9tIHRoZSBpbm5lciBmdW5jdGlvblxuICAgICAgICBpZiAocmVzcG9uc2UgPT09IE5PT1BfSFRUUCB8fCByZXNwb25zZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IElUZEh0dHBSRVNUT3B0aW9ucyB9IGZyb20gJy4uLy4uLyc7XG5pbXBvcnQgeyBUZEFic3RyYWN0TWV0aG9kIH0gZnJvbSAnLi9hYnN0cmFjdC1tZXRob2QuZGVjb3JhdG9yJztcblxuLyoqXG4gKiBEZWNvcmF0b3IgdGhhdCBhZGRzIEdFVCByZXF1ZXN0IGNhcGFiaWxpdGllcyB0byBhIG1ldGhvZFxuICovXG5leHBvcnQgZnVuY3Rpb24gR0VUKGNvbmZpZzoge1xuICBwYXRoOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBJVGRIdHRwUkVTVE9wdGlvbnMsXG59KTogRnVuY3Rpb24ge1xuICByZXR1cm4gVGRBYnN0cmFjdE1ldGhvZCg8YW55Pk9iamVjdC5hc3NpZ24oe1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gIH0sIGNvbmZpZykpO1xufVxuIiwiaW1wb3J0IHsgSVRkSHR0cFJFU1RPcHRpb25zIH0gZnJvbSAnLi4vLi4vJztcbmltcG9ydCB7IFRkQWJzdHJhY3RNZXRob2QgfSBmcm9tICcuL2Fic3RyYWN0LW1ldGhvZC5kZWNvcmF0b3InO1xuXG4vKipcbiAqIERlY29yYXRvciB0aGF0IGFkZHMgUE9TVCByZXF1ZXN0IGNhcGFiaWxpdGllcyB0byBhIG1ldGhvZFxuICovXG5leHBvcnQgZnVuY3Rpb24gUE9TVChjb25maWc6IHtcbiAgcGF0aDogc3RyaW5nLFxuICBvcHRpb25zPzogSVRkSHR0cFJFU1RPcHRpb25zLFxufSk6IEZ1bmN0aW9uIHtcbiAgcmV0dXJuIFRkQWJzdHJhY3RNZXRob2QoPGFueT5PYmplY3QuYXNzaWduKHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgfSwgY29uZmlnKSk7XG59XG4iLCJpbXBvcnQgeyBJVGRIdHRwUkVTVE9wdGlvbnMgfSBmcm9tICcuLi8uLi8nO1xuaW1wb3J0IHsgVGRBYnN0cmFjdE1ldGhvZCB9IGZyb20gJy4vYWJzdHJhY3QtbWV0aG9kLmRlY29yYXRvcic7XG5cbi8qKlxuICogRGVjb3JhdG9yIHRoYXQgYWRkcyBQQVRDSCByZXF1ZXN0IGNhcGFiaWxpdGllcyB0byBhIG1ldGhvZFxuICovXG5leHBvcnQgZnVuY3Rpb24gUEFUQ0goY29uZmlnOiB7XG4gIHBhdGg6IHN0cmluZyxcbiAgb3B0aW9ucz86IElUZEh0dHBSRVNUT3B0aW9ucyxcbn0pOiBGdW5jdGlvbiB7XG4gIHJldHVybiBUZEFic3RyYWN0TWV0aG9kKDxhbnk+T2JqZWN0LmFzc2lnbih7XG4gICAgbWV0aG9kOiAnUEFUQ0gnLFxuICB9LCBjb25maWcpKTtcbn1cbiIsImltcG9ydCB7IElUZEh0dHBSRVNUT3B0aW9ucyB9IGZyb20gJy4uLy4uLyc7XG5pbXBvcnQgeyBUZEFic3RyYWN0TWV0aG9kIH0gZnJvbSAnLi9hYnN0cmFjdC1tZXRob2QuZGVjb3JhdG9yJztcblxuLyoqXG4gKiBEZWNvcmF0b3IgdGhhdCBhZGRzIFBVVCByZXF1ZXN0IGNhcGFiaWxpdGllcyB0byBhIG1ldGhvZFxuICovXG5leHBvcnQgZnVuY3Rpb24gUFVUKGNvbmZpZzoge1xuICBwYXRoOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBJVGRIdHRwUkVTVE9wdGlvbnMsXG59KTogRnVuY3Rpb24ge1xuICByZXR1cm4gVGRBYnN0cmFjdE1ldGhvZCg8YW55Pk9iamVjdC5hc3NpZ24oe1xuICAgIG1ldGhvZDogJ1BVVCcsXG4gIH0sIGNvbmZpZykpO1xufVxuIiwiaW1wb3J0IHsgSVRkSHR0cFJFU1RPcHRpb25zIH0gZnJvbSAnLi4vLi4vJztcbmltcG9ydCB7IFRkQWJzdHJhY3RNZXRob2QgfSBmcm9tICcuL2Fic3RyYWN0LW1ldGhvZC5kZWNvcmF0b3InO1xuXG4vKipcbiAqIERlY29yYXRvciB0aGF0IGFkZHMgREVMRVRFIHJlcXVlc3QgY2FwYWJpbGl0aWVzIHRvIGEgbWV0aG9kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBERUxFVEUoY29uZmlnOiB7XG4gIHBhdGg6IHN0cmluZyxcbiAgb3B0aW9ucz86IElUZEh0dHBSRVNUT3B0aW9ucyxcbn0pOiBGdW5jdGlvbiB7XG4gIHJldHVybiBUZEFic3RyYWN0TWV0aG9kKDxhbnk+T2JqZWN0LmFzc2lnbih7XG4gICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgfSwgY29uZmlnKSk7XG59XG4iLCJpbXBvcnQgeyBtaXhpbkh0dHAsIElUZEh0dHBSRVNUQ29uZmlnIH0gZnJvbSAnLi4vLi4vaHR0cC5taXhpbic7XG5cbi8qKlxuICogRGVjb3JhdG9yIHVzZWQgdG8gZ2l2ZSBhIHNlcnZpY2UgaHR0cCBjYXBhYmlsaXRpZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFRkSHR0cChjb25maWc6IElUZEh0dHBSRVNUQ29uZmlnKTogRnVuY3Rpb24ge1xuICByZXR1cm4gZnVuY3Rpb24gPFQgZXh0ZW5kcyB7IG5ldyguLi5hcmdzOiBhbnlbXSk6IHt9IH0+KGNvbnN0cnVjdG9yOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBjbGFzcyBleHRlbmRzIG1peGluSHR0cChjb25zdHJ1Y3RvciwgY29uZmlnKSB7XG4gICAgIFxuICAgIH07XG4gIH07XG59XG4iLCJpbXBvcnQgeyBUZEFic3RyYWN0UGFyYW0gfSBmcm9tICcuL2Fic3RyYWN0LXBhcmFtLmRlY29yYXRvcic7XG5cbi8qKlxuICogRGVjb3JhdG9yIHRoYXQgaXMgdXNlZCB0byBkZWZpbmUgd2hpY2ggcGFyYW1ldGVyIGlzIGFuIGh0dHAgcGFyYW1ldGVyIGluIGEgbWV0aG9kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZFBhcmFtKHBhcmFtOiBzdHJpbmcpOiBGdW5jdGlvbiB7XG4gIHJldHVybiBUZEFic3RyYWN0UGFyYW0oJ3BhcmFtJywgcGFyYW0pO1xufVxuIiwiaW1wb3J0IHsgVGRBYnN0cmFjdFBhcmFtIH0gZnJvbSAnLi9hYnN0cmFjdC1wYXJhbS5kZWNvcmF0b3InO1xuXG4vKipcbiAqIERlY29yYXRvciB0aGF0IGlzIHVzZWQgdG8gZGVmaW5lIHdoaWNoIHBhcmFtZXRlciBpcyB0aGUgaHR0cCBib2R5IGluIGEgbWV0aG9kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZEJvZHkoKTogRnVuY3Rpb24ge1xuICByZXR1cm4gVGRBYnN0cmFjdFBhcmFtKCdib2R5Jyk7XG59XG4iLCJpbXBvcnQgeyBUZEFic3RyYWN0UGFyYW0gfSBmcm9tICcuL2Fic3RyYWN0LXBhcmFtLmRlY29yYXRvcic7XG5cbi8qKlxuICogRGVjb3JhdG9yIHRoYXQgaXMgdXNlZCB0byBkZWZpbmUgd2hpY2ggcGFyYW1ldGVyIGlzIHRoZSBodHRwIHJlc3BvbnNlIGluIGEgbWV0aG9kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZFJlc3BvbnNlKCk6IEZ1bmN0aW9uIHtcbiAgcmV0dXJuIFRkQWJzdHJhY3RQYXJhbSgncmVzcG9uc2UnKTtcbn1cbiIsImltcG9ydCB7IFRkQWJzdHJhY3RQYXJhbSB9IGZyb20gJy4vYWJzdHJhY3QtcGFyYW0uZGVjb3JhdG9yJztcblxuLyoqXG4gKiBEZWNvcmF0b3IgdGhhdCBpcyB1c2VkIHRvIGRlZmluZSB3aGljaCBwYXJhbWV0ZXIgaXMgdGhlIGh0dHAgcXVlcnkgcGFyYW1ldGVycyBpbiBhIG1ldGhvZFxuICovXG5leHBvcnQgZnVuY3Rpb24gVGRRdWVyeVBhcmFtcygpOiBGdW5jdGlvbiB7XG4gIHJldHVybiBUZEFic3RyYWN0UGFyYW0oJ3F1ZXJ5UGFyYW1zJyk7XG59XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiLCJ0c2xpYl8xLl9fdmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBU0U7O0tBRUM7O2dCQVRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFFdkIsOEVBQXlDOztpQkFDMUM7Ozs7SUFPRCwwQkFBQztDQVhEOzs7Ozs7QUNGQTtJQUtBO0tBYUM7O2dCQWJBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osbUJBQW1CO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsbUJBQW1CO3FCQUNwQjtpQkFDRjs7SUFHRCw2QkFBQztDQWJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBOztJQUtFLE1BQU8sTUFBTTtJQUNiLFVBQVcsVUFBVTtJQUNyQixVQUFXLFVBQVU7OztJQXdDckIsNEJBQW9CLFdBQXVCLEVBQ2pDLE1BQWMsRUFDZCxTQUFvQixFQUNwQixrQkFBcUM7UUFIM0IsZ0JBQVcsR0FBWCxXQUFX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