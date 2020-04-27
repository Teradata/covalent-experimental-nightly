(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@covalent/experimental/loading-mask', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.experimental = global.covalent.experimental || {}, global.covalent.experimental['loading-mask'] = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            { type: core.Component, args: [{
                        selector: 'td-loading-mask',
                        template: "<span #animSpan></span>\n",
                        styles: [".td-loading-mask-animated:host{transform:translateZ(0)}:host{display:-ms-inline-flexbox;display:inline-flex;background-color:rgba(0,0,0,.051);position:relative;overflow:hidden;height:16px;width:90px}.td-loading-mask-animated:host span{height:100%;width:130%;background:linear-gradient(to right,rgba(250,250,250,.098),rgba(0,0,0,.057) 45%);display:block;position:absolute;left:-130%;-webkit-animation:1.9s linear infinite loading;animation:1.9s linear infinite loading}@-webkit-keyframes loading{0%{left:-130%}100%,35%{left:130%}}@keyframes loading{0%{left:-130%}100%,35%{left:130%}}"]
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
        return TdLoadingMaskComponent;
    }());
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdLoadingMaskModule = /** @class */ (function () {
        function TdLoadingMaskModule() {
        }
        TdLoadingMaskModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [TdLoadingMaskComponent],
                        exports: [TdLoadingMaskComponent],
                    },] }
        ];
        return TdLoadingMaskModule;
    }());

    exports.TdLoadingMaskComponent = TdLoadingMaskComponent;
    exports.TdLoadingMaskModule = TdLoadingMaskModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-experimental-loading-mask.umd.js.map
