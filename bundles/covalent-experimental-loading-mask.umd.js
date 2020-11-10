(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@covalent/experimental/loading-mask', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.covalent = global.covalent || {}, global.covalent.experimental = global.covalent.experimental || {}, global.covalent.experimental['loading-mask'] = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: loading-mask.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
         * @return {?}
         */
        TdLoadingMaskComponent.prototype.ngOnInit = function () {
            if (this.animationDuration !== this._defaultAnimationDuration) {
                this.animSpan.nativeElement.style.animationDuration = this.animationDuration;
            }
        };
        return TdLoadingMaskComponent;
    }());
    TdLoadingMaskComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'td-loading-mask',
                    template: "<span #animSpan></span>\n",
                    styles: [".td-loading-mask-animated:host{transform:translateZ(0)}:host{background-color:rgba(0,0,0,.051);display:-ms-inline-flexbox;display:inline-flex;height:16px;overflow:hidden;position:relative;width:90px}.td-loading-mask-animated:host span{-webkit-animation-delay:0s;-webkit-animation-direction:normal;-webkit-animation-duration:1.9s;-webkit-animation-fill-mode:none;-webkit-animation-iteration-count:infinite;-webkit-animation-name:loading;-webkit-animation-play-state:running;-webkit-animation-timing-function:linear;animation-delay:0s;animation-direction:normal;animation-duration:1.9s;animation-fill-mode:none;animation-iteration-count:infinite;animation-name:loading;animation-play-state:running;animation-timing-function:linear;background:linear-gradient(90deg,hsla(0,0%,98%,.098),rgba(0,0,0,.057) 45%);display:block;height:100%;left:-130%;position:absolute;width:130%}@-webkit-keyframes loading{0%{left:-130%}35%,to{left:130%}}@keyframes loading{0%{left:-130%}35%,to{left:130%}}"]
                }] }
    ];
    TdLoadingMaskComponent.propDecorators = {
        borderRadius: [{ type: core.HostBinding, args: ['style.borderRadius',] }, { type: core.Input }],
        width: [{ type: core.HostBinding, args: ['style.width',] }, { type: core.Input }],
        height: [{ type: core.HostBinding, args: ['style.height',] }, { type: core.Input }],
        animated: [{ type: core.HostBinding, args: ['class.td-loading-mask-animated',] }, { type: core.Input }],
        animSpan: [{ type: core.ViewChild, args: ['animSpan', { static: true },] }],
        animationDuration: [{ type: core.Input }]
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
    var TdLoadingMaskModule = /** @class */ (function () {
        function TdLoadingMaskModule() {
        }
        return TdLoadingMaskModule;
    }());
    TdLoadingMaskModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
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

    exports.TdLoadingMaskComponent = TdLoadingMaskComponent;
    exports.TdLoadingMaskModule = TdLoadingMaskModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-experimental-loading-mask.umd.js.map
