/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
var DraggableHelpWindowDialogService = /** @class */ (function () {
    function DraggableHelpWindowDialogService(_dialog, overlay) {
        this._dialog = _dialog;
        this.scrollStrategy = overlay.scrollStrategies.noop();
    }
    /**
     * @param {?} config
     * @return {?}
     */
    DraggableHelpWindowDialogService.prototype.open = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var draggableDialog = this._dialog.open(DraggableHelpWindowDialogComponent, tslib_1.__assign({ hasBackdrop: false, closeOnNavigation: true, panelClass: 'draggable-dialog-wrapper', position: { bottom: '0', right: '0' }, scrollStrategy: this.scrollStrategy }, config.dialogConfig));
        draggableDialog.componentInstance.data = {
            items: config.items,
            labels: config.labels,
            toolbarColor: 'toolbarColor' in config ? config.toolbarColor : 'primary',
        };
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
    /** @nocollapse */ DraggableHelpWindowDialogService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DraggableHelpWindowDialogService_Factory() { return new DraggableHelpWindowDialogService(i0.ɵɵinject(i1.MatDialog), i0.ɵɵinject(i2.Overlay)); }, token: DraggableHelpWindowDialogService, providedIn: i3.CovalentHelpModule });
    return DraggableHelpWindowDialogService;
}());
export { DraggableHelpWindowDialogService };
if (false) {
    /** @type {?} */
    DraggableHelpWindowDialogService.prototype.scrollStrategy;
    /**
     * @type {?}
     * @private
     */
    DraggableHelpWindowDialogService.prototype._dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLWhlbHAtd2luZG93LWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9oZWxwLyIsInNvdXJjZXMiOlsiZHJhZ2dhYmxlLWhlbHAtd2luZG93LWRpYWxvZy9kcmFnZ2FibGUtaGVscC13aW5kb3ctZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQWlDLE1BQU0sMEJBQTBCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFOUYsT0FBTyxFQUFFLE9BQU8sRUFBc0IsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7QUFHcEQsc0RBS0M7OztJQUpDLHdEQUEyQjs7SUFDM0IsK0RBQStCOztJQUMvQix5REFBb0M7O0lBQ3BDLCtEQUE0Qjs7QUFHOUI7SUFNRSwwQ0FBb0IsT0FBa0IsRUFBRSxPQUFnQjtRQUFwQyxZQUFPLEdBQVAsT0FBTyxDQUFXO1FBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hELENBQUM7Ozs7O0lBRUQsK0NBQUk7Ozs7SUFBSixVQUFLLE1BQStDOztZQUM5QyxlQUFlLEdBQXFELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUN2RixrQ0FBa0MscUJBRWhDLFdBQVcsRUFBRSxLQUFLLEVBQ2xCLGlCQUFpQixFQUFFLElBQUksRUFDdkIsVUFBVSxFQUFFLDBCQUEwQixFQUN0QyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFDckMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjLElBQ2hDLE1BQU0sQ0FBQyxZQUFZLEVBRXpCO1FBQ0QsZUFBZSxDQUFDLGlCQUFpQixDQUFDLElBQUksR0FBRztZQUN2QyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO1lBQ3JCLFlBQVksRUFBRSxjQUFjLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTO1NBQ3pFLENBQUM7UUFDRixPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDOztnQkE1QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxrQkFBa0I7aUJBQy9COzs7O2dCQWhCUSxTQUFTO2dCQUdULE9BQU87OzsyQ0FKaEI7Q0E0Q0MsQUE3QkQsSUE2QkM7U0ExQlksZ0NBQWdDOzs7SUFDM0MsMERBQW1DOzs7OztJQUV2QixtREFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTWF0RGlhbG9nQ29uZmlnIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IERyYWdnYWJsZUhlbHBXaW5kb3dEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2RyYWdnYWJsZS1oZWxwLXdpbmRvdy1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IElIZWxwTWVudURhdGFJdGVtLCBJSGVscFdpbmRvd0NvbXBvbmVudExhYmVscyB9IGZyb20gJy4uL2hlbHAudXRpbHMnO1xuaW1wb3J0IHsgT3ZlcmxheSwgTm9vcFNjcm9sbFN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ292YWxlbnRIZWxwTW9kdWxlIH0gZnJvbSAnLi4vaGVscC5tb2R1bGUnO1xuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbmludGVyZmFjZSBJRHJhZ2dhYmxlSGVscFdpbmRvd0RpYWxvZ1NlcnZpY2VDb25maWcge1xuICBpdGVtczogSUhlbHBNZW51RGF0YUl0ZW1bXTtcbiAgZGlhbG9nQ29uZmlnPzogTWF0RGlhbG9nQ29uZmlnO1xuICBsYWJlbHM/OiBJSGVscFdpbmRvd0NvbXBvbmVudExhYmVscztcbiAgdG9vbGJhckNvbG9yPzogVGhlbWVQYWxldHRlO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IENvdmFsZW50SGVscE1vZHVsZSxcbn0pXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlSGVscFdpbmRvd0RpYWxvZ1NlcnZpY2Uge1xuICBzY3JvbGxTdHJhdGVneTogTm9vcFNjcm9sbFN0cmF0ZWd5O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RpYWxvZzogTWF0RGlhbG9nLCBvdmVybGF5OiBPdmVybGF5KSB7XG4gICAgdGhpcy5zY3JvbGxTdHJhdGVneSA9IG92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ub29wKCk7XG4gIH1cblxuICBvcGVuKGNvbmZpZzogSURyYWdnYWJsZUhlbHBXaW5kb3dEaWFsb2dTZXJ2aWNlQ29uZmlnKTogTWF0RGlhbG9nUmVmPERyYWdnYWJsZUhlbHBXaW5kb3dEaWFsb2dDb21wb25lbnQ+IHtcbiAgICBsZXQgZHJhZ2dhYmxlRGlhbG9nOiBNYXREaWFsb2dSZWY8RHJhZ2dhYmxlSGVscFdpbmRvd0RpYWxvZ0NvbXBvbmVudD4gPSB0aGlzLl9kaWFsb2cub3BlbihcbiAgICAgIERyYWdnYWJsZUhlbHBXaW5kb3dEaWFsb2dDb21wb25lbnQsXG4gICAgICB7XG4gICAgICAgIGhhc0JhY2tkcm9wOiBmYWxzZSxcbiAgICAgICAgY2xvc2VPbk5hdmlnYXRpb246IHRydWUsXG4gICAgICAgIHBhbmVsQ2xhc3M6ICdkcmFnZ2FibGUtZGlhbG9nLXdyYXBwZXInLFxuICAgICAgICBwb3NpdGlvbjogeyBib3R0b206ICcwJywgcmlnaHQ6ICcwJyB9LFxuICAgICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5zY3JvbGxTdHJhdGVneSxcbiAgICAgICAgLi4uY29uZmlnLmRpYWxvZ0NvbmZpZyxcbiAgICAgIH0sXG4gICAgKTtcbiAgICBkcmFnZ2FibGVEaWFsb2cuY29tcG9uZW50SW5zdGFuY2UuZGF0YSA9IHtcbiAgICAgIGl0ZW1zOiBjb25maWcuaXRlbXMsXG4gICAgICBsYWJlbHM6IGNvbmZpZy5sYWJlbHMsXG4gICAgICB0b29sYmFyQ29sb3I6ICd0b29sYmFyQ29sb3InIGluIGNvbmZpZyA/IGNvbmZpZy50b29sYmFyQ29sb3IgOiAncHJpbWFyeScsXG4gICAgfTtcbiAgICByZXR1cm4gZHJhZ2dhYmxlRGlhbG9nO1xuICB9XG59XG4iXX0=