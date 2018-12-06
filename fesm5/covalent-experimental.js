import { Component, NgModule, ElementRef, HostBinding, Renderer2, ChangeDetectionStrategy, ChangeDetectorRef, Input, ContentChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
export { CovalentBreadcrumbsModule, TdBreadcrumbsComponent } from '@covalent/core/breadcrumbs';
export { CovalentTabSelectModule, TdTabSelectBase, _TdTabSelectMixinBase, TdTabSelectComponent, TdTabOptionBase, _TdTabOptionMixinBase, TdTabOptionComponent } from '@covalent/core/tab-select';
import { Router } from '@angular/router';
import { Subscription, Subject, fromEvent, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { __extends } from 'tslib';
import { mixinDisabled, mixinDisableRipple } from '@covalent/core/common';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { PortalModule } from '@angular/cdk/portal';
export { httpFactory, HTTP_CONFIG, HTTP_INTERCEPTOR_PROVIDER, CovalentHttpModule, TdURLRegExpInterceptorMatcher, TdHttpService, TdGET, TdPOST, TdPATCH, TdPUT, TdDELETE, TdHttp, TdHttpClient, TdParam, TdBody, TdResponse, TdQueryParams, mixinHttp } from '@covalent/http';

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

export { CovalentRenameMeModule, TdRenameMeComponent, CovalentNavStepperModule, TdHorizontalStepperComponent, TdNavStepHeaderBase as ɵb, TdNavStepHeaderComponent as ɵd, _TdNavStepHeaderMixinBase as ɵc, TdNavStepComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtZXhwZXJpbWVudGFsLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL3RlbXBsYXRlLXJlbmFtZS1tZS1leHBlcmltZW50LW1vZHVsZS9yZW5hbWUtbWUuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL3RlbXBsYXRlLXJlbmFtZS1tZS1leHBlcmltZW50LW1vZHVsZS9yZW5hbWUtbWUubW9kdWxlLnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL25hdi1zdGVwcGVyL25hdi1zdGVwL25hdi1zdGVwLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9uYXYtc3RlcHBlci9ob3Jpem9udGFsLW5hdi1zdGVwcGVyL2hvcml6b250YWwtbmF2LXN0ZXBwZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL25hdi1zdGVwcGVyL25hdi1zdGVwLWhlYWRlci9uYXYtc3RlcC1oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL25hdi1zdGVwcGVyL25hdi1zdGVwcGVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtcmVuYW1lTWUnLFxuICBzdHlsZVVybHM6IFsnLi9yZW5hbWUtbWUuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlbmFtZS1tZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkUmVuYW1lTWVDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIHN0dWJcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgVGRSZW5hbWVNZUNvbXBvbmVudCB9IGZyb20gJy4vcmVuYW1lLW1lLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRkUmVuYW1lTWVDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUZFJlbmFtZU1lQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudFJlbmFtZU1lTW9kdWxlIHtcblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBSZW5kZXJlcjIsXG4gICAgICAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5leHBvcnQgZW51bSBTdGVwU3RhdGUge1xuICBOb25lID0gJ25vbmUnLFxuICBSZXF1aXJlZCA9ICdyZXF1aXJlZCcsXG4gIENvbXBsZXRlID0gJ2NvbXBsZXRlJyxcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbmF2LXN0ZXAsIGFbdGQtbmF2LXN0ZXBdJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmF2LXN0ZXAuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdi1zdGVwLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkTmF2U3RlcENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBfZGlzcGxheVN0ZXA6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF9kaXNwbGF5TGluZTogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgX3dpZHRoOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9hY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvLyBOdW1iZXIgdG8gZGlzcGxheSBpbiBzdGVwIGhlYWRlclxuICBudW1iZXI6IG51bWJlcjtcblxuICAvKipcbiAgICogcm91dGVyTGluaz86IHN0cmluZ1xuICAgKiByb3V0ZXJMaW5rIHRvIG5hdmlnYXRlIHRvXG4gICAqIERlZmF1bHRzIHRvIGVtcHR5XG4gICAqL1xuICBASW5wdXQoJ3JvdXRlckxpbmsnKSByb3V0ZXJMaW5rOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIHN0YXRlPzogU3RlcFN0YXRlXG4gICAqIHN0YXRlIG9mIHN0ZXBcbiAgICogRGVmYXVsdHMgdG8gbm9uZVxuICAgKi9cbiAgQElucHV0KCdzdGF0ZScpIHN0YXRlOiBTdGVwU3RhdGUgPSBTdGVwU3RhdGUuTm9uZTtcblxuICAvKipcbiAgICogc3VibGFiZWw/OiBzdHJpbmdcbiAgICogU3VibGFiZWwgdG8gZGlzcGxheSBpbiBzdGVwIGhlYWRlclxuICAgKiBEZWZhdWx0cyB0byBlbXB0eVxuICAgKi9cbiAgQElucHV0KCdzdWJsYWJlbCcpIHN1YmxhYmVsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF0LWJ1dHRvbicpO1xuICB9XG5cbiAgaXNSZXF1aXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlzQ29tcGxldGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXQgZGlzcGxheVN0ZXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlTdGVwO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZGlzcGxheSB0aGUgc3RlcCBvciBub3RcbiAgICovXG4gIHNldCBkaXNwbGF5U3RlcChzaG91bGREaXNwbGF5OiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzcGxheVN0ZXAgPSBzaG91bGREaXNwbGF5O1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZ2V0IGRpc3BsYXlMaW5lKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5TGluZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGRpc3BsYXkgdGhlIHN0ZXAgb3Igbm90XG4gICAqL1xuICBzZXQgZGlzcGxheUxpbmUoc2hvdWxkRGlzcGxheTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc3BsYXlMaW5lID0gc2hvdWxkRGlzcGxheTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHN0ZXAgaXMgYWN0aXZlXG4gICAqL1xuICBnZXQgYWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XG4gIH1cblxuICAvKipcbiAgICogV2lkdGggb2YgdGhlIERPTSBlbGVtZW50IG9mIHRoZSBzdGVwXG4gICAqL1xuICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgZGlzcGxheSBzdHlsZSBvZiB0aGUgY3J1bWJcbiAgICovXG4gIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpXG4gIGdldCBkaXNwbGF5QmluZGluZygpOiBzdHJpbmcge1xuICAgIC8vIFNldCB0aGUgZGlzcGxheSB0byBub25lIG9uIHRoZSBjb21wb25lbnQsIGp1c3QgaW4gY2FzZSB0aGUgZW5kIHVzZXIgaXMgaGlkaW5nXG4gICAgLy8gYW5kIHNob3dpbmcgdGhlbSBpbnN0ZWFkIG9mIHRoZSBjb21wb25lbnQgZG9pbmcgaXRzZWxmIGZvciByZWFzb25zIGxpa2UgcmVzcG9uc2l2ZVxuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5U3RlcCA/IHVuZGVmaW5lZCA6ICdub25lJztcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAvLyBzZXQgdGhlIHdpZHRoIGZyb20gdGhlIGFjdHVhbCByZW5kZXJlZCBET00gZWxlbWVudFxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5fd2lkdGggPSAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIFNldCB0aGlzIHN0ZXAgdG8gYWN0aXZlIGlmIHRoZSBzdGVwIHJvdXRlIGFuZCBhY3RpdmUgcm91dGUgYXJlIHRoZSBzYW1lXG4gICAgaWYgKHRoaXMucm91dGVyLnVybCA9PT0gdGhpcy5yb3V0ZXJMaW5rKSB7XG4gICAgICB0aGlzLl9hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBPbkluaXQsIE9uRGVzdHJveSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFxuICAgICAgICAgQWZ0ZXJDb250ZW50SW5pdCwgRG9DaGVjaywgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgU3ViamVjdCwgZnJvbUV2ZW50LCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVGROYXZTdGVwQ29tcG9uZW50IH0gZnJvbSAnLi4vbmF2LXN0ZXAvbmF2LXN0ZXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtaG9yaXpvbnRhbC1uYXYtc3RlcHBlcicsXG4gIHN0eWxlVXJsczogWycuL2hvcml6b250YWwtbmF2LXN0ZXBwZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2hvcml6b250YWwtbmF2LXN0ZXBwZXIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRIb3Jpem9udGFsU3RlcHBlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRG9DaGVjaywgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9yZXNpemVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSBfd2lkdGhTdWJqZWN0OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG4gIHByaXZhdGUgX3Jlc2l6aW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3Nob3dMZWZ0QXJyb3c6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2hvd1JpZ2h0QXJyb3c6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbGVmdEhpZGRlbjogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfcmlnaHRIaWRkZW46IG51bWJlciA9IDA7XG5cbiAgLy8gYWxsIHRoZSBzdWIgY29tcG9uZW50cywgd2hpY2ggYXJlIHRoZSBpbmRpdmlkdWFsIHN0ZXBzXG4gIEBDb250ZW50Q2hpbGRyZW4oVGROYXZTdGVwQ29tcG9uZW50KSBfc3RlcHM6IFF1ZXJ5TGlzdDxUZE5hdlN0ZXBDb21wb25lbnQ+O1xuICAvLyB0aGUgbGlzdCBvZiBoaWRkZW4gc3RlcHMgbm90IHNob3duIHJpZ2h0IG5vdyAocmVzcG9uc2l2ZSlcbiAgaGlkZGVuU3RlcHM6IFRkTmF2U3RlcENvbXBvbmVudFtdID0gbmV3IEFycmF5KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZXNpemVTdWJzY3JpcHRpb24gPSBtZXJnZShcbiAgICAgIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKS5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMTApLFxuICAgICAgKSxcbiAgICAgIHRoaXMuX3dpZHRoU3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgKSxcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX3Jlc2l6aW5nKSB7XG4gICAgICAgIHRoaXMuX3Jlc2l6aW5nID0gdHJ1ZTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5V2lkdGhBdmFpbGFibGVTdGVwcygpO1xuICAgICAgICAgIHRoaXMuX3Jlc2l6aW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnRSZWYgJiYgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLl93aWR0aFN1YmplY3QubmV4dCh0aGlzLm5hdGl2ZUVsZW1lbnRXaWR0aCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0U3RlcFNldHRpbmdzKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZXNpemVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qXG4gICogQ3VycmVudCB3aWR0aCBvZiB0aGUgZWxlbWVudCBjb250YWluZXJcbiAgKi9cbiAgZ2V0IG5hdGl2ZUVsZW1lbnRXaWR0aCgpOiBudW1iZXIge1xuICAgIGxldCBlbGVtZW50OiBIVE1MRWxlbWVudCA9ICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcblxuICAgIC8vIE5lZWQgdG8gdGFrZSBpbnRvIGFjY291bnQgYm9yZGVyLCBtYXJnaW4gYW5kIHBhZGRpbmcgdGhhdCBtaWdodCBiZSBhcm91bmQgYWxsIHRoZSBjcnVtYnNcbiAgICBsZXQgc3R5bGU6IENTU1N0eWxlRGVjbGFyYXRpb24gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgICBsZXQgYm9yZGVyTGVmdDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUuYm9yZGVyTGVmdCwgMTApO1xuICAgIGxldCBib3JkZXJSaWdodDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUuYm9yZGVyUmlnaHQsIDEwKTtcbiAgICBsZXQgbWFyZ2luTGVmdDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUubWFyZ2luTGVmdCwgMTApO1xuICAgIGxldCBtYXJnaW5SaWdodDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUubWFyZ2luUmlnaHQsIDEwKTtcbiAgICBsZXQgcGFkZGluZ0xlZnQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLnBhZGRpbmdMZWZ0LCAxMCk7XG4gICAgbGV0IHBhZGRpbmdSaWdodDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUucGFkZGluZ1JpZ2h0LCAxMCk7XG5cbiAgICByZXR1cm4gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtIGJvcmRlckxlZnQgLSBib3JkZXJSaWdodCAtIG1hcmdpbkxlZnQgLSBtYXJnaW5SaWdodCAtIHBhZGRpbmdMZWZ0IC0gcGFkZGluZ1JpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0b3RhbCBjb3VudCBvZiBpbmRpdmlkdWFsIHN0ZXBzXG4gICAqL1xuICBnZXQgY291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3RlcHMgPyB0aGlzLl9zdGVwcy5sZW5ndGggOiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3VsZCB3ZSBzaG93IHRoZSBsZWZ0IEFycm93XG4gICAqL1xuICBnZXQgc2hvd0xlZnRBcnJvdygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0xlZnRBcnJvdztcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG91bGQgd2Ugc2hvdyB0aGUgcmlnaHQgQXJyb3dcbiAgICovXG4gIGdldCBzaG93UmlnaHRBcnJvdygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1JpZ2h0QXJyb3c7XG4gIH1cblxuICBwdWJsaWMgc2hvd0hpZGRlbkxlZnRTdGVwKCk6IHZvaWQge1xuICAgIGxldCBzdGVwc0FycmF5OiBUZE5hdlN0ZXBDb21wb25lbnRbXSA9IHRoaXMuX3N0ZXBzLnRvQXJyYXkoKTtcbiAgICAvLyBzaG93IHRoZSBsZWZ0IG9uZVxuICAgIHN0ZXBzQXJyYXlbdGhpcy5fbGVmdEhpZGRlbiAtIDFdLmRpc3BsYXlTdGVwID0gdHJ1ZTtcbiAgICB0aGlzLmhpZGRlblN0ZXBzLnNwbGljZSh0aGlzLl9sZWZ0SGlkZGVuIC0gMSwgMSk7XG4gICAgdGhpcy5fbGVmdEhpZGRlbi0tO1xuICAgIC8vIElmIG5vIG1vcmUgaGlkZGVuIHN0ZXBzIHRoZW4gaGlkZSBsZWZ0IGFycm93XG4gICAgaWYgKHRoaXMuX2xlZnRIaWRkZW4gPT09IDApIHtcbiAgICAgIHRoaXMuX3Nob3dMZWZ0QXJyb3cgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBoaWRlIHRoZSByaWdodCBvbmVcbiAgICBzdGVwc0FycmF5W3N0ZXBzQXJyYXkubGVuZ3RoIC0gKHRoaXMuX3JpZ2h0SGlkZGVuICsgMSldLmRpc3BsYXlTdGVwID0gZmFsc2U7XG4gICAgc3RlcHNBcnJheVtzdGVwc0FycmF5Lmxlbmd0aCAtICh0aGlzLl9yaWdodEhpZGRlbiArIDIpXS5kaXNwbGF5TGluZSA9IGZhbHNlO1xuICAgIHRoaXMuaGlkZGVuU3RlcHMucHVzaChzdGVwc0FycmF5W3N0ZXBzQXJyYXkubGVuZ3RoIC0gMV0pO1xuICAgIHRoaXMuX3JpZ2h0SGlkZGVuKys7XG5cbiAgICB0aGlzLl9zaG93UmlnaHRBcnJvdyA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgc2hvd0hpZGRlblJpZ2h0U3RlcCgpOiB2b2lkIHtcbiAgICBsZXQgc3RlcHNBcnJheTogVGROYXZTdGVwQ29tcG9uZW50W10gPSB0aGlzLl9zdGVwcy50b0FycmF5KCk7XG4gICAgLy8gc2hvdyB0aGUgcmlnaHQgb25lXG4gICAgc3RlcHNBcnJheVtzdGVwc0FycmF5Lmxlbmd0aCAtIHRoaXMuX3JpZ2h0SGlkZGVuXS5kaXNwbGF5U3RlcCA9IHRydWU7XG4gICAgc3RlcHNBcnJheVtzdGVwc0FycmF5Lmxlbmd0aCAtICh0aGlzLl9yaWdodEhpZGRlbiArIDEpXS5kaXNwbGF5TGluZSA9IHRydWU7XG4gICAgdGhpcy5oaWRkZW5TdGVwcy5wb3AoKTtcbiAgICB0aGlzLl9yaWdodEhpZGRlbi0tO1xuICAgIC8vIElmIG5vIG1vcmUgaGlkZGVuIHN0ZXBzIHRoZW4gaGlkZSByaWdodCBhcnJvd1xuICAgIGlmICh0aGlzLl9yaWdodEhpZGRlbiA9PT0gMCkge1xuICAgICAgdGhpcy5fc2hvd1JpZ2h0QXJyb3cgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBoaWRlIHRoZSBsZWZ0IG9uZVxuICAgIHN0ZXBzQXJyYXlbdGhpcy5fbGVmdEhpZGRlbl0uZGlzcGxheVN0ZXAgPSBmYWxzZTtcbiAgICB0aGlzLmhpZGRlblN0ZXBzLnB1c2goc3RlcHNBcnJheVt0aGlzLl9sZWZ0SGlkZGVuXSk7XG4gICAgdGhpcy5fbGVmdEhpZGRlbisrO1xuXG4gICAgdGhpcy5fc2hvd0xlZnRBcnJvdyA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBzdGVwIGxpbmUgc2VwYXJhdG9ycyBhbmQgZGlzcGxheSBudW1iZXJzXG4gICAqL1xuICBwcml2YXRlIHNldFN0ZXBTZXR0aW5ncygpOiB2b2lkIHtcbiAgICBsZXQgc3RlcHNBcnJheTogVGROYXZTdGVwQ29tcG9uZW50W10gPSB0aGlzLl9zdGVwcy50b0FycmF5KCk7XG4gICAgaWYgKHN0ZXBzQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgLy8gZG9uJ3Qgc2hvdyB0aGUgaWNvbiBvbiB0aGUgbGFzdCBicmVhZGNydW1iXG4gICAgICBzdGVwc0FycmF5W3N0ZXBzQXJyYXkubGVuZ3RoIC0gMV0uZGlzcGxheUxpbmUgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gc2V0IHRoZSBpbmRleCBudW1iZXIgb2YgdGhlIHN0ZXAgc28gY2FuIGRpc3BsYXkgdGhhdCBudW1iZXIgaW4gY2lyY2xlXG4gICAgc3RlcHNBcnJheS5mb3JFYWNoKChzdGVwOiBUZE5hdlN0ZXBDb21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHN0ZXAubnVtYmVyID0gaW5kZXggKyAxO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBkaXNwbGF5V2lkdGhBdmFpbGFibGVTdGVwcygpOiB2b2lkIHtcbiAgICBsZXQgY3VyVG90U3RlcFdpZHRoOiBudW1iZXIgPSAwO1xuICAgIGxldCBzdGVwc0FycmF5OiBUZE5hdlN0ZXBDb21wb25lbnRbXSA9IHRoaXMuX3N0ZXBzLnRvQXJyYXkoKTtcbiAgICAvLyBjYWxjdWxhdGUgdGhlIGN1cnJlbnQgd2lkdGggb2YgdGhlIHNob3duIHN0ZXBzXG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gdGhpcy5oaWRkZW5TdGVwcy5sZW5ndGg7IGkgPCBzdGVwc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjdXJUb3RTdGVwV2lkdGggKz0gc3RlcHNBcnJheVtpXS53aWR0aDtcbiAgICB9XG4gICAgLy8gZ2V0IHRoZSBhY3RpdmUgc3RlcCBpbmRleFxuICAgIGxldCBhY3RpdmVJbmRleDogbnVtYmVyID0gc3RlcHNBcnJheS5maW5kSW5kZXgoKHN0ZXA6IFRkTmF2U3RlcENvbXBvbmVudCkgPT4ge1xuICAgICAgcmV0dXJuIHN0ZXAuYWN0aXZlID09PSB0cnVlO1xuICAgIH0pO1xuICAgIC8vIGhpZGUgdGhlIGZpcnN0IHN0ZXAgaWYgd2luZG93IHNpemUgaXMgc21hbGxlciB0aGFuIGFsbCB0aGUgc3RlcCBzaXplc1xuICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnRXaWR0aCA8IGN1clRvdFN0ZXBXaWR0aCkge1xuICAgICAgLy8gZGV0ZXJtaW5lIGlmIHRoZSBhY3RpdmUgc3RlcCBpcyBpbiB0aGUgZmlyc3Qgb3Igc2Vjb25kIGhhbGYgb2YgdGhlIGxpc3RcbiAgICAgIC8vIGFuZCBjaGVjayB0aGF0IGFsbCB0aGUgbGVmdCBvbmVzIGFyZW4ndCBhbHJlYWR5IGhpZGRlbiAoMm5kIGNoZWNrIGFmdGVyICYmIGRvZXMgdGhhdClcbiAgICAgIC8vIGFuZCBoaWRlIG9uIHRoZSBvcHBvc2l0ZSBzaWRlIG9mIHRoYXRcbiAgICAgIGlmICgoYWN0aXZlSW5kZXggPj0gc3RlcHNBcnJheS5sZW5ndGggLyAyKSAmJiAodGhpcy5fbGVmdEhpZGRlbiA8IGFjdGl2ZUluZGV4KSkge1xuICAgICAgICAvLyBsZWZ0XG4gICAgICAgIHRoaXMuX3Nob3dSaWdodEFycm93ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3Nob3dMZWZ0QXJyb3cgPSB0cnVlO1xuICAgICAgICB0aGlzLl9sZWZ0SGlkZGVuKys7XG4gICAgICAgIHN0ZXBzQXJyYXlbdGhpcy5fbGVmdEhpZGRlbiAtIDFdLmRpc3BsYXlTdGVwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGlkZGVuU3RlcHMucHVzaChzdGVwc0FycmF5W3RoaXMuaGlkZGVuU3RlcHMubGVuZ3RoXSk7XG4gICAgICAvLyBDaGVjayB0byBzZWUgdGhhdCBhbGwgdGhlIHBvc3NpYmxlIG9uZXMgb24gdGhlIHJpZ2h0IGFyZW4ndCBhbHJlYWR5IGhpZGRlblxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9yaWdodEhpZGRlbiA8IHN0ZXBzQXJyYXkubGVuZ3RoIC0gYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgLy8gcmlnaHRcbiAgICAgICAgdGhpcy5fc2hvd1JpZ2h0QXJyb3cgPSB0cnVlO1xuICAgICAgICB0aGlzLl9zaG93TGVmdEFycm93ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3JpZ2h0SGlkZGVuKys7XG4gICAgICAgIHN0ZXBzQXJyYXlbc3RlcHNBcnJheS5sZW5ndGggLSB0aGlzLl9yaWdodEhpZGRlbl0uZGlzcGxheVN0ZXAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oaWRkZW5TdGVwcy5wdXNoKHN0ZXBzQXJyYXlbc3RlcHNBcnJheS5sZW5ndGggLSB0aGlzLl9yaWdodEhpZGRlbl0pO1xuICAgICAgfVxuICAgICAgdGhpcy5kaXNwbGF5V2lkdGhBdmFpbGFibGVTdGVwcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBsb29wIG92ZXIgYWxsIHRoZSBoaWRkZW4gc3RlcHMgYW5kIHNlZSBpZiBhZGRpbmcgdGhlbSBiYWNrIGluIHdpbGxcbiAgICAgIC8vIGZpdCBpbiB0aGUgY3VycmVudCB3aW5kb3cgc2l6ZVxuICAgICAgbGV0IHRvdGFsSGlkZGVuOiBudW1iZXIgPSB0aGlzLmhpZGRlblN0ZXBzLmxlbmd0aCAtIDE7XG4gICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSB0b3RhbEhpZGRlbjsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgbGV0IGhpZGRlblN0ZXBXaWR0aDogbnVtYmVyID0gc3RlcHNBcnJheVtpXS53aWR0aDtcbiAgICAgICAgaWYgKChjdXJUb3RTdGVwV2lkdGggKyBoaWRkZW5TdGVwV2lkdGgpIDwgdGhpcy5uYXRpdmVFbGVtZW50V2lkdGgpIHtcbiAgICAgICAgICAvLyBEZXRlcm1pbmUgaWYgdGhlIGFjdGl2ZSBzdGVwIGlzIGluIHRoZSBmaXJzdCBvciBzZWNvbmQgaGFsZiBvZiB0aGUgbGlzdFxuICAgICAgICAgIC8vIGFuZCBpZiBpdHMgcmlnaHQgYW5kIHRoZXJlIGFyZSBoaWRkZW4gbGVmdCBzdGVwc1xuICAgICAgICAgIC8vIG9yIGlmIGl0IGxlZnQgYW5kIHRoZXJlIGFyZSBubyByaWdodCBoaWRkZW4gb25lcyBhbmQgc29tZSBsZWZ0IGhpZGRlbiAodXNpbmcgYXJyb3dzIGNhbiBjYXVzZSBpdCB0byBiZSB1bmJhbGFuY2VkKVxuICAgICAgICAgIC8vIHRoZW4gc2hvdyB0aGUgaGlkZGVuIG9uZXMgb24gdGhlIGxlZnRcbiAgICAgICAgICBpZiAoKGFjdGl2ZUluZGV4ID49IHN0ZXBzQXJyYXkubGVuZ3RoIC8gMiAmJiB0aGlzLl9sZWZ0SGlkZGVuID4gMCkgfHwgXG4gICAgICAgICAgICAgIChhY3RpdmVJbmRleCA8IHN0ZXBzQXJyYXkubGVuZ3RoIC8gMiAmJiB0aGlzLl9yaWdodEhpZGRlbiA9PT0gMCAmJiB0aGlzLl9sZWZ0SGlkZGVuID4gMCkpIHtcbiAgICAgICAgICAgIC8vIGxlZnRcbiAgICAgICAgICAgIHN0ZXBzQXJyYXlbdGhpcy5fbGVmdEhpZGRlbiAtIDFdLmRpc3BsYXlTdGVwID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaGlkZGVuU3RlcHMuc2hpZnQoKTtcbiAgICAgICAgICAgIHRoaXMuX2xlZnRIaWRkZW4tLTtcbiAgICAgICAgICAgIC8vIElmIG5vIG1vcmUgaGlkZGVuIHN0ZXBzIHRoZW4gaGlkZSBsZWZ0IGFycm93XG4gICAgICAgICAgICBpZiAodGhpcy5fbGVmdEhpZGRlbiA9PT0gMCkge1xuICAgICAgICAgICAgICB0aGlzLl9zaG93TGVmdEFycm93ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIGFueSBvbiB0aGUgcmlnaHQgaGlkZGVuIGFuZCBzaG93IHRoZW1cbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3JpZ2h0SGlkZGVuID4gMCkge1xuICAgICAgICAgICAgLy8gcmlnaHRcbiAgICAgICAgICAgIHN0ZXBzQXJyYXlbc3RlcHNBcnJheS5sZW5ndGggLSB0aGlzLl9yaWdodEhpZGRlbl0uZGlzcGxheVN0ZXAgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5oaWRkZW5TdGVwcy5wb3AoKTtcbiAgICAgICAgICAgIHRoaXMuX3JpZ2h0SGlkZGVuLS07XG4gICAgICAgICAgICAvLyBJZiBubyBtb3JlIGhpZGRlbiBzdGVwcyB0aGVuIGhpZGUgcmlnaHQgYXJyb3dcbiAgICAgICAgICAgIGlmICh0aGlzLl9yaWdodEhpZGRlbiA9PT0gMCkge1xuICAgICAgICAgICAgICB0aGlzLl9zaG93UmlnaHRBcnJvdyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyByZWNhbGN1bGF0ZSB0aGUgdG90YWwgd2lkdGggYmFzZWQgb24gYWRkaW5nIGJhY2sgaW4gYSBzdGVwXG4gICAgICAgICAgbGV0IG5ld1RvdFN0ZXBXaWR0aDogbnVtYmVyID0gMDtcbiAgICAgICAgICBmb3IgKGxldCBqOiBudW1iZXIgPSB0aGlzLmhpZGRlblN0ZXBzLmxlbmd0aDsgaiA8IHN0ZXBzQXJyYXkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIG5ld1RvdFN0ZXBXaWR0aCArPSBzdGVwc0FycmF5W2pdLndpZHRoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjdXJUb3RTdGVwV2lkdGggPSBuZXdUb3RTdGVwV2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gdG90YWxIaWRkZW4pIHtcbiAgICAgICAgICAvLyBuZWVkIHRvIGJyZWFrIG91dCBvZiBsb29wIGhlcmUgYmVjYXVzZSB0aGUgZmlyc3QgaW4gdGhlIGhpZGRlblxuICAgICAgICAgIC8vIGxpc3QgY2FuJ3QgZml0IGluIGN1cnJlbnQgd2luZG93IHNpemVcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElDYW5EaXNhYmxlLCBtaXhpbkRpc2FibGVkLCBJQ2FuRGlzYWJsZVJpcHBsZSwgbWl4aW5EaXNhYmxlUmlwcGxlIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuaW1wb3J0IHsgU3RlcFN0YXRlIH0gZnJvbSAnLi4vbmF2LXN0ZXAvbmF2LXN0ZXAuY29tcG9uZW50JztcblxuZXhwb3J0IGNsYXNzIFRkTmF2U3RlcEhlYWRlckJhc2Uge31cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkTmF2U3RlcEhlYWRlck1peGluQmFzZSA9IG1peGluRGlzYWJsZVJpcHBsZShtaXhpbkRpc2FibGVkKFRkTmF2U3RlcEhlYWRlckJhc2UpKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbmF2LXN0ZXAtaGVhZGVyJyxcbiAgaW5wdXRzOiBbJ2Rpc2FibGVSaXBwbGUnXSxcbiAgc3R5bGVVcmxzOiBbJy4vbmF2LXN0ZXAtaGVhZGVyLmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2LXN0ZXAtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGROYXZTdGVwSGVhZGVyQ29tcG9uZW50IGV4dGVuZHMgX1RkTmF2U3RlcEhlYWRlck1peGluQmFzZSBpbXBsZW1lbnRzIElDYW5EaXNhYmxlLCBJQ2FuRGlzYWJsZVJpcHBsZSB7XG5cbiAgLyoqXG4gICAqIFNob3VsZCBkaXNwbGF5IHRoZSBsaW5lIGFmdGVyIHRoZSBzdGVwXG4gICAqL1xuICBASW5wdXQoJ2Rpc3BsYXlMaW5lJykgZGlzcGxheUxpbmU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIE51bWJlciBhc3NpZ25lZCB0byBbVGROYXZTdGVwSGVhZGVyQ29tcG9uZW50XS5cbiAgICovXG4gIEBJbnB1dCgnbnVtYmVyJykgbnVtYmVyOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIGFjdGl2ZT86IGJvb2xlYW5cbiAgICogU2V0cyBmb3IgYWN0aXZlL2luYWN0aXZlIHN0YXRlcyBvbiBoZWFkZXIuXG4gICAqL1xuICBASW5wdXQoJ2FjdGl2ZScpIGFjdGl2ZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogc3RhdGU/OiBTdGVwU3RhdGUgb3IgWydub25lJyB8ICdyZXF1aXJlZCcgfCAnY29tcGxldGUnXVxuICAgKiBTZXRzIHN0eWxlcyBmb3Igc3RhdGUgb2YgaGVhZGVyLlxuICAgKiBEZWZhdWx0cyB0byBbU3RlcFN0YXRlLk5vbmUgfCAnbm9uZSddLlxuICAgKi9cbiAgQElucHV0KCdzdGF0ZScpIHN0YXRlOiBTdGVwU3RhdGUgPSBTdGVwU3RhdGUuTm9uZTtcblxuICAvKipcbiAgICogUmV0dXJucyAndHJ1ZScgaWYgW3N0YXRlXSBlcXVhbHMgdG8gW1N0ZXBTdGF0ZS5Db21wbGV0ZSB8ICdjb21wbGV0ZSddLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBpc0NvbXBsZXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBTdGVwU3RhdGUuQ29tcGxldGU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyAndHJ1ZScgaWYgW3N0YXRlXSBlcXVhbHMgdG8gW1N0ZXBTdGF0ZS5SZXF1aXJlZCB8ICdyZXF1aXJlZCddLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBpc1JlcXVpcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBTdGVwU3RhdGUuUmVxdWlyZWQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuXG5pbXBvcnQgeyBUZEhvcml6b250YWxTdGVwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9ob3Jpem9udGFsLW5hdi1zdGVwcGVyL2hvcml6b250YWwtbmF2LXN0ZXBwZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRkTmF2U3RlcENvbXBvbmVudCB9IGZyb20gJy4vbmF2LXN0ZXAvbmF2LXN0ZXAuY29tcG9uZW50JztcbmltcG9ydCB7IFRkTmF2U3RlcEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vbmF2LXN0ZXAtaGVhZGVyL25hdi1zdGVwLWhlYWRlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgIFBvcnRhbE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGRIb3Jpem9udGFsU3RlcHBlckNvbXBvbmVudCxcbiAgICBUZE5hdlN0ZXBDb21wb25lbnQsXG4gICAgVGROYXZTdGVwSGVhZGVyQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVGRIb3Jpem9udGFsU3RlcHBlckNvbXBvbmVudCxcbiAgICBUZE5hdlN0ZXBDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50TmF2U3RlcHBlck1vZHVsZSB7XG5cbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFTRTs7S0FFQzs7Z0JBVEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUV2Qiw4RUFBeUM7O2lCQUMxQzs7OztJQU9ELDBCQUFDO0NBWEQ7Ozs7OztBQ0ZBO0lBS0E7S0FhQzs7Z0JBYkEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRTt3QkFDWixtQkFBbUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxtQkFBbUI7cUJBQ3BCO2lCQUNGOztJQUdELDZCQUFDO0NBYkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7O0lBS0UsTUFBTyxNQUFNO0lBQ2IsVUFBVyxVQUFVO0lBQ3JCLFVBQVcsVUFBVTs7O0lBd0NyQiw0QkFBb0IsV0FBdUIsRUFDakMsTUFBYyxFQUNkLFNBQW9CLEVBQ3BCLGtCQUFxQztRQUgzQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUNqQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBaEN2QyxpQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixpQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLFlBQU8sR0FBWSxLQUFLLENBQUM7Ozs7OztRQWlCakIsVUFBSyxHQUFjLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFhaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFh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