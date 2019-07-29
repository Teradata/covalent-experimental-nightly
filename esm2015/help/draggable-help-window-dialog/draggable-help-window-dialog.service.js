/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DraggableHelpWindowDialogComponent } from './draggable-help-window-dialog.component';
import { Overlay } from '@angular/cdk/overlay';
import { CovalentHelpModule } from '../help.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "../help.module";
export class DraggableHelpWindowDialogService {
    /**
     * @param {?} _dialog
     * @param {?} overlay
     */
    constructor(_dialog, overlay) {
        this._dialog = _dialog;
        this.scrollStrategy = overlay.scrollStrategies.noop();
    }
    /**
     * @param {?} items
     * @param {?=} config
     * @param {?=} labels
     * @return {?}
     */
    open(items, config, labels) {
        /** @type {?} */
        let draggableDialog = this._dialog.open(DraggableHelpWindowDialogComponent, Object.assign({ hasBackdrop: false, closeOnNavigation: true, panelClass: 'draggable-dialog-wrapper', position: { bottom: '0', right: '0' }, scrollStrategy: this.scrollStrategy }, config));
        draggableDialog.componentInstance.data = { items, labels };
        return draggableDialog;
    }
}
DraggableHelpWindowDialogService.decorators = [
    { type: Injectable, args: [{
                providedIn: CovalentHelpModule,
            },] }
];
/** @nocollapse */
DraggableHelpWindowDialogService.ctorParameters = () => [
    { type: MatDialog },
    { type: Overlay }
];
/** @nocollapse */ DraggableHelpWindowDialogService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DraggableHelpWindowDialogService_Factory() { return new DraggableHelpWindowDialogService(i0.ɵɵinject(i1.MatDialog), i0.ɵɵinject(i2.Overlay)); }, token: DraggableHelpWindowDialogService, providedIn: i3.CovalentHelpModule });
if (false) {
    /** @type {?} */
    DraggableHelpWindowDialogService.prototype.scrollStrategy;
    /**
     * @type {?}
     * @private
     */
    DraggableHelpWindowDialogService.prototype._dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLWhlbHAtd2luZG93LWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9oZWxwLyIsInNvdXJjZXMiOlsiZHJhZ2dhYmxlLWhlbHAtd2luZG93LWRpYWxvZy9kcmFnZ2FibGUtaGVscC13aW5kb3ctZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBaUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUU5RixPQUFPLEVBQUUsT0FBTyxFQUFzQixNQUFNLHNCQUFzQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUtwRCxNQUFNLE9BQU8sZ0NBQWdDOzs7OztJQUczQyxZQUFvQixPQUFrQixFQUFFLE9BQWdCO1FBQXBDLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEQsQ0FBQzs7Ozs7OztJQUVELElBQUksQ0FDRixLQUEwQixFQUMxQixNQUF3QixFQUN4QixNQUFtQzs7WUFFL0IsZUFBZSxHQUFxRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDdkYsa0NBQWtDLGtCQUVoQyxXQUFXLEVBQUUsS0FBSyxFQUNsQixpQkFBaUIsRUFBRSxJQUFJLEVBQ3ZCLFVBQVUsRUFBRSwwQkFBMEIsRUFDdEMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQ3JDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxJQUNoQyxNQUFNLEVBRVo7UUFDRCxlQUFlLENBQUMsaUJBQWlCLENBQUMsSUFBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDO1FBQzNELE9BQU8sZUFBZSxDQUFDO0lBQ3pCLENBQUM7OztZQTVCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLGtCQUFrQjthQUMvQjs7OztZQVJRLFNBQVM7WUFHVCxPQUFPOzs7OztJQU9kLDBEQUFtQzs7Ozs7SUFFdkIsbURBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1hdERpYWxvZ0NvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBEcmFnZ2FibGVIZWxwV2luZG93RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9kcmFnZ2FibGUtaGVscC13aW5kb3ctZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJSGVscE1lbnVEYXRhSXRlbSwgSUhlbHBXaW5kb3dDb21wb25lbnRMYWJlbHMgfSBmcm9tICcuLi9oZWxwLnV0aWxzJztcbmltcG9ydCB7IE92ZXJsYXksIE5vb3BTY3JvbGxTdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvdmFsZW50SGVscE1vZHVsZSB9IGZyb20gJy4uL2hlbHAubW9kdWxlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBDb3ZhbGVudEhlbHBNb2R1bGUsXG59KVxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZUhlbHBXaW5kb3dEaWFsb2dTZXJ2aWNlIHtcbiAgc2Nyb2xsU3RyYXRlZ3k6IE5vb3BTY3JvbGxTdHJhdGVneTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kaWFsb2c6IE1hdERpYWxvZywgb3ZlcmxheTogT3ZlcmxheSkge1xuICAgIHRoaXMuc2Nyb2xsU3RyYXRlZ3kgPSBvdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMubm9vcCgpO1xuICB9XG5cbiAgb3BlbihcbiAgICBpdGVtczogSUhlbHBNZW51RGF0YUl0ZW1bXSxcbiAgICBjb25maWc/OiBNYXREaWFsb2dDb25maWcsXG4gICAgbGFiZWxzPzogSUhlbHBXaW5kb3dDb21wb25lbnRMYWJlbHMsXG4gICk6IE1hdERpYWxvZ1JlZjxEcmFnZ2FibGVIZWxwV2luZG93RGlhbG9nQ29tcG9uZW50PiB7XG4gICAgbGV0IGRyYWdnYWJsZURpYWxvZzogTWF0RGlhbG9nUmVmPERyYWdnYWJsZUhlbHBXaW5kb3dEaWFsb2dDb21wb25lbnQ+ID0gdGhpcy5fZGlhbG9nLm9wZW4oXG4gICAgICBEcmFnZ2FibGVIZWxwV2luZG93RGlhbG9nQ29tcG9uZW50LFxuICAgICAge1xuICAgICAgICBoYXNCYWNrZHJvcDogZmFsc2UsXG4gICAgICAgIGNsb3NlT25OYXZpZ2F0aW9uOiB0cnVlLFxuICAgICAgICBwYW5lbENsYXNzOiAnZHJhZ2dhYmxlLWRpYWxvZy13cmFwcGVyJyxcbiAgICAgICAgcG9zaXRpb246IHsgYm90dG9tOiAnMCcsIHJpZ2h0OiAnMCcgfSxcbiAgICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMuc2Nyb2xsU3RyYXRlZ3ksXG4gICAgICAgIC4uLmNvbmZpZyxcbiAgICAgIH0sXG4gICAgKTtcbiAgICBkcmFnZ2FibGVEaWFsb2cuY29tcG9uZW50SW5zdGFuY2UuZGF0YSA9IHsgaXRlbXMsIGxhYmVscyB9O1xuICAgIHJldHVybiBkcmFnZ2FibGVEaWFsb2c7XG4gIH1cbn1cbiJdfQ==