/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { mixinHttp } from '../../http.mixin';
/**
 * Decorator used to give a service http capabilities
 * @param {?} config
 * @return {?}
 */
export function TdHttp(config) {
    return function (constructor) {
        return /** @class */ (function (_super) {
            tslib_1.__extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return class_1;
        }(mixinHttp(constructor, config)));
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5kZWNvcmF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2h0dHAvIiwic291cmNlcyI6WyJhY3Rpb25zL2NsYXNzL2h0dHAuZGVjb3JhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7O0FBS2hFLE1BQU0sVUFBVSxNQUFNLENBQUMsTUFBeUI7SUFDOUMsT0FBTyxVQUFpRCxXQUFnQjtRQUN0RTtZQUFxQixtQ0FBOEI7WUFBNUM7O1lBRVAsQ0FBQztZQUFELGNBQUM7UUFBRCxDQUFDLEFBRk0sQ0FBYyxTQUFTLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxHQUVqRDtJQUNKLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtaXhpbkh0dHAsIElUZEh0dHBSRVNUQ29uZmlnIH0gZnJvbSAnLi4vLi4vaHR0cC5taXhpbic7XG5cbi8qKlxuICogRGVjb3JhdG9yIHVzZWQgdG8gZ2l2ZSBhIHNlcnZpY2UgaHR0cCBjYXBhYmlsaXRpZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFRkSHR0cChjb25maWc6IElUZEh0dHBSRVNUQ29uZmlnKTogRnVuY3Rpb24ge1xuICByZXR1cm4gZnVuY3Rpb24gPFQgZXh0ZW5kcyB7IG5ldyguLi5hcmdzOiBhbnlbXSk6IHt9IH0+KGNvbnN0cnVjdG9yOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBjbGFzcyBleHRlbmRzIG1peGluSHR0cChjb25zdHJ1Y3RvciwgY29uZmlnKSB7XG4gICAgIFxuICAgIH07XG4gIH07XG59XG4iXX0=