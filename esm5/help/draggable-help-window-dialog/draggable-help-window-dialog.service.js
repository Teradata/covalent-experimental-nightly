/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { CovalentHelpModule } from '../help.module';
import { HelpWindowComponent } from '../help-window/help-window.component';
import { TdDialogService } from '@covalent/core/dialogs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "@covalent/core/dialogs";
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
    function DraggableHelpWindowDialogService(_overlay, _tdDialogService) {
        this._overlay = _overlay;
        this._tdDialogService = _tdDialogService;
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
        var draggableDialog = this._tdDialogService.openDraggable(HelpWindowComponent, tslib_1.__assign({ hasBackdrop: false, closeOnNavigation: true, panelClass: 'draggable-dialog-wrapper', position: { bottom: '0', right: '0' }, scrollStrategy: this._overlay.scrollStrategies.noop() }, config.dialogConfig), ['.td-draggable-help-window-toolbar']);
        draggableDialog.componentInstance.items = config.items;
        draggableDialog.componentInstance.labels = config.labels;
        draggableDialog.componentInstance.toolbarColor = 'toolbarColor' in config ? config.toolbarColor : 'primary';
        draggableDialog.componentInstance.closed.subscribe((/**
         * @return {?}
         */
        function () { return draggableDialog.close(); }));
        return draggableDialog;
    };
    DraggableHelpWindowDialogService.decorators = [
        { type: Injectable, args: [{
                    providedIn: CovalentHelpModule,
                },] }
    ];
    /** @nocollapse */
    DraggableHelpWindowDialogService.ctorParameters = function () { return [
        { type: Overlay },
        { type: TdDialogService }
    ]; };
    /** @nocollapse */ DraggableHelpWindowDialogService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DraggableHelpWindowDialogService_Factory() { return new DraggableHelpWindowDialogService(i0.ɵɵinject(i1.Overlay), i0.ɵɵinject(i2.TdDialogService)); }, token: DraggableHelpWindowDialogService, providedIn: i3.CovalentHelpModule });
    return DraggableHelpWindowDialogService;
}());
export { DraggableHelpWindowDialogService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DraggableHelpWindowDialogService.prototype._overlay;
    /**
     * @type {?}
     * @private
     */
    DraggableHelpWindowDialogService.prototype._tdDialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLWhlbHAtd2luZG93LWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9oZWxwLyIsInNvdXJjZXMiOlsiZHJhZ2dhYmxlLWhlbHAtd2luZG93LWRpYWxvZy9kcmFnZ2FibGUtaGVscC13aW5kb3ctZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7O0FBRXpELHNEQUtDOzs7SUFKQyx3REFBMkI7O0lBQzNCLCtEQUErQjs7SUFDL0IseURBQW9DOztJQUNwQywrREFBNEI7O0FBRzlCO0lBSUUsMENBQW9CLFFBQWlCLEVBQVUsZ0JBQWlDO1FBQTVELGFBQVEsR0FBUixRQUFRLENBQVM7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO0lBQUcsQ0FBQzs7Ozs7SUFFcEYsK0NBQUk7Ozs7SUFBSixVQUFLLE1BQStDOztZQUM1QyxlQUFlLEdBQXNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQzVGLG1CQUFtQixxQkFFakIsV0FBVyxFQUFFLEtBQUssRUFDbEIsaUJBQWlCLEVBQUUsSUFBSSxFQUN2QixVQUFVLEVBQUUsMEJBQTBCLEVBQ3RDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUNyQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFDbEQsTUFBTSxDQUFDLFlBQVksR0FFeEIsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUN0QztRQUVELGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN2RCxlQUFlLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDekQsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFlBQVksR0FBRyxjQUFjLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDNUcsZUFBZSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7UUFBQyxjQUFNLE9BQUEsZUFBZSxDQUFDLEtBQUssRUFBRSxFQUF2QixDQUF1QixFQUFDLENBQUM7UUFFbEYsT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQzs7Z0JBMUJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsa0JBQWtCO2lCQUMvQjs7OztnQkFmUSxPQUFPO2dCQUlQLGVBQWU7OzsyQ0FQeEI7Q0EyQ0MsQUEzQkQsSUEyQkM7U0F4QlksZ0NBQWdDOzs7Ozs7SUFDL0Isb0RBQXlCOzs7OztJQUFFLDREQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTWF0RGlhbG9nQ29uZmlnIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IElIZWxwTWVudURhdGFJdGVtLCBJSGVscFdpbmRvd0NvbXBvbmVudExhYmVscyB9IGZyb20gJy4uL2hlbHAudXRpbHMnO1xuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvdmFsZW50SGVscE1vZHVsZSB9IGZyb20gJy4uL2hlbHAubW9kdWxlJztcbmltcG9ydCB7IFRoZW1lUGFsZXR0ZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgSGVscFdpbmRvd0NvbXBvbmVudCB9IGZyb20gJy4uL2hlbHAtd2luZG93L2hlbHAtd2luZG93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZERpYWxvZ1NlcnZpY2UgfSBmcm9tICdAY292YWxlbnQvY29yZS9kaWFsb2dzJztcblxuaW50ZXJmYWNlIElEcmFnZ2FibGVIZWxwV2luZG93RGlhbG9nU2VydmljZUNvbmZpZyB7XG4gIGl0ZW1zOiBJSGVscE1lbnVEYXRhSXRlbVtdO1xuICBkaWFsb2dDb25maWc/OiBNYXREaWFsb2dDb25maWc7XG4gIGxhYmVscz86IElIZWxwV2luZG93Q29tcG9uZW50TGFiZWxzO1xuICB0b29sYmFyQ29sb3I/OiBUaGVtZVBhbGV0dGU7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogQ292YWxlbnRIZWxwTW9kdWxlLFxufSlcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVIZWxwV2luZG93RGlhbG9nU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXksIHByaXZhdGUgX3RkRGlhbG9nU2VydmljZTogVGREaWFsb2dTZXJ2aWNlKSB7fVxuXG4gIG9wZW4oY29uZmlnOiBJRHJhZ2dhYmxlSGVscFdpbmRvd0RpYWxvZ1NlcnZpY2VDb25maWcpOiBNYXREaWFsb2dSZWY8SGVscFdpbmRvd0NvbXBvbmVudD4ge1xuICAgIGNvbnN0IGRyYWdnYWJsZURpYWxvZzogTWF0RGlhbG9nUmVmPEhlbHBXaW5kb3dDb21wb25lbnQ+ID0gdGhpcy5fdGREaWFsb2dTZXJ2aWNlLm9wZW5EcmFnZ2FibGUoXG4gICAgICBIZWxwV2luZG93Q29tcG9uZW50LFxuICAgICAge1xuICAgICAgICBoYXNCYWNrZHJvcDogZmFsc2UsXG4gICAgICAgIGNsb3NlT25OYXZpZ2F0aW9uOiB0cnVlLFxuICAgICAgICBwYW5lbENsYXNzOiAnZHJhZ2dhYmxlLWRpYWxvZy13cmFwcGVyJyxcbiAgICAgICAgcG9zaXRpb246IHsgYm90dG9tOiAnMCcsIHJpZ2h0OiAnMCcgfSxcbiAgICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMuX292ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ub29wKCksXG4gICAgICAgIC4uLmNvbmZpZy5kaWFsb2dDb25maWcsXG4gICAgICB9LFxuICAgICAgWycudGQtZHJhZ2dhYmxlLWhlbHAtd2luZG93LXRvb2xiYXInXSxcbiAgICApO1xuXG4gICAgZHJhZ2dhYmxlRGlhbG9nLmNvbXBvbmVudEluc3RhbmNlLml0ZW1zID0gY29uZmlnLml0ZW1zO1xuICAgIGRyYWdnYWJsZURpYWxvZy5jb21wb25lbnRJbnN0YW5jZS5sYWJlbHMgPSBjb25maWcubGFiZWxzO1xuICAgIGRyYWdnYWJsZURpYWxvZy5jb21wb25lbnRJbnN0YW5jZS50b29sYmFyQ29sb3IgPSAndG9vbGJhckNvbG9yJyBpbiBjb25maWcgPyBjb25maWcudG9vbGJhckNvbG9yIDogJ3ByaW1hcnknO1xuICAgIGRyYWdnYWJsZURpYWxvZy5jb21wb25lbnRJbnN0YW5jZS5jbG9zZWQuc3Vic2NyaWJlKCgpID0+IGRyYWdnYWJsZURpYWxvZy5jbG9zZSgpKTtcblxuICAgIHJldHVybiBkcmFnZ2FibGVEaWFsb2c7XG4gIH1cbn1cbiJdfQ==