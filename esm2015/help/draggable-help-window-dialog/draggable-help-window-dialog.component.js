/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
export class DraggableHelpWindowDialogComponent {
    /**
     * @param {?} data
     * @param {?} dialogRef
     */
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    /**
     * @return {?}
     */
    handleClosed() {
        this.dialogRef.close();
    }
}
DraggableHelpWindowDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-draggable-help-window-dialog',
                template: "<td-help-window\n  [items]=\"data.items\"\n  [labels]=\"data.labels\"\n  [draggable]=\"true\"\n  [toolbarColor]=\"data.toolbarColor\"\n  (closed)=\"handleClosed()\"\n>\n</td-help-window>\n",
                styles: ["::ng-deep.draggable-dialog-wrapper>.mat-dialog-container{padding:0}"]
            }] }
];
/** @nocollapse */
DraggableHelpWindowDialogComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
    { type: MatDialogRef }
];
if (false) {
    /** @type {?} */
    DraggableHelpWindowDialogComponent.prototype.data;
    /** @type {?} */
    DraggableHelpWindowDialogComponent.prototype.dialogRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLWhlbHAtd2luZG93LWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2hlbHAvIiwic291cmNlcyI6WyJkcmFnZ2FibGUtaGVscC13aW5kb3ctZGlhbG9nL2RyYWdnYWJsZS1oZWxwLXdpbmRvdy1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBT3pFLE1BQU0sT0FBTyxrQ0FBa0M7Ozs7O0lBQzdDLFlBQ2tDLElBQVMsRUFDbEMsU0FBMkQ7UUFEbEMsU0FBSSxHQUFKLElBQUksQ0FBSztRQUNsQyxjQUFTLEdBQVQsU0FBUyxDQUFrRDtJQUNqRSxDQUFDOzs7O0lBRUosWUFBWTtRQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQ0FBa0M7Z0JBQzVDLHdNQUE0RDs7YUFFN0Q7Ozs7NENBR0ksTUFBTSxTQUFDLGVBQWU7WUFURCxZQUFZOzs7O0lBU2xDLGtEQUF5Qzs7SUFDekMsdURBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWRyYWdnYWJsZS1oZWxwLXdpbmRvdy1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vZHJhZ2dhYmxlLWhlbHAtd2luZG93LWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RyYWdnYWJsZS1oZWxwLXdpbmRvdy1kaWFsb2cuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlSGVscFdpbmRvd0RpYWxvZ0NvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55LFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxEcmFnZ2FibGVIZWxwV2luZG93RGlhbG9nQ29tcG9uZW50PixcbiAgKSB7fVxuXG4gIGhhbmRsZUNsb3NlZCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG59XG4iXX0=