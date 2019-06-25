/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var HelpWindowToolbarComponent = /** @class */ (function () {
    function HelpWindowToolbarComponent() {
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
                    template: "<mat-toolbar\n  color=\"primary\"\n>\n  <mat-toolbar-row>\n    <div\n      layout=\"row\"\n      layout-align=\"start center\"\n      flex\n    >\n      <span\n        class=\"mat-title push-bottom-none\"\n        flex\n      >\n        {{ helpLabel }}\n      </span>\n      <!-- TODO: Resizing a drag-and-drop element was not working so removed minimize/maximize for now-->\n      <button\n        mat-icon-button\n        matTooltip=\"Close\"\n        (click)=\"closed.emit()\"\n      >\n        <mat-icon\n          [attr.aria-label]=\"closeLabel\"\n        >\n          close\n        </mat-icon>\n      </button>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n",
                    styles: [""]
                }] }
    ];
    HelpWindowToolbarComponent.propDecorators = {
        labels: [{ type: Input }],
        closed: [{ type: Output }]
    };
    return HelpWindowToolbarComponent;
}());
export { HelpWindowToolbarComponent };
if (false) {
    /** @type {?} */
    HelpWindowToolbarComponent.prototype.labels;
    /** @type {?} */
    HelpWindowToolbarComponent.prototype.closed;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC13aW5kb3ctdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2hlbHAvIiwic291cmNlcyI6WyJoZWxwLXdpbmRvdy9oZWxwLXdpbmRvdy10b29sYmFyL2hlbHAtd2luZG93LXRvb2xiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3ZFO0lBQUE7UUFRWSxXQUFNLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7SUFTNUQsQ0FBQztJQVBDLHNCQUFJLGlEQUFTOzs7O1FBQWI7WUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQztRQUNyRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGtEQUFVOzs7O1FBQWQ7WUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQztRQUN2RCxDQUFDOzs7T0FBQTs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyx5cUJBQW1EOztpQkFFcEQ7Ozt5QkFFRSxLQUFLO3lCQUVMLE1BQU07O0lBU1QsaUNBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQVpZLDBCQUEwQjs7O0lBQ3JDLDRDQUFtRDs7SUFFbkQsNENBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElIZWxwV2luZG93VG9vbGJhckNvbXBvbmVudExhYmVscyB9IGZyb20gJy4uLy4uL2hlbHAudXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1oZWxwLXdpbmRvdy10b29sYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlbHAtd2luZG93LXRvb2xiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oZWxwLXdpbmRvdy10b29sYmFyLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEhlbHBXaW5kb3dUb29sYmFyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbGFiZWxzOiBJSGVscFdpbmRvd1Rvb2xiYXJDb21wb25lbnRMYWJlbHM7XG5cbiAgQE91dHB1dCgpIGNsb3NlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGdldCBoZWxwTGFiZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKHRoaXMubGFiZWxzICYmIHRoaXMubGFiZWxzLmhlbHApIHx8ICdIZWxwJztcbiAgfVxuXG4gIGdldCBjbG9zZUxhYmVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICh0aGlzLmxhYmVscyAmJiB0aGlzLmxhYmVscy5jbG9zZSkgfHwgJ0Nsb3NlJztcbiAgfVxufVxuIl19