/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, ContentChildren, QueryList, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Subscription, Subject, fromEvent, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { TdNavStepComponent } from '../nav-step/nav-step.component';
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
export { TdHorizontalStepperComponent };
if (false) {
    /** @type {?} */
    TdHorizontalStepperComponent.prototype._resizeSubscription;
    /** @type {?} */
    TdHorizontalStepperComponent.prototype._widthSubject;
    /** @type {?} */
    TdHorizontalStepperComponent.prototype._resizing;
    /** @type {?} */
    TdHorizontalStepperComponent.prototype._showLeftArrow;
    /** @type {?} */
    TdHorizontalStepperComponent.prototype._showRightArrow;
    /** @type {?} */
    TdHorizontalStepperComponent.prototype._leftHidden;
    /** @type {?} */
    TdHorizontalStepperComponent.prototype._rightHidden;
    /** @type {?} */
    TdHorizontalStepperComponent.prototype._steps;
    /** @type {?} */
    TdHorizontalStepperComponent.prototype.hiddenSteps;
    /** @type {?} */
    TdHorizontalStepperComponent.prototype._elementRef;
    /** @type {?} */
    TdHorizontalStepperComponent.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9yaXpvbnRhbC1uYXYtc3RlcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL25hdi1zdGVwcGVyLyIsInNvdXJjZXMiOlsiaG9yaXpvbnRhbC1uYXYtc3RlcHBlci9ob3Jpem9udGFsLW5hdi1zdGVwcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFxQix1QkFBdUIsRUFDdEQsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXBFO0lBcUJFLHNDQUFvQixXQUF1QixFQUFVLGtCQUFxQztRQUF0RSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFibEYsd0JBQW1CLEdBQWlCLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDdkQsa0JBQWEsR0FBb0IsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUN2RCxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBQ2pDLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDOztRQUtqQyxnQkFBVyxHQUF5QixJQUFJLEtBQUssRUFBRSxDQUFDO0lBRThDLENBQUM7Ozs7SUFFL0YsK0NBQVE7OztJQUFSO1FBQUEsaUJBa0JDO1FBakJDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxL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SUF1TnJDLG1DQUFDO0NBQUEsQUF4T0QsSUF3T0M7U0FsT1ksNEJBQTRCOzs7SUFFdkMsMkRBQStEOztJQUMvRCxxREFBK0Q7O0lBQy9ELGlEQUFtQzs7SUFDbkMsc0RBQXdDOztJQUN4Qyx1REFBeUM7O0lBQ3pDLG1EQUFnQzs7SUFDaEMsb0RBQWlDOztJQUdqQyw4Q0FBMkU7O0lBRTNFLG1EQUFnRDs7SUFFcEMsbURBQStCOztJQUFFLDBEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIE9uSW5pdCwgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgXG4gICAgICAgICBBZnRlckNvbnRlbnRJbml0LCBEb0NoZWNrLCBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBTdWJqZWN0LCBmcm9tRXZlbnQsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBUZE5hdlN0ZXBDb21wb25lbnQgfSBmcm9tICcuLi9uYXYtc3RlcC9uYXYtc3RlcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1ob3Jpem9udGFsLW5hdi1zdGVwcGVyJyxcbiAgc3R5bGVVcmxzOiBbJy4vaG9yaXpvbnRhbC1uYXYtc3RlcHBlci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9yaXpvbnRhbC1uYXYtc3RlcHBlci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZEhvcml6b250YWxTdGVwcGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBEb0NoZWNrLCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX3Jlc2l6ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIF93aWR0aFN1YmplY3Q6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcbiAgcHJpdmF0ZSBfcmVzaXppbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2hvd0xlZnRBcnJvdzogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9zaG93UmlnaHRBcnJvdzogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9sZWZ0SGlkZGVuOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9yaWdodEhpZGRlbjogbnVtYmVyID0gMDtcblxuICAvLyBhbGwgdGhlIHN1YiBjb21wb25lbnRzLCB3aGljaCBhcmUgdGhlIGluZGl2aWR1YWwgc3RlcHNcbiAgQENvbnRlbnRDaGlsZHJlbihUZE5hdlN0ZXBDb21wb25lbnQpIF9zdGVwczogUXVlcnlMaXN0PFRkTmF2U3RlcENvbXBvbmVudD47XG4gIC8vIHRoZSBsaXN0IG9mIGhpZGRlbiBzdGVwcyBub3Qgc2hvd24gcmlnaHQgbm93IChyZXNwb25zaXZlKVxuICBoaWRkZW5TdGVwczogVGROYXZTdGVwQ29tcG9uZW50W10gPSBuZXcgQXJyYXkoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3Jlc2l6ZVN1YnNjcmlwdGlvbiA9IG1lcmdlKFxuICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMCksXG4gICAgICApLFxuICAgICAgdGhpcy5fd2lkdGhTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICApLFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5fcmVzaXppbmcpIHtcbiAgICAgICAgdGhpcy5fcmVzaXppbmcgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXlXaWR0aEF2YWlsYWJsZVN0ZXBzKCk7XG4gICAgICAgICAgdGhpcy5fcmVzaXppbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudFJlZiAmJiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX3dpZHRoU3ViamVjdC5uZXh0KHRoaXMubmF0aXZlRWxlbWVudFdpZHRoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRTdGVwU2V0dGluZ3MoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3Jlc2l6ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLypcbiAgKiBDdXJyZW50IHdpZHRoIG9mIHRoZSBlbGVtZW50IGNvbnRhaW5lclxuICAqL1xuICBnZXQgbmF0aXZlRWxlbWVudFdpZHRoKCk6IG51bWJlciB7XG4gICAgbGV0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuXG4gICAgLy8gTmVlZCB0byB0YWtlIGludG8gYWNjb3VudCBib3JkZXIsIG1hcmdpbiBhbmQgcGFkZGluZyB0aGF0IG1pZ2h0IGJlIGFyb3VuZCBhbGwgdGhlIGNydW1ic1xuICAgIGxldCBzdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgIGxldCBib3JkZXJMZWZ0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5ib3JkZXJMZWZ0LCAxMCk7XG4gICAgbGV0IGJvcmRlclJpZ2h0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5ib3JkZXJSaWdodCwgMTApO1xuICAgIGxldCBtYXJnaW5MZWZ0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5tYXJnaW5MZWZ0LCAxMCk7XG4gICAgbGV0IG1hcmdpblJpZ2h0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5tYXJnaW5SaWdodCwgMTApO1xuICAgIGxldCBwYWRkaW5nTGVmdDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUucGFkZGluZ0xlZnQsIDEwKTtcbiAgICBsZXQgcGFkZGluZ1JpZ2h0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5wYWRkaW5nUmlnaHQsIDEwKTtcblxuICAgIHJldHVybiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC0gYm9yZGVyTGVmdCAtIGJvcmRlclJpZ2h0IC0gbWFyZ2luTGVmdCAtIG1hcmdpblJpZ2h0IC0gcGFkZGluZ0xlZnQgLSBwYWRkaW5nUmlnaHQ7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRvdGFsIGNvdW50IG9mIGluZGl2aWR1YWwgc3RlcHNcbiAgICovXG4gIGdldCBjb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zdGVwcyA/IHRoaXMuX3N0ZXBzLmxlbmd0aCA6IDA7XG4gIH1cblxuICAvKipcbiAgICogU2hvdWxkIHdlIHNob3cgdGhlIGxlZnQgQXJyb3dcbiAgICovXG4gIGdldCBzaG93TGVmdEFycm93KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93TGVmdEFycm93O1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3VsZCB3ZSBzaG93IHRoZSByaWdodCBBcnJvd1xuICAgKi9cbiAgZ2V0IHNob3dSaWdodEFycm93KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93UmlnaHRBcnJvdztcbiAgfVxuXG4gIHB1YmxpYyBzaG93SGlkZGVuTGVmdFN0ZXAoKTogdm9pZCB7XG4gICAgbGV0IHN0ZXBzQXJyYXk6IFRkTmF2U3RlcENvbXBvbmVudFtdID0gdGhpcy5fc3RlcHMudG9BcnJheSgpO1xuICAgIC8vIHNob3cgdGhlIGxlZnQgb25lXG4gICAgc3RlcHNBcnJheVt0aGlzLl9sZWZ0SGlkZGVuIC0gMV0uZGlzcGxheVN0ZXAgPSB0cnVlO1xuICAgIHRoaXMuaGlkZGVuU3RlcHMuc3BsaWNlKHRoaXMuX2xlZnRIaWRkZW4gLSAxLCAxKTtcbiAgICB0aGlzLl9sZWZ0SGlkZGVuLS07XG4gICAgLy8gSWYgbm8gbW9yZSBoaWRkZW4gc3RlcHMgdGhlbiBoaWRlIGxlZnQgYXJyb3dcbiAgICBpZiAodGhpcy5fbGVmdEhpZGRlbiA9PT0gMCkge1xuICAgICAgdGhpcy5fc2hvd0xlZnRBcnJvdyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGhpZGUgdGhlIHJpZ2h0IG9uZVxuICAgIHN0ZXBzQXJyYXlbc3RlcHNBcnJheS5sZW5ndGggLSAodGhpcy5fcmlnaHRIaWRkZW4gKyAxKV0uZGlzcGxheVN0ZXAgPSBmYWxzZTtcbiAgICBzdGVwc0FycmF5W3N0ZXBzQXJyYXkubGVuZ3RoIC0gKHRoaXMuX3JpZ2h0SGlkZGVuICsgMildLmRpc3BsYXlMaW5lID0gZmFsc2U7XG4gICAgdGhpcy5oaWRkZW5TdGVwcy5wdXNoKHN0ZXBzQXJyYXlbc3RlcHNBcnJheS5sZW5ndGggLSAxXSk7XG4gICAgdGhpcy5fcmlnaHRIaWRkZW4rKztcblxuICAgIHRoaXMuX3Nob3dSaWdodEFycm93ID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBzaG93SGlkZGVuUmlnaHRTdGVwKCk6IHZvaWQge1xuICAgIGxldCBzdGVwc0FycmF5OiBUZE5hdlN0ZXBDb21wb25lbnRbXSA9IHRoaXMuX3N0ZXBzLnRvQXJyYXkoKTtcbiAgICAvLyBzaG93IHRoZSByaWdodCBvbmVcbiAgICBzdGVwc0FycmF5W3N0ZXBzQXJyYXkubGVuZ3RoIC0gdGhpcy5fcmlnaHRIaWRkZW5dLmRpc3BsYXlTdGVwID0gdHJ1ZTtcbiAgICBzdGVwc0FycmF5W3N0ZXBzQXJyYXkubGVuZ3RoIC0gKHRoaXMuX3JpZ2h0SGlkZGVuICsgMSldLmRpc3BsYXlMaW5lID0gdHJ1ZTtcbiAgICB0aGlzLmhpZGRlblN0ZXBzLnBvcCgpO1xuICAgIHRoaXMuX3JpZ2h0SGlkZGVuLS07XG4gICAgLy8gSWYgbm8gbW9yZSBoaWRkZW4gc3RlcHMgdGhlbiBoaWRlIHJpZ2h0IGFycm93XG4gICAgaWYgKHRoaXMuX3JpZ2h0SGlkZGVuID09PSAwKSB7XG4gICAgICB0aGlzLl9zaG93UmlnaHRBcnJvdyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGhpZGUgdGhlIGxlZnQgb25lXG4gICAgc3RlcHNBcnJheVt0aGlzLl9sZWZ0SGlkZGVuXS5kaXNwbGF5U3RlcCA9IGZhbHNlO1xuICAgIHRoaXMuaGlkZGVuU3RlcHMucHVzaChzdGVwc0FycmF5W3RoaXMuX2xlZnRIaWRkZW5dKTtcbiAgICB0aGlzLl9sZWZ0SGlkZGVuKys7XG5cbiAgICB0aGlzLl9zaG93TGVmdEFycm93ID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHN0ZXAgbGluZSBzZXBhcmF0b3JzIGFuZCBkaXNwbGF5IG51bWJlcnNcbiAgICovXG4gIHByaXZhdGUgc2V0U3RlcFNldHRpbmdzKCk6IHZvaWQge1xuICAgIGxldCBzdGVwc0FycmF5OiBUZE5hdlN0ZXBDb21wb25lbnRbXSA9IHRoaXMuX3N0ZXBzLnRvQXJyYXkoKTtcbiAgICBpZiAoc3RlcHNBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBkb24ndCBzaG93IHRoZSBpY29uIG9uIHRoZSBsYXN0IGJyZWFkY3J1bWJcbiAgICAgIHN0ZXBzQXJyYXlbc3RlcHNBcnJheS5sZW5ndGggLSAxXS5kaXNwbGF5TGluZSA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBzZXQgdGhlIGluZGV4IG51bWJlciBvZiB0aGUgc3RlcCBzbyBjYW4gZGlzcGxheSB0aGF0IG51bWJlciBpbiBjaXJjbGVcbiAgICBzdGVwc0FycmF5LmZvckVhY2goKHN0ZXA6IFRkTmF2U3RlcENvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgc3RlcC5udW1iZXIgPSBpbmRleCArIDE7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGRpc3BsYXlXaWR0aEF2YWlsYWJsZVN0ZXBzKCk6IHZvaWQge1xuICAgIGxldCBjdXJUb3RTdGVwV2lkdGg6IG51bWJlciA9IDA7XG4gICAgbGV0IHN0ZXBzQXJyYXk6IFRkTmF2U3RlcENvbXBvbmVudFtdID0gdGhpcy5fc3RlcHMudG9BcnJheSgpO1xuICAgIC8vIGNhbGN1bGF0ZSB0aGUgY3VycmVudCB3aWR0aCBvZiB0aGUgc2hvd24gc3RlcHNcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSB0aGlzLmhpZGRlblN0ZXBzLmxlbmd0aDsgaSA8IHN0ZXBzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGN1clRvdFN0ZXBXaWR0aCArPSBzdGVwc0FycmF5W2ldLndpZHRoO1xuICAgIH1cbiAgICAvLyBnZXQgdGhlIGFjdGl2ZSBzdGVwIGluZGV4XG4gICAgbGV0IGFjdGl2ZUluZGV4OiBudW1iZXIgPSBzdGVwc0FycmF5LmZpbmRJbmRleCgoc3RlcDogVGROYXZTdGVwQ29tcG9uZW50KSA9PiB7XG4gICAgICByZXR1cm4gc3RlcC5hY3RpdmUgPT09IHRydWU7XG4gICAgfSk7XG4gICAgLy8gaGlkZSB0aGUgZmlyc3Qgc3RlcCBpZiB3aW5kb3cgc2l6ZSBpcyBzbWFsbGVyIHRoYW4gYWxsIHRoZSBzdGVwIHNpemVzXG4gICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudFdpZHRoIDwgY3VyVG90U3RlcFdpZHRoKSB7XG4gICAgICAvLyBkZXRlcm1pbmUgaWYgdGhlIGFjdGl2ZSBzdGVwIGlzIGluIHRoZSBmaXJzdCBvciBzZWNvbmQgaGFsZiBvZiB0aGUgbGlzdFxuICAgICAgLy8gYW5kIGNoZWNrIHRoYXQgYWxsIHRoZSBsZWZ0IG9uZXMgYXJlbid0IGFscmVhZHkgaGlkZGVuICgybmQgY2hlY2sgYWZ0ZXIgJiYgZG9lcyB0aGF0KVxuICAgICAgLy8gYW5kIGhpZGUgb24gdGhlIG9wcG9zaXRlIHNpZGUgb2YgdGhhdFxuICAgICAgaWYgKChhY3RpdmVJbmRleCA+PSBzdGVwc0FycmF5Lmxlbmd0aCAvIDIpICYmICh0aGlzLl9sZWZ0SGlkZGVuIDwgYWN0aXZlSW5kZXgpKSB7XG4gICAgICAgIC8vIGxlZnRcbiAgICAgICAgdGhpcy5fc2hvd1JpZ2h0QXJyb3cgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc2hvd0xlZnRBcnJvdyA9IHRydWU7XG4gICAgICAgIHRoaXMuX2xlZnRIaWRkZW4rKztcbiAgICAgICAgc3RlcHNBcnJheVt0aGlzLl9sZWZ0SGlkZGVuIC0gMV0uZGlzcGxheVN0ZXAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oaWRkZW5TdGVwcy5wdXNoKHN0ZXBzQXJyYXlbdGhpcy5oaWRkZW5TdGVwcy5sZW5ndGhdKTtcbiAgICAgIC8vIENoZWNrIHRvIHNlZSB0aGF0IGFsbCB0aGUgcG9zc2libGUgb25lcyBvbiB0aGUgcmlnaHQgYXJlbid0IGFscmVhZHkgaGlkZGVuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3JpZ2h0SGlkZGVuIDwgc3RlcHNBcnJheS5sZW5ndGggLSBhY3RpdmVJbmRleCkge1xuICAgICAgICAvLyByaWdodFxuICAgICAgICB0aGlzLl9zaG93UmlnaHRBcnJvdyA9IHRydWU7XG4gICAgICAgIHRoaXMuX3Nob3dMZWZ0QXJyb3cgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcmlnaHRIaWRkZW4rKztcbiAgICAgICAgc3RlcHNBcnJheVtzdGVwc0FycmF5Lmxlbmd0aCAtIHRoaXMuX3JpZ2h0SGlkZGVuXS5kaXNwbGF5U3RlcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhpZGRlblN0ZXBzLnB1c2goc3RlcHNBcnJheVtzdGVwc0FycmF5Lmxlbmd0aCAtIHRoaXMuX3JpZ2h0SGlkZGVuXSk7XG4gICAgICB9XG4gICAgICB0aGlzLmRpc3BsYXlXaWR0aEF2YWlsYWJsZVN0ZXBzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGxvb3Agb3ZlciBhbGwgdGhlIGhpZGRlbiBzdGVwcyBhbmQgc2VlIGlmIGFkZGluZyB0aGVtIGJhY2sgaW4gd2lsbFxuICAgICAgLy8gZml0IGluIHRoZSBjdXJyZW50IHdpbmRvdyBzaXplXG4gICAgICBsZXQgdG90YWxIaWRkZW46IG51bWJlciA9IHRoaXMuaGlkZGVuU3RlcHMubGVuZ3RoIC0gMTtcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IHRvdGFsSGlkZGVuOyBpID49IDA7IGktLSkge1xuICAgICAgICBsZXQgaGlkZGVuU3RlcFdpZHRoOiBudW1iZXIgPSBzdGVwc0FycmF5W2ldLndpZHRoO1xuICAgICAgICBpZiAoKGN1clRvdFN0ZXBXaWR0aCArIGhpZGRlblN0ZXBXaWR0aCkgPCB0aGlzLm5hdGl2ZUVsZW1lbnRXaWR0aCkge1xuICAgICAgICAgIC8vIERldGVybWluZSBpZiB0aGUgYWN0aXZlIHN0ZXAgaXMgaW4gdGhlIGZpcnN0IG9yIHNlY29uZCBoYWxmIG9mIHRoZSBsaXN0XG4gICAgICAgICAgLy8gYW5kIGlmIGl0cyByaWdodCBhbmQgdGhlcmUgYXJlIGhpZGRlbiBsZWZ0IHN0ZXBzXG4gICAgICAgICAgLy8gb3IgaWYgaXQgbGVmdCBhbmQgdGhlcmUgYXJlIG5vIHJpZ2h0IGhpZGRlbiBvbmVzIGFuZCBzb21lIGxlZnQgaGlkZGVuICh1c2luZyBhcnJvd3MgY2FuIGNhdXNlIGl0IHRvIGJlIHVuYmFsYW5jZWQpXG4gICAgICAgICAgLy8gdGhlbiBzaG93IHRoZSBoaWRkZW4gb25lcyBvbiB0aGUgbGVmdFxuICAgICAgICAgIGlmICgoYWN0aXZlSW5kZXggPj0gc3RlcHNBcnJheS5sZW5ndGggLyAyICYmIHRoaXMuX2xlZnRIaWRkZW4gPiAwKSB8fCBcbiAgICAgICAgICAgICAgKGFjdGl2ZUluZGV4IDwgc3RlcHNBcnJheS5sZW5ndGggLyAyICYmIHRoaXMuX3JpZ2h0SGlkZGVuID09PSAwICYmIHRoaXMuX2xlZnRIaWRkZW4gPiAwKSkge1xuICAgICAgICAgICAgLy8gbGVmdFxuICAgICAgICAgICAgc3RlcHNBcnJheVt0aGlzLl9sZWZ0SGlkZGVuIC0gMV0uZGlzcGxheVN0ZXAgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5oaWRkZW5TdGVwcy5zaGlmdCgpO1xuICAgICAgICAgICAgdGhpcy5fbGVmdEhpZGRlbi0tO1xuICAgICAgICAgICAgLy8gSWYgbm8gbW9yZSBoaWRkZW4gc3RlcHMgdGhlbiBoaWRlIGxlZnQgYXJyb3dcbiAgICAgICAgICAgIGlmICh0aGlzLl9sZWZ0SGlkZGVuID09PSAwKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Nob3dMZWZ0QXJyb3cgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBhcmUgYW55IG9uIHRoZSByaWdodCBoaWRkZW4gYW5kIHNob3cgdGhlbVxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fcmlnaHRIaWRkZW4gPiAwKSB7XG4gICAgICAgICAgICAvLyByaWdodFxuICAgICAgICAgICAgc3RlcHNBcnJheVtzdGVwc0FycmF5Lmxlbmd0aCAtIHRoaXMuX3JpZ2h0SGlkZGVuXS5kaXNwbGF5U3RlcCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmhpZGRlblN0ZXBzLnBvcCgpO1xuICAgICAgICAgICAgdGhpcy5fcmlnaHRIaWRkZW4tLTtcbiAgICAgICAgICAgIC8vIElmIG5vIG1vcmUgaGlkZGVuIHN0ZXBzIHRoZW4gaGlkZSByaWdodCBhcnJvd1xuICAgICAgICAgICAgaWYgKHRoaXMuX3JpZ2h0SGlkZGVuID09PSAwKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Nob3dSaWdodEFycm93ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHJlY2FsY3VsYXRlIHRoZSB0b3RhbCB3aWR0aCBiYXNlZCBvbiBhZGRpbmcgYmFjayBpbiBhIHN0ZXBcbiAgICAgICAgICBsZXQgbmV3VG90U3RlcFdpZHRoOiBudW1iZXIgPSAwO1xuICAgICAgICAgIGZvciAobGV0IGo6IG51bWJlciA9IHRoaXMuaGlkZGVuU3RlcHMubGVuZ3RoOyBqIDwgc3RlcHNBcnJheS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbmV3VG90U3RlcFdpZHRoICs9IHN0ZXBzQXJyYXlbal0ud2lkdGg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGN1clRvdFN0ZXBXaWR0aCA9IG5ld1RvdFN0ZXBXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSB0b3RhbEhpZGRlbikge1xuICAgICAgICAgIC8vIG5lZWQgdG8gYnJlYWsgb3V0IG9mIGxvb3AgaGVyZSBiZWNhdXNlIHRoZSBmaXJzdCBpbiB0aGUgaGlkZGVuXG4gICAgICAgICAgLy8gbGlzdCBjYW4ndCBmaXQgaW4gY3VycmVudCB3aW5kb3cgc2l6ZVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==