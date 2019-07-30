/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
export class HelpWindowComponent {
    constructor() {
        this.draggable = false;
        this.toolbarColor = 'primary';
        // outputs only for non-draggable toolbar
        this.closed = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get height() {
        return 475;
    }
}
HelpWindowComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-help-window',
                template: "<div *ngIf=\"draggable\" cdkDrag cdkDragRootElement=\".cdk-overlay-pane\" cdkDragBoundary=\".cdk-overlay-container\">\n  <td-help-window-toolbar\n    cdkDragHandle\n    class=\"td-draggable-help-window-toolbar\"\n    [labels]=\"labels\"\n    [toolbarColor]=\"toolbarColor\"\n    (closed)=\"closed.emit()\"\n  >\n  </td-help-window-toolbar>\n\n  <td-help [items]=\"items\" [labels]=\"labels\" [style.height.px]=\"height\"> </td-help>\n</div>\n\n<div *ngIf=\"!draggable\">\n  <td-help-window-toolbar [labels]=\"labels\" [toolbarColor]=\"toolbarColor\" (closed)=\"closed.emit()\">\n  </td-help-window-toolbar>\n\n  <td-help [style.height.px]=\"height\" [items]=\"items\" [labels]=\"labels\"> </td-help>\n</div>\n",
                styles: [":host{display:inline-block}td-help{display:block;width:360px;max-width:100vw;max-height:100vh;overflow-y:auto}.td-draggable-help-window-toolbar{cursor:move}"]
            }] }
];
HelpWindowComponent.propDecorators = {
    items: [{ type: Input }],
    draggable: [{ type: Input }],
    labels: [{ type: Input }],
    toolbarColor: [{ type: Input }],
    closed: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    HelpWindowComponent.prototype.items;
    /** @type {?} */
    HelpWindowComponent.prototype.draggable;
    /** @type {?} */
    HelpWindowComponent.prototype.labels;
    /** @type {?} */
    HelpWindowComponent.prototype.toolbarColor;
    /** @type {?} */
    HelpWindowComponent.prototype.closed;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC13aW5kb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9oZWxwLyIsInNvdXJjZXMiOlsiaGVscC13aW5kb3cvaGVscC13aW5kb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU3ZFLE1BQU0sT0FBTyxtQkFBbUI7SUFMaEM7UUFPVyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLGlCQUFZLEdBQWlCLFNBQVMsQ0FBQzs7UUFHdEMsV0FBTSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBSzVELENBQUM7Ozs7SUFIQyxJQUFJLE1BQU07UUFDUixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsaXRCQUEyQzs7YUFFNUM7OztvQkFFRSxLQUFLO3dCQUNMLEtBQUs7cUJBQ0wsS0FBSzsyQkFDTCxLQUFLO3FCQUdMLE1BQU07Ozs7SUFOUCxvQ0FBb0M7O0lBQ3BDLHdDQUFvQzs7SUFDcEMscUNBQTRDOztJQUM1QywyQ0FBZ0Q7O0lBR2hELHFDQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJSGVscE1lbnVEYXRhSXRlbSwgSUhlbHBXaW5kb3dDb21wb25lbnRMYWJlbHMgfSBmcm9tICcuLi9oZWxwLnV0aWxzJztcbmltcG9ydCB7IFRoZW1lUGFsZXR0ZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1oZWxwLXdpbmRvdycsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWxwLXdpbmRvdy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hlbHAtd2luZG93LmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEhlbHBXaW5kb3dDb21wb25lbnQge1xuICBASW5wdXQoKSBpdGVtczogSUhlbHBNZW51RGF0YUl0ZW1bXTtcbiAgQElucHV0KCkgZHJhZ2dhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxhYmVsczogSUhlbHBXaW5kb3dDb21wb25lbnRMYWJlbHM7XG4gIEBJbnB1dCgpIHRvb2xiYXJDb2xvcjogVGhlbWVQYWxldHRlID0gJ3ByaW1hcnknO1xuXG4gIC8vIG91dHB1dHMgb25seSBmb3Igbm9uLWRyYWdnYWJsZSB0b29sYmFyXG4gIEBPdXRwdXQoKSBjbG9zZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIDQ3NTtcbiAgfVxufVxuIl19