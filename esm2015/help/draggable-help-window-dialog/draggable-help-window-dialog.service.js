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
        const draggableDialog = this._tdDialogService.openDraggable({
            component: HelpWindowComponent,
            config: Object.assign({ hasBackdrop: false, closeOnNavigation: true, panelClass: CDK_OVERLAY_CUSTOM_CLASS, position: { bottom: '0', right: '0' }, scrollStrategy: this._overlay.scrollStrategies.noop(), height: '475px', width: '360px' }, config.dialogConfig),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLWhlbHAtd2luZG93LWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9oZWxwLyIsInNvdXJjZXMiOlsiZHJhZ2dhYmxlLWhlbHAtd2luZG93LWRpYWxvZy9kcmFnZ2FibGUtaGVscC13aW5kb3ctZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7QUFFekQsc0RBS0M7OztJQUpDLHdEQUEyQjs7SUFDM0IsK0RBQStCOztJQUMvQix5REFBb0M7O0lBQ3BDLCtEQUE0Qjs7QUFNOUIsTUFBTSxPQUFPLGdDQUFnQzs7Ozs7SUFDM0MsWUFBb0IsUUFBaUIsRUFBVSxnQkFBaUM7UUFBNUQsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7SUFBRyxDQUFDOzs7OztJQUVwRixJQUFJLENBQUMsTUFBK0M7O2NBQzVDLHdCQUF3QixHQUFXLGtDQUFrQzs7Y0FDckUsZUFBZSxHQUFzQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1lBQzdGLFNBQVMsRUFBRSxtQkFBbUI7WUFDOUIsTUFBTSxrQkFDSixXQUFXLEVBQUUsS0FBSyxFQUNsQixpQkFBaUIsRUFBRSxJQUFJLEVBQ3ZCLFVBQVUsRUFBRSx3QkFBd0IsRUFDcEMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQ3JDLGNBQWMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxFQUNyRCxNQUFNLEVBQUUsT0FBTyxFQUNmLEtBQUssRUFBRSxPQUFPLElBQ1gsTUFBTSxDQUFDLFlBQVksQ0FDdkI7WUFDRCxtQkFBbUIsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1lBQ2hELGNBQWMsRUFBRSwwQkFBMEI7U0FDM0MsQ0FBQztRQUVGLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN2RCxlQUFlLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDekQsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFlBQVksR0FBRyxjQUFjLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDNUcsZUFBZSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLEVBQUMsQ0FBQztRQUVsRixPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDOzs7WUE5QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxrQkFBa0I7YUFDL0I7Ozs7WUFmUSxPQUFPO1lBSVAsZUFBZTs7Ozs7Ozs7SUFhVixvREFBeUI7Ozs7O0lBQUUsNERBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNYXREaWFsb2dDb25maWcgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgSUhlbHBNZW51RGF0YUl0ZW0sIElIZWxwV2luZG93Q29tcG9uZW50TGFiZWxzIH0gZnJvbSAnLi4vaGVscC51dGlscyc7XG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ292YWxlbnRIZWxwTW9kdWxlIH0gZnJvbSAnLi4vaGVscC5tb2R1bGUnO1xuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBIZWxwV2luZG93Q29tcG9uZW50IH0gZnJvbSAnLi4vaGVscC13aW5kb3cvaGVscC13aW5kb3cuY29tcG9uZW50JztcbmltcG9ydCB7IFRkRGlhbG9nU2VydmljZSB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2RpYWxvZ3MnO1xuXG5pbnRlcmZhY2UgSURyYWdnYWJsZUhlbHBXaW5kb3dEaWFsb2dTZXJ2aWNlQ29uZmlnIHtcbiAgaXRlbXM6IElIZWxwTWVudURhdGFJdGVtW107XG4gIGRpYWxvZ0NvbmZpZz86IE1hdERpYWxvZ0NvbmZpZztcbiAgbGFiZWxzPzogSUhlbHBXaW5kb3dDb21wb25lbnRMYWJlbHM7XG4gIHRvb2xiYXJDb2xvcj86IFRoZW1lUGFsZXR0ZTtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBDb3ZhbGVudEhlbHBNb2R1bGUsXG59KVxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZUhlbHBXaW5kb3dEaWFsb2dTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfb3ZlcmxheTogT3ZlcmxheSwgcHJpdmF0ZSBfdGREaWFsb2dTZXJ2aWNlOiBUZERpYWxvZ1NlcnZpY2UpIHt9XG5cbiAgb3Blbihjb25maWc6IElEcmFnZ2FibGVIZWxwV2luZG93RGlhbG9nU2VydmljZUNvbmZpZyk6IE1hdERpYWxvZ1JlZjxIZWxwV2luZG93Q29tcG9uZW50PiB7XG4gICAgY29uc3QgQ0RLX09WRVJMQVlfQ1VTVE9NX0NMQVNTOiBzdHJpbmcgPSAndGQtZHJhZ2dhYmxlLWhlbHAtd2luZG93LXdyYXBwZXInO1xuICAgIGNvbnN0IGRyYWdnYWJsZURpYWxvZzogTWF0RGlhbG9nUmVmPEhlbHBXaW5kb3dDb21wb25lbnQ+ID0gdGhpcy5fdGREaWFsb2dTZXJ2aWNlLm9wZW5EcmFnZ2FibGUoe1xuICAgICAgY29tcG9uZW50OiBIZWxwV2luZG93Q29tcG9uZW50LFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIGhhc0JhY2tkcm9wOiBmYWxzZSxcbiAgICAgICAgY2xvc2VPbk5hdmlnYXRpb246IHRydWUsXG4gICAgICAgIHBhbmVsQ2xhc3M6IENES19PVkVSTEFZX0NVU1RPTV9DTEFTUyxcbiAgICAgICAgcG9zaXRpb246IHsgYm90dG9tOiAnMCcsIHJpZ2h0OiAnMCcgfSxcbiAgICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMuX292ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ub29wKCksXG4gICAgICAgIGhlaWdodDogJzQ3NXB4JyxcbiAgICAgICAgd2lkdGg6ICczNjBweCcsXG4gICAgICAgIC4uLmNvbmZpZy5kaWFsb2dDb25maWcsXG4gICAgICB9LFxuICAgICAgZHJhZ0hhbmRsZVNlbGVjdG9yczogWycudGQtaGVscC13aW5kb3ctdG9vbGJhciddLFxuICAgICAgZHJhZ2dhYmxlQ2xhc3M6ICd0ZC1kcmFnZ2FibGUtaGVscC13aW5kb3cnLFxuICAgIH0pO1xuXG4gICAgZHJhZ2dhYmxlRGlhbG9nLmNvbXBvbmVudEluc3RhbmNlLml0ZW1zID0gY29uZmlnLml0ZW1zO1xuICAgIGRyYWdnYWJsZURpYWxvZy5jb21wb25lbnRJbnN0YW5jZS5sYWJlbHMgPSBjb25maWcubGFiZWxzO1xuICAgIGRyYWdnYWJsZURpYWxvZy5jb21wb25lbnRJbnN0YW5jZS50b29sYmFyQ29sb3IgPSAndG9vbGJhckNvbG9yJyBpbiBjb25maWcgPyBjb25maWcudG9vbGJhckNvbG9yIDogJ3ByaW1hcnknO1xuICAgIGRyYWdnYWJsZURpYWxvZy5jb21wb25lbnRJbnN0YW5jZS5jbG9zZWQuc3Vic2NyaWJlKCgpID0+IGRyYWdnYWJsZURpYWxvZy5jbG9zZSgpKTtcblxuICAgIHJldHVybiBkcmFnZ2FibGVEaWFsb2c7XG4gIH1cbn1cbiJdfQ==