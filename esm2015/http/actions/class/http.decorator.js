/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { mixinHttp } from '../../http.mixin';
/**
 * Decorator used to give a service http capabilities
 * @param {?} config
 * @return {?}
 */
export function TdHttp(config) {
    return function (constructor) {
        return class extends mixinHttp(constructor, config) {
        };
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5kZWNvcmF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2h0dHAvIiwic291cmNlcyI6WyJhY3Rpb25zL2NsYXNzL2h0dHAuZGVjb3JhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGtCQUFrQixDQUFDOzs7Ozs7QUFLaEUsTUFBTSxVQUFVLE1BQU0sQ0FBQyxNQUF5QjtJQUM5QyxPQUFPLFVBQWlELFdBQWdCO1FBQ3RFLE9BQU8sS0FBTSxTQUFRLFNBQVMsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDO1NBRWxELENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWl4aW5IdHRwLCBJVGRIdHRwUkVTVENvbmZpZyB9IGZyb20gJy4uLy4uL2h0dHAubWl4aW4nO1xuXG4vKipcbiAqIERlY29yYXRvciB1c2VkIHRvIGdpdmUgYSBzZXJ2aWNlIGh0dHAgY2FwYWJpbGl0aWVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZEh0dHAoY29uZmlnOiBJVGRIdHRwUkVTVENvbmZpZyk6IEZ1bmN0aW9uIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIDxUIGV4dGVuZHMgeyBuZXcoLi4uYXJnczogYW55W10pOiB7fSB9Pihjb25zdHJ1Y3RvcjogYW55KTogYW55IHtcbiAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBtaXhpbkh0dHAoY29uc3RydWN0b3IsIGNvbmZpZykge1xuICAgICBcbiAgICB9O1xuICB9O1xufVxuIl19