/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding, ViewChild, ElementRef } from '@angular/core';
var TdLoadingMaskComponent = /** @class */ (function () {
    function TdLoadingMaskComponent() {
        this._defaultAnimationDuration = '1.3s';
        /**
         * Binding style rules on input values
         */
        this.borderRadius = '4px';
        this.width = '110px';
        this.height = '16px';
        this.animated = true;
        this.animationDuration = this._defaultAnimationDuration;
    }
    /**
     * Changing animation duration onInit
     * Binding animation onInit to prevent constant animation duration changes
     *
     */
    /**
     * Changing animation duration onInit
     * Binding animation onInit to prevent constant animation duration changes
     *
     * @return {?}
     */
    TdLoadingMaskComponent.prototype.ngOnInit = /**
     * Changing animation duration onInit
     * Binding animation onInit to prevent constant animation duration changes
     *
     * @return {?}
     */
    function () {
        if (this.animationDuration !== this._defaultAnimationDuration) {
            this.animSpan.nativeElement.style.animationDuration = this.animationDuration;
        }
    };
    TdLoadingMaskComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-loading-mask',
                    template: "<span #animSpan></span>\n",
                    styles: [".td-loading-mask-animated:host{transform:translateZ(0)}:host{display:-ms-inline-flexbox;display:inline-flex;background-color:rgba(0,0,0,.051);position:relative;overflow:hidden;height:16px;width:90px}.td-loading-mask-animated:host span{height:100%;width:130%;background:linear-gradient(to right,rgba(250,250,250,.098),rgba(0,0,0,.057) 45%);display:block;position:absolute;left:-130%;-webkit-animation:1.9s linear infinite loading;animation:1.9s linear infinite loading}@-webkit-keyframes loading{0%{left:-130%}100%,35%{left:130%}}@keyframes loading{0%{left:-130%}100%,35%{left:130%}}"]
                }] }
    ];
    TdLoadingMaskComponent.propDecorators = {
        borderRadius: [{ type: HostBinding, args: ['style.borderRadius',] }, { type: Input }],
        width: [{ type: HostBinding, args: ['style.width',] }, { type: Input }],
        height: [{ type: HostBinding, args: ['style.height',] }, { type: Input }],
        animated: [{ type: HostBinding, args: ['class.td-loading-mask-animated',] }, { type: Input }],
        animSpan: [{ type: ViewChild, args: ['animSpan', { static: true },] }],
        animationDuration: [{ type: Input }]
    };
    return TdLoadingMaskComponent;
}());
export { TdLoadingMaskComponent };
if (false) {
    /** @type {?} */
    TdLoadingMaskComponent.prototype._defaultAnimationDuration;
    /**
     * Binding style rules on input values
     * @type {?}
     */
    TdLoadingMaskComponent.prototype.borderRadius;
    /** @type {?} */
    TdLoadingMaskComponent.prototype.width;
    /** @type {?} */
    TdLoadingMaskComponent.prototype.height;
    /** @type {?} */
    TdLoadingMaskComponent.prototype.animated;
    /**
     * Referencing animation span to dynamically change animation duration
     * @type {?}
     */
    TdLoadingMaskComponent.prototype.animSpan;
    /** @type {?} */
    TdLoadingMaskComponent.prototype.animationDuration;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1tYXNrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvbG9hZGluZy1tYXNrLyIsInNvdXJjZXMiOlsibG9hZGluZy1tYXNrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFN0Y7SUFBQTtRQU1FLDhCQUF5QixHQUFXLE1BQU0sQ0FBQzs7OztRQUtDLGlCQUFZLEdBQVcsS0FBSyxDQUFDO1FBQ3BDLFVBQUssR0FBVyxPQUFPLENBQUM7UUFDdkIsV0FBTSxHQUFXLE1BQU0sQ0FBQztRQUNOLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFPeEUsc0JBQWlCLEdBQVcsSUFBSSxDQUFDLHlCQUF5QixDQUFDO0lBWXRFLENBQUM7SUFWQzs7OztPQUlHOzs7Ozs7O0lBQ0gseUNBQVE7Ozs7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEtBQUssSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7U0FDOUU7SUFDSCxDQUFDOztnQkFoQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBRTNCLHFDQUE0Qzs7aUJBQzdDOzs7K0JBT0UsV0FBVyxTQUFDLG9CQUFvQixjQUFHLEtBQUs7d0JBQ3hDLFdBQVcsU0FBQyxhQUFhLGNBQUcsS0FBSzt5QkFDakMsV0FBVyxTQUFDLGNBQWMsY0FBRyxLQUFLOzJCQUNsQyxXQUFXLFNBQUMsZ0NBQWdDLGNBQUcsS0FBSzsyQkFLcEQsU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7b0NBRXRDLEtBQUs7O0lBWVIsNkJBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQTVCWSxzQkFBc0I7OztJQUNqQywyREFBMkM7Ozs7O0lBSzNDLDhDQUF5RTs7SUFDekUsdUNBQTZEOztJQUM3RCx3Q0FBOEQ7O0lBQzlELDBDQUFpRjs7Ozs7SUFLakYsMENBQThEOztJQUU5RCxtREFBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZywgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbG9hZGluZy1tYXNrJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9hZGluZy1tYXNrLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkaW5nLW1hc2suY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZExvYWRpbmdNYXNrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgX2RlZmF1bHRBbmltYXRpb25EdXJhdGlvbjogc3RyaW5nID0gJzEuM3MnO1xuXG4gIC8qKlxuICAgKiBCaW5kaW5nIHN0eWxlIHJ1bGVzIG9uIGlucHV0IHZhbHVlc1xuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5ib3JkZXJSYWRpdXMnKSBASW5wdXQoKSBib3JkZXJSYWRpdXM6IHN0cmluZyA9ICc0cHgnO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoJykgQElucHV0KCkgd2lkdGg6IHN0cmluZyA9ICcxMTBweCc7XG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0JykgQElucHV0KCkgaGVpZ2h0OiBzdHJpbmcgPSAnMTZweCc7XG4gIEBIb3N0QmluZGluZygnY2xhc3MudGQtbG9hZGluZy1tYXNrLWFuaW1hdGVkJykgQElucHV0KCkgYW5pbWF0ZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBSZWZlcmVuY2luZyBhbmltYXRpb24gc3BhbiB0byBkeW5hbWljYWxseSBjaGFuZ2UgYW5pbWF0aW9uIGR1cmF0aW9uXG4gICAqL1xuICBAVmlld0NoaWxkKCdhbmltU3BhbicsIHsgc3RhdGljOiB0cnVlIH0pIGFuaW1TcGFuOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpIGFuaW1hdGlvbkR1cmF0aW9uOiBzdHJpbmcgPSB0aGlzLl9kZWZhdWx0QW5pbWF0aW9uRHVyYXRpb247XG5cbiAgLyoqXG4gICAqIENoYW5naW5nIGFuaW1hdGlvbiBkdXJhdGlvbiBvbkluaXRcbiAgICogQmluZGluZyBhbmltYXRpb24gb25Jbml0IHRvIHByZXZlbnQgY29uc3RhbnQgYW5pbWF0aW9uIGR1cmF0aW9uIGNoYW5nZXNcbiAgICpcbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFuaW1hdGlvbkR1cmF0aW9uICE9PSB0aGlzLl9kZWZhdWx0QW5pbWF0aW9uRHVyYXRpb24pIHtcbiAgICAgIHRoaXMuYW5pbVNwYW4ubmF0aXZlRWxlbWVudC5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IHRoaXMuYW5pbWF0aW9uRHVyYXRpb247XG4gICAgfVxuICB9XG59XG4iXX0=