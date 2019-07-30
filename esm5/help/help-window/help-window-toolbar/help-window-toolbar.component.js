/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var HelpWindowToolbarComponent = /** @class */ (function () {
    function HelpWindowToolbarComponent() {
        this.toolbarColor = 'primary';
        this.closed = new EventEmitter();
    }
    Object.defineProperty(HelpWindowToolbarComponent.prototype, "helpLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.labels && this.labels.help) || 'Help';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelpWindowToolbarComponent.prototype, "closeLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.labels && this.labels.close) || 'Close';
        },
        enumerable: true,
        configurable: true
    });
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
    return HelpWindowToolbarComponent;
}());
export { HelpWindowToolbarComponent };
if (false) {
    /** @type {?} */
    HelpWindowToolbarComponent.prototype.labels;
    /** @type {?} */
    HelpWindowToolbarComponent.prototype.toolbarColor;
    /** @type {?} */
    HelpWindowToolbarComponent.prototype.closed;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC13aW5kb3ctdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2hlbHAvIiwic291cmNlcyI6WyJoZWxwLXdpbmRvdy9oZWxwLXdpbmRvdy10b29sYmFyL2hlbHAtd2luZG93LXRvb2xiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXZFO0lBQUE7UUFPVyxpQkFBWSxHQUFpQixTQUFTLENBQUM7UUFFdEMsV0FBTSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBUzVELENBQUM7SUFQQyxzQkFBSSxpREFBUzs7OztRQUFiO1lBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUM7UUFDckQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrREFBVTs7OztRQUFkO1lBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUM7UUFDdkQsQ0FBQzs7O09BQUE7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsOGpCQUFtRDs7aUJBRXBEOzs7eUJBRUUsS0FBSzsrQkFDTCxLQUFLO3lCQUVMLE1BQU07O0lBU1QsaUNBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWJZLDBCQUEwQjs7O0lBQ3JDLDRDQUFtRDs7SUFDbkQsa0RBQWdEOztJQUVoRCw0Q0FBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUhlbHBXaW5kb3dUb29sYmFyQ29tcG9uZW50TGFiZWxzIH0gZnJvbSAnLi4vLi4vaGVscC51dGlscyc7XG5pbXBvcnQgeyBUaGVtZVBhbGV0dGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtaGVscC13aW5kb3ctdG9vbGJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWxwLXdpbmRvdy10b29sYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGVscC13aW5kb3ctdG9vbGJhci5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBIZWxwV2luZG93VG9vbGJhckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGxhYmVsczogSUhlbHBXaW5kb3dUb29sYmFyQ29tcG9uZW50TGFiZWxzO1xuICBASW5wdXQoKSB0b29sYmFyQ29sb3I6IFRoZW1lUGFsZXR0ZSA9ICdwcmltYXJ5JztcblxuICBAT3V0cHV0KCkgY2xvc2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZ2V0IGhlbHBMYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAodGhpcy5sYWJlbHMgJiYgdGhpcy5sYWJlbHMuaGVscCkgfHwgJ0hlbHAnO1xuICB9XG5cbiAgZ2V0IGNsb3NlTGFiZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKHRoaXMubGFiZWxzICYmIHRoaXMubGFiZWxzLmNsb3NlKSB8fCAnQ2xvc2UnO1xuICB9XG59XG4iXX0=