(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('@angular/material/icon')) :
    typeof define === 'function' && define.amd ? define('@covalent/experimental/breadcrumbs', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/common', '@angular/material/icon'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.experimental = global.covalent.experimental || {}, global.covalent.experimental.breadcrumbs = {}),global.ng.core,global.rxjs,global.rxjs.operators,global.ng.common,global.ng.material.icon));
}(this, (function (exports,core,rxjs,operators,common,icon) { 'use strict';

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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.CovalentBreadcrumbsModule = CovalentBreadcrumbsModule;
    exports.TdBreadcrumbsComponent = TdBreadcrumbsComponent;
    exports.ɵa = TdBreadcrumbComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtZXhwZXJpbWVudGFsLWJyZWFkY3J1bWJzLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9icmVhZGNydW1icy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9icmVhZGNydW1icy9icmVhZGNydW1icy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIEhvc3RCaW5kaW5nLFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1icmVhZGNydW1iLCBhW3RkLWJyZWFkY3J1bWJdJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZEJyZWFkY3J1bWJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICBwcml2YXRlIF9kaXNwbGF5Q3J1bWI6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF93aWR0aDogbnVtYmVyID0gMDtcbiAgLy8gU2V0cyB0aGUgaWNvbiB1cmwgc2hvd24gYmV0d2VlbiBicmVhZGNydW1icy4gRGVmYXVsdHMgdG8gcmlnaHQgY2hldnJvblxuICBzZXBhcmF0b3JJY29uOiBzdHJpbmcgPSAnbmF2aWdhdGVfbmV4dCc7XG4gIC8vIFNob3VsZCBzaG93IHRoZSByaWdodCBjaGV2cm9uIG9yIG5vdCBiZWZvcmUgdGhlIGxhYmVsXG4gIF9kaXNwbGF5SWNvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgZ2V0IGRpc3BsYXlDcnVtYigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheUNydW1iO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZGlzcGxheSB0aGUgY3J1bWIgb3Igbm90XG4gICAqL1xuICBzZXQgZGlzcGxheUNydW1iKHNob3VsZERpc3BsYXk6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNwbGF5Q3J1bWIgPSBzaG91bGREaXNwbGF5O1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdpZHRoIG9mIHRoZSBET00gZWxlbWVudCBvZiB0aGUgY3J1bWJcbiAgICovXG4gIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBkaXNwbGF5IHN0eWxlIG9mIHRoZSBjcnVtYlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JylcbiAgZ2V0IGRpc3BsYXlCaW5kaW5nKCk6IHN0cmluZyB7XG4gICAgLy8gU2V0IHRoZSBkaXNwbGF5IHRvIG5vbmUgb24gdGhlIGNvbXBvbmVudCwganVzdCBpbiBjYXNlIHRoZSBlbmQgdXNlciBpcyBoaWRpbmdcbiAgICAvLyBhbmQgc2hvd2luZyB0aGVtIGluc3RlYWQgb2YgdGhlIGNvbXBvbmVudCBkb2luZyBpdHNlbGYgZm9yIHJlYXNvbnMgbGlrZSByZXNwb25zaXZlXG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlDcnVtYiA/IHVuZGVmaW5lZCA6ICdub25lJztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21hdC1idXR0b24nKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAvLyBzZXQgdGhlIHdpZHRoIGZyb20gdGhlIGFjdHVhbCByZW5kZXJlZCBET00gZWxlbWVudFxuICAgIHRoaXMuX3dpZHRoID0gKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgY2xpY2sgcHJvcGFnYXRpb24gd2hlbiBjbGlja2luZyBvbiBpY29uXG4gICAqL1xuICBfaGFuZGxlSWNvbkNsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBEb0NoZWNrLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBTdWJzY3JpcHRpb24sXG4gIFN1YmplY3QsXG4gIGZyb21FdmVudCxcbiAgbWVyZ2UsXG59IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGVib3VuY2VUaW1lLFxuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBUZEJyZWFkY3J1bWJDb21wb25lbnQgfSBmcm9tICcuL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1icmVhZGNydW1icycsXG4gIHN0eWxlVXJsczogWycuL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9icmVhZGNydW1icy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZEJyZWFkY3J1bWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBEb0NoZWNrLCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX3Jlc2l6ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIF93aWR0aFN1YmplY3Q6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcbiAgcHJpdmF0ZSBfcmVzaXppbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvLyBhbGwgdGhlIHN1YiBjb21wb25lbnRzLCB3aGljaCBhcmUgdGhlIGluZGl2aWR1YWwgYnJlYWRjcnVtYnNcbiAgQENvbnRlbnRDaGlsZHJlbihUZEJyZWFkY3J1bWJDb21wb25lbnQpIF9icmVhZGNydW1iczogUXVlcnlMaXN0PFRkQnJlYWRjcnVtYkNvbXBvbmVudD47XG4gIC8vIHRoZSBsaXN0IG9mIGhpZGRlbiBicmVhZGNydW1icyBub3Qgc2hvd24gcmlnaHQgbm93IChyZXNwb25zaXZlKVxuICBoaWRkZW5CcmVhZGNydW1iczogVGRCcmVhZGNydW1iQ29tcG9uZW50W10gPSBuZXcgQXJyYXkoKTtcblxuICAvKipcbiAgICogU2V0cyB0aGUgaWNvbiB1cmwgc2hvd24gYmV0d2VlbiBicmVhZGNydW1icy4gRGVmYXVsdHMgdG8gcmlnaHQgY2hldnJvbi5cbiAgICovXG4gIEBJbnB1dCgnc2VwYXJhdG9ySWNvbicpIHNlcGFyYXRvckljb246IHN0cmluZyA9ICduYXZpZ2F0ZV9uZXh0JztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3Jlc2l6ZVN1YnNjcmlwdGlvbiA9IG1lcmdlKFxuICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMCksXG4gICAgICApLFxuICAgICAgdGhpcy5fd2lkdGhTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICApLFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5fcmVzaXppbmcpIHtcbiAgICAgICAgdGhpcy5fcmVzaXppbmcgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXlXaWR0aEF2YWlsYWJsZUNydW1icygpO1xuICAgICAgICAgIHRoaXMuX3Jlc2l6aW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnRSZWYgJiYgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLl93aWR0aFN1YmplY3QubmV4dCh0aGlzLm5hdGl2ZUVsZW1lbnRXaWR0aCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q3J1bWJJY29ucygpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcmVzaXplU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKlxuICAqIEN1cnJlbnQgd2lkdGggb2YgdGhlIGVsZW1lbnQgY29udGFpbmVyXG4gICovXG4gIGdldCBuYXRpdmVFbGVtZW50V2lkdGgoKTogbnVtYmVyIHtcbiAgICBsZXQgZWxlbWVudDogSFRNTEVsZW1lbnQgPSAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgLy8gTmVlZCB0byB0YWtlIGludG8gYWNjb3VudCBib3JkZXIsIG1hcmdpbiBhbmQgcGFkZGluZyB0aGF0IG1pZ2h0IGJlIGFyb3VuZCBhbGwgdGhlIGNydW1ic1xuICAgIGxldCBzdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgIGxldCBib3JkZXJMZWZ0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5ib3JkZXJMZWZ0LCAxMCk7XG4gICAgbGV0IGJvcmRlclJpZ2h0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5ib3JkZXJSaWdodCwgMTApO1xuICAgIGxldCBtYXJnaW5MZWZ0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5tYXJnaW5MZWZ0LCAxMCk7XG4gICAgbGV0IG1hcmdpblJpZ2h0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5tYXJnaW5SaWdodCwgMTApO1xuICAgIGxldCBwYWRkaW5nTGVmdDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUucGFkZGluZ0xlZnQsIDEwKTtcbiAgICBsZXQgcGFkZGluZ1JpZ2h0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5wYWRkaW5nUmlnaHQsIDEwKTtcblxuICAgIHJldHVybiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC0gYm9yZGVyTGVmdCAtIGJvcmRlclJpZ2h0IC0gbWFyZ2luTGVmdCAtIG1hcmdpblJpZ2h0IC0gcGFkZGluZ0xlZnQgLSBwYWRkaW5nUmlnaHQ7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRvdGFsIGNvdW50IG9mIGluZGl2aWR1YWwgYnJlYWRjcnVtYnNcbiAgICovXG4gIGdldCBjb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9icmVhZGNydW1icyA/IHRoaXMuX2JyZWFkY3J1bWJzLmxlbmd0aCA6IDA7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBjcnVtYiBpY29uIHNlcGFyYXRvcnNcbiAgICovXG4gIHByaXZhdGUgc2V0Q3J1bWJJY29ucygpOiB2b2lkIHtcbiAgICBsZXQgYnJlYWRjcnVtYkFycmF5OiBUZEJyZWFkY3J1bWJDb21wb25lbnRbXSA9IHRoaXMuX2JyZWFkY3J1bWJzLnRvQXJyYXkoKTtcbiAgICBpZiAoYnJlYWRjcnVtYkFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIGRvbid0IHNob3cgdGhlIGljb24gb24gdGhlIGxhc3QgYnJlYWRjcnVtYlxuICAgICAgYnJlYWRjcnVtYkFycmF5W2JyZWFkY3J1bWJBcnJheS5sZW5ndGggLSAxXS5fZGlzcGxheUljb24gPSBmYWxzZTtcbiAgICB9XG4gICAgYnJlYWRjcnVtYkFycmF5LmZvckVhY2goKGJyZWFkY3J1bWI6IFRkQnJlYWRjcnVtYkNvbXBvbmVudCkgPT4ge1xuICAgICAgYnJlYWRjcnVtYi5zZXBhcmF0b3JJY29uID0gdGhpcy5zZXBhcmF0b3JJY29uO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBkaXNwbGF5V2lkdGhBdmFpbGFibGVDcnVtYnMoKTogdm9pZCB7XG4gICAgbGV0IGN1clRvdENydW1iV2lkdGg6IG51bWJlciA9IDA7XG4gICAgbGV0IGNydW1ic0FycmF5OiBUZEJyZWFkY3J1bWJDb21wb25lbnRbXSA9IHRoaXMuX2JyZWFkY3J1bWJzLnRvQXJyYXkoKTtcbiAgICAvLyBjYWxjdWxhdGUgdGhlIGN1cnJlbnQgd2lkdGggb2YgdGhlIHNob3duIGJyZWFkY3J1bWJzXG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gdGhpcy5oaWRkZW5CcmVhZGNydW1icy5sZW5ndGg7IGkgPCBjcnVtYnNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY3VyVG90Q3J1bWJXaWR0aCArPSBjcnVtYnNBcnJheVtpXS53aWR0aDtcbiAgICB9XG4gICAgLy8gaGlkZSB0aGUgZmlyc3QgYnJlYWQgY3J1bWIgaWYgd2luZG93IHNpemUgaXMgc21hbGxlciB0aGFuIGFsbCB0aGUgY3J1bWIgc2l6ZXNcbiAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50V2lkdGggPCBjdXJUb3RDcnVtYldpZHRoKSB7XG4gICAgICBjcnVtYnNBcnJheVt0aGlzLmhpZGRlbkJyZWFkY3J1bWJzLmxlbmd0aF0uZGlzcGxheUNydW1iID0gZmFsc2U7XG4gICAgICB0aGlzLmhpZGRlbkJyZWFkY3J1bWJzLnB1c2goY3J1bWJzQXJyYXlbdGhpcy5oaWRkZW5CcmVhZGNydW1icy5sZW5ndGhdKTtcbiAgICAgIHRoaXMuZGlzcGxheVdpZHRoQXZhaWxhYmxlQ3J1bWJzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGxvb3Agb3ZlciBhbGwgdGhlIGhpZGRlbiBjcnVtYnMgYW5kIHNlZSBpZiBhZGRpbmcgdGhlbSBiYWNrIGluIHdpbGxcbiAgICAgIC8vIGZpdCBpbiB0aGUgY3VycmVudCB3aW5kb3cgc2l6ZVxuICAgICAgbGV0IHRvdGFsSGlkZGVuOiBudW1iZXIgPSB0aGlzLmhpZGRlbkJyZWFkY3J1bWJzLmxlbmd0aCAtIDE7XG4gICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSB0b3RhbEhpZGRlbjsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgbGV0IGhpZGRlbkNydW1iV2lkdGg6IG51bWJlciA9IGNydW1ic0FycmF5W2ldLndpZHRoO1xuICAgICAgICBpZiAoKGN1clRvdENydW1iV2lkdGggKyBoaWRkZW5DcnVtYldpZHRoKSA8IHRoaXMubmF0aXZlRWxlbWVudFdpZHRoKSB7XG4gICAgICAgICAgY3J1bWJzQXJyYXlbaV0uZGlzcGxheUNydW1iID0gdHJ1ZTtcbiAgICAgICAgICBjcnVtYnNBcnJheVtpICsgMV0uX2Rpc3BsYXlJY29uID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmhpZGRlbkJyZWFkY3J1bWJzLnBvcCgpO1xuICAgICAgICAgIC8vIHJlY2FsY3VsYXRlIHRoZSB0b3RhbCB3aWR0aCBiYXNlZCBvbiBhZGRpbmcgYmFjayBpbiBhIGNydW1iXG4gICAgICAgICAgbGV0IG5ld1RvdENydW1iV2lkdGg6IG51bWJlciA9IDA7XG4gICAgICAgICAgZm9yIChsZXQgajogbnVtYmVyID0gdGhpcy5oaWRkZW5CcmVhZGNydW1icy5sZW5ndGg7IGogPCBjcnVtYnNBcnJheS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbmV3VG90Q3J1bWJXaWR0aCArPSBjcnVtYnNBcnJheVtqXS53aWR0aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3VyVG90Q3J1bWJXaWR0aCA9IG5ld1RvdENydW1iV2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gdG90YWxIaWRkZW4pIHtcbiAgICAgICAgICAvLyBuZWVkIHRvIGJyZWFrIG91dCBvZiBsb29wIGhlcmUgYmVjYXVzZSB0aGUgZmlyc3QgaW4gdGhlIGhpZGRlblxuICAgICAgICAgIC8vIGxpc3QgY2FuJ3QgZml0IGluIGN1cnJlbnQgd2luZG93IHNpemVcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcblxuaW1wb3J0IHsgVGRCcmVhZGNydW1ic0NvbXBvbmVudCB9IGZyb20gJy4vYnJlYWRjcnVtYnMuY29tcG9uZW50JztcbmltcG9ydCB7IFRkQnJlYWRjcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGRCcmVhZGNydW1ic0NvbXBvbmVudCxcbiAgICBUZEJyZWFkY3J1bWJDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUZEJyZWFkY3J1bWJzQ29tcG9uZW50LFxuICAgIFRkQnJlYWRjcnVtYkNvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRCcmVhZGNydW1ic01vZHVsZSB7XG5cbn1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlcjIiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIkhvc3RCaW5kaW5nIiwiU3Vic2NyaXB0aW9uIiwiU3ViamVjdCIsIm1lcmdlIiwiZnJvbUV2ZW50IiwiZGVib3VuY2VUaW1lIiwiZGlzdGluY3RVbnRpbENoYW5nZWQiLCJDb250ZW50Q2hpbGRyZW4iLCJJbnB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTWF0SWNvbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBc0RFLCtCQUFvQixXQUF1QixFQUN2QixTQUFvQixFQUNwQixrQkFBcUM7WUFGckMsZ0JBQVcs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