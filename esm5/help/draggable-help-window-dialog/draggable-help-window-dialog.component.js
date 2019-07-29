/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
var DraggableHelpWindowDialogComponent = /** @class */ (function () {
    function DraggableHelpWindowDialogComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    /**
     * @return {?}
     */
    DraggableHelpWindowDialogComponent.prototype.handleClosed = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    DraggableHelpWindowDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-draggable-help-window-dialog',
                    template: "<td-help-window [items]=\"data.items\" [labels]=\"data.labels\" [draggable]=\"true\" (closed)=\"handleClosed()\">\n</td-help-window>\n",
                    styles: ["::ng-deep.draggable-dialog-wrapper>.mat-dialog-container{padding:0}"]
                }] }
    ];
    /** @nocollapse */
    DraggableHelpWindowDialogComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
        { type: MatDialogRef }
    ]; };
    return DraggableHelpWindowDialogComponent;
}());
export { DraggableHelpWindowDialogComponent };
if (false) {
    /** @type {?} */
    DraggableHelpWindowDialogComponent.prototype.data;
    /** @type {?} */
    DraggableHelpWindowDialogComponent.prototype.dialogRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLWhlbHAtd2luZG93LWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2hlbHAvIiwic291cmNlcyI6WyJkcmFnZ2FibGUtaGVscC13aW5kb3ctZGlhbG9nL2RyYWdnYWJsZS1oZWxwLXdpbmRvdy1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXpFO0lBTUUsNENBQ2tDLElBQVMsRUFDbEMsU0FBMkQ7UUFEbEMsU0FBSSxHQUFKLElBQUksQ0FBSztRQUNsQyxjQUFTLEdBQVQsU0FBUyxDQUFrRDtJQUNqRSxDQUFDOzs7O0lBRUoseURBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOztnQkFiRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtDQUFrQztvQkFDNUMsa0pBQTREOztpQkFFN0Q7Ozs7Z0RBR0ksTUFBTSxTQUFDLGVBQWU7Z0JBVEQsWUFBWTs7SUFnQnRDLHlDQUFDO0NBQUEsQUFkRCxJQWNDO1NBVFksa0NBQWtDOzs7SUFFM0Msa0RBQXlDOztJQUN6Qyx1REFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZHJhZ2dhYmxlLWhlbHAtd2luZG93LWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kcmFnZ2FibGUtaGVscC13aW5kb3ctZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZHJhZ2dhYmxlLWhlbHAtd2luZG93LWRpYWxvZy5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVIZWxwV2luZG93RGlhbG9nQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnksXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERyYWdnYWJsZUhlbHBXaW5kb3dEaWFsb2dDb21wb25lbnQ+LFxuICApIHt9XG5cbiAgaGFuZGxlQ2xvc2VkKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn1cbiJdfQ==