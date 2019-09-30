/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { DEFAULT_HELP_WINDOW_COMP_LABELS, } from '../help.utils';
var HelpWindowComponent = /** @class */ (function () {
    function HelpWindowComponent() {
        this.toolbarColor = 'primary';
        this.closed = new EventEmitter();
    }
    Object.defineProperty(HelpWindowComponent.prototype, "helpComponentLabels", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.labels) {
                var _a = this.labels, goHome = _a.goHome, goBack = _a.goBack, emptyState = _a.emptyState;
                return {
                    goHome: goHome,
                    goBack: goBack,
                    emptyState: emptyState,
                };
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelpWindowComponent.prototype, "helpLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.labels && this.labels.help) || DEFAULT_HELP_WINDOW_COMP_LABELS.help;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelpWindowComponent.prototype, "closeLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.labels && this.labels.close) || DEFAULT_HELP_WINDOW_COMP_LABELS.close;
        },
        enumerable: true,
        configurable: true
    });
    HelpWindowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-help-window',
                    template: "<mat-toolbar [color]=\"toolbarColor\" class=\"td-help-window-toolbar\">\n  <mat-toolbar-row>\n    <div layout=\"row\" layout-align=\"start center\" flex>\n      <span class=\"mat-title push-bottom-none\" flex>\n        {{ helpLabel }}\n      </span>\n      <!-- TODO: Resizing a drag-and-drop element was not working so removed minimize/maximize for now-->\n      <button mat-icon-button matTooltip=\"Close\" (click)=\"closed.emit()\" class=\"td-help-window-close\">\n        <mat-icon [attr.aria-label]=\"closeLabel\">\n          close\n        </mat-icon>\n      </button>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<td-help [items]=\"items\" [labels]=\"helpComponentLabels\"> </td-help>\n",
                    styles: [":host{height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host.td-draggable-help-window .td-help-window-toolbar{cursor:move}::ng-deep .td-draggable-help-window-wrapper>.mat-dialog-container{padding:0}"]
                }] }
    ];
    HelpWindowComponent.propDecorators = {
        items: [{ type: Input }],
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
    HelpWindowComponent.prototype.labels;
    /** @type {?} */
    HelpWindowComponent.prototype.toolbarColor;
    /** @type {?} */
    HelpWindowComponent.prototype.closed;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC13aW5kb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9oZWxwLyIsInNvdXJjZXMiOlsiaGVscC13aW5kb3cvaGVscC13aW5kb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFJTCwrQkFBK0IsR0FDaEMsTUFBTSxlQUFlLENBQUM7QUFHdkI7SUFBQTtRQVFXLGlCQUFZLEdBQWlCLFNBQVMsQ0FBQztRQUV0QyxXQUFNLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7SUFtQjVELENBQUM7SUFqQkMsc0JBQUksb0RBQW1COzs7O1FBQXZCO1lBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNULElBQUEsZ0JBQXdFLEVBQXRFLGtCQUFNLEVBQUUsa0JBQU0sRUFBRSwwQkFBc0Q7Z0JBQzlFLE9BQU87b0JBQ0wsTUFBTSxRQUFBO29CQUNOLE1BQU0sUUFBQTtvQkFDTixVQUFVLFlBQUE7aUJBQ1gsQ0FBQzthQUNIO1FBQ0gsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSwwQ0FBUzs7OztRQUFiO1lBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSwrQkFBK0IsQ0FBQyxJQUFJLENBQUM7UUFDbkYsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwyQ0FBVTs7OztRQUFkO1lBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSwrQkFBK0IsQ0FBQyxLQUFLLENBQUM7UUFDckYsQ0FBQzs7O09BQUE7O2dCQTVCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIseXNCQUEyQzs7aUJBRTVDOzs7d0JBRUUsS0FBSzt5QkFDTCxLQUFLOytCQUNMLEtBQUs7eUJBRUwsTUFBTTs7SUFtQlQsMEJBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQXhCWSxtQkFBbUI7OztJQUM5QixvQ0FBb0M7O0lBQ3BDLHFDQUE0Qzs7SUFDNUMsMkNBQWdEOztJQUVoRCxxQ0FBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSUhlbHBNZW51RGF0YUl0ZW0sXG4gIElIZWxwV2luZG93Q29tcG9uZW50TGFiZWxzLFxuICBJSGVscENvbXBvbmVudExhYmVscyxcbiAgREVGQVVMVF9IRUxQX1dJTkRPV19DT01QX0xBQkVMUyxcbn0gZnJvbSAnLi4vaGVscC51dGlscyc7XG5pbXBvcnQgeyBUaGVtZVBhbGV0dGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtaGVscC13aW5kb3cnLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVscC13aW5kb3cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oZWxwLXdpbmRvdy5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBIZWxwV2luZG93Q29tcG9uZW50IHtcbiAgQElucHV0KCkgaXRlbXM6IElIZWxwTWVudURhdGFJdGVtW107XG4gIEBJbnB1dCgpIGxhYmVsczogSUhlbHBXaW5kb3dDb21wb25lbnRMYWJlbHM7XG4gIEBJbnB1dCgpIHRvb2xiYXJDb2xvcjogVGhlbWVQYWxldHRlID0gJ3ByaW1hcnknO1xuXG4gIEBPdXRwdXQoKSBjbG9zZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBnZXQgaGVscENvbXBvbmVudExhYmVscygpOiBJSGVscENvbXBvbmVudExhYmVscyB7XG4gICAgaWYgKHRoaXMubGFiZWxzKSB7XG4gICAgICBjb25zdCB7IGdvSG9tZSwgZ29CYWNrLCBlbXB0eVN0YXRlIH06IElIZWxwV2luZG93Q29tcG9uZW50TGFiZWxzID0gdGhpcy5sYWJlbHM7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBnb0hvbWUsXG4gICAgICAgIGdvQmFjayxcbiAgICAgICAgZW1wdHlTdGF0ZSxcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGdldCBoZWxwTGFiZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKHRoaXMubGFiZWxzICYmIHRoaXMubGFiZWxzLmhlbHApIHx8IERFRkFVTFRfSEVMUF9XSU5ET1dfQ09NUF9MQUJFTFMuaGVscDtcbiAgfVxuXG4gIGdldCBjbG9zZUxhYmVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICh0aGlzLmxhYmVscyAmJiB0aGlzLmxhYmVscy5jbG9zZSkgfHwgREVGQVVMVF9IRUxQX1dJTkRPV19DT01QX0xBQkVMUy5jbG9zZTtcbiAgfVxufVxuIl19