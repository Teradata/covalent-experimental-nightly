import { Component, NgModule, ElementRef, HostBinding, Renderer2, ChangeDetectionStrategy, ChangeDetectorRef, Input, ContentChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
export { CovalentBreadcrumbsModule, TdBreadcrumbsComponent } from '@covalent/core/breadcrumbs';
export { CovalentTabSelectModule, TdTabSelectBase, _TdTabSelectMixinBase, TdTabSelectComponent, TdTabOptionBase, _TdTabOptionMixinBase, TdTabOptionComponent } from '@covalent/core/tab-select';
import { Router } from '@angular/router';
import { Subscription, Subject, fromEvent, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { mixinDisabled, mixinDisableRipple } from '@covalent/core/common';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { PortalModule } from '@angular/cdk/portal';
export { httpFactory, HTTP_CONFIG, HTTP_INTERCEPTOR_PROVIDER, CovalentHttpModule, TdURLRegExpInterceptorMatcher, TdHttpService, TdGET, TdPOST, TdPATCH, TdPUT, TdDELETE, TdHttp, TdHttpClient, TdParam, TdBody, TdResponse, TdQueryParams, mixinHttp } from '@covalent/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdRenameMeComponent {
    constructor() {
        // stub
    }
}
TdRenameMeComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-renameMe',
                template: "<a href=\"https://github.com/Teradata/covalent\"> Test Link </a>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
TdRenameMeComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class CovalentRenameMeModule {
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
const StepState = {
    None: 'none',
    Required: 'required',
    Complete: 'complete',
};
class TdNavStepComponent {
    /**
     * @param {?} _elementRef
     * @param {?} router
     * @param {?} _renderer
     * @param {?} _changeDetectorRef
     */
    constructor(_elementRef, router, _renderer, _changeDetectorRef) {
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
    isRequired() {
        return true;
    }
    /**
     * @return {?}
     */
    isComplete() {
        return true;
    }
    /**
     * @return {?}
     */
    get displayStep() {
        return this._displayStep;
    }
    /**
     * Whether to display the step or not
     * @param {?} shouldDisplay
     * @return {?}
     */
    set displayStep(shouldDisplay) {
        this._displayStep = shouldDisplay;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    get displayLine() {
        return this._displayLine;
    }
    /**
     * Whether to display the step or not
     * @param {?} shouldDisplay
     * @return {?}
     */
    set displayLine(shouldDisplay) {
        this._displayLine = shouldDisplay;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Whether step is active
     * @return {?}
     */
    get active() {
        return this._active;
    }
    /**
     * Width of the DOM element of the step
     * @return {?}
     */
    get width() {
        return this._width;
    }
    /**
     * Gets the display style of the crumb
     * @return {?}
     */
    get displayBinding() {
        // Set the display to none on the component, just in case the end user is hiding
        // and showing them instead of the component doing itself for reasons like responsive
        return this._displayStep ? undefined : 'none';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // set the width from the actual rendered DOM element
        Promise.resolve().then(() => {
            this._width = ((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().width;
            this._changeDetectorRef.markForCheck();
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Set this step to active if the step route and active route are the same
        if (this.router.url === this.routerLink) {
            this._active = true;
        }
    }
}
TdNavStepComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-nav-step, a[td-nav-step]',
                template: "<td-nav-step-header class=\"td-step-horizontal-header\"\n                [number]=\"number\"\n                [active]=\"active\"\n                [state]=\"state\"\n                [displayLine]=\"displayLine\">\n  <ng-template td-nav-step-header-label [ngIf]=\"true\"><ng-content></ng-content></ng-template>\n  <ng-template td-nav-step-header-sublabel class=\"td-nav-step-sublabel\" [ngIf]=\"sublabel\">{{sublabel}}</ng-template>\n</td-nav-step-header>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host .td-nav-step{height:48px;box-sizing:border-box;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:end;justify-content:flex-end}:host .td-nav-step ::ng-deep>*{margin:0 10px}"]
            }] }
];
/** @nocollapse */
TdNavStepComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Router },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
TdNavStepComponent.propDecorators = {
    routerLink: [{ type: Input, args: ['routerLink',] }],
    state: [{ type: Input, args: ['state',] }],
    sublabel: [{ type: Input, args: ['sublabel',] }],
    displayBinding: [{ type: HostBinding, args: ['style.display',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdHorizontalStepperComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _changeDetectorRef
     */
    constructor(_elementRef, _changeDetectorRef) {
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
    ngOnInit() {
        this._resizeSubscription = merge(fromEvent(window, 'resize').pipe(debounceTime(10)), this._widthSubject.asObservable().pipe(distinctUntilChanged())).subscribe(() => {
            if (!this._resizing) {
                this._resizing = true;
                setTimeout(() => {
                    this.displayWidthAvailableSteps();
                    this._resizing = false;
                    this._changeDetectorRef.markForCheck();
                }, 100);
            }
        });
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this._elementRef && this._elementRef.nativeElement) {
            this._widthSubject.next(this.nativeElementWidth);
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.setStepSettings();
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._resizeSubscription.unsubscribe();
    }
    /*
      * Current width of the element container
      */
    /**
     * @return {?}
     */
    get nativeElementWidth() {
        /** @type {?} */
        let element = ((/** @type {?} */ (this._elementRef.nativeElement)));
        // Need to take into account border, margin and padding that might be around all the crumbs
        /** @type {?} */
        let style = window.getComputedStyle(element);
        /** @type {?} */
        let borderLeft = parseInt(style.borderLeft, 10);
        /** @type {?} */
        let borderRight = parseInt(style.borderRight, 10);
        /** @type {?} */
        let marginLeft = parseInt(style.marginLeft, 10);
        /** @type {?} */
        let marginRight = parseInt(style.marginRight, 10);
        /** @type {?} */
        let paddingLeft = parseInt(style.paddingLeft, 10);
        /** @type {?} */
        let paddingRight = parseInt(style.paddingRight, 10);
        return element.getBoundingClientRect().width - borderLeft - borderRight - marginLeft - marginRight - paddingLeft - paddingRight;
    }
    /**
     * The total count of individual steps
     * @return {?}
     */
    get count() {
        return this._steps ? this._steps.length : 0;
    }
    /**
     * Should we show the left Arrow
     * @return {?}
     */
    get showLeftArrow() {
        return this._showLeftArrow;
    }
    /**
     * Should we show the right Arrow
     * @return {?}
     */
    get showRightArrow() {
        return this._showRightArrow;
    }
    /**
     * @return {?}
     */
    showHiddenLeftStep() {
        /** @type {?} */
        let stepsArray = this._steps.toArray();
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
    }
    /**
     * @return {?}
     */
    showHiddenRightStep() {
        /** @type {?} */
        let stepsArray = this._steps.toArray();
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
    }
    /**
     * Set the step line separators and display numbers
     * @return {?}
     */
    setStepSettings() {
        /** @type {?} */
        let stepsArray = this._steps.toArray();
        if (stepsArray.length > 0) {
            // don't show the icon on the last breadcrumb
            stepsArray[stepsArray.length - 1].displayLine = false;
        }
        // set the index number of the step so can display that number in circle
        stepsArray.forEach((step, index) => {
            step.number = index + 1;
        });
    }
    /**
     * @return {?}
     */
    displayWidthAvailableSteps() {
        /** @type {?} */
        let curTotStepWidth = 0;
        /** @type {?} */
        let stepsArray = this._steps.toArray();
        // calculate the current width of the shown steps
        for (let i = this.hiddenSteps.length; i < stepsArray.length; i++) {
            curTotStepWidth += stepsArray[i].width;
        }
        // get the active step index
        /** @type {?} */
        let activeIndex = stepsArray.findIndex((step) => {
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
            let totalHidden = this.hiddenSteps.length - 1;
            for (let i = totalHidden; i >= 0; i--) {
                /** @type {?} */
                let hiddenStepWidth = stepsArray[i].width;
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
                    let newTotStepWidth = 0;
                    for (let j = this.hiddenSteps.length; j < stepsArray.length; j++) {
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
    }
}
TdHorizontalStepperComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-horizontal-nav-stepper',
                template: "<span class=\"td-steps-header\">\n  <button *ngIf=\"showLeftArrow\" mat-icon-button (click)=\"showHiddenLeftStep()\">\n    <mat-icon>chevron_left</mat-icon>\n  </button>\n  <ng-content></ng-content>\n  <button *ngIf=\"showRightArrow\" mat-icon-button (click)=\"showHiddenRightStep()\">\n    <mat-icon>chevron_right</mat-icon>\n  </button>\n</span>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host .td-steps-header{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}"]
            }] }
];
/** @nocollapse */
TdHorizontalStepperComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
TdHorizontalStepperComponent.propDecorators = {
    _steps: [{ type: ContentChildren, args: [TdNavStepComponent,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdNavStepHeaderBase {
}
/* tslint:disable-next-line */
/** @type {?} */
const _TdNavStepHeaderMixinBase = mixinDisableRipple(mixinDisabled(TdNavStepHeaderBase));
class TdNavStepHeaderComponent extends _TdNavStepHeaderMixinBase {
    constructor() {
        super(...arguments);
        /**
         * state?: StepState or ['none' | 'required' | 'complete']
         * Sets styles for state of header.
         * Defaults to [StepState.None | 'none'].
         */
        this.state = StepState.None;
    }
    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     * @return {?}
     */
    isComplete() {
        return this.state === StepState.Complete;
    }
    /**
     * Returns 'true' if [state] equals to [StepState.Required | 'required'], else 'false'.
     * @return {?}
     */
    isRequired() {
        return this.state === StepState.Required;
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class CovalentNavStepperModule {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtZXhwZXJpbWVudGFsLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL3RlbXBsYXRlLXJlbmFtZS1tZS1leHBlcmltZW50LW1vZHVsZS9yZW5hbWUtbWUuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL3RlbXBsYXRlLXJlbmFtZS1tZS1leHBlcmltZW50LW1vZHVsZS9yZW5hbWUtbWUubW9kdWxlLnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL25hdi1zdGVwcGVyL25hdi1zdGVwL25hdi1zdGVwLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9uYXYtc3RlcHBlci9ob3Jpem9udGFsLW5hdi1zdGVwcGVyL2hvcml6b250YWwtbmF2LXN0ZXBwZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL25hdi1zdGVwcGVyL25hdi1zdGVwLWhlYWRlci9uYXYtc3RlcC1oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL25hdi1zdGVwcGVyL25hdi1zdGVwcGVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtcmVuYW1lTWUnLFxuICBzdHlsZVVybHM6IFsnLi9yZW5hbWUtbWUuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlbmFtZS1tZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkUmVuYW1lTWVDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIHN0dWJcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgVGRSZW5hbWVNZUNvbXBvbmVudCB9IGZyb20gJy4vcmVuYW1lLW1lLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRkUmVuYW1lTWVDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUZFJlbmFtZU1lQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudFJlbmFtZU1lTW9kdWxlIHtcblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBSZW5kZXJlcjIsXG4gICAgICAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5leHBvcnQgZW51bSBTdGVwU3RhdGUge1xuICBOb25lID0gJ25vbmUnLFxuICBSZXF1aXJlZCA9ICdyZXF1aXJlZCcsXG4gIENvbXBsZXRlID0gJ2NvbXBsZXRlJyxcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbmF2LXN0ZXAsIGFbdGQtbmF2LXN0ZXBdJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmF2LXN0ZXAuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdi1zdGVwLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkTmF2U3RlcENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBfZGlzcGxheVN0ZXA6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF9kaXNwbGF5TGluZTogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgX3dpZHRoOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9hY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvLyBOdW1iZXIgdG8gZGlzcGxheSBpbiBzdGVwIGhlYWRlclxuICBudW1iZXI6IG51bWJlcjtcblxuICAvKipcbiAgICogcm91dGVyTGluaz86IHN0cmluZ1xuICAgKiByb3V0ZXJMaW5rIHRvIG5hdmlnYXRlIHRvXG4gICAqIERlZmF1bHRzIHRvIGVtcHR5XG4gICAqL1xuICBASW5wdXQoJ3JvdXRlckxpbmsnKSByb3V0ZXJMaW5rOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIHN0YXRlPzogU3RlcFN0YXRlXG4gICAqIHN0YXRlIG9mIHN0ZXBcbiAgICogRGVmYXVsdHMgdG8gbm9uZVxuICAgKi9cbiAgQElucHV0KCdzdGF0ZScpIHN0YXRlOiBTdGVwU3RhdGUgPSBTdGVwU3RhdGUuTm9uZTtcblxuICAvKipcbiAgICogc3VibGFiZWw/OiBzdHJpbmdcbiAgICogU3VibGFiZWwgdG8gZGlzcGxheSBpbiBzdGVwIGhlYWRlclxuICAgKiBEZWZhdWx0cyB0byBlbXB0eVxuICAgKi9cbiAgQElucHV0KCdzdWJsYWJlbCcpIHN1YmxhYmVsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF0LWJ1dHRvbicpO1xuICB9XG5cbiAgaXNSZXF1aXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlzQ29tcGxldGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXQgZGlzcGxheVN0ZXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlTdGVwO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZGlzcGxheSB0aGUgc3RlcCBvciBub3RcbiAgICovXG4gIHNldCBkaXNwbGF5U3RlcChzaG91bGREaXNwbGF5OiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzcGxheVN0ZXAgPSBzaG91bGREaXNwbGF5O1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZ2V0IGRpc3BsYXlMaW5lKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5TGluZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGRpc3BsYXkgdGhlIHN0ZXAgb3Igbm90XG4gICAqL1xuICBzZXQgZGlzcGxheUxpbmUoc2hvdWxkRGlzcGxheTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc3BsYXlMaW5lID0gc2hvdWxkRGlzcGxheTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHN0ZXAgaXMgYWN0aXZlXG4gICAqL1xuICBnZXQgYWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XG4gIH1cblxuICAvKipcbiAgICogV2lkdGggb2YgdGhlIERPTSBlbGVtZW50IG9mIHRoZSBzdGVwXG4gICAqL1xuICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgZGlzcGxheSBzdHlsZSBvZiB0aGUgY3J1bWJcbiAgICovXG4gIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpXG4gIGdldCBkaXNwbGF5QmluZGluZygpOiBzdHJpbmcge1xuICAgIC8vIFNldCB0aGUgZGlzcGxheSB0byBub25lIG9uIHRoZSBjb21wb25lbnQsIGp1c3QgaW4gY2FzZSB0aGUgZW5kIHVzZXIgaXMgaGlkaW5nXG4gICAgLy8gYW5kIHNob3dpbmcgdGhlbSBpbnN0ZWFkIG9mIHRoZSBjb21wb25lbnQgZG9pbmcgaXRzZWxmIGZvciByZWFzb25zIGxpa2UgcmVzcG9uc2l2ZVxuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5U3RlcCA/IHVuZGVmaW5lZCA6ICdub25lJztcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAvLyBzZXQgdGhlIHdpZHRoIGZyb20gdGhlIGFjdHVhbCByZW5kZXJlZCBET00gZWxlbWVudFxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5fd2lkdGggPSAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIFNldCB0aGlzIHN0ZXAgdG8gYWN0aXZlIGlmIHRoZSBzdGVwIHJvdXRlIGFuZCBhY3RpdmUgcm91dGUgYXJlIHRoZSBzYW1lXG4gICAgaWYgKHRoaXMucm91dGVyLnVybCA9PT0gdGhpcy5yb3V0ZXJMaW5rKSB7XG4gICAgICB0aGlzLl9hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBPbkluaXQsIE9uRGVzdHJveSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFxuICAgICAgICAgQWZ0ZXJDb250ZW50SW5pdCwgRG9DaGVjaywgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgU3ViamVjdCwgZnJvbUV2ZW50LCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVGROYXZTdGVwQ29tcG9uZW50IH0gZnJvbSAnLi4vbmF2LXN0ZXAvbmF2LXN0ZXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtaG9yaXpvbnRhbC1uYXYtc3RlcHBlcicsXG4gIHN0eWxlVXJsczogWycuL2hvcml6b250YWwtbmF2LXN0ZXBwZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2hvcml6b250YWwtbmF2LXN0ZXBwZXIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRIb3Jpem9udGFsU3RlcHBlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRG9DaGVjaywgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9yZXNpemVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSBfd2lkdGhTdWJqZWN0OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG4gIHByaXZhdGUgX3Jlc2l6aW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3Nob3dMZWZ0QXJyb3c6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2hvd1JpZ2h0QXJyb3c6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbGVmdEhpZGRlbjogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfcmlnaHRIaWRkZW46IG51bWJlciA9IDA7XG5cbiAgLy8gYWxsIHRoZSBzdWIgY29tcG9uZW50cywgd2hpY2ggYXJlIHRoZSBpbmRpdmlkdWFsIHN0ZXBzXG4gIEBDb250ZW50Q2hpbGRyZW4oVGROYXZTdGVwQ29tcG9uZW50KSBfc3RlcHM6IFF1ZXJ5TGlzdDxUZE5hdlN0ZXBDb21wb25lbnQ+O1xuICAvLyB0aGUgbGlzdCBvZiBoaWRkZW4gc3RlcHMgbm90IHNob3duIHJpZ2h0IG5vdyAocmVzcG9uc2l2ZSlcbiAgaGlkZGVuU3RlcHM6IFRkTmF2U3RlcENvbXBvbmVudFtdID0gbmV3IEFycmF5KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZXNpemVTdWJzY3JpcHRpb24gPSBtZXJnZShcbiAgICAgIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKS5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMTApLFxuICAgICAgKSxcbiAgICAgIHRoaXMuX3dpZHRoU3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgKSxcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX3Jlc2l6aW5nKSB7XG4gICAgICAgIHRoaXMuX3Jlc2l6aW5nID0gdHJ1ZTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5V2lkdGhBdmFpbGFibGVTdGVwcygpO1xuICAgICAgICAgIHRoaXMuX3Jlc2l6aW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnRSZWYgJiYgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLl93aWR0aFN1YmplY3QubmV4dCh0aGlzLm5hdGl2ZUVsZW1lbnRXaWR0aCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0U3RlcFNldHRpbmdzKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZXNpemVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qXG4gICogQ3VycmVudCB3aWR0aCBvZiB0aGUgZWxlbWVudCBjb250YWluZXJcbiAgKi9cbiAgZ2V0IG5hdGl2ZUVsZW1lbnRXaWR0aCgpOiBudW1iZXIge1xuICAgIGxldCBlbGVtZW50OiBIVE1MRWxlbWVudCA9ICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcblxuICAgIC8vIE5lZWQgdG8gdGFrZSBpbnRvIGFjY291bnQgYm9yZGVyLCBtYXJnaW4gYW5kIHBhZGRpbmcgdGhhdCBtaWdodCBiZSBhcm91bmQgYWxsIHRoZSBjcnVtYnNcbiAgICBsZXQgc3R5bGU6IENTU1N0eWxlRGVjbGFyYXRpb24gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgICBsZXQgYm9yZGVyTGVmdDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUuYm9yZGVyTGVmdCwgMTApO1xuICAgIGxldCBib3JkZXJSaWdodDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUuYm9yZGVyUmlnaHQsIDEwKTtcbiAgICBsZXQgbWFyZ2luTGVmdDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUubWFyZ2luTGVmdCwgMTApO1xuICAgIGxldCBtYXJnaW5SaWdodDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUubWFyZ2luUmlnaHQsIDEwKTtcbiAgICBsZXQgcGFkZGluZ0xlZnQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLnBhZGRpbmdMZWZ0LCAxMCk7XG4gICAgbGV0IHBhZGRpbmdSaWdodDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUucGFkZGluZ1JpZ2h0LCAxMCk7XG5cbiAgICByZXR1cm4gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtIGJvcmRlckxlZnQgLSBib3JkZXJSaWdodCAtIG1hcmdpbkxlZnQgLSBtYXJnaW5SaWdodCAtIHBhZGRpbmdMZWZ0IC0gcGFkZGluZ1JpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0b3RhbCBjb3VudCBvZiBpbmRpdmlkdWFsIHN0ZXBzXG4gICAqL1xuICBnZXQgY291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3RlcHMgPyB0aGlzLl9zdGVwcy5sZW5ndGggOiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3VsZCB3ZSBzaG93IHRoZSBsZWZ0IEFycm93XG4gICAqL1xuICBnZXQgc2hvd0xlZnRBcnJvdygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0xlZnRBcnJvdztcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG91bGQgd2Ugc2hvdyB0aGUgcmlnaHQgQXJyb3dcbiAgICovXG4gIGdldCBzaG93UmlnaHRBcnJvdygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1JpZ2h0QXJyb3c7XG4gIH1cblxuICBwdWJsaWMgc2hvd0hpZGRlbkxlZnRTdGVwKCk6IHZvaWQge1xuICAgIGxldCBzdGVwc0FycmF5OiBUZE5hdlN0ZXBDb21wb25lbnRbXSA9IHRoaXMuX3N0ZXBzLnRvQXJyYXkoKTtcbiAgICAvLyBzaG93IHRoZSBsZWZ0IG9uZVxuICAgIHN0ZXBzQXJyYXlbdGhpcy5fbGVmdEhpZGRlbiAtIDFdLmRpc3BsYXlTdGVwID0gdHJ1ZTtcbiAgICB0aGlzLmhpZGRlblN0ZXBzLnNwbGljZSh0aGlzLl9sZWZ0SGlkZGVuIC0gMSwgMSk7XG4gICAgdGhpcy5fbGVmdEhpZGRlbi0tO1xuICAgIC8vIElmIG5vIG1vcmUgaGlkZGVuIHN0ZXBzIHRoZW4gaGlkZSBsZWZ0IGFycm93XG4gICAgaWYgKHRoaXMuX2xlZnRIaWRkZW4gPT09IDApIHtcbiAgICAgIHRoaXMuX3Nob3dMZWZ0QXJyb3cgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBoaWRlIHRoZSByaWdodCBvbmVcbiAgICBzdGVwc0FycmF5W3N0ZXBzQXJyYXkubGVuZ3RoIC0gKHRoaXMuX3JpZ2h0SGlkZGVuICsgMSldLmRpc3BsYXlTdGVwID0gZmFsc2U7XG4gICAgc3RlcHNBcnJheVtzdGVwc0FycmF5Lmxlbmd0aCAtICh0aGlzLl9yaWdodEhpZGRlbiArIDIpXS5kaXNwbGF5TGluZSA9IGZhbHNlO1xuICAgIHRoaXMuaGlkZGVuU3RlcHMucHVzaChzdGVwc0FycmF5W3N0ZXBzQXJyYXkubGVuZ3RoIC0gMV0pO1xuICAgIHRoaXMuX3JpZ2h0SGlkZGVuKys7XG5cbiAgICB0aGlzLl9zaG93UmlnaHRBcnJvdyA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgc2hvd0hpZGRlblJpZ2h0U3RlcCgpOiB2b2lkIHtcbiAgICBsZXQgc3RlcHNBcnJheTogVGROYXZTdGVwQ29tcG9uZW50W10gPSB0aGlzLl9zdGVwcy50b0FycmF5KCk7XG4gICAgLy8gc2hvdyB0aGUgcmlnaHQgb25lXG4gICAgc3RlcHNBcnJheVtzdGVwc0FycmF5Lmxlbmd0aCAtIHRoaXMuX3JpZ2h0SGlkZGVuXS5kaXNwbGF5U3RlcCA9IHRydWU7XG4gICAgc3RlcHNBcnJheVtzdGVwc0FycmF5Lmxlbmd0aCAtICh0aGlzLl9yaWdodEhpZGRlbiArIDEpXS5kaXNwbGF5TGluZSA9IHRydWU7XG4gICAgdGhpcy5oaWRkZW5TdGVwcy5wb3AoKTtcbiAgICB0aGlzLl9yaWdodEhpZGRlbi0tO1xuICAgIC8vIElmIG5vIG1vcmUgaGlkZGVuIHN0ZXBzIHRoZW4gaGlkZSByaWdodCBhcnJvd1xuICAgIGlmICh0aGlzLl9yaWdodEhpZGRlbiA9PT0gMCkge1xuICAgICAgdGhpcy5fc2hvd1JpZ2h0QXJyb3cgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBoaWRlIHRoZSBsZWZ0IG9uZVxuICAgIHN0ZXBzQXJyYXlbdGhpcy5fbGVmdEhpZGRlbl0uZGlzcGxheVN0ZXAgPSBmYWxzZTtcbiAgICB0aGlzLmhpZGRlblN0ZXBzLnB1c2goc3RlcHNBcnJheVt0aGlzLl9sZWZ0SGlkZGVuXSk7XG4gICAgdGhpcy5fbGVmdEhpZGRlbisrO1xuXG4gICAgdGhpcy5fc2hvd0xlZnRBcnJvdyA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBzdGVwIGxpbmUgc2VwYXJhdG9ycyBhbmQgZGlzcGxheSBudW1iZXJzXG4gICAqL1xuICBwcml2YXRlIHNldFN0ZXBTZXR0aW5ncygpOiB2b2lkIHtcbiAgICBsZXQgc3RlcHNBcnJheTogVGROYXZTdGVwQ29tcG9uZW50W10gPSB0aGlzLl9zdGVwcy50b0FycmF5KCk7XG4gICAgaWYgKHN0ZXBzQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgLy8gZG9uJ3Qgc2hvdyB0aGUgaWNvbiBvbiB0aGUgbGFzdCBicmVhZGNydW1iXG4gICAgICBzdGVwc0FycmF5W3N0ZXBzQXJyYXkubGVuZ3RoIC0gMV0uZGlzcGxheUxpbmUgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gc2V0IHRoZSBpbmRleCBudW1iZXIgb2YgdGhlIHN0ZXAgc28gY2FuIGRpc3BsYXkgdGhhdCBudW1iZXIgaW4gY2lyY2xlXG4gICAgc3RlcHNBcnJheS5mb3JFYWNoKChzdGVwOiBUZE5hdlN0ZXBDb21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHN0ZXAubnVtYmVyID0gaW5kZXggKyAxO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBkaXNwbGF5V2lkdGhBdmFpbGFibGVTdGVwcygpOiB2b2lkIHtcbiAgICBsZXQgY3VyVG90U3RlcFdpZHRoOiBudW1iZXIgPSAwO1xuICAgIGxldCBzdGVwc0FycmF5OiBUZE5hdlN0ZXBDb21wb25lbnRbXSA9IHRoaXMuX3N0ZXBzLnRvQXJyYXkoKTtcbiAgICAvLyBjYWxjdWxhdGUgdGhlIGN1cnJlbnQgd2lkdGggb2YgdGhlIHNob3duIHN0ZXBzXG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gdGhpcy5oaWRkZW5TdGVwcy5sZW5ndGg7IGkgPCBzdGVwc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjdXJUb3RTdGVwV2lkdGggKz0gc3RlcHNBcnJheVtpXS53aWR0aDtcbiAgICB9XG4gICAgLy8gZ2V0IHRoZSBhY3RpdmUgc3RlcCBpbmRleFxuICAgIGxldCBhY3RpdmVJbmRleDogbnVtYmVyID0gc3RlcHNBcnJheS5maW5kSW5kZXgoKHN0ZXA6IFRkTmF2U3RlcENvbXBvbmVudCkgPT4ge1xuICAgICAgcmV0dXJuIHN0ZXAuYWN0aXZlID09PSB0cnVlO1xuICAgIH0pO1xuICAgIC8vIGhpZGUgdGhlIGZpcnN0IHN0ZXAgaWYgd2luZG93IHNpemUgaXMgc21hbGxlciB0aGFuIGFsbCB0aGUgc3RlcCBzaXplc1xuICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnRXaWR0aCA8IGN1clRvdFN0ZXBXaWR0aCkge1xuICAgICAgLy8gZGV0ZXJtaW5lIGlmIHRoZSBhY3RpdmUgc3RlcCBpcyBpbiB0aGUgZmlyc3Qgb3Igc2Vjb25kIGhhbGYgb2YgdGhlIGxpc3RcbiAgICAgIC8vIGFuZCBjaGVjayB0aGF0IGFsbCB0aGUgbGVmdCBvbmVzIGFyZW4ndCBhbHJlYWR5IGhpZGRlbiAoMm5kIGNoZWNrIGFmdGVyICYmIGRvZXMgdGhhdClcbiAgICAgIC8vIGFuZCBoaWRlIG9uIHRoZSBvcHBvc2l0ZSBzaWRlIG9mIHRoYXRcbiAgICAgIGlmICgoYWN0aXZlSW5kZXggPj0gc3RlcHNBcnJheS5sZW5ndGggLyAyKSAmJiAodGhpcy5fbGVmdEhpZGRlbiA8IGFjdGl2ZUluZGV4KSkge1xuICAgICAgICAvLyBsZWZ0XG4gICAgICAgIHRoaXMuX3Nob3dSaWdodEFycm93ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3Nob3dMZWZ0QXJyb3cgPSB0cnVlO1xuICAgICAgICB0aGlzLl9sZWZ0SGlkZGVuKys7XG4gICAgICAgIHN0ZXBzQXJyYXlbdGhpcy5fbGVmdEhpZGRlbiAtIDFdLmRpc3BsYXlTdGVwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGlkZGVuU3RlcHMucHVzaChzdGVwc0FycmF5W3RoaXMuaGlkZGVuU3RlcHMubGVuZ3RoXSk7XG4gICAgICAvLyBDaGVjayB0byBzZWUgdGhhdCBhbGwgdGhlIHBvc3NpYmxlIG9uZXMgb24gdGhlIHJpZ2h0IGFyZW4ndCBhbHJlYWR5IGhpZGRlblxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9yaWdodEhpZGRlbiA8IHN0ZXBzQXJyYXkubGVuZ3RoIC0gYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgLy8gcmlnaHRcbiAgICAgICAgdGhpcy5fc2hvd1JpZ2h0QXJyb3cgPSB0cnVlO1xuICAgICAgICB0aGlzLl9zaG93TGVmdEFycm93ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3JpZ2h0SGlkZGVuKys7XG4gICAgICAgIHN0ZXBzQXJyYXlbc3RlcHNBcnJheS5sZW5ndGggLSB0aGlzLl9yaWdodEhpZGRlbl0uZGlzcGxheVN0ZXAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oaWRkZW5TdGVwcy5wdXNoKHN0ZXBzQXJyYXlbc3RlcHNBcnJheS5sZW5ndGggLSB0aGlzLl9yaWdodEhpZGRlbl0pO1xuICAgICAgfVxuICAgICAgdGhpcy5kaXNwbGF5V2lkdGhBdmFpbGFibGVTdGVwcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBsb29wIG92ZXIgYWxsIHRoZSBoaWRkZW4gc3RlcHMgYW5kIHNlZSBpZiBhZGRpbmcgdGhlbSBiYWNrIGluIHdpbGxcbiAgICAgIC8vIGZpdCBpbiB0aGUgY3VycmVudCB3aW5kb3cgc2l6ZVxuICAgICAgbGV0IHRvdGFsSGlkZGVuOiBudW1iZXIgPSB0aGlzLmhpZGRlblN0ZXBzLmxlbmd0aCAtIDE7XG4gICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSB0b3RhbEhpZGRlbjsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgbGV0IGhpZGRlblN0ZXBXaWR0aDogbnVtYmVyID0gc3RlcHNBcnJheVtpXS53aWR0aDtcbiAgICAgICAgaWYgKChjdXJUb3RTdGVwV2lkdGggKyBoaWRkZW5TdGVwV2lkdGgpIDwgdGhpcy5uYXRpdmVFbGVtZW50V2lkdGgpIHtcbiAgICAgICAgICAvLyBEZXRlcm1pbmUgaWYgdGhlIGFjdGl2ZSBzdGVwIGlzIGluIHRoZSBmaXJzdCBvciBzZWNvbmQgaGFsZiBvZiB0aGUgbGlzdFxuICAgICAgICAgIC8vIGFuZCBpZiBpdHMgcmlnaHQgYW5kIHRoZXJlIGFyZSBoaWRkZW4gbGVmdCBzdGVwc1xuICAgICAgICAgIC8vIG9yIGlmIGl0IGxlZnQgYW5kIHRoZXJlIGFyZSBubyByaWdodCBoaWRkZW4gb25lcyBhbmQgc29tZSBsZWZ0IGhpZGRlbiAodXNpbmcgYXJyb3dzIGNhbiBjYXVzZSBpdCB0byBiZSB1bmJhbGFuY2VkKVxuICAgICAgICAgIC8vIHRoZW4gc2hvdyB0aGUgaGlkZGVuIG9uZXMgb24gdGhlIGxlZnRcbiAgICAgICAgICBpZiAoKGFjdGl2ZUluZGV4ID49IHN0ZXBzQXJyYXkubGVuZ3RoIC8gMiAmJiB0aGlzLl9sZWZ0SGlkZGVuID4gMCkgfHwgXG4gICAgICAgICAgICAgIChhY3RpdmVJbmRleCA8IHN0ZXBzQXJyYXkubGVuZ3RoIC8gMiAmJiB0aGlzLl9yaWdodEhpZGRlbiA9PT0gMCAmJiB0aGlzLl9sZWZ0SGlkZGVuID4gMCkpIHtcbiAgICAgICAgICAgIC8vIGxlZnRcbiAgICAgICAgICAgIHN0ZXBzQXJyYXlbdGhpcy5fbGVmdEhpZGRlbiAtIDFdLmRpc3BsYXlTdGVwID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaGlkZGVuU3RlcHMuc2hpZnQoKTtcbiAgICAgICAgICAgIHRoaXMuX2xlZnRIaWRkZW4tLTtcbiAgICAgICAgICAgIC8vIElmIG5vIG1vcmUgaGlkZGVuIHN0ZXBzIHRoZW4gaGlkZSBsZWZ0IGFycm93XG4gICAgICAgICAgICBpZiAodGhpcy5fbGVmdEhpZGRlbiA9PT0gMCkge1xuICAgICAgICAgICAgICB0aGlzLl9zaG93TGVmdEFycm93ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIGFueSBvbiB0aGUgcmlnaHQgaGlkZGVuIGFuZCBzaG93IHRoZW1cbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3JpZ2h0SGlkZGVuID4gMCkge1xuICAgICAgICAgICAgLy8gcmlnaHRcbiAgICAgICAgICAgIHN0ZXBzQXJyYXlbc3RlcHNBcnJheS5sZW5ndGggLSB0aGlzLl9yaWdodEhpZGRlbl0uZGlzcGxheVN0ZXAgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5oaWRkZW5TdGVwcy5wb3AoKTtcbiAgICAgICAgICAgIHRoaXMuX3JpZ2h0SGlkZGVuLS07XG4gICAgICAgICAgICAvLyBJZiBubyBtb3JlIGhpZGRlbiBzdGVwcyB0aGVuIGhpZGUgcmlnaHQgYXJyb3dcbiAgICAgICAgICAgIGlmICh0aGlzLl9yaWdodEhpZGRlbiA9PT0gMCkge1xuICAgICAgICAgICAgICB0aGlzLl9zaG93UmlnaHRBcnJvdyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyByZWNhbGN1bGF0ZSB0aGUgdG90YWwgd2lkdGggYmFzZWQgb24gYWRkaW5nIGJhY2sgaW4gYSBzdGVwXG4gICAgICAgICAgbGV0IG5ld1RvdFN0ZXBXaWR0aDogbnVtYmVyID0gMDtcbiAgICAgICAgICBmb3IgKGxldCBqOiBudW1iZXIgPSB0aGlzLmhpZGRlblN0ZXBzLmxlbmd0aDsgaiA8IHN0ZXBzQXJyYXkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIG5ld1RvdFN0ZXBXaWR0aCArPSBzdGVwc0FycmF5W2pdLndpZHRoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjdXJUb3RTdGVwV2lkdGggPSBuZXdUb3RTdGVwV2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gdG90YWxIaWRkZW4pIHtcbiAgICAgICAgICAvLyBuZWVkIHRvIGJyZWFrIG91dCBvZiBsb29wIGhlcmUgYmVjYXVzZSB0aGUgZmlyc3QgaW4gdGhlIGhpZGRlblxuICAgICAgICAgIC8vIGxpc3QgY2FuJ3QgZml0IGluIGN1cnJlbnQgd2luZG93IHNpemVcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElDYW5EaXNhYmxlLCBtaXhpbkRpc2FibGVkLCBJQ2FuRGlzYWJsZVJpcHBsZSwgbWl4aW5EaXNhYmxlUmlwcGxlIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuaW1wb3J0IHsgU3RlcFN0YXRlIH0gZnJvbSAnLi4vbmF2LXN0ZXAvbmF2LXN0ZXAuY29tcG9uZW50JztcblxuZXhwb3J0IGNsYXNzIFRkTmF2U3RlcEhlYWRlckJhc2Uge31cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkTmF2U3RlcEhlYWRlck1peGluQmFzZSA9IG1peGluRGlzYWJsZVJpcHBsZShtaXhpbkRpc2FibGVkKFRkTmF2U3RlcEhlYWRlckJhc2UpKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbmF2LXN0ZXAtaGVhZGVyJyxcbiAgaW5wdXRzOiBbJ2Rpc2FibGVSaXBwbGUnXSxcbiAgc3R5bGVVcmxzOiBbJy4vbmF2LXN0ZXAtaGVhZGVyLmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2LXN0ZXAtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGROYXZTdGVwSGVhZGVyQ29tcG9uZW50IGV4dGVuZHMgX1RkTmF2U3RlcEhlYWRlck1peGluQmFzZSBpbXBsZW1lbnRzIElDYW5EaXNhYmxlLCBJQ2FuRGlzYWJsZVJpcHBsZSB7XG5cbiAgLyoqXG4gICAqIFNob3VsZCBkaXNwbGF5IHRoZSBsaW5lIGFmdGVyIHRoZSBzdGVwXG4gICAqL1xuICBASW5wdXQoJ2Rpc3BsYXlMaW5lJykgZGlzcGxheUxpbmU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIE51bWJlciBhc3NpZ25lZCB0byBbVGROYXZTdGVwSGVhZGVyQ29tcG9uZW50XS5cbiAgICovXG4gIEBJbnB1dCgnbnVtYmVyJykgbnVtYmVyOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIGFjdGl2ZT86IGJvb2xlYW5cbiAgICogU2V0cyBmb3IgYWN0aXZlL2luYWN0aXZlIHN0YXRlcyBvbiBoZWFkZXIuXG4gICAqL1xuICBASW5wdXQoJ2FjdGl2ZScpIGFjdGl2ZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogc3RhdGU/OiBTdGVwU3RhdGUgb3IgWydub25lJyB8ICdyZXF1aXJlZCcgfCAnY29tcGxldGUnXVxuICAgKiBTZXRzIHN0eWxlcyBmb3Igc3RhdGUgb2YgaGVhZGVyLlxuICAgKiBEZWZhdWx0cyB0byBbU3RlcFN0YXRlLk5vbmUgfCAnbm9uZSddLlxuICAgKi9cbiAgQElucHV0KCdzdGF0ZScpIHN0YXRlOiBTdGVwU3RhdGUgPSBTdGVwU3RhdGUuTm9uZTtcblxuICAvKipcbiAgICogUmV0dXJucyAndHJ1ZScgaWYgW3N0YXRlXSBlcXVhbHMgdG8gW1N0ZXBTdGF0ZS5Db21wbGV0ZSB8ICdjb21wbGV0ZSddLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBpc0NvbXBsZXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBTdGVwU3RhdGUuQ29tcGxldGU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyAndHJ1ZScgaWYgW3N0YXRlXSBlcXVhbHMgdG8gW1N0ZXBTdGF0ZS5SZXF1aXJlZCB8ICdyZXF1aXJlZCddLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBpc1JlcXVpcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBTdGVwU3RhdGUuUmVxdWlyZWQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuXG5pbXBvcnQgeyBUZEhvcml6b250YWxTdGVwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9ob3Jpem9udGFsLW5hdi1zdGVwcGVyL2hvcml6b250YWwtbmF2LXN0ZXBwZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRkTmF2U3RlcENvbXBvbmVudCB9IGZyb20gJy4vbmF2LXN0ZXAvbmF2LXN0ZXAuY29tcG9uZW50JztcbmltcG9ydCB7IFRkTmF2U3RlcEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vbmF2LXN0ZXAtaGVhZGVyL25hdi1zdGVwLWhlYWRlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgIFBvcnRhbE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGRIb3Jpem9udGFsU3RlcHBlckNvbXBvbmVudCxcbiAgICBUZE5hdlN0ZXBDb21wb25lbnQsXG4gICAgVGROYXZTdGVwSGVhZGVyQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVGRIb3Jpem9udGFsU3RlcHBlckNvbXBvbmVudCxcbiAgICBUZE5hdlN0ZXBDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50TmF2U3RlcHBlck1vZHVsZSB7XG5cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BT2EsbUJBQW1CO0lBRTlCOztLQUVDOzs7WUFURixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBRXZCLDhFQUF5Qzs7YUFDMUM7Ozs7Ozs7OztBQ05ELE1BZ0JhLHNCQUFzQjs7O1lBWGxDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osbUJBQW1CO2lCQUNwQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsbUJBQW1CO2lCQUNwQjthQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmRDs7SUFLRSxNQUFPLE1BQU07SUFDYixVQUFXLFVBQVU7SUFDckIsVUFBVyxVQUFVOztNQVNWLGtCQUFrQjs7Ozs7OztJQStCN0IsWUFBb0IsV0FBdUIsRUFDakMsTUFBYyxFQUNkLFNBQW9CLEVBQ3BCLGtCQUFxQztRQUgzQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUNqQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBaEN2QyxpQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixpQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLFlBQU8sR0FBWSxLQUFLLENBQUM7Ozs7OztRQWlCakIsVUFBSyxHQUFjLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFhaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7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