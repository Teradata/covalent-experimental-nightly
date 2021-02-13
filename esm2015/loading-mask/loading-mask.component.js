/**
 * @fileoverview added by tsickle
 * Generated from: loading-mask.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding, ViewChild, ElementRef } from '@angular/core';
export class TdLoadingMaskComponent {
    constructor() {
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
     * @return {?}
     */
    ngOnInit() {
        if (this.animationDuration !== this._defaultAnimationDuration) {
            this.animSpan.nativeElement.style.animationDuration = this.animationDuration;
        }
    }
}
TdLoadingMaskComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-loading-mask',
                template: "<span #animSpan></span>\n",
                styles: [".td-loading-mask-animated:host{transform:translateZ(0)}:host{background-color:rgba(0,0,0,.051);display:-ms-inline-flexbox;display:inline-flex;height:16px;overflow:hidden;position:relative;width:90px}.td-loading-mask-animated:host span{-webkit-animation-delay:0s;-webkit-animation-direction:normal;-webkit-animation-duration:1.9s;-webkit-animation-fill-mode:none;-webkit-animation-iteration-count:infinite;-webkit-animation-name:loading;-webkit-animation-play-state:running;-webkit-animation-timing-function:linear;animation-delay:0s;animation-direction:normal;animation-duration:1.9s;animation-fill-mode:none;animation-iteration-count:infinite;animation-name:loading;animation-play-state:running;animation-timing-function:linear;background:linear-gradient(90deg,hsla(0,0%,98%,.098),rgba(0,0,0,.057) 45%);display:block;height:100%;left:-130%;position:absolute;width:130%}@-webkit-keyframes loading{0%{left:-130%}35%,to{left:130%}}@keyframes loading{0%{left:-130%}35%,to{left:130%}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1tYXNrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vZXhwZXJpbWVudGFsL2xvYWRpbmctbWFzay8iLCJzb3VyY2VzIjpbImxvYWRpbmctbWFzay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU83RixNQUFNLE9BQU8sc0JBQXNCO0lBTG5DO1FBTUUsOEJBQXlCLEdBQVcsTUFBTSxDQUFDOzs7O1FBS0MsaUJBQVksR0FBVyxLQUFLLENBQUM7UUFDcEMsVUFBSyxHQUFXLE9BQU8sQ0FBQztRQUN2QixXQUFNLEdBQVcsTUFBTSxDQUFDO1FBQ04sYUFBUSxHQUFZLElBQUksQ0FBQztRQU94RSxzQkFBaUIsR0FBVyxJQUFJLENBQUMseUJBQXlCLENBQUM7SUFZdEUsQ0FBQzs7Ozs7OztJQUxDLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxJQUFJLENBQUMseUJBQXlCLEVBQUU7WUFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztTQUM5RTtJQUNILENBQUM7OztZQWhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFFM0IscUNBQTRDOzthQUM3Qzs7OzJCQU9FLFdBQVcsU0FBQyxvQkFBb0IsY0FBRyxLQUFLO29CQUN4QyxXQUFXLFNBQUMsYUFBYSxjQUFHLEtBQUs7cUJBQ2pDLFdBQVcsU0FBQyxjQUFjLGNBQUcsS0FBSzt1QkFDbEMsV0FBVyxTQUFDLGdDQUFnQyxjQUFHLEtBQUs7dUJBS3BELFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dDQUV0QyxLQUFLOzs7O0lBZk4sMkRBQTJDOzs7OztJQUszQyw4Q0FBeUU7O0lBQ3pFLHVDQUE2RDs7SUFDN0Qsd0NBQThEOztJQUM5RCwwQ0FBaUY7Ozs7O0lBS2pGLDBDQUE4RDs7SUFFOUQsbURBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWxvYWRpbmctbWFzaycsXG4gIHN0eWxlVXJsczogWycuL2xvYWRpbmctbWFzay5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGluZy1tYXNrLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMb2FkaW5nTWFza0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIF9kZWZhdWx0QW5pbWF0aW9uRHVyYXRpb246IHN0cmluZyA9ICcxLjNzJztcblxuICAvKipcbiAgICogQmluZGluZyBzdHlsZSBydWxlcyBvbiBpbnB1dCB2YWx1ZXNcbiAgICovXG4gIEBIb3N0QmluZGluZygnc3R5bGUuYm9yZGVyUmFkaXVzJykgQElucHV0KCkgYm9yZGVyUmFkaXVzOiBzdHJpbmcgPSAnNHB4JztcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aCcpIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmcgPSAnMTEwcHgnO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodCcpIEBJbnB1dCgpIGhlaWdodDogc3RyaW5nID0gJzE2cHgnO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRkLWxvYWRpbmctbWFzay1hbmltYXRlZCcpIEBJbnB1dCgpIGFuaW1hdGVkOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogUmVmZXJlbmNpbmcgYW5pbWF0aW9uIHNwYW4gdG8gZHluYW1pY2FsbHkgY2hhbmdlIGFuaW1hdGlvbiBkdXJhdGlvblxuICAgKi9cbiAgQFZpZXdDaGlsZCgnYW5pbVNwYW4nLCB7IHN0YXRpYzogdHJ1ZSB9KSBhbmltU3BhbjogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKSBhbmltYXRpb25EdXJhdGlvbjogc3RyaW5nID0gdGhpcy5fZGVmYXVsdEFuaW1hdGlvbkR1cmF0aW9uO1xuXG4gIC8qKlxuICAgKiBDaGFuZ2luZyBhbmltYXRpb24gZHVyYXRpb24gb25Jbml0XG4gICAqIEJpbmRpbmcgYW5pbWF0aW9uIG9uSW5pdCB0byBwcmV2ZW50IGNvbnN0YW50IGFuaW1hdGlvbiBkdXJhdGlvbiBjaGFuZ2VzXG4gICAqXG4gICAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hbmltYXRpb25EdXJhdGlvbiAhPT0gdGhpcy5fZGVmYXVsdEFuaW1hdGlvbkR1cmF0aW9uKSB7XG4gICAgICB0aGlzLmFuaW1TcGFuLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uO1xuICAgIH1cbiAgfVxufVxuIl19