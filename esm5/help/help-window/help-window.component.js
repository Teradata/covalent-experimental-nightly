/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
var HelpWindowComponent = /** @class */ (function () {
    function HelpWindowComponent() {
        this.draggable = false;
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
                    template: "<div\n  *ngIf=\"draggable\"\n\n  cdkDrag\n  cdkDragRootElement=\".cdk-overlay-pane\"\n  cdkDragBoundary=\".cdk-overlay-container\"\n>\n  <td-help-window-toolbar\n    cdkDragHandle\n\n    class=\"td-draggable-help-window-toolbar\"\n\n    [labels]=\"labels\"\n\n    (closed)=\"closed.emit()\"\n  >\n</td-help-window-toolbar>\n\n  <td-help\n    [items]=\"items\"\n    [labels]=\"labels\"\n    [style.height.px]=\"height\"\n  >\n  </td-help>\n</div>\n\n\n<div\n  *ngIf=\"!draggable\"\n>\n  <td-help-window-toolbar\n    [labels]=\"labels\"\n\n    (closed)=\"closed.emit()\"\n  >\n</td-help-window-toolbar>\n\n  <td-help\n    [style.height.px]=\"height\"\n    [items]=\"items\"\n    [labels]=\"labels\"\n  >\n  </td-help>\n</div>\n",
                    styles: [":host{display:inline-block}td-help{display:block;width:360px;max-width:100vw;max-height:100vh;overflow-y:auto}.td-draggable-help-window-toolbar{cursor:move}"]
                }] }
    ];
    HelpWindowComponent.propDecorators = {
        items: [{ type: Input }],
        draggable: [{ type: Input }],
        labels: [{ type: Input }],
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
    HelpWindowComponent.prototype.closed;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC13aW5kb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9oZWxwLyIsInNvdXJjZXMiOlsiaGVscC13aW5kb3cvaGVscC13aW5kb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3ZFO0lBQUE7UUFPVyxjQUFTLEdBQVksS0FBSyxDQUFDOztRQUkxQixXQUFNLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7SUFLNUQsQ0FBQztJQUhDLHNCQUFJLHVDQUFNOzs7O1FBQVY7WUFDRSxPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUM7OztPQUFBOztnQkFmRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsaXVCQUEyQzs7aUJBRTVDOzs7d0JBRUUsS0FBSzs0QkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBR0wsTUFBTTs7SUFLVCwwQkFBQztDQUFBLEFBaEJELElBZ0JDO1NBWFksbUJBQW1COzs7SUFDOUIsb0NBQW9DOztJQUNwQyx3Q0FBb0M7O0lBQ3BDLHFDQUE0Qzs7SUFHNUMscUNBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElIZWxwTWVudURhdGFJdGVtLCBJSGVscFdpbmRvd0NvbXBvbmVudExhYmVscyB9IGZyb20gJy4uL2hlbHAudXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1oZWxwLXdpbmRvdycsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWxwLXdpbmRvdy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hlbHAtd2luZG93LmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEhlbHBXaW5kb3dDb21wb25lbnQge1xuICBASW5wdXQoKSBpdGVtczogSUhlbHBNZW51RGF0YUl0ZW1bXTtcbiAgQElucHV0KCkgZHJhZ2dhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxhYmVsczogSUhlbHBXaW5kb3dDb21wb25lbnRMYWJlbHM7XG5cbiAgLy8gb3V0cHV0cyBvbmx5IGZvciBub24tZHJhZ2dhYmxlIHRvb2xiYXJcbiAgQE91dHB1dCgpIGNsb3NlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gNDc1O1xuICB9XG59XG4iXX0=