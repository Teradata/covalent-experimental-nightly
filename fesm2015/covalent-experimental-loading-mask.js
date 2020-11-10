import { Component, HostBinding, Input, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: loading-mask.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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

/**
 * @fileoverview added by tsickle
 * Generated from: loading-mask.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: covalent-experimental-loading-mask.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TdLoadingMaskComponent, TdLoadingMaskModule };
//# sourceMappingURL=covalent-experimental-loading-mask.js.map
