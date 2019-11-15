/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                styles: [".td-loading-mask-animated:host{-webkit-transform:translateZ(0);transform:translateZ(0)}:host{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;background-color:rgba(0,0,0,.051);position:relative;overflow:hidden;height:16px;width:90px}.td-loading-mask-animated:host span{height:100%;width:130%;background:-webkit-gradient(linear,left top,right top,from(rgba(250,250,250,.098)),color-stop(45%,rgba(0,0,0,.057)));background:linear-gradient(to right,rgba(250,250,250,.098),rgba(0,0,0,.057) 45%);display:block;position:absolute;left:-130%;-webkit-animation:1.9s linear infinite loading;animation:1.9s linear infinite loading}@-webkit-keyframes loading{0%{left:-130%}100%,35%{left:130%}}@keyframes loading{0%{left:-130%}100%,35%{left:130%}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1tYXNrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvbG9hZGluZy1tYXNrLyIsInNvdXJjZXMiOlsibG9hZGluZy1tYXNrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFPN0YsTUFBTSxPQUFPLHNCQUFzQjtJQUxuQztRQU1FLDhCQUF5QixHQUFXLE1BQU0sQ0FBQzs7OztRQUtDLGlCQUFZLEdBQVcsS0FBSyxDQUFDO1FBQ3BDLFVBQUssR0FBVyxPQUFPLENBQUM7UUFDdkIsV0FBTSxHQUFXLE1BQU0sQ0FBQztRQUNOLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFPeEUsc0JBQWlCLEdBQVcsSUFBSSxDQUFDLHlCQUF5QixDQUFDO0lBWXRFLENBQUM7Ozs7Ozs7SUFMQyxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsaUJBQWlCLEtBQUssSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7U0FDOUU7SUFDSCxDQUFDOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBRTNCLHFDQUE0Qzs7YUFDN0M7OzsyQkFPRSxXQUFXLFNBQUMsb0JBQW9CLGNBQUcsS0FBSztvQkFDeEMsV0FBVyxTQUFDLGFBQWEsY0FBRyxLQUFLO3FCQUNqQyxXQUFXLFNBQUMsY0FBYyxjQUFHLEtBQUs7dUJBQ2xDLFdBQVcsU0FBQyxnQ0FBZ0MsY0FBRyxLQUFLO3VCQUtwRCxTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQ0FFdEMsS0FBSzs7OztJQWZOLDJEQUEyQzs7Ozs7SUFLM0MsOENBQXlFOztJQUN6RSx1Q0FBNkQ7O0lBQzdELHdDQUE4RDs7SUFDOUQsMENBQWlGOzs7OztJQUtqRiwwQ0FBOEQ7O0lBRTlELG1EQUFvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1sb2FkaW5nLW1hc2snLFxuICBzdHlsZVVybHM6IFsnLi9sb2FkaW5nLW1hc2suY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmctbWFzay5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkTG9hZGluZ01hc2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBfZGVmYXVsdEFuaW1hdGlvbkR1cmF0aW9uOiBzdHJpbmcgPSAnMS4zcyc7XG5cbiAgLyoqXG4gICAqIEJpbmRpbmcgc3R5bGUgcnVsZXMgb24gaW5wdXQgdmFsdWVzXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmJvcmRlclJhZGl1cycpIEBJbnB1dCgpIGJvcmRlclJhZGl1czogc3RyaW5nID0gJzRweCc7XG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKSBASW5wdXQoKSB3aWR0aDogc3RyaW5nID0gJzExMHB4JztcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQnKSBASW5wdXQoKSBoZWlnaHQ6IHN0cmluZyA9ICcxNnB4JztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50ZC1sb2FkaW5nLW1hc2stYW5pbWF0ZWQnKSBASW5wdXQoKSBhbmltYXRlZDogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFJlZmVyZW5jaW5nIGFuaW1hdGlvbiBzcGFuIHRvIGR5bmFtaWNhbGx5IGNoYW5nZSBhbmltYXRpb24gZHVyYXRpb25cbiAgICovXG4gIEBWaWV3Q2hpbGQoJ2FuaW1TcGFuJywgeyBzdGF0aWM6IHRydWUgfSkgYW5pbVNwYW46IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KCkgYW5pbWF0aW9uRHVyYXRpb246IHN0cmluZyA9IHRoaXMuX2RlZmF1bHRBbmltYXRpb25EdXJhdGlvbjtcblxuICAvKipcbiAgICogQ2hhbmdpbmcgYW5pbWF0aW9uIGR1cmF0aW9uIG9uSW5pdFxuICAgKiBCaW5kaW5nIGFuaW1hdGlvbiBvbkluaXQgdG8gcHJldmVudCBjb25zdGFudCBhbmltYXRpb24gZHVyYXRpb24gY2hhbmdlc1xuICAgKlxuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uRHVyYXRpb24gIT09IHRoaXMuX2RlZmF1bHRBbmltYXRpb25EdXJhdGlvbikge1xuICAgICAgdGhpcy5hbmltU3Bhbi5uYXRpdmVFbGVtZW50LnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gdGhpcy5hbmltYXRpb25EdXJhdGlvbjtcbiAgICB9XG4gIH1cbn1cbiJdfQ==