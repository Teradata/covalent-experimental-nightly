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
 * @suppress {checkTypes} checked by tsc
 */
class TdRenameMeComponent {
    constructor() {
        // stub
    }
}
TdRenameMeComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-renameMe',
                styles: [``],
                template: `<a href="https://github.com/Teradata/covalent"> Test Link </a>
`,
            },] },
];
/** @nocollapse */
TdRenameMeComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            },] },
];
/** @nocollapse */
CovalentRenameMeModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
     * @return {?}
     */
    get displayBinding() {
        return this._displayCrumb ? undefined : 'none';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // set the width from the actual rendered DOM element
        this._width = (/** @type {?} */ (this._elementRef.nativeElement)).getBoundingClientRect().width;
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
                styles: [`:host .td-breadcrumb{height:48px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host .td-breadcrumb ::ng-deep>*{margin:0 10px}:host mat-icon.material-icons.mat-icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}:host.mat-button{min-width:0;padding:0}`],
                template: `<span *ngIf="displayCrumb" class="td-breadcrumb">
  <ng-content></ng-content>
  <mat-icon *ngIf="_displayIcon"
            [style.cursor]="'default'"
            (click)="_handleIconClick($event)">
    {{separatorIcon}}
  </mat-icon>
</span>
`,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
TdBreadcrumbComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ChangeDetectorRef, },
];
TdBreadcrumbComponent.propDecorators = {
    "displayBinding": [{ type: HostBinding, args: ['style.display',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
    /**
     * @return {?}
     */
    get nativeElementWidth() {
        return (/** @type {?} */ (this._elementRef.nativeElement)).getBoundingClientRect().width;
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
        let /** @type {?} */ breadcrumbArray = this._breadcrumbs.toArray();
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
        let /** @type {?} */ curTotCrumbWidth = 0;
        let /** @type {?} */ crumbsArray = this._breadcrumbs.toArray();
        // calculate the current width of the shown breadcrumbs
        for (let /** @type {?} */ i = this.hiddenBreadcrumbs.length; i < crumbsArray.length; i++) {
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
            let /** @type {?} */ totalHidden = this.hiddenBreadcrumbs.length - 1;
            for (let /** @type {?} */ i = totalHidden; i >= 0; i--) {
                let /** @type {?} */ hiddenCrumbWidth = crumbsArray[i].width;
                if ((curTotCrumbWidth + hiddenCrumbWidth) < this.nativeElementWidth) {
                    crumbsArray[i].displayCrumb = true;
                    crumbsArray[i + 1]._displayIcon = true;
                    this.hiddenBreadcrumbs.pop();
                    // recalculate the total width based on adding back in a crumb
                    let /** @type {?} */ newTotCrumbWidth = 0;
                    for (let /** @type {?} */ j = this.hiddenBreadcrumbs.length; j < crumbsArray.length; j++) {
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
                styles: [`:host .td-breadcrumbs{white-space:nowrap}`],
                template: `<div class="td-breadcrumbs">
  <ng-content></ng-content>
</div>
`,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
TdBreadcrumbsComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: ChangeDetectorRef, },
];
TdBreadcrumbsComponent.propDecorators = {
    "_breadcrumbs": [{ type: ContentChildren, args: [TdBreadcrumbComponent,] },],
    "separatorIcon": [{ type: Input, args: ['separatorIcon',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            },] },
];
/** @nocollapse */
CovalentBreadcrumbsModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                template: `<ng-template>
  <ng-content></ng-content>
</ng-template>
`,
                styles: [``],
                changeDetection: ChangeDetectionStrategy.OnPush,
                /* tslint:disable-next-line */
                inputs: ['disabled'],
            },] },
];
/** @nocollapse */
TdTabOptionComponent.ctorParameters = () => [
    { type: ViewContainerRef, },
    { type: ChangeDetectorRef, },
];
TdTabOptionComponent.propDecorators = {
    "_content": [{ type: ViewChild, args: [TemplateRef,] },],
    "value": [{ type: Input, args: ['value',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        let /** @type {?} */ value = this._values[selectedIndex];
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
        let /** @type {?} */ index = this._values.indexOf(value);
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
                template: `<mat-tab-group [attr.mat-stretch-tabs]="stretchTabs ? true : undefined"
                [backgroundColor]="backgroundColor"
                [color]="color"
                [disableRipple]="disableRipple"
                [selectedIndex]="selectedIndex"
                (selectedIndexChange)="selectedIndexChange($event)">
  <ng-template let-tabOption
                ngFor
                [ngForOf]="tabOptions">
    <mat-tab [disabled]="tabOption.disabled || disabled">
      <ng-template matTabLabel>
        <ng-template [cdkPortalOutlet]="tabOption.content">
        </ng-template>
      </ng-template>
    </mat-tab>
  </ng-template>
</mat-tab-group>
`,
                styles: [``],
                /* tslint:disable-next-line */
                inputs: ['value', 'disabled', 'disableRipple'],
            },] },
];
/** @nocollapse */
TdTabSelectComponent.ctorParameters = () => [
    { type: ChangeDetectorRef, },
];
TdTabSelectComponent.propDecorators = {
    "_tabOptions": [{ type: ContentChildren, args: [TdTabOptionComponent,] },],
    "stretchTabs": [{ type: Input, args: ['stretchTabs',] },],
    "color": [{ type: Input, args: ['color',] },],
    "backgroundColor": [{ type: Input, args: ['backgroundColor',] },],
    "valueChange": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                    CommonModule,
                    FormsModule,
                    PortalModule,
                    MatTabsModule,
                ],
                // modules needed to run this module
                exports: [
                    TdTabSelectComponent,
                    TdTabOptionComponent,
                ],
            },] },
];
/** @nocollapse */
CovalentTabSelectModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { CovalentRenameMeModule, TdRenameMeComponent, CovalentBreadcrumbsModule, TdBreadcrumbsComponent, CovalentTabSelectModule, TdTabSelectBase, _TdTabSelectMixinBase, TdTabSelectComponent, TdTabOptionBase, _TdTabOptionMixinBase, TdTabOptionComponent, TdBreadcrumbComponent as ɵa };
//# sourceMappingURL=covalent-experimental.js.map
