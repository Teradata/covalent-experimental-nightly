/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
export class HelpWindowComponent {
    constructor() {
        this.draggable = false;
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
                template: "<div *ngIf=\"draggable\" cdkDrag cdkDragRootElement=\".cdk-overlay-pane\" cdkDragBoundary=\".cdk-overlay-container\">\n  <td-help-window-toolbar\n    cdkDragHandle\n    class=\"td-draggable-help-window-toolbar\"\n    [labels]=\"labels\"\n    (closed)=\"closed.emit()\"\n  >\n  </td-help-window-toolbar>\n\n  <td-help [items]=\"items\" [labels]=\"labels\" [style.height.px]=\"height\"> </td-help>\n</div>\n\n<div *ngIf=\"!draggable\">\n  <td-help-window-toolbar [labels]=\"labels\" (closed)=\"closed.emit()\"> </td-help-window-toolbar>\n\n  <td-help [style.height.px]=\"height\" [items]=\"items\" [labels]=\"labels\"> </td-help>\n</div>\n",
                styles: [":host{display:inline-block}td-help{display:block;width:360px;max-width:100vw;max-height:100vh;overflow-y:auto}.td-draggable-help-window-toolbar{cursor:move}"]
            }] }
];
HelpWindowComponent.propDecorators = {
    items: [{ type: Input }],
    draggable: [{ type: Input }],
    labels: [{ type: Input }],
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
    HelpWindowComponent.prototype.closed;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC13aW5kb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9oZWxwLyIsInNvdXJjZXMiOlsiaGVscC13aW5kb3cvaGVscC13aW5kb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXZFLE1BQU0sT0FBTyxtQkFBbUI7SUFMaEM7UUFPVyxjQUFTLEdBQVksS0FBSyxDQUFDOztRQUkxQixXQUFNLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7SUFLNUQsQ0FBQzs7OztJQUhDLElBQUksTUFBTTtRQUNSLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLHlvQkFBMkM7O2FBRTVDOzs7b0JBRUUsS0FBSzt3QkFDTCxLQUFLO3FCQUNMLEtBQUs7cUJBR0wsTUFBTTs7OztJQUxQLG9DQUFvQzs7SUFDcEMsd0NBQW9DOztJQUNwQyxxQ0FBNEM7O0lBRzVDLHFDQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJSGVscE1lbnVEYXRhSXRlbSwgSUhlbHBXaW5kb3dDb21wb25lbnRMYWJlbHMgfSBmcm9tICcuLi9oZWxwLnV0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtaGVscC13aW5kb3cnLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVscC13aW5kb3cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oZWxwLXdpbmRvdy5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBIZWxwV2luZG93Q29tcG9uZW50IHtcbiAgQElucHV0KCkgaXRlbXM6IElIZWxwTWVudURhdGFJdGVtW107XG4gIEBJbnB1dCgpIGRyYWdnYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBsYWJlbHM6IElIZWxwV2luZG93Q29tcG9uZW50TGFiZWxzO1xuXG4gIC8vIG91dHB1dHMgb25seSBmb3Igbm9uLWRyYWdnYWJsZSB0b29sYmFyXG4gIEBPdXRwdXQoKSBjbG9zZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIDQ3NTtcbiAgfVxufVxuIl19