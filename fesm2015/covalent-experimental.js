import { Component, NgModule, ElementRef, Renderer2, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef, ContentChildren, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, Subject, fromEvent, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { MatIconModule } from '@angular/material/icon';
export { CovalentTabSelectModule, TdTabSelectBase, _TdTabSelectMixinBase, TdTabSelectComponent, TdTabOptionBase, _TdTabOptionMixinBase, TdTabOptionComponent } from '@covalent/core/tab-select';

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
class TdBreadcrumbComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _changeDetectorRef
     */
    constructor(_elementRef, _renderer, _changeDetectorRef) {
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
    /**
     * @return {?}
     */
    get displayCrumb() {
        return this._displayCrumb;
    }
    /**
     * Whether to display the crumb or not
     * @param {?} shouldDisplay
     * @return {?}
     */
    set displayCrumb(shouldDisplay) {
        this._displayCrumb = shouldDisplay;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Width of the DOM element of the crumb
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
        return this._displayCrumb ? undefined : 'none';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // set the width from the actual rendered DOM element
        this._width = ((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().width;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Stop click propagation when clicking on icon
     * @param {?} event
     * @return {?}
     */
    _handleIconClick(event) {
        event.stopPropagation();
        event.preventDefault();
    }
}
TdBreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-breadcrumb, a[td-breadcrumb]',
                template: "<span *ngIf=\"displayCrumb\" class=\"td-breadcrumb\">\n  <ng-content></ng-content>\n  <mat-icon *ngIf=\"_displayIcon\"\n            class=\"td-breadcrumb-separator-icon\"\n            [style.cursor]=\"'default'\"\n            (click)=\"_handleIconClick($event)\">\n    {{separatorIcon}}\n  </mat-icon>\n</span>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host .td-breadcrumb{height:48px;box-sizing:border-box;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:end;justify-content:flex-end}:host .td-breadcrumb ::ng-deep>*{margin:0 10px}:host .td-breadcrumb-separator-icon{display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}:host.mat-button{min-width:0;padding:0}"]
            }] }
];
/** @nocollapse */
TdBreadcrumbComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
TdBreadcrumbComponent.propDecorators = {
    displayBinding: [{ type: HostBinding, args: ['style.display',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdBreadcrumbsComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class CovalentBreadcrumbsModule {
}
CovalentBreadcrumbsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatIconModule,
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

export { CovalentRenameMeModule, TdRenameMeComponent, CovalentBreadcrumbsModule, TdBreadcrumbsComponent, TdBreadcrumbComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtZXhwZXJpbWVudGFsLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL3RlbXBsYXRlLXJlbmFtZS1tZS1leHBlcmltZW50LW1vZHVsZS9yZW5hbWUtbWUuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL3RlbXBsYXRlLXJlbmFtZS1tZS1leHBlcmltZW50LW1vZHVsZS9yZW5hbWUtbWUubW9kdWxlLnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtcmVuYW1lTWUnLFxuICBzdHlsZVVybHM6IFsnLi9yZW5hbWUtbWUuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlbmFtZS1tZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkUmVuYW1lTWVDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIHN0dWJcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgVGRSZW5hbWVNZUNvbXBvbmVudCB9IGZyb20gJy4vcmVuYW1lLW1lLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRkUmVuYW1lTWVDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUZFJlbmFtZU1lQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudFJlbmFtZU1lTW9kdWxlIHtcblxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIEhvc3RCaW5kaW5nLFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1icmVhZGNydW1iLCBhW3RkLWJyZWFkY3J1bWJdJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZEJyZWFkY3J1bWJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICBwcml2YXRlIF9kaXNwbGF5Q3J1bWI6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF93aWR0aDogbnVtYmVyID0gMDtcbiAgLy8gU2V0cyB0aGUgaWNvbiB1cmwgc2hvd24gYmV0d2VlbiBicmVhZGNydW1icy4gRGVmYXVsdHMgdG8gcmlnaHQgY2hldnJvblxuICBzZXBhcmF0b3JJY29uOiBzdHJpbmcgPSAnbmF2aWdhdGVfbmV4dCc7XG4gIC8vIFNob3VsZCBzaG93IHRoZSByaWdodCBjaGV2cm9uIG9yIG5vdCBiZWZvcmUgdGhlIGxhYmVsXG4gIF9kaXNwbGF5SWNvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgZ2V0IGRpc3BsYXlDcnVtYigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheUNydW1iO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZGlzcGxheSB0aGUgY3J1bWIgb3Igbm90XG4gICAqL1xuICBzZXQgZGlzcGxheUNydW1iKHNob3VsZERpc3BsYXk6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNwbGF5Q3J1bWIgPSBzaG91bGREaXNwbGF5O1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdpZHRoIG9mIHRoZSBET00gZWxlbWVudCBvZiB0aGUgY3J1bWJcbiAgICovXG4gIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBkaXNwbGF5IHN0eWxlIG9mIHRoZSBjcnVtYlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JylcbiAgZ2V0IGRpc3BsYXlCaW5kaW5nKCk6IHN0cmluZyB7XG4gICAgLy8gU2V0IHRoZSBkaXNwbGF5IHRvIG5vbmUgb24gdGhlIGNvbXBvbmVudCwganVzdCBpbiBjYXNlIHRoZSBlbmQgdXNlciBpcyBoaWRpbmdcbiAgICAvLyBhbmQgc2hvd2luZyB0aGVtIGluc3RlYWQgb2YgdGhlIGNvbXBvbmVudCBkb2luZyBpdHNlbGYgZm9yIHJlYXNvbnMgbGlrZSByZXNwb25zaXZlXG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlDcnVtYiA/IHVuZGVmaW5lZCA6ICdub25lJztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21hdC1idXR0b24nKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAvLyBzZXQgdGhlIHdpZHRoIGZyb20gdGhlIGFjdHVhbCByZW5kZXJlZCBET00gZWxlbWVudFxuICAgIHRoaXMuX3dpZHRoID0gKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgY2xpY2sgcHJvcGFnYXRpb24gd2hlbiBjbGlja2luZyBvbiBpY29uXG4gICAqL1xuICBfaGFuZGxlSWNvbkNsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBEb0NoZWNrLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBTdWJzY3JpcHRpb24sXG4gIFN1YmplY3QsXG4gIGZyb21FdmVudCxcbiAgbWVyZ2UsXG59IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGVib3VuY2VUaW1lLFxuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBUZEJyZWFkY3J1bWJDb21wb25lbnQgfSBmcm9tICcuL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1icmVhZGNydW1icycsXG4gIHN0eWxlVXJsczogWycuL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9icmVhZGNydW1icy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZEJyZWFkY3J1bWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBEb0NoZWNrLCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX3Jlc2l6ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIF93aWR0aFN1YmplY3Q6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcbiAgcHJpdmF0ZSBfcmVzaXppbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvLyBhbGwgdGhlIHN1YiBjb21wb25lbnRzLCB3aGljaCBhcmUgdGhlIGluZGl2aWR1YWwgYnJlYWRjcnVtYnNcbiAgQENvbnRlbnRDaGlsZHJlbihUZEJyZWFkY3J1bWJDb21wb25lbnQpIF9icmVhZGNydW1iczogUXVlcnlMaXN0PFRkQnJlYWRjcnVtYkNvbXBvbmVudD47XG4gIC8vIHRoZSBsaXN0IG9mIGhpZGRlbiBicmVhZGNydW1icyBub3Qgc2hvd24gcmlnaHQgbm93IChyZXNwb25zaXZlKVxuICBoaWRkZW5CcmVhZGNydW1iczogVGRCcmVhZGNydW1iQ29tcG9uZW50W10gPSBuZXcgQXJyYXkoKTtcblxuICAvKipcbiAgICogU2V0cyB0aGUgaWNvbiB1cmwgc2hvd24gYmV0d2VlbiBicmVhZGNydW1icy4gRGVmYXVsdHMgdG8gcmlnaHQgY2hldnJvbi5cbiAgICovXG4gIEBJbnB1dCgnc2VwYXJhdG9ySWNvbicpIHNlcGFyYXRvckljb246IHN0cmluZyA9ICduYXZpZ2F0ZV9uZXh0JztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3Jlc2l6ZVN1YnNjcmlwdGlvbiA9IG1lcmdlKFxuICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMCksXG4gICAgICApLFxuICAgICAgdGhpcy5fd2lkdGhTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICApLFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5fcmVzaXppbmcpIHtcbiAgICAgICAgdGhpcy5fcmVzaXppbmcgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXlXaWR0aEF2YWlsYWJsZUNydW1icygpO1xuICAgICAgICAgIHRoaXMuX3Jlc2l6aW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnRSZWYgJiYgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLl93aWR0aFN1YmplY3QubmV4dCh0aGlzLm5hdGl2ZUVsZW1lbnRXaWR0aCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q3J1bWJJY29ucygpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcmVzaXplU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKlxuICAqIEN1cnJlbnQgd2lkdGggb2YgdGhlIGVsZW1lbnQgY29udGFpbmVyXG4gICovXG4gIGdldCBuYXRpdmVFbGVtZW50V2lkdGgoKTogbnVtYmVyIHtcbiAgICBsZXQgZWxlbWVudDogSFRNTEVsZW1lbnQgPSAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgLy8gTmVlZCB0byB0YWtlIGludG8gYWNjb3VudCBib3JkZXIsIG1hcmdpbiBhbmQgcGFkZGluZyB0aGF0IG1pZ2h0IGJlIGFyb3VuZCBhbGwgdGhlIGNydW1ic1xuICAgIGxldCBzdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgIGxldCBib3JkZXJMZWZ0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5ib3JkZXJMZWZ0LCAxMCk7XG4gICAgbGV0IGJvcmRlclJpZ2h0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5ib3JkZXJSaWdodCwgMTApO1xuICAgIGxldCBtYXJnaW5MZWZ0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5tYXJnaW5MZWZ0LCAxMCk7XG4gICAgbGV0IG1hcmdpblJpZ2h0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5tYXJnaW5SaWdodCwgMTApO1xuICAgIGxldCBwYWRkaW5nTGVmdDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUucGFkZGluZ0xlZnQsIDEwKTtcbiAgICBsZXQgcGFkZGluZ1JpZ2h0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5wYWRkaW5nUmlnaHQsIDEwKTtcblxuICAgIHJldHVybiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC0gYm9yZGVyTGVmdCAtIGJvcmRlclJpZ2h0IC0gbWFyZ2luTGVmdCAtIG1hcmdpblJpZ2h0IC0gcGFkZGluZ0xlZnQgLSBwYWRkaW5nUmlnaHQ7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRvdGFsIGNvdW50IG9mIGluZGl2aWR1YWwgYnJlYWRjcnVtYnNcbiAgICovXG4gIGdldCBjb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9icmVhZGNydW1icyA/IHRoaXMuX2JyZWFkY3J1bWJzLmxlbmd0aCA6IDA7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBjcnVtYiBpY29uIHNlcGFyYXRvcnNcbiAgICovXG4gIHByaXZhdGUgc2V0Q3J1bWJJY29ucygpOiB2b2lkIHtcbiAgICBsZXQgYnJlYWRjcnVtYkFycmF5OiBUZEJyZWFkY3J1bWJDb21wb25lbnRbXSA9IHRoaXMuX2JyZWFkY3J1bWJzLnRvQXJyYXkoKTtcbiAgICBpZiAoYnJlYWRjcnVtYkFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIGRvbid0IHNob3cgdGhlIGljb24gb24gdGhlIGxhc3QgYnJlYWRjcnVtYlxuICAgICAgYnJlYWRjcnVtYkFycmF5W2JyZWFkY3J1bWJBcnJheS5sZW5ndGggLSAxXS5fZGlzcGxheUljb24gPSBmYWxzZTtcbiAgICB9XG4gICAgYnJlYWRjcnVtYkFycmF5LmZvckVhY2goKGJyZWFkY3J1bWI6IFRkQnJlYWRjcnVtYkNvbXBvbmVudCkgPT4ge1xuICAgICAgYnJlYWRjcnVtYi5zZXBhcmF0b3JJY29uID0gdGhpcy5zZXBhcmF0b3JJY29uO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBkaXNwbGF5V2lkdGhBdmFpbGFibGVDcnVtYnMoKTogdm9pZCB7XG4gICAgbGV0IGN1clRvdENydW1iV2lkdGg6IG51bWJlciA9IDA7XG4gICAgbGV0IGNydW1ic0FycmF5OiBUZEJyZWFkY3J1bWJDb21wb25lbnRbXSA9IHRoaXMuX2JyZWFkY3J1bWJzLnRvQXJyYXkoKTtcbiAgICAvLyBjYWxjdWxhdGUgdGhlIGN1cnJlbnQgd2lkdGggb2YgdGhlIHNob3duIGJyZWFkY3J1bWJzXG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gdGhpcy5oaWRkZW5CcmVhZGNydW1icy5sZW5ndGg7IGkgPCBjcnVtYnNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY3VyVG90Q3J1bWJXaWR0aCArPSBjcnVtYnNBcnJheVtpXS53aWR0aDtcbiAgICB9XG4gICAgLy8gaGlkZSB0aGUgZmlyc3QgYnJlYWQgY3J1bWIgaWYgd2luZG93IHNpemUgaXMgc21hbGxlciB0aGFuIGFsbCB0aGUgY3J1bWIgc2l6ZXNcbiAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50V2lkdGggPCBjdXJUb3RDcnVtYldpZHRoKSB7XG4gICAgICBjcnVtYnNBcnJheVt0aGlzLmhpZGRlbkJyZWFkY3J1bWJzLmxlbmd0aF0uZGlzcGxheUNydW1iID0gZmFsc2U7XG4gICAgICB0aGlzLmhpZGRlbkJyZWFkY3J1bWJzLnB1c2goY3J1bWJzQXJyYXlbdGhpcy5oaWRkZW5CcmVhZGNydW1icy5sZW5ndGhdKTtcbiAgICAgIHRoaXMuZGlzcGxheVdpZHRoQXZhaWxhYmxlQ3J1bWJzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGxvb3Agb3ZlciBhbGwgdGhlIGhpZGRlbiBjcnVtYnMgYW5kIHNlZSBpZiBhZGRpbmcgdGhlbSBiYWNrIGluIHdpbGxcbiAgICAgIC8vIGZpdCBpbiB0aGUgY3VycmVudCB3aW5kb3cgc2l6ZVxuICAgICAgbGV0IHRvdGFsSGlkZGVuOiBudW1iZXIgPSB0aGlzLmhpZGRlbkJyZWFkY3J1bWJzLmxlbmd0aCAtIDE7XG4gICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSB0b3RhbEhpZGRlbjsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgbGV0IGhpZGRlbkNydW1iV2lkdGg6IG51bWJlciA9IGNydW1ic0FycmF5W2ldLndpZHRoO1xuICAgICAgICBpZiAoKGN1clRvdENydW1iV2lkdGggKyBoaWRkZW5DcnVtYldpZHRoKSA8IHRoaXMubmF0aXZlRWxlbWVudFdpZHRoKSB7XG4gICAgICAgICAgY3J1bWJzQXJyYXlbaV0uZGlzcGxheUNydW1iID0gdHJ1ZTtcbiAgICAgICAgICBjcnVtYnNBcnJheVtpICsgMV0uX2Rpc3BsYXlJY29uID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmhpZGRlbkJyZWFkY3J1bWJzLnBvcCgpO1xuICAgICAgICAgIC8vIHJlY2FsY3VsYXRlIHRoZSB0b3RhbCB3aWR0aCBiYXNlZCBvbiBhZGRpbmcgYmFjayBpbiBhIGNydW1iXG4gICAgICAgICAgbGV0IG5ld1RvdENydW1iV2lkdGg6IG51bWJlciA9IDA7XG4gICAgICAgICAgZm9yIChsZXQgajogbnVtYmVyID0gdGhpcy5oaWRkZW5CcmVhZGNydW1icy5sZW5ndGg7IGogPCBjcnVtYnNBcnJheS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbmV3VG90Q3J1bWJXaWR0aCArPSBjcnVtYnNBcnJheVtqXS53aWR0aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3VyVG90Q3J1bWJXaWR0aCA9IG5ld1RvdENydW1iV2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gdG90YWxIaWRkZW4pIHtcbiAgICAgICAgICAvLyBuZWVkIHRvIGJyZWFrIG91dCBvZiBsb29wIGhlcmUgYmVjYXVzZSB0aGUgZmlyc3QgaW4gdGhlIGhpZGRlblxuICAgICAgICAgIC8vIGxpc3QgY2FuJ3QgZml0IGluIGN1cnJlbnQgd2luZG93IHNpemVcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcblxuaW1wb3J0IHsgVGRCcmVhZGNydW1ic0NvbXBvbmVudCB9IGZyb20gJy4vYnJlYWRjcnVtYnMuY29tcG9uZW50JztcbmltcG9ydCB7IFRkQnJlYWRjcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGRCcmVhZGNydW1ic0NvbXBvbmVudCxcbiAgICBUZEJyZWFkY3J1bWJDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUZEJyZWFkY3J1bWJzQ29tcG9uZW50LFxuICAgIFRkQnJlYWRjcnVtYkNvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRCcmVhZGNydW1ic01vZHVsZSB7XG5cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLE1BT2EsbUJBQW1CO0lBRTlCOztLQUVDOzs7WUFURixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBRXZCLDhFQUF5Qzs7YUFDMUM7Ozs7Ozs7OztBQ05ELE1BZ0JhLHNCQUFzQjs7O1lBWGxDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osbUJBQW1CO2lCQUNwQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsbUJBQW1CO2lCQUNwQjthQUNGOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZELE1BZ0JhLHFCQUFxQjs7Ozs7O0lBc0NoQyxZQUFvQixXQUF1QixFQUN2QixTQUFvQixFQUNwQixrQkFBcUM7UUFGckMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBdENqRCxrQkFB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