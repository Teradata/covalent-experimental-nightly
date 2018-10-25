import { Component, NgModule, ElementRef, Renderer2, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef, ContentChildren, Input, ViewChild, TemplateRef, ViewContainerRef, forwardRef, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, Subject, fromEvent, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { MatIconModule } from '@angular/material/icon';
import { TemplatePortal, PortalModule } from '@angular/cdk/portal';
import { mixinDisabled, mixinControlValueAccessor, mixinDisableRipple } from '@covalent/core/common';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { MatTabsModule } from '@angular/material/tabs';

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
class TdTabOptionBase {
    /**
     * @param {?} _viewContainerRef
     * @param {?} _changeDetectorRef
     */
    constructor(_viewContainerRef, _changeDetectorRef) {
        this._viewContainerRef = _viewContainerRef;
        this._changeDetectorRef = _changeDetectorRef;
    }
}
/* tslint:disable-next-line */
/** @type {?} */
const _TdTabOptionMixinBase = mixinDisabled(TdTabOptionBase);
class TdTabOptionComponent extends _TdTabOptionMixinBase {
    /**
     * @param {?} _viewContainerRef
     * @param {?} _changeDetectorRef
     */
    constructor(_viewContainerRef, _changeDetectorRef) {
        super(_viewContainerRef, _changeDetectorRef);
    }
    /**
     * @return {?}
     */
    get content() {
        return this._contentPortal;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._contentPortal = new TemplatePortal(this._content, this._viewContainerRef);
    }
}
TdTabOptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-tab-option',
                template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                /* tslint:disable-next-line */
                inputs: ['disabled'],
                styles: [""]
            }] }
];
/** @nocollapse */
TdTabOptionComponent.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ChangeDetectorRef }
];
TdTabOptionComponent.propDecorators = {
    _content: [{ type: ViewChild, args: [TemplateRef,] }],
    value: [{ type: Input, args: ['value',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdTabSelectBase {
    /**
     * @param {?} _changeDetectorRef
     */
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
}
/* tslint:disable-next-line */
/** @type {?} */
const _TdTabSelectMixinBase = mixinControlValueAccessor(mixinDisabled(mixinDisableRipple(TdTabSelectBase)));
class TdTabSelectComponent extends _TdTabSelectMixinBase {
    /**
     * @param {?} _changeDetectorRef
     */
    constructor(_changeDetectorRef) {
        super(_changeDetectorRef);
        this._subs = [];
        this._values = [];
        this._selectedIndex = 0;
        this._stretchTabs = false;
        /**
         * Event that emits whenever the raw value of the select changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         */
        this.valueChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get selectedIndex() {
        return this._selectedIndex;
    }
    /**
     * @return {?}
     */
    get tabOptions() {
        return this._tabOptions ? this._tabOptions.toArray() : undefined;
    }
    /**
     * Makes the tabs stretch to fit the parent container.
     * @param {?} stretchTabs
     * @return {?}
     */
    set stretchTabs(stretchTabs) {
        this._stretchTabs = coerceBooleanProperty(stretchTabs);
    }
    /**
     * @return {?}
     */
    get stretchTabs() {
        return this._stretchTabs;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // subscribe to check if value changes and update the selectedIndex internally.
        this._subs.push(this.valueChanges.subscribe((value) => {
            this._setValue(value);
        }));
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // subscribe to listen to any tab changes.
        this._refreshValues();
        this._subs.push(this._tabOptions.changes.subscribe(() => {
            this._refreshValues();
        }));
        // initialize value
        Promise.resolve().then(() => {
            this._setValue(this.value);
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._subs && this._subs.length) {
            this._subs.forEach((sub) => {
                sub.unsubscribe();
            });
        }
    }
    /**
     * Method executed when user selects a different tab
     * This updates the new selectedIndex and infers what value should be mapped to.
     * @param {?} selectedIndex
     * @return {?}
     */
    selectedIndexChange(selectedIndex) {
        this._selectedIndex = selectedIndex;
        /** @type {?} */
        let value = this._values[selectedIndex];
        this.value = value;
        this.valueChange.emit(value);
        this.onChange(value);
    }
    /**
     * Refresh the values array whenever the number of tabs gets updated
     * @return {?}
     */
    _refreshValues() {
        this._values = this.tabOptions.map((tabOption) => {
            return tabOption.value;
        });
    }
    /**
     * Try to set value depending if its part of our options
     * else set the value of the first tab.
     * @param {?} value
     * @return {?}
     */
    _setValue(value) {
        /** @type {?} */
        let index = this._values.indexOf(value);
        if (index > -1) {
            this._selectedIndex = index;
        }
        else {
            this.value = this._values.length ? this._values[0] : undefined;
            this._selectedIndex = 0;
        }
        this._changeDetectorRef.markForCheck();
    }
}
TdTabSelectComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => TdTabSelectComponent),
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
TdTabSelectComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
TdTabSelectComponent.propDecorators = {
    _tabOptions: [{ type: ContentChildren, args: [TdTabOptionComponent,] }],
    stretchTabs: [{ type: Input, args: ['stretchTabs',] }],
    color: [{ type: Input, args: ['color',] }],
    backgroundColor: [{ type: Input, args: ['backgroundColor',] }],
    valueChange: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class CovalentTabSelectModule {
}
CovalentTabSelectModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    TdTabSelectComponent,
                    TdTabOptionComponent,
                ],
                // directives, components, and pipes owned by this NgModule
                imports: [
                    /** Angular Modules */
                    CommonModule,
                    FormsModule,
                    /** Material Modules */
                    PortalModule,
                    MatTabsModule,
                ],
                // modules needed to run this module
                exports: [
                    TdTabSelectComponent,
                    TdTabOptionComponent,
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

export { CovalentRenameMeModule, TdRenameMeComponent, CovalentBreadcrumbsModule, TdBreadcrumbsComponent, CovalentTabSelectModule, TdTabSelectBase, _TdTabSelectMixinBase, TdTabSelectComponent, TdTabOptionBase, _TdTabOptionMixinBase, TdTabOptionComponent, TdBreadcrumbComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtZXhwZXJpbWVudGFsLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL3RlbXBsYXRlLXJlbmFtZS1tZS1leHBlcmltZW50LW1vZHVsZS9yZW5hbWUtbWUuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL3RlbXBsYXRlLXJlbmFtZS1tZS1leHBlcmltZW50LW1vZHVsZS9yZW5hbWUtbWUubW9kdWxlLnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLm1vZHVsZS50cyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC90YWItc2VsZWN0L3RhYi1vcHRpb24uY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL3RhYi1zZWxlY3QvdGFiLXNlbGVjdC5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvdGFiLXNlbGVjdC90YWItc2VsZWN0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtcmVuYW1lTWUnLFxuICBzdHlsZVVybHM6IFsnLi9yZW5hbWUtbWUuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlbmFtZS1tZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkUmVuYW1lTWVDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIHN0dWJcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgVGRSZW5hbWVNZUNvbXBvbmVudCB9IGZyb20gJy4vcmVuYW1lLW1lLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRkUmVuYW1lTWVDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUZFJlbmFtZU1lQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudFJlbmFtZU1lTW9kdWxlIHtcblxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIEhvc3RCaW5kaW5nLFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1icmVhZGNydW1iLCBhW3RkLWJyZWFkY3J1bWJdJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZEJyZWFkY3J1bWJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICBwcml2YXRlIF9kaXNwbGF5Q3J1bWI6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF93aWR0aDogbnVtYmVyID0gMDtcbiAgLy8gU2V0cyB0aGUgaWNvbiB1cmwgc2hvd24gYmV0d2VlbiBicmVhZGNydW1icy4gRGVmYXVsdHMgdG8gcmlnaHQgY2hldnJvblxuICBzZXBhcmF0b3JJY29uOiBzdHJpbmcgPSAnbmF2aWdhdGVfbmV4dCc7XG4gIC8vIFNob3VsZCBzaG93IHRoZSByaWdodCBjaGV2cm9uIG9yIG5vdCBiZWZvcmUgdGhlIGxhYmVsXG4gIF9kaXNwbGF5SWNvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgZ2V0IGRpc3BsYXlDcnVtYigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheUNydW1iO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZGlzcGxheSB0aGUgY3J1bWIgb3Igbm90XG4gICAqL1xuICBzZXQgZGlzcGxheUNydW1iKHNob3VsZERpc3BsYXk6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNwbGF5Q3J1bWIgPSBzaG91bGREaXNwbGF5O1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdpZHRoIG9mIHRoZSBET00gZWxlbWVudCBvZiB0aGUgY3J1bWJcbiAgICovXG4gIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBkaXNwbGF5IHN0eWxlIG9mIHRoZSBjcnVtYlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JylcbiAgZ2V0IGRpc3BsYXlCaW5kaW5nKCk6IHN0cmluZyB7XG4gICAgLy8gU2V0IHRoZSBkaXNwbGF5IHRvIG5vbmUgb24gdGhlIGNvbXBvbmVudCwganVzdCBpbiBjYXNlIHRoZSBlbmQgdXNlciBpcyBoaWRpbmdcbiAgICAvLyBhbmQgc2hvd2luZyB0aGVtIGluc3RlYWQgb2YgdGhlIGNvbXBvbmVudCBkb2luZyBpdHNlbGYgZm9yIHJlYXNvbnMgbGlrZSByZXNwb25zaXZlXG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlDcnVtYiA/IHVuZGVmaW5lZCA6ICdub25lJztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21hdC1idXR0b24nKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAvLyBzZXQgdGhlIHdpZHRoIGZyb20gdGhlIGFjdHVhbCByZW5kZXJlZCBET00gZWxlbWVudFxuICAgIHRoaXMuX3dpZHRoID0gKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgY2xpY2sgcHJvcGFnYXRpb24gd2hlbiBjbGlja2luZyBvbiBpY29uXG4gICAqL1xuICBfaGFuZGxlSWNvbkNsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBEb0NoZWNrLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBTdWJzY3JpcHRpb24sXG4gIFN1YmplY3QsXG4gIGZyb21FdmVudCxcbiAgbWVyZ2UsXG59IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGVib3VuY2VUaW1lLFxuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBUZEJyZWFkY3J1bWJDb21wb25lbnQgfSBmcm9tICcuL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1icmVhZGNydW1icycsXG4gIHN0eWxlVXJsczogWycuL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9icmVhZGNydW1icy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZEJyZWFkY3J1bWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBEb0NoZWNrLCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX3Jlc2l6ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIF93aWR0aFN1YmplY3Q6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcbiAgcHJpdmF0ZSBfcmVzaXppbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvLyBhbGwgdGhlIHN1YiBjb21wb25lbnRzLCB3aGljaCBhcmUgdGhlIGluZGl2aWR1YWwgYnJlYWRjcnVtYnNcbiAgQENvbnRlbnRDaGlsZHJlbihUZEJyZWFkY3J1bWJDb21wb25lbnQpIF9icmVhZGNydW1iczogUXVlcnlMaXN0PFRkQnJlYWRjcnVtYkNvbXBvbmVudD47XG4gIC8vIHRoZSBsaXN0IG9mIGhpZGRlbiBicmVhZGNydW1icyBub3Qgc2hvd24gcmlnaHQgbm93IChyZXNwb25zaXZlKVxuICBoaWRkZW5CcmVhZGNydW1iczogVGRCcmVhZGNydW1iQ29tcG9uZW50W10gPSBuZXcgQXJyYXkoKTtcblxuICAvKipcbiAgICogU2V0cyB0aGUgaWNvbiB1cmwgc2hvd24gYmV0d2VlbiBicmVhZGNydW1icy4gRGVmYXVsdHMgdG8gcmlnaHQgY2hldnJvbi5cbiAgICovXG4gIEBJbnB1dCgnc2VwYXJhdG9ySWNvbicpIHNlcGFyYXRvckljb246IHN0cmluZyA9ICduYXZpZ2F0ZV9uZXh0JztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3Jlc2l6ZVN1YnNjcmlwdGlvbiA9IG1lcmdlKFxuICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMCksXG4gICAgICApLFxuICAgICAgdGhpcy5fd2lkdGhTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICApLFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5fcmVzaXppbmcpIHtcbiAgICAgICAgdGhpcy5fcmVzaXppbmcgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXlXaWR0aEF2YWlsYWJsZUNydW1icygpO1xuICAgICAgICAgIHRoaXMuX3Jlc2l6aW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnRSZWYgJiYgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLl93aWR0aFN1YmplY3QubmV4dCh0aGlzLm5hdGl2ZUVsZW1lbnRXaWR0aCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q3J1bWJJY29ucygpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcmVzaXplU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKlxuICAqIEN1cnJlbnQgd2lkdGggb2YgdGhlIGVsZW1lbnQgY29udGFpbmVyXG4gICovXG4gIGdldCBuYXRpdmVFbGVtZW50V2lkdGgoKTogbnVtYmVyIHtcbiAgICBsZXQgZWxlbWVudDogSFRNTEVsZW1lbnQgPSAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgLy8gTmVlZCB0byB0YWtlIGludG8gYWNjb3VudCBib3JkZXIsIG1hcmdpbiBhbmQgcGFkZGluZyB0aGF0IG1pZ2h0IGJlIGFyb3VuZCBhbGwgdGhlIGNydW1ic1xuICAgIGxldCBzdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgIGxldCBib3JkZXJMZWZ0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5ib3JkZXJMZWZ0LCAxMCk7XG4gICAgbGV0IGJvcmRlclJpZ2h0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5ib3JkZXJSaWdodCwgMTApO1xuICAgIGxldCBtYXJnaW5MZWZ0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5tYXJnaW5MZWZ0LCAxMCk7XG4gICAgbGV0IG1hcmdpblJpZ2h0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5tYXJnaW5SaWdodCwgMTApO1xuICAgIGxldCBwYWRkaW5nTGVmdDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUucGFkZGluZ0xlZnQsIDEwKTtcbiAgICBsZXQgcGFkZGluZ1JpZ2h0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5wYWRkaW5nUmlnaHQsIDEwKTtcblxuICAgIHJldHVybiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC0gYm9yZGVyTGVmdCAtIGJvcmRlclJpZ2h0IC0gbWFyZ2luTGVmdCAtIG1hcmdpblJpZ2h0IC0gcGFkZGluZ0xlZnQgLSBwYWRkaW5nUmlnaHQ7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRvdGFsIGNvdW50IG9mIGluZGl2aWR1YWwgYnJlYWRjcnVtYnNcbiAgICovXG4gIGdldCBjb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9icmVhZGNydW1icyA/IHRoaXMuX2JyZWFkY3J1bWJzLmxlbmd0aCA6IDA7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBjcnVtYiBpY29uIHNlcGFyYXRvcnNcbiAgICovXG4gIHByaXZhdGUgc2V0Q3J1bWJJY29ucygpOiB2b2lkIHtcbiAgICBsZXQgYnJlYWRjcnVtYkFycmF5OiBUZEJyZWFkY3J1bWJDb21wb25lbnRbXSA9IHRoaXMuX2JyZWFkY3J1bWJzLnRvQXJyYXkoKTtcbiAgICBpZiAoYnJlYWRjcnVtYkFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIGRvbid0IHNob3cgdGhlIGljb24gb24gdGhlIGxhc3QgYnJlYWRjcnVtYlxuICAgICAgYnJlYWRjcnVtYkFycmF5W2JyZWFkY3J1bWJBcnJheS5sZW5ndGggLSAxXS5fZGlzcGxheUljb24gPSBmYWxzZTtcbiAgICB9XG4gICAgYnJlYWRjcnVtYkFycmF5LmZvckVhY2goKGJyZWFkY3J1bWI6IFRkQnJlYWRjcnVtYkNvbXBvbmVudCkgPT4ge1xuICAgICAgYnJlYWRjcnVtYi5zZXBhcmF0b3JJY29uID0gdGhpcy5zZXBhcmF0b3JJY29uO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBkaXNwbGF5V2lkdGhBdmFpbGFibGVDcnVtYnMoKTogdm9pZCB7XG4gICAgbGV0IGN1clRvdENydW1iV2lkdGg6IG51bWJlciA9IDA7XG4gICAgbGV0IGNydW1ic0FycmF5OiBUZEJyZWFkY3J1bWJDb21wb25lbnRbXSA9IHRoaXMuX2JyZWFkY3J1bWJzLnRvQXJyYXkoKTtcbiAgICAvLyBjYWxjdWxhdGUgdGhlIGN1cnJlbnQgd2lkdGggb2YgdGhlIHNob3duIGJyZWFkY3J1bWJzXG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gdGhpcy5oaWRkZW5CcmVhZGNydW1icy5sZW5ndGg7IGkgPCBjcnVtYnNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY3VyVG90Q3J1bWJXaWR0aCArPSBjcnVtYnNBcnJheVtpXS53aWR0aDtcbiAgICB9XG4gICAgLy8gaGlkZSB0aGUgZmlyc3QgYnJlYWQgY3J1bWIgaWYgd2luZG93IHNpemUgaXMgc21hbGxlciB0aGFuIGFsbCB0aGUgY3J1bWIgc2l6ZXNcbiAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50V2lkdGggPCBjdXJUb3RDcnVtYldpZHRoKSB7XG4gICAgICBjcnVtYnNBcnJheVt0aGlzLmhpZGRlbkJyZWFkY3J1bWJzLmxlbmd0aF0uZGlzcGxheUNydW1iID0gZmFsc2U7XG4gICAgICB0aGlzLmhpZGRlbkJyZWFkY3J1bWJzLnB1c2goY3J1bWJzQXJyYXlbdGhpcy5oaWRkZW5CcmVhZGNydW1icy5sZW5ndGhdKTtcbiAgICAgIHRoaXMuZGlzcGxheVdpZHRoQXZhaWxhYmxlQ3J1bWJzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGxvb3Agb3ZlciBhbGwgdGhlIGhpZGRlbiBjcnVtYnMgYW5kIHNlZSBpZiBhZGRpbmcgdGhlbSBiYWNrIGluIHdpbGxcbiAgICAgIC8vIGZpdCBpbiB0aGUgY3VycmVudCB3aW5kb3cgc2l6ZVxuICAgICAgbGV0IHRvdGFsSGlkZGVuOiBudW1iZXIgPSB0aGlzLmhpZGRlbkJyZWFkY3J1bWJzLmxlbmd0aCAtIDE7XG4gICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSB0b3RhbEhpZGRlbjsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgbGV0IGhpZGRlbkNydW1iV2lkdGg6IG51bWJlciA9IGNydW1ic0FycmF5W2ldLndpZHRoO1xuICAgICAgICBpZiAoKGN1clRvdENydW1iV2lkdGggKyBoaWRkZW5DcnVtYldpZHRoKSA8IHRoaXMubmF0aXZlRWxlbWVudFdpZHRoKSB7XG4gICAgICAgICAgY3J1bWJzQXJyYXlbaV0uZGlzcGxheUNydW1iID0gdHJ1ZTtcbiAgICAgICAgICBjcnVtYnNBcnJheVtpICsgMV0uX2Rpc3BsYXlJY29uID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmhpZGRlbkJyZWFkY3J1bWJzLnBvcCgpO1xuICAgICAgICAgIC8vIHJlY2FsY3VsYXRlIHRoZSB0b3RhbCB3aWR0aCBiYXNlZCBvbiBhZGRpbmcgYmFjayBpbiBhIGNydW1iXG4gICAgICAgICAgbGV0IG5ld1RvdENydW1iV2lkdGg6IG51bWJlciA9IDA7XG4gICAgICAgICAgZm9yIChsZXQgajogbnVtYmVyID0gdGhpcy5oaWRkZW5CcmVhZGNydW1icy5sZW5ndGg7IGogPCBjcnVtYnNBcnJheS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbmV3VG90Q3J1bWJXaWR0aCArPSBjcnVtYnNBcnJheVtqXS53aWR0aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3VyVG90Q3J1bWJXaWR0aCA9IG5ld1RvdENydW1iV2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gdG90YWxIaWRkZW4pIHtcbiAgICAgICAgICAvLyBuZWVkIHRvIGJyZWFrIG91dCBvZiBsb29wIGhlcmUgYmVjYXVzZSB0aGUgZmlyc3QgaW4gdGhlIGhpZGRlblxuICAgICAgICAgIC8vIGxpc3QgY2FuJ3QgZml0IGluIGN1cnJlbnQgd2luZG93IHNpemVcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcblxuaW1wb3J0IHsgVGRCcmVhZGNydW1ic0NvbXBvbmVudCB9IGZyb20gJy4vYnJlYWRjcnVtYnMuY29tcG9uZW50JztcbmltcG9ydCB7IFRkQnJlYWRjcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGRCcmVhZGNydW1ic0NvbXBvbmVudCxcbiAgICBUZEJyZWFkY3J1bWJDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUZEJyZWFkY3J1bWJzQ29tcG9uZW50LFxuICAgIFRkQnJlYWRjcnVtYkNvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRCcmVhZGNydW1ic01vZHVsZSB7XG5cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVmlld0NoaWxkLFxuICBUZW1wbGF0ZVJlZixcbiAgT25Jbml0LFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IG1peGluRGlzYWJsZWQsIElDYW5EaXNhYmxlIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuZXhwb3J0IGNsYXNzIFRkVGFiT3B0aW9uQmFzZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgICAgcHVibGljIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG59XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGNvbnN0IF9UZFRhYk9wdGlvbk1peGluQmFzZSA9IG1peGluRGlzYWJsZWQoVGRUYWJPcHRpb25CYXNlKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtdGFiLW9wdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWItb3B0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFiLW9wdGlvbi5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIGlucHV0czogWydkaXNhYmxlZCddLFxufSlcbmV4cG9ydCBjbGFzcyBUZFRhYk9wdGlvbkNvbXBvbmVudCBleHRlbmRzIF9UZFRhYk9wdGlvbk1peGluQmFzZSBpbXBsZW1lbnRzIElDYW5EaXNhYmxlLCBPbkluaXQge1xuXG4gIHByaXZhdGUgX2NvbnRlbnRQb3J0YWw6IFRlbXBsYXRlUG9ydGFsPGFueT47XG4gIGdldCBjb250ZW50KCk6IFRlbXBsYXRlUG9ydGFsPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50UG9ydGFsO1xuICB9XG5cbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgX2NvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIFZhbHVlIHRvIHdoaWNoIHRoZSBvcHRpb24gd2lsbCBiZSBiaW5kZWQgdG8uXG4gICAqL1xuICBASW5wdXQoJ3ZhbHVlJykgdmFsdWU6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgICAgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKF92aWV3Q29udGFpbmVyUmVmLCBfY2hhbmdlRGV0ZWN0b3JSZWYpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fY29udGVudFBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLl9jb250ZW50LCB0aGlzLl92aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIGZvcndhcmRSZWYsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5pbXBvcnQgeyBJQ2FuRGlzYWJsZSxcbiAgICAgICAgICBtaXhpbkRpc2FibGVkLFxuICAgICAgICAgIElDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgICBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICAgICAgICAgIElDYW5EaXNhYmxlUmlwcGxlLFxuICAgICAgICAgIG1peGluRGlzYWJsZVJpcHBsZSxcbn0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFRkVGFiT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi90YWItb3B0aW9uLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjbGFzcyBUZFRhYlNlbGVjdEJhc2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cbn1cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkVGFiU2VsZWN0TWl4aW5CYXNlID0gbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvcihtaXhpbkRpc2FibGVkKG1peGluRGlzYWJsZVJpcHBsZShUZFRhYlNlbGVjdEJhc2UpKSk7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkVGFiU2VsZWN0Q29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfV0sXG4gIHNlbGVjdG9yOiAndGQtdGFiLXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWItc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFiLXNlbGVjdC5jb21wb25lbnQuc2NzcyddLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgaW5wdXRzOiBbJ3ZhbHVlJywgJ2Rpc2FibGVkJywgJ2Rpc2FibGVSaXBwbGUnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRUYWJTZWxlY3RDb21wb25lbnQgZXh0ZW5kcyBfVGRUYWJTZWxlY3RNaXhpbkJhc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBsZW1lbnRzIElDb250cm9sVmFsdWVBY2Nlc3NvciwgSUNhbkRpc2FibGUsIElDYW5EaXNhYmxlUmlwcGxlLCBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBwcml2YXRlIF92YWx1ZXM6IGFueVtdID0gW107XG4gIHByaXZhdGUgX3NlbGVjdGVkSW5kZXg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX3N0cmV0Y2hUYWJzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgZ2V0IHNlbGVjdGVkSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGFsbCB0YWIgb3B0aW9uIGNoaWxkcmVuXG4gICAqL1xuICBAQ29udGVudENoaWxkcmVuKFRkVGFiT3B0aW9uQ29tcG9uZW50KSByZWFkb25seSBfdGFiT3B0aW9uczogUXVlcnlMaXN0PFRkVGFiT3B0aW9uQ29tcG9uZW50PjtcblxuICBnZXQgdGFiT3B0aW9ucygpOiBUZFRhYk9wdGlvbkNvbXBvbmVudFtdIHtcbiAgICByZXR1cm4gdGhpcy5fdGFiT3B0aW9ucyA/IHRoaXMuX3RhYk9wdGlvbnMudG9BcnJheSgpIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2VzIHRoZSB0YWJzIHN0cmV0Y2ggdG8gZml0IHRoZSBwYXJlbnQgY29udGFpbmVyLlxuICAgKi9cbiAgQElucHV0KCdzdHJldGNoVGFicycpXG4gIHNldCBzdHJldGNoVGFicyhzdHJldGNoVGFiczogYm9vbGVhbikge1xuICAgIHRoaXMuX3N0cmV0Y2hUYWJzID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHN0cmV0Y2hUYWJzKTtcbiAgfVxuICBnZXQgc3RyZXRjaFRhYnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0cmV0Y2hUYWJzO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbG9yIG9mIHRoZSB0YWIgZ3JvdXAuXG4gICAqL1xuICBASW5wdXQoJ2NvbG9yJykgY29sb3I6IFRoZW1lUGFsZXR0ZTtcblxuICAvKipcbiAgICogQmFja2dyb3VuZCBjb2xvciBvZiB0aGUgdGFiIGdyb3VwLlxuICAgKi9cbiAgQElucHV0KCdiYWNrZ3JvdW5kQ29sb3InKSBiYWNrZ3JvdW5kQ29sb3I6IFRoZW1lUGFsZXR0ZTtcblxuICAvKipcbiAgICogRXZlbnQgdGhhdCBlbWl0cyB3aGVuZXZlciB0aGUgcmF3IHZhbHVlIG9mIHRoZSBzZWxlY3QgY2hhbmdlcy4gVGhpcyBpcyBoZXJlIHByaW1hcmlseVxuICAgKiB0byBmYWNpbGl0YXRlIHRoZSB0d28td2F5IGJpbmRpbmcgZm9yIHRoZSBgdmFsdWVgIGlucHV0LlxuICAgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihfY2hhbmdlRGV0ZWN0b3JSZWYpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gc3Vic2NyaWJlIHRvIGNoZWNrIGlmIHZhbHVlIGNoYW5nZXMgYW5kIHVwZGF0ZSB0aGUgc2VsZWN0ZWRJbmRleCBpbnRlcm5hbGx5LlxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodmFsdWU6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLl9zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIC8vIHN1YnNjcmliZSB0byBsaXN0ZW4gdG8gYW55IHRhYiBjaGFuZ2VzLlxuICAgIHRoaXMuX3JlZnJlc2hWYWx1ZXMoKTtcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl90YWJPcHRpb25zLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fcmVmcmVzaFZhbHVlcygpO1xuICAgICAgfSksXG4gICAgKTtcbiAgICAvLyBpbml0aWFsaXplIHZhbHVlXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl9zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9zdWJzICYmIHRoaXMuX3N1YnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9zdWJzLmZvckVhY2goKHN1YjogU3Vic2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCBleGVjdXRlZCB3aGVuIHVzZXIgc2VsZWN0cyBhIGRpZmZlcmVudCB0YWJcbiAgICogVGhpcyB1cGRhdGVzIHRoZSBuZXcgc2VsZWN0ZWRJbmRleCBhbmQgaW5mZXJzIHdoYXQgdmFsdWUgc2hvdWxkIGJlIG1hcHBlZCB0by5cbiAgICovXG4gIHNlbGVjdGVkSW5kZXhDaGFuZ2Uoc2VsZWN0ZWRJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IHNlbGVjdGVkSW5kZXg7XG4gICAgbGV0IHZhbHVlOiBhbnkgPSB0aGlzLl92YWx1ZXNbc2VsZWN0ZWRJbmRleF07XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgdmFsdWVzIGFycmF5IHdoZW5ldmVyIHRoZSBudW1iZXIgb2YgdGFicyBnZXRzIHVwZGF0ZWRcbiAgICovXG4gIHByaXZhdGUgX3JlZnJlc2hWYWx1ZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fdmFsdWVzID0gdGhpcy50YWJPcHRpb25zLm1hcCgodGFiT3B0aW9uOiBUZFRhYk9wdGlvbkNvbXBvbmVudCkgPT4ge1xuICAgICAgcmV0dXJuIHRhYk9wdGlvbi52YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcnkgdG8gc2V0IHZhbHVlIGRlcGVuZGluZyBpZiBpdHMgcGFydCBvZiBvdXIgb3B0aW9uc1xuICAgKiBlbHNlIHNldCB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0IHRhYi5cbiAgICovXG4gIHByaXZhdGUgX3NldFZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgaW5kZXg6IG51bWJlciA9IHRoaXMuX3ZhbHVlcy5pbmRleE9mKHZhbHVlKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5fdmFsdWVzLmxlbmd0aCA/IHRoaXMuX3ZhbHVlc1swXSA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSAwO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgTWF0VGFic01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYnMnO1xuXG5pbXBvcnQgeyBUZFRhYlNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vdGFiLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRUYWJPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL3RhYi1vcHRpb24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGRUYWJTZWxlY3RDb21wb25lbnQsXG4gICAgVGRUYWJPcHRpb25Db21wb25lbnQsXG4gIF0sIC8vIGRpcmVjdGl2ZXMsIGNvbXBvbmVudHMsIGFuZCBwaXBlcyBvd25lZCBieSB0aGlzIE5nTW9kdWxlXG4gIGltcG9ydHM6IFtcbiAgICAvKiogQW5ndWxhciBNb2R1bGVzICovXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIC8qKiBNYXRlcmlhbCBNb2R1bGVzICovXG4gICAgUG9ydGFsTW9kdWxlLFxuICAgIE1hdFRhYnNNb2R1bGUsXG4gIF0sIC8vIG1vZHVsZXMgbmVlZGVkIHRvIHJ1biB0aGlzIG1vZHVsZVxuICBleHBvcnRzOiBbXG4gICAgVGRUYWJTZWxlY3RDb21wb25lbnQsXG4gICAgVGRUYWJPcHRpb25Db21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50VGFiU2VsZWN0TW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFPYSxtQkFBbUI7SUFFOUI7O0tBRUM7OztZQVRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFFdkIsOEVBQXlDOzthQUMxQzs7Ozs7Ozs7O0FDTkQsTUFnQmEsc0JBQXNCOzs7WUFYbEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWixtQkFBbUI7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxtQkFBbUI7aUJBQ3BCO2FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkQsTUFnQmEscUJBQXFCOzs7Ozs7SUFzQ2hDLFlBQW9CLFdBQXVCLEVBQ3ZC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