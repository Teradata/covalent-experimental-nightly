/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostBinding, Renderer2, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { Router } from '@angular/router';
/** @enum {string} */
var StepState = {
    None: 'none',
    Required: 'required',
    Complete: 'complete',
};
export { StepState };
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
export { TdNavStepComponent };
if (false) {
    /** @type {?} */
    TdNavStepComponent.prototype._displayStep;
    /** @type {?} */
    TdNavStepComponent.prototype._displayLine;
    /** @type {?} */
    TdNavStepComponent.prototype._width;
    /** @type {?} */
    TdNavStepComponent.prototype._active;
    /** @type {?} */
    TdNavStepComponent.prototype.number;
    /**
     * routerLink?: string
     * routerLink to navigate to
     * Defaults to empty
     * @type {?}
     */
    TdNavStepComponent.prototype.routerLink;
    /**
     * state?: StepState
     * state of step
     * Defaults to none
     * @type {?}
     */
    TdNavStepComponent.prototype.state;
    /**
     * sublabel?: string
     * Sublabel to display in step header
     * Defaults to empty
     * @type {?}
     */
    TdNavStepComponent.prototype.sublabel;
    /** @type {?} */
    TdNavStepComponent.prototype._elementRef;
    /** @type {?} */
    TdNavStepComponent.prototype.router;
    /** @type {?} */
    TdNavStepComponent.prototype._renderer;
    /** @type {?} */
    TdNavStepComponent.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9uYXYtc3RlcHBlci8iLCJzb3VyY2VzIjpbIm5hdi1zdGVwL25hdi1zdGVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUF5QixTQUFTLEVBQ3BFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztJQUd2QyxNQUFPLE1BQU07SUFDYixVQUFXLFVBQVU7SUFDckIsVUFBVyxVQUFVOzs7QUFHdkI7SUFxQ0UsNEJBQW9CLFdBQXVCLEVBQ2pDLE1BQWMsRUFDZCxTQUFvQixFQUNwQixrQkFBcUM7UUFIM0IsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDakMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQWhDdkMsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixZQUFPLEdBQVksS0FBSyxDQUFDOzs7Ozs7UUFpQmpCLFVBQUssR0FBYyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBYWhELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7SUFFRCx1Q0FBVTs7O0lBQVY7UUFDRSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCx1Q0FBVTs7O0lBQVY7UUFDRSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxzQkFBSSwyQ0FBVzs7OztRQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7UUFFRDs7V0FFRzs7Ozs7O1FBQ0gsVUFBZ0IsYUFBc0I7WUFDcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUM7WUFDbEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3pDLENBQUM7OztPQVJBO0lBVUQsc0JBQUksMkNBQVc7Ozs7UUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDO1FBRUQ7O1dBRUc7Ozs7OztRQUNILFVBQWdCLGFBQXNCO1lBQ3BDLElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN6QyxDQUFDOzs7T0FSQTtJQWFELHNCQUFJLHNDQUFNO1FBSFY7O1dBRUc7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFLRCxzQkFBSSxxQ0FBSztRQUhUOztXQUVHOzs7OztRQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBS0Qsc0JBQ0ksOENBQWM7UUFKbEI7O1dBRUc7Ozs7O1FBQ0g7WUFFRSxnRkFBZ0Y7WUFDaEYscUZBQXFGO1lBQ3JGLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDaEQsQ0FBQzs7O09BQUE7Ozs7SUFFRCw0Q0FBZTs7O0lBQWY7UUFBQSxpQkFNQztRQUxDLHFEQUFxRDtRQUNyRCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxtQkFBYSxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBQSxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDMUYsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELHFDQUFROzs7SUFBUjtRQUNFLDBFQUEwRTtRQUMxRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDckI7SUFDSCxDQUFDOztnQkFqSEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBRXZDLGtkQUF3QztvQkFDeEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkFmbUIsVUFBVTtnQkFFckIsTUFBTTtnQkFGcUQsU0FBUztnQkFDM0MsaUJBQWlCOzs7NkJBOEJoRCxLQUFLLFNBQUMsWUFBWTt3QkFPbEIsS0FBSyxTQUFDLE9BQU87MkJBT2IsS0FBSyxTQUFDLFVBQVU7aUNBMERoQixXQUFXLFNBQUMsZUFBZTs7SUFzQjlCLHlCQUFDO0NBQUEsQUFuSEQsSUFtSEM7U0E3R1ksa0JBQWtCOzs7SUFFN0IsMENBQXFDOztJQUNyQywwQ0FBcUM7O0lBQ3JDLG9DQUEyQjs7SUFDM0IscUNBQWlDOztJQUdqQyxvQ0FBZTs7Ozs7OztJQU9mLHdDQUF3Qzs7Ozs7OztJQU94QyxtQ0FBa0Q7Ozs7Ozs7SUFPbEQsc0NBQW9DOztJQUV4Qix5Q0FBK0I7O0lBQ3pDLG9DQUFzQjs7SUFDdEIsdUNBQTRCOztJQUM1QixnREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBBZnRlclZpZXdJbml0LCBPbkluaXQsIFJlbmRlcmVyMixcbiAgICAgICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmV4cG9ydCBlbnVtIFN0ZXBTdGF0ZSB7XG4gIE5vbmUgPSAnbm9uZScsXG4gIFJlcXVpcmVkID0gJ3JlcXVpcmVkJyxcbiAgQ29tcGxldGUgPSAnY29tcGxldGUnLFxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1uYXYtc3RlcCwgYVt0ZC1uYXYtc3RlcF0nLFxuICBzdHlsZVVybHM6IFsnLi9uYXYtc3RlcC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2LXN0ZXAuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGROYXZTdGVwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcblxuICBwcml2YXRlIF9kaXNwbGF5U3RlcDogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgX2Rpc3BsYXlMaW5lOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX2FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vIE51bWJlciB0byBkaXNwbGF5IGluIHN0ZXAgaGVhZGVyXG4gIG51bWJlcjogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiByb3V0ZXJMaW5rPzogc3RyaW5nXG4gICAqIHJvdXRlckxpbmsgdG8gbmF2aWdhdGUgdG9cbiAgICogRGVmYXVsdHMgdG8gZW1wdHlcbiAgICovXG4gIEBJbnB1dCgncm91dGVyTGluaycpIHJvdXRlckxpbms6IHN0cmluZztcblxuICAvKipcbiAgICogc3RhdGU/OiBTdGVwU3RhdGVcbiAgICogc3RhdGUgb2Ygc3RlcFxuICAgKiBEZWZhdWx0cyB0byBub25lXG4gICAqL1xuICBASW5wdXQoJ3N0YXRlJykgc3RhdGU6IFN0ZXBTdGF0ZSA9IFN0ZXBTdGF0ZS5Ob25lO1xuXG4gIC8qKlxuICAgKiBzdWJsYWJlbD86IHN0cmluZ1xuICAgKiBTdWJsYWJlbCB0byBkaXNwbGF5IGluIHN0ZXAgaGVhZGVyXG4gICAqIERlZmF1bHRzIHRvIGVtcHR5XG4gICAqL1xuICBASW5wdXQoJ3N1YmxhYmVsJykgc3VibGFiZWw6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXQtYnV0dG9uJyk7XG4gIH1cblxuICBpc1JlcXVpcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaXNDb21wbGV0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGdldCBkaXNwbGF5U3RlcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheVN0ZXA7XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciB0byBkaXNwbGF5IHRoZSBzdGVwIG9yIG5vdFxuICAgKi9cbiAgc2V0IGRpc3BsYXlTdGVwKHNob3VsZERpc3BsYXk6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNwbGF5U3RlcCA9IHNob3VsZERpc3BsYXk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBnZXQgZGlzcGxheUxpbmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlMaW5lO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZGlzcGxheSB0aGUgc3RlcCBvciBub3RcbiAgICovXG4gIHNldCBkaXNwbGF5TGluZShzaG91bGREaXNwbGF5OiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzcGxheUxpbmUgPSBzaG91bGREaXNwbGF5O1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgc3RlcCBpcyBhY3RpdmVcbiAgICovXG4gIGdldCBhY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaWR0aCBvZiB0aGUgRE9NIGVsZW1lbnQgb2YgdGhlIHN0ZXBcbiAgICovXG4gIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBkaXNwbGF5IHN0eWxlIG9mIHRoZSBjcnVtYlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JylcbiAgZ2V0IGRpc3BsYXlCaW5kaW5nKCk6IHN0cmluZyB7XG4gICAgLy8gU2V0IHRoZSBkaXNwbGF5IHRvIG5vbmUgb24gdGhlIGNvbXBvbmVudCwganVzdCBpbiBjYXNlIHRoZSBlbmQgdXNlciBpcyBoaWRpbmdcbiAgICAvLyBhbmQgc2hvd2luZyB0aGVtIGluc3RlYWQgb2YgdGhlIGNvbXBvbmVudCBkb2luZyBpdHNlbGYgZm9yIHJlYXNvbnMgbGlrZSByZXNwb25zaXZlXG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlTdGVwID8gdW5kZWZpbmVkIDogJ25vbmUnO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIC8vIHNldCB0aGUgd2lkdGggZnJvbSB0aGUgYWN0dWFsIHJlbmRlcmVkIERPTSBlbGVtZW50XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl93aWR0aCA9ICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gU2V0IHRoaXMgc3RlcCB0byBhY3RpdmUgaWYgdGhlIHN0ZXAgcm91dGUgYW5kIGFjdGl2ZSByb3V0ZSBhcmUgdGhlIHNhbWVcbiAgICBpZiAodGhpcy5yb3V0ZXIudXJsID09PSB0aGlzLnJvdXRlckxpbmspIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==