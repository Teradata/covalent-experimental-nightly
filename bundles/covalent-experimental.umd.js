(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@covalent/core/breadcrumbs'), require('@covalent/core/tab-select'), require('@angular/router'), require('rxjs'), require('rxjs/operators'), require('@covalent/core/common'), require('@angular/material/icon'), require('@angular/material/core'), require('@angular/cdk/portal'), require('@angular/common/http'), require('@angular/http'), require('@covalent/http')) :
    typeof define === 'function' && define.amd ? define('@covalent/experimental', ['exports', '@angular/core', '@angular/common', '@covalent/core/breadcrumbs', '@covalent/core/tab-select', '@angular/router', 'rxjs', 'rxjs/operators', '@covalent/core/common', '@angular/material/icon', '@angular/material/core', '@angular/cdk/portal', '@angular/common/http', '@angular/http', '@covalent/http'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.experimental = {}),global.ng.core,global.ng.common,global.covalent.core.breadcrumbs,global.covalent.core['tab-select'],global.ng.router,global.rxjs,global.rxjs.operators,global.covalent.core.common,global.ng.material.icon,global.ng.material.core,global.ng.cdk.portal,global.ng.common.http,global.ng.http,global.covalent.http));
}(this, (function (exports,core,common,breadcrumbs,tabSelect,router,rxjs,operators,common$1,icon,core$1,portal,http,http$1,http$2) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdRenameMeComponent = /** @class */ (function () {
        function TdRenameMeComponent() {
            // stub
        }
        TdRenameMeComponent.decorators = [
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
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
        function TdNavStepComponent(_elementRef, router$$1, _renderer, _changeDetectorRef) {
            this._elementRef = _elementRef;
            this.router = router$$1;
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
             */ function () {
                return this._displayStep;
            },
            /**
             * Whether to display the step or not
             */
            set: /**
             * Whether to display the step or not
             * @param {?} shouldDisplay
             * @return {?}
             */ function (shouldDisplay) {
                this._displayStep = shouldDisplay;
                this._changeDetectorRef.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNavStepComponent.prototype, "displayLine", {
            get: /**
             * @return {?}
             */ function () {
                return this._displayLine;
            },
            /**
             * Whether to display the step or not
             */
            set: /**
             * Whether to display the step or not
             * @param {?} shouldDisplay
             * @return {?}
             */ function (shouldDisplay) {
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
             */ function () {
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
             */ function () {
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
             */ function () {
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
                    _this._width = (( /** @type {?} */(_this._elementRef.nativeElement))).getBoundingClientRect().width;
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
            { type: core.Component, args: [{
                        selector: 'td-nav-step, a[td-nav-step]',
                        template: "<td-nav-step-header class=\"td-step-horizontal-header\"\n                [number]=\"number\"\n                [active]=\"active\"\n                [state]=\"state\"\n                [displayLine]=\"displayLine\">\n  <ng-template td-nav-step-header-label [ngIf]=\"true\"><ng-content></ng-content></ng-template>\n  <ng-template td-nav-step-header-sublabel class=\"td-nav-step-sublabel\" [ngIf]=\"sublabel\">{{sublabel}}</ng-template>\n</td-nav-step-header>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host .td-nav-step{height:48px;box-sizing:border-box;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:end;justify-content:flex-end}:host .td-nav-step ::ng-deep>*{margin:0 10px}"]
                    }] }
        ];
        /** @nocollapse */
        TdNavStepComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: router.Router },
                { type: core.Renderer2 },
                { type: core.ChangeDetectorRef }
            ];
        };
        TdNavStepComponent.propDecorators = {
            routerLink: [{ type: core.Input, args: ['routerLink',] }],
            state: [{ type: core.Input, args: ['state',] }],
            sublabel: [{ type: core.Input, args: ['sublabel',] }],
            displayBinding: [{ type: core.HostBinding, args: ['style.display',] }]
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
            this._resizeSubscription = rxjs.Subscription.EMPTY;
            this._widthSubject = new rxjs.Subject();
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
                this._resizeSubscription = rxjs.merge(rxjs.fromEvent(window, 'resize').pipe(operators.debounceTime(10)), this._widthSubject.asObservable().pipe(operators.distinctUntilChanged())).subscribe(function () {
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
                var element = (( /** @type {?} */(this._elementRef.nativeElement)));
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
             */ function () {
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
             */ function () {
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
             */ function () {
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
            { type: core.Component, args: [{
                        selector: 'td-horizontal-nav-stepper',
                        template: "<span class=\"td-steps-header\">\n  <button *ngIf=\"showLeftArrow\" mat-icon-button (click)=\"showHiddenLeftStep()\">\n    <mat-icon>chevron_left</mat-icon>\n  </button>\n  <ng-content></ng-content>\n  <button *ngIf=\"showRightArrow\" mat-icon-button (click)=\"showHiddenRightStep()\">\n    <mat-icon>chevron_right</mat-icon>\n  </button>\n</span>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host .td-steps-header{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}"]
                    }] }
        ];
        /** @nocollapse */
        TdHorizontalStepperComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.ChangeDetectorRef }
            ];
        };
        TdHorizontalStepperComponent.propDecorators = {
            _steps: [{ type: core.ContentChildren, args: [TdNavStepComponent,] }]
        };
        return TdHorizontalStepperComponent;
    }());

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
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

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
    var _TdNavStepHeaderMixinBase = common$1.mixinDisableRipple(common$1.mixinDisabled(TdNavStepHeaderBase));
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
            { type: core.Component, args: [{
                        selector: 'td-nav-step-header',
                        inputs: ['disableRipple'],
                        template: "<div class=\"td-step-header\"\n      matRipple\n      [matRippleDisabled]=\"disableRipple\"\n      [tabIndex]=\"0\">\n  <div class=\"td-circle\"\n      [class.mat-inactive]=\"(!active && !isComplete())\"\n      [class.mat-active]=\"active\"\n      *ngIf=\"!isRequired() && !isComplete()\">\n    <span *ngIf=\"(active || !isComplete())\">{{number || ''}}</span>\n  </div>\n  <div class=\"td-complete\" *ngIf=\"isComplete()\">\n    <mat-icon class=\"mat-complete\">check_circle</mat-icon>\n  </div>\n  <div class=\"td-triangle\"\n      *ngIf=\"isRequired()\">\n    <mat-icon class=\"mat-warn\">warning</mat-icon>\n  </div>\n  <div class=\"td-nav-step-label-wrapper\"\n        [class.mat-inactive]=\"(!active && !isComplete())\"\n        [class.mat-warn]=\"isRequired()\">\n    <div class=\"td-step-label\">\n      <ng-content select=\"[td-nav-step-header-label]\"></ng-content>\n    </div>\n    <div class=\"td-nav-step-sublabel\">\n      <ng-content select=\"[td-nav-step-header-sublabel]\"></ng-content>\n    </div>\n  </div>\n  <span class=\"td-nav-step-header-separator\"></span>\n  <mat-icon class=\"td-edit-icon\" *ngIf=\"isComplete() && !active\">mode_edit</mat-icon>\n  <span *ngIf=\"displayLine\" class=\"td-horizontal-line\"></span>\n</div>\n",
                        styles: [".td-step-header{position:relative;outline:0;height:72px;-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}.td-step-header:hover:not(.mat-disabled){cursor:pointer}.td-step-header mat-icon.td-edit-icon{margin:0 8px}.td-step-header mat-icon.mat-warn{font-size:24px;height:24px;width:24px}.td-step-header mat-icon.mat-complete{position:relative;left:-2px;top:2px;font-size:28px;height:24px;width:24px}.td-step-header .td-circle{height:24px;width:24px;line-height:24px;border-radius:99%;text-align:center;-ms-flex:none;flex:none}.td-step-header .td-circle mat-icon{margin-top:2px;font-weight:700}.td-step-header .td-triangle>mat-icon{font-size:25px}::ng-deep :not([dir=rtl]) .td-step-header .td-circle,::ng-deep :not([dir=rtl]) .td-step-header .td-complete,::ng-deep :not([dir=rtl]) .td-step-header .td-triangle{margin-left:8px;margin-right:0}::ng-deep [dir=rtl] .td-step-header .td-circle,::ng-deep [dir=rtl] .td-step-header .td-complete,::ng-deep [dir=rtl] .td-step-header .td-triangle{margin-left:0;margin-right:8px}.td-step-header .td-circle,.td-step-header .td-complete{font-size:14px}.td-step-header .td-nav-step-label-wrapper{padding-left:8px;padding-right:8px}.td-step-header .td-nav-step-header-separator{-ms-flex:1;flex:1;box-sizing:border-box}.td-horizontal-line{border-bottom-width:1px;border-bottom-style:solid;height:1px;position:relative;min-width:15px;-ms-flex:1;flex:1;box-sizing:border-box;display:block}::ng-deep :not([dir=rtl]) .td-horizontal-line{left:-6px;right:-3px}::ng-deep [dir=rtl] .td-horizontal-line{left:-3px;right:-6px}"]
                    }] }
        ];
        TdNavStepHeaderComponent.propDecorators = {
            displayLine: [{ type: core.Input, args: ['displayLine',] }],
            number: [{ type: core.Input, args: ['number',] }],
            active: [{ type: core.Input, args: ['active',] }],
            state: [{ type: core.Input, args: ['state',] }]
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            icon.MatIconModule,
                            core$1.MatRippleModule,
                            portal.PortalModule,
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
    var NOOP_HTTP = rxjs.of(undefined);
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
                    if (meta instanceof core.Optional || meta.ngMetadataName === 'Optional') {
                        /* tslint:disable */
                        flags |= 8 /* Optional */;
                    }
                    else if (meta instanceof core.SkipSelf || meta.ngMetadataName === 'SkipSelf') {
                        flags |= 4 /* SkipSelf */;
                    }
                    else if (meta instanceof core.Self || meta.ngMetadataName === 'Self') {
                        flags |= 2 /* Self */;
                    }
                    else if (meta instanceof core.Inject) {
                        type = meta.token;
                    }
                    else {
                        type = meta;
                    }
                    /* tslint:enable */
                }
                args.push(injector.get(( /** @type {?} */(type)), flags));
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
                var _this = _super.apply(this, __spread(injectArgs(new core.ɵReflectionCapabilities().parameters(base), _injector))) || this;
                _this._injector = _injector;
                _this.buildConfig();
                return _this;
            }
            HttpInternalClass.decorators = [
                { type: core.Injectable },
            ];
            /** @nocollapse */
            HttpInternalClass.ctorParameters = function () {
                return [
                    { type: core.Injector }
                ];
            };
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
                 */ function () {
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
                    this.http = this._injector.get(config.httpServiceType || http.HttpClient);
                    this._baseUrl = config && config.baseUrl ? config.baseUrl.replace(/\/$/, '') : '';
                    this._baseHeaders = config && config.baseHeaders ? config.baseHeaders : new http.HttpHeaders();
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
                    return new http.HttpHeaders(headersObj);
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
                    if (options === void 0) {
                        options = {};
                    }
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
                        if (options.headers instanceof http.HttpHeaders) {
                            (( /** @type {?} */(options.headers))).keys().forEach(function (key) {
                                headers_1 = headers_1.set(key, (( /** @type {?} */(options.headers))).get(key));
                            });
                        }
                        else {
                            for (var key in options.headers) {
                                headers_1 = headers_1.set(key, ( /** @type {?} */(options.headers[key])));
                            }
                        }
                        options.headers = headers_1;
                    }
                    if (this.http instanceof http$2.HttpInterceptorService || this.http instanceof http$1.Http) {
                        /** @type {?} */
                        var headers_2 = new http$1.Headers();
                        (( /** @type {?} */(options.headers))).keys().forEach(function (key) {
                            headers_2.set(key, (( /** @type {?} */(options.headers))).get(key));
                        });
                        /** @type {?} */
                        var params_1 = new http$1.URLSearchParams();
                        if (options.params) {
                            if (options.params instanceof http.HttpParams) {
                                options.params.keys().forEach(function (key) {
                                    params_1.set(key, (( /** @type {?} */(options.params))).get(key));
                                });
                            }
                            else {
                                for (var key in options.params) {
                                    params_1.set(key, ( /** @type {?} */(options.params[key])));
                                }
                            }
                        }
                        /** @type {?} */
                        var observable = (( /** @type {?} */(this.http))).request(url, {
                            headers: headers_2,
                            method: method,
                            body: options.body ? options.body : undefined,
                            params: params_1,
                        });
                        if (options.observe === 'body') {
                            if (options.responseType === 'json') {
                                return ( /** @type {?} */(observable.pipe(operators.map(function (response) { return response.json(); }))));
                            }
                            else if (options.responseType === 'text') {
                                return ( /** @type {?} */(observable.pipe(operators.map(function (response) { return response.text(); }))));
                            }
                            else if (options.responseType === 'blob') {
                                return ( /** @type {?} */(observable.pipe(operators.map(function (response) { return response.blob(); }))));
                            }
                            else if (options.responseType === 'arraybuffer') {
                                return ( /** @type {?} */(observable.pipe(operators.map(function (response) { return response.arrayBuffer(); }))));
                            }
                        }
                        else if (options.observe === 'events') {
                            throw Error('"events" not suppported in @angular/http');
                        }
                        return observable;
                    }
                    else {
                        return (( /** @type {?} */(this.http))).request(method, url, options);
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
        if (source instanceof http.HttpParams) {
            source.keys().forEach(function (key) {
                // skip if value is undefined
                if ((( /** @type {?} */(source))).get(key) !== undefined) {
                    queryParams = queryParams.set(key, (( /** @type {?} */(source))).get(key));
                }
            });
        }
        else {
            for (var key in source) {
                // skip if value is undefined
                if (( /** @type {?} */(source[key])) !== undefined) {
                    queryParams = queryParams.set(key, ( /** @type {?} */(source[key])));
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
                    var queryParams = new http.HttpParams();
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
                        catch (e_1_1) {
                            e_1 = { error: e_1_1 };
                        }
                        finally {
                            try {
                                if (parameters_1_1 && !parameters_1_1.done && (_a = parameters_1.return))
                                    _a.call(parameters_1);
                            }
                            finally {
                                if (e_1)
                                    throw e_1.error;
                            }
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
                        catch (e_2_1) {
                            e_2 = { error: e_2_1 };
                        }
                        finally {
                            try {
                                if (parameters_2_1 && !parameters_2_1.done && (_b = parameters_2.return))
                                    _b.call(parameters_2);
                            }
                            finally {
                                if (e_2)
                                    throw e_2.error;
                            }
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
        return TdAbstractMethod(( /** @type {?} */(Object.assign({
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
        return TdAbstractMethod(( /** @type {?} */(Object.assign({
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
        return TdAbstractMethod(( /** @type {?} */(Object.assign({
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
        return TdAbstractMethod(( /** @type {?} */(Object.assign({
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
        return TdAbstractMethod(( /** @type {?} */(Object.assign({
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

    exports.CovalentBreadcrumbsModule = breadcrumbs.CovalentBreadcrumbsModule;
    exports.TdBreadcrumbsComponent = breadcrumbs.TdBreadcrumbsComponent;
    exports.CovalentTabSelectModule = tabSelect.CovalentTabSelectModule;
    exports.TdTabSelectBase = tabSelect.TdTabSelectBase;
    exports._TdTabSelectMixinBase = tabSelect._TdTabSelectMixinBase;
    exports.TdTabSelectComponent = tabSelect.TdTabSelectComponent;
    exports.TdTabOptionBase = tabSelect.TdTabOptionBase;
    exports._TdTabOptionMixinBase = tabSelect._TdTabOptionMixinBase;
    exports.TdTabOptionComponent = tabSelect.TdTabOptionComponent;
    exports.CovalentRenameMeModule = CovalentRenameMeModule;
    exports.TdRenameMeComponent = TdRenameMeComponent;
    exports.CovalentNavStepperModule = CovalentNavStepperModule;
    exports.TdHorizontalStepperComponent = TdHorizontalStepperComponent;
    exports.GET = GET;
    exports.POST = POST;
    exports.PATCH = PATCH;
    exports.PUT = PUT;
    exports.DELETE = DELETE;
    exports.TdHttp = TdHttp;
    exports.TdParam = TdParam;
    exports.TdBody = TdBody;
    exports.TdResponse = TdResponse;
    exports.TdQueryParams = TdQueryParams;
    exports.mixinHttp = mixinHttp;
    exports.NOOP_HTTP = NOOP_HTTP;
    exports.ɵb = TdNavStepHeaderBase;
    exports.ɵd = TdNavStepHeaderComponent;
    exports.ɵc = _TdNavStepHeaderMixinBase;
    exports.ɵa = TdNavStepComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtZXhwZXJpbWVudGFsLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC90ZW1wbGF0ZS1yZW5hbWUtbWUtZXhwZXJpbWVudC1tb2R1bGUvcmVuYW1lLW1lLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC90ZW1wbGF0ZS1yZW5hbWUtbWUtZXhwZXJpbWVudC1tb2R1bGUvcmVuYW1lLW1lLm1vZHVsZS50cyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9uYXYtc3RlcHBlci9uYXYtc3RlcC9uYXYtc3RlcC5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvbmF2LXN0ZXBwZXIvaG9yaXpvbnRhbC1uYXYtc3RlcHBlci9ob3Jpem9udGFsLW5hdi1zdGVwcGVyLmNvbXBvbmVudC50cyIsIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvbmF2LXN0ZXBwZXIvbmF2LXN0ZXAtaGVhZGVyL25hdi1zdGVwLWhlYWRlci5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvbmF2LXN0ZXBwZXIvbmF2LXN0ZXBwZXIubW9kdWxlLnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2h0dHAvaHR0cC5taXhpbi50cyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9odHRwL2FjdGlvbnMvcGFyYW1zL2Fic3RyYWN0LXBhcmFtLmRlY29yYXRvci50cyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9odHRwL2FjdGlvbnMvbWV0aG9kcy9hYnN0cmFjdC1tZXRob2QuZGVjb3JhdG9yLnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2h0dHAvYWN0aW9ucy9tZXRob2RzL2dldC5kZWNvcmF0b3IudHMiLCJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvaHR0cC9hY3Rpb25zL21ldGhvZHMvcG9zdC5kZWNvcmF0b3IudHMiLCJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvaHR0cC9hY3Rpb25zL21ldGhvZHMvcGF0Y2guZGVjb3JhdG9yLnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2h0dHAvYWN0aW9ucy9tZXRob2RzL3B1dC5kZWNvcmF0b3IudHMiLCJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvaHR0cC9hY3Rpb25zL21ldGhvZHMvZGVsZXRlLmRlY29yYXRvci50cyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9odHRwL2FjdGlvbnMvY2xhc3MvaHR0cC5kZWNvcmF0b3IudHMiLCJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvaHR0cC9hY3Rpb25zL3BhcmFtcy9wYXJhbS5kZWNvcmF0b3IudHMiLCJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvaHR0cC9hY3Rpb25zL3BhcmFtcy9ib2R5LmRlY29yYXRvci50cyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9odHRwL2FjdGlvbnMvcGFyYW1zL3Jlc3BvbnNlLmRlY29yYXRvci50cyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9odHRwL2FjdGlvbnMvcGFyYW1zL3F1ZXJ5LXBhcmFtcy5kZWNvcmF0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLXJlbmFtZU1lJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVuYW1lLW1lLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9yZW5hbWUtbWUuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZFJlbmFtZU1lQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBzdHViXG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFRkUmVuYW1lTWVDb21wb25lbnQgfSBmcm9tICcuL3JlbmFtZS1tZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUZFJlbmFtZU1lQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVGRSZW5hbWVNZUNvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRSZW5hbWVNZU1vZHVsZSB7XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgUmVuZGVyZXIyLFxuICAgICAgICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuZXhwb3J0IGVudW0gU3RlcFN0YXRlIHtcbiAgTm9uZSA9ICdub25lJyxcbiAgUmVxdWlyZWQgPSAncmVxdWlyZWQnLFxuICBDb21wbGV0ZSA9ICdjb21wbGV0ZScsXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLW5hdi1zdGVwLCBhW3RkLW5hdi1zdGVwXScsXG4gIHN0eWxlVXJsczogWycuL25hdi1zdGVwLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYtc3RlcC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZE5hdlN0ZXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQge1xuXG4gIHByaXZhdGUgX2Rpc3BsYXlTdGVwOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfZGlzcGxheUxpbmU6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF93aWR0aDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gTnVtYmVyIHRvIGRpc3BsYXkgaW4gc3RlcCBoZWFkZXJcbiAgbnVtYmVyOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIHJvdXRlckxpbms/OiBzdHJpbmdcbiAgICogcm91dGVyTGluayB0byBuYXZpZ2F0ZSB0b1xuICAgKiBEZWZhdWx0cyB0byBlbXB0eVxuICAgKi9cbiAgQElucHV0KCdyb3V0ZXJMaW5rJykgcm91dGVyTGluazogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBzdGF0ZT86IFN0ZXBTdGF0ZVxuICAgKiBzdGF0ZSBvZiBzdGVwXG4gICAqIERlZmF1bHRzIHRvIG5vbmVcbiAgICovXG4gIEBJbnB1dCgnc3RhdGUnKSBzdGF0ZTogU3RlcFN0YXRlID0gU3RlcFN0YXRlLk5vbmU7XG5cbiAgLyoqXG4gICAqIHN1YmxhYmVsPzogc3RyaW5nXG4gICAqIFN1YmxhYmVsIHRvIGRpc3BsYXkgaW4gc3RlcCBoZWFkZXJcbiAgICogRGVmYXVsdHMgdG8gZW1wdHlcbiAgICovXG4gIEBJbnB1dCgnc3VibGFiZWwnKSBzdWJsYWJlbDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21hdC1idXR0b24nKTtcbiAgfVxuXG4gIGlzUmVxdWlyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpc0NvbXBsZXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZ2V0IGRpc3BsYXlTdGVwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5U3RlcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGRpc3BsYXkgdGhlIHN0ZXAgb3Igbm90XG4gICAqL1xuICBzZXQgZGlzcGxheVN0ZXAoc2hvdWxkRGlzcGxheTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc3BsYXlTdGVwID0gc2hvdWxkRGlzcGxheTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGdldCBkaXNwbGF5TGluZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheUxpbmU7XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciB0byBkaXNwbGF5IHRoZSBzdGVwIG9yIG5vdFxuICAgKi9cbiAgc2V0IGRpc3BsYXlMaW5lKHNob3VsZERpc3BsYXk6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNwbGF5TGluZSA9IHNob3VsZERpc3BsYXk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciBzdGVwIGlzIGFjdGl2ZVxuICAgKi9cbiAgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG5cbiAgLyoqXG4gICAqIFdpZHRoIG9mIHRoZSBET00gZWxlbWVudCBvZiB0aGUgc3RlcFxuICAgKi9cbiAgZ2V0IHdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGRpc3BsYXkgc3R5bGUgb2YgdGhlIGNydW1iXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmRpc3BsYXknKVxuICBnZXQgZGlzcGxheUJpbmRpbmcoKTogc3RyaW5nIHtcbiAgICAvLyBTZXQgdGhlIGRpc3BsYXkgdG8gbm9uZSBvbiB0aGUgY29tcG9uZW50LCBqdXN0IGluIGNhc2UgdGhlIGVuZCB1c2VyIGlzIGhpZGluZ1xuICAgIC8vIGFuZCBzaG93aW5nIHRoZW0gaW5zdGVhZCBvZiB0aGUgY29tcG9uZW50IGRvaW5nIGl0c2VsZiBmb3IgcmVhc29ucyBsaWtlIHJlc3BvbnNpdmVcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheVN0ZXAgPyB1bmRlZmluZWQgOiAnbm9uZSc7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgLy8gc2V0IHRoZSB3aWR0aCBmcm9tIHRoZSBhY3R1YWwgcmVuZGVyZWQgRE9NIGVsZW1lbnRcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX3dpZHRoID0gKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBTZXQgdGhpcyBzdGVwIHRvIGFjdGl2ZSBpZiB0aGUgc3RlcCByb3V0ZSBhbmQgYWN0aXZlIHJvdXRlIGFyZSB0aGUgc2FtZVxuICAgIGlmICh0aGlzLnJvdXRlci51cmwgPT09IHRoaXMucm91dGVyTGluaykge1xuICAgICAgdGhpcy5fYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgT25Jbml0LCBPbkRlc3Ryb3ksIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBcbiAgICAgICAgIEFmdGVyQ29udGVudEluaXQsIERvQ2hlY2ssIENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIFN1YmplY3QsIGZyb21FdmVudCwgbWVyZ2UgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFRkTmF2U3RlcENvbXBvbmVudCB9IGZyb20gJy4uL25hdi1zdGVwL25hdi1zdGVwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWhvcml6b250YWwtbmF2LXN0ZXBwZXInLFxuICBzdHlsZVVybHM6IFsnLi9ob3Jpem9udGFsLW5hdi1zdGVwcGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9ob3Jpem9udGFsLW5hdi1zdGVwcGVyLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkSG9yaXpvbnRhbFN0ZXBwZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIERvQ2hlY2ssIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfcmVzaXplU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgX3dpZHRoU3ViamVjdDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuICBwcml2YXRlIF9yZXNpemluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9zaG93TGVmdEFycm93OiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3Nob3dSaWdodEFycm93OiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2xlZnRIaWRkZW46IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX3JpZ2h0SGlkZGVuOiBudW1iZXIgPSAwO1xuXG4gIC8vIGFsbCB0aGUgc3ViIGNvbXBvbmVudHMsIHdoaWNoIGFyZSB0aGUgaW5kaXZpZHVhbCBzdGVwc1xuICBAQ29udGVudENoaWxkcmVuKFRkTmF2U3RlcENvbXBvbmVudCkgX3N0ZXBzOiBRdWVyeUxpc3Q8VGROYXZTdGVwQ29tcG9uZW50PjtcbiAgLy8gdGhlIGxpc3Qgb2YgaGlkZGVuIHN0ZXBzIG5vdCBzaG93biByaWdodCBub3cgKHJlc3BvbnNpdmUpXG4gIGhpZGRlblN0ZXBzOiBUZE5hdlN0ZXBDb21wb25lbnRbXSA9IG5ldyBBcnJheSgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fcmVzaXplU3Vic2NyaXB0aW9uID0gbWVyZ2UoXG4gICAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJykucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDEwKSxcbiAgICAgICksXG4gICAgICB0aGlzLl93aWR0aFN1YmplY3QuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICksXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9yZXNpemluZykge1xuICAgICAgICB0aGlzLl9yZXNpemluZyA9IHRydWU7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZGlzcGxheVdpZHRoQXZhaWxhYmxlU3RlcHMoKTtcbiAgICAgICAgICB0aGlzLl9yZXNpemluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9LCAxMDApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9lbGVtZW50UmVmICYmIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5fd2lkdGhTdWJqZWN0Lm5leHQodGhpcy5uYXRpdmVFbGVtZW50V2lkdGgpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFN0ZXBTZXR0aW5ncygpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcmVzaXplU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKlxuICAqIEN1cnJlbnQgd2lkdGggb2YgdGhlIGVsZW1lbnQgY29udGFpbmVyXG4gICovXG4gIGdldCBuYXRpdmVFbGVtZW50V2lkdGgoKTogbnVtYmVyIHtcbiAgICBsZXQgZWxlbWVudDogSFRNTEVsZW1lbnQgPSAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG5cbiAgICAvLyBOZWVkIHRvIHRha2UgaW50byBhY2NvdW50IGJvcmRlciwgbWFyZ2luIGFuZCBwYWRkaW5nIHRoYXQgbWlnaHQgYmUgYXJvdW5kIGFsbCB0aGUgY3J1bWJzXG4gICAgbGV0IHN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgbGV0IGJvcmRlckxlZnQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLmJvcmRlckxlZnQsIDEwKTtcbiAgICBsZXQgYm9yZGVyUmlnaHQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLmJvcmRlclJpZ2h0LCAxMCk7XG4gICAgbGV0IG1hcmdpbkxlZnQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLm1hcmdpbkxlZnQsIDEwKTtcbiAgICBsZXQgbWFyZ2luUmlnaHQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLm1hcmdpblJpZ2h0LCAxMCk7XG4gICAgbGV0IHBhZGRpbmdMZWZ0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5wYWRkaW5nTGVmdCwgMTApO1xuICAgIGxldCBwYWRkaW5nUmlnaHQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLnBhZGRpbmdSaWdodCwgMTApO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSBib3JkZXJMZWZ0IC0gYm9yZGVyUmlnaHQgLSBtYXJnaW5MZWZ0IC0gbWFyZ2luUmlnaHQgLSBwYWRkaW5nTGVmdCAtIHBhZGRpbmdSaWdodDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdG90YWwgY291bnQgb2YgaW5kaXZpZHVhbCBzdGVwc1xuICAgKi9cbiAgZ2V0IGNvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3N0ZXBzID8gdGhpcy5fc3RlcHMubGVuZ3RoIDogMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG91bGQgd2Ugc2hvdyB0aGUgbGVmdCBBcnJvd1xuICAgKi9cbiAgZ2V0IHNob3dMZWZ0QXJyb3coKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dMZWZ0QXJyb3c7XG4gIH1cblxuICAvKipcbiAgICogU2hvdWxkIHdlIHNob3cgdGhlIHJpZ2h0IEFycm93XG4gICAqL1xuICBnZXQgc2hvd1JpZ2h0QXJyb3coKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dSaWdodEFycm93O1xuICB9XG5cbiAgcHVibGljIHNob3dIaWRkZW5MZWZ0U3RlcCgpOiB2b2lkIHtcbiAgICBsZXQgc3RlcHNBcnJheTogVGROYXZTdGVwQ29tcG9uZW50W10gPSB0aGlzLl9zdGVwcy50b0FycmF5KCk7XG4gICAgLy8gc2hvdyB0aGUgbGVmdCBvbmVcbiAgICBzdGVwc0FycmF5W3RoaXMuX2xlZnRIaWRkZW4gLSAxXS5kaXNwbGF5U3RlcCA9IHRydWU7XG4gICAgdGhpcy5oaWRkZW5TdGVwcy5zcGxpY2UodGhpcy5fbGVmdEhpZGRlbiAtIDEsIDEpO1xuICAgIHRoaXMuX2xlZnRIaWRkZW4tLTtcbiAgICAvLyBJZiBubyBtb3JlIGhpZGRlbiBzdGVwcyB0aGVuIGhpZGUgbGVmdCBhcnJvd1xuICAgIGlmICh0aGlzLl9sZWZ0SGlkZGVuID09PSAwKSB7XG4gICAgICB0aGlzLl9zaG93TGVmdEFycm93ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gaGlkZSB0aGUgcmlnaHQgb25lXG4gICAgc3RlcHNBcnJheVtzdGVwc0FycmF5Lmxlbmd0aCAtICh0aGlzLl9yaWdodEhpZGRlbiArIDEpXS5kaXNwbGF5U3RlcCA9IGZhbHNlO1xuICAgIHN0ZXBzQXJyYXlbc3RlcHNBcnJheS5sZW5ndGggLSAodGhpcy5fcmlnaHRIaWRkZW4gKyAyKV0uZGlzcGxheUxpbmUgPSBmYWxzZTtcbiAgICB0aGlzLmhpZGRlblN0ZXBzLnB1c2goc3RlcHNBcnJheVtzdGVwc0FycmF5Lmxlbmd0aCAtIDFdKTtcbiAgICB0aGlzLl9yaWdodEhpZGRlbisrO1xuXG4gICAgdGhpcy5fc2hvd1JpZ2h0QXJyb3cgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIHNob3dIaWRkZW5SaWdodFN0ZXAoKTogdm9pZCB7XG4gICAgbGV0IHN0ZXBzQXJyYXk6IFRkTmF2U3RlcENvbXBvbmVudFtdID0gdGhpcy5fc3RlcHMudG9BcnJheSgpO1xuICAgIC8vIHNob3cgdGhlIHJpZ2h0IG9uZVxuICAgIHN0ZXBzQXJyYXlbc3RlcHNBcnJheS5sZW5ndGggLSB0aGlzLl9yaWdodEhpZGRlbl0uZGlzcGxheVN0ZXAgPSB0cnVlO1xuICAgIHN0ZXBzQXJyYXlbc3RlcHNBcnJheS5sZW5ndGggLSAodGhpcy5fcmlnaHRIaWRkZW4gKyAxKV0uZGlzcGxheUxpbmUgPSB0cnVlO1xuICAgIHRoaXMuaGlkZGVuU3RlcHMucG9wKCk7XG4gICAgdGhpcy5fcmlnaHRIaWRkZW4tLTtcbiAgICAvLyBJZiBubyBtb3JlIGhpZGRlbiBzdGVwcyB0aGVuIGhpZGUgcmlnaHQgYXJyb3dcbiAgICBpZiAodGhpcy5fcmlnaHRIaWRkZW4gPT09IDApIHtcbiAgICAgIHRoaXMuX3Nob3dSaWdodEFycm93ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gaGlkZSB0aGUgbGVmdCBvbmVcbiAgICBzdGVwc0FycmF5W3RoaXMuX2xlZnRIaWRkZW5dLmRpc3BsYXlTdGVwID0gZmFsc2U7XG4gICAgdGhpcy5oaWRkZW5TdGVwcy5wdXNoKHN0ZXBzQXJyYXlbdGhpcy5fbGVmdEhpZGRlbl0pO1xuICAgIHRoaXMuX2xlZnRIaWRkZW4rKztcblxuICAgIHRoaXMuX3Nob3dMZWZ0QXJyb3cgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc3RlcCBsaW5lIHNlcGFyYXRvcnMgYW5kIGRpc3BsYXkgbnVtYmVyc1xuICAgKi9cbiAgcHJpdmF0ZSBzZXRTdGVwU2V0dGluZ3MoKTogdm9pZCB7XG4gICAgbGV0IHN0ZXBzQXJyYXk6IFRkTmF2U3RlcENvbXBvbmVudFtdID0gdGhpcy5fc3RlcHMudG9BcnJheSgpO1xuICAgIGlmIChzdGVwc0FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIGRvbid0IHNob3cgdGhlIGljb24gb24gdGhlIGxhc3QgYnJlYWRjcnVtYlxuICAgICAgc3RlcHNBcnJheVtzdGVwc0FycmF5Lmxlbmd0aCAtIDFdLmRpc3BsYXlMaW5lID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHNldCB0aGUgaW5kZXggbnVtYmVyIG9mIHRoZSBzdGVwIHNvIGNhbiBkaXNwbGF5IHRoYXQgbnVtYmVyIGluIGNpcmNsZVxuICAgIHN0ZXBzQXJyYXkuZm9yRWFjaCgoc3RlcDogVGROYXZTdGVwQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBzdGVwLm51bWJlciA9IGluZGV4ICsgMTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZGlzcGxheVdpZHRoQXZhaWxhYmxlU3RlcHMoKTogdm9pZCB7XG4gICAgbGV0IGN1clRvdFN0ZXBXaWR0aDogbnVtYmVyID0gMDtcbiAgICBsZXQgc3RlcHNBcnJheTogVGROYXZTdGVwQ29tcG9uZW50W10gPSB0aGlzLl9zdGVwcy50b0FycmF5KCk7XG4gICAgLy8gY2FsY3VsYXRlIHRoZSBjdXJyZW50IHdpZHRoIG9mIHRoZSBzaG93biBzdGVwc1xuICAgIGZvciAobGV0IGk6IG51bWJlciA9IHRoaXMuaGlkZGVuU3RlcHMubGVuZ3RoOyBpIDwgc3RlcHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY3VyVG90U3RlcFdpZHRoICs9IHN0ZXBzQXJyYXlbaV0ud2lkdGg7XG4gICAgfVxuICAgIC8vIGdldCB0aGUgYWN0aXZlIHN0ZXAgaW5kZXhcbiAgICBsZXQgYWN0aXZlSW5kZXg6IG51bWJlciA9IHN0ZXBzQXJyYXkuZmluZEluZGV4KChzdGVwOiBUZE5hdlN0ZXBDb21wb25lbnQpID0+IHtcbiAgICAgIHJldHVybiBzdGVwLmFjdGl2ZSA9PT0gdHJ1ZTtcbiAgICB9KTtcbiAgICAvLyBoaWRlIHRoZSBmaXJzdCBzdGVwIGlmIHdpbmRvdyBzaXplIGlzIHNtYWxsZXIgdGhhbiBhbGwgdGhlIHN0ZXAgc2l6ZXNcbiAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50V2lkdGggPCBjdXJUb3RTdGVwV2lkdGgpIHtcbiAgICAgIC8vIGRldGVybWluZSBpZiB0aGUgYWN0aXZlIHN0ZXAgaXMgaW4gdGhlIGZpcnN0IG9yIHNlY29uZCBoYWxmIG9mIHRoZSBsaXN0XG4gICAgICAvLyBhbmQgY2hlY2sgdGhhdCBhbGwgdGhlIGxlZnQgb25lcyBhcmVuJ3QgYWxyZWFkeSBoaWRkZW4gKDJuZCBjaGVjayBhZnRlciAmJiBkb2VzIHRoYXQpXG4gICAgICAvLyBhbmQgaGlkZSBvbiB0aGUgb3Bwb3NpdGUgc2lkZSBvZiB0aGF0XG4gICAgICBpZiAoKGFjdGl2ZUluZGV4ID49IHN0ZXBzQXJyYXkubGVuZ3RoIC8gMikgJiYgKHRoaXMuX2xlZnRIaWRkZW4gPCBhY3RpdmVJbmRleCkpIHtcbiAgICAgICAgLy8gbGVmdFxuICAgICAgICB0aGlzLl9zaG93UmlnaHRBcnJvdyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9zaG93TGVmdEFycm93ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fbGVmdEhpZGRlbisrO1xuICAgICAgICBzdGVwc0FycmF5W3RoaXMuX2xlZnRIaWRkZW4gLSAxXS5kaXNwbGF5U3RlcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhpZGRlblN0ZXBzLnB1c2goc3RlcHNBcnJheVt0aGlzLmhpZGRlblN0ZXBzLmxlbmd0aF0pO1xuICAgICAgLy8gQ2hlY2sgdG8gc2VlIHRoYXQgYWxsIHRoZSBwb3NzaWJsZSBvbmVzIG9uIHRoZSByaWdodCBhcmVuJ3QgYWxyZWFkeSBoaWRkZW5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fcmlnaHRIaWRkZW4gPCBzdGVwc0FycmF5Lmxlbmd0aCAtIGFjdGl2ZUluZGV4KSB7XG4gICAgICAgIC8vIHJpZ2h0XG4gICAgICAgIHRoaXMuX3Nob3dSaWdodEFycm93ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fc2hvd0xlZnRBcnJvdyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9yaWdodEhpZGRlbisrO1xuICAgICAgICBzdGVwc0FycmF5W3N0ZXBzQXJyYXkubGVuZ3RoIC0gdGhpcy5fcmlnaHRIaWRkZW5dLmRpc3BsYXlTdGVwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGlkZGVuU3RlcHMucHVzaChzdGVwc0FycmF5W3N0ZXBzQXJyYXkubGVuZ3RoIC0gdGhpcy5fcmlnaHRIaWRkZW5dKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGlzcGxheVdpZHRoQXZhaWxhYmxlU3RlcHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbG9vcCBvdmVyIGFsbCB0aGUgaGlkZGVuIHN0ZXBzIGFuZCBzZWUgaWYgYWRkaW5nIHRoZW0gYmFjayBpbiB3aWxsXG4gICAgICAvLyBmaXQgaW4gdGhlIGN1cnJlbnQgd2luZG93IHNpemVcbiAgICAgIGxldCB0b3RhbEhpZGRlbjogbnVtYmVyID0gdGhpcy5oaWRkZW5TdGVwcy5sZW5ndGggLSAxO1xuICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gdG90YWxIaWRkZW47IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGxldCBoaWRkZW5TdGVwV2lkdGg6IG51bWJlciA9IHN0ZXBzQXJyYXlbaV0ud2lkdGg7XG4gICAgICAgIGlmICgoY3VyVG90U3RlcFdpZHRoICsgaGlkZGVuU3RlcFdpZHRoKSA8IHRoaXMubmF0aXZlRWxlbWVudFdpZHRoKSB7XG4gICAgICAgICAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBhY3RpdmUgc3RlcCBpcyBpbiB0aGUgZmlyc3Qgb3Igc2Vjb25kIGhhbGYgb2YgdGhlIGxpc3RcbiAgICAgICAgICAvLyBhbmQgaWYgaXRzIHJpZ2h0IGFuZCB0aGVyZSBhcmUgaGlkZGVuIGxlZnQgc3RlcHNcbiAgICAgICAgICAvLyBvciBpZiBpdCBsZWZ0IGFuZCB0aGVyZSBhcmUgbm8gcmlnaHQgaGlkZGVuIG9uZXMgYW5kIHNvbWUgbGVmdCBoaWRkZW4gKHVzaW5nIGFycm93cyBjYW4gY2F1c2UgaXQgdG8gYmUgdW5iYWxhbmNlZClcbiAgICAgICAgICAvLyB0aGVuIHNob3cgdGhlIGhpZGRlbiBvbmVzIG9uIHRoZSBsZWZ0XG4gICAgICAgICAgaWYgKChhY3RpdmVJbmRleCA+PSBzdGVwc0FycmF5Lmxlbmd0aCAvIDIgJiYgdGhpcy5fbGVmdEhpZGRlbiA+IDApIHx8IFxuICAgICAgICAgICAgICAoYWN0aXZlSW5kZXggPCBzdGVwc0FycmF5Lmxlbmd0aCAvIDIgJiYgdGhpcy5fcmlnaHRIaWRkZW4gPT09IDAgJiYgdGhpcy5fbGVmdEhpZGRlbiA+IDApKSB7XG4gICAgICAgICAgICAvLyBsZWZ0XG4gICAgICAgICAgICBzdGVwc0FycmF5W3RoaXMuX2xlZnRIaWRkZW4gLSAxXS5kaXNwbGF5U3RlcCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmhpZGRlblN0ZXBzLnNoaWZ0KCk7XG4gICAgICAgICAgICB0aGlzLl9sZWZ0SGlkZGVuLS07XG4gICAgICAgICAgICAvLyBJZiBubyBtb3JlIGhpZGRlbiBzdGVwcyB0aGVuIGhpZGUgbGVmdCBhcnJvd1xuICAgICAgICAgICAgaWYgKHRoaXMuX2xlZnRIaWRkZW4gPT09IDApIHtcbiAgICAgICAgICAgICAgdGhpcy5fc2hvd0xlZnRBcnJvdyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGFyZSBhbnkgb24gdGhlIHJpZ2h0IGhpZGRlbiBhbmQgc2hvdyB0aGVtXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9yaWdodEhpZGRlbiA+IDApIHtcbiAgICAgICAgICAgIC8vIHJpZ2h0XG4gICAgICAgICAgICBzdGVwc0FycmF5W3N0ZXBzQXJyYXkubGVuZ3RoIC0gdGhpcy5fcmlnaHRIaWRkZW5dLmRpc3BsYXlTdGVwID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaGlkZGVuU3RlcHMucG9wKCk7XG4gICAgICAgICAgICB0aGlzLl9yaWdodEhpZGRlbi0tO1xuICAgICAgICAgICAgLy8gSWYgbm8gbW9yZSBoaWRkZW4gc3RlcHMgdGhlbiBoaWRlIHJpZ2h0IGFycm93XG4gICAgICAgICAgICBpZiAodGhpcy5fcmlnaHRIaWRkZW4gPT09IDApIHtcbiAgICAgICAgICAgICAgdGhpcy5fc2hvd1JpZ2h0QXJyb3cgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gcmVjYWxjdWxhdGUgdGhlIHRvdGFsIHdpZHRoIGJhc2VkIG9uIGFkZGluZyBiYWNrIGluIGEgc3RlcFxuICAgICAgICAgIGxldCBuZXdUb3RTdGVwV2lkdGg6IG51bWJlciA9IDA7XG4gICAgICAgICAgZm9yIChsZXQgajogbnVtYmVyID0gdGhpcy5oaWRkZW5TdGVwcy5sZW5ndGg7IGogPCBzdGVwc0FycmF5Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBuZXdUb3RTdGVwV2lkdGggKz0gc3RlcHNBcnJheVtqXS53aWR0aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3VyVG90U3RlcFdpZHRoID0gbmV3VG90U3RlcFdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IHRvdGFsSGlkZGVuKSB7XG4gICAgICAgICAgLy8gbmVlZCB0byBicmVhayBvdXQgb2YgbG9vcCBoZXJlIGJlY2F1c2UgdGhlIGZpcnN0IGluIHRoZSBoaWRkZW5cbiAgICAgICAgICAvLyBsaXN0IGNhbid0IGZpdCBpbiBjdXJyZW50IHdpbmRvdyBzaXplXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElDYW5EaXNhYmxlLCBtaXhpbkRpc2FibGVkLCBJQ2FuRGlzYWJsZVJpcHBsZSwgbWl4aW5EaXNhYmxlUmlwcGxlIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuaW1wb3J0IHsgU3RlcFN0YXRlIH0gZnJvbSAnLi4vbmF2LXN0ZXAvbmF2LXN0ZXAuY29tcG9uZW50JztcblxuZXhwb3J0IGNsYXNzIFRkTmF2U3RlcEhlYWRlckJhc2Uge31cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkTmF2U3RlcEhlYWRlck1peGluQmFzZSA9IG1peGluRGlzYWJsZVJpcHBsZShtaXhpbkRpc2FibGVkKFRkTmF2U3RlcEhlYWRlckJhc2UpKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbmF2LXN0ZXAtaGVhZGVyJyxcbiAgaW5wdXRzOiBbJ2Rpc2FibGVSaXBwbGUnXSxcbiAgc3R5bGVVcmxzOiBbJy4vbmF2LXN0ZXAtaGVhZGVyLmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2LXN0ZXAtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGROYXZTdGVwSGVhZGVyQ29tcG9uZW50IGV4dGVuZHMgX1RkTmF2U3RlcEhlYWRlck1peGluQmFzZSBpbXBsZW1lbnRzIElDYW5EaXNhYmxlLCBJQ2FuRGlzYWJsZVJpcHBsZSB7XG5cbiAgLyoqXG4gICAqIFNob3VsZCBkaXNwbGF5IHRoZSBsaW5lIGFmdGVyIHRoZSBzdGVwXG4gICAqL1xuICBASW5wdXQoJ2Rpc3BsYXlMaW5lJykgZGlzcGxheUxpbmU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIE51bWJlciBhc3NpZ25lZCB0byBbVGROYXZTdGVwSGVhZGVyQ29tcG9uZW50XS5cbiAgICovXG4gIEBJbnB1dCgnbnVtYmVyJykgbnVtYmVyOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIGFjdGl2ZT86IGJvb2xlYW5cbiAgICogU2V0cyBmb3IgYWN0aXZlL2luYWN0aXZlIHN0YXRlcyBvbiBoZWFkZXIuXG4gICAqL1xuICBASW5wdXQoJ2FjdGl2ZScpIGFjdGl2ZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogc3RhdGU/OiBTdGVwU3RhdGUgb3IgWydub25lJyB8ICdyZXF1aXJlZCcgfCAnY29tcGxldGUnXVxuICAgKiBTZXRzIHN0eWxlcyBmb3Igc3RhdGUgb2YgaGVhZGVyLlxuICAgKiBEZWZhdWx0cyB0byBbU3RlcFN0YXRlLk5vbmUgfCAnbm9uZSddLlxuICAgKi9cbiAgQElucHV0KCdzdGF0ZScpIHN0YXRlOiBTdGVwU3RhdGUgPSBTdGVwU3RhdGUuTm9uZTtcblxuICAvKipcbiAgICogUmV0dXJucyAndHJ1ZScgaWYgW3N0YXRlXSBlcXVhbHMgdG8gW1N0ZXBTdGF0ZS5Db21wbGV0ZSB8ICdjb21wbGV0ZSddLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBpc0NvbXBsZXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBTdGVwU3RhdGUuQ29tcGxldGU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyAndHJ1ZScgaWYgW3N0YXRlXSBlcXVhbHMgdG8gW1N0ZXBTdGF0ZS5SZXF1aXJlZCB8ICdyZXF1aXJlZCddLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBpc1JlcXVpcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBTdGVwU3RhdGUuUmVxdWlyZWQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuXG5pbXBvcnQgeyBUZEhvcml6b250YWxTdGVwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9ob3Jpem9udGFsLW5hdi1zdGVwcGVyL2hvcml6b250YWwtbmF2LXN0ZXBwZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRkTmF2U3RlcENvbXBvbmVudCB9IGZyb20gJy4vbmF2LXN0ZXAvbmF2LXN0ZXAuY29tcG9uZW50JztcbmltcG9ydCB7IFRkTmF2U3RlcEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vbmF2LXN0ZXAtaGVhZGVyL25hdi1zdGVwLWhlYWRlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgIFBvcnRhbE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGRIb3Jpem9udGFsU3RlcHBlckNvbXBvbmVudCxcbiAgICBUZE5hdlN0ZXBDb21wb25lbnQsXG4gICAgVGROYXZTdGVwSGVhZGVyQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVGRIb3Jpem9udGFsU3RlcHBlckNvbXBvbmVudCxcbiAgICBUZE5hdlN0ZXBDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50TmF2U3RlcHBlck1vZHVsZSB7XG5cbn1cbiIsImltcG9ydCB7IFR5cGUsIEluamVjdGFibGUsIEluamVjdG9yLCDDicK1UmVmbGVjdGlvbkNhcGFiaWxpdGllcywgSW5qZWN0RmxhZ3MsIE9wdGlvbmFsLFxuICBTa2lwU2VsZiwgU2VsZiwgSW5qZWN0LCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSwgSGVhZGVycywgVVJMU2VhcmNoUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBIdHRwSW50ZXJjZXB0b3JTZXJ2aWNlIH0gZnJvbSAnQGNvdmFsZW50L2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgdHlwZSBUZEh0dHBNZXRob2QgPSAnR0VUJyB8ICdQT1NUJyB8ICdQQVRDSCcgfCAnREVMRVRFJyB8ICdIRUFEJyB8ICdQVVQnIHwgJ09QVElPTlMnO1xuXG5leHBvcnQgdHlwZSBUZEh0dHBSRVNUUmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcblxuZXhwb3J0IHR5cGUgVGRIdHRwUkVTVE9ic2VydmUgPSAnYm9keScgfCAncmVzcG9uc2UnIHwgJ2V2ZW50cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkSHR0cFJFU1RDb25maWcge1xuICBiYXNlSGVhZGVycz86IEh0dHBIZWFkZXJzO1xuICBiYXNlVXJsOiBzdHJpbmc7XG4gIGRlZmF1bHRPYnNlcnZlPzogVGRIdHRwUkVTVE9ic2VydmU7XG4gIGRlZmF1bHRSZXNwb25zZVR5cGU/OiBUZEh0dHBSRVNUUmVzcG9uc2VUeXBlO1xuICBodHRwU2VydmljZVR5cGU/OiBUeXBlPEh0dHAgfCBIdHRwQ2xpZW50IHwgSHR0cEludGVyY2VwdG9yU2VydmljZT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkSHR0cFJFU1RPcHRpb25zIHtcbiAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xuICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICB9O1xuICBvYnNlcnZlPzogVGRIdHRwUkVTVE9ic2VydmU7XG4gIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XG4gICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgfTtcbiAgcmVzcG9uc2VUeXBlPzogVGRIdHRwUkVTVFJlc3BvbnNlVHlwZTtcbiAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZEh0dHBSRVNUT3B0aW9uc1dpdGhCb2R5IGV4dGVuZHMgSVRkSHR0cFJFU1RPcHRpb25zIHtcbiAgYm9keT86IGFueTtcbn1cblxuZXhwb3J0IGNvbnN0IE5PT1BfSFRUUDogT2JzZXJ2YWJsZTxhbnk+ID0gb2YodW5kZWZpbmVkKTtcblxudHlwZSBDb25zdHJ1Y3RvcjxUPiA9IG5ldyAoLi4uYXJnczogYW55W10pID0+IFQ7XG5cbi8qKlxuICogRE8gTk9UIE1PRElGWVxuICogVGFrZW4gZnJvbSBhbmd1bGFyIHNpbmNlIHRoZXkgZG9udCBleHBvc2UgdGhpcyBmdW5jdGlvblxuICogVGhpcyBpcyB1c2VkIGludGVybmFsbHkgdG8gaW5qZWN0IHNlcnZpY2VzIGZyb20gdGhlIGNvbnN0cnVjdG9yIG9mIHRoZSBiYXNlIHNlcnZpY2UgdXNpbmcgdGhlIG1peGluSHR0cFxuICogQGludGVybmFsXG4gKi9cbmZ1bmN0aW9uIGluamVjdEFyZ3ModHlwZXM6IChUeXBlPGFueT58IEluamVjdGlvblRva2VuPGFueT58IGFueVtdKVtdLCBpbmplY3RvcjogSW5qZWN0b3IpOiBhbnlbXSB7XG4gIGNvbnN0IGFyZ3M6IGFueVtdID0gW107XG4gIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0eXBlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGFyZzogYW55ID0gdHlwZXNbaV07XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuICAgICAgaWYgKGFyZy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcmd1bWVudHMgYXJyYXkgbXVzdCBoYXZlIGFyZ3VtZW50cy4nKTtcbiAgICAgIH1cbiAgICAgIGxldCB0eXBlOiBUeXBlPGFueT58dW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgICAgbGV0IGZsYWdzOiBJbmplY3RGbGFncyA9IEluamVjdEZsYWdzLkRlZmF1bHQ7XG5cbiAgICAgIGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBhcmcubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3QgbWV0YTogYW55ID0gYXJnW2pdO1xuICAgICAgICBpZiAobWV0YSBpbnN0YW5jZW9mIE9wdGlvbmFsIHx8IG1ldGEubmdNZXRhZGF0YU5hbWUgPT09ICdPcHRpb25hbCcpIHtcbiAgICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuICAgICAgICAgIGZsYWdzIHw9IEluamVjdEZsYWdzLk9wdGlvbmFsO1xuICAgICAgICB9IGVsc2UgaWYgKG1ldGEgaW5zdGFuY2VvZiBTa2lwU2VsZiB8fCBtZXRhLm5nTWV0YWRhdGFOYW1lID09PSAnU2tpcFNlbGYnKSB7XG4gICAgICAgICAgZmxhZ3MgfD0gSW5qZWN0RmxhZ3MuU2tpcFNlbGY7XG4gICAgICAgIH0gZWxzZSBpZiAobWV0YSBpbnN0YW5jZW9mIFNlbGYgfHwgbWV0YS5uZ01ldGFkYXRhTmFtZSA9PT0gJ1NlbGYnKSB7XG4gICAgICAgICAgZmxhZ3MgfD0gSW5qZWN0RmxhZ3MuU2VsZjtcbiAgICAgICAgfSBlbHNlIGlmIChtZXRhIGluc3RhbmNlb2YgSW5qZWN0KSB7XG4gICAgICAgICAgdHlwZSA9IG1ldGEudG9rZW47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHlwZSA9IG1ldGE7XG4gICAgICAgIH1cbiAgICAgICAgLyogdHNsaW50OmVuYWJsZSAqL1xuICAgICAgfVxuXG4gICAgICBhcmdzLnB1c2goaW5qZWN0b3IuZ2V0KHR5cGUgISwgZmxhZ3MpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJncy5wdXNoKGluamVjdG9yLmdldChhcmcpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFyZ3M7XG59XG5cbi8qKiBcbiAqIE1peGluIHRvIGF1Z21lbnQgYSBzZXJ2aWNlIHdpdGggaHR0cCBoZWxwZXJzLlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkh0dHAoYmFzZTogYW55LCBjb25maWc6IElUZEh0dHBSRVNUQ29uZmlnKTogQ29uc3RydWN0b3I8YW55PiB7XG4gIC8qKlxuICAgKiBJbnRlcm5hbCBjbGFzcyB1c2VkIHRvIGdldCBhbiBpbnN0YW5jZSBvZiBJbmplY3RvciBmb3IgaW50ZXJuYWwgdXNhZ2UgcGx1cyBhbHNvXG4gICAqIGEgd2F5IHRvIGluamVjdCBzZXJ2aWNlcyBmcm9tIHRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgdW5kZXJseWluZyBzZXJ2aWNlXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgQEluamVjdGFibGUoKVxuICBhYnN0cmFjdCBjbGFzcyBIdHRwSW50ZXJuYWxDbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgICBzdXBlciguLi5pbmplY3RBcmdzKG5ldyDDicK1UmVmbGVjdGlvbkNhcGFiaWxpdGllcygpLnBhcmFtZXRlcnMoYmFzZSksIF9pbmplY3RvcikpO1xuICAgICAgdGhpcy5idWlsZENvbmZpZygpO1xuICAgIH1cbiAgICBhYnN0cmFjdCBidWlsZENvbmZpZygpOiB2b2lkO1xuICB9XG4gIC8qKlxuICAgKiBBY3R1YWxsIGNsYXNzIGJlaW5nIHJldHVybmVkIHdpdGggYWxsIHRoZSBob29rcyBmb3IgaHR0cCB1c2FnZVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIEh0dHBJbnRlcm5hbENsYXNzIHtcbiAgICBwcml2YXRlIF9iYXNlVXJsOiBzdHJpbmc7XG4gICAgZ2V0IGJhc2VVcmwoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAodHlwZW9mKHRoaXMuYmFzZVBhdGgpID09PSAnc3RyaW5nJyA/XG4gICAgICAgIHRoaXMuYmFzZVBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSA6ICcnKSArIHRoaXMuX2Jhc2VVcmw7XG4gICAgfVxuICAgIHByaXZhdGUgX2Jhc2VIZWFkZXJzOiBIdHRwSGVhZGVycztcbiAgICBwcml2YXRlIF9kZWZhdWx0T2JzZXJ2ZT86IFRkSHR0cFJFU1RPYnNlcnZlO1xuICAgIHByaXZhdGUgX2RlZmF1bHRSZXNwb25zZVR5cGU/OiBUZEh0dHBSRVNUUmVzcG9uc2VUeXBlO1xuXG4gICAgaHR0cDogSHR0cENsaWVudCB8IEh0dHBJbnRlcmNlcHRvclNlcnZpY2UgfCBIdHRwO1xuXG4gICAgLyoqXG4gICAgICogTWV0aG9kIHVzZWQgdG8gc2V0dXAgdGhlIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBhbmQgZ2V0IGFuIGluc3RhbmNlIG9mIHRoZSBodHRwIHNlcnZpY2VcbiAgICAgKi9cbiAgICBidWlsZENvbmZpZygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaHR0cCA9IHRoaXMuX2luamVjdG9yLmdldChjb25maWcuaHR0cFNlcnZpY2VUeXBlIHx8IEh0dHBDbGllbnQpO1xuICAgICAgdGhpcy5fYmFzZVVybCA9IGNvbmZpZyAmJiBjb25maWcuYmFzZVVybCA/IGNvbmZpZy5iYXNlVXJsLnJlcGxhY2UoL1xcLyQvLCAnJykgOiAnJztcbiAgICAgIHRoaXMuX2Jhc2VIZWFkZXJzID0gY29uZmlnICYmIGNvbmZpZy5iYXNlSGVhZGVycyA/IGNvbmZpZy5iYXNlSGVhZGVycyA6IG5ldyBIdHRwSGVhZGVycygpO1xuICAgICAgdGhpcy5fZGVmYXVsdE9ic2VydmUgPSBjb25maWcgJiYgY29uZmlnLmRlZmF1bHRPYnNlcnZlID8gY29uZmlnLmRlZmF1bHRPYnNlcnZlIDogJ2JvZHknO1xuICAgICAgdGhpcy5fZGVmYXVsdFJlc3BvbnNlVHlwZSA9IGNvbmZpZyAmJiBjb25maWcuZGVmYXVsdFJlc3BvbnNlVHlwZSA/IGNvbmZpZy5kZWZhdWx0UmVzcG9uc2VUeXBlIDogJ2pzb24nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ldGhvZCB1c2VkIHRvIGJ1aWxkIHRoZSBkZWZhdWx0IGhlYWRlcnMgdXNpbmcgdGhlIGJhc2UgaGVhZGVyc1xuICAgICAqL1xuICAgIGJ1aWxkSGVhZGVycygpOiBIdHRwSGVhZGVycyB7XG4gICAgICBsZXQgaGVhZGVyc09iajoge1trZXk6IHN0cmluZ106IGFueX0gPSB7fTtcbiAgICAgIHRoaXMuX2Jhc2VIZWFkZXJzLmtleXMoKS5mb3JFYWNoKChrZXk6IGFueSkgPT4ge1xuICAgICAgICBoZWFkZXJzT2JqW2tleV0gPSB0aGlzLl9iYXNlSGVhZGVycy5nZXQoa2V5KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBIdHRwSGVhZGVycyhoZWFkZXJzT2JqKTtcbiAgICB9XG5cbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICBidWlsZFJlcXVlc3Q8UmVzcG9uc2U+KG1ldGhvZDogJ1BPU1QnIHwgJ1BVVCcgfCAnUEFUQ0gnLCB1cmw6IHN0cmluZywgb3B0aW9ucz86IElUZEh0dHBSRVNUT3B0aW9uc1dpdGhCb2R5KTogT2JzZXJ2YWJsZTxSZXNwb25zZT47XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgYnVpbGRSZXF1ZXN0PEh0dHBSZXNwb25zZT4obWV0aG9kOiAnUE9TVCcgfCAnUFVUJyB8ICdQQVRDSCcsIHVybDogc3RyaW5nLCBvcHRpb25zPzogSVRkSHR0cFJFU1RPcHRpb25zV2l0aEJvZHkpOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZT47XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgYnVpbGRSZXF1ZXN0PFJlc3BvbnNlPihtZXRob2Q6ICdHRVQnIHwgJ0RFTEVURScsIHVybDogc3RyaW5nLCBvcHRpb25zPzogSVRkSHR0cFJFU1RPcHRpb25zKTogT2JzZXJ2YWJsZTxSZXNwb25zZT47XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgYnVpbGRSZXF1ZXN0PEh0dHBSZXNwb25zZT4obWV0aG9kOiAnR0VUJyB8ICdERUxFVEUnLCB1cmw6IHN0cmluZywgb3B0aW9ucz86IElUZEh0dHBSRVNUT3B0aW9ucyk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPjtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICBidWlsZFJlcXVlc3Q8UmVzcG9uc2U+KG1ldGhvZDogVGRIdHRwTWV0aG9kLCB1cmw6IHN0cmluZywgb3B0aW9ucz86IElUZEh0dHBSRVNUT3B0aW9uc1dpdGhCb2R5KTogT2JzZXJ2YWJsZTxSZXNwb25zZT47XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgYnVpbGRSZXF1ZXN0PEh0dHBSZXNwb25zZT4obWV0aG9kOiBUZEh0dHBNZXRob2QsIHVybDogc3RyaW5nLCBvcHRpb25zPzogSVRkSHR0cFJFU1RPcHRpb25zV2l0aEJvZHkpOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2J1aWxkUmVxdWVzdChtZXRob2QsIHVybCwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWV0aG9kIHVzZWQgdG8gYnVpbGQgdGhlIHJlcXVlc3QgZGVwZW5kaW5nIG9uIHRoZSBgaHR0cGAgc2VydmljZSBhbmQgVGRIdHRwTWV0aG9kXG4gICAgICovXG4gICAgcHJpdmF0ZSBfYnVpbGRSZXF1ZXN0KG1ldGhvZDogVGRIdHRwTWV0aG9kLCB1cmw6IHN0cmluZywgb3B0aW9uczogSVRkSHR0cFJFU1RPcHRpb25zV2l0aEJvZHkgPSB7fSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICBpZiAoIW9wdGlvbnMucmVzcG9uc2VUeXBlKSB7XG4gICAgICAgIG9wdGlvbnMucmVzcG9uc2VUeXBlID0gdGhpcy5fZGVmYXVsdFJlc3BvbnNlVHlwZTtcbiAgICAgIH1cbiAgICAgIGlmICghb3B0aW9ucy5vYnNlcnZlKSB7XG4gICAgICAgIG9wdGlvbnMub2JzZXJ2ZSA9IHRoaXMuX2RlZmF1bHRPYnNlcnZlO1xuICAgICAgfVxuICAgICAgaWYgKCFvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzID0gdGhpcy5idWlsZEhlYWRlcnMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IHRoaXMuYnVpbGRIZWFkZXJzKCk7XG4gICAgICAgIGlmIChvcHRpb25zLmhlYWRlcnMgaW5zdGFuY2VvZiBIdHRwSGVhZGVycykge1xuICAgICAgICAgICg8SHR0cEhlYWRlcnM+b3B0aW9ucy5oZWFkZXJzKS5rZXlzKCkuZm9yRWFjaCgoa2V5OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldChrZXksICg8SHR0cEhlYWRlcnM+b3B0aW9ucy5oZWFkZXJzKS5nZXQoa2V5KSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yIChsZXQga2V5IGluIG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KGtleSwgPGFueT5vcHRpb25zLmhlYWRlcnNba2V5XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMuaGVhZGVycyA9IGhlYWRlcnM7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5odHRwIGluc3RhbmNlb2YgSHR0cEludGVyY2VwdG9yU2VydmljZSB8fCB0aGlzLmh0dHAgaW5zdGFuY2VvZiBIdHRwKSB7XG4gICAgICAgIGxldCBoZWFkZXJzOiBIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgKDxIdHRwSGVhZGVycz5vcHRpb25zLmhlYWRlcnMpLmtleXMoKS5mb3JFYWNoKChrZXk6IGFueSkgPT4ge1xuICAgICAgICAgIGhlYWRlcnMuc2V0KGtleSwgKDxIdHRwSGVhZGVycz5vcHRpb25zLmhlYWRlcnMpLmdldChrZXkpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBwYXJhbXM6IFVSTFNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMucGFyYW1zKSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMucGFyYW1zIGluc3RhbmNlb2YgSHR0cFBhcmFtcykge1xuICAgICAgICAgICAgb3B0aW9ucy5wYXJhbXMua2V5cygpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgIHBhcmFtcy5zZXQoa2V5LCAoPEh0dHBQYXJhbXM+b3B0aW9ucy5wYXJhbXMpLmdldChrZXkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gb3B0aW9ucy5wYXJhbXMpIHtcbiAgICAgICAgICAgICAgcGFyYW1zLnNldChrZXksIDxhbnk+b3B0aW9ucy5wYXJhbXNba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiA9ICg8SHR0cEludGVyY2VwdG9yU2VydmljZT50aGlzLmh0dHApLnJlcXVlc3QodXJsLCB7XG4gICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICBib2R5OiBvcHRpb25zLmJvZHkgPyBvcHRpb25zLmJvZHkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAob3B0aW9ucy5vYnNlcnZlID09PSAnYm9keScpIHtcbiAgICAgICAgICBpZiAob3B0aW9ucy5yZXNwb25zZVR5cGUgPT09ICdqc29uJykge1xuICAgICAgICAgICAgcmV0dXJuIDxhbnk+b2JzZXJ2YWJsZS5waXBlKFxuICAgICAgICAgICAgICBtYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgICByZXR1cm4gPGFueT5vYnNlcnZhYmxlLnBpcGUoXG4gICAgICAgICAgICAgIG1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS50ZXh0KCkpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMucmVzcG9uc2VUeXBlID09PSAnYmxvYicpIHtcbiAgICAgICAgICAgIHJldHVybiA8YW55Pm9ic2VydmFibGUucGlwZShcbiAgICAgICAgICAgICAgbWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmJsb2IoKSksXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5yZXNwb25zZVR5cGUgPT09ICdhcnJheWJ1ZmZlcicpIHtcbiAgICAgICAgICAgIHJldHVybiA8YW55Pm9ic2VydmFibGUucGlwZShcbiAgICAgICAgICAgICAgbWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmFycmF5QnVmZmVyKCkpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5vYnNlcnZlID09PSAnZXZlbnRzJykge1xuICAgICAgICAgIHRocm93IEVycm9yKCdcImV2ZW50c1wiIG5vdCBzdXBwcG9ydGVkIGluIEBhbmd1bGFyL2h0dHAnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoPEh0dHBDbGllbnQ+dGhpcy5odHRwKS5yZXF1ZXN0KG1ldGhvZCwgdXJsLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG4iLCJkZWNsYXJlIGNvbnN0IFJlZmxlY3Q6IGFueTtcbmV4cG9ydCB0eXBlIFRkUGFyYW1UeXBlID0gJ3BhcmFtJyB8ICdyZXNwb25zZScgfCAnYm9keScgfCAncXVlcnlQYXJhbXMnO1xuXG5leHBvcnQgY29uc3QgdGRIdHRwUkVTVFBhcmFtOiBTeW1ib2wgPSBTeW1ib2woJ1RkSHR0cFJFU1RQYXJhbScpO1xuXG4vKipcbiAqIEFic3RyYWN0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBodHRwIHBhcmFtIGRlY29yYXRvclxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZEFic3RyYWN0UGFyYW0odHlwZTogVGRQYXJhbVR5cGUsIHBhcmFtPzogc3RyaW5nKTogRnVuY3Rpb24ge1xuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogT2JqZWN0LCBwcm9wZXJ0eUtleTogc3RyaW5nIHwgc3ltYm9sLCBwYXJhbWV0ZXJJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgbGV0IHBhcmFtZXRlcnM6IHsgaW5kZXg6IG51bWJlciwgcGFyYW06IHN0cmluZywgdHlwZTogVGRQYXJhbVR5cGUgfVtdID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YSh0ZEh0dHBSRVNUUGFyYW0sIHRhcmdldCwgcHJvcGVydHlLZXkpIHx8IFtdO1xuICAgIHBhcmFtZXRlcnMucHVzaCh7XG4gICAgICBpbmRleDogcGFyYW1ldGVySW5kZXgsXG4gICAgICBwYXJhbTogcGFyYW0sXG4gICAgICB0eXBlOiB0eXBlLFxuICAgIH0pO1xuICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEodGRIdHRwUkVTVFBhcmFtLCBwYXJhbWV0ZXJzLCB0YXJnZXQsIHByb3BlcnR5S2V5KTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IFRkSHR0cE1ldGhvZCwgSVRkSHR0cFJFU1RPcHRpb25zLCBJVGRIdHRwUkVTVE9wdGlvbnNXaXRoQm9keSwgTk9PUF9IVFRQIH0gZnJvbSAnLi4vLi4vaHR0cC5taXhpbic7XG5pbXBvcnQgeyBUZFBhcmFtVHlwZSwgdGRIdHRwUkVTVFBhcmFtIH0gZnJvbSAnLi4vcGFyYW1zL2Fic3RyYWN0LXBhcmFtLmRlY29yYXRvcic7XG5cbmRlY2xhcmUgY29uc3QgUmVmbGVjdDogYW55O1xuXG4vKipcbiAqIE1ldGhvZCB1c2VkIHRvIGNvcHkgcGFyYW1ldGVycyBmcm9tIGFuIGFycmF5IG9yIEh0dHBQYXJhbXMgb2JqZWN0XG4gKiBpbnRvIGEgY2VudHJpbGl6ZWQgSHR0cFBhcmFtcyBvYmplY3RcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQYXJhbXModGFyZ2V0OiBIdHRwUGFyYW1zLCBzb3VyY2U6IEh0dHBQYXJhbXMgfCB7W2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW119KTogSHR0cFBhcmFtcyB7XG4gIGxldCBxdWVyeVBhcmFtczogSHR0cFBhcmFtcyA9IHRhcmdldDtcbiAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEh0dHBQYXJhbXMpIHtcbiAgICBzb3VyY2Uua2V5cygpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAvLyBza2lwIGlmIHZhbHVlIGlzIHVuZGVmaW5lZFxuICAgICAgaWYgKCg8SHR0cFBhcmFtcz5zb3VyY2UpLmdldChrZXkpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcXVlcnlQYXJhbXMgPSBxdWVyeVBhcmFtcy5zZXQoa2V5LCAoPEh0dHBQYXJhbXM+c291cmNlKS5nZXQoa2V5KSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQga2V5IGluIHNvdXJjZSkge1xuICAgICAgLy8gc2tpcCBpZiB2YWx1ZSBpcyB1bmRlZmluZWRcbiAgICAgIGlmICg8YW55PnNvdXJjZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcXVlcnlQYXJhbXMgPSBxdWVyeVBhcmFtcy5zZXQoa2V5LCA8YW55PnNvdXJjZVtrZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHF1ZXJ5UGFyYW1zO1xufVxuXG4vKipcbiAqIEFic3RyYWN0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBodHRwIG1ldGhvZCBkZWNvcmF0b3JcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gVGRBYnN0cmFjdE1ldGhvZChjb25maWc6IHtcbiAgbWV0aG9kOiBUZEh0dHBNZXRob2QsXG4gIHBhdGg6IHN0cmluZyxcbiAgb3B0aW9ucz86IElUZEh0dHBSRVNUT3B0aW9ucyxcbn0pOiBGdW5jdGlvbiB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnksIHByb3BlcnR5TmFtZTogc3RyaW5nLCBkZXNjcmlwdG9yOiBUeXBlZFByb3BlcnR5RGVzY3JpcHRvcjxGdW5jdGlvbj4pOiBhbnkge1xuICAgIGxldCB3cmFwcGVkRnVuY3Rpb246IEZ1bmN0aW9uID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgICAvLyByZXBsYWNlIG1ldGhvZCBjYWxsIHdpdGggb3VyIG93biBhbmQgcHJveHkgaXRcbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24gKCk6IGFueSB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgcmVwbGFjZWRQYXRoOiBzdHJpbmcgPSBjb25maWcucGF0aDtcbiAgICAgICAgbGV0IHBhcmFtZXRlcnM6IHsgaW5kZXg6IG51bWJlciwgcGFyYW06IHN0cmluZywgdHlwZTogVGRQYXJhbVR5cGUgfVtdID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YSh0ZEh0dHBSRVNUUGFyYW0sIHRhcmdldCwgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgbGV0IG5ld0FyZ3M6IGFueVtdID0gW107XG4gICAgICAgIGxldCBib2R5OiBhbnk7XG4gICAgICAgIGxldCBxdWVyeVBhcmFtczogSHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgICAgIGlmIChwYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgLy8gbWFwIHBhcmFtZXRlcnMgYW5kIHNlZSB3aGljaCB0eXBlIHRoZXkgYXJlIHRvIGFjdCBvbiB0aGVtXG4gICAgICAgICAgZm9yIChsZXQgcGFyYW1ldGVyIG9mIHBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXIudHlwZSA9PT0gJ3BhcmFtJykge1xuICAgICAgICAgICAgICBuZXdBcmdzW3BhcmFtZXRlci5pbmRleF0gPSBhcmd1bWVudHNbcGFyYW1ldGVyLmluZGV4XTtcbiAgICAgICAgICAgICAgcmVwbGFjZWRQYXRoID0gcmVwbGFjZWRQYXRoLnJlcGxhY2UoJzonICsgcGFyYW1ldGVyLnBhcmFtLCBhcmd1bWVudHNbcGFyYW1ldGVyLmluZGV4XSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBhcmFtZXRlci50eXBlID09PSAnYm9keScpIHtcbiAgICAgICAgICAgICAgbmV3QXJnc1twYXJhbWV0ZXIuaW5kZXhdID0gYXJndW1lbnRzW3BhcmFtZXRlci5pbmRleF07XG4gICAgICAgICAgICAgIGJvZHkgPSBhcmd1bWVudHNbcGFyYW1ldGVyLmluZGV4XTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyYW1ldGVyLnR5cGUgPT09ICdxdWVyeVBhcmFtcycpIHtcbiAgICAgICAgICAgICAgbmV3QXJnc1twYXJhbWV0ZXIuaW5kZXhdID0gYXJndW1lbnRzW3BhcmFtZXRlci5pbmRleF07XG4gICAgICAgICAgICAgIGxldCBxUGFyYW1zOiBIdHRwUGFyYW1zIHwge1trZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdfSA9IGFyZ3VtZW50c1twYXJhbWV0ZXIuaW5kZXhdO1xuICAgICAgICAgICAgICBpZiAoY29uZmlnLm9wdGlvbnMgJiYgY29uZmlnLm9wdGlvbnMucGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMgPSBwYXJzZVBhcmFtcyhxdWVyeVBhcmFtcywgY29uZmlnLm9wdGlvbnMucGFyYW1zKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAocVBhcmFtcykge1xuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zID0gcGFyc2VQYXJhbXMocXVlcnlQYXJhbXMsIHFQYXJhbXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBsZXQgdXJsOiBzdHJpbmcgPSB0aGlzLmJhc2VVcmwgKyByZXBsYWNlZFBhdGg7XG4gICAgICAgIGxldCBvcHRpb25zOiBJVGRIdHRwUkVTVE9wdGlvbnNXaXRoQm9keSA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZy5vcHRpb25zLCB7XG4gICAgICAgICAgYm9keTogYm9keSxcbiAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1zLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIGxldCByZXF1ZXN0OiBhbnkgPSB0aGlzLmJ1aWxkUmVxdWVzdChjb25maWcubWV0aG9kLCB1cmwsIG9wdGlvbnMpO1xuICAgICAgICBpZiAocGFyYW1ldGVycykge1xuICAgICAgICAgIC8vIHNlZSB3aGljaCBvbmUgd2FzIHRoZSByZXNwb25zZSBwYXJhbWV0ZXIgc28gd2UgY2FuIHNldCB0aGUgcmVxdWVzdCBvYnNlcnZhYmxlXG4gICAgICAgICAgZm9yIChsZXQgcGFyYW1ldGVyIG9mIHBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXIudHlwZSA9PT0gJ3Jlc3BvbnNlJykge1xuICAgICAgICAgICAgICBuZXdBcmdzW3BhcmFtZXRlci5pbmRleF0gPSByZXF1ZXN0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgbGV0IHJlc3BvbnNlOiBhbnkgPSB3cmFwcGVkRnVuY3Rpb24uYXBwbHkodGhpcywgbmV3QXJncyk7XG4gICAgICAgIC8vIGlmIHRoZSByZXNwb25zZSBpcyBOT09QX0hUVFAgb3IgdW5kZWZpbmVkLCB0aGVuIHdlIHJldHVybiB0aGUgcmVxdWVzdCBhcyBpdCBpc1xuICAgICAgICAvLyBlbHNlIHdlIHJldHVybiB0aGUgcmVzcG9uc2UgZnJvbSB0aGUgaW5uZXIgZnVuY3Rpb25cbiAgICAgICAgaWYgKHJlc3BvbnNlID09PSBOT09QX0hUVFAgfHwgcmVzcG9uc2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG59XG4iLCJpbXBvcnQgeyBJVGRIdHRwUkVTVE9wdGlvbnMgfSBmcm9tICcuLi8uLi8nO1xuaW1wb3J0IHsgVGRBYnN0cmFjdE1ldGhvZCB9IGZyb20gJy4vYWJzdHJhY3QtbWV0aG9kLmRlY29yYXRvcic7XG5cbi8qKlxuICogRGVjb3JhdG9yIHRoYXQgYWRkcyBHRVQgcmVxdWVzdCBjYXBhYmlsaXRpZXMgdG8gYSBtZXRob2RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEdFVChjb25maWc6IHtcbiAgcGF0aDogc3RyaW5nLFxuICBvcHRpb25zPzogSVRkSHR0cFJFU1RPcHRpb25zLFxufSk6IEZ1bmN0aW9uIHtcbiAgcmV0dXJuIFRkQWJzdHJhY3RNZXRob2QoPGFueT5PYmplY3QuYXNzaWduKHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICB9LCBjb25maWcpKTtcbn1cbiIsImltcG9ydCB7IElUZEh0dHBSRVNUT3B0aW9ucyB9IGZyb20gJy4uLy4uLyc7XG5pbXBvcnQgeyBUZEFic3RyYWN0TWV0aG9kIH0gZnJvbSAnLi9hYnN0cmFjdC1tZXRob2QuZGVjb3JhdG9yJztcblxuLyoqXG4gKiBEZWNvcmF0b3IgdGhhdCBhZGRzIFBPU1QgcmVxdWVzdCBjYXBhYmlsaXRpZXMgdG8gYSBtZXRob2RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFBPU1QoY29uZmlnOiB7XG4gIHBhdGg6IHN0cmluZyxcbiAgb3B0aW9ucz86IElUZEh0dHBSRVNUT3B0aW9ucyxcbn0pOiBGdW5jdGlvbiB7XG4gIHJldHVybiBUZEFic3RyYWN0TWV0aG9kKDxhbnk+T2JqZWN0LmFzc2lnbih7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gIH0sIGNvbmZpZykpO1xufVxuIiwiaW1wb3J0IHsgSVRkSHR0cFJFU1RPcHRpb25zIH0gZnJvbSAnLi4vLi4vJztcbmltcG9ydCB7IFRkQWJzdHJhY3RNZXRob2QgfSBmcm9tICcuL2Fic3RyYWN0LW1ldGhvZC5kZWNvcmF0b3InO1xuXG4vKipcbiAqIERlY29yYXRvciB0aGF0IGFkZHMgUEFUQ0ggcmVxdWVzdCBjYXBhYmlsaXRpZXMgdG8gYSBtZXRob2RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFBBVENIKGNvbmZpZzoge1xuICBwYXRoOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBJVGRIdHRwUkVTVE9wdGlvbnMsXG59KTogRnVuY3Rpb24ge1xuICByZXR1cm4gVGRBYnN0cmFjdE1ldGhvZCg8YW55Pk9iamVjdC5hc3NpZ24oe1xuICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgfSwgY29uZmlnKSk7XG59XG4iLCJpbXBvcnQgeyBJVGRIdHRwUkVTVE9wdGlvbnMgfSBmcm9tICcuLi8uLi8nO1xuaW1wb3J0IHsgVGRBYnN0cmFjdE1ldGhvZCB9IGZyb20gJy4vYWJzdHJhY3QtbWV0aG9kLmRlY29yYXRvcic7XG5cbi8qKlxuICogRGVjb3JhdG9yIHRoYXQgYWRkcyBQVVQgcmVxdWVzdCBjYXBhYmlsaXRpZXMgdG8gYSBtZXRob2RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFBVVChjb25maWc6IHtcbiAgcGF0aDogc3RyaW5nLFxuICBvcHRpb25zPzogSVRkSHR0cFJFU1RPcHRpb25zLFxufSk6IEZ1bmN0aW9uIHtcbiAgcmV0dXJuIFRkQWJzdHJhY3RNZXRob2QoPGFueT5PYmplY3QuYXNzaWduKHtcbiAgICBtZXRob2Q6ICdQVVQnLFxuICB9LCBjb25maWcpKTtcbn1cbiIsImltcG9ydCB7IElUZEh0dHBSRVNUT3B0aW9ucyB9IGZyb20gJy4uLy4uLyc7XG5pbXBvcnQgeyBUZEFic3RyYWN0TWV0aG9kIH0gZnJvbSAnLi9hYnN0cmFjdC1tZXRob2QuZGVjb3JhdG9yJztcblxuLyoqXG4gKiBEZWNvcmF0b3IgdGhhdCBhZGRzIERFTEVURSByZXF1ZXN0IGNhcGFiaWxpdGllcyB0byBhIG1ldGhvZFxuICovXG5leHBvcnQgZnVuY3Rpb24gREVMRVRFKGNvbmZpZzoge1xuICBwYXRoOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBJVGRIdHRwUkVTVE9wdGlvbnMsXG59KTogRnVuY3Rpb24ge1xuICByZXR1cm4gVGRBYnN0cmFjdE1ldGhvZCg8YW55Pk9iamVjdC5hc3NpZ24oe1xuICAgIG1ldGhvZDogJ0RFTEVURScsXG4gIH0sIGNvbmZpZykpO1xufVxuIiwiaW1wb3J0IHsgbWl4aW5IdHRwLCBJVGRIdHRwUkVTVENvbmZpZyB9IGZyb20gJy4uLy4uL2h0dHAubWl4aW4nO1xuXG4vKipcbiAqIERlY29yYXRvciB1c2VkIHRvIGdpdmUgYSBzZXJ2aWNlIGh0dHAgY2FwYWJpbGl0aWVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZEh0dHAoY29uZmlnOiBJVGRIdHRwUkVTVENvbmZpZyk6IEZ1bmN0aW9uIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIDxUIGV4dGVuZHMgeyBuZXcoLi4uYXJnczogYW55W10pOiB7fSB9Pihjb25zdHJ1Y3RvcjogYW55KTogYW55IHtcbiAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBtaXhpbkh0dHAoY29uc3RydWN0b3IsIGNvbmZpZykge1xuICAgICBcbiAgICB9O1xuICB9O1xufVxuIiwiaW1wb3J0IHsgVGRBYnN0cmFjdFBhcmFtIH0gZnJvbSAnLi9hYnN0cmFjdC1wYXJhbS5kZWNvcmF0b3InO1xuXG4vKipcbiAqIERlY29yYXRvciB0aGF0IGlzIHVzZWQgdG8gZGVmaW5lIHdoaWNoIHBhcmFtZXRlciBpcyBhbiBodHRwIHBhcmFtZXRlciBpbiBhIG1ldGhvZFxuICovXG5leHBvcnQgZnVuY3Rpb24gVGRQYXJhbShwYXJhbTogc3RyaW5nKTogRnVuY3Rpb24ge1xuICByZXR1cm4gVGRBYnN0cmFjdFBhcmFtKCdwYXJhbScsIHBhcmFtKTtcbn1cbiIsImltcG9ydCB7IFRkQWJzdHJhY3RQYXJhbSB9IGZyb20gJy4vYWJzdHJhY3QtcGFyYW0uZGVjb3JhdG9yJztcblxuLyoqXG4gKiBEZWNvcmF0b3IgdGhhdCBpcyB1c2VkIHRvIGRlZmluZSB3aGljaCBwYXJhbWV0ZXIgaXMgdGhlIGh0dHAgYm9keSBpbiBhIG1ldGhvZFxuICovXG5leHBvcnQgZnVuY3Rpb24gVGRCb2R5KCk6IEZ1bmN0aW9uIHtcbiAgcmV0dXJuIFRkQWJzdHJhY3RQYXJhbSgnYm9keScpO1xufVxuIiwiaW1wb3J0IHsgVGRBYnN0cmFjdFBhcmFtIH0gZnJvbSAnLi9hYnN0cmFjdC1wYXJhbS5kZWNvcmF0b3InO1xuXG4vKipcbiAqIERlY29yYXRvciB0aGF0IGlzIHVzZWQgdG8gZGVmaW5lIHdoaWNoIHBhcmFtZXRlciBpcyB0aGUgaHR0cCByZXNwb25zZSBpbiBhIG1ldGhvZFxuICovXG5leHBvcnQgZnVuY3Rpb24gVGRSZXNwb25zZSgpOiBGdW5jdGlvbiB7XG4gIHJldHVybiBUZEFic3RyYWN0UGFyYW0oJ3Jlc3BvbnNlJyk7XG59XG4iLCJpbXBvcnQgeyBUZEFic3RyYWN0UGFyYW0gfSBmcm9tICcuL2Fic3RyYWN0LXBhcmFtLmRlY29yYXRvcic7XG5cbi8qKlxuICogRGVjb3JhdG9yIHRoYXQgaXMgdXNlZCB0byBkZWZpbmUgd2hpY2ggcGFyYW1ldGVyIGlzIHRoZSBodHRwIHF1ZXJ5IHBhcmFtZXRlcnMgaW4gYSBtZXRob2RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFRkUXVlcnlQYXJhbXMoKTogRnVuY3Rpb24ge1xuICByZXR1cm4gVGRBYnN0cmFjdFBhcmFtKCdxdWVyeVBhcmFtcycpO1xufVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwicm91dGVyIiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJFbGVtZW50UmVmIiwiUm91dGVyIiwiUmVuZGVyZXIyIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJJbnB1dCIsIkhvc3RCaW5kaW5nIiwiU3Vic2NyaXB0aW9uIiwiU3ViamVjdCIsIm1lcmdlIiwiZnJvbUV2ZW50IiwiZGVib3VuY2VUaW1lIiwiZGlzdGluY3RVbnRpbENoYW5nZWQiLCJDb250ZW50Q2hpbGRyZW4iLCJtaXhpbkRpc2FibGVSaXBwbGUiLCJtaXhpbkRpc2FibGVkIiwidHNsaWJfMS5fX2V4dGVuZHMiLCJNYXRJY29uTW9kdWxlIiwiTWF0UmlwcGxlTW9kdWxlIiwiUG9ydGFsTW9kdWxlIiwib2YiLCJPcHRpb25hbCIsIlNraXBTZWxmIiwiU2VsZiIsIkluamVjdCIsIsm1UmVmbGVjdGlvbkNhcGFiaWxpdGllcyIsIkluamVjdGFibGUiLCJJbmplY3RvciIsIkh0dHBDbGllbnQiLCJIdHRwSGVhZGVycyIsIkh0dHBJbnRlcmNlcHRvclNlcnZpY2UiLCJIdHRwIiwiSGVhZGVycyIsIlVSTFNlYXJjaFBhcmFtcyIsIkh0dHBQYXJhbXMiLCJtYXAiLCJ0c2xpYl8xLl9fdmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFTRTs7U0FFQzs7b0JBVEZBLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsYUFBYTt3QkFFdkIsOEVBQXlDOztxQkFDMUM7Ozs7UUFPRCwwQkFBQztLQVhEOzs7Ozs7QUNGQTtRQUtBO1NBYUM7O29CQWJBQyxhQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFOzRCQUNQQyxtQkFBWTt5QkFDYjt3QkFDRCxZQUFZLEVBQUU7NEJBQ1osbUJBQW1CO3lCQUNwQjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1AsbUJBQW1CO3lCQUNwQjtxQkFDRjs7UUFHRCw2QkFBQztLQWJE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