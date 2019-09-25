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
                    template: "<div>\n  <td-help-window-toolbar\n    class=\"td-draggable-help-window-toolbar\"\n    [labels]=\"labels\"\n    [toolbarColor]=\"toolbarColor\"\n    (closed)=\"closed.emit()\"\n  >\n  </td-help-window-toolbar>\n\n  <td-help [items]=\"items\" [labels]=\"labels\" [style.height.px]=\"height\"> </td-help>\n</div>\n",
                    styles: [":host{display:inline-block}td-help{display:block;width:360px;max-width:100vw;max-height:100vh;overflow-y:auto}.td-draggable-help-window-toolbar{cursor:move}::ng-deep.draggable-dialog-wrapper>.mat-dialog-container{padding:0}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC13aW5kb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9oZWxwLyIsInNvdXJjZXMiOlsiaGVscC13aW5kb3cvaGVscC13aW5kb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXZFO0lBQUE7UUFPVyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLGlCQUFZLEdBQWlCLFNBQVMsQ0FBQzs7UUFHdEMsV0FBTSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBSzVELENBQUM7SUFIQyxzQkFBSSx1Q0FBTTs7OztRQUFWO1lBQ0UsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDOzs7T0FBQTs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixtVUFBMkM7O2lCQUU1Qzs7O3dCQUVFLEtBQUs7NEJBQ0wsS0FBSzt5QkFDTCxLQUFLOytCQUNMLEtBQUs7eUJBR0wsTUFBTTs7SUFLVCwwQkFBQztDQUFBLEFBakJELElBaUJDO1NBWlksbUJBQW1COzs7SUFDOUIsb0NBQW9DOztJQUNwQyx3Q0FBb0M7O0lBQ3BDLHFDQUE0Qzs7SUFDNUMsMkNBQWdEOztJQUdoRCxxQ0FBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUhlbHBNZW51RGF0YUl0ZW0sIElIZWxwV2luZG93Q29tcG9uZW50TGFiZWxzIH0gZnJvbSAnLi4vaGVscC51dGlscyc7XG5pbXBvcnQgeyBUaGVtZVBhbGV0dGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtaGVscC13aW5kb3cnLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVscC13aW5kb3cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oZWxwLXdpbmRvdy5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBIZWxwV2luZG93Q29tcG9uZW50IHtcbiAgQElucHV0KCkgaXRlbXM6IElIZWxwTWVudURhdGFJdGVtW107XG4gIEBJbnB1dCgpIGRyYWdnYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBsYWJlbHM6IElIZWxwV2luZG93Q29tcG9uZW50TGFiZWxzO1xuICBASW5wdXQoKSB0b29sYmFyQ29sb3I6IFRoZW1lUGFsZXR0ZSA9ICdwcmltYXJ5JztcblxuICAvLyBvdXRwdXRzIG9ubHkgZm9yIG5vbi1kcmFnZ2FibGUgdG9vbGJhclxuICBAT3V0cHV0KCkgY2xvc2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiA0NzU7XG4gIH1cbn1cbiJdfQ==