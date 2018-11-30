/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpParams } from '@angular/common/http';
import { NOOP_HTTP } from '../../http.mixin';
import { tdHttpRESTParam } from '../params/abstract-param.decorator';
/**
 * Method used to copy parameters from an array or HttpParams object
 * into a centrilized HttpParams object
 * \@internal
 * @param {?} target
 * @param {?} source
 * @return {?}
 */
export function parseParams(target, source) {
    /** @type {?} */
    var queryParams = target;
    if (source instanceof HttpParams) {
        source.keys().forEach(function (key) {
            // skip if value is undefined
            if (((/** @type {?} */ (source))).get(key) !== undefined) {
                queryParams = queryParams.set(key, ((/** @type {?} */ (source))).get(key));
            }
        });
    }
    else {
        for (var key in source) {
            // skip if value is undefined
            if ((/** @type {?} */ (source[key])) !== undefined) {
                queryParams = queryParams.set(key, (/** @type {?} */ (source[key])));
            }
        }
    }
    return queryParams;
}
/**
 * Abstract implementation of the http method decorator
 * \@internal
 * @param {?} config
 * @return {?}
 */
export function TdAbstractMethod(config) {
    return function (target, propertyName, descriptor) {
        /** @type {?} */
        var wrappedFunction = descriptor.value;
        // replace method call with our own and proxy it
        descriptor.value = function () {
            var e_1, _a, e_2, _b;
            try {
                /** @type {?} */
                var replacedPath = config.path;
                /** @type {?} */
                var parameters = Reflect.getOwnMetadata(tdHttpRESTParam, target, propertyName);
                /** @type {?} */
                var newArgs = [];
                /** @type {?} */
                var body = void 0;
                /** @type {?} */
                var queryParams = new HttpParams();
                if (parameters) {
                    try {
                        // map parameters and see which type they are to act on them
                        for (var parameters_1 = tslib_1.__values(parameters), parameters_1_1 = parameters_1.next(); !parameters_1_1.done; parameters_1_1 = parameters_1.next()) {
                            var parameter = parameters_1_1.value;
                            if (parameter.type === 'param') {
                                newArgs[parameter.index] = arguments[parameter.index];
                                replacedPath = replacedPath.replace(':' + parameter.param, arguments[parameter.index]);
                            }
                            else if (parameter.type === 'body') {
                                newArgs[parameter.index] = arguments[parameter.index];
                                body = arguments[parameter.index];
                            }
                            else if (parameter.type === 'queryParams') {
                                newArgs[parameter.index] = arguments[parameter.index];
                                /** @type {?} */
                                var qParams = arguments[parameter.index];
                                if (config.options && config.options.params) {
                                    queryParams = parseParams(queryParams, config.options.params);
                                }
                                if (qParams) {
                                    queryParams = parseParams(queryParams, qParams);
                                }
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (parameters_1_1 && !parameters_1_1.done && (_a = parameters_1.return)) _a.call(parameters_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                // tslint:disable-next-line
                /** @type {?} */
                var url = this.baseUrl + replacedPath;
                /** @type {?} */
                var options = Object.assign({}, config.options, {
                    body: body,
                    params: queryParams,
                });
                // tslint:disable-next-line
                /** @type {?} */
                var request = this.buildRequest(config.method, url, options);
                if (parameters) {
                    try {
                        // see which one was the response parameter so we can set the request observable
                        for (var parameters_2 = tslib_1.__values(parameters), parameters_2_1 = parameters_2.next(); !parameters_2_1.done; parameters_2_1 = parameters_2.next()) {
                            var parameter = parameters_2_1.value;
                            if (parameter.type === 'response') {
                                newArgs[parameter.index] = request;
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (parameters_2_1 && !parameters_2_1.done && (_b = parameters_2.return)) _b.call(parameters_2);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                // tslint:disable-next-line
                /** @type {?} */
                var response = wrappedFunction.apply(this, newArgs);
                // if the response is NOOP_HTTP or undefined, then we return the request as it is
                // else we return the response from the inner function
                if (response === NOOP_HTTP || response === undefined) {
                    return request;
                }
                else {
                    return response;
                }
            }
            catch (error) {
                // tslint:disable-next-line
                console.error(error);
            }
        };
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtbWV0aG9kLmRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvaHR0cC8iLCJzb3VyY2VzIjpbImFjdGlvbnMvbWV0aG9kcy9hYnN0cmFjdC1tZXRob2QuZGVjb3JhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBZ0UsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDM0csT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7Ozs7Ozs7QUFTbEYsTUFBTSxVQUFVLFdBQVcsQ0FBQyxNQUFrQixFQUFFLE1BQXVEOztRQUNqRyxXQUFXLEdBQWUsTUFBTTtJQUNwQyxJQUFJLE1BQU0sWUFBWSxVQUFVLEVBQUU7UUFDaEMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQVc7WUFDaEMsNkJBQTZCO1lBQzdCLElBQUksQ0FBQyxtQkFBWSxNQUFNLEVBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLEVBQUU7Z0JBQy9DLFdBQVcsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFZLE1BQU0sRUFBQSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDbkU7UUFDSCxDQUFDLENBQUMsQ0FBQztLQUNKO1NBQU07UUFDTCxLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRTtZQUN0Qiw2QkFBNkI7WUFDN0IsSUFBSSxtQkFBSyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUEsS0FBSyxTQUFTLEVBQUU7Z0JBQ2xDLFdBQVcsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxtQkFBSyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUEsQ0FBQyxDQUFDO2FB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UUFBUSxHQUFRLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQztnQkFDeEQsaUZBQWlGO2dCQUNqRixzREFBc0Q7Z0JBQ3RELElBQUksUUFBUSxLQUFLLFNBQVMsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO29CQUNwRCxPQUFPLE9BQU8sQ0FBQztpQkFDaEI7cUJBQU07b0JBQ0wsT0FBTyxRQUFRLENBQUM7aUJBQ2pCO2FBQ0Y7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCwyQkFBMkI7Z0JBQzNCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdEI7UUFDSCxDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgVGRIdHRwTWV0aG9kLCBJVGRIdHRwUkVTVE9wdGlvbnMsIElUZEh0dHBSRVNUT3B0aW9uc1dpdGhCb2R5LCBOT09QX0hUVFAgfSBmcm9tICcuLi8uLi9odHRwLm1peGluJztcbmltcG9ydCB7IFRkUGFyYW1UeXBlLCB0ZEh0dHBSRVNUUGFyYW0gfSBmcm9tICcuLi9wYXJhbXMvYWJzdHJhY3QtcGFyYW0uZGVjb3JhdG9yJztcblxuZGVjbGFyZSBjb25zdCBSZWZsZWN0OiBhbnk7XG5cbi8qKlxuICogTWV0aG9kIHVzZWQgdG8gY29weSBwYXJhbWV0ZXJzIGZyb20gYW4gYXJyYXkgb3IgSHR0cFBhcmFtcyBvYmplY3RcbiAqIGludG8gYSBjZW50cmlsaXplZCBIdHRwUGFyYW1zIG9iamVjdFxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBhcmFtcyh0YXJnZXQ6IEh0dHBQYXJhbXMsIHNvdXJjZTogSHR0cFBhcmFtcyB8IHtba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXX0pOiBIdHRwUGFyYW1zIHtcbiAgbGV0IHF1ZXJ5UGFyYW1zOiBIdHRwUGFyYW1zID0gdGFyZ2V0O1xuICBpZiAoc291cmNlIGluc3RhbmNlb2YgSHR0cFBhcmFtcykge1xuICAgIHNvdXJjZS5rZXlzKCkuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIC8vIHNraXAgaWYgdmFsdWUgaXMgdW5kZWZpbmVkXG4gICAgICBpZiAoKDxIdHRwUGFyYW1zPnNvdXJjZSkuZ2V0KGtleSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBxdWVyeVBhcmFtcyA9IHF1ZXJ5UGFyYW1zLnNldChrZXksICg8SHR0cFBhcmFtcz5zb3VyY2UpLmdldChrZXkpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gc291cmNlKSB7XG4gICAgICAvLyBza2lwIGlmIHZhbHVlIGlzIHVuZGVmaW5lZFxuICAgICAgaWYgKDxhbnk+c291cmNlW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBxdWVyeVBhcmFtcyA9IHF1ZXJ5UGFyYW1zLnNldChrZXksIDxhbnk+c291cmNlW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcXVlcnlQYXJhbXM7XG59XG5cbi8qKlxuICogQWJzdHJhY3QgaW1wbGVtZW50YXRpb24gb2YgdGhlIGh0dHAgbWV0aG9kIGRlY29yYXRvclxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZEFic3RyYWN0TWV0aG9kKGNvbmZpZzoge1xuICBtZXRob2Q6IFRkSHR0cE1ldGhvZCxcbiAgcGF0aDogc3RyaW5nLFxuICBvcHRpb25zPzogSVRkSHR0cFJFU1RPcHRpb25zLFxufSk6IEZ1bmN0aW9uIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgcHJvcGVydHlOYW1lOiBzdHJpbmcsIGRlc2NyaXB0b3I6IFR5cGVkUHJvcGVydHlEZXNjcmlwdG9yPEZ1bmN0aW9uPik6IGFueSB7XG4gICAgbGV0IHdyYXBwZWRGdW5jdGlvbjogRnVuY3Rpb24gPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIC8vIHJlcGxhY2UgbWV0aG9kIGNhbGwgd2l0aCBvdXIgb3duIGFuZCBwcm94eSBpdFxuICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoKTogYW55IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCByZXBsYWNlZFBhdGg6IHN0cmluZyA9IGNvbmZpZy5wYXRoO1xuICAgICAgICBsZXQgcGFyYW1ldGVyczogeyBpbmRleDogbnVtYmVyLCBwYXJhbTogc3RyaW5nLCB0eXBlOiBUZFBhcmFtVHlwZSB9W10gPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKHRkSHR0cFJFU1RQYXJhbSwgdGFyZ2V0LCBwcm9wZXJ0eU5hbWUpO1xuICAgICAgICBsZXQgbmV3QXJnczogYW55W10gPSBbXTtcbiAgICAgICAgbGV0IGJvZHk6IGFueTtcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zOiBIdHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICAgICAgaWYgKHBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAvLyBtYXAgcGFyYW1ldGVycyBhbmQgc2VlIHdoaWNoIHR5cGUgdGhleSBhcmUgdG8gYWN0IG9uIHRoZW1cbiAgICAgICAgICBmb3IgKGxldCBwYXJhbWV0ZXIgb2YgcGFyYW1ldGVycykge1xuICAgICAgICAgICAgaWYgKHBhcmFtZXRlci50eXBlID09PSAncGFyYW0nKSB7XG4gICAgICAgICAgICAgIG5ld0FyZ3NbcGFyYW1ldGVyLmluZGV4XSA9IGFyZ3VtZW50c1twYXJhbWV0ZXIuaW5kZXhdO1xuICAgICAgICAgICAgICByZXBsYWNlZFBhdGggPSByZXBsYWNlZFBhdGgucmVwbGFjZSgnOicgKyBwYXJhbWV0ZXIucGFyYW0sIGFyZ3VtZW50c1twYXJhbWV0ZXIuaW5kZXhdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyYW1ldGVyLnR5cGUgPT09ICdib2R5Jykge1xuICAgICAgICAgICAgICBuZXdBcmdzW3BhcmFtZXRlci5pbmRleF0gPSBhcmd1bWVudHNbcGFyYW1ldGVyLmluZGV4XTtcbiAgICAgICAgICAgICAgYm9keSA9IGFyZ3VtZW50c1twYXJhbWV0ZXIuaW5kZXhdO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJhbWV0ZXIudHlwZSA9PT0gJ3F1ZXJ5UGFyYW1zJykge1xuICAgICAgICAgICAgICBuZXdBcmdzW3BhcmFtZXRlci5pbmRleF0gPSBhcmd1bWVudHNbcGFyYW1ldGVyLmluZGV4XTtcbiAgICAgICAgICAgICAgbGV0IHFQYXJhbXM6IEh0dHBQYXJhbXMgfCB7W2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW119ID0gYXJndW1lbnRzW3BhcmFtZXRlci5pbmRleF07XG4gICAgICAgICAgICAgIGlmIChjb25maWcub3B0aW9ucyAmJiBjb25maWcub3B0aW9ucy5wYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcyA9IHBhcnNlUGFyYW1zKHF1ZXJ5UGFyYW1zLCBjb25maWcub3B0aW9ucy5wYXJhbXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChxUGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMgPSBwYXJzZVBhcmFtcyhxdWVyeVBhcmFtcywgcVBhcmFtcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIGxldCB1cmw6IHN0cmluZyA9IHRoaXMuYmFzZVVybCArIHJlcGxhY2VkUGF0aDtcbiAgICAgICAgbGV0IG9wdGlvbnM6IElUZEh0dHBSRVNUT3B0aW9uc1dpdGhCb2R5ID0gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnLm9wdGlvbnMsIHtcbiAgICAgICAgICBib2R5OiBib2R5LFxuICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbXMsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgbGV0IHJlcXVlc3Q6IGFueSA9IHRoaXMuYnVpbGRSZXF1ZXN0KGNvbmZpZy5tZXRob2QsIHVybCwgb3B0aW9ucyk7XG4gICAgICAgIGlmIChwYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgLy8gc2VlIHdoaWNoIG9uZSB3YXMgdGhlIHJlc3BvbnNlIHBhcmFtZXRlciBzbyB3ZSBjYW4gc2V0IHRoZSByZXF1ZXN0IG9ic2VydmFibGVcbiAgICAgICAgICBmb3IgKGxldCBwYXJhbWV0ZXIgb2YgcGFyYW1ldGVycykge1xuICAgICAgICAgICAgaWYgKHBhcmFtZXRlci50eXBlID09PSAncmVzcG9uc2UnKSB7XG4gICAgICAgICAgICAgIG5ld0FyZ3NbcGFyYW1ldGVyLmluZGV4XSA9IHJlcXVlc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBsZXQgcmVzcG9uc2U6IGFueSA9IHdyYXBwZWRGdW5jdGlvbi5hcHBseSh0aGlzLCBuZXdBcmdzKTtcbiAgICAgICAgLy8gaWYgdGhlIHJlc3BvbnNlIGlzIE5PT1BfSFRUUCBvciB1bmRlZmluZWQsIHRoZW4gd2UgcmV0dXJuIHRoZSByZXF1ZXN0IGFzIGl0IGlzXG4gICAgICAgIC8vIGVsc2Ugd2UgcmV0dXJuIHRoZSByZXNwb25zZSBmcm9tIHRoZSBpbm5lciBmdW5jdGlvblxuICAgICAgICBpZiAocmVzcG9uc2UgPT09IE5PT1BfSFRUUCB8fCByZXNwb25zZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbn1cbiJdfQ==