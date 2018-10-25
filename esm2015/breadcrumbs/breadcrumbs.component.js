/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, ContentChildren, QueryList, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, Input, } from '@angular/core';
import { Subscription, Subject, fromEvent, merge, } from 'rxjs';
import { debounceTime, distinctUntilChanged, } from 'rxjs/operators';
import { TdBreadcrumbComponent } from './breadcrumb/breadcrumb.component';
export class TdBreadcrumbsComponent {
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
    ngOnInit() {
        this._resizeSubscription = merge(fromEvent(window, 'resize').pipe(debounceTime(10)), this._widthSubject.asObservable().pipe(distinctUntilChanged())).subscribe(() => {
            if (!this._resizing) {
                this._resizing = true;
                setTimeout(() => {
                    this.displayWidthAvailableCrumbs();
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
        this.setCrumbIcons();
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
     * The total count of individual breadcrumbs
     * @return {?}
     */
    get count() {
        return this._breadcrumbs ? this._breadcrumbs.length : 0;
    }
    /**
     * Set the crumb icon separators
     * @return {?}
     */
    setCrumbIcons() {
        /** @type {?} */
        let breadcrumbArray = this._breadcrumbs.toArray();
        if (breadcrumbArray.length > 0) {
            // don't show the icon on the last breadcrumb
            breadcrumbArray[breadcrumbArray.length - 1]._displayIcon = false;
        }
        breadcrumbArray.forEach((breadcrumb) => {
            breadcrumb.separatorIcon = this.separatorIcon;
        });
    }
    /**
     * @return {?}
     */
    displayWidthAvailableCrumbs() {
        /** @type {?} */
        let curTotCrumbWidth = 0;
        /** @type {?} */
        let crumbsArray = this._breadcrumbs.toArray();
        // calculate the current width of the shown breadcrumbs
        for (let i = this.hiddenBreadcrumbs.length; i < crumbsArray.length; i++) {
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
            let totalHidden = this.hiddenBreadcrumbs.length - 1;
            for (let i = totalHidden; i >= 0; i--) {
                /** @type {?} */
                let hiddenCrumbWidth = crumbsArray[i].width;
                if ((curTotCrumbWidth + hiddenCrumbWidth) < this.nativeElementWidth) {
                    crumbsArray[i].displayCrumb = true;
                    crumbsArray[i + 1]._displayIcon = true;
                    this.hiddenBreadcrumbs.pop();
                    // recalculate the total width based on adding back in a crumb
                    /** @type {?} */
                    let newTotCrumbWidth = 0;
                    for (let j = this.hiddenBreadcrumbs.length; j < crumbsArray.length; j++) {
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
    }
}
TdBreadcrumbsComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-breadcrumbs',
                template: "<div class=\"td-breadcrumbs\">\n  <ng-content></ng-content>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:block;width:100%}:host .td-breadcrumbs{white-space:nowrap}"]
            }] }
];
/** @nocollapse */
TdBreadcrumbsComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
TdBreadcrumbsComponent.propDecorators = {
    _breadcrumbs: [{ type: ContentChildren, args: [TdBreadcrumbComponent,] }],
    separatorIcon: [{ type: Input, args: ['separatorIcon',] }]
};
if (false) {
    /** @type {?} */
    TdBreadcrumbsComponent.prototype._resizeSubscription;
    /** @type {?} */
    TdBreadcrumbsComponent.prototype._widthSubject;
    /** @type {?} */
    TdBreadcrumbsComponent.prototype._resizing;
    /** @type {?} */
    TdBreadcrumbsComponent.prototype._breadcrumbs;
    /** @type {?} */
    TdBreadcrumbsComponent.prototype.hiddenBreadcrumbs;
    /**
     * Sets the icon url shown between breadcrumbs. Defaults to right chevron.
     * @type {?}
     */
    TdBreadcrumbsComponent.prototype.separatorIcon;
    /** @type {?} */
    TdBreadcrumbsComponent.prototype._elementRef;
    /** @type {?} */
    TdBreadcrumbsComponent.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9icmVhZGNydW1icy8iLCJzb3VyY2VzIjpbImJyZWFkY3J1bWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsU0FBUyxFQUdULHVCQUF1QixFQUd2QixpQkFBaUIsRUFDakIsVUFBVSxFQUNWLEtBQUssR0FDTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wsWUFBWSxFQUNaLE9BQU8sRUFDUCxTQUFTLEVBQ1QsS0FBSyxHQUNOLE1BQU0sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUNMLFlBQVksRUFDWixvQkFBb0IsR0FDckIsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQVExRSxNQUFNLE9BQU8sc0JBQXNCOzs7OztJQWdCakMsWUFBb0IsV0FBdUIsRUFBVSxrQkFBcUM7UUFBdEUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBZGxGLHdCQUFtQixHQUFpQixZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ3ZELGtCQUFhLEdBQW9CLElBQUksT0FBTyxFQUFVLENBQUM7UUFDdkQsY0FBUyxHQUFZLEtBQUssQ0FBQzs7UUFLbkMsc0JBQWlCLEdBQTRCLElBQUksS0FBSyxFQUFFLENBQUM7Ozs7UUFLakMsa0JBQWEsR0FBVyxlQUFlLENBQUM7SUFFOEIsQ0FBQzs7OztJQUUvRixRQUFRO1FBQ04sSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FDOUIsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQzlCLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FDakIsRUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVks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Q0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQy9FLGdCQUFnQixJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7cUJBQzFDO29CQUNELGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO2lCQUNyQztxQkFBTSxJQUFJLENBQUMsS0FBSyxXQUFXLEVBQUU7b0JBQzVCLGlFQUFpRTtvQkFDakUsd0NBQXdDO29CQUN4QyxNQUFNO2lCQUNQO2FBQ0Y7U0FDRjtJQUNILENBQUM7OztZQXBJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFFMUIsaUZBQTJDO2dCQUMzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7WUF0QkMsVUFBVTtZQURWLGlCQUFpQjs7OzJCQStCaEIsZUFBZSxTQUFDLHFCQUFxQjs0QkFPckMsS0FBSyxTQUFDLGVBQWU7Ozs7SUFadEIscURBQStEOztJQUMvRCwrQ0FBK0Q7O0lBQy9ELDJDQUFtQzs7SUFHbkMsOENBQXVGOztJQUV2RixtREFBeUQ7Ozs7O0lBS3pELCtDQUFnRTs7SUFFcEQsNkNBQStCOztJQUFFLG9EQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgRG9DaGVjayxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgU3Vic2NyaXB0aW9uLFxuICBTdWJqZWN0LFxuICBmcm9tRXZlbnQsXG4gIG1lcmdlLFxufSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlYm91bmNlVGltZSxcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVGRCcmVhZGNydW1iQ29tcG9uZW50IH0gZnJvbSAnLi9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtYnJlYWRjcnVtYnMnLFxuICBzdHlsZVVybHM6IFsnLi9icmVhZGNydW1icy5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYnMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRCcmVhZGNydW1ic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRG9DaGVjaywgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9yZXNpemVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSBfd2lkdGhTdWJqZWN0OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG4gIHByaXZhdGUgX3Jlc2l6aW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gYWxsIHRoZSBzdWIgY29tcG9uZW50cywgd2hpY2ggYXJlIHRoZSBpbmRpdmlkdWFsIGJyZWFkY3J1bWJzXG4gIEBDb250ZW50Q2hpbGRyZW4oVGRCcmVhZGNydW1iQ29tcG9uZW50KSBfYnJlYWRjcnVtYnM6IFF1ZXJ5TGlzdDxUZEJyZWFkY3J1bWJDb21wb25lbnQ+O1xuICAvLyB0aGUgbGlzdCBvZiBoaWRkZW4gYnJlYWRjcnVtYnMgbm90IHNob3duIHJpZ2h0IG5vdyAocmVzcG9uc2l2ZSlcbiAgaGlkZGVuQnJlYWRjcnVtYnM6IFRkQnJlYWRjcnVtYkNvbXBvbmVudFtdID0gbmV3IEFycmF5KCk7XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGljb24gdXJsIHNob3duIGJldHdlZW4gYnJlYWRjcnVtYnMuIERlZmF1bHRzIHRvIHJpZ2h0IGNoZXZyb24uXG4gICAqL1xuICBASW5wdXQoJ3NlcGFyYXRvckljb24nKSBzZXBhcmF0b3JJY29uOiBzdHJpbmcgPSAnbmF2aWdhdGVfbmV4dCc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZXNpemVTdWJzY3JpcHRpb24gPSBtZXJnZShcbiAgICAgIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKS5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMTApLFxuICAgICAgKSxcbiAgICAgIHRoaXMuX3dpZHRoU3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgKSxcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX3Jlc2l6aW5nKSB7XG4gICAgICAgIHRoaXMuX3Jlc2l6aW5nID0gdHJ1ZTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5V2lkdGhBdmFpbGFibGVDcnVtYnMoKTtcbiAgICAgICAgICB0aGlzLl9yZXNpemluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9LCAxMDApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9lbGVtZW50UmVmICYmIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5fd2lkdGhTdWJqZWN0Lm5leHQodGhpcy5uYXRpdmVFbGVtZW50V2lkdGgpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENydW1iSWNvbnMoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3Jlc2l6ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLypcbiAgKiBDdXJyZW50IHdpZHRoIG9mIHRoZSBlbGVtZW50IGNvbnRhaW5lclxuICAqL1xuICBnZXQgbmF0aXZlRWxlbWVudFdpZHRoKCk6IG51bWJlciB7XG4gICAgbGV0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIC8vIE5lZWQgdG8gdGFrZSBpbnRvIGFjY291bnQgYm9yZGVyLCBtYXJnaW4gYW5kIHBhZGRpbmcgdGhhdCBtaWdodCBiZSBhcm91bmQgYWxsIHRoZSBjcnVtYnNcbiAgICBsZXQgc3R5bGU6IENTU1N0eWxlRGVjbGFyYXRpb24gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgICBsZXQgYm9yZGVyTGVmdDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUuYm9yZGVyTGVmdCwgMTApO1xuICAgIGxldCBib3JkZXJSaWdodDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUuYm9yZGVyUmlnaHQsIDEwKTtcbiAgICBsZXQgbWFyZ2luTGVmdDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUubWFyZ2luTGVmdCwgMTApO1xuICAgIGxldCBtYXJnaW5SaWdodDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUubWFyZ2luUmlnaHQsIDEwKTtcbiAgICBsZXQgcGFkZGluZ0xlZnQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLnBhZGRpbmdMZWZ0LCAxMCk7XG4gICAgbGV0IHBhZGRpbmdSaWdodDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUucGFkZGluZ1JpZ2h0LCAxMCk7XG5cbiAgICByZXR1cm4gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtIGJvcmRlckxlZnQgLSBib3JkZXJSaWdodCAtIG1hcmdpbkxlZnQgLSBtYXJnaW5SaWdodCAtIHBhZGRpbmdMZWZ0IC0gcGFkZGluZ1JpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0b3RhbCBjb3VudCBvZiBpbmRpdmlkdWFsIGJyZWFkY3J1bWJzXG4gICAqL1xuICBnZXQgY291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fYnJlYWRjcnVtYnMgPyB0aGlzLl9icmVhZGNydW1icy5sZW5ndGggOiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgY3J1bWIgaWNvbiBzZXBhcmF0b3JzXG4gICAqL1xuICBwcml2YXRlIHNldENydW1iSWNvbnMoKTogdm9pZCB7XG4gICAgbGV0IGJyZWFkY3J1bWJBcnJheTogVGRCcmVhZGNydW1iQ29tcG9uZW50W10gPSB0aGlzLl9icmVhZGNydW1icy50b0FycmF5KCk7XG4gICAgaWYgKGJyZWFkY3J1bWJBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBkb24ndCBzaG93IHRoZSBpY29uIG9uIHRoZSBsYXN0IGJyZWFkY3J1bWJcbiAgICAgIGJyZWFkY3J1bWJBcnJheVticmVhZGNydW1iQXJyYXkubGVuZ3RoIC0gMV0uX2Rpc3BsYXlJY29uID0gZmFsc2U7XG4gICAgfVxuICAgIGJyZWFkY3J1bWJBcnJheS5mb3JFYWNoKChicmVhZGNydW1iOiBUZEJyZWFkY3J1bWJDb21wb25lbnQpID0+IHtcbiAgICAgIGJyZWFkY3J1bWIuc2VwYXJhdG9ySWNvbiA9IHRoaXMuc2VwYXJhdG9ySWNvbjtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZGlzcGxheVdpZHRoQXZhaWxhYmxlQ3J1bWJzKCk6IHZvaWQge1xuICAgIGxldCBjdXJUb3RDcnVtYldpZHRoOiBudW1iZXIgPSAwO1xuICAgIGxldCBjcnVtYnNBcnJheTogVGRCcmVhZGNydW1iQ29tcG9uZW50W10gPSB0aGlzLl9icmVhZGNydW1icy50b0FycmF5KCk7XG4gICAgLy8gY2FsY3VsYXRlIHRoZSBjdXJyZW50IHdpZHRoIG9mIHRoZSBzaG93biBicmVhZGNydW1ic1xuICAgIGZvciAobGV0IGk6IG51bWJlciA9IHRoaXMuaGlkZGVuQnJlYWRjcnVtYnMubGVuZ3RoOyBpIDwgY3J1bWJzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGN1clRvdENydW1iV2lkdGggKz0gY3J1bWJzQXJyYXlbaV0ud2lkdGg7XG4gICAgfVxuICAgIC8vIGhpZGUgdGhlIGZpcnN0IGJyZWFkIGNydW1iIGlmIHdpbmRvdyBzaXplIGlzIHNtYWxsZXIgdGhhbiBhbGwgdGhlIGNydW1iIHNpemVzXG4gICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudFdpZHRoIDwgY3VyVG90Q3J1bWJXaWR0aCkge1xuICAgICAgY3J1bWJzQXJyYXlbdGhpcy5oaWRkZW5CcmVhZGNydW1icy5sZW5ndGhdLmRpc3BsYXlDcnVtYiA9IGZhbHNlO1xuICAgICAgdGhpcy5oaWRkZW5CcmVhZGNydW1icy5wdXNoKGNydW1ic0FycmF5W3RoaXMuaGlkZGVuQnJlYWRjcnVtYnMubGVuZ3RoXSk7XG4gICAgICB0aGlzLmRpc3BsYXlXaWR0aEF2YWlsYWJsZUNydW1icygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBsb29wIG92ZXIgYWxsIHRoZSBoaWRkZW4gY3J1bWJzIGFuZCBzZWUgaWYgYWRkaW5nIHRoZW0gYmFjayBpbiB3aWxsXG4gICAgICAvLyBmaXQgaW4gdGhlIGN1cnJlbnQgd2luZG93IHNpemVcbiAgICAgIGxldCB0b3RhbEhpZGRlbjogbnVtYmVyID0gdGhpcy5oaWRkZW5CcmVhZGNydW1icy5sZW5ndGggLSAxO1xuICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gdG90YWxIaWRkZW47IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGxldCBoaWRkZW5DcnVtYldpZHRoOiBudW1iZXIgPSBjcnVtYnNBcnJheVtpXS53aWR0aDtcbiAgICAgICAgaWYgKChjdXJUb3RDcnVtYldpZHRoICsgaGlkZGVuQ3J1bWJXaWR0aCkgPCB0aGlzLm5hdGl2ZUVsZW1lbnRXaWR0aCkge1xuICAgICAgICAgIGNydW1ic0FycmF5W2ldLmRpc3BsYXlDcnVtYiA9IHRydWU7XG4gICAgICAgICAgY3J1bWJzQXJyYXlbaSArIDFdLl9kaXNwbGF5SWNvbiA9IHRydWU7XG4gICAgICAgICAgdGhpcy5oaWRkZW5CcmVhZGNydW1icy5wb3AoKTtcbiAgICAgICAgICAvLyByZWNhbGN1bGF0ZSB0aGUgdG90YWwgd2lkdGggYmFzZWQgb24gYWRkaW5nIGJhY2sgaW4gYSBjcnVtYlxuICAgICAgICAgIGxldCBuZXdUb3RDcnVtYldpZHRoOiBudW1iZXIgPSAwO1xuICAgICAgICAgIGZvciAobGV0IGo6IG51bWJlciA9IHRoaXMuaGlkZGVuQnJlYWRjcnVtYnMubGVuZ3RoOyBqIDwgY3J1bWJzQXJyYXkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIG5ld1RvdENydW1iV2lkdGggKz0gY3J1bWJzQXJyYXlbal0ud2lkdGg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGN1clRvdENydW1iV2lkdGggPSBuZXdUb3RDcnVtYldpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IHRvdGFsSGlkZGVuKSB7XG4gICAgICAgICAgLy8gbmVlZCB0byBicmVhayBvdXQgb2YgbG9vcCBoZXJlIGJlY2F1c2UgdGhlIGZpcnN0IGluIHRoZSBoaWRkZW5cbiAgICAgICAgICAvLyBsaXN0IGNhbid0IGZpdCBpbiBjdXJyZW50IHdpbmRvdyBzaXplXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIl19