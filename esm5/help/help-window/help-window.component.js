/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
var HelpWindowComponent = /** @class */ (function () {
    function HelpWindowComponent() {
        this.draggable = false;
        this.toolbarColor = 'primary';
        // outputs only for non-draggable toolbar
        this.closed = new EventEmitter();
    }
    Object.defineProperty(HelpWindowComponent.prototype, "height", {
        get: /**
         * @return {?}
         */
        function () {
            return 475;
        },
        enumerable: true,
        configurable: true
    });
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
    return HelpWindowComponent;
}());
export { HelpWindowComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC13aW5kb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9oZWxwLyIsInNvdXJjZXMiOlsiaGVscC13aW5kb3cvaGVscC13aW5kb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXZFO0lBQUE7UUFPVyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLGlCQUFZLEdBQWlCLFNBQVMsQ0FBQzs7UUFHdEMsV0FBTSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBSzVELENBQUM7SUFIQyxzQkFBSSx1Q0FBTTs7OztRQUFWO1lBQ0UsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDOzs7T0FBQTs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixpdEJBQTJDOztpQkFFNUM7Ozt3QkFFRSxLQUFLOzRCQUNMLEtBQUs7eUJBQ0wsS0FBSzsrQkFDTCxLQUFLO3lCQUdMLE1BQU07O0lBS1QsMEJBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQVpZLG1CQUFtQjs7O0lBQzlCLG9DQUFvQzs7SUFDcEMsd0NBQW9DOztJQUNwQyxxQ0FBNEM7O0lBQzVDLDJDQUFnRDs7SUFHaEQscUNBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElIZWxwTWVudURhdGFJdGVtLCBJSGVscFdpbmRvd0NvbXBvbmVudExhYmVscyB9IGZyb20gJy4uL2hlbHAudXRpbHMnO1xuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWhlbHAtd2luZG93JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlbHAtd2luZG93LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGVscC13aW5kb3cuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSGVscFdpbmRvd0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGl0ZW1zOiBJSGVscE1lbnVEYXRhSXRlbVtdO1xuICBASW5wdXQoKSBkcmFnZ2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbGFiZWxzOiBJSGVscFdpbmRvd0NvbXBvbmVudExhYmVscztcbiAgQElucHV0KCkgdG9vbGJhckNvbG9yOiBUaGVtZVBhbGV0dGUgPSAncHJpbWFyeSc7XG5cbiAgLy8gb3V0cHV0cyBvbmx5IGZvciBub24tZHJhZ2dhYmxlIHRvb2xiYXJcbiAgQE91dHB1dCgpIGNsb3NlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gNDc1O1xuICB9XG59XG4iXX0=