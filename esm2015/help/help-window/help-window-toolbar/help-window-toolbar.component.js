/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class HelpWindowToolbarComponent {
    constructor() {
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
                template: "<mat-toolbar\n  color=\"primary\"\n>\n  <mat-toolbar-row>\n    <div\n      layout=\"row\"\n      layout-align=\"start center\"\n      flex\n    >\n      <span\n        class=\"mat-title push-bottom-none\"\n        flex\n      >\n        {{ helpLabel }}\n      </span>\n      <!-- TODO: Resizing a drag-and-drop element was not working so removed minimize/maximize for now-->\n      <button\n        mat-icon-button\n        matTooltip=\"Close\"\n        (click)=\"closed.emit()\"\n      >\n        <mat-icon\n          [attr.aria-label]=\"closeLabel\"\n        >\n          close\n        </mat-icon>\n      </button>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n",
                styles: [""]
            }] }
];
HelpWindowToolbarComponent.propDecorators = {
    labels: [{ type: Input }],
    closed: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    HelpWindowToolbarComponent.prototype.labels;
    /** @type {?} */
    HelpWindowToolbarComponent.prototype.closed;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC13aW5kb3ctdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2hlbHAvIiwic291cmNlcyI6WyJoZWxwLXdpbmRvdy9oZWxwLXdpbmRvdy10b29sYmFyL2hlbHAtd2luZG93LXRvb2xiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXZFLE1BQU0sT0FBTywwQkFBMEI7SUFMdkM7UUFRWSxXQUFNLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7SUFTNUQsQ0FBQzs7OztJQVBDLElBQUksU0FBUztRQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDO0lBQ3JELENBQUM7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQztJQUN2RCxDQUFDOzs7WUFoQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLHlxQkFBbUQ7O2FBRXBEOzs7cUJBRUUsS0FBSztxQkFFTCxNQUFNOzs7O0lBRlAsNENBQW1EOztJQUVuRCw0Q0FBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUhlbHBXaW5kb3dUb29sYmFyQ29tcG9uZW50TGFiZWxzIH0gZnJvbSAnLi4vLi4vaGVscC51dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWhlbHAtd2luZG93LXRvb2xiYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVscC13aW5kb3ctdG9vbGJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hlbHAtd2luZG93LXRvb2xiYXIuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSGVscFdpbmRvd1Rvb2xiYXJDb21wb25lbnQge1xuICBASW5wdXQoKSBsYWJlbHM6IElIZWxwV2luZG93VG9vbGJhckNvbXBvbmVudExhYmVscztcblxuICBAT3V0cHV0KCkgY2xvc2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZ2V0IGhlbHBMYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAodGhpcy5sYWJlbHMgJiYgdGhpcy5sYWJlbHMuaGVscCkgfHwgJ0hlbHAnO1xuICB9XG5cbiAgZ2V0IGNsb3NlTGFiZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKHRoaXMubGFiZWxzICYmIHRoaXMubGFiZWxzLmNsb3NlKSB8fCAnQ2xvc2UnO1xuICB9XG59XG4iXX0=