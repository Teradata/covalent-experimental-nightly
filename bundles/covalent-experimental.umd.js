(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs'), require('rxjs/operators'), require('@angular/material/icon'), require('@angular/cdk/portal'), require('@covalent/core/common'), require('@angular/forms'), require('@angular/cdk/coercion'), require('@angular/material/tabs')) :
    typeof define === 'function' && define.amd ? define('@covalent/experimental', ['exports', '@angular/core', '@angular/common', 'rxjs', 'rxjs/operators', '@angular/material/icon', '@angular/cdk/portal', '@covalent/core/common', '@angular/forms', '@angular/cdk/coercion', '@angular/material/tabs'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.experimental = {}),global.ng.core,global.ng.common,global.rxjs,global.rxjs.operators,global.ng.material.icon,global.ng.cdk.portal,global.covalent.core.common,global.ng.forms,global.ng.cdk.coercion,global.ng.material.tabs));
}(this, (function (exports,core,common,rxjs,operators,icon,portal,common$1,forms,coercion,tabs) { 'use strict';

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
    var TdBreadcrumbComponent = /** @class */ (function () {
        function TdBreadcrumbComponent(_elementRef, _renderer, _changeDetectorRef) {
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            this._changeDetectorRef = _changeDetectorRef;
            this._displayCrumb = true;
            this._width = 0;
            // Sets the icon url shown between breadcrumbs. Defaults to right chevron
            this.separatorIcon = 'navigate_next';
            // Should show the right chevron or not before the label
            this._displayIcon = true;
            this._renderer.addClass(this._elementRef.nativeElement, 'mat-button');
        }
        Object.defineProperty(TdBreadcrumbComponent.prototype, "displayCrumb", {
            get: /**
             * @return {?}
             */ function () {
                return this._displayCrumb;
            },
            /**
             * Whether to display the crumb or not
             */
            set: /**
             * Whether to display the crumb or not
             * @param {?} shouldDisplay
             * @return {?}
             */ function (shouldDisplay) {
                this._displayCrumb = shouldDisplay;
                this._changeDetectorRef.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdBreadcrumbComponent.prototype, "width", {
            /**
             * Width of the DOM element of the crumb
             */
            get: /**
             * Width of the DOM element of the crumb
             * @return {?}
             */ function () {
                return this._width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdBreadcrumbComponent.prototype, "displayBinding", {
            /**
             * Gets the display style of the crumb
             */
            get: /**
             * Gets the display style of the crumb
             * @return {?}
             */ function () {
                // Set the display to none on the component, just in case the end user is hiding
                // and showing them instead of the component doing itself for reasons like responsive
                return this._displayCrumb ? undefined : 'none';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdBreadcrumbComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                // set the width from the actual rendered DOM element
                this._width = (( /** @type {?} */(this._elementRef.nativeElement))).getBoundingClientRect().width;
                this._changeDetectorRef.markForCheck();
            };
        /**
         * Stop click propagation when clicking on icon
         */
        /**
         * Stop click propagation when clicking on icon
         * @param {?} event
         * @return {?}
         */
        TdBreadcrumbComponent.prototype._handleIconClick = /**
         * Stop click propagation when clicking on icon
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.stopPropagation();
                event.preventDefault();
            };
        TdBreadcrumbComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-breadcrumb, a[td-breadcrumb]',
                        template: "<span *ngIf=\"displayCrumb\" class=\"td-breadcrumb\">\n  <ng-content></ng-content>\n  <mat-icon *ngIf=\"_displayIcon\"\n            class=\"td-breadcrumb-separator-icon\"\n            [style.cursor]=\"'default'\"\n            (click)=\"_handleIconClick($event)\">\n    {{separatorIcon}}\n  </mat-icon>\n</span>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host .td-breadcrumb{height:48px;box-sizing:border-box;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:end;justify-content:flex-end}:host .td-breadcrumb ::ng-deep>*{margin:0 10px}:host .td-breadcrumb-separator-icon{display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}:host.mat-button{min-width:0;padding:0}"]
                    }] }
        ];
        /** @nocollapse */
        TdBreadcrumbComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: core.ChangeDetectorRef }
            ];
        };
        TdBreadcrumbComponent.propDecorators = {
            displayBinding: [{ type: core.HostBinding, args: ['style.display',] }]
        };
        return TdBreadcrumbComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdBreadcrumbsComponent = /** @class */ (function () {
        function TdBreadcrumbsComponent(_elementRef, _changeDetectorRef) {
            this._elementRef = _elementRef;
            this._changeDetectorRef = _changeDetectorRef;
            this._resizeSubscription = rxjs.Subscription.EMPTY;
            this._widthSubject = new rxjs.Subject();
            this._resizing = false;
            // the list of hidden breadcrumbs not shown right now (responsive)
            this.hiddenBreadcrumbs = new Array();
            /**
             * Sets the icon url shown between breadcrumbs. Defaults to right chevron.
             */
            this.separatorIcon = 'navigate_next';
        }
        /**
         * @return {?}
         */
        TdBreadcrumbsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
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
        /**
         * @return {?}
         */
        TdBreadcrumbsComponent.prototype.ngDoCheck = /**
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
        TdBreadcrumbsComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                this.setCrumbIcons();
                this._changeDetectorRef.markForCheck();
            };
        /**
         * @return {?}
         */
        TdBreadcrumbsComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._resizeSubscription.unsubscribe();
            };
        Object.defineProperty(TdBreadcrumbsComponent.prototype, "nativeElementWidth", {
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
        Object.defineProperty(TdBreadcrumbsComponent.prototype, "count", {
            /**
             * The total count of individual breadcrumbs
             */
            get: /**
             * The total count of individual breadcrumbs
             * @return {?}
             */ function () {
                return this._breadcrumbs ? this._breadcrumbs.length : 0;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Set the crumb icon separators
         */
        /**
         * Set the crumb icon separators
         * @return {?}
         */
        TdBreadcrumbsComponent.prototype.setCrumbIcons = /**
         * Set the crumb icon separators
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var breadcrumbArray = this._breadcrumbs.toArray();
                if (breadcrumbArray.length > 0) {
                    // don't show the icon on the last breadcrumb
                    breadcrumbArray[breadcrumbArray.length - 1]._displayIcon = false;
                }
                breadcrumbArray.forEach(function (breadcrumb) {
                    breadcrumb.separatorIcon = _this.separatorIcon;
                });
            };
        /**
         * @return {?}
         */
        TdBreadcrumbsComponent.prototype.displayWidthAvailableCrumbs = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var curTotCrumbWidth = 0;
                /** @type {?} */
                var crumbsArray = this._breadcrumbs.toArray();
                // calculate the current width of the shown breadcrumbs
                for (var i = this.hiddenBreadcrumbs.length; i < crumbsArray.length; i++) {
                    curTotCrumbWidth += crumbsArray[i].width;
                }
                // hide the first bread crumb if window size is smaller than all the crumb sizes
                if (this.nativeElementWidth < curTotCrumbWidth) {
                    crumbsArray[this.hiddenBreadcrumbs.length].displayCrumb = false;
                    this.hiddenBreadcrumbs.push(crumbsArray[this.hiddenBreadcrumbs.length]);
                    this.displayWidthAvailableCrumbs();
                }
                else {
                    // loop over all the hidden crumbs and see if adding them back in will
                    // fit in the current window size
                    /** @type {?} */
                    var totalHidden = this.hiddenBreadcrumbs.length - 1;
                    for (var i = totalHidden; i >= 0; i--) {
                        /** @type {?} */
                        var hiddenCrumbWidth = crumbsArray[i].width;
                        if ((curTotCrumbWidth + hiddenCrumbWidth) < this.nativeElementWidth) {
                            crumbsArray[i].displayCrumb = true;
                            crumbsArray[i + 1]._displayIcon = true;
                            this.hiddenBreadcrumbs.pop();
                            // recalculate the total width based on adding back in a crumb
                            /** @type {?} */
                            var newTotCrumbWidth = 0;
                            for (var j = this.hiddenBreadcrumbs.length; j < crumbsArray.length; j++) {
                                newTotCrumbWidth += crumbsArray[j].width;
                            }
                            curTotCrumbWidth = newTotCrumbWidth;
                        }
                        else if (i === totalHidden) {
                            // need to break out of loop here because the first in the hidden
                            // list can't fit in current window size
                            break;
                        }
                    }
                }
            };
        TdBreadcrumbsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-breadcrumbs',
                        template: "<div class=\"td-breadcrumbs\">\n  <ng-content></ng-content>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host{display:block;width:100%}:host .td-breadcrumbs{white-space:nowrap}"]
                    }] }
        ];
        /** @nocollapse */
        TdBreadcrumbsComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.ChangeDetectorRef }
            ];
        };
        TdBreadcrumbsComponent.propDecorators = {
            _breadcrumbs: [{ type: core.ContentChildren, args: [TdBreadcrumbComponent,] }],
            separatorIcon: [{ type: core.Input, args: ['separatorIcon',] }]
        };
        return TdBreadcrumbsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var CovalentBreadcrumbsModule = /** @class */ (function () {
        function CovalentBreadcrumbsModule() {
        }
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
                    },] }
        ];
        return CovalentBreadcrumbsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdTabOptionBase = /** @class */ (function () {
        function TdTabOptionBase(_viewContainerRef, _changeDetectorRef) {
            this._viewContainerRef = _viewContainerRef;
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdTabOptionBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdTabOptionMixinBase = common$1.mixinDisabled(TdTabOptionBase);
    var TdTabOptionComponent = /** @class */ (function (_super) {
        __extends(TdTabOptionComponent, _super);
        function TdTabOptionComponent(_viewContainerRef, _changeDetectorRef) {
            return _super.call(this, _viewContainerRef, _changeDetectorRef) || this;
        }
        Object.defineProperty(TdTabOptionComponent.prototype, "content", {
            get: /**
             * @return {?}
             */ function () {
                return this._contentPortal;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdTabOptionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this._contentPortal = new portal.TemplatePortal(this._content, this._viewContainerRef);
            };
        TdTabOptionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-tab-option',
                        template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        /* tslint:disable-next-line */
                        inputs: ['disabled'],
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        TdTabOptionComponent.ctorParameters = function () {
            return [
                { type: core.ViewContainerRef },
                { type: core.ChangeDetectorRef }
            ];
        };
        TdTabOptionComponent.propDecorators = {
            _content: [{ type: core.ViewChild, args: [core.TemplateRef,] }],
            value: [{ type: core.Input, args: ['value',] }]
        };
        return TdTabOptionComponent;
    }(_TdTabOptionMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdTabSelectBase = /** @class */ (function () {
        function TdTabSelectBase(_changeDetectorRef) {
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdTabSelectBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdTabSelectMixinBase = common$1.mixinControlValueAccessor(common$1.mixinDisabled(common$1.mixinDisableRipple(TdTabSelectBase)));
    var TdTabSelectComponent = /** @class */ (function (_super) {
        __extends(TdTabSelectComponent, _super);
        function TdTabSelectComponent(_changeDetectorRef) {
            var _this = _super.call(this, _changeDetectorRef) || this;
            _this._subs = [];
            _this._values = [];
            _this._selectedIndex = 0;
            _this._stretchTabs = false;
            /**
             * Event that emits whenever the raw value of the select changes. This is here primarily
             * to facilitate the two-way binding for the `value` input.
             */
            _this.valueChange = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(TdTabSelectComponent.prototype, "selectedIndex", {
            get: /**
             * @return {?}
             */ function () {
                return this._selectedIndex;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdTabSelectComponent.prototype, "tabOptions", {
            get: /**
             * @return {?}
             */ function () {
                return this._tabOptions ? this._tabOptions.toArray() : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdTabSelectComponent.prototype, "stretchTabs", {
            get: /**
             * @return {?}
             */ function () {
                return this._stretchTabs;
            },
            /**
             * Makes the tabs stretch to fit the parent container.
             */
            set: /**
             * Makes the tabs stretch to fit the parent container.
             * @param {?} stretchTabs
             * @return {?}
             */ function (stretchTabs) {
                this._stretchTabs = coercion.coerceBooleanProperty(stretchTabs);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdTabSelectComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // subscribe to check if value changes and update the selectedIndex internally.
                this._subs.push(this.valueChanges.subscribe(function (value) {
                    _this._setValue(value);
                }));
            };
        /**
         * @return {?}
         */
        TdTabSelectComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // subscribe to listen to any tab changes.
                this._refreshValues();
                this._subs.push(this._tabOptions.changes.subscribe(function () {
                    _this._refreshValues();
                }));
                // initialize value
                Promise.resolve().then(function () {
                    _this._setValue(_this.value);
                });
            };
        /**
         * @return {?}
         */
        TdTabSelectComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this._subs && this._subs.length) {
                    this._subs.forEach(function (sub) {
                        sub.unsubscribe();
                    });
                }
            };
        /**
         * Method executed when user selects a different tab
         * This updates the new selectedIndex and infers what value should be mapped to.
         */
        /**
         * Method executed when user selects a different tab
         * This updates the new selectedIndex and infers what value should be mapped to.
         * @param {?} selectedIndex
         * @return {?}
         */
        TdTabSelectComponent.prototype.selectedIndexChange = /**
         * Method executed when user selects a different tab
         * This updates the new selectedIndex and infers what value should be mapped to.
         * @param {?} selectedIndex
         * @return {?}
         */
            function (selectedIndex) {
                this._selectedIndex = selectedIndex;
                /** @type {?} */
                var value = this._values[selectedIndex];
                this.value = value;
                this.valueChange.emit(value);
                this.onChange(value);
            };
        /**
         * Refresh the values array whenever the number of tabs gets updated
         */
        /**
         * Refresh the values array whenever the number of tabs gets updated
         * @return {?}
         */
        TdTabSelectComponent.prototype._refreshValues = /**
         * Refresh the values array whenever the number of tabs gets updated
         * @return {?}
         */
            function () {
                this._values = this.tabOptions.map(function (tabOption) {
                    return tabOption.value;
                });
            };
        /**
         * Try to set value depending if its part of our options
         * else set the value of the first tab.
         */
        /**
         * Try to set value depending if its part of our options
         * else set the value of the first tab.
         * @param {?} value
         * @return {?}
         */
        TdTabSelectComponent.prototype._setValue = /**
         * Try to set value depending if its part of our options
         * else set the value of the first tab.
         * @param {?} value
         * @return {?}
         */
            function (value) {
                /** @type {?} */
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
        TdTabSelectComponent.decorators = [
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(function () { return TdTabSelectComponent; }),
                                multi: true,
                            }],
                        selector: 'td-tab-select',
                        template: "<mat-tab-group [attr.mat-stretch-tabs]=\"stretchTabs ? true : undefined\"\n                [backgroundColor]=\"backgroundColor\"\n                [color]=\"color\"\n                [disableRipple]=\"disableRipple\"\n                [selectedIndex]=\"selectedIndex\"\n                (selectedIndexChange)=\"selectedIndexChange($event)\">\n  <ng-template let-tabOption\n                ngFor\n                [ngForOf]=\"tabOptions\">\n    <mat-tab [disabled]=\"tabOption.disabled || disabled\">\n      <ng-template matTabLabel>\n        <ng-template [cdkPortalOutlet]=\"tabOption.content\">\n        </ng-template>\n      </ng-template>\n    </mat-tab>\n  </ng-template>\n</mat-tab-group>\n",
                        /* tslint:disable-next-line */
                        inputs: ['value', 'disabled', 'disableRipple'],
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        TdTabSelectComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef }
            ];
        };
        TdTabSelectComponent.propDecorators = {
            _tabOptions: [{ type: core.ContentChildren, args: [TdTabOptionComponent,] }],
            stretchTabs: [{ type: core.Input, args: ['stretchTabs',] }],
            color: [{ type: core.Input, args: ['color',] }],
            backgroundColor: [{ type: core.Input, args: ['backgroundColor',] }],
            valueChange: [{ type: core.Output }]
        };
        return TdTabSelectComponent;
    }(_TdTabSelectMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var CovalentTabSelectModule = /** @class */ (function () {
        function CovalentTabSelectModule() {
        }
        CovalentTabSelectModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            TdTabSelectComponent,
                            TdTabOptionComponent,
                        ],
                        // directives, components, and pipes owned by this NgModule
                        imports: [
                            /** Angular Modules */
                            common.CommonModule,
                            forms.FormsModule,
                            /** Material Modules */
                            portal.PortalModule,
                            tabs.MatTabsModule,
                        ],
                        // modules needed to run this module
                        exports: [
                            TdTabSelectComponent,
                            TdTabOptionComponent,
                        ],
                    },] }
        ];
        return CovalentTabSelectModule;
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

    exports.CovalentRenameMeModule = CovalentRenameMeModule;
    exports.TdRenameMeComponent = TdRenameMeComponent;
    exports.CovalentBreadcrumbsModule = CovalentBreadcrumbsModule;
    exports.TdBreadcrumbsComponent = TdBreadcrumbsComponent;
    exports.CovalentTabSelectModule = CovalentTabSelectModule;
    exports.TdTabSelectBase = TdTabSelectBase;
    exports._TdTabSelectMixinBase = _TdTabSelectMixinBase;
    exports.TdTabSelectComponent = TdTabSelectComponent;
    exports.TdTabOptionBase = TdTabOptionBase;
    exports._TdTabOptionMixinBase = _TdTabOptionMixinBase;
    exports.TdTabOptionComponent = TdTabOptionComponent;
    exports.ɵa = TdBreadcrumbComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtZXhwZXJpbWVudGFsLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC90ZW1wbGF0ZS1yZW5hbWUtbWUtZXhwZXJpbWVudC1tb2R1bGUvcmVuYW1lLW1lLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC90ZW1wbGF0ZS1yZW5hbWUtbWUtZXhwZXJpbWVudC1tb2R1bGUvcmVuYW1lLW1lLm1vZHVsZS50cyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9icmVhZGNydW1icy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9icmVhZGNydW1icy9icmVhZGNydW1icy5tb2R1bGUudHMiLCJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL3RhYi1zZWxlY3QvdGFiLW9wdGlvbi5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvdGFiLXNlbGVjdC90YWItc2VsZWN0LmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC90YWItc2VsZWN0L3RhYi1zZWxlY3QubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1yZW5hbWVNZScsXG4gIHN0eWxlVXJsczogWycuL3JlbmFtZS1tZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVuYW1lLW1lLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRSZW5hbWVNZUNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gc3R1YlxuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBUZFJlbmFtZU1lQ29tcG9uZW50IH0gZnJvbSAnLi9yZW5hbWUtbWUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGRSZW5hbWVNZUNvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRkUmVuYW1lTWVDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50UmVuYW1lTWVNb2R1bGUge1xuXG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgSG9zdEJpbmRpbmcsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWJyZWFkY3J1bWIsIGFbdGQtYnJlYWRjcnVtYl0nLFxuICBzdHlsZVVybHM6IFsnLi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9icmVhZGNydW1iLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkQnJlYWRjcnVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIHByaXZhdGUgX2Rpc3BsYXlDcnVtYjogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgX3dpZHRoOiBudW1iZXIgPSAwO1xuICAvLyBTZXRzIHRoZSBpY29uIHVybCBzaG93biBiZXR3ZWVuIGJyZWFkY3J1bWJzLiBEZWZhdWx0cyB0byByaWdodCBjaGV2cm9uXG4gIHNlcGFyYXRvckljb246IHN0cmluZyA9ICduYXZpZ2F0ZV9uZXh0JztcbiAgLy8gU2hvdWxkIHNob3cgdGhlIHJpZ2h0IGNoZXZyb24gb3Igbm90IGJlZm9yZSB0aGUgbGFiZWxcbiAgX2Rpc3BsYXlJY29uOiBib29sZWFuID0gdHJ1ZTtcblxuICBnZXQgZGlzcGxheUNydW1iKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5Q3J1bWI7XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciB0byBkaXNwbGF5IHRoZSBjcnVtYiBvciBub3RcbiAgICovXG4gIHNldCBkaXNwbGF5Q3J1bWIoc2hvdWxkRGlzcGxheTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc3BsYXlDcnVtYiA9IHNob3VsZERpc3BsYXk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogV2lkdGggb2YgdGhlIERPTSBlbGVtZW50IG9mIHRoZSBjcnVtYlxuICAgKi9cbiAgZ2V0IHdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGRpc3BsYXkgc3R5bGUgb2YgdGhlIGNydW1iXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmRpc3BsYXknKVxuICBnZXQgZGlzcGxheUJpbmRpbmcoKTogc3RyaW5nIHtcbiAgICAvLyBTZXQgdGhlIGRpc3BsYXkgdG8gbm9uZSBvbiB0aGUgY29tcG9uZW50LCBqdXN0IGluIGNhc2UgdGhlIGVuZCB1c2VyIGlzIGhpZGluZ1xuICAgIC8vIGFuZCBzaG93aW5nIHRoZW0gaW5zdGVhZCBvZiB0aGUgY29tcG9uZW50IGRvaW5nIGl0c2VsZiBmb3IgcmVhc29ucyBsaWtlIHJlc3BvbnNpdmVcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheUNydW1iID8gdW5kZWZpbmVkIDogJ25vbmUnO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF0LWJ1dHRvbicpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIC8vIHNldCB0aGUgd2lkdGggZnJvbSB0aGUgYWN0dWFsIHJlbmRlcmVkIERPTSBlbGVtZW50XG4gICAgdGhpcy5fd2lkdGggPSAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcCBjbGljayBwcm9wYWdhdGlvbiB3aGVuIGNsaWNraW5nIG9uIGljb25cbiAgICovXG4gIF9oYW5kbGVJY29uQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIERvQ2hlY2ssXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIFN1YnNjcmlwdGlvbixcbiAgU3ViamVjdCxcbiAgZnJvbUV2ZW50LFxuICBtZXJnZSxcbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkZWJvdW5jZVRpbWUsXG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFRkQnJlYWRjcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWJyZWFkY3J1bWJzJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnJlYWRjcnVtYnMuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkQnJlYWRjcnVtYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIERvQ2hlY2ssIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfcmVzaXplU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgX3dpZHRoU3ViamVjdDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuICBwcml2YXRlIF9yZXNpemluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vIGFsbCB0aGUgc3ViIGNvbXBvbmVudHMsIHdoaWNoIGFyZSB0aGUgaW5kaXZpZHVhbCBicmVhZGNydW1ic1xuICBAQ29udGVudENoaWxkcmVuKFRkQnJlYWRjcnVtYkNvbXBvbmVudCkgX2JyZWFkY3J1bWJzOiBRdWVyeUxpc3Q8VGRCcmVhZGNydW1iQ29tcG9uZW50PjtcbiAgLy8gdGhlIGxpc3Qgb2YgaGlkZGVuIGJyZWFkY3J1bWJzIG5vdCBzaG93biByaWdodCBub3cgKHJlc3BvbnNpdmUpXG4gIGhpZGRlbkJyZWFkY3J1bWJzOiBUZEJyZWFkY3J1bWJDb21wb25lbnRbXSA9IG5ldyBBcnJheSgpO1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpY29uIHVybCBzaG93biBiZXR3ZWVuIGJyZWFkY3J1bWJzLiBEZWZhdWx0cyB0byByaWdodCBjaGV2cm9uLlxuICAgKi9cbiAgQElucHV0KCdzZXBhcmF0b3JJY29uJykgc2VwYXJhdG9ySWNvbjogc3RyaW5nID0gJ25hdmlnYXRlX25leHQnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fcmVzaXplU3Vic2NyaXB0aW9uID0gbWVyZ2UoXG4gICAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJykucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDEwKSxcbiAgICAgICksXG4gICAgICB0aGlzLl93aWR0aFN1YmplY3QuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICksXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9yZXNpemluZykge1xuICAgICAgICB0aGlzLl9yZXNpemluZyA9IHRydWU7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZGlzcGxheVdpZHRoQXZhaWxhYmxlQ3J1bWJzKCk7XG4gICAgICAgICAgdGhpcy5fcmVzaXppbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudFJlZiAmJiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX3dpZHRoU3ViamVjdC5uZXh0KHRoaXMubmF0aXZlRWxlbWVudFdpZHRoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDcnVtYkljb25zKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZXNpemVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qXG4gICogQ3VycmVudCB3aWR0aCBvZiB0aGUgZWxlbWVudCBjb250YWluZXJcbiAgKi9cbiAgZ2V0IG5hdGl2ZUVsZW1lbnRXaWR0aCgpOiBudW1iZXIge1xuICAgIGxldCBlbGVtZW50OiBIVE1MRWxlbWVudCA9ICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICAvLyBOZWVkIHRvIHRha2UgaW50byBhY2NvdW50IGJvcmRlciwgbWFyZ2luIGFuZCBwYWRkaW5nIHRoYXQgbWlnaHQgYmUgYXJvdW5kIGFsbCB0aGUgY3J1bWJzXG4gICAgbGV0IHN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgbGV0IGJvcmRlckxlZnQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLmJvcmRlckxlZnQsIDEwKTtcbiAgICBsZXQgYm9yZGVyUmlnaHQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLmJvcmRlclJpZ2h0LCAxMCk7XG4gICAgbGV0IG1hcmdpbkxlZnQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLm1hcmdpbkxlZnQsIDEwKTtcbiAgICBsZXQgbWFyZ2luUmlnaHQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLm1hcmdpblJpZ2h0LCAxMCk7XG4gICAgbGV0IHBhZGRpbmdMZWZ0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5wYWRkaW5nTGVmdCwgMTApO1xuICAgIGxldCBwYWRkaW5nUmlnaHQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLnBhZGRpbmdSaWdodCwgMTApO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSBib3JkZXJMZWZ0IC0gYm9yZGVyUmlnaHQgLSBtYXJnaW5MZWZ0IC0gbWFyZ2luUmlnaHQgLSBwYWRkaW5nTGVmdCAtIHBhZGRpbmdSaWdodDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdG90YWwgY291bnQgb2YgaW5kaXZpZHVhbCBicmVhZGNydW1ic1xuICAgKi9cbiAgZ2V0IGNvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2JyZWFkY3J1bWJzID8gdGhpcy5fYnJlYWRjcnVtYnMubGVuZ3RoIDogMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGNydW1iIGljb24gc2VwYXJhdG9yc1xuICAgKi9cbiAgcHJpdmF0ZSBzZXRDcnVtYkljb25zKCk6IHZvaWQge1xuICAgIGxldCBicmVhZGNydW1iQXJyYXk6IFRkQnJlYWRjcnVtYkNvbXBvbmVudFtdID0gdGhpcy5fYnJlYWRjcnVtYnMudG9BcnJheSgpO1xuICAgIGlmIChicmVhZGNydW1iQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgLy8gZG9uJ3Qgc2hvdyB0aGUgaWNvbiBvbiB0aGUgbGFzdCBicmVhZGNydW1iXG4gICAgICBicmVhZGNydW1iQXJyYXlbYnJlYWRjcnVtYkFycmF5Lmxlbmd0aCAtIDFdLl9kaXNwbGF5SWNvbiA9IGZhbHNlO1xuICAgIH1cbiAgICBicmVhZGNydW1iQXJyYXkuZm9yRWFjaCgoYnJlYWRjcnVtYjogVGRCcmVhZGNydW1iQ29tcG9uZW50KSA9PiB7XG4gICAgICBicmVhZGNydW1iLnNlcGFyYXRvckljb24gPSB0aGlzLnNlcGFyYXRvckljb247XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGRpc3BsYXlXaWR0aEF2YWlsYWJsZUNydW1icygpOiB2b2lkIHtcbiAgICBsZXQgY3VyVG90Q3J1bWJXaWR0aDogbnVtYmVyID0gMDtcbiAgICBsZXQgY3J1bWJzQXJyYXk6IFRkQnJlYWRjcnVtYkNvbXBvbmVudFtdID0gdGhpcy5fYnJlYWRjcnVtYnMudG9BcnJheSgpO1xuICAgIC8vIGNhbGN1bGF0ZSB0aGUgY3VycmVudCB3aWR0aCBvZiB0aGUgc2hvd24gYnJlYWRjcnVtYnNcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSB0aGlzLmhpZGRlbkJyZWFkY3J1bWJzLmxlbmd0aDsgaSA8IGNydW1ic0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjdXJUb3RDcnVtYldpZHRoICs9IGNydW1ic0FycmF5W2ldLndpZHRoO1xuICAgIH1cbiAgICAvLyBoaWRlIHRoZSBmaXJzdCBicmVhZCBjcnVtYiBpZiB3aW5kb3cgc2l6ZSBpcyBzbWFsbGVyIHRoYW4gYWxsIHRoZSBjcnVtYiBzaXplc1xuICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnRXaWR0aCA8IGN1clRvdENydW1iV2lkdGgpIHtcbiAgICAgIGNydW1ic0FycmF5W3RoaXMuaGlkZGVuQnJlYWRjcnVtYnMubGVuZ3RoXS5kaXNwbGF5Q3J1bWIgPSBmYWxzZTtcbiAgICAgIHRoaXMuaGlkZGVuQnJlYWRjcnVtYnMucHVzaChjcnVtYnNBcnJheVt0aGlzLmhpZGRlbkJyZWFkY3J1bWJzLmxlbmd0aF0pO1xuICAgICAgdGhpcy5kaXNwbGF5V2lkdGhBdmFpbGFibGVDcnVtYnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbG9vcCBvdmVyIGFsbCB0aGUgaGlkZGVuIGNydW1icyBhbmQgc2VlIGlmIGFkZGluZyB0aGVtIGJhY2sgaW4gd2lsbFxuICAgICAgLy8gZml0IGluIHRoZSBjdXJyZW50IHdpbmRvdyBzaXplXG4gICAgICBsZXQgdG90YWxIaWRkZW46IG51bWJlciA9IHRoaXMuaGlkZGVuQnJlYWRjcnVtYnMubGVuZ3RoIC0gMTtcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IHRvdGFsSGlkZGVuOyBpID49IDA7IGktLSkge1xuICAgICAgICBsZXQgaGlkZGVuQ3J1bWJXaWR0aDogbnVtYmVyID0gY3J1bWJzQXJyYXlbaV0ud2lkdGg7XG4gICAgICAgIGlmICgoY3VyVG90Q3J1bWJXaWR0aCArIGhpZGRlbkNydW1iV2lkdGgpIDwgdGhpcy5uYXRpdmVFbGVtZW50V2lkdGgpIHtcbiAgICAgICAgICBjcnVtYnNBcnJheVtpXS5kaXNwbGF5Q3J1bWIgPSB0cnVlO1xuICAgICAgICAgIGNydW1ic0FycmF5W2kgKyAxXS5fZGlzcGxheUljb24gPSB0cnVlO1xuICAgICAgICAgIHRoaXMuaGlkZGVuQnJlYWRjcnVtYnMucG9wKCk7XG4gICAgICAgICAgLy8gcmVjYWxjdWxhdGUgdGhlIHRvdGFsIHdpZHRoIGJhc2VkIG9uIGFkZGluZyBiYWNrIGluIGEgY3J1bWJcbiAgICAgICAgICBsZXQgbmV3VG90Q3J1bWJXaWR0aDogbnVtYmVyID0gMDtcbiAgICAgICAgICBmb3IgKGxldCBqOiBudW1iZXIgPSB0aGlzLmhpZGRlbkJyZWFkY3J1bWJzLmxlbmd0aDsgaiA8IGNydW1ic0FycmF5Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBuZXdUb3RDcnVtYldpZHRoICs9IGNydW1ic0FycmF5W2pdLndpZHRoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjdXJUb3RDcnVtYldpZHRoID0gbmV3VG90Q3J1bWJXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSB0b3RhbEhpZGRlbikge1xuICAgICAgICAgIC8vIG5lZWQgdG8gYnJlYWsgb3V0IG9mIGxvb3AgaGVyZSBiZWNhdXNlIHRoZSBmaXJzdCBpbiB0aGUgaGlkZGVuXG4gICAgICAgICAgLy8gbGlzdCBjYW4ndCBmaXQgaW4gY3VycmVudCB3aW5kb3cgc2l6ZVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuXG5pbXBvcnQgeyBUZEJyZWFkY3J1bWJzQ29tcG9uZW50IH0gZnJvbSAnLi9icmVhZGNydW1icy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRCcmVhZGNydW1iQ29tcG9uZW50IH0gZnJvbSAnLi9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUZEJyZWFkY3J1bWJzQ29tcG9uZW50LFxuICAgIFRkQnJlYWRjcnVtYkNvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRkQnJlYWRjcnVtYnNDb21wb25lbnQsXG4gICAgVGRCcmVhZGNydW1iQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudEJyZWFkY3J1bWJzTW9kdWxlIHtcblxufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVGVtcGxhdGVSZWYsXG4gIE9uSW5pdCxcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBtaXhpbkRpc2FibGVkLCBJQ2FuRGlzYWJsZSB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbmV4cG9ydCBjbGFzcyBUZFRhYk9wdGlvbkJhc2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgIHB1YmxpYyBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGRUYWJPcHRpb25NaXhpbkJhc2UgPSBtaXhpbkRpc2FibGVkKFRkVGFiT3B0aW9uQmFzZSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLXRhYi1vcHRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLW9wdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYi1vcHRpb24uY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBpbnB1dHM6IFsnZGlzYWJsZWQnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRUYWJPcHRpb25Db21wb25lbnQgZXh0ZW5kcyBfVGRUYWJPcHRpb25NaXhpbkJhc2UgaW1wbGVtZW50cyBJQ2FuRGlzYWJsZSwgT25Jbml0IHtcblxuICBwcml2YXRlIF9jb250ZW50UG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDxhbnk+O1xuICBnZXQgY29udGVudCgpOiBUZW1wbGF0ZVBvcnRhbDxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fY29udGVudFBvcnRhbDtcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIF9jb250ZW50OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBWYWx1ZSB0byB3aGljaCB0aGUgb3B0aW9uIHdpbGwgYmUgYmluZGVkIHRvLlxuICAgKi9cbiAgQElucHV0KCd2YWx1ZScpIHZhbHVlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihfdmlld0NvbnRhaW5lclJlZiwgX2NoYW5nZURldGVjdG9yUmVmKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2NvbnRlbnRQb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy5fY29udGVudCwgdGhpcy5fdmlld0NvbnRhaW5lclJlZik7XG4gIH1cblxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBmb3J3YXJkUmVmLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE5HX1ZBTFVFX0FDQ0VTU09SLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFRoZW1lUGFsZXR0ZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuaW1wb3J0IHsgSUNhbkRpc2FibGUsXG4gICAgICAgICAgbWl4aW5EaXNhYmxlZCxcbiAgICAgICAgICBJQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gICAgICAgICAgbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgICBJQ2FuRGlzYWJsZVJpcHBsZSxcbiAgICAgICAgICBtaXhpbkRpc2FibGVSaXBwbGUsXG59IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBUZFRhYk9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vdGFiLW9wdGlvbi5jb21wb25lbnQnO1xuXG5leHBvcnQgY2xhc3MgVGRUYWJTZWxlY3RCYXNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG59XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGNvbnN0IF9UZFRhYlNlbGVjdE1peGluQmFzZSA9IG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IobWl4aW5EaXNhYmxlZChtaXhpbkRpc2FibGVSaXBwbGUoVGRUYWJTZWxlY3RCYXNlKSkpO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZFRhYlNlbGVjdENvbXBvbmVudCksXG4gICAgbXVsdGk6IHRydWUsXG4gIH1dLFxuICBzZWxlY3RvcjogJ3RkLXRhYi1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYi1zZWxlY3QuY29tcG9uZW50LnNjc3MnXSxcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIGlucHV0czogWyd2YWx1ZScsICdkaXNhYmxlZCcsICdkaXNhYmxlUmlwcGxlJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRkVGFiU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgX1RkVGFiU2VsZWN0TWl4aW5CYXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wbGVtZW50cyBJQ29udHJvbFZhbHVlQWNjZXNzb3IsIElDYW5EaXNhYmxlLCBJQ2FuRGlzYWJsZVJpcHBsZSwgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX3N1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgcHJpdmF0ZSBfdmFsdWVzOiBhbnlbXSA9IFtdO1xuICBwcml2YXRlIF9zZWxlY3RlZEluZGV4OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9zdHJldGNoVGFiczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGdldCBzZWxlY3RlZEluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhbGwgdGFiIG9wdGlvbiBjaGlsZHJlblxuICAgKi9cbiAgQENvbnRlbnRDaGlsZHJlbihUZFRhYk9wdGlvbkNvbXBvbmVudCkgcmVhZG9ubHkgX3RhYk9wdGlvbnM6IFF1ZXJ5TGlzdDxUZFRhYk9wdGlvbkNvbXBvbmVudD47XG5cbiAgZ2V0IHRhYk9wdGlvbnMoKTogVGRUYWJPcHRpb25Db21wb25lbnRbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhYk9wdGlvbnMgPyB0aGlzLl90YWJPcHRpb25zLnRvQXJyYXkoKSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlcyB0aGUgdGFicyBzdHJldGNoIHRvIGZpdCB0aGUgcGFyZW50IGNvbnRhaW5lci5cbiAgICovXG4gIEBJbnB1dCgnc3RyZXRjaFRhYnMnKVxuICBzZXQgc3RyZXRjaFRhYnMoc3RyZXRjaFRhYnM6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zdHJldGNoVGFicyA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShzdHJldGNoVGFicyk7XG4gIH1cbiAgZ2V0IHN0cmV0Y2hUYWJzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zdHJldGNoVGFicztcbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xvciBvZiB0aGUgdGFiIGdyb3VwLlxuICAgKi9cbiAgQElucHV0KCdjb2xvcicpIGNvbG9yOiBUaGVtZVBhbGV0dGU7XG5cbiAgLyoqXG4gICAqIEJhY2tncm91bmQgY29sb3Igb2YgdGhlIHRhYiBncm91cC5cbiAgICovXG4gIEBJbnB1dCgnYmFja2dyb3VuZENvbG9yJykgYmFja2dyb3VuZENvbG9yOiBUaGVtZVBhbGV0dGU7XG5cbiAgLyoqXG4gICAqIEV2ZW50IHRoYXQgZW1pdHMgd2hlbmV2ZXIgdGhlIHJhdyB2YWx1ZSBvZiB0aGUgc2VsZWN0IGNoYW5nZXMuIFRoaXMgaXMgaGVyZSBwcmltYXJpbHlcbiAgICogdG8gZmFjaWxpdGF0ZSB0aGUgdHdvLXdheSBiaW5kaW5nIGZvciB0aGUgYHZhbHVlYCBpbnB1dC5cbiAgICovXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcihfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoX2NoYW5nZURldGVjdG9yUmVmKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIHN1YnNjcmliZSB0byBjaGVjayBpZiB2YWx1ZSBjaGFuZ2VzIGFuZCB1cGRhdGUgdGhlIHNlbGVjdGVkSW5kZXggaW50ZXJuYWxseS5cbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5fc2V0VmFsdWUodmFsdWUpO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICAvLyBzdWJzY3JpYmUgdG8gbGlzdGVuIHRvIGFueSB0YWIgY2hhbmdlcy5cbiAgICB0aGlzLl9yZWZyZXNoVmFsdWVzKCk7XG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5fdGFiT3B0aW9ucy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlZnJlc2hWYWx1ZXMoKTtcbiAgICAgIH0pLFxuICAgICk7XG4gICAgLy8gaW5pdGlhbGl6ZSB2YWx1ZVxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5fc2V0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fc3VicyAmJiB0aGlzLl9zdWJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fc3Vicy5mb3JFYWNoKChzdWI6IFN1YnNjcmlwdGlvbikgPT4ge1xuICAgICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgZXhlY3V0ZWQgd2hlbiB1c2VyIHNlbGVjdHMgYSBkaWZmZXJlbnQgdGFiXG4gICAqIFRoaXMgdXBkYXRlcyB0aGUgbmV3IHNlbGVjdGVkSW5kZXggYW5kIGluZmVycyB3aGF0IHZhbHVlIHNob3VsZCBiZSBtYXBwZWQgdG8uXG4gICAqL1xuICBzZWxlY3RlZEluZGV4Q2hhbmdlKHNlbGVjdGVkSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSBzZWxlY3RlZEluZGV4O1xuICAgIGxldCB2YWx1ZTogYW55ID0gdGhpcy5fdmFsdWVzW3NlbGVjdGVkSW5kZXhdO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdGhlIHZhbHVlcyBhcnJheSB3aGVuZXZlciB0aGUgbnVtYmVyIG9mIHRhYnMgZ2V0cyB1cGRhdGVkXG4gICAqL1xuICBwcml2YXRlIF9yZWZyZXNoVmFsdWVzKCk6IHZvaWQge1xuICAgIHRoaXMuX3ZhbHVlcyA9IHRoaXMudGFiT3B0aW9ucy5tYXAoKHRhYk9wdGlvbjogVGRUYWJPcHRpb25Db21wb25lbnQpID0+IHtcbiAgICAgIHJldHVybiB0YWJPcHRpb24udmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVHJ5IHRvIHNldCB2YWx1ZSBkZXBlbmRpbmcgaWYgaXRzIHBhcnQgb2Ygb3VyIG9wdGlvbnNcbiAgICogZWxzZSBzZXQgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCB0YWIuXG4gICAqL1xuICBwcml2YXRlIF9zZXRWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgbGV0IGluZGV4OiBudW1iZXIgPSB0aGlzLl92YWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuX3ZhbHVlcy5sZW5ndGggPyB0aGlzLl92YWx1ZXNbMF0gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gMDtcbiAgICB9XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IE1hdFRhYnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJzJztcblxuaW1wb3J0IHsgVGRUYWJTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL3RhYi1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IFRkVGFiT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi90YWItb3B0aW9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRkVGFiU2VsZWN0Q29tcG9uZW50LFxuICAgIFRkVGFiT3B0aW9uQ29tcG9uZW50LFxuICBdLCAvLyBkaXJlY3RpdmVzLCBjb21wb25lbnRzLCBhbmQgcGlwZXMgb3duZWQgYnkgdGhpcyBOZ01vZHVsZVxuICBpbXBvcnRzOiBbXG4gICAgLyoqIEFuZ3VsYXIgTW9kdWxlcyAqL1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICAvKiogTWF0ZXJpYWwgTW9kdWxlcyAqL1xuICAgIFBvcnRhbE1vZHVsZSxcbiAgICBNYXRUYWJzTW9kdWxlLFxuICBdLCAvLyBtb2R1bGVzIG5lZWRlZCB0byBydW4gdGhpcyBtb2R1bGVcbiAgZXhwb3J0czogW1xuICAgIFRkVGFiU2VsZWN0Q29tcG9uZW50LFxuICAgIFRkVGFiT3B0aW9uQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudFRhYlNlbGVjdE1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJIb3N0QmluZGluZyIsIlN1YnNjcmlwdGlvbiIsIlN1YmplY3QiLCJtZXJnZSIsImZyb21FdmVudCIsImRlYm91bmNlVGltZSIsImRpc3RpbmN0VW50aWxDaGFuZ2VkIiwiQ29udGVudENoaWxkcmVuIiwiSW5wdXQiLCJNYXRJY29uTW9kdWxlIiwibWl4aW5EaXNhYmxlZCIsInRzbGliXzEuX19leHRlbmRzIiwiVGVtcGxhdGVQb3J0YWwiLCJWaWV3Q29udGFpbmVyUmVmIiwiVmlld0NoaWxkIiwiVGVtcGxhdGVSZWYiLCJtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yIiwibWl4aW5EaXNhYmxlUmlwcGxlIiwiRXZlbnRFbWl0dGVyIiwiY29lcmNlQm9vbGVhblByb3BlcnR5IiwiTkdfVkFMVUVfQUNDRVNTT1IiLCJmb3J3YXJkUmVmIiwiT3V0cHV0IiwiRm9ybXNNb2R1bGUiLCJQb3J0YWxNb2R1bGUiLCJNYXRUYWJzTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFTRTs7U0FFQzs7b0JBVEZBLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsYUFBYTt3QkFFdkIsOEVBQXlDOztxQkFDMUM7Ozs7UUFPRCwwQkFBQztLQVhEOzs7Ozs7QUNGQTtRQUtBO1NBYUM7O29CQWJBQyxhQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFOzRCQUNQQyxtQkFBWTt5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