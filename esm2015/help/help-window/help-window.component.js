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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC13aW5kb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9oZWxwLyIsInNvdXJjZXMiOlsiaGVscC13aW5kb3cvaGVscC13aW5kb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU3ZFLE1BQU0sT0FBTyxtQkFBbUI7SUFMaEM7UUFPVyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLGlCQUFZLEdBQWlCLFNBQVMsQ0FBQzs7UUFHdEMsV0FBTSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBSzVELENBQUM7Ozs7SUFIQyxJQUFJLE1BQU07UUFDUixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsbVVBQTJDOzthQUU1Qzs7O29CQUVFLEtBQUs7d0JBQ0wsS0FBSztxQkFDTCxLQUFLOzJCQUNMLEtBQUs7cUJBR0wsTUFBTTs7OztJQU5QLG9DQUFvQzs7SUFDcEMsd0NBQW9DOztJQUNwQyxxQ0FBNEM7O0lBQzVDLDJDQUFnRDs7SUFHaEQscUNBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElIZWxwTWVudURhdGFJdGVtLCBJSGVscFdpbmRvd0NvbXBvbmVudExhYmVscyB9IGZyb20gJy4uL2hlbHAudXRpbHMnO1xuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWhlbHAtd2luZG93JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlbHAtd2luZG93LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGVscC13aW5kb3cuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSGVscFdpbmRvd0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGl0ZW1zOiBJSGVscE1lbnVEYXRhSXRlbVtdO1xuICBASW5wdXQoKSBkcmFnZ2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbGFiZWxzOiBJSGVscFdpbmRvd0NvbXBvbmVudExhYmVscztcbiAgQElucHV0KCkgdG9vbGJhckNvbG9yOiBUaGVtZVBhbGV0dGUgPSAncHJpbWFyeSc7XG5cbiAgLy8gb3V0cHV0cyBvbmx5IGZvciBub24tZHJhZ2dhYmxlIHRvb2xiYXJcbiAgQE91dHB1dCgpIGNsb3NlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gNDc1O1xuICB9XG59XG4iXX0=