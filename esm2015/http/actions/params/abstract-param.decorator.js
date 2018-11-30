/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
export const tdHttpRESTParam = Symbol('TdHttpRESTParam');
/**
 * Abstract implementation of the http param decorator
 * \@internal
 * @param {?} type
 * @param {?=} param
 * @return {?}
 */
export function TdAbstractParam(type, param) {
    return function (target, propertyKey, parameterIndex) {
        /** @type {?} */
        let parameters = Reflect.getOwnMetadata(tdHttpRESTParam, target, propertyKey) || [];
        parameters.push({
            index: parameterIndex,
            param: param,
            type: type,
        });
        Reflect.defineMetadata(tdHttpRESTParam, parameters, target, propertyKey);
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtcGFyYW0uZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9odHRwLyIsInNvdXJjZXMiOlsiYWN0aW9ucy9wYXJhbXMvYWJzdHJhY3QtcGFyYW0uZGVjb3JhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsTUFBTSxPQUFPLGVBQWUsR0FBVyxNQUFNLENBQUMsaUJBQWlCLENBQUM7Ozs7Ozs7O0FBTWhFLE1BQU0sVUFBVSxlQUFlLENBQUMsSUFBaUIsRUFBRSxLQUFjO0lBQy9ELE9BQU8sVUFBVSxNQUFjLEVBQUUsV0FBNEIsRUFBRSxjQUFzQjs7WUFDL0UsVUFBVSxHQUEwRCxPQUFPLENBQUMsY0FBYyxDQUFDLGVBQWUsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLElBQUksRUFBRTtRQUMxSSxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ2QsS0FBSyxFQUFFLGNBQWM7WUFDckIsS0FBSyxFQUFFLEtBQUs7WUFDWixJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDM0UsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgY29uc3QgUmVmbGVjdDogYW55O1xuZXhwb3J0IHR5cGUgVGRQYXJhbVR5cGUgPSAncGFyYW0nIHwgJ3Jlc3BvbnNlJyB8ICdib2R5JyB8ICdxdWVyeVBhcmFtcyc7XG5cbmV4cG9ydCBjb25zdCB0ZEh0dHBSRVNUUGFyYW06IFN5bWJvbCA9IFN5bWJvbCgnVGRIdHRwUkVTVFBhcmFtJyk7XG5cbi8qKlxuICogQWJzdHJhY3QgaW1wbGVtZW50YXRpb24gb2YgdGhlIGh0dHAgcGFyYW0gZGVjb3JhdG9yXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFRkQWJzdHJhY3RQYXJhbSh0eXBlOiBUZFBhcmFtVHlwZSwgcGFyYW0/OiBzdHJpbmcpOiBGdW5jdGlvbiB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBPYmplY3QsIHByb3BlcnR5S2V5OiBzdHJpbmcgfCBzeW1ib2wsIHBhcmFtZXRlckluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBsZXQgcGFyYW1ldGVyczogeyBpbmRleDogbnVtYmVyLCBwYXJhbTogc3RyaW5nLCB0eXBlOiBUZFBhcmFtVHlwZSB9W10gPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKHRkSHR0cFJFU1RQYXJhbSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSkgfHwgW107XG4gICAgcGFyYW1ldGVycy5wdXNoKHtcbiAgICAgIGluZGV4OiBwYXJhbWV0ZXJJbmRleCxcbiAgICAgIHBhcmFtOiBwYXJhbSxcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgfSk7XG4gICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YSh0ZEh0dHBSRVNUUGFyYW0sIHBhcmFtZXRlcnMsIHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICB9O1xufVxuIl19