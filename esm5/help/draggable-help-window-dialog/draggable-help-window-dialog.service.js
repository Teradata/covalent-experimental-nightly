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
        var CDK_OVERLAY_CUSTOM_CLASS = 'td-draggable-help-window-wrapper';
        /** @type {?} */
        var DEFAULT_DRAGGABLE_DIALOG_CONFIG = {
            hasBackdrop: false,
            closeOnNavigation: true,
            panelClass: CDK_OVERLAY_CUSTOM_CLASS,
            position: { bottom: '0', right: '0' },
            height: '475px',
            width: '360px',
            scrollStrategy: this._overlay.scrollStrategies.noop(),
        };
        /** @type {?} */
        var draggableDialog = this._tdDialogService.openDraggable({
            component: HelpWindowComponent,
            config: tslib_1.__assign({}, DEFAULT_DRAGGABLE_DIALOG_CONFIG, config.dialogConfig),
            dragHandleSelectors: ['.td-help-window-toolbar'],
            draggableClass: 'td-draggable-help-window',
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLWhlbHAtd2luZG93LWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9oZWxwLyIsInNvdXJjZXMiOlsiZHJhZ2dhYmxlLWhlbHAtd2luZG93LWRpYWxvZy9kcmFnZ2FibGUtaGVscC13aW5kb3ctZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7O0FBRXpELHNEQUtDOzs7SUFKQyx3REFBMkI7O0lBQzNCLCtEQUErQjs7SUFDL0IseURBQW9DOztJQUNwQywrREFBNEI7O0FBRzlCO0lBSUUsMENBQW9CLFFBQWlCLEVBQVUsZ0JBQWlDO1FBQTVELGFBQVEsR0FBUixRQUFRLENBQVM7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO0lBQUcsQ0FBQzs7Ozs7SUFFcEYsK0NBQUk7Ozs7SUFBSixVQUFLLE1BQStDOztZQUM1Qyx3QkFBd0IsR0FBVyxrQ0FBa0M7O1lBQ3JFLCtCQUErQixHQUFvQjtZQUN2RCxXQUFXLEVBQUUsS0FBSztZQUNsQixpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCLFVBQVUsRUFBRSx3QkFBd0I7WUFDcEMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO1lBQ3JDLE1BQU0sRUFBRSxPQUFPO1lBQ2YsS0FBSyxFQUFFLE9BQU87WUFDZCxjQUFjLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUU7U0FDdEQ7O1lBRUssZUFBZSxHQUFzQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1lBQzdGLFNBQVMsRUFBRSxtQkFBbUI7WUFDOUIsTUFBTSx1QkFDRCwrQkFBK0IsRUFDL0IsTUFBTSxDQUFDLFlBQVksQ0FDdkI7WUFDRCxtQkFBbUIsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1lBQ2hELGNBQWMsRUFBRSwwQkFBMEI7U0FDM0MsQ0FBQztRQUVGLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN2RCxlQUFlLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDekQsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFlBQVksR0FBRyxjQUFjLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDNUcsZUFBZSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7UUFBQyxjQUFNLE9BQUEsZUFBZSxDQUFDLEtBQUssRUFBRSxFQUF2QixDQUF1QixFQUFDLENBQUM7UUFFbEYsT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQzs7Z0JBbENGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsa0JBQWtCO2lCQUMvQjs7OztnQkFmUSxPQUFPO2dCQUlQLGVBQWU7OzsyQ0FQeEI7Q0FtREMsQUFuQ0QsSUFtQ0M7U0FoQ1ksZ0NBQWdDOzs7Ozs7SUFDL0Isb0RBQXlCOzs7OztJQUFFLDREQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTWF0RGlhbG9nQ29uZmlnIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IElIZWxwTWVudURhdGFJdGVtLCBJSGVscFdpbmRvd0NvbXBvbmVudExhYmVscyB9IGZyb20gJy4uL2hlbHAudXRpbHMnO1xuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvdmFsZW50SGVscE1vZHVsZSB9IGZyb20gJy4uL2hlbHAubW9kdWxlJztcbmltcG9ydCB7IFRoZW1lUGFsZXR0ZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgSGVscFdpbmRvd0NvbXBvbmVudCB9IGZyb20gJy4uL2hlbHAtd2luZG93L2hlbHAtd2luZG93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZERpYWxvZ1NlcnZpY2UgfSBmcm9tICdAY292YWxlbnQvY29yZS9kaWFsb2dzJztcblxuaW50ZXJmYWNlIElEcmFnZ2FibGVIZWxwV2luZG93RGlhbG9nU2VydmljZUNvbmZpZyB7XG4gIGl0ZW1zOiBJSGVscE1lbnVEYXRhSXRlbVtdO1xuICBkaWFsb2dDb25maWc/OiBNYXREaWFsb2dDb25maWc7XG4gIGxhYmVscz86IElIZWxwV2luZG93Q29tcG9uZW50TGFiZWxzO1xuICB0b29sYmFyQ29sb3I/OiBUaGVtZVBhbGV0dGU7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogQ292YWxlbnRIZWxwTW9kdWxlLFxufSlcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVIZWxwV2luZG93RGlhbG9nU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXksIHByaXZhdGUgX3RkRGlhbG9nU2VydmljZTogVGREaWFsb2dTZXJ2aWNlKSB7fVxuXG4gIG9wZW4oY29uZmlnOiBJRHJhZ2dhYmxlSGVscFdpbmRvd0RpYWxvZ1NlcnZpY2VDb25maWcpOiBNYXREaWFsb2dSZWY8SGVscFdpbmRvd0NvbXBvbmVudD4ge1xuICAgIGNvbnN0IENES19PVkVSTEFZX0NVU1RPTV9DTEFTUzogc3RyaW5nID0gJ3RkLWRyYWdnYWJsZS1oZWxwLXdpbmRvdy13cmFwcGVyJztcbiAgICBjb25zdCBERUZBVUxUX0RSQUdHQUJMRV9ESUFMT0dfQ09ORklHOiBNYXREaWFsb2dDb25maWcgPSB7XG4gICAgICBoYXNCYWNrZHJvcDogZmFsc2UsXG4gICAgICBjbG9zZU9uTmF2aWdhdGlvbjogdHJ1ZSxcbiAgICAgIHBhbmVsQ2xhc3M6IENES19PVkVSTEFZX0NVU1RPTV9DTEFTUyxcbiAgICAgIHBvc2l0aW9uOiB7IGJvdHRvbTogJzAnLCByaWdodDogJzAnIH0sXG4gICAgICBoZWlnaHQ6ICc0NzVweCcsXG4gICAgICB3aWR0aDogJzM2MHB4JyxcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLl9vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMubm9vcCgpLFxuICAgIH07XG5cbiAgICBjb25zdCBkcmFnZ2FibGVEaWFsb2c6IE1hdERpYWxvZ1JlZjxIZWxwV2luZG93Q29tcG9uZW50PiA9IHRoaXMuX3RkRGlhbG9nU2VydmljZS5vcGVuRHJhZ2dhYmxlKHtcbiAgICAgIGNvbXBvbmVudDogSGVscFdpbmRvd0NvbXBvbmVudCxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICAuLi5ERUZBVUxUX0RSQUdHQUJMRV9ESUFMT0dfQ09ORklHLFxuICAgICAgICAuLi5jb25maWcuZGlhbG9nQ29uZmlnLFxuICAgICAgfSxcbiAgICAgIGRyYWdIYW5kbGVTZWxlY3RvcnM6IFsnLnRkLWhlbHAtd2luZG93LXRvb2xiYXInXSxcbiAgICAgIGRyYWdnYWJsZUNsYXNzOiAndGQtZHJhZ2dhYmxlLWhlbHAtd2luZG93JyxcbiAgICB9KTtcblxuICAgIGRyYWdnYWJsZURpYWxvZy5jb21wb25lbnRJbnN0YW5jZS5pdGVtcyA9IGNvbmZpZy5pdGVtcztcbiAgICBkcmFnZ2FibGVEaWFsb2cuY29tcG9uZW50SW5zdGFuY2UubGFiZWxzID0gY29uZmlnLmxhYmVscztcbiAgICBkcmFnZ2FibGVEaWFsb2cuY29tcG9uZW50SW5zdGFuY2UudG9vbGJhckNvbG9yID0gJ3Rvb2xiYXJDb2xvcicgaW4gY29uZmlnID8gY29uZmlnLnRvb2xiYXJDb2xvciA6ICdwcmltYXJ5JztcbiAgICBkcmFnZ2FibGVEaWFsb2cuY29tcG9uZW50SW5zdGFuY2UuY2xvc2VkLnN1YnNjcmliZSgoKSA9PiBkcmFnZ2FibGVEaWFsb2cuY2xvc2UoKSk7XG5cbiAgICByZXR1cm4gZHJhZ2dhYmxlRGlhbG9nO1xuICB9XG59XG4iXX0=