/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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
    let queryParams = target;
    if (source instanceof HttpParams) {
        source.keys().forEach((key) => {
            // skip if value is undefined
            if (((/** @type {?} */ (source))).get(key) !== undefined) {
                queryParams = queryParams.set(key, ((/** @type {?} */ (source))).get(key));
            }
        });
    }
    else {
        for (let key in source) {
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
        let wrappedFunction = descriptor.value;
        // replace method call with our own and proxy it
        descriptor.value = function () {
            try {
                /** @type {?} */
                let replacedPath = config.path;
                /** @type {?} */
                let parameters = Reflect.getOwnMetadata(tdHttpRESTParam, target, propertyName);
                /** @type {?} */
                let newArgs = [];
                /** @type {?} */
                let body;
                /** @type {?} */
                let queryParams = new HttpParams();
                if (parameters) {
                    // map parameters and see which type they are to act on them
                    for (let parameter of parameters) {
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
                            let qParams = arguments[parameter.index];
                            if (config.options && config.options.params) {
                                queryParams = parseParams(queryParams, config.options.params);
                            }
                            if (qParams) {
                                queryParams = parseParams(queryParams, qParams);
                            }
                        }
                    }
                }
                // tslint:disable-next-line
                /** @type {?} */
                let url = this.baseUrl + replacedPath;
                /** @type {?} */
                let options = Object.assign({}, config.options, {
                    body: body,
                    params: queryParams,
                });
                // tslint:disable-next-line
                /** @type {?} */
                let request = this.buildRequest(config.method, url, options);
                if (parameters) {
                    // see which one was the response parameter so we can set the request observable
                    for (let parameter of parameters) {
                        if (parameter.type === 'response') {
                            newArgs[parameter.index] = request;
                        }
                    }
                }
                // tslint:disable-next-line
                /** @type {?} */
                let response = wrappedFunction.apply(this, newArgs);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtbWV0aG9kLmRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvaHR0cC8iLCJzb3VyY2VzIjpbImFjdGlvbnMvbWV0aG9kcy9hYnN0cmFjdC1tZXRob2QuZGVjb3JhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsT0FBTyxFQUFnRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMzRyxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7Ozs7Ozs7OztBQVNsRixNQUFNLFVBQVUsV0FBVyxDQUFDLE1BQWtCLEVBQUUsTUFBdUQ7O1FBQ2pHLFdBQVcsR0FBZSxNQUFNO0lBQ3BDLElBQUksTUFBTSxZQUFZLFVBQVUsRUFBRTtRQUNoQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBVyxFQUFFLEVBQUU7WUFDcEMsNkJBQTZCO1lBQzdCLElBQUksQ0FBQyxtQkFBWSxNQUFNLEVBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLEVBQUU7Z0JBQy9DLFdBQVcsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFZLE1BQU0sRUFBQSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDbkU7UUFDSCxDQUFDLENBQUMsQ0FBQztLQUNKO1NBQU07UUFDTCxLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRTtZQUN0Qiw2QkFBNkI7WUFDN0IsSUFBSSxtQkFBSyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUEsS0FBSyxTQUFTLEVBQUU7Z0JBQ2xDLFdBQVcsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxtQkFBSyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUEsQ0FB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LFFBQVEsS0FBSyxTQUFTLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtvQkFDcEQsT0FBTyxPQUFPLENBQUM7aUJBQ2hCO3FCQUFNO29CQUNMLE9BQU8sUUFBUSxDQUFDO2lCQUNqQjthQUNGO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsMkJBQTJCO2dCQUMzQixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3RCO1FBQ0gsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IFRkSHR0cE1ldGhvZCwgSVRkSHR0cFJFU1RPcHRpb25zLCBJVGRIdHRwUkVTVE9wdGlvbnNXaXRoQm9keSwgTk9PUF9IVFRQIH0gZnJvbSAnLi4vLi4vaHR0cC5taXhpbic7XG5pbXBvcnQgeyBUZFBhcmFtVHlwZSwgdGRIdHRwUkVTVFBhcmFtIH0gZnJvbSAnLi4vcGFyYW1zL2Fic3RyYWN0LXBhcmFtLmRlY29yYXRvcic7XG5cbmRlY2xhcmUgY29uc3QgUmVmbGVjdDogYW55O1xuXG4vKipcbiAqIE1ldGhvZCB1c2VkIHRvIGNvcHkgcGFyYW1ldGVycyBmcm9tIGFuIGFycmF5IG9yIEh0dHBQYXJhbXMgb2JqZWN0XG4gKiBpbnRvIGEgY2VudHJpbGl6ZWQgSHR0cFBhcmFtcyBvYmplY3RcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQYXJhbXModGFyZ2V0OiBIdHRwUGFyYW1zLCBzb3VyY2U6IEh0dHBQYXJhbXMgfCB7W2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW119KTogSHR0cFBhcmFtcyB7XG4gIGxldCBxdWVyeVBhcmFtczogSHR0cFBhcmFtcyA9IHRhcmdldDtcbiAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEh0dHBQYXJhbXMpIHtcbiAgICBzb3VyY2Uua2V5cygpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAvLyBza2lwIGlmIHZhbHVlIGlzIHVuZGVmaW5lZFxuICAgICAgaWYgKCg8SHR0cFBhcmFtcz5zb3VyY2UpLmdldChrZXkpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcXVlcnlQYXJhbXMgPSBxdWVyeVBhcmFtcy5zZXQoa2V5LCAoPEh0dHBQYXJhbXM+c291cmNlKS5nZXQoa2V5KSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQga2V5IGluIHNvdXJjZSkge1xuICAgICAgLy8gc2tpcCBpZiB2YWx1ZSBpcyB1bmRlZmluZWRcbiAgICAgIGlmICg8YW55PnNvdXJjZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcXVlcnlQYXJhbXMgPSBxdWVyeVBhcmFtcy5zZXQoa2V5LCA8YW55PnNvdXJjZVtrZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHF1ZXJ5UGFyYW1zO1xufVxuXG4vKipcbiAqIEFic3RyYWN0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBodHRwIG1ldGhvZCBkZWNvcmF0b3JcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gVGRBYnN0cmFjdE1ldGhvZChjb25maWc6IHtcbiAgbWV0aG9kOiBUZEh0dHBNZXRob2QsXG4gIHBhdGg6IHN0cmluZyxcbiAgb3B0aW9ucz86IElUZEh0dHBSRVNUT3B0aW9ucyxcbn0pOiBGdW5jdGlvbiB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnksIHByb3BlcnR5TmFtZTogc3RyaW5nLCBkZXNjcmlwdG9yOiBUeXBlZFByb3BlcnR5RGVzY3JpcHRvcjxGdW5jdGlvbj4pOiBhbnkge1xuICAgIGxldCB3cmFwcGVkRnVuY3Rpb246IEZ1bmN0aW9uID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgICAvLyByZXBsYWNlIG1ldGhvZCBjYWxsIHdpdGggb3VyIG93biBhbmQgcHJveHkgaXRcbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24gKCk6IGFueSB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgcmVwbGFjZWRQYXRoOiBzdHJpbmcgPSBjb25maWcucGF0aDtcbiAgICAgICAgbGV0IHBhcmFtZXRlcnM6IHsgaW5kZXg6IG51bWJlciwgcGFyYW06IHN0cmluZywgdHlwZTogVGRQYXJhbVR5cGUgfVtdID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YSh0ZEh0dHBSRVNUUGFyYW0sIHRhcmdldCwgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgbGV0IG5ld0FyZ3M6IGFueVtdID0gW107XG4gICAgICAgIGxldCBib2R5OiBhbnk7XG4gICAgICAgIGxldCBxdWVyeVBhcmFtczogSHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgICAgIGlmIChwYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgLy8gbWFwIHBhcmFtZXRlcnMgYW5kIHNlZSB3aGljaCB0eXBlIHRoZXkgYXJlIHRvIGFjdCBvbiB0aGVtXG4gICAgICAgICAgZm9yIChsZXQgcGFyYW1ldGVyIG9mIHBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXIudHlwZSA9PT0gJ3BhcmFtJykge1xuICAgICAgICAgICAgICBuZXdBcmdzW3BhcmFtZXRlci5pbmRleF0gPSBhcmd1bWVudHNbcGFyYW1ldGVyLmluZGV4XTtcbiAgICAgICAgICAgICAgcmVwbGFjZWRQYXRoID0gcmVwbGFjZWRQYXRoLnJlcGxhY2UoJzonICsgcGFyYW1ldGVyLnBhcmFtLCBhcmd1bWVudHNbcGFyYW1ldGVyLmluZGV4XSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBhcmFtZXRlci50eXBlID09PSAnYm9keScpIHtcbiAgICAgICAgICAgICAgbmV3QXJnc1twYXJhbWV0ZXIuaW5kZXhdID0gYXJndW1lbnRzW3BhcmFtZXRlci5pbmRleF07XG4gICAgICAgICAgICAgIGJvZHkgPSBhcmd1bWVudHNbcGFyYW1ldGVyLmluZGV4XTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyYW1ldGVyLnR5cGUgPT09ICdxdWVyeVBhcmFtcycpIHtcbiAgICAgICAgICAgICAgbmV3QXJnc1twYXJhbWV0ZXIuaW5kZXhdID0gYXJndW1lbnRzW3BhcmFtZXRlci5pbmRleF07XG4gICAgICAgICAgICAgIGxldCBxUGFyYW1zOiBIdHRwUGFyYW1zIHwge1trZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdfSA9IGFyZ3VtZW50c1twYXJhbWV0ZXIuaW5kZXhdO1xuICAgICAgICAgICAgICBpZiAoY29uZmlnLm9wdGlvbnMgJiYgY29uZmlnLm9wdGlvbnMucGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMgPSBwYXJzZVBhcmFtcyhxdWVyeVBhcmFtcywgY29uZmlnLm9wdGlvbnMucGFyYW1zKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAocVBhcmFtcykge1xuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zID0gcGFyc2VQYXJhbXMocXVlcnlQYXJhbXMsIHFQYXJhbXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBsZXQgdXJsOiBzdHJpbmcgPSB0aGlzLmJhc2VVcmwgKyByZXBsYWNlZFBhdGg7XG4gICAgICAgIGxldCBvcHRpb25zOiBJVGRIdHRwUkVTVE9wdGlvbnNXaXRoQm9keSA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZy5vcHRpb25zLCB7XG4gICAgICAgICAgYm9keTogYm9keSxcbiAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1zLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIGxldCByZXF1ZXN0OiBhbnkgPSB0aGlzLmJ1aWxkUmVxdWVzdChjb25maWcubWV0aG9kLCB1cmwsIG9wdGlvbnMpO1xuICAgICAgICBpZiAocGFyYW1ldGVycykge1xuICAgICAgICAgIC8vIHNlZSB3aGljaCBvbmUgd2FzIHRoZSByZXNwb25zZSBwYXJhbWV0ZXIgc28gd2UgY2FuIHNldCB0aGUgcmVxdWVzdCBvYnNlcnZhYmxlXG4gICAgICAgICAgZm9yIChsZXQgcGFyYW1ldGVyIG9mIHBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXIudHlwZSA9PT0gJ3Jlc3BvbnNlJykge1xuICAgICAgICAgICAgICBuZXdBcmdzW3BhcmFtZXRlci5pbmRleF0gPSByZXF1ZXN0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgbGV0IHJlc3BvbnNlOiBhbnkgPSB3cmFwcGVkRnVuY3Rpb24uYXBwbHkodGhpcywgbmV3QXJncyk7XG4gICAgICAgIC8vIGlmIHRoZSByZXNwb25zZSBpcyBOT09QX0hUVFAgb3IgdW5kZWZpbmVkLCB0aGVuIHdlIHJldHVybiB0aGUgcmVxdWVzdCBhcyBpdCBpc1xuICAgICAgICAvLyBlbHNlIHdlIHJldHVybiB0aGUgcmVzcG9uc2UgZnJvbSB0aGUgaW5uZXIgZnVuY3Rpb25cbiAgICAgICAgaWYgKHJlc3BvbnNlID09PSBOT09QX0hUVFAgfHwgcmVzcG9uc2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG59XG4iXX0=