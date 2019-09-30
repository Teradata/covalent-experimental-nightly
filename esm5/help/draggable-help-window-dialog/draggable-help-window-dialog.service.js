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
        var draggableDialog = this._tdDialogService.openDraggable({
            component: HelpWindowComponent,
            config: tslib_1.__assign({ hasBackdrop: false, closeOnNavigation: true, panelClass: CDK_OVERLAY_CUSTOM_CLASS, position: { bottom: '0', right: '0' }, scrollStrategy: this._overlay.scrollStrategies.noop(), height: '475px', width: '360px' }, config.dialogConfig),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLWhlbHAtd2luZG93LWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9oZWxwLyIsInNvdXJjZXMiOlsiZHJhZ2dhYmxlLWhlbHAtd2luZG93LWRpYWxvZy9kcmFnZ2FibGUtaGVscC13aW5kb3ctZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7O0FBRXpELHNEQUtDOzs7SUFKQyx3REFBMkI7O0lBQzNCLCtEQUErQjs7SUFDL0IseURBQW9DOztJQUNwQywrREFBNEI7O0FBRzlCO0lBSUUsMENBQW9CLFFBQWlCLEVBQVUsZ0JBQWlDO1FBQTVELGFBQVEsR0FBUixRQUFRLENBQVM7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO0lBQUcsQ0FBQzs7Ozs7SUFFcEYsK0NBQUk7Ozs7SUFBSixVQUFLLE1BQStDOztZQUM1Qyx3QkFBd0IsR0FBVyxrQ0FBa0M7O1lBQ3JFLGVBQWUsR0FBc0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztZQUM3RixTQUFTLEVBQUUsbUJBQW1CO1lBQzlCLE1BQU0scUJBQ0osV0FBVyxFQUFFLEtBQUssRUFDbEIsaUJBQWlCLEVBQUUsSUFBSSxFQUN2QixVQUFVLEVBQUUsd0JBQXdCLEVBQ3BDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUNyQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsRUFDckQsTUFBTSxFQUFFLE9BQU8sRUFDZixLQUFLLEVBQUUsT0FBTyxJQUNYLE1BQU0sQ0FBQyxZQUFZLENBQ3ZCO1lBQ0QsbUJBQW1CLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztZQUNoRCxjQUFjLEVBQUUsMEJBQTBCO1NBQzNDLENBQUM7UUFFRixlQUFlLENBQUMsaUJBQWlCLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDdkQsZUFBZSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ3pELGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEdBQUcsY0FBYyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzVHLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsU0FBUzs7O1FBQUMsY0FBTSxPQUFBLGVBQWUsQ0FBQyxLQUFLLEVBQUUsRUFBdkIsQ0FBdUIsRUFBQyxDQUFDO1FBRWxGLE9BQU8sZUFBZSxDQUFDO0lBQ3pCLENBQUM7O2dCQTlCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLGtCQUFrQjtpQkFDL0I7Ozs7Z0JBZlEsT0FBTztnQkFJUCxlQUFlOzs7MkNBUHhCO0NBK0NDLEFBL0JELElBK0JDO1NBNUJZLGdDQUFnQzs7Ozs7O0lBQy9CLG9EQUF5Qjs7Ozs7SUFBRSw0REFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1hdERpYWxvZ0NvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBJSGVscE1lbnVEYXRhSXRlbSwgSUhlbHBXaW5kb3dDb21wb25lbnRMYWJlbHMgfSBmcm9tICcuLi9oZWxwLnV0aWxzJztcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb3ZhbGVudEhlbHBNb2R1bGUgfSBmcm9tICcuLi9oZWxwLm1vZHVsZSc7XG5pbXBvcnQgeyBUaGVtZVBhbGV0dGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IEhlbHBXaW5kb3dDb21wb25lbnQgfSBmcm9tICcuLi9oZWxwLXdpbmRvdy9oZWxwLXdpbmRvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGREaWFsb2dTZXJ2aWNlIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvZGlhbG9ncyc7XG5cbmludGVyZmFjZSBJRHJhZ2dhYmxlSGVscFdpbmRvd0RpYWxvZ1NlcnZpY2VDb25maWcge1xuICBpdGVtczogSUhlbHBNZW51RGF0YUl0ZW1bXTtcbiAgZGlhbG9nQ29uZmlnPzogTWF0RGlhbG9nQ29uZmlnO1xuICBsYWJlbHM/OiBJSGVscFdpbmRvd0NvbXBvbmVudExhYmVscztcbiAgdG9vbGJhckNvbG9yPzogVGhlbWVQYWxldHRlO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IENvdmFsZW50SGVscE1vZHVsZSxcbn0pXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlSGVscFdpbmRvd0RpYWxvZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vdmVybGF5OiBPdmVybGF5LCBwcml2YXRlIF90ZERpYWxvZ1NlcnZpY2U6IFRkRGlhbG9nU2VydmljZSkge31cblxuICBvcGVuKGNvbmZpZzogSURyYWdnYWJsZUhlbHBXaW5kb3dEaWFsb2dTZXJ2aWNlQ29uZmlnKTogTWF0RGlhbG9nUmVmPEhlbHBXaW5kb3dDb21wb25lbnQ+IHtcbiAgICBjb25zdCBDREtfT1ZFUkxBWV9DVVNUT01fQ0xBU1M6IHN0cmluZyA9ICd0ZC1kcmFnZ2FibGUtaGVscC13aW5kb3ctd3JhcHBlcic7XG4gICAgY29uc3QgZHJhZ2dhYmxlRGlhbG9nOiBNYXREaWFsb2dSZWY8SGVscFdpbmRvd0NvbXBvbmVudD4gPSB0aGlzLl90ZERpYWxvZ1NlcnZpY2Uub3BlbkRyYWdnYWJsZSh7XG4gICAgICBjb21wb25lbnQ6IEhlbHBXaW5kb3dDb21wb25lbnQsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgaGFzQmFja2Ryb3A6IGZhbHNlLFxuICAgICAgICBjbG9zZU9uTmF2aWdhdGlvbjogdHJ1ZSxcbiAgICAgICAgcGFuZWxDbGFzczogQ0RLX09WRVJMQVlfQ1VTVE9NX0NMQVNTLFxuICAgICAgICBwb3NpdGlvbjogeyBib3R0b206ICcwJywgcmlnaHQ6ICcwJyB9LFxuICAgICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5fb3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLm5vb3AoKSxcbiAgICAgICAgaGVpZ2h0OiAnNDc1cHgnLFxuICAgICAgICB3aWR0aDogJzM2MHB4JyxcbiAgICAgICAgLi4uY29uZmlnLmRpYWxvZ0NvbmZpZyxcbiAgICAgIH0sXG4gICAgICBkcmFnSGFuZGxlU2VsZWN0b3JzOiBbJy50ZC1oZWxwLXdpbmRvdy10b29sYmFyJ10sXG4gICAgICBkcmFnZ2FibGVDbGFzczogJ3RkLWRyYWdnYWJsZS1oZWxwLXdpbmRvdycsXG4gICAgfSk7XG5cbiAgICBkcmFnZ2FibGVEaWFsb2cuY29tcG9uZW50SW5zdGFuY2UuaXRlbXMgPSBjb25maWcuaXRlbXM7XG4gICAgZHJhZ2dhYmxlRGlhbG9nLmNvbXBvbmVudEluc3RhbmNlLmxhYmVscyA9IGNvbmZpZy5sYWJlbHM7XG4gICAgZHJhZ2dhYmxlRGlhbG9nLmNvbXBvbmVudEluc3RhbmNlLnRvb2xiYXJDb2xvciA9ICd0b29sYmFyQ29sb3InIGluIGNvbmZpZyA/IGNvbmZpZy50b29sYmFyQ29sb3IgOiAncHJpbWFyeSc7XG4gICAgZHJhZ2dhYmxlRGlhbG9nLmNvbXBvbmVudEluc3RhbmNlLmNsb3NlZC5zdWJzY3JpYmUoKCkgPT4gZHJhZ2dhYmxlRGlhbG9nLmNsb3NlKCkpO1xuXG4gICAgcmV0dXJuIGRyYWdnYWJsZURpYWxvZztcbiAgfVxufVxuIl19