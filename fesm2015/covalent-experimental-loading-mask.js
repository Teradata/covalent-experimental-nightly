import { Component, HostBinding, Input, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdLoadingMaskComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdLoadingMaskModule {
}
TdLoadingMaskModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [TdLoadingMaskComponent],
                exports: [TdLoadingMaskComponent],
            },] }
];

export { TdLoadingMaskComponent, TdLoadingMaskModule };
//# sourceMappingURL=covalent-experimental-loading-mask.js.map
