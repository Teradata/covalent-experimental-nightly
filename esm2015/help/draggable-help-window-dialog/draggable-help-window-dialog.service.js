/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class DraggableHelpWindowDialogService {
    /**
     * @param {?} _overlay
     * @param {?} _tdDialogService
     */
    constructor(_overlay, _tdDialogService) {
        this._overlay = _overlay;
        this._tdDialogService = _tdDialogService;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    open(config) {
        /** @type {?} */
        const CDK_OVERLAY_CUSTOM_CLASS = 'td-draggable-help-window-wrapper';
        /** @type {?} */
        const DEFAULT_DRAGGABLE_DIALOG_CONFIG = {
            hasBackdrop: false,
            closeOnNavigation: true,
            panelClass: CDK_OVERLAY_CUSTOM_CLASS,
            position: { bottom: '0', right: '0' },
            height: '475px',
            width: '360px',
            scrollStrategy: this._overlay.scrollStrategies.noop(),
        };
        /** @type {?} */
        const draggableDialog = this._tdDialogService.openDraggable({
            component: HelpWindowComponent,
            config: Object.assign({}, DEFAULT_DRAGGABLE_DIALOG_CONFIG, config.dialogConfig),
            dragHandleSelectors: ['.td-help-window-toolbar'],
            draggableClass: 'td-draggable-help-window',
        });
        draggableDialog.componentInstance.items = config.items;
        draggableDialog.componentInstance.labels = config.labels;
        draggableDialog.componentInstance.toolbarColor = 'toolbarColor' in config ? config.toolbarColor : 'primary';
        draggableDialog.componentInstance.closed.subscribe((/**
         * @return {?}
         */
        () => draggableDialog.close()));
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
    { type: Overlay },
    { type: TdDialogService }
];
/** @nocollapse */ DraggableHelpWindowDialogService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DraggableHelpWindowDialogService_Factory() { return new DraggableHelpWindowDialogService(i0.ɵɵinject(i1.Overlay), i0.ɵɵinject(i2.TdDialogService)); }, token: DraggableHelpWindowDialogService, providedIn: i3.CovalentHelpModule });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLWhlbHAtd2luZG93LWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9oZWxwLyIsInNvdXJjZXMiOlsiZHJhZ2dhYmxlLWhlbHAtd2luZG93LWRpYWxvZy9kcmFnZ2FibGUtaGVscC13aW5kb3ctZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7QUFFekQsc0RBS0M7OztJQUpDLHdEQUEyQjs7SUFDM0IsK0RBQStCOztJQUMvQix5REFBb0M7O0lBQ3BDLCtEQUE0Qjs7QUFNOUIsTUFBTSxPQUFPLGdDQUFnQzs7Ozs7SUFDM0MsWUFBb0IsUUFBaUIsRUFBVSxnQkFBaUM7UUFBNUQsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7SUFBRyxDQUFDOzs7OztJQUVwRixJQUFJLENBQUMsTUFBK0M7O2NBQzVDLHdCQUF3QixHQUFXLGtDQUFrQzs7Y0FDckUsK0JBQStCLEdBQW9CO1lBQ3ZELFdBQVcsRUFBRSxLQUFLO1lBQ2xCLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsVUFBVSxFQUFFLHdCQUF3QjtZQUNwQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7WUFDckMsTUFBTSxFQUFFLE9BQU87WUFDZixLQUFLLEVBQUUsT0FBTztZQUNkLGNBQWMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRTtTQUN0RDs7Y0FFSyxlQUFlLEdBQXNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7WUFDN0YsU0FBUyxFQUFFLG1CQUFtQjtZQUM5QixNQUFNLG9CQUNELCtCQUErQixFQUMvQixNQUFNLENBQUMsWUFBWSxDQUN2QjtZQUNELG1CQUFtQixFQUFFLENBQUMseUJBQXlCLENBQUM7WUFDaEQsY0FBYyxFQUFFLDBCQUEwQjtTQUMzQyxDQUFDO1FBRUYsZUFBZSxDQUFDLGlCQUFpQixDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3ZELGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUN6RCxlQUFlLENBQUMsaUJBQWlCLENBQUMsWUFBWSxHQUFHLGNBQWMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM1RyxlQUFlLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsRUFBQyxDQUFDO1FBRWxGLE9BQU8sZUFBZSxDQUFDO0lBQ3pCLENBQUM7OztZQWxDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLGtCQUFrQjthQUMvQjs7OztZQWZRLE9BQU87WUFJUCxlQUFlOzs7Ozs7OztJQWFWLG9EQUF5Qjs7Ozs7SUFBRSw0REFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1hdERpYWxvZ0NvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBJSGVscE1lbnVEYXRhSXRlbSwgSUhlbHBXaW5kb3dDb21wb25lbnRMYWJlbHMgfSBmcm9tICcuLi9oZWxwLnV0aWxzJztcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb3ZhbGVudEhlbHBNb2R1bGUgfSBmcm9tICcuLi9oZWxwLm1vZHVsZSc7XG5pbXBvcnQgeyBUaGVtZVBhbGV0dGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IEhlbHBXaW5kb3dDb21wb25lbnQgfSBmcm9tICcuLi9oZWxwLXdpbmRvdy9oZWxwLXdpbmRvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGREaWFsb2dTZXJ2aWNlIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvZGlhbG9ncyc7XG5cbmludGVyZmFjZSBJRHJhZ2dhYmxlSGVscFdpbmRvd0RpYWxvZ1NlcnZpY2VDb25maWcge1xuICBpdGVtczogSUhlbHBNZW51RGF0YUl0ZW1bXTtcbiAgZGlhbG9nQ29uZmlnPzogTWF0RGlhbG9nQ29uZmlnO1xuICBsYWJlbHM/OiBJSGVscFdpbmRvd0NvbXBvbmVudExhYmVscztcbiAgdG9vbGJhckNvbG9yPzogVGhlbWVQYWxldHRlO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IENvdmFsZW50SGVscE1vZHVsZSxcbn0pXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlSGVscFdpbmRvd0RpYWxvZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vdmVybGF5OiBPdmVybGF5LCBwcml2YXRlIF90ZERpYWxvZ1NlcnZpY2U6IFRkRGlhbG9nU2VydmljZSkge31cblxuICBvcGVuKGNvbmZpZzogSURyYWdnYWJsZUhlbHBXaW5kb3dEaWFsb2dTZXJ2aWNlQ29uZmlnKTogTWF0RGlhbG9nUmVmPEhlbHBXaW5kb3dDb21wb25lbnQ+IHtcbiAgICBjb25zdCBDREtfT1ZFUkxBWV9DVVNUT01fQ0xBU1M6IHN0cmluZyA9ICd0ZC1kcmFnZ2FibGUtaGVscC13aW5kb3ctd3JhcHBlcic7XG4gICAgY29uc3QgREVGQVVMVF9EUkFHR0FCTEVfRElBTE9HX0NPTkZJRzogTWF0RGlhbG9nQ29uZmlnID0ge1xuICAgICAgaGFzQmFja2Ryb3A6IGZhbHNlLFxuICAgICAgY2xvc2VPbk5hdmlnYXRpb246IHRydWUsXG4gICAgICBwYW5lbENsYXNzOiBDREtfT1ZFUkxBWV9DVVNUT01fQ0xBU1MsXG4gICAgICBwb3NpdGlvbjogeyBib3R0b206ICcwJywgcmlnaHQ6ICcwJyB9LFxuICAgICAgaGVpZ2h0OiAnNDc1cHgnLFxuICAgICAgd2lkdGg6ICczNjBweCcsXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5fb3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLm5vb3AoKSxcbiAgICB9O1xuXG4gICAgY29uc3QgZHJhZ2dhYmxlRGlhbG9nOiBNYXREaWFsb2dSZWY8SGVscFdpbmRvd0NvbXBvbmVudD4gPSB0aGlzLl90ZERpYWxvZ1NlcnZpY2Uub3BlbkRyYWdnYWJsZSh7XG4gICAgICBjb21wb25lbnQ6IEhlbHBXaW5kb3dDb21wb25lbnQsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgLi4uREVGQVVMVF9EUkFHR0FCTEVfRElBTE9HX0NPTkZJRyxcbiAgICAgICAgLi4uY29uZmlnLmRpYWxvZ0NvbmZpZyxcbiAgICAgIH0sXG4gICAgICBkcmFnSGFuZGxlU2VsZWN0b3JzOiBbJy50ZC1oZWxwLXdpbmRvdy10b29sYmFyJ10sXG4gICAgICBkcmFnZ2FibGVDbGFzczogJ3RkLWRyYWdnYWJsZS1oZWxwLXdpbmRvdycsXG4gICAgfSk7XG5cbiAgICBkcmFnZ2FibGVEaWFsb2cuY29tcG9uZW50SW5zdGFuY2UuaXRlbXMgPSBjb25maWcuaXRlbXM7XG4gICAgZHJhZ2dhYmxlRGlhbG9nLmNvbXBvbmVudEluc3RhbmNlLmxhYmVscyA9IGNvbmZpZy5sYWJlbHM7XG4gICAgZHJhZ2dhYmxlRGlhbG9nLmNvbXBvbmVudEluc3RhbmNlLnRvb2xiYXJDb2xvciA9ICd0b29sYmFyQ29sb3InIGluIGNvbmZpZyA/IGNvbmZpZy50b29sYmFyQ29sb3IgOiAncHJpbWFyeSc7XG4gICAgZHJhZ2dhYmxlRGlhbG9nLmNvbXBvbmVudEluc3RhbmNlLmNsb3NlZC5zdWJzY3JpYmUoKCkgPT4gZHJhZ2dhYmxlRGlhbG9nLmNsb3NlKCkpO1xuXG4gICAgcmV0dXJuIGRyYWdnYWJsZURpYWxvZztcbiAgfVxufVxuIl19