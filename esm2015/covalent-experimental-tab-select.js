import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, TemplateRef, ViewContainerRef, ContentChildren, forwardRef, Output, EventEmitter, NgModule } from '@angular/core';
import { TemplatePortal, PortalModule } from '@angular/cdk/portal';
import { mixinDisabled, mixinControlValueAccessor, mixinDisableRipple } from '@covalent/core/common';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

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
 * Generated bundle index. Do not edit.
 */

export { CovalentTabSelectModule, TdTabSelectBase, _TdTabSelectMixinBase, TdTabSelectComponent, TdTabOptionBase, _TdTabOptionMixinBase, TdTabOptionComponent };
//# sourceMappingURL=covalent-experimental-tab-select.js.map
