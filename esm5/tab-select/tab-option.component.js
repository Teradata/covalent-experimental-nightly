/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, TemplateRef, ViewContainerRef, } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { mixinDisabled } from '@covalent/core/common';
var TdTabOptionBase = /** @class */ (function () {
    function TdTabOptionBase(_viewContainerRef, _changeDetectorRef) {
        this._viewContainerRef = _viewContainerRef;
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdTabOptionBase;
}());
export { TdTabOptionBase };
if (false) {
    /** @type {?} */
    TdTabOptionBase.prototype._viewContainerRef;
    /** @type {?} */
    TdTabOptionBase.prototype._changeDetectorRef;
}
/* tslint:disable-next-line */
/** @type {?} */
export var _TdTabOptionMixinBase = mixinDisabled(TdTabOptionBase);
var TdTabOptionComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TdTabOptionComponent, _super);
    function TdTabOptionComponent(_viewContainerRef, _changeDetectorRef) {
        return _super.call(this, _viewContainerRef, _changeDetectorRef) || this;
    }
    Object.defineProperty(TdTabOptionComponent.prototype, "content", {
        get: /**
         * @return {?}
         */
        function () {
            return this._contentPortal;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdTabOptionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._contentPortal = new TemplatePortal(this._content, this._viewContainerRef);
    };
    TdTabOptionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-tab-option',
                    template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    /* tslint:disable-next-line */
                    inputs: ['disabled'],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    TdTabOptionComponent.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: ChangeDetectorRef }
    ]; };
    TdTabOptionComponent.propDecorators = {
        _content: [{ type: ViewChild, args: [TemplateRef,] }],
        value: [{ type: Input, args: ['value',] }]
    };
    return TdTabOptionComponent;
}(_TdTabOptionMixinBase));
export { TdTabOptionComponent };
if (false) {
    /** @type {?} */
    TdTabOptionComponent.prototype._contentPortal;
    /** @type {?} */
    TdTabOptionComponent.prototype._content;
    /**
     * Value to which the option will be binded to.
     * @type {?}
     */
    TdTabOptionComponent.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW9wdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL3RhYi1zZWxlY3QvIiwic291cmNlcyI6WyJ0YWItb3B0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFdBQVcsRUFFWCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQztBQUVuRTtJQUNFLHlCQUFtQixpQkFBbUMsRUFDbkMsa0JBQXFDO1FBRHJDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDbkMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtJQUFHLENBQUM7SUFDOUQsc0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZhLDRDQUEwQzs7SUFDMUMsNkNBQTRDOzs7O0FBSTFELE1BQU0sS0FBTyxxQkFBcUIsR0FBRyxhQUFhLENBQUMsZUFBZSxDQUFDO0FBRW5FO0lBUTBDLGdEQUFxQjtJQWM3RCw4QkFBWSxpQkFBbUMsRUFDbkMsa0JBQXFDO2VBQy9DLGtCQUFNLGlCQUFpQixFQUFFLGtCQUFrQixDQUFDO0lBQzlDLENBQUM7SUFkRCxzQkFBSSx5Q0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdCLENBQUM7OztPQUFBOzs7O0lBY0QsdUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7O2dCQTdCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLHdFQUEwQztvQkFFMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O29CQUUvQyxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUM7O2lCQUNyQjs7OztnQkFyQkMsZ0JBQWdCO2dCQUpoQixpQkFBaUI7OzsyQkFpQ2hCLFNBQVMsU0FBQyxXQUFXO3dCQUtyQixLQUFLLFNBQUMsT0FBTzs7SUFXaEIsMkJBQUM7Q0FBQSxBQS9CRCxDQVEwQyxxQkFBcUIsR0F1QjlEO1NBdkJZLG9CQUFvQjs7O0lBRS9CLDhDQUE0Qzs7SUFLNUMsd0NBQW1EOzs7OztJQUtuRCxxQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVGVtcGxhdGVSZWYsXG4gIE9uSW5pdCxcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBtaXhpbkRpc2FibGVkLCBJQ2FuRGlzYWJsZSB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbmV4cG9ydCBjbGFzcyBUZFRhYk9wdGlvbkJhc2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgIHB1YmxpYyBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGRUYWJPcHRpb25NaXhpbkJhc2UgPSBtaXhpbkRpc2FibGVkKFRkVGFiT3B0aW9uQmFzZSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLXRhYi1vcHRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLW9wdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYi1vcHRpb24uY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBpbnB1dHM6IFsnZGlzYWJsZWQnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRUYWJPcHRpb25Db21wb25lbnQgZXh0ZW5kcyBfVGRUYWJPcHRpb25NaXhpbkJhc2UgaW1wbGVtZW50cyBJQ2FuRGlzYWJsZSwgT25Jbml0IHtcblxuICBwcml2YXRlIF9jb250ZW50UG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDxhbnk+O1xuICBnZXQgY29udGVudCgpOiBUZW1wbGF0ZVBvcnRhbDxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fY29udGVudFBvcnRhbDtcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIF9jb250ZW50OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBWYWx1ZSB0byB3aGljaCB0aGUgb3B0aW9uIHdpbGwgYmUgYmluZGVkIHRvLlxuICAgKi9cbiAgQElucHV0KCd2YWx1ZScpIHZhbHVlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihfdmlld0NvbnRhaW5lclJlZiwgX2NoYW5nZURldGVjdG9yUmVmKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2NvbnRlbnRQb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy5fY29udGVudCwgdGhpcy5fdmlld0NvbnRhaW5lclJlZik7XG4gIH1cblxufVxuIl19