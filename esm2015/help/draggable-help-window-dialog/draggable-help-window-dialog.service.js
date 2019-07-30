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
/**
 * @record
 */
function IDraggableHelpWindowDialogServiceConfig() { }
if (false) {
    /** @type {?} */
    IDraggableHelpWindowDialogServiceConfig.prototype.items;
    /** @type {?|undefined} */
    IDraggableHelpWindowDialogServiceConfig.prototype.dialogConfig;
    /** @type {?|undefined} */
    IDraggableHelpWindowDialogServiceConfig.prototype.labels;
    /** @type {?|undefined} */
    IDraggableHelpWindowDialogServiceConfig.prototype.toolbarColor;
}
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
     * @param {?} config
     * @return {?}
     */
    open(config) {
        /** @type {?} */
        let draggableDialog = this._dialog.open(DraggableHelpWindowDialogComponent, Object.assign({ hasBackdrop: false, closeOnNavigation: true, panelClass: 'draggable-dialog-wrapper', position: { bottom: '0', right: '0' }, scrollStrategy: this.scrollStrategy }, config.dialogConfig));
        draggableDialog.componentInstance.data = {
            items: config.items,
            labels: config.labels,
            toolbarColor: 'toolbarColor' in config ? config.toolbarColor : 'primary',
        };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLWhlbHAtd2luZG93LWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9oZWxwLyIsInNvdXJjZXMiOlsiZHJhZ2dhYmxlLWhlbHAtd2luZG93LWRpYWxvZy9kcmFnZ2FibGUtaGVscC13aW5kb3ctZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBaUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUU5RixPQUFPLEVBQUUsT0FBTyxFQUFzQixNQUFNLHNCQUFzQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztBQUdwRCxzREFLQzs7O0lBSkMsd0RBQTJCOztJQUMzQiwrREFBK0I7O0lBQy9CLHlEQUFvQzs7SUFDcEMsK0RBQTRCOztBQU05QixNQUFNLE9BQU8sZ0NBQWdDOzs7OztJQUczQyxZQUFvQixPQUFrQixFQUFFLE9BQWdCO1FBQXBDLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEQsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsTUFBK0M7O1lBQzlDLGVBQWUsR0FBcUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ3ZGLGtDQUFrQyxrQkFFaEMsV0FBVyxFQUFFLEtBQUssRUFDbEIsaUJBQWlCLEVBQUUsSUFBSSxFQUN2QixVQUFVLEVBQUUsMEJBQTBCLEVBQ3RDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUNyQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsSUFDaEMsTUFBTSxDQUFDLFlBQVksRUFFekI7UUFDRCxlQUFlLENBQUMsaUJBQWlCLENBQUMsSUFBSSxHQUFHO1lBQ3ZDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07WUFDckIsWUFBWSxFQUFFLGNBQWMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVM7U0FDekUsQ0FBQztRQUNGLE9BQU8sZUFBZSxDQUFDO0lBQ3pCLENBQUM7OztZQTVCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLGtCQUFrQjthQUMvQjs7OztZQWhCUSxTQUFTO1lBR1QsT0FBTzs7Ozs7SUFlZCwwREFBbUM7Ozs7O0lBRXZCLG1EQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNYXREaWFsb2dDb25maWcgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgRHJhZ2dhYmxlSGVscFdpbmRvd0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZHJhZ2dhYmxlLWhlbHAtd2luZG93LWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSUhlbHBNZW51RGF0YUl0ZW0sIElIZWxwV2luZG93Q29tcG9uZW50TGFiZWxzIH0gZnJvbSAnLi4vaGVscC51dGlscyc7XG5pbXBvcnQgeyBPdmVybGF5LCBOb29wU2Nyb2xsU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb3ZhbGVudEhlbHBNb2R1bGUgfSBmcm9tICcuLi9oZWxwLm1vZHVsZSc7XG5pbXBvcnQgeyBUaGVtZVBhbGV0dGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuaW50ZXJmYWNlIElEcmFnZ2FibGVIZWxwV2luZG93RGlhbG9nU2VydmljZUNvbmZpZyB7XG4gIGl0ZW1zOiBJSGVscE1lbnVEYXRhSXRlbVtdO1xuICBkaWFsb2dDb25maWc/OiBNYXREaWFsb2dDb25maWc7XG4gIGxhYmVscz86IElIZWxwV2luZG93Q29tcG9uZW50TGFiZWxzO1xuICB0b29sYmFyQ29sb3I/OiBUaGVtZVBhbGV0dGU7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogQ292YWxlbnRIZWxwTW9kdWxlLFxufSlcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVIZWxwV2luZG93RGlhbG9nU2VydmljZSB7XG4gIHNjcm9sbFN0cmF0ZWd5OiBOb29wU2Nyb2xsU3RyYXRlZ3k7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGlhbG9nOiBNYXREaWFsb2csIG92ZXJsYXk6IE92ZXJsYXkpIHtcbiAgICB0aGlzLnNjcm9sbFN0cmF0ZWd5ID0gb3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLm5vb3AoKTtcbiAgfVxuXG4gIG9wZW4oY29uZmlnOiBJRHJhZ2dhYmxlSGVscFdpbmRvd0RpYWxvZ1NlcnZpY2VDb25maWcpOiBNYXREaWFsb2dSZWY8RHJhZ2dhYmxlSGVscFdpbmRvd0RpYWxvZ0NvbXBvbmVudD4ge1xuICAgIGxldCBkcmFnZ2FibGVEaWFsb2c6IE1hdERpYWxvZ1JlZjxEcmFnZ2FibGVIZWxwV2luZG93RGlhbG9nQ29tcG9uZW50PiA9IHRoaXMuX2RpYWxvZy5vcGVuKFxuICAgICAgRHJhZ2dhYmxlSGVscFdpbmRvd0RpYWxvZ0NvbXBvbmVudCxcbiAgICAgIHtcbiAgICAgICAgaGFzQmFja2Ryb3A6IGZhbHNlLFxuICAgICAgICBjbG9zZU9uTmF2aWdhdGlvbjogdHJ1ZSxcbiAgICAgICAgcGFuZWxDbGFzczogJ2RyYWdnYWJsZS1kaWFsb2ctd3JhcHBlcicsXG4gICAgICAgIHBvc2l0aW9uOiB7IGJvdHRvbTogJzAnLCByaWdodDogJzAnIH0sXG4gICAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLnNjcm9sbFN0cmF0ZWd5LFxuICAgICAgICAuLi5jb25maWcuZGlhbG9nQ29uZmlnLFxuICAgICAgfSxcbiAgICApO1xuICAgIGRyYWdnYWJsZURpYWxvZy5jb21wb25lbnRJbnN0YW5jZS5kYXRhID0ge1xuICAgICAgaXRlbXM6IGNvbmZpZy5pdGVtcyxcbiAgICAgIGxhYmVsczogY29uZmlnLmxhYmVscyxcbiAgICAgIHRvb2xiYXJDb2xvcjogJ3Rvb2xiYXJDb2xvcicgaW4gY29uZmlnID8gY29uZmlnLnRvb2xiYXJDb2xvciA6ICdwcmltYXJ5JyxcbiAgICB9O1xuICAgIHJldHVybiBkcmFnZ2FibGVEaWFsb2c7XG4gIH1cbn1cbiJdfQ==