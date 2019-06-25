/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DraggableHelpWindowDialogComponent } from './draggable-help-window-dialog.component';
import { Overlay } from '@angular/cdk/overlay';
import { CovalentHelpModule } from '../help.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "../help.module";
var DraggableHelpWindowDialogService = /** @class */ (function () {
    function DraggableHelpWindowDialogService(_dialog, overlay) {
        this._dialog = _dialog;
        this.scrollStrategy = overlay.scrollStrategies.noop();
    }
    /**
     * @param {?} items
     * @param {?=} config
     * @param {?=} labels
     * @return {?}
     */
    DraggableHelpWindowDialogService.prototype.open = /**
     * @param {?} items
     * @param {?=} config
     * @param {?=} labels
     * @return {?}
     */
    function (items, config, labels) {
        /** @type {?} */
        var draggableDialog = this._dialog.open(DraggableHelpWindowDialogComponent, tslib_1.__assign({ hasBackdrop: false, closeOnNavigation: true, panelClass: 'draggable-dialog-wrapper', position: { bottom: '0', right: '0' }, scrollStrategy: this.scrollStrategy }, config));
        draggableDialog.componentInstance.data = { items: items, labels: labels };
        return draggableDialog;
    };
    DraggableHelpWindowDialogService.decorators = [
        { type: Injectable, args: [{
                    providedIn: CovalentHelpModule,
                },] }
    ];
    /** @nocollapse */
    DraggableHelpWindowDialogService.ctorParameters = function () { return [
        { type: MatDialog },
        { type: Overlay }
    ]; };
    /** @nocollapse */ DraggableHelpWindowDialogService.ngInjectableDef = i0.defineInjectable({ factory: function DraggableHelpWindowDialogService_Factory() { return new DraggableHelpWindowDialogService(i0.inject(i1.MatDialog), i0.inject(i2.Overlay)); }, token: DraggableHelpWindowDialogService, providedIn: i3.CovalentHelpModule });
    return DraggableHelpWindowDialogService;
}());
export { DraggableHelpWindowDialogService };
if (false) {
    /** @type {?} */
    DraggableHelpWindowDialogService.prototype.scrollStrategy;
    /** @type {?} */
    DraggableHelpWindowDialogService.prototype._dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLWhlbHAtd2luZG93LWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9oZWxwLyIsInNvdXJjZXMiOlsiZHJhZ2dhYmxlLWhlbHAtd2luZG93LWRpYWxvZy9kcmFnZ2FibGUtaGVscC13aW5kb3ctZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQWlDLE1BQU0sMEJBQTBCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFOUYsT0FBTyxFQUFFLE9BQU8sRUFBc0IsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFFcEQ7SUFNRSwwQ0FBb0IsT0FBa0IsRUFBRSxPQUFnQjtRQUFwQyxZQUFPLEdBQVAsT0FBTyxDQUFXO1FBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hELENBQUM7Ozs7Ozs7SUFFRCwrQ0FBSTs7Ozs7O0lBQUosVUFDRSxLQUEwQixFQUMxQixNQUF3QixFQUN4QixNQUFtQzs7WUFFL0IsZUFBZSxHQUFxRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDdkYsa0NBQWtDLHFCQUVoQyxXQUFXLEVBQUUsS0FBSyxFQUNsQixpQkFBaUIsRUFBRSxJQUFJLEVBQ3ZCLFVBQVUsRUFBRSwwQkFBMEIsRUFDdEMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQ3JDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxJQUNoQyxNQUFNLEVBRVo7UUFDRCxlQUFlLENBQUMsaUJBQWlCLENBQUMsSUFBSSxHQUFHLEVBQUUsS0FBSyxPQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQztRQUMzRCxPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDOztnQkE1QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxrQkFBa0I7aUJBQy9COzs7O2dCQVJRLFNBQVM7Z0JBR1QsT0FBTzs7OzJDQUpoQjtDQW9DQyxBQTdCRCxJQTZCQztTQTFCWSxnQ0FBZ0M7OztJQUMzQywwREFBbUM7O0lBRXZCLG1EQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNYXREaWFsb2dDb25maWcgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgRHJhZ2dhYmxlSGVscFdpbmRvd0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZHJhZ2dhYmxlLWhlbHAtd2luZG93LWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSUhlbHBNZW51RGF0YUl0ZW0sIElIZWxwV2luZG93Q29tcG9uZW50TGFiZWxzIH0gZnJvbSAnLi4vaGVscC51dGlscyc7XG5pbXBvcnQgeyBPdmVybGF5LCBOb29wU2Nyb2xsU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb3ZhbGVudEhlbHBNb2R1bGUgfSBmcm9tICcuLi9oZWxwLm1vZHVsZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogQ292YWxlbnRIZWxwTW9kdWxlLFxufSlcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVIZWxwV2luZG93RGlhbG9nU2VydmljZSB7XG4gIHNjcm9sbFN0cmF0ZWd5OiBOb29wU2Nyb2xsU3RyYXRlZ3k7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGlhbG9nOiBNYXREaWFsb2csIG92ZXJsYXk6IE92ZXJsYXkpIHtcbiAgICB0aGlzLnNjcm9sbFN0cmF0ZWd5ID0gb3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLm5vb3AoKTtcbiAgfVxuXG4gIG9wZW4oXG4gICAgaXRlbXM6IElIZWxwTWVudURhdGFJdGVtW10sXG4gICAgY29uZmlnPzogTWF0RGlhbG9nQ29uZmlnLFxuICAgIGxhYmVscz86IElIZWxwV2luZG93Q29tcG9uZW50TGFiZWxzLFxuICApOiBNYXREaWFsb2dSZWY8RHJhZ2dhYmxlSGVscFdpbmRvd0RpYWxvZ0NvbXBvbmVudD4ge1xuICAgIGxldCBkcmFnZ2FibGVEaWFsb2c6IE1hdERpYWxvZ1JlZjxEcmFnZ2FibGVIZWxwV2luZG93RGlhbG9nQ29tcG9uZW50PiA9IHRoaXMuX2RpYWxvZy5vcGVuKFxuICAgICAgRHJhZ2dhYmxlSGVscFdpbmRvd0RpYWxvZ0NvbXBvbmVudCxcbiAgICAgIHtcbiAgICAgICAgaGFzQmFja2Ryb3A6IGZhbHNlLFxuICAgICAgICBjbG9zZU9uTmF2aWdhdGlvbjogdHJ1ZSxcbiAgICAgICAgcGFuZWxDbGFzczogJ2RyYWdnYWJsZS1kaWFsb2ctd3JhcHBlcicsXG4gICAgICAgIHBvc2l0aW9uOiB7IGJvdHRvbTogJzAnLCByaWdodDogJzAnIH0sXG4gICAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLnNjcm9sbFN0cmF0ZWd5LFxuICAgICAgICAuLi5jb25maWcsXG4gICAgICB9LFxuICAgICk7XG4gICAgZHJhZ2dhYmxlRGlhbG9nLmNvbXBvbmVudEluc3RhbmNlLmRhdGEgPSB7IGl0ZW1zLCBsYWJlbHMgfTtcbiAgICByZXR1cm4gZHJhZ2dhYmxlRGlhbG9nO1xuICB9XG59XG4iXX0=