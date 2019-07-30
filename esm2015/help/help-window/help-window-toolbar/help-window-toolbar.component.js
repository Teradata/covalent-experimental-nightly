/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class HelpWindowToolbarComponent {
    constructor() {
        this.toolbarColor = 'primary';
        this.closed = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get helpLabel() {
        return (this.labels && this.labels.help) || 'Help';
    }
    /**
     * @return {?}
     */
    get closeLabel() {
        return (this.labels && this.labels.close) || 'Close';
    }
}
HelpWindowToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-help-window-toolbar',
                template: "<mat-toolbar [color]=\"toolbarColor\">\n  <mat-toolbar-row>\n    <div layout=\"row\" layout-align=\"start center\" flex>\n      <span class=\"mat-title push-bottom-none\" flex>\n        {{ helpLabel }}\n      </span>\n      <!-- TODO: Resizing a drag-and-drop element was not working so removed minimize/maximize for now-->\n      <button mat-icon-button matTooltip=\"Close\" (click)=\"closed.emit()\">\n        <mat-icon [attr.aria-label]=\"closeLabel\">\n          close\n        </mat-icon>\n      </button>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n",
                styles: [""]
            }] }
];
HelpWindowToolbarComponent.propDecorators = {
    labels: [{ type: Input }],
    toolbarColor: [{ type: Input }],
    closed: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    HelpWindowToolbarComponent.prototype.labels;
    /** @type {?} */
    HelpWindowToolbarComponent.prototype.toolbarColor;
    /** @type {?} */
    HelpWindowToolbarComponent.prototype.closed;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC13aW5kb3ctdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2hlbHAvIiwic291cmNlcyI6WyJoZWxwLXdpbmRvdy9oZWxwLXdpbmRvdy10b29sYmFyL2hlbHAtd2luZG93LXRvb2xiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU3ZFLE1BQU0sT0FBTywwQkFBMEI7SUFMdkM7UUFPVyxpQkFBWSxHQUFpQixTQUFTLENBQUM7UUFFdEMsV0FBTSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBUzVELENBQUM7Ozs7SUFQQyxJQUFJLFNBQVM7UUFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQztJQUNyRCxDQUFDOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUM7SUFDdkQsQ0FBQzs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyw4akJBQW1EOzthQUVwRDs7O3FCQUVFLEtBQUs7MkJBQ0wsS0FBSztxQkFFTCxNQUFNOzs7O0lBSFAsNENBQW1EOztJQUNuRCxrREFBZ0Q7O0lBRWhELDRDQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJSGVscFdpbmRvd1Rvb2xiYXJDb21wb25lbnRMYWJlbHMgfSBmcm9tICcuLi8uLi9oZWxwLnV0aWxzJztcbmltcG9ydCB7IFRoZW1lUGFsZXR0ZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1oZWxwLXdpbmRvdy10b29sYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlbHAtd2luZG93LXRvb2xiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oZWxwLXdpbmRvdy10b29sYmFyLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEhlbHBXaW5kb3dUb29sYmFyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbGFiZWxzOiBJSGVscFdpbmRvd1Rvb2xiYXJDb21wb25lbnRMYWJlbHM7XG4gIEBJbnB1dCgpIHRvb2xiYXJDb2xvcjogVGhlbWVQYWxldHRlID0gJ3ByaW1hcnknO1xuXG4gIEBPdXRwdXQoKSBjbG9zZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBnZXQgaGVscExhYmVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICh0aGlzLmxhYmVscyAmJiB0aGlzLmxhYmVscy5oZWxwKSB8fCAnSGVscCc7XG4gIH1cblxuICBnZXQgY2xvc2VMYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAodGhpcy5sYWJlbHMgJiYgdGhpcy5sYWJlbHMuY2xvc2UpIHx8ICdDbG9zZSc7XG4gIH1cbn1cbiJdfQ==