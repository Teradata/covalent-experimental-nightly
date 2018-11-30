import { Component, NgModule, ElementRef, HostBinding, Renderer2, ChangeDetectionStrategy, ChangeDetectorRef, Input, ContentChildren, Injectable, Injector, ɵReflectionCapabilities, Optional, SkipSelf, Self, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
export { CovalentBreadcrumbsModule, TdBreadcrumbsComponent } from '@covalent/core/breadcrumbs';
export { CovalentTabSelectModule, TdTabSelectBase, _TdTabSelectMixinBase, TdTabSelectComponent, TdTabOptionBase, _TdTabOptionMixinBase, TdTabOptionComponent } from '@covalent/core/tab-select';
import { Router } from '@angular/router';
import { Subscription, Subject, fromEvent, merge, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
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
/** @type {?} */
const NOOP_HTTP = of(undefined);
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
    const args = [];
    for (let i = 0; i < types.length; i++) {
        /** @type {?} */
        const arg = types[i];
        if (Array.isArray(arg)) {
            if (arg.length === 0) {
                throw new Error('Arguments array must have arguments.');
            }
            /** @type {?} */
            let type = undefined;
            /** @type {?} */
            let flags = 0 /* Default */;
            for (let j = 0; j < arg.length; j++) {
                /** @type {?} */
                const meta = arg[j];
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
    class HttpInternalClass extends base {
        /**
         * @param {?} _injector
         */
        constructor(_injector) {
            super(...injectArgs(new ɵReflectionCapabilities().parameters(base), _injector));
            this._injector = _injector;
            this.buildConfig();
        }
    }
    HttpInternalClass.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    HttpInternalClass.ctorParameters = () => [
        { type: Injector }
    ];
    /**
     * Actuall class being returned with all the hooks for http usage
     * @internal
     */
    return class extends HttpInternalClass {
        /**
         * @return {?}
         */
        get baseUrl() {
            return (typeof (this.basePath) === 'string' ?
                this.basePath.replace(/\/$/, '') : '') + this._baseUrl;
        }
        /**
         * Method used to setup the configuration parameters and get an instance of the http service
         * @return {?}
         */
        buildConfig() {
            this.http = this._injector.get(config.httpServiceType || HttpClient);
            this._baseUrl = config && config.baseUrl ? config.baseUrl.replace(/\/$/, '') : '';
            this._baseHeaders = config && config.baseHeaders ? config.baseHeaders : new HttpHeaders();
            this._defaultObserve = config && config.defaultObserve ? config.defaultObserve : 'body';
            this._defaultResponseType = config && config.defaultResponseType ? config.defaultResponseType : 'json';
        }
        /**
         * Method used to build the default headers using the base headers
         * @return {?}
         */
        buildHeaders() {
            /** @type {?} */
            let headersObj = {};
            this._baseHeaders.keys().forEach((key) => {
                headersObj[key] = this._baseHeaders.get(key);
            });
            return new HttpHeaders(headersObj);
        }
        /* tslint:disable-next-line */
        /**
         * @template HttpResponse
         * @param {?} method
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
        buildRequest(method, url, options) {
            return this._buildRequest(method, url, options);
        }
        /**
         * Method used to build the request depending on the `http` service and TdHttpMethod
         * @param {?} method
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
        _buildRequest(method, url, options = {}) {
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
                let headers = this.buildHeaders();
                if (options.headers instanceof HttpHeaders) {
                    ((/** @type {?} */ (options.headers))).keys().forEach((key) => {
                        headers = headers.set(key, ((/** @type {?} */ (options.headers))).get(key));
                    });
                }
                else {
                    for (let key in options.headers) {
                        headers = headers.set(key, (/** @type {?} */ (options.headers[key])));
                    }
                }
                options.headers = headers;
            }
            if (this.http instanceof HttpInterceptorService || this.http instanceof Http) {
                /** @type {?} */
                let headers = new Headers();
                ((/** @type {?} */ (options.headers))).keys().forEach((key) => {
                    headers.set(key, ((/** @type {?} */ (options.headers))).get(key));
                });
                /** @type {?} */
                let params = new URLSearchParams();
                if (options.params) {
                    if (options.params instanceof HttpParams) {
                        options.params.keys().forEach((key) => {
                            params.set(key, ((/** @type {?} */ (options.params))).get(key));
                        });
                    }
                    else {
                        for (let key in options.params) {
                            params.set(key, (/** @type {?} */ (options.params[key])));
                        }
                    }
                }
                /** @type {?} */
                let observable = ((/** @type {?} */ (this.http))).request(url, {
                    headers: headers,
                    method: method,
                    body: options.body ? options.body : undefined,
                    params: params,
                });
                if (options.observe === 'body') {
                    if (options.responseType === 'json') {
                        return (/** @type {?} */ (observable.pipe(map((response) => response.json()))));
                    }
                    else if (options.responseType === 'text') {
                        return (/** @type {?} */ (observable.pipe(map((response) => response.text()))));
                    }
                    else if (options.responseType === 'blob') {
                        return (/** @type {?} */ (observable.pipe(map((response) => response.blob()))));
                    }
                    else if (options.responseType === 'arraybuffer') {
                        return (/** @type {?} */ (observable.pipe(map((response) => response.arrayBuffer()))));
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
        }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const tdHttpRESTParam = Symbol('TdHttpRESTParam');
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
        let parameters = Reflect.getOwnMetadata(tdHttpRESTParam, target, propertyKey) || [];
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
    let queryParams = target;
    if (source instanceof HttpParams) {
        source.keys().forEach((key) => {
            // skip if value is undefined
            if (((/** @type {?} */ (source))).get(key) !== undefined) {
                queryParams = queryParams.set(key, ((/** @type {?} */ (source))).get(key));
            }
        });
    }
    else {
        for (let key in source) {
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
        let wrappedFunction = descriptor.value;
        // replace method call with our own and proxy it
        descriptor.value = function () {
            try {
                /** @type {?} */
                let replacedPath = config.path;
                /** @type {?} */
                let parameters = Reflect.getOwnMetadata(tdHttpRESTParam, target, propertyName);
                /** @type {?} */
                let newArgs = [];
                /** @type {?} */
                let body;
                /** @type {?} */
                let queryParams = new HttpParams();
                if (parameters) {
                    // map parameters and see which type they are to act on them
                    for (let parameter of parameters) {
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
                            let qParams = arguments[parameter.index];
                            if (config.options && config.options.params) {
                                queryParams = parseParams(queryParams, config.options.params);
                            }
                            if (qParams) {
                                queryParams = parseParams(queryParams, qParams);
                            }
                        }
                    }
                }
                // tslint:disable-next-line
                /** @type {?} */
                let url = this.baseUrl + replacedPath;
                /** @type {?} */
                let options = Object.assign({}, config.options, {
                    body: body,
                    params: queryParams,
                });
                // tslint:disable-next-line
                /** @type {?} */
                let request = this.buildRequest(config.method, url, options);
                if (parameters) {
                    // see which one was the response parameter so we can set the request observable
                    for (let parameter of parameters) {
                        if (parameter.type === 'response') {
                            newArgs[parameter.index] = request;
                        }
                    }
                }
                // tslint:disable-next-line
                /** @type {?} */
                let response = wrappedFunction.apply(this, newArgs);
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
        return class extends mixinHttp(constructor, config) {
        };
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtZXhwZXJpbWVudGFsLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL3RlbXBsYXRlLXJlbmFtZS1tZS1leHBlcmltZW50LW1vZHVsZS9yZW5hbWUtbWUuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL3RlbXBsYXRlLXJlbmFtZS1tZS1leHBlcmltZW50LW1vZHVsZS9yZW5hbWUtbWUubW9kdWxlLnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL25hdi1zdGVwcGVyL25hdi1zdGVwL25hdi1zdGVwLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9uYXYtc3RlcHBlci9ob3Jpem9udGFsLW5hdi1zdGVwcGVyL2hvcml6b250YWwtbmF2LXN0ZXBwZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL25hdi1zdGVwcGVyL25hdi1zdGVwLWhlYWRlci9uYXYtc3RlcC1oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL25hdi1zdGVwcGVyL25hdi1zdGVwcGVyLm1vZHVsZS50cyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9odHRwL2h0dHAubWl4aW4udHMiLCJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvaHR0cC9hY3Rpb25zL3BhcmFtcy9hYnN0cmFjdC1wYXJhbS5kZWNvcmF0b3IudHMiLCJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvaHR0cC9hY3Rpb25zL21ldGhvZHMvYWJzdHJhY3QtbWV0aG9kLmRlY29yYXRvci50cyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9odHRwL2FjdGlvbnMvbWV0aG9kcy9nZXQuZGVjb3JhdG9yLnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2h0dHAvYWN0aW9ucy9tZXRob2RzL3Bvc3QuZGVjb3JhdG9yLnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2h0dHAvYWN0aW9ucy9tZXRob2RzL3BhdGNoLmRlY29yYXRvci50cyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9odHRwL2FjdGlvbnMvbWV0aG9kcy9wdXQuZGVjb3JhdG9yLnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2h0dHAvYWN0aW9ucy9tZXRob2RzL2RlbGV0ZS5kZWNvcmF0b3IudHMiLCJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvaHR0cC9hY3Rpb25zL2NsYXNzL2h0dHAuZGVjb3JhdG9yLnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2h0dHAvYWN0aW9ucy9wYXJhbXMvcGFyYW0uZGVjb3JhdG9yLnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2h0dHAvYWN0aW9ucy9wYXJhbXMvYm9keS5kZWNvcmF0b3IudHMiLCJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvaHR0cC9hY3Rpb25zL3BhcmFtcy9yZXNwb25zZS5kZWNvcmF0b3IudHMiLCJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvaHR0cC9hY3Rpb25zL3BhcmFtcy9xdWVyeS1wYXJhbXMuZGVjb3JhdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1yZW5hbWVNZScsXG4gIHN0eWxlVXJsczogWycuL3JlbmFtZS1tZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVuYW1lLW1lLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRSZW5hbWVNZUNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gc3R1YlxuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBUZFJlbmFtZU1lQ29tcG9uZW50IH0gZnJvbSAnLi9yZW5hbWUtbWUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGRSZW5hbWVNZUNvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRkUmVuYW1lTWVDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50UmVuYW1lTWVNb2R1bGUge1xuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBBZnRlclZpZXdJbml0LCBPbkluaXQsIFJlbmRlcmVyMixcbiAgICAgICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmV4cG9ydCBlbnVtIFN0ZXBTdGF0ZSB7XG4gIE5vbmUgPSAnbm9uZScsXG4gIFJlcXVpcmVkID0gJ3JlcXVpcmVkJyxcbiAgQ29tcGxldGUgPSAnY29tcGxldGUnLFxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1uYXYtc3RlcCwgYVt0ZC1uYXYtc3RlcF0nLFxuICBzdHlsZVVybHM6IFsnLi9uYXYtc3RlcC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2LXN0ZXAuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGROYXZTdGVwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcblxuICBwcml2YXRlIF9kaXNwbGF5U3RlcDogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgX2Rpc3BsYXlMaW5lOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX2FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vIE51bWJlciB0byBkaXNwbGF5IGluIHN0ZXAgaGVhZGVyXG4gIG51bWJlcjogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiByb3V0ZXJMaW5rPzogc3RyaW5nXG4gICAqIHJvdXRlckxpbmsgdG8gbmF2aWdhdGUgdG9cbiAgICogRGVmYXVsdHMgdG8gZW1wdHlcbiAgICovXG4gIEBJbnB1dCgncm91dGVyTGluaycpIHJvdXRlckxpbms6IHN0cmluZztcblxuICAvKipcbiAgICogc3RhdGU/OiBTdGVwU3RhdGVcbiAgICogc3RhdGUgb2Ygc3RlcFxuICAgKiBEZWZhdWx0cyB0byBub25lXG4gICAqL1xuICBASW5wdXQoJ3N0YXRlJykgc3RhdGU6IFN0ZXBTdGF0ZSA9IFN0ZXBTdGF0ZS5Ob25lO1xuXG4gIC8qKlxuICAgKiBzdWJsYWJlbD86IHN0cmluZ1xuICAgKiBTdWJsYWJlbCB0byBkaXNwbGF5IGluIHN0ZXAgaGVhZGVyXG4gICAqIERlZmF1bHRzIHRvIGVtcHR5XG4gICAqL1xuICBASW5wdXQoJ3N1YmxhYmVsJykgc3VibGFiZWw6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXQtYnV0dG9uJyk7XG4gIH1cblxuICBpc1JlcXVpcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaXNDb21wbGV0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGdldCBkaXNwbGF5U3RlcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheVN0ZXA7XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciB0byBkaXNwbGF5IHRoZSBzdGVwIG9yIG5vdFxuICAgKi9cbiAgc2V0IGRpc3BsYXlTdGVwKHNob3VsZERpc3BsYXk6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNwbGF5U3RlcCA9IHNob3VsZERpc3BsYXk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBnZXQgZGlzcGxheUxpbmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlMaW5lO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZGlzcGxheSB0aGUgc3RlcCBvciBub3RcbiAgICovXG4gIHNldCBkaXNwbGF5TGluZShzaG91bGREaXNwbGF5OiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzcGxheUxpbmUgPSBzaG91bGREaXNwbGF5O1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgc3RlcCBpcyBhY3RpdmVcbiAgICovXG4gIGdldCBhY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaWR0aCBvZiB0aGUgRE9NIGVsZW1lbnQgb2YgdGhlIHN0ZXBcbiAgICovXG4gIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBkaXNwbGF5IHN0eWxlIG9mIHRoZSBjcnVtYlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JylcbiAgZ2V0IGRpc3BsYXlCaW5kaW5nKCk6IHN0cmluZyB7XG4gICAgLy8gU2V0IHRoZSBkaXNwbGF5IHRvIG5vbmUgb24gdGhlIGNvbXBvbmVudCwganVzdCBpbiBjYXNlIHRoZSBlbmQgdXNlciBpcyBoaWRpbmdcbiAgICAvLyBhbmQgc2hvd2luZyB0aGVtIGluc3RlYWQgb2YgdGhlIGNvbXBvbmVudCBkb2luZyBpdHNlbGYgZm9yIHJlYXNvbnMgbGlrZSByZXNwb25zaXZlXG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlTdGVwID8gdW5kZWZpbmVkIDogJ25vbmUnO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIC8vIHNldCB0aGUgd2lkdGggZnJvbSB0aGUgYWN0dWFsIHJlbmRlcmVkIERPTSBlbGVtZW50XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl93aWR0aCA9ICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gU2V0IHRoaXMgc3RlcCB0byBhY3RpdmUgaWYgdGhlIHN0ZXAgcm91dGUgYW5kIGFjdGl2ZSByb3V0ZSBhcmUgdGhlIHNhbWVcbiAgICBpZiAodGhpcy5yb3V0ZXIudXJsID09PSB0aGlzLnJvdXRlckxpbmspIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIE9uSW5pdCwgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgXG4gICAgICAgICBBZnRlckNvbnRlbnRJbml0LCBEb0NoZWNrLCBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBTdWJqZWN0LCBmcm9tRXZlbnQsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBUZE5hdlN0ZXBDb21wb25lbnQgfSBmcm9tICcuLi9uYXYtc3RlcC9uYXYtc3RlcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1ob3Jpem9udGFsLW5hdi1zdGVwcGVyJyxcbiAgc3R5bGVVcmxzOiBbJy4vaG9yaXpvbnRhbC1uYXYtc3RlcHBlci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9yaXpvbnRhbC1uYXYtc3RlcHBlci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZEhvcml6b250YWxTdGVwcGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBEb0NoZWNrLCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX3Jlc2l6ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIF93aWR0aFN1YmplY3Q6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcbiAgcHJpdmF0ZSBfcmVzaXppbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2hvd0xlZnRBcnJvdzogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9zaG93UmlnaHRBcnJvdzogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9sZWZ0SGlkZGVuOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9yaWdodEhpZGRlbjogbnVtYmVyID0gMDtcblxuICAvLyBhbGwgdGhlIHN1YiBjb21wb25lbnRzLCB3aGljaCBhcmUgdGhlIGluZGl2aWR1YWwgc3RlcHNcbiAgQENvbnRlbnRDaGlsZHJlbihUZE5hdlN0ZXBDb21wb25lbnQpIF9zdGVwczogUXVlcnlMaXN0PFRkTmF2U3RlcENvbXBvbmVudD47XG4gIC8vIHRoZSBsaXN0IG9mIGhpZGRlbiBzdGVwcyBub3Qgc2hvd24gcmlnaHQgbm93IChyZXNwb25zaXZlKVxuICBoaWRkZW5TdGVwczogVGROYXZTdGVwQ29tcG9uZW50W10gPSBuZXcgQXJyYXkoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3Jlc2l6ZVN1YnNjcmlwdGlvbiA9IG1lcmdlKFxuICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMCksXG4gICAgICApLFxuICAgICAgdGhpcy5fd2lkdGhTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICApLFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5fcmVzaXppbmcpIHtcbiAgICAgICAgdGhpcy5fcmVzaXppbmcgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXlXaWR0aEF2YWlsYWJsZVN0ZXBzKCk7XG4gICAgICAgICAgdGhpcy5fcmVzaXppbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudFJlZiAmJiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX3dpZHRoU3ViamVjdC5uZXh0KHRoaXMubmF0aXZlRWxlbWVudFdpZHRoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRTdGVwU2V0dGluZ3MoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3Jlc2l6ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLypcbiAgKiBDdXJyZW50IHdpZHRoIG9mIHRoZSBlbGVtZW50IGNvbnRhaW5lclxuICAqL1xuICBnZXQgbmF0aXZlRWxlbWVudFdpZHRoKCk6IG51bWJlciB7XG4gICAgbGV0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuXG4gICAgLy8gTmVlZCB0byB0YWtlIGludG8gYWNjb3VudCBib3JkZXIsIG1hcmdpbiBhbmQgcGFkZGluZyB0aGF0IG1pZ2h0IGJlIGFyb3VuZCBhbGwgdGhlIGNydW1ic1xuICAgIGxldCBzdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgIGxldCBib3JkZXJMZWZ0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5ib3JkZXJMZWZ0LCAxMCk7XG4gICAgbGV0IGJvcmRlclJpZ2h0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5ib3JkZXJSaWdodCwgMTApO1xuICAgIGxldCBtYXJnaW5MZWZ0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5tYXJnaW5MZWZ0LCAxMCk7XG4gICAgbGV0IG1hcmdpblJpZ2h0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5tYXJnaW5SaWdodCwgMTApO1xuICAgIGxldCBwYWRkaW5nTGVmdDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUucGFkZGluZ0xlZnQsIDEwKTtcbiAgICBsZXQgcGFkZGluZ1JpZ2h0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5wYWRkaW5nUmlnaHQsIDEwKTtcblxuICAgIHJldHVybiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC0gYm9yZGVyTGVmdCAtIGJvcmRlclJpZ2h0IC0gbWFyZ2luTGVmdCAtIG1hcmdpblJpZ2h0IC0gcGFkZGluZ0xlZnQgLSBwYWRkaW5nUmlnaHQ7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRvdGFsIGNvdW50IG9mIGluZGl2aWR1YWwgc3RlcHNcbiAgICovXG4gIGdldCBjb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zdGVwcyA/IHRoaXMuX3N0ZXBzLmxlbmd0aCA6IDA7XG4gIH1cblxuICAvKipcbiAgICogU2hvdWxkIHdlIHNob3cgdGhlIGxlZnQgQXJyb3dcbiAgICovXG4gIGdldCBzaG93TGVmdEFycm93KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93TGVmdEFycm93O1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3VsZCB3ZSBzaG93IHRoZSByaWdodCBBcnJvd1xuICAgKi9cbiAgZ2V0IHNob3dSaWdodEFycm93KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93UmlnaHRBcnJvdztcbiAgfVxuXG4gIHB1YmxpYyBzaG93SGlkZGVuTGVmdFN0ZXAoKTogdm9pZCB7XG4gICAgbGV0IHN0ZXBzQXJyYXk6IFRkTmF2U3RlcENvbXBvbmVudFtdID0gdGhpcy5fc3RlcHMudG9BcnJheSgpO1xuICAgIC8vIHNob3cgdGhlIGxlZnQgb25lXG4gICAgc3RlcHNBcnJheVt0aGlzLl9sZWZ0SGlkZGVuIC0gMV0uZGlzcGxheVN0ZXAgPSB0cnVlO1xuICAgIHRoaXMuaGlkZGVuU3RlcHMuc3BsaWNlKHRoaXMuX2xlZnRIaWRkZW4gLSAxLCAxKTtcbiAgICB0aGlzLl9sZWZ0SGlkZGVuLS07XG4gICAgLy8gSWYgbm8gbW9yZSBoaWRkZW4gc3RlcHMgdGhlbiBoaWRlIGxlZnQgYXJyb3dcbiAgICBpZiAodGhpcy5fbGVmdEhpZGRlbiA9PT0gMCkge1xuICAgICAgdGhpcy5fc2hvd0xlZnRBcnJvdyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGhpZGUgdGhlIHJpZ2h0IG9uZVxuICAgIHN0ZXBzQXJyYXlbc3RlcHNBcnJheS5sZW5ndGggLSAodGhpcy5fcmlnaHRIaWRkZW4gKyAxKV0uZGlzcGxheVN0ZXAgPSBmYWxzZTtcbiAgICBzdGVwc0FycmF5W3N0ZXBzQXJyYXkubGVuZ3RoIC0gKHRoaXMuX3JpZ2h0SGlkZGVuICsgMildLmRpc3BsYXlMaW5lID0gZmFsc2U7XG4gICAgdGhpcy5oaWRkZW5TdGVwcy5wdXNoKHN0ZXBzQXJyYXlbc3RlcHNBcnJheS5sZW5ndGggLSAxXSk7XG4gICAgdGhpcy5fcmlnaHRIaWRkZW4rKztcblxuICAgIHRoaXMuX3Nob3dSaWdodEFycm93ID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBzaG93SGlkZGVuUmlnaHRTdGVwKCk6IHZvaWQge1xuICAgIGxldCBzdGVwc0FycmF5OiBUZE5hdlN0ZXBDb21wb25lbnRbXSA9IHRoaXMuX3N0ZXBzLnRvQXJyYXkoKTtcbiAgICAvLyBzaG93IHRoZSByaWdodCBvbmVcbiAgICBzdGVwc0FycmF5W3N0ZXBzQXJyYXkubGVuZ3RoIC0gdGhpcy5fcmlnaHRIaWRkZW5dLmRpc3BsYXlTdGVwID0gdHJ1ZTtcbiAgICBzdGVwc0FycmF5W3N0ZXBzQXJyYXkubGVuZ3RoIC0gKHRoaXMuX3JpZ2h0SGlkZGVuICsgMSldLmRpc3BsYXlMaW5lID0gdHJ1ZTtcbiAgICB0aGlzLmhpZGRlblN0ZXBzLnBvcCgpO1xuICAgIHRoaXMuX3JpZ2h0SGlkZGVuLS07XG4gICAgLy8gSWYgbm8gbW9yZSBoaWRkZW4gc3RlcHMgdGhlbiBoaWRlIHJpZ2h0IGFycm93XG4gICAgaWYgKHRoaXMuX3JpZ2h0SGlkZGVuID09PSAwKSB7XG4gICAgICB0aGlzLl9zaG93UmlnaHRBcnJvdyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGhpZGUgdGhlIGxlZnQgb25lXG4gICAgc3RlcHNBcnJheVt0aGlzLl9sZWZ0SGlkZGVuXS5kaXNwbGF5U3RlcCA9IGZhbHNlO1xuICAgIHRoaXMuaGlkZGVuU3RlcHMucHVzaChzdGVwc0FycmF5W3RoaXMuX2xlZnRIaWRkZW5dKTtcbiAgICB0aGlzLl9sZWZ0SGlkZGVuKys7XG5cbiAgICB0aGlzLl9zaG93TGVmdEFycm93ID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHN0ZXAgbGluZSBzZXBhcmF0b3JzIGFuZCBkaXNwbGF5IG51bWJlcnNcbiAgICovXG4gIHByaXZhdGUgc2V0U3RlcFNldHRpbmdzKCk6IHZvaWQge1xuICAgIGxldCBzdGVwc0FycmF5OiBUZE5hdlN0ZXBDb21wb25lbnRbXSA9IHRoaXMuX3N0ZXBzLnRvQXJyYXkoKTtcbiAgICBpZiAoc3RlcHNBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBkb24ndCBzaG93IHRoZSBpY29uIG9uIHRoZSBsYXN0IGJyZWFkY3J1bWJcbiAgICAgIHN0ZXBzQXJyYXlbc3RlcHNBcnJheS5sZW5ndGggLSAxXS5kaXNwbGF5TGluZSA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBzZXQgdGhlIGluZGV4IG51bWJlciBvZiB0aGUgc3RlcCBzbyBjYW4gZGlzcGxheSB0aGF0IG51bWJlciBpbiBjaXJjbGVcbiAgICBzdGVwc0FycmF5LmZvckVhY2goKHN0ZXA6IFRkTmF2U3RlcENvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgc3RlcC5udW1iZXIgPSBpbmRleCArIDE7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGRpc3BsYXlXaWR0aEF2YWlsYWJsZVN0ZXBzKCk6IHZvaWQge1xuICAgIGxldCBjdXJUb3RTdGVwV2lkdGg6IG51bWJlciA9IDA7XG4gICAgbGV0IHN0ZXBzQXJyYXk6IFRkTmF2U3RlcENvbXBvbmVudFtdID0gdGhpcy5fc3RlcHMudG9BcnJheSgpO1xuICAgIC8vIGNhbGN1bGF0ZSB0aGUgY3VycmVudCB3aWR0aCBvZiB0aGUgc2hvd24gc3RlcHNcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSB0aGlzLmhpZGRlblN0ZXBzLmxlbmd0aDsgaSA8IHN0ZXBzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGN1clRvdFN0ZXBXaWR0aCArPSBzdGVwc0FycmF5W2ldLndpZHRoO1xuICAgIH1cbiAgICAvLyBnZXQgdGhlIGFjdGl2ZSBzdGVwIGluZGV4XG4gICAgbGV0IGFjdGl2ZUluZGV4OiBudW1iZXIgPSBzdGVwc0FycmF5LmZpbmRJbmRleCgoc3RlcDogVGROYXZTdGVwQ29tcG9uZW50KSA9PiB7XG4gICAgICByZXR1cm4gc3RlcC5hY3RpdmUgPT09IHRydWU7XG4gICAgfSk7XG4gICAgLy8gaGlkZSB0aGUgZmlyc3Qgc3RlcCBpZiB3aW5kb3cgc2l6ZSBpcyBzbWFsbGVyIHRoYW4gYWxsIHRoZSBzdGVwIHNpemVzXG4gICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudFdpZHRoIDwgY3VyVG90U3RlcFdpZHRoKSB7XG4gICAgICAvLyBkZXRlcm1pbmUgaWYgdGhlIGFjdGl2ZSBzdGVwIGlzIGluIHRoZSBmaXJzdCBvciBzZWNvbmQgaGFsZiBvZiB0aGUgbGlzdFxuICAgICAgLy8gYW5kIGNoZWNrIHRoYXQgYWxsIHRoZSBsZWZ0IG9uZXMgYXJlbid0IGFscmVhZHkgaGlkZGVuICgybmQgY2hlY2sgYWZ0ZXIgJiYgZG9lcyB0aGF0KVxuICAgICAgLy8gYW5kIGhpZGUgb24gdGhlIG9wcG9zaXRlIHNpZGUgb2YgdGhhdFxuICAgICAgaWYgKChhY3RpdmVJbmRleCA+PSBzdGVwc0FycmF5Lmxlbmd0aCAvIDIpICYmICh0aGlzLl9sZWZ0SGlkZGVuIDwgYWN0aXZlSW5kZXgpKSB7XG4gICAgICAgIC8vIGxlZnRcbiAgICAgICAgdGhpcy5fc2hvd1JpZ2h0QXJyb3cgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc2hvd0xlZnRBcnJvdyA9IHRydWU7XG4gICAgICAgIHRoaXMuX2xlZnRIaWRkZW4rKztcbiAgICAgICAgc3RlcHNBcnJheVt0aGlzLl9sZWZ0SGlkZGVuIC0gMV0uZGlzcGxheVN0ZXAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oaWRkZW5TdGVwcy5wdXNoKHN0ZXBzQXJyYXlbdGhpcy5oaWRkZW5TdGVwcy5sZW5ndGhdKTtcbiAgICAgIC8vIENoZWNrIHRvIHNlZSB0aGF0IGFsbCB0aGUgcG9zc2libGUgb25lcyBvbiB0aGUgcmlnaHQgYXJlbid0IGFscmVhZHkgaGlkZGVuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3JpZ2h0SGlkZGVuIDwgc3RlcHNBcnJheS5sZW5ndGggLSBhY3RpdmVJbmRleCkge1xuICAgICAgICAvLyByaWdodFxuICAgICAgICB0aGlzLl9zaG93UmlnaHRBcnJvdyA9IHRydWU7XG4gICAgICAgIHRoaXMuX3Nob3dMZWZ0QXJyb3cgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcmlnaHRIaWRkZW4rKztcbiAgICAgICAgc3RlcHNBcnJheVtzdGVwc0FycmF5Lmxlbmd0aCAtIHRoaXMuX3JpZ2h0SGlkZGVuXS5kaXNwbGF5U3RlcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhpZGRlblN0ZXBzLnB1c2goc3RlcHNBcnJheVtzdGVwc0FycmF5Lmxlbmd0aCAtIHRoaXMuX3JpZ2h0SGlkZGVuXSk7XG4gICAgICB9XG4gICAgICB0aGlzLmRpc3BsYXlXaWR0aEF2YWlsYWJsZVN0ZXBzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGxvb3Agb3ZlciBhbGwgdGhlIGhpZGRlbiBzdGVwcyBhbmQgc2VlIGlmIGFkZGluZyB0aGVtIGJhY2sgaW4gd2lsbFxuICAgICAgLy8gZml0IGluIHRoZSBjdXJyZW50IHdpbmRvdyBzaXplXG4gICAgICBsZXQgdG90YWxIaWRkZW46IG51bWJlciA9IHRoaXMuaGlkZGVuU3RlcHMubGVuZ3RoIC0gMTtcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IHRvdGFsSGlkZGVuOyBpID49IDA7IGktLSkge1xuICAgICAgICBsZXQgaGlkZGVuU3RlcFdpZHRoOiBudW1iZXIgPSBzdGVwc0FycmF5W2ldLndpZHRoO1xuICAgICAgICBpZiAoKGN1clRvdFN0ZXBXaWR0aCArIGhpZGRlblN0ZXBXaWR0aCkgPCB0aGlzLm5hdGl2ZUVsZW1lbnRXaWR0aCkge1xuICAgICAgICAgIC8vIERldGVybWluZSBpZiB0aGUgYWN0aXZlIHN0ZXAgaXMgaW4gdGhlIGZpcnN0IG9yIHNlY29uZCBoYWxmIG9mIHRoZSBsaXN0XG4gICAgICAgICAgLy8gYW5kIGlmIGl0cyByaWdodCBhbmQgdGhlcmUgYXJlIGhpZGRlbiBsZWZ0IHN0ZXBzXG4gICAgICAgICAgLy8gb3IgaWYgaXQgbGVmdCBhbmQgdGhlcmUgYXJlIG5vIHJpZ2h0IGhpZGRlbiBvbmVzIGFuZCBzb21lIGxlZnQgaGlkZGVuICh1c2luZyBhcnJvd3MgY2FuIGNhdXNlIGl0IHRvIGJlIHVuYmFsYW5jZWQpXG4gICAgICAgICAgLy8gdGhlbiBzaG93IHRoZSBoaWRkZW4gb25lcyBvbiB0aGUgbGVmdFxuICAgICAgICAgIGlmICgoYWN0aXZlSW5kZXggPj0gc3RlcHNBcnJheS5sZW5ndGggLyAyICYmIHRoaXMuX2xlZnRIaWRkZW4gPiAwKSB8fCBcbiAgICAgICAgICAgICAgKGFjdGl2ZUluZGV4IDwgc3RlcHNBcnJheS5sZW5ndGggLyAyICYmIHRoaXMuX3JpZ2h0SGlkZGVuID09PSAwICYmIHRoaXMuX2xlZnRIaWRkZW4gPiAwKSkge1xuICAgICAgICAgICAgLy8gbGVmdFxuICAgICAgICAgICAgc3RlcHNBcnJheVt0aGlzLl9sZWZ0SGlkZGVuIC0gMV0uZGlzcGxheVN0ZXAgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5oaWRkZW5TdGVwcy5zaGlmdCgpO1xuICAgICAgICAgICAgdGhpcy5fbGVmdEhpZGRlbi0tO1xuICAgICAgICAgICAgLy8gSWYgbm8gbW9yZSBoaWRkZW4gc3RlcHMgdGhlbiBoaWRlIGxlZnQgYXJyb3dcbiAgICAgICAgICAgIGlmICh0aGlzLl9sZWZ0SGlkZGVuID09PSAwKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Nob3dMZWZ0QXJyb3cgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBhcmUgYW55IG9uIHRoZSByaWdodCBoaWRkZW4gYW5kIHNob3cgdGhlbVxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fcmlnaHRIaWRkZW4gPiAwKSB7XG4gICAgICAgICAgICAvLyByaWdodFxuICAgICAgICAgICAgc3RlcHNBcnJheVtzdGVwc0FycmF5Lmxlbmd0aCAtIHRoaXMuX3JpZ2h0SGlkZGVuXS5kaXNwbGF5U3RlcCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmhpZGRlblN0ZXBzLnBvcCgpO1xuICAgICAgICAgICAgdGhpcy5fcmlnaHRIaWRkZW4tLTtcbiAgICAgICAgICAgIC8vIElmIG5vIG1vcmUgaGlkZGVuIHN0ZXBzIHRoZW4gaGlkZSByaWdodCBhcnJvd1xuICAgICAgICAgICAgaWYgKHRoaXMuX3JpZ2h0SGlkZGVuID09PSAwKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Nob3dSaWdodEFycm93ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHJlY2FsY3VsYXRlIHRoZSB0b3RhbCB3aWR0aCBiYXNlZCBvbiBhZGRpbmcgYmFjayBpbiBhIHN0ZXBcbiAgICAgICAgICBsZXQgbmV3VG90U3RlcFdpZHRoOiBudW1iZXIgPSAwO1xuICAgICAgICAgIGZvciAobGV0IGo6IG51bWJlciA9IHRoaXMuaGlkZGVuU3RlcHMubGVuZ3RoOyBqIDwgc3RlcHNBcnJheS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbmV3VG90U3RlcFdpZHRoICs9IHN0ZXBzQXJyYXlbal0ud2lkdGg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGN1clRvdFN0ZXBXaWR0aCA9IG5ld1RvdFN0ZXBXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSB0b3RhbEhpZGRlbikge1xuICAgICAgICAgIC8vIG5lZWQgdG8gYnJlYWsgb3V0IG9mIGxvb3AgaGVyZSBiZWNhdXNlIHRoZSBmaXJzdCBpbiB0aGUgaGlkZGVuXG4gICAgICAgICAgLy8gbGlzdCBjYW4ndCBmaXQgaW4gY3VycmVudCB3aW5kb3cgc2l6ZVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSUNhbkRpc2FibGUsIG1peGluRGlzYWJsZWQsIElDYW5EaXNhYmxlUmlwcGxlLCBtaXhpbkRpc2FibGVSaXBwbGUgfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5pbXBvcnQgeyBTdGVwU3RhdGUgfSBmcm9tICcuLi9uYXYtc3RlcC9uYXYtc3RlcC5jb21wb25lbnQnO1xuXG5leHBvcnQgY2xhc3MgVGROYXZTdGVwSGVhZGVyQmFzZSB7fVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGROYXZTdGVwSGVhZGVyTWl4aW5CYXNlID0gbWl4aW5EaXNhYmxlUmlwcGxlKG1peGluRGlzYWJsZWQoVGROYXZTdGVwSGVhZGVyQmFzZSkpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1uYXYtc3RlcC1oZWFkZXInLFxuICBpbnB1dHM6IFsnZGlzYWJsZVJpcHBsZSddLFxuICBzdHlsZVVybHM6IFsnLi9uYXYtc3RlcC1oZWFkZXIuY29tcG9uZW50LnNjc3MnIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYtc3RlcC1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZE5hdlN0ZXBIZWFkZXJDb21wb25lbnQgZXh0ZW5kcyBfVGROYXZTdGVwSGVhZGVyTWl4aW5CYXNlIGltcGxlbWVudHMgSUNhbkRpc2FibGUsIElDYW5EaXNhYmxlUmlwcGxlIHtcblxuICAvKipcbiAgICogU2hvdWxkIGRpc3BsYXkgdGhlIGxpbmUgYWZ0ZXIgdGhlIHN0ZXBcbiAgICovXG4gIEBJbnB1dCgnZGlzcGxheUxpbmUnKSBkaXNwbGF5TGluZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogTnVtYmVyIGFzc2lnbmVkIHRvIFtUZE5hdlN0ZXBIZWFkZXJDb21wb25lbnRdLlxuICAgKi9cbiAgQElucHV0KCdudW1iZXInKSBudW1iZXI6IG51bWJlcjtcblxuICAvKipcbiAgICogYWN0aXZlPzogYm9vbGVhblxuICAgKiBTZXRzIGZvciBhY3RpdmUvaW5hY3RpdmUgc3RhdGVzIG9uIGhlYWRlci5cbiAgICovXG4gIEBJbnB1dCgnYWN0aXZlJykgYWN0aXZlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBzdGF0ZT86IFN0ZXBTdGF0ZSBvciBbJ25vbmUnIHwgJ3JlcXVpcmVkJyB8ICdjb21wbGV0ZSddXG4gICAqIFNldHMgc3R5bGVzIGZvciBzdGF0ZSBvZiBoZWFkZXIuXG4gICAqIERlZmF1bHRzIHRvIFtTdGVwU3RhdGUuTm9uZSB8ICdub25lJ10uXG4gICAqL1xuICBASW5wdXQoJ3N0YXRlJykgc3RhdGU6IFN0ZXBTdGF0ZSA9IFN0ZXBTdGF0ZS5Ob25lO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zICd0cnVlJyBpZiBbc3RhdGVdIGVxdWFscyB0byBbU3RlcFN0YXRlLkNvbXBsZXRlIHwgJ2NvbXBsZXRlJ10sIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIGlzQ29tcGxldGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IFN0ZXBTdGF0ZS5Db21wbGV0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zICd0cnVlJyBpZiBbc3RhdGVdIGVxdWFscyB0byBbU3RlcFN0YXRlLlJlcXVpcmVkIHwgJ3JlcXVpcmVkJ10sIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIGlzUmVxdWlyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IFN0ZXBTdGF0ZS5SZXF1aXJlZDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRSaXBwbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuaW1wb3J0IHsgUG9ydGFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5cbmltcG9ydCB7IFRkSG9yaXpvbnRhbFN0ZXBwZXJDb21wb25lbnQgfSBmcm9tICcuL2hvcml6b250YWwtbmF2LXN0ZXBwZXIvaG9yaXpvbnRhbC1uYXYtc3RlcHBlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGROYXZTdGVwQ29tcG9uZW50IH0gZnJvbSAnLi9uYXYtc3RlcC9uYXYtc3RlcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGROYXZTdGVwSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uYXYtc3RlcC1oZWFkZXIvbmF2LXN0ZXAtaGVhZGVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRSaXBwbGVNb2R1bGUsXG4gICAgUG9ydGFsTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUZEhvcml6b250YWxTdGVwcGVyQ29tcG9uZW50LFxuICAgIFRkTmF2U3RlcENvbXBvbmVudCxcbiAgICBUZE5hdlN0ZXBIZWFkZXJDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUZEhvcml6b250YWxTdGVwcGVyQ29tcG9uZW50LFxuICAgIFRkTmF2U3RlcENvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnROYXZTdGVwcGVyTW9kdWxlIHtcblxufVxuIiwiaW1wb3J0IHsgVHlwZSwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIMOJwrVSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzLCBJbmplY3RGbGFncywgT3B0aW9uYWwsXG4gIFNraXBTZWxmLCBTZWxmLCBJbmplY3QsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzLCBVUkxTZWFyY2hQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEh0dHBJbnRlcmNlcHRvclNlcnZpY2UgfSBmcm9tICdAY292YWxlbnQvaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCB0eXBlIFRkSHR0cE1ldGhvZCA9ICdHRVQnIHwgJ1BPU1QnIHwgJ1BBVENIJyB8ICdERUxFVEUnIHwgJ0hFQUQnIHwgJ1BVVCcgfCAnT1BUSU9OUyc7XG5cbmV4cG9ydCB0eXBlIFRkSHR0cFJFU1RSZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuXG5leHBvcnQgdHlwZSBUZEh0dHBSRVNUT2JzZXJ2ZSA9ICdib2R5JyB8ICdyZXNwb25zZScgfCAnZXZlbnRzJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRIdHRwUkVTVENvbmZpZyB7XG4gIGJhc2VIZWFkZXJzPzogSHR0cEhlYWRlcnM7XG4gIGJhc2VVcmw6IHN0cmluZztcbiAgZGVmYXVsdE9ic2VydmU/OiBUZEh0dHBSRVNUT2JzZXJ2ZTtcbiAgZGVmYXVsdFJlc3BvbnNlVHlwZT86IFRkSHR0cFJFU1RSZXNwb25zZVR5cGU7XG4gIGh0dHBTZXJ2aWNlVHlwZT86IFR5cGU8SHR0cCB8IEh0dHBDbGllbnQgfCBIdHRwSW50ZXJjZXB0b3JTZXJ2aWNlPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRIdHRwUkVTVE9wdGlvbnMge1xuICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XG4gICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gIH07XG4gIG9ic2VydmU/OiBUZEh0dHBSRVNUT2JzZXJ2ZTtcbiAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcbiAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICB9O1xuICByZXNwb25zZVR5cGU/OiBUZEh0dHBSRVNUUmVzcG9uc2VUeXBlO1xuICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkSHR0cFJFU1RPcHRpb25zV2l0aEJvZHkgZXh0ZW5kcyBJVGRIdHRwUkVTVE9wdGlvbnMge1xuICBib2R5PzogYW55O1xufVxuXG5leHBvcnQgY29uc3QgTk9PUF9IVFRQOiBPYnNlcnZhYmxlPGFueT4gPSBvZih1bmRlZmluZWQpO1xuXG50eXBlIENvbnN0cnVjdG9yPFQ+ID0gbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gVDtcblxuLyoqXG4gKiBETyBOT1QgTU9ESUZZXG4gKiBUYWtlbiBmcm9tIGFuZ3VsYXIgc2luY2UgdGhleSBkb250IGV4cG9zZSB0aGlzIGZ1bmN0aW9uXG4gKiBUaGlzIGlzIHVzZWQgaW50ZXJuYWxseSB0byBpbmplY3Qgc2VydmljZXMgZnJvbSB0aGUgY29uc3RydWN0b3Igb2YgdGhlIGJhc2Ugc2VydmljZSB1c2luZyB0aGUgbWl4aW5IdHRwXG4gKiBAaW50ZXJuYWxcbiAqL1xuZnVuY3Rpb24gaW5qZWN0QXJncyh0eXBlczogKFR5cGU8YW55PnwgSW5qZWN0aW9uVG9rZW48YW55PnwgYW55W10pW10sIGluamVjdG9yOiBJbmplY3Rvcik6IGFueVtdIHtcbiAgY29uc3QgYXJnczogYW55W10gPSBbXTtcbiAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHR5cGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYXJnOiBhbnkgPSB0eXBlc1tpXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG4gICAgICBpZiAoYXJnLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FyZ3VtZW50cyBhcnJheSBtdXN0IGhhdmUgYXJndW1lbnRzLicpO1xuICAgICAgfVxuICAgICAgbGV0IHR5cGU6IFR5cGU8YW55Pnx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgICBsZXQgZmxhZ3M6IEluamVjdEZsYWdzID0gSW5qZWN0RmxhZ3MuRGVmYXVsdDtcblxuICAgICAgZm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IGFyZy5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBtZXRhOiBhbnkgPSBhcmdbal07XG4gICAgICAgIGlmIChtZXRhIGluc3RhbmNlb2YgT3B0aW9uYWwgfHwgbWV0YS5uZ01ldGFkYXRhTmFtZSA9PT0gJ09wdGlvbmFsJykge1xuICAgICAgICAgIC8qIHRzbGludDpkaXNhYmxlICovXG4gICAgICAgICAgZmxhZ3MgfD0gSW5qZWN0RmxhZ3MuT3B0aW9uYWw7XG4gICAgICAgIH0gZWxzZSBpZiAobWV0YSBpbnN0YW5jZW9mIFNraXBTZWxmIHx8IG1ldGEubmdNZXRhZGF0YU5hbWUgPT09ICdTa2lwU2VsZicpIHtcbiAgICAgICAgICBmbGFncyB8PSBJbmplY3RGbGFncy5Ta2lwU2VsZjtcbiAgICAgICAgfSBlbHNlIGlmIChtZXRhIGluc3RhbmNlb2YgU2VsZiB8fCBtZXRhLm5nTWV0YWRhdGFOYW1lID09PSAnU2VsZicpIHtcbiAgICAgICAgICBmbGFncyB8PSBJbmplY3RGbGFncy5TZWxmO1xuICAgICAgICB9IGVsc2UgaWYgKG1ldGEgaW5zdGFuY2VvZiBJbmplY3QpIHtcbiAgICAgICAgICB0eXBlID0gbWV0YS50b2tlbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0eXBlID0gbWV0YTtcbiAgICAgICAgfVxuICAgICAgICAvKiB0c2xpbnQ6ZW5hYmxlICovXG4gICAgICB9XG5cbiAgICAgIGFyZ3MucHVzaChpbmplY3Rvci5nZXQodHlwZSAhLCBmbGFncykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcmdzLnB1c2goaW5qZWN0b3IuZ2V0KGFyZykpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJncztcbn1cblxuLyoqIFxuICogTWl4aW4gdG8gYXVnbWVudCBhIHNlcnZpY2Ugd2l0aCBodHRwIGhlbHBlcnMuXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1peGluSHR0cChiYXNlOiBhbnksIGNvbmZpZzogSVRkSHR0cFJFU1RDb25maWcpOiBDb25zdHJ1Y3Rvcjxhbnk+IHtcbiAgLyoqXG4gICAqIEludGVybmFsIGNsYXNzIHVzZWQgdG8gZ2V0IGFuIGluc3RhbmNlIG9mIEluamVjdG9yIGZvciBpbnRlcm5hbCB1c2FnZSBwbHVzIGFsc29cbiAgICogYSB3YXkgdG8gaW5qZWN0IHNlcnZpY2VzIGZyb20gdGhlIGNvbnN0cnVjdG9yIG9mIHRoZSB1bmRlcmx5aW5nIHNlcnZpY2VcbiAgICogQGludGVybmFsXG4gICAqL1xuICBASW5qZWN0YWJsZSgpXG4gIGFic3RyYWN0IGNsYXNzIEh0dHBJbnRlcm5hbENsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIF9pbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICAgIHN1cGVyKC4uLmluamVjdEFyZ3MobmV3IMOJwrVSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzKCkucGFyYW1ldGVycyhiYXNlKSwgX2luamVjdG9yKSk7XG4gICAgICB0aGlzLmJ1aWxkQ29uZmlnKCk7XG4gICAgfVxuICAgIGFic3RyYWN0IGJ1aWxkQ29uZmlnKCk6IHZvaWQ7XG4gIH1cbiAgLyoqXG4gICAqIEFjdHVhbGwgY2xhc3MgYmVpbmcgcmV0dXJuZWQgd2l0aCBhbGwgdGhlIGhvb2tzIGZvciBodHRwIHVzYWdlXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgSHR0cEludGVybmFsQ2xhc3Mge1xuICAgIHByaXZhdGUgX2Jhc2VVcmw6IHN0cmluZztcbiAgICBnZXQgYmFzZVVybCgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICh0eXBlb2YodGhpcy5iYXNlUGF0aCkgPT09ICdzdHJpbmcnID9cbiAgICAgICAgdGhpcy5iYXNlUGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIDogJycpICsgdGhpcy5fYmFzZVVybDtcbiAgICB9XG4gICAgcHJpdmF0ZSBfYmFzZUhlYWRlcnM6IEh0dHBIZWFkZXJzO1xuICAgIHByaXZhdGUgX2RlZmF1bHRPYnNlcnZlPzogVGRIdHRwUkVTVE9ic2VydmU7XG4gICAgcHJpdmF0ZSBfZGVmYXVsdFJlc3BvbnNlVHlwZT86IFRkSHR0cFJFU1RSZXNwb25zZVR5cGU7XG5cbiAgICBodHRwOiBIdHRwQ2xpZW50IHwgSHR0cEludGVyY2VwdG9yU2VydmljZSB8IEh0dHA7XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdXNlZCB0byBzZXR1cCB0aGUgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIGFuZCBnZXQgYW4gaW5zdGFuY2Ugb2YgdGhlIGh0dHAgc2VydmljZVxuICAgICAqL1xuICAgIGJ1aWxkQ29uZmlnKCk6IHZvaWQge1xuICAgICAgdGhpcy5odHRwID0gdGhpcy5faW5qZWN0b3IuZ2V0KGNvbmZpZy5odHRwU2VydmljZVR5cGUgfHwgSHR0cENsaWVudCk7XG4gICAgICB0aGlzLl9iYXNlVXJsID0gY29uZmlnICYmIGNvbmZpZy5iYXNlVXJsID8gY29uZmlnLmJhc2VVcmwucmVwbGFjZSgvXFwvJC8sICcnKSA6ICcnO1xuICAgICAgdGhpcy5fYmFzZUhlYWRlcnMgPSBjb25maWcgJiYgY29uZmlnLmJhc2VIZWFkZXJzID8gY29uZmlnLmJhc2VIZWFkZXJzIDogbmV3IEh0dHBIZWFkZXJzKCk7XG4gICAgICB0aGlzLl9kZWZhdWx0T2JzZXJ2ZSA9IGNvbmZpZyAmJiBjb25maWcuZGVmYXVsdE9ic2VydmUgPyBjb25maWcuZGVmYXVsdE9ic2VydmUgOiAnYm9keSc7XG4gICAgICB0aGlzLl9kZWZhdWx0UmVzcG9uc2VUeXBlID0gY29uZmlnICYmIGNvbmZpZy5kZWZhdWx0UmVzcG9uc2VUeXBlID8gY29uZmlnLmRlZmF1bHRSZXNwb25zZVR5cGUgOiAnanNvbic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWV0aG9kIHVzZWQgdG8gYnVpbGQgdGhlIGRlZmF1bHQgaGVhZGVycyB1c2luZyB0aGUgYmFzZSBoZWFkZXJzXG4gICAgICovXG4gICAgYnVpbGRIZWFkZXJzKCk6IEh0dHBIZWFkZXJzIHtcbiAgICAgIGxldCBoZWFkZXJzT2JqOiB7W2tleTogc3RyaW5nXTogYW55fSA9IHt9O1xuICAgICAgdGhpcy5fYmFzZUhlYWRlcnMua2V5cygpLmZvckVhY2goKGtleTogYW55KSA9PiB7XG4gICAgICAgIGhlYWRlcnNPYmpba2V5XSA9IHRoaXMuX2Jhc2VIZWFkZXJzLmdldChrZXkpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IEh0dHBIZWFkZXJzKGhlYWRlcnNPYmopO1xuICAgIH1cblxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIGJ1aWxkUmVxdWVzdDxSZXNwb25zZT4obWV0aG9kOiAnUE9TVCcgfCAnUFVUJyB8ICdQQVRDSCcsIHVybDogc3RyaW5nLCBvcHRpb25zPzogSVRkSHR0cFJFU1RPcHRpb25zV2l0aEJvZHkpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPjtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICBidWlsZFJlcXVlc3Q8SHR0cFJlc3BvbnNlPihtZXRob2Q6ICdQT1NUJyB8ICdQVVQnIHwgJ1BBVENIJywgdXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBJVGRIdHRwUkVTVE9wdGlvbnNXaXRoQm9keSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPjtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICBidWlsZFJlcXVlc3Q8UmVzcG9uc2U+KG1ldGhvZDogJ0dFVCcgfCAnREVMRVRFJywgdXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBJVGRIdHRwUkVTVE9wdGlvbnMpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPjtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICBidWlsZFJlcXVlc3Q8SHR0cFJlc3BvbnNlPihtZXRob2Q6ICdHRVQnIHwgJ0RFTEVURScsIHVybDogc3RyaW5nLCBvcHRpb25zPzogSVRkSHR0cFJFU1RPcHRpb25zKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U+O1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIGJ1aWxkUmVxdWVzdDxSZXNwb25zZT4obWV0aG9kOiBUZEh0dHBNZXRob2QsIHVybDogc3RyaW5nLCBvcHRpb25zPzogSVRkSHR0cFJFU1RPcHRpb25zV2l0aEJvZHkpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPjtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICBidWlsZFJlcXVlc3Q8SHR0cFJlc3BvbnNlPihtZXRob2Q6IFRkSHR0cE1ldGhvZCwgdXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBJVGRIdHRwUkVTVE9wdGlvbnNXaXRoQm9keSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPiB7XG4gICAgICByZXR1cm4gdGhpcy5fYnVpbGRSZXF1ZXN0KG1ldGhvZCwgdXJsLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdXNlZCB0byBidWlsZCB0aGUgcmVxdWVzdCBkZXBlbmRpbmcgb24gdGhlIGBodHRwYCBzZXJ2aWNlIGFuZCBUZEh0dHBNZXRob2RcbiAgICAgKi9cbiAgICBwcml2YXRlIF9idWlsZFJlcXVlc3QobWV0aG9kOiBUZEh0dHBNZXRob2QsIHVybDogc3RyaW5nLCBvcHRpb25zOiBJVGRIdHRwUkVTVE9wdGlvbnNXaXRoQm9keSA9IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgIGlmICghb3B0aW9ucy5yZXNwb25zZVR5cGUpIHtcbiAgICAgICAgb3B0aW9ucy5yZXNwb25zZVR5cGUgPSB0aGlzLl9kZWZhdWx0UmVzcG9uc2VUeXBlO1xuICAgICAgfVxuICAgICAgaWYgKCFvcHRpb25zLm9ic2VydmUpIHtcbiAgICAgICAgb3B0aW9ucy5vYnNlcnZlID0gdGhpcy5fZGVmYXVsdE9ic2VydmU7XG4gICAgICB9XG4gICAgICBpZiAoIW9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICBvcHRpb25zLmhlYWRlcnMgPSB0aGlzLmJ1aWxkSGVhZGVycygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gdGhpcy5idWlsZEhlYWRlcnMoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuaGVhZGVycyBpbnN0YW5jZW9mIEh0dHBIZWFkZXJzKSB7XG4gICAgICAgICAgKDxIdHRwSGVhZGVycz5vcHRpb25zLmhlYWRlcnMpLmtleXMoKS5mb3JFYWNoKChrZXk6IGFueSkgPT4ge1xuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KGtleSwgKDxIdHRwSGVhZGVycz5vcHRpb25zLmhlYWRlcnMpLmdldChrZXkpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoa2V5LCA8YW55Pm9wdGlvbnMuaGVhZGVyc1trZXldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzID0gaGVhZGVycztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmh0dHAgaW5zdGFuY2VvZiBIdHRwSW50ZXJjZXB0b3JTZXJ2aWNlIHx8IHRoaXMuaHR0cCBpbnN0YW5jZW9mIEh0dHApIHtcbiAgICAgICAgbGV0IGhlYWRlcnM6IEhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICAoPEh0dHBIZWFkZXJzPm9wdGlvbnMuaGVhZGVycykua2V5cygpLmZvckVhY2goKGtleTogYW55KSA9PiB7XG4gICAgICAgICAgaGVhZGVycy5zZXQoa2V5LCAoPEh0dHBIZWFkZXJzPm9wdGlvbnMuaGVhZGVycykuZ2V0KGtleSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHBhcmFtczogVVJMU2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICBpZiAob3B0aW9ucy5wYXJhbXMpIHtcbiAgICAgICAgICBpZiAob3B0aW9ucy5wYXJhbXMgaW5zdGFuY2VvZiBIdHRwUGFyYW1zKSB7XG4gICAgICAgICAgICBvcHRpb25zLnBhcmFtcy5rZXlzKCkuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgcGFyYW1zLnNldChrZXksICg8SHR0cFBhcmFtcz5vcHRpb25zLnBhcmFtcykuZ2V0KGtleSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBvcHRpb25zLnBhcmFtcykge1xuICAgICAgICAgICAgICBwYXJhbXMuc2V0KGtleSwgPGFueT5vcHRpb25zLnBhcmFtc1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9ic2VydmFibGU6IE9ic2VydmFibGU8UmVzcG9uc2U+ID0gKDxIdHRwSW50ZXJjZXB0b3JTZXJ2aWNlPnRoaXMuaHR0cCkucmVxdWVzdCh1cmwsIHtcbiAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgIGJvZHk6IG9wdGlvbnMuYm9keSA/IG9wdGlvbnMuYm9keSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvcHRpb25zLm9ic2VydmUgPT09ICdib2R5Jykge1xuICAgICAgICAgIGlmIChvcHRpb25zLnJlc3BvbnNlVHlwZSA9PT0gJ2pzb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gPGFueT5vYnNlcnZhYmxlLnBpcGUoXG4gICAgICAgICAgICAgIG1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMucmVzcG9uc2VUeXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgICAgIHJldHVybiA8YW55Pm9ic2VydmFibGUucGlwZShcbiAgICAgICAgICAgICAgbWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSksXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5yZXNwb25zZVR5cGUgPT09ICdibG9iJykge1xuICAgICAgICAgICAgcmV0dXJuIDxhbnk+b2JzZXJ2YWJsZS5waXBlKFxuICAgICAgICAgICAgICBtYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuYmxvYigpKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnJlc3BvbnNlVHlwZSA9PT0gJ2FycmF5YnVmZmVyJykge1xuICAgICAgICAgICAgcmV0dXJuIDxhbnk+b2JzZXJ2YWJsZS5waXBlKFxuICAgICAgICAgICAgICBtYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKSksXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLm9ic2VydmUgPT09ICdldmVudHMnKSB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoJ1wiZXZlbnRzXCIgbm90IHN1cHBwb3J0ZWQgaW4gQGFuZ3VsYXIvaHR0cCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICg8SHR0cENsaWVudD50aGlzLmh0dHApLnJlcXVlc3QobWV0aG9kLCB1cmwsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbiIsImRlY2xhcmUgY29uc3QgUmVmbGVjdDogYW55O1xuZXhwb3J0IHR5cGUgVGRQYXJhbVR5cGUgPSAncGFyYW0nIHwgJ3Jlc3BvbnNlJyB8ICdib2R5JyB8ICdxdWVyeVBhcmFtcyc7XG5cbmV4cG9ydCBjb25zdCB0ZEh0dHBSRVNUUGFyYW06IFN5bWJvbCA9IFN5bWJvbCgnVGRIdHRwUkVTVFBhcmFtJyk7XG5cbi8qKlxuICogQWJzdHJhY3QgaW1wbGVtZW50YXRpb24gb2YgdGhlIGh0dHAgcGFyYW0gZGVjb3JhdG9yXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFRkQWJzdHJhY3RQYXJhbSh0eXBlOiBUZFBhcmFtVHlwZSwgcGFyYW0/OiBzdHJpbmcpOiBGdW5jdGlvbiB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBPYmplY3QsIHByb3BlcnR5S2V5OiBzdHJpbmcgfCBzeW1ib2wsIHBhcmFtZXRlckluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBsZXQgcGFyYW1ldGVyczogeyBpbmRleDogbnVtYmVyLCBwYXJhbTogc3RyaW5nLCB0eXBlOiBUZFBhcmFtVHlwZSB9W10gPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKHRkSHR0cFJFU1RQYXJhbSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSkgfHwgW107XG4gICAgcGFyYW1ldGVycy5wdXNoKHtcbiAgICAgIGluZGV4OiBwYXJhbWV0ZXJJbmRleCxcbiAgICAgIHBhcmFtOiBwYXJhbSxcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgfSk7XG4gICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YSh0ZEh0dHBSRVNUUGFyYW0sIHBhcmFtZXRlcnMsIHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgVGRIdHRwTWV0aG9kLCBJVGRIdHRwUkVTVE9wdGlvbnMsIElUZEh0dHBSRVNUT3B0aW9uc1dpdGhCb2R5LCBOT09QX0hUVFAgfSBmcm9tICcuLi8uLi9odHRwLm1peGluJztcbmltcG9ydCB7IFRkUGFyYW1UeXBlLCB0ZEh0dHBSRVNUUGFyYW0gfSBmcm9tICcuLi9wYXJhbXMvYWJzdHJhY3QtcGFyYW0uZGVjb3JhdG9yJztcblxuZGVjbGFyZSBjb25zdCBSZWZsZWN0OiBhbnk7XG5cbi8qKlxuICogTWV0aG9kIHVzZWQgdG8gY29weSBwYXJhbWV0ZXJzIGZyb20gYW4gYXJyYXkgb3IgSHR0cFBhcmFtcyBvYmplY3RcbiAqIGludG8gYSBjZW50cmlsaXplZCBIdHRwUGFyYW1zIG9iamVjdFxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBhcmFtcyh0YXJnZXQ6IEh0dHBQYXJhbXMsIHNvdXJjZTogSHR0cFBhcmFtcyB8IHtba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXX0pOiBIdHRwUGFyYW1zIHtcbiAgbGV0IHF1ZXJ5UGFyYW1zOiBIdHRwUGFyYW1zID0gdGFyZ2V0O1xuICBpZiAoc291cmNlIGluc3RhbmNlb2YgSHR0cFBhcmFtcykge1xuICAgIHNvdXJjZS5rZXlzKCkuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIC8vIHNraXAgaWYgdmFsdWUgaXMgdW5kZWZpbmVkXG4gICAgICBpZiAoKDxIdHRwUGFyYW1zPnNvdXJjZSkuZ2V0KGtleSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBxdWVyeVBhcmFtcyA9IHF1ZXJ5UGFyYW1zLnNldChrZXksICg8SHR0cFBhcmFtcz5zb3VyY2UpLmdldChrZXkpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gc291cmNlKSB7XG4gICAgICAvLyBza2lwIGlmIHZhbHVlIGlzIHVuZGVmaW5lZFxuICAgICAgaWYgKDxhbnk+c291cmNlW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBxdWVyeVBhcmFtcyA9IHF1ZXJ5UGFyYW1zLnNldChrZXksIDxhbnk+c291cmNlW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcXVlcnlQYXJhbXM7XG59XG5cbi8qKlxuICogQWJzdHJhY3QgaW1wbGVtZW50YXRpb24gb2YgdGhlIGh0dHAgbWV0aG9kIGRlY29yYXRvclxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZEFic3RyYWN0TWV0aG9kKGNvbmZpZzoge1xuICBtZXRob2Q6IFRkSHR0cE1ldGhvZCxcbiAgcGF0aDogc3RyaW5nLFxuICBvcHRpb25zPzogSVRkSHR0cFJFU1RPcHRpb25zLFxufSk6IEZ1bmN0aW9uIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgcHJvcGVydHlOYW1lOiBzdHJpbmcsIGRlc2NyaXB0b3I6IFR5cGVkUHJvcGVydHlEZXNjcmlwdG9yPEZ1bmN0aW9uPik6IGFueSB7XG4gICAgbGV0IHdyYXBwZWRGdW5jdGlvbjogRnVuY3Rpb24gPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIC8vIHJlcGxhY2UgbWV0aG9kIGNhbGwgd2l0aCBvdXIgb3duIGFuZCBwcm94eSBpdFxuICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoKTogYW55IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCByZXBsYWNlZFBhdGg6IHN0cmluZyA9IGNvbmZpZy5wYXRoO1xuICAgICAgICBsZXQgcGFyYW1ldGVyczogeyBpbmRleDogbnVtYmVyLCBwYXJhbTogc3RyaW5nLCB0eXBlOiBUZFBhcmFtVHlwZSB9W10gPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKHRkSHR0cFJFU1RQYXJhbSwgdGFyZ2V0LCBwcm9wZXJ0eU5hbWUpO1xuICAgICAgICBsZXQgbmV3QXJnczogYW55W10gPSBbXTtcbiAgICAgICAgbGV0IGJvZHk6IGFueTtcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zOiBIdHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICAgICAgaWYgKHBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAvLyBtYXAgcGFyYW1ldGVycyBhbmQgc2VlIHdoaWNoIHR5cGUgdGhleSBhcmUgdG8gYWN0IG9uIHRoZW1cbiAgICAgICAgICBmb3IgKGxldCBwYXJhbWV0ZXIgb2YgcGFyYW1ldGVycykge1xuICAgICAgICAgICAgaWYgKHBhcmFtZXRlci50eXBlID09PSAncGFyYW0nKSB7XG4gICAgICAgICAgICAgIG5ld0FyZ3NbcGFyYW1ldGVyLmluZGV4XSA9IGFyZ3VtZW50c1twYXJhbWV0ZXIuaW5kZXhdO1xuICAgICAgICAgICAgICByZXBsYWNlZFBhdGggPSByZXBsYWNlZFBhdGgucmVwbGFjZSgnOicgKyBwYXJhbWV0ZXIucGFyYW0sIGFyZ3VtZW50c1twYXJhbWV0ZXIuaW5kZXhdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyYW1ldGVyLnR5cGUgPT09ICdib2R5Jykge1xuICAgICAgICAgICAgICBuZXdBcmdzW3BhcmFtZXRlci5pbmRleF0gPSBhcmd1bWVudHNbcGFyYW1ldGVyLmluZGV4XTtcbiAgICAgICAgICAgICAgYm9keSA9IGFyZ3VtZW50c1twYXJhbWV0ZXIuaW5kZXhdO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJhbWV0ZXIudHlwZSA9PT0gJ3F1ZXJ5UGFyYW1zJykge1xuICAgICAgICAgICAgICBuZXdBcmdzW3BhcmFtZXRlci5pbmRleF0gPSBhcmd1bWVudHNbcGFyYW1ldGVyLmluZGV4XTtcbiAgICAgICAgICAgICAgbGV0IHFQYXJhbXM6IEh0dHBQYXJhbXMgfCB7W2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW119ID0gYXJndW1lbnRzW3BhcmFtZXRlci5pbmRleF07XG4gICAgICAgICAgICAgIGlmIChjb25maWcub3B0aW9ucyAmJiBjb25maWcub3B0aW9ucy5wYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcyA9IHBhcnNlUGFyYW1zKHF1ZXJ5UGFyYW1zLCBjb25maWcub3B0aW9ucy5wYXJhbXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChxUGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMgPSBwYXJzZVBhcmFtcyhxdWVyeVBhcmFtcywgcVBhcmFtcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIGxldCB1cmw6IHN0cmluZyA9IHRoaXMuYmFzZVVybCArIHJlcGxhY2VkUGF0aDtcbiAgICAgICAgbGV0IG9wdGlvbnM6IElUZEh0dHBSRVNUT3B0aW9uc1dpdGhCb2R5ID0gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnLm9wdGlvbnMsIHtcbiAgICAgICAgICBib2R5OiBib2R5LFxuICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbXMsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgbGV0IHJlcXVlc3Q6IGFueSA9IHRoaXMuYnVpbGRSZXF1ZXN0KGNvbmZpZy5tZXRob2QsIHVybCwgb3B0aW9ucyk7XG4gICAgICAgIGlmIChwYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgLy8gc2VlIHdoaWNoIG9uZSB3YXMgdGhlIHJlc3BvbnNlIHBhcmFtZXRlciBzbyB3ZSBjYW4gc2V0IHRoZSByZXF1ZXN0IG9ic2VydmFibGVcbiAgICAgICAgICBmb3IgKGxldCBwYXJhbWV0ZXIgb2YgcGFyYW1ldGVycykge1xuICAgICAgICAgICAgaWYgKHBhcmFtZXRlci50eXBlID09PSAncmVzcG9uc2UnKSB7XG4gICAgICAgICAgICAgIG5ld0FyZ3NbcGFyYW1ldGVyLmluZGV4XSA9IHJlcXVlc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBsZXQgcmVzcG9uc2U6IGFueSA9IHdyYXBwZWRGdW5jdGlvbi5hcHBseSh0aGlzLCBuZXdBcmdzKTtcbiAgICAgICAgLy8gaWYgdGhlIHJlc3BvbnNlIGlzIE5PT1BfSFRUUCBvciB1bmRlZmluZWQsIHRoZW4gd2UgcmV0dXJuIHRoZSByZXF1ZXN0IGFzIGl0IGlzXG4gICAgICAgIC8vIGVsc2Ugd2UgcmV0dXJuIHRoZSByZXNwb25zZSBmcm9tIHRoZSBpbm5lciBmdW5jdGlvblxuICAgICAgICBpZiAocmVzcG9uc2UgPT09IE5PT1BfSFRUUCB8fCByZXNwb25zZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IElUZEh0dHBSRVNUT3B0aW9ucyB9IGZyb20gJy4uLy4uLyc7XG5pbXBvcnQgeyBUZEFic3RyYWN0TWV0aG9kIH0gZnJvbSAnLi9hYnN0cmFjdC1tZXRob2QuZGVjb3JhdG9yJztcblxuLyoqXG4gKiBEZWNvcmF0b3IgdGhhdCBhZGRzIEdFVCByZXF1ZXN0IGNhcGFiaWxpdGllcyB0byBhIG1ldGhvZFxuICovXG5leHBvcnQgZnVuY3Rpb24gR0VUKGNvbmZpZzoge1xuICBwYXRoOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBJVGRIdHRwUkVTVE9wdGlvbnMsXG59KTogRnVuY3Rpb24ge1xuICByZXR1cm4gVGRBYnN0cmFjdE1ldGhvZCg8YW55Pk9iamVjdC5hc3NpZ24oe1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gIH0sIGNvbmZpZykpO1xufVxuIiwiaW1wb3J0IHsgSVRkSHR0cFJFU1RPcHRpb25zIH0gZnJvbSAnLi4vLi4vJztcbmltcG9ydCB7IFRkQWJzdHJhY3RNZXRob2QgfSBmcm9tICcuL2Fic3RyYWN0LW1ldGhvZC5kZWNvcmF0b3InO1xuXG4vKipcbiAqIERlY29yYXRvciB0aGF0IGFkZHMgUE9TVCByZXF1ZXN0IGNhcGFiaWxpdGllcyB0byBhIG1ldGhvZFxuICovXG5leHBvcnQgZnVuY3Rpb24gUE9TVChjb25maWc6IHtcbiAgcGF0aDogc3RyaW5nLFxuICBvcHRpb25zPzogSVRkSHR0cFJFU1RPcHRpb25zLFxufSk6IEZ1bmN0aW9uIHtcbiAgcmV0dXJuIFRkQWJzdHJhY3RNZXRob2QoPGFueT5PYmplY3QuYXNzaWduKHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgfSwgY29uZmlnKSk7XG59XG4iLCJpbXBvcnQgeyBJVGRIdHRwUkVTVE9wdGlvbnMgfSBmcm9tICcuLi8uLi8nO1xuaW1wb3J0IHsgVGRBYnN0cmFjdE1ldGhvZCB9IGZyb20gJy4vYWJzdHJhY3QtbWV0aG9kLmRlY29yYXRvcic7XG5cbi8qKlxuICogRGVjb3JhdG9yIHRoYXQgYWRkcyBQQVRDSCByZXF1ZXN0IGNhcGFiaWxpdGllcyB0byBhIG1ldGhvZFxuICovXG5leHBvcnQgZnVuY3Rpb24gUEFUQ0goY29uZmlnOiB7XG4gIHBhdGg6IHN0cmluZyxcbiAgb3B0aW9ucz86IElUZEh0dHBSRVNUT3B0aW9ucyxcbn0pOiBGdW5jdGlvbiB7XG4gIHJldHVybiBUZEFic3RyYWN0TWV0aG9kKDxhbnk+T2JqZWN0LmFzc2lnbih7XG4gICAgbWV0aG9kOiAnUEFUQ0gnLFxuICB9LCBjb25maWcpKTtcbn1cbiIsImltcG9ydCB7IElUZEh0dHBSRVNUT3B0aW9ucyB9IGZyb20gJy4uLy4uLyc7XG5pbXBvcnQgeyBUZEFic3RyYWN0TWV0aG9kIH0gZnJvbSAnLi9hYnN0cmFjdC1tZXRob2QuZGVjb3JhdG9yJztcblxuLyoqXG4gKiBEZWNvcmF0b3IgdGhhdCBhZGRzIFBVVCByZXF1ZXN0IGNhcGFiaWxpdGllcyB0byBhIG1ldGhvZFxuICovXG5leHBvcnQgZnVuY3Rpb24gUFVUKGNvbmZpZzoge1xuICBwYXRoOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBJVGRIdHRwUkVTVE9wdGlvbnMsXG59KTogRnVuY3Rpb24ge1xuICByZXR1cm4gVGRBYnN0cmFjdE1ldGhvZCg8YW55Pk9iamVjdC5hc3NpZ24oe1xuICAgIG1ldGhvZDogJ1BVVCcsXG4gIH0sIGNvbmZpZykpO1xufVxuIiwiaW1wb3J0IHsgSVRkSHR0cFJFU1RPcHRpb25zIH0gZnJvbSAnLi4vLi4vJztcbmltcG9ydCB7IFRkQWJzdHJhY3RNZXRob2QgfSBmcm9tICcuL2Fic3RyYWN0LW1ldGhvZC5kZWNvcmF0b3InO1xuXG4vKipcbiAqIERlY29yYXRvciB0aGF0IGFkZHMgREVMRVRFIHJlcXVlc3QgY2FwYWJpbGl0aWVzIHRvIGEgbWV0aG9kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBERUxFVEUoY29uZmlnOiB7XG4gIHBhdGg6IHN0cmluZyxcbiAgb3B0aW9ucz86IElUZEh0dHBSRVNUT3B0aW9ucyxcbn0pOiBGdW5jdGlvbiB7XG4gIHJldHVybiBUZEFic3RyYWN0TWV0aG9kKDxhbnk+T2JqZWN0LmFzc2lnbih7XG4gICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgfSwgY29uZmlnKSk7XG59XG4iLCJpbXBvcnQgeyBtaXhpbkh0dHAsIElUZEh0dHBSRVNUQ29uZmlnIH0gZnJvbSAnLi4vLi4vaHR0cC5taXhpbic7XG5cbi8qKlxuICogRGVjb3JhdG9yIHVzZWQgdG8gZ2l2ZSBhIHNlcnZpY2UgaHR0cCBjYXBhYmlsaXRpZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFRkSHR0cChjb25maWc6IElUZEh0dHBSRVNUQ29uZmlnKTogRnVuY3Rpb24ge1xuICByZXR1cm4gZnVuY3Rpb24gPFQgZXh0ZW5kcyB7IG5ldyguLi5hcmdzOiBhbnlbXSk6IHt9IH0+KGNvbnN0cnVjdG9yOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBjbGFzcyBleHRlbmRzIG1peGluSHR0cChjb25zdHJ1Y3RvciwgY29uZmlnKSB7XG4gICAgIFxuICAgIH07XG4gIH07XG59XG4iLCJpbXBvcnQgeyBUZEFic3RyYWN0UGFyYW0gfSBmcm9tICcuL2Fic3RyYWN0LXBhcmFtLmRlY29yYXRvcic7XG5cbi8qKlxuICogRGVjb3JhdG9yIHRoYXQgaXMgdXNlZCB0byBkZWZpbmUgd2hpY2ggcGFyYW1ldGVyIGlzIGFuIGh0dHAgcGFyYW1ldGVyIGluIGEgbWV0aG9kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZFBhcmFtKHBhcmFtOiBzdHJpbmcpOiBGdW5jdGlvbiB7XG4gIHJldHVybiBUZEFic3RyYWN0UGFyYW0oJ3BhcmFtJywgcGFyYW0pO1xufVxuIiwiaW1wb3J0IHsgVGRBYnN0cmFjdFBhcmFtIH0gZnJvbSAnLi9hYnN0cmFjdC1wYXJhbS5kZWNvcmF0b3InO1xuXG4vKipcbiAqIERlY29yYXRvciB0aGF0IGlzIHVzZWQgdG8gZGVmaW5lIHdoaWNoIHBhcmFtZXRlciBpcyB0aGUgaHR0cCBib2R5IGluIGEgbWV0aG9kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZEJvZHkoKTogRnVuY3Rpb24ge1xuICByZXR1cm4gVGRBYnN0cmFjdFBhcmFtKCdib2R5Jyk7XG59XG4iLCJpbXBvcnQgeyBUZEFic3RyYWN0UGFyYW0gfSBmcm9tICcuL2Fic3RyYWN0LXBhcmFtLmRlY29yYXRvcic7XG5cbi8qKlxuICogRGVjb3JhdG9yIHRoYXQgaXMgdXNlZCB0byBkZWZpbmUgd2hpY2ggcGFyYW1ldGVyIGlzIHRoZSBodHRwIHJlc3BvbnNlIGluIGEgbWV0aG9kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZFJlc3BvbnNlKCk6IEZ1bmN0aW9uIHtcbiAgcmV0dXJuIFRkQWJzdHJhY3RQYXJhbSgncmVzcG9uc2UnKTtcbn1cbiIsImltcG9ydCB7IFRkQWJzdHJhY3RQYXJhbSB9IGZyb20gJy4vYWJzdHJhY3QtcGFyYW0uZGVjb3JhdG9yJztcblxuLyoqXG4gKiBEZWNvcmF0b3IgdGhhdCBpcyB1c2VkIHRvIGRlZmluZSB3aGljaCBwYXJhbWV0ZXIgaXMgdGhlIGh0dHAgcXVlcnkgcGFyYW1ldGVycyBpbiBhIG1ldGhvZFxuICovXG5leHBvcnQgZnVuY3Rpb24gVGRRdWVyeVBhcmFtcygpOiBGdW5jdGlvbiB7XG4gIHJldHVybiBUZEFic3RyYWN0UGFyYW0oJ3F1ZXJ5UGFyYW1zJyk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BT2EsbUJBQW1CO0lBRTlCOztLQUVDOzs7WUFURixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBRXZCLDhFQUF5Qzs7YUFDMUM7Ozs7Ozs7OztBQ05ELE1BZ0JhLHNCQUFzQjs7O1lBWGxDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osbUJBQW1CO2lCQUNwQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsbUJBQW1CO2lCQUNwQjthQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmRDs7SUFLRSxNQUFPLE1BQU07SUFDYixVQUFXLFVBQVU7SUFDckIsVUFBVyxVQUFVOztNQVNWLGtCQUFrQjs7Ozs7OztJQStCN0IsWUFBb0IsV0FBdUIsRUFDakMsTUFBYyxFQUNkLFNBQW9CLEVBQ3BCLGtCQUFxQztRQUgzQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUNqQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsY0FB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