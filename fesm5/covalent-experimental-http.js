import { __extends, __spread, __values } from 'tslib';
import { Injectable, Injector, ɵReflectionCapabilities, Optional, SkipSelf, Self, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { HttpInterceptorService } from '@covalent/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var NOOP_HTTP = of(undefined);
/**
 * DO NOT MODIFY
 * Taken from angular since they dont expose this function
 * This is used internally to inject services from the constructor of the base service using the mixinHttp
 * \@internal
 * @param {?} types
 * @param {?} injector
 * @return {?}
 */
function injectArgs(types, injector) {
    /** @type {?} */
    var args = [];
    for (var i = 0; i < types.length; i++) {
        /** @type {?} */
        var arg = types[i];
        if (Array.isArray(arg)) {
            if (arg.length === 0) {
                throw new Error('Arguments array must have arguments.');
            }
            /** @type {?} */
            var type = undefined;
            /** @type {?} */
            var flags = 0 /* Default */;
            for (var j = 0; j < arg.length; j++) {
                /** @type {?} */
                var meta = arg[j];
                if (meta instanceof Optional || meta.ngMetadataName === 'Optional') {
                    /* tslint:disable */
                    flags |= 8 /* Optional */;
                }
                else if (meta instanceof SkipSelf || meta.ngMetadataName === 'SkipSelf') {
                    flags |= 4 /* SkipSelf */;
                }
                else if (meta instanceof Self || meta.ngMetadataName === 'Self') {
                    flags |= 2 /* Self */;
                }
                else if (meta instanceof Inject) {
                    type = meta.token;
                }
                else {
                    type = meta;
                }
                /* tslint:enable */
            }
            args.push(injector.get((/** @type {?} */ (type)), flags));
        }
        else {
            args.push(injector.get(arg));
        }
    }
    return args;
}
/**
 * Mixin to augment a service with http helpers.
 * \@internal
 * @param {?} base
 * @param {?} config
 * @return {?}
 */
function mixinHttp(base, config) {
    /**
     * Internal class used to get an instance of Injector for internal usage plus also
     * a way to inject services from the constructor of the underlying service
     * \@internal
     * @abstract
     */
    var HttpInternalClass = /** @class */ (function (_super) {
        __extends(HttpInternalClass, _super);
        function HttpInternalClass(_injector) {
            var _this = _super.apply(this, __spread(injectArgs(new ɵReflectionCapabilities().parameters(base), _injector))) || this;
            _this._injector = _injector;
            _this.buildConfig();
            return _this;
        }
        HttpInternalClass.decorators = [
            { type: Injectable },
        ];
        /** @nocollapse */
        HttpInternalClass.ctorParameters = function () { return [
            { type: Injector }
        ]; };
        return HttpInternalClass;
    }(base));
    /**
     * Actuall class being returned with all the hooks for http usage
     * @internal
     */
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(class_1.prototype, "baseUrl", {
            get: /**
             * @return {?}
             */
            function () {
                return (typeof (this.basePath) === 'string' ?
                    this.basePath.replace(/\/$/, '') : '') + this._baseUrl;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Method used to setup the configuration parameters and get an instance of the http service
         */
        /**
         * Method used to setup the configuration parameters and get an instance of the http service
         * @return {?}
         */
        class_1.prototype.buildConfig = /**
         * Method used to setup the configuration parameters and get an instance of the http service
         * @return {?}
         */
        function () {
            this.http = this._injector.get(config.httpServiceType || HttpClient);
            this._baseUrl = config && config.baseUrl ? config.baseUrl.replace(/\/$/, '') : '';
            this._baseHeaders = config && config.baseHeaders ? config.baseHeaders : new HttpHeaders();
            this._defaultObserve = config && config.defaultObserve ? config.defaultObserve : 'body';
            this._defaultResponseType = config && config.defaultResponseType ? config.defaultResponseType : 'json';
        };
        /**
         * Method used to build the default headers using the base headers
         */
        /**
         * Method used to build the default headers using the base headers
         * @return {?}
         */
        class_1.prototype.buildHeaders = /**
         * Method used to build the default headers using the base headers
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var headersObj = {};
            this._baseHeaders.keys().forEach(function (key) {
                headersObj[key] = _this._baseHeaders.get(key);
            });
            return new HttpHeaders(headersObj);
        };
        /* tslint:disable-next-line */
        /* tslint:disable-next-line */
        /**
         * @template HttpResponse
         * @param {?} method
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
        class_1.prototype.buildRequest = /* tslint:disable-next-line */
        /**
         * @template HttpResponse
         * @param {?} method
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
        function (method, url, options) {
            return this._buildRequest(method, url, options);
        };
        /**
         * Method used to build the request depending on the `http` service and TdHttpMethod
         */
        /**
         * Method used to build the request depending on the `http` service and TdHttpMethod
         * @param {?} method
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
        class_1.prototype._buildRequest = /**
         * Method used to build the request depending on the `http` service and TdHttpMethod
         * @param {?} method
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
        function (method, url, options) {
            if (options === void 0) { options = {}; }
            if (!options.responseType) {
                options.responseType = this._defaultResponseType;
            }
            if (!options.observe) {
                options.observe = this._defaultObserve;
            }
            if (!options.headers) {
                options.headers = this.buildHeaders();
            }
            else {
                /** @type {?} */
                var headers_1 = this.buildHeaders();
                if (options.headers instanceof HttpHeaders) {
                    ((/** @type {?} */ (options.headers))).keys().forEach(function (key) {
                        headers_1 = headers_1.set(key, ((/** @type {?} */ (options.headers))).get(key));
                    });
                }
                else {
                    for (var key in options.headers) {
                        headers_1 = headers_1.set(key, (/** @type {?} */ (options.headers[key])));
                    }
                }
                options.headers = headers_1;
            }
            if (this.http instanceof HttpInterceptorService || this.http instanceof Http) {
                /** @type {?} */
                var headers_2 = new Headers();
                ((/** @type {?} */ (options.headers))).keys().forEach(function (key) {
                    headers_2.set(key, ((/** @type {?} */ (options.headers))).get(key));
                });
                /** @type {?} */
                var params_1 = new URLSearchParams();
                if (options.params) {
                    if (options.params instanceof HttpParams) {
                        options.params.keys().forEach(function (key) {
                            params_1.set(key, ((/** @type {?} */ (options.params))).get(key));
                        });
                    }
                    else {
                        for (var key in options.params) {
                            params_1.set(key, (/** @type {?} */ (options.params[key])));
                        }
                    }
                }
                /** @type {?} */
                var observable = ((/** @type {?} */ (this.http))).request(url, {
                    headers: headers_2,
                    method: method,
                    body: options.body ? options.body : undefined,
                    params: params_1,
                });
                if (options.observe === 'body') {
                    if (options.responseType === 'json') {
                        return (/** @type {?} */ (observable.pipe(map(function (response) { return response.json(); }))));
                    }
                    else if (options.responseType === 'text') {
                        return (/** @type {?} */ (observable.pipe(map(function (response) { return response.text(); }))));
                    }
                    else if (options.responseType === 'blob') {
                        return (/** @type {?} */ (observable.pipe(map(function (response) { return response.blob(); }))));
                    }
                    else if (options.responseType === 'arraybuffer') {
                        return (/** @type {?} */ (observable.pipe(map(function (response) { return response.arrayBuffer(); }))));
                    }
                }
                else if (options.observe === 'events') {
                    throw Error('"events" not suppported in @angular/http');
                }
                return observable;
            }
            else {
                return ((/** @type {?} */ (this.http))).request(method, url, options);
            }
        };
        return class_1;
    }(HttpInternalClass));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var tdHttpRESTParam = Symbol('TdHttpRESTParam');
/**
 * Abstract implementation of the http param decorator
 * \@internal
 * @param {?} type
 * @param {?=} param
 * @return {?}
 */
function TdAbstractParam(type, param) {
    return function (target, propertyKey, parameterIndex) {
        /** @type {?} */
        var parameters = Reflect.getOwnMetadata(tdHttpRESTParam, target, propertyKey) || [];
        parameters.push({
            index: parameterIndex,
            param: param,
            type: type,
        });
        Reflect.defineMetadata(tdHttpRESTParam, parameters, target, propertyKey);
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Method used to copy parameters from an array or HttpParams object
 * into a centrilized HttpParams object
 * \@internal
 * @param {?} target
 * @param {?} source
 * @return {?}
 */
function parseParams(target, source) {
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
function TdAbstractMethod(config) {
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
                        for (var parameters_1 = __values(parameters), parameters_1_1 = parameters_1.next(); !parameters_1_1.done; parameters_1_1 = parameters_1.next()) {
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
                        for (var parameters_2 = __values(parameters), parameters_2_1 = parameters_2.next(); !parameters_2_1.done; parameters_2_1 = parameters_2.next()) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Decorator that adds GET request capabilities to a method
 * @param {?} config
 * @return {?}
 */
function GET(config) {
    return TdAbstractMethod((/** @type {?} */ (Object.assign({
        method: 'GET',
    }, config))));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Decorator that adds POST request capabilities to a method
 * @param {?} config
 * @return {?}
 */
function POST(config) {
    return TdAbstractMethod((/** @type {?} */ (Object.assign({
        method: 'POST',
    }, config))));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Decorator that adds PATCH request capabilities to a method
 * @param {?} config
 * @return {?}
 */
function PATCH(config) {
    return TdAbstractMethod((/** @type {?} */ (Object.assign({
        method: 'PATCH',
    }, config))));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Decorator that adds PUT request capabilities to a method
 * @param {?} config
 * @return {?}
 */
function PUT(config) {
    return TdAbstractMethod((/** @type {?} */ (Object.assign({
        method: 'PUT',
    }, config))));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Decorator that adds DELETE request capabilities to a method
 * @param {?} config
 * @return {?}
 */
function DELETE(config) {
    return TdAbstractMethod((/** @type {?} */ (Object.assign({
        method: 'DELETE',
    }, config))));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Decorator used to give a service http capabilities
 * @param {?} config
 * @return {?}
 */
function TdHttp(config) {
    return function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return class_1;
        }(mixinHttp(constructor, config)));
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Decorator that is used to define which parameter is an http parameter in a method
 * @param {?} param
 * @return {?}
 */
function TdParam(param) {
    return TdAbstractParam('param', param);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Decorator that is used to define which parameter is the http body in a method
 * @return {?}
 */
function TdBody() {
    return TdAbstractParam('body');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Decorator that is used to define which parameter is the http response in a method
 * @return {?}
 */
function TdResponse() {
    return TdAbstractParam('response');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Decorator that is used to define which parameter is the http query parameters in a method
 * @return {?}
 */
function TdQueryParams() {
    return TdAbstractParam('queryParams');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { GET, POST, PATCH, PUT, DELETE, TdHttp, TdParam, TdBody, TdResponse, TdQueryParams, mixinHttp, NOOP_HTTP };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtZXhwZXJpbWVudGFsLWh0dHAuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvaHR0cC9odHRwLm1peGluLnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2h0dHAvYWN0aW9ucy9wYXJhbXMvYWJzdHJhY3QtcGFyYW0uZGVjb3JhdG9yLnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2h0dHAvYWN0aW9ucy9tZXRob2RzL2Fic3RyYWN0LW1ldGhvZC5kZWNvcmF0b3IudHMiLCJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvaHR0cC9hY3Rpb25zL21ldGhvZHMvZ2V0LmRlY29yYXRvci50cyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9odHRwL2FjdGlvbnMvbWV0aG9kcy9wb3N0LmRlY29yYXRvci50cyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9odHRwL2FjdGlvbnMvbWV0aG9kcy9wYXRjaC5kZWNvcmF0b3IudHMiLCJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvaHR0cC9hY3Rpb25zL21ldGhvZHMvcHV0LmRlY29yYXRvci50cyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9odHRwL2FjdGlvbnMvbWV0aG9kcy9kZWxldGUuZGVjb3JhdG9yLnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2h0dHAvYWN0aW9ucy9jbGFzcy9odHRwLmRlY29yYXRvci50cyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9odHRwL2FjdGlvbnMvcGFyYW1zL3BhcmFtLmRlY29yYXRvci50cyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9odHRwL2FjdGlvbnMvcGFyYW1zL2JvZHkuZGVjb3JhdG9yLnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2h0dHAvYWN0aW9ucy9wYXJhbXMvcmVzcG9uc2UuZGVjb3JhdG9yLnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2h0dHAvYWN0aW9ucy9wYXJhbXMvcXVlcnktcGFyYW1zLmRlY29yYXRvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlLCBJbmplY3RhYmxlLCBJbmplY3Rvciwgw4nCtVJlZmxlY3Rpb25DYXBhYmlsaXRpZXMsIEluamVjdEZsYWdzLCBPcHRpb25hbCxcbiAgU2tpcFNlbGYsIFNlbGYsIEluamVjdCwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMsIFVSTFNlYXJjaFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yU2VydmljZSB9IGZyb20gJ0Bjb3ZhbGVudC9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IHR5cGUgVGRIdHRwTWV0aG9kID0gJ0dFVCcgfCAnUE9TVCcgfCAnUEFUQ0gnIHwgJ0RFTEVURScgfCAnSEVBRCcgfCAnUFVUJyB8ICdPUFRJT05TJztcblxuZXhwb3J0IHR5cGUgVGRIdHRwUkVTVFJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG5cbmV4cG9ydCB0eXBlIFRkSHR0cFJFU1RPYnNlcnZlID0gJ2JvZHknIHwgJ3Jlc3BvbnNlJyB8ICdldmVudHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZEh0dHBSRVNUQ29uZmlnIHtcbiAgYmFzZUhlYWRlcnM/OiBIdHRwSGVhZGVycztcbiAgYmFzZVVybDogc3RyaW5nO1xuICBkZWZhdWx0T2JzZXJ2ZT86IFRkSHR0cFJFU1RPYnNlcnZlO1xuICBkZWZhdWx0UmVzcG9uc2VUeXBlPzogVGRIdHRwUkVTVFJlc3BvbnNlVHlwZTtcbiAgaHR0cFNlcnZpY2VUeXBlPzogVHlwZTxIdHRwIHwgSHR0cENsaWVudCB8IEh0dHBJbnRlcmNlcHRvclNlcnZpY2U+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZEh0dHBSRVNUT3B0aW9ucyB7XG4gIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcbiAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgfTtcbiAgb2JzZXJ2ZT86IFRkSHR0cFJFU1RPYnNlcnZlO1xuICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xuICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gIH07XG4gIHJlc3BvbnNlVHlwZT86IFRkSHR0cFJFU1RSZXNwb25zZVR5cGU7XG4gIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRIdHRwUkVTVE9wdGlvbnNXaXRoQm9keSBleHRlbmRzIElUZEh0dHBSRVNUT3B0aW9ucyB7XG4gIGJvZHk/OiBhbnk7XG59XG5cbmV4cG9ydCBjb25zdCBOT09QX0hUVFA6IE9ic2VydmFibGU8YW55PiA9IG9mKHVuZGVmaW5lZCk7XG5cbnR5cGUgQ29uc3RydWN0b3I8VD4gPSBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBUO1xuXG4vKipcbiAqIERPIE5PVCBNT0RJRllcbiAqIFRha2VuIGZyb20gYW5ndWxhciBzaW5jZSB0aGV5IGRvbnQgZXhwb3NlIHRoaXMgZnVuY3Rpb25cbiAqIFRoaXMgaXMgdXNlZCBpbnRlcm5hbGx5IHRvIGluamVjdCBzZXJ2aWNlcyBmcm9tIHRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgYmFzZSBzZXJ2aWNlIHVzaW5nIHRoZSBtaXhpbkh0dHBcbiAqIEBpbnRlcm5hbFxuICovXG5mdW5jdGlvbiBpbmplY3RBcmdzKHR5cGVzOiAoVHlwZTxhbnk+fCBJbmplY3Rpb25Ub2tlbjxhbnk+fCBhbnlbXSlbXSwgaW5qZWN0b3I6IEluamVjdG9yKTogYW55W10ge1xuICBjb25zdCBhcmdzOiBhbnlbXSA9IFtdO1xuICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdHlwZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBhcmc6IGFueSA9IHR5cGVzW2ldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcbiAgICAgIGlmIChhcmcubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQXJndW1lbnRzIGFycmF5IG11c3QgaGF2ZSBhcmd1bWVudHMuJyk7XG4gICAgICB9XG4gICAgICBsZXQgdHlwZTogVHlwZTxhbnk+fHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAgIGxldCBmbGFnczogSW5qZWN0RmxhZ3MgPSBJbmplY3RGbGFncy5EZWZhdWx0O1xuXG4gICAgICBmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgYXJnLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IG1ldGE6IGFueSA9IGFyZ1tqXTtcbiAgICAgICAgaWYgKG1ldGEgaW5zdGFuY2VvZiBPcHRpb25hbCB8fCBtZXRhLm5nTWV0YWRhdGFOYW1lID09PSAnT3B0aW9uYWwnKSB7XG4gICAgICAgICAgLyogdHNsaW50OmRpc2FibGUgKi9cbiAgICAgICAgICBmbGFncyB8PSBJbmplY3RGbGFncy5PcHRpb25hbDtcbiAgICAgICAgfSBlbHNlIGlmIChtZXRhIGluc3RhbmNlb2YgU2tpcFNlbGYgfHwgbWV0YS5uZ01ldGFkYXRhTmFtZSA9PT0gJ1NraXBTZWxmJykge1xuICAgICAgICAgIGZsYWdzIHw9IEluamVjdEZsYWdzLlNraXBTZWxmO1xuICAgICAgICB9IGVsc2UgaWYgKG1ldGEgaW5zdGFuY2VvZiBTZWxmIHx8IG1ldGEubmdNZXRhZGF0YU5hbWUgPT09ICdTZWxmJykge1xuICAgICAgICAgIGZsYWdzIHw9IEluamVjdEZsYWdzLlNlbGY7XG4gICAgICAgIH0gZWxzZSBpZiAobWV0YSBpbnN0YW5jZW9mIEluamVjdCkge1xuICAgICAgICAgIHR5cGUgPSBtZXRhLnRva2VuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHR5cGUgPSBtZXRhO1xuICAgICAgICB9XG4gICAgICAgIC8qIHRzbGludDplbmFibGUgKi9cbiAgICAgIH1cblxuICAgICAgYXJncy5wdXNoKGluamVjdG9yLmdldCh0eXBlICEsIGZsYWdzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyZ3MucHVzaChpbmplY3Rvci5nZXQoYXJnKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcmdzO1xufVxuXG4vKiogXG4gKiBNaXhpbiB0byBhdWdtZW50IGEgc2VydmljZSB3aXRoIGh0dHAgaGVscGVycy5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5IdHRwKGJhc2U6IGFueSwgY29uZmlnOiBJVGRIdHRwUkVTVENvbmZpZyk6IENvbnN0cnVjdG9yPGFueT4ge1xuICAvKipcbiAgICogSW50ZXJuYWwgY2xhc3MgdXNlZCB0byBnZXQgYW4gaW5zdGFuY2Ugb2YgSW5qZWN0b3IgZm9yIGludGVybmFsIHVzYWdlIHBsdXMgYWxzb1xuICAgKiBhIHdheSB0byBpbmplY3Qgc2VydmljZXMgZnJvbSB0aGUgY29uc3RydWN0b3Igb2YgdGhlIHVuZGVybHlpbmcgc2VydmljZVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIEBJbmplY3RhYmxlKClcbiAgYWJzdHJhY3QgY2xhc3MgSHR0cEludGVybmFsQ2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgX2luamVjdG9yOiBJbmplY3Rvcikge1xuICAgICAgc3VwZXIoLi4uaW5qZWN0QXJncyhuZXcgw4nCtVJlZmxlY3Rpb25DYXBhYmlsaXRpZXMoKS5wYXJhbWV0ZXJzKGJhc2UpLCBfaW5qZWN0b3IpKTtcbiAgICAgIHRoaXMuYnVpbGRDb25maWcoKTtcbiAgICB9XG4gICAgYWJzdHJhY3QgYnVpbGRDb25maWcoKTogdm9pZDtcbiAgfVxuICAvKipcbiAgICogQWN0dWFsbCBjbGFzcyBiZWluZyByZXR1cm5lZCB3aXRoIGFsbCB0aGUgaG9va3MgZm9yIGh0dHAgdXNhZ2VcbiAgICogQGludGVybmFsXG4gICAqL1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBIdHRwSW50ZXJuYWxDbGFzcyB7XG4gICAgcHJpdmF0ZSBfYmFzZVVybDogc3RyaW5nO1xuICAgIGdldCBiYXNlVXJsKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gKHR5cGVvZih0aGlzLmJhc2VQYXRoKSA9PT0gJ3N0cmluZycgP1xuICAgICAgICB0aGlzLmJhc2VQYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgOiAnJykgKyB0aGlzLl9iYXNlVXJsO1xuICAgIH1cbiAgICBwcml2YXRlIF9iYXNlSGVhZGVyczogSHR0cEhlYWRlcnM7XG4gICAgcHJpdmF0ZSBfZGVmYXVsdE9ic2VydmU/OiBUZEh0dHBSRVNUT2JzZXJ2ZTtcbiAgICBwcml2YXRlIF9kZWZhdWx0UmVzcG9uc2VUeXBlPzogVGRIdHRwUkVTVFJlc3BvbnNlVHlwZTtcblxuICAgIGh0dHA6IEh0dHBDbGllbnQgfCBIdHRwSW50ZXJjZXB0b3JTZXJ2aWNlIHwgSHR0cDtcblxuICAgIC8qKlxuICAgICAqIE1ldGhvZCB1c2VkIHRvIHNldHVwIHRoZSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgYW5kIGdldCBhbiBpbnN0YW5jZSBvZiB0aGUgaHR0cCBzZXJ2aWNlXG4gICAgICovXG4gICAgYnVpbGRDb25maWcoKTogdm9pZCB7XG4gICAgICB0aGlzLmh0dHAgPSB0aGlzLl9pbmplY3Rvci5nZXQoY29uZmlnLmh0dHBTZXJ2aWNlVHlwZSB8fCBIdHRwQ2xpZW50KTtcbiAgICAgIHRoaXMuX2Jhc2VVcmwgPSBjb25maWcgJiYgY29uZmlnLmJhc2VVcmwgPyBjb25maWcuYmFzZVVybC5yZXBsYWNlKC9cXC8kLywgJycpIDogJyc7XG4gICAgICB0aGlzLl9iYXNlSGVhZGVycyA9IGNvbmZpZyAmJiBjb25maWcuYmFzZUhlYWRlcnMgPyBjb25maWcuYmFzZUhlYWRlcnMgOiBuZXcgSHR0cEhlYWRlcnMoKTtcbiAgICAgIHRoaXMuX2RlZmF1bHRPYnNlcnZlID0gY29uZmlnICYmIGNvbmZpZy5kZWZhdWx0T2JzZXJ2ZSA/IGNvbmZpZy5kZWZhdWx0T2JzZXJ2ZSA6ICdib2R5JztcbiAgICAgIHRoaXMuX2RlZmF1bHRSZXNwb25zZVR5cGUgPSBjb25maWcgJiYgY29uZmlnLmRlZmF1bHRSZXNwb25zZVR5cGUgPyBjb25maWcuZGVmYXVsdFJlc3BvbnNlVHlwZSA6ICdqc29uJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdXNlZCB0byBidWlsZCB0aGUgZGVmYXVsdCBoZWFkZXJzIHVzaW5nIHRoZSBiYXNlIGhlYWRlcnNcbiAgICAgKi9cbiAgICBidWlsZEhlYWRlcnMoKTogSHR0cEhlYWRlcnMge1xuICAgICAgbGV0IGhlYWRlcnNPYmo6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0ge307XG4gICAgICB0aGlzLl9iYXNlSGVhZGVycy5rZXlzKCkuZm9yRWFjaCgoa2V5OiBhbnkpID0+IHtcbiAgICAgICAgaGVhZGVyc09ialtrZXldID0gdGhpcy5fYmFzZUhlYWRlcnMuZ2V0KGtleSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgSHR0cEhlYWRlcnMoaGVhZGVyc09iaik7XG4gICAgfVxuXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgYnVpbGRSZXF1ZXN0PFJlc3BvbnNlPihtZXRob2Q6ICdQT1NUJyB8ICdQVVQnIHwgJ1BBVENIJywgdXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBJVGRIdHRwUkVTVE9wdGlvbnNXaXRoQm9keSk6IE9ic2VydmFibGU8UmVzcG9uc2U+O1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIGJ1aWxkUmVxdWVzdDxIdHRwUmVzcG9uc2U+KG1ldGhvZDogJ1BPU1QnIHwgJ1BVVCcgfCAnUEFUQ0gnLCB1cmw6IHN0cmluZywgb3B0aW9ucz86IElUZEh0dHBSRVNUT3B0aW9uc1dpdGhCb2R5KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U+O1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIGJ1aWxkUmVxdWVzdDxSZXNwb25zZT4obWV0aG9kOiAnR0VUJyB8ICdERUxFVEUnLCB1cmw6IHN0cmluZywgb3B0aW9ucz86IElUZEh0dHBSRVNUT3B0aW9ucyk6IE9ic2VydmFibGU8UmVzcG9uc2U+O1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIGJ1aWxkUmVxdWVzdDxIdHRwUmVzcG9uc2U+KG1ldGhvZDogJ0dFVCcgfCAnREVMRVRFJywgdXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBJVGRIdHRwUkVTVE9wdGlvbnMpOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZT47XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgYnVpbGRSZXF1ZXN0PFJlc3BvbnNlPihtZXRob2Q6IFRkSHR0cE1ldGhvZCwgdXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBJVGRIdHRwUkVTVE9wdGlvbnNXaXRoQm9keSk6IE9ic2VydmFibGU8UmVzcG9uc2U+O1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIGJ1aWxkUmVxdWVzdDxIdHRwUmVzcG9uc2U+KG1ldGhvZDogVGRIdHRwTWV0aG9kLCB1cmw6IHN0cmluZywgb3B0aW9ucz86IElUZEh0dHBSRVNUT3B0aW9uc1dpdGhCb2R5KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U+IHtcbiAgICAgIHJldHVybiB0aGlzLl9idWlsZFJlcXVlc3QobWV0aG9kLCB1cmwsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ldGhvZCB1c2VkIHRvIGJ1aWxkIHRoZSByZXF1ZXN0IGRlcGVuZGluZyBvbiB0aGUgYGh0dHBgIHNlcnZpY2UgYW5kIFRkSHR0cE1ldGhvZFxuICAgICAqL1xuICAgIHByaXZhdGUgX2J1aWxkUmVxdWVzdChtZXRob2Q6IFRkSHR0cE1ldGhvZCwgdXJsOiBzdHJpbmcsIG9wdGlvbnM6IElUZEh0dHBSRVNUT3B0aW9uc1dpdGhCb2R5ID0ge30pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgaWYgKCFvcHRpb25zLnJlc3BvbnNlVHlwZSkge1xuICAgICAgICBvcHRpb25zLnJlc3BvbnNlVHlwZSA9IHRoaXMuX2RlZmF1bHRSZXNwb25zZVR5cGU7XG4gICAgICB9XG4gICAgICBpZiAoIW9wdGlvbnMub2JzZXJ2ZSkge1xuICAgICAgICBvcHRpb25zLm9ic2VydmUgPSB0aGlzLl9kZWZhdWx0T2JzZXJ2ZTtcbiAgICAgIH1cbiAgICAgIGlmICghb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVycyA9IHRoaXMuYnVpbGRIZWFkZXJzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgaGVhZGVyczogSHR0cEhlYWRlcnMgPSB0aGlzLmJ1aWxkSGVhZGVycygpO1xuICAgICAgICBpZiAob3B0aW9ucy5oZWFkZXJzIGluc3RhbmNlb2YgSHR0cEhlYWRlcnMpIHtcbiAgICAgICAgICAoPEh0dHBIZWFkZXJzPm9wdGlvbnMuaGVhZGVycykua2V5cygpLmZvckVhY2goKGtleTogYW55KSA9PiB7XG4gICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoa2V5LCAoPEh0dHBIZWFkZXJzPm9wdGlvbnMuaGVhZGVycykuZ2V0KGtleSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAobGV0IGtleSBpbiBvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldChrZXksIDxhbnk+b3B0aW9ucy5oZWFkZXJzW2tleV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLmhlYWRlcnMgPSBoZWFkZXJzO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaHR0cCBpbnN0YW5jZW9mIEh0dHBJbnRlcmNlcHRvclNlcnZpY2UgfHwgdGhpcy5odHRwIGluc3RhbmNlb2YgSHR0cCkge1xuICAgICAgICBsZXQgaGVhZGVyczogSGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgICg8SHR0cEhlYWRlcnM+b3B0aW9ucy5oZWFkZXJzKS5rZXlzKCkuZm9yRWFjaCgoa2V5OiBhbnkpID0+IHtcbiAgICAgICAgICBoZWFkZXJzLnNldChrZXksICg8SHR0cEhlYWRlcnM+b3B0aW9ucy5oZWFkZXJzKS5nZXQoa2V5KSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgcGFyYW1zOiBVUkxTZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgICAgIGlmIChvcHRpb25zLnBhcmFtcykge1xuICAgICAgICAgIGlmIChvcHRpb25zLnBhcmFtcyBpbnN0YW5jZW9mIEh0dHBQYXJhbXMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMucGFyYW1zLmtleXMoKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICBwYXJhbXMuc2V0KGtleSwgKDxIdHRwUGFyYW1zPm9wdGlvbnMucGFyYW1zKS5nZXQoa2V5KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIG9wdGlvbnMucGFyYW1zKSB7XG4gICAgICAgICAgICAgIHBhcmFtcy5zZXQoa2V5LCA8YW55Pm9wdGlvbnMucGFyYW1zW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxSZXNwb25zZT4gPSAoPEh0dHBJbnRlcmNlcHRvclNlcnZpY2U+dGhpcy5odHRwKS5yZXF1ZXN0KHVybCwge1xuICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgYm9keTogb3B0aW9ucy5ib2R5ID8gb3B0aW9ucy5ib2R5IDogdW5kZWZpbmVkLFxuICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG9wdGlvbnMub2JzZXJ2ZSA9PT0gJ2JvZHknKSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMucmVzcG9uc2VUeXBlID09PSAnanNvbicpIHtcbiAgICAgICAgICAgIHJldHVybiA8YW55Pm9ic2VydmFibGUucGlwZShcbiAgICAgICAgICAgICAgbWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSksXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgICAgcmV0dXJuIDxhbnk+b2JzZXJ2YWJsZS5waXBlKFxuICAgICAgICAgICAgICBtYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UudGV4dCgpKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnJlc3BvbnNlVHlwZSA9PT0gJ2Jsb2InKSB7XG4gICAgICAgICAgICByZXR1cm4gPGFueT5vYnNlcnZhYmxlLnBpcGUoXG4gICAgICAgICAgICAgIG1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5ibG9iKCkpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMucmVzcG9uc2VUeXBlID09PSAnYXJyYXlidWZmZXInKSB7XG4gICAgICAgICAgICByZXR1cm4gPGFueT5vYnNlcnZhYmxlLnBpcGUoXG4gICAgICAgICAgICAgIG1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5hcnJheUJ1ZmZlcigpKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMub2JzZXJ2ZSA9PT0gJ2V2ZW50cycpIHtcbiAgICAgICAgICB0aHJvdyBFcnJvcignXCJldmVudHNcIiBub3Qgc3VwcHBvcnRlZCBpbiBAYW5ndWxhci9odHRwJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKDxIdHRwQ2xpZW50PnRoaXMuaHR0cCkucmVxdWVzdChtZXRob2QsIHVybCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuIiwiZGVjbGFyZSBjb25zdCBSZWZsZWN0OiBhbnk7XG5leHBvcnQgdHlwZSBUZFBhcmFtVHlwZSA9ICdwYXJhbScgfCAncmVzcG9uc2UnIHwgJ2JvZHknIHwgJ3F1ZXJ5UGFyYW1zJztcblxuZXhwb3J0IGNvbnN0IHRkSHR0cFJFU1RQYXJhbTogU3ltYm9sID0gU3ltYm9sKCdUZEh0dHBSRVNUUGFyYW0nKTtcblxuLyoqXG4gKiBBYnN0cmFjdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgaHR0cCBwYXJhbSBkZWNvcmF0b3JcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gVGRBYnN0cmFjdFBhcmFtKHR5cGU6IFRkUGFyYW1UeXBlLCBwYXJhbT86IHN0cmluZyk6IEZ1bmN0aW9uIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHlLZXk6IHN0cmluZyB8IHN5bWJvbCwgcGFyYW1ldGVySW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGxldCBwYXJhbWV0ZXJzOiB7IGluZGV4OiBudW1iZXIsIHBhcmFtOiBzdHJpbmcsIHR5cGU6IFRkUGFyYW1UeXBlIH1bXSA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEodGRIdHRwUkVTVFBhcmFtLCB0YXJnZXQsIHByb3BlcnR5S2V5KSB8fCBbXTtcbiAgICBwYXJhbWV0ZXJzLnB1c2goe1xuICAgICAgaW5kZXg6IHBhcmFtZXRlckluZGV4LFxuICAgICAgcGFyYW06IHBhcmFtLFxuICAgICAgdHlwZTogdHlwZSxcbiAgICB9KTtcbiAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKHRkSHR0cFJFU1RQYXJhbSwgcGFyYW1ldGVycywgdGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBUZEh0dHBNZXRob2QsIElUZEh0dHBSRVNUT3B0aW9ucywgSVRkSHR0cFJFU1RPcHRpb25zV2l0aEJvZHksIE5PT1BfSFRUUCB9IGZyb20gJy4uLy4uL2h0dHAubWl4aW4nO1xuaW1wb3J0IHsgVGRQYXJhbVR5cGUsIHRkSHR0cFJFU1RQYXJhbSB9IGZyb20gJy4uL3BhcmFtcy9hYnN0cmFjdC1wYXJhbS5kZWNvcmF0b3InO1xuXG5kZWNsYXJlIGNvbnN0IFJlZmxlY3Q6IGFueTtcblxuLyoqXG4gKiBNZXRob2QgdXNlZCB0byBjb3B5IHBhcmFtZXRlcnMgZnJvbSBhbiBhcnJheSBvciBIdHRwUGFyYW1zIG9iamVjdFxuICogaW50byBhIGNlbnRyaWxpemVkIEh0dHBQYXJhbXMgb2JqZWN0XG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGFyYW1zKHRhcmdldDogSHR0cFBhcmFtcywgc291cmNlOiBIdHRwUGFyYW1zIHwge1trZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdfSk6IEh0dHBQYXJhbXMge1xuICBsZXQgcXVlcnlQYXJhbXM6IEh0dHBQYXJhbXMgPSB0YXJnZXQ7XG4gIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBIdHRwUGFyYW1zKSB7XG4gICAgc291cmNlLmtleXMoKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgLy8gc2tpcCBpZiB2YWx1ZSBpcyB1bmRlZmluZWRcbiAgICAgIGlmICgoPEh0dHBQYXJhbXM+c291cmNlKS5nZXQoa2V5KSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zID0gcXVlcnlQYXJhbXMuc2V0KGtleSwgKDxIdHRwUGFyYW1zPnNvdXJjZSkuZ2V0KGtleSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIC8vIHNraXAgaWYgdmFsdWUgaXMgdW5kZWZpbmVkXG4gICAgICBpZiAoPGFueT5zb3VyY2Vba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zID0gcXVlcnlQYXJhbXMuc2V0KGtleSwgPGFueT5zb3VyY2Vba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBxdWVyeVBhcmFtcztcbn1cblxuLyoqXG4gKiBBYnN0cmFjdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgaHR0cCBtZXRob2QgZGVjb3JhdG9yXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFRkQWJzdHJhY3RNZXRob2QoY29uZmlnOiB7XG4gIG1ldGhvZDogVGRIdHRwTWV0aG9kLFxuICBwYXRoOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBJVGRIdHRwUkVTVE9wdGlvbnMsXG59KTogRnVuY3Rpb24ge1xuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBwcm9wZXJ0eU5hbWU6IHN0cmluZywgZGVzY3JpcHRvcjogVHlwZWRQcm9wZXJ0eURlc2NyaXB0b3I8RnVuY3Rpb24+KTogYW55IHtcbiAgICBsZXQgd3JhcHBlZEZ1bmN0aW9uOiBGdW5jdGlvbiA9IGRlc2NyaXB0b3IudmFsdWU7XG4gICAgLy8gcmVwbGFjZSBtZXRob2QgY2FsbCB3aXRoIG91ciBvd24gYW5kIHByb3h5IGl0XG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uICgpOiBhbnkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlcGxhY2VkUGF0aDogc3RyaW5nID0gY29uZmlnLnBhdGg7XG4gICAgICAgIGxldCBwYXJhbWV0ZXJzOiB7IGluZGV4OiBudW1iZXIsIHBhcmFtOiBzdHJpbmcsIHR5cGU6IFRkUGFyYW1UeXBlIH1bXSA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEodGRIdHRwUkVTVFBhcmFtLCB0YXJnZXQsIHByb3BlcnR5TmFtZSk7XG4gICAgICAgIGxldCBuZXdBcmdzOiBhbnlbXSA9IFtdO1xuICAgICAgICBsZXQgYm9keTogYW55O1xuICAgICAgICBsZXQgcXVlcnlQYXJhbXM6IEh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xuICAgICAgICBpZiAocGFyYW1ldGVycykge1xuICAgICAgICAgIC8vIG1hcCBwYXJhbWV0ZXJzIGFuZCBzZWUgd2hpY2ggdHlwZSB0aGV5IGFyZSB0byBhY3Qgb24gdGhlbVxuICAgICAgICAgIGZvciAobGV0IHBhcmFtZXRlciBvZiBwYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICBpZiAocGFyYW1ldGVyLnR5cGUgPT09ICdwYXJhbScpIHtcbiAgICAgICAgICAgICAgbmV3QXJnc1twYXJhbWV0ZXIuaW5kZXhdID0gYXJndW1lbnRzW3BhcmFtZXRlci5pbmRleF07XG4gICAgICAgICAgICAgIHJlcGxhY2VkUGF0aCA9IHJlcGxhY2VkUGF0aC5yZXBsYWNlKCc6JyArIHBhcmFtZXRlci5wYXJhbSwgYXJndW1lbnRzW3BhcmFtZXRlci5pbmRleF0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJhbWV0ZXIudHlwZSA9PT0gJ2JvZHknKSB7XG4gICAgICAgICAgICAgIG5ld0FyZ3NbcGFyYW1ldGVyLmluZGV4XSA9IGFyZ3VtZW50c1twYXJhbWV0ZXIuaW5kZXhdO1xuICAgICAgICAgICAgICBib2R5ID0gYXJndW1lbnRzW3BhcmFtZXRlci5pbmRleF07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBhcmFtZXRlci50eXBlID09PSAncXVlcnlQYXJhbXMnKSB7XG4gICAgICAgICAgICAgIG5ld0FyZ3NbcGFyYW1ldGVyLmluZGV4XSA9IGFyZ3VtZW50c1twYXJhbWV0ZXIuaW5kZXhdO1xuICAgICAgICAgICAgICBsZXQgcVBhcmFtczogSHR0cFBhcmFtcyB8IHtba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXX0gPSBhcmd1bWVudHNbcGFyYW1ldGVyLmluZGV4XTtcbiAgICAgICAgICAgICAgaWYgKGNvbmZpZy5vcHRpb25zICYmIGNvbmZpZy5vcHRpb25zLnBhcmFtcykge1xuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zID0gcGFyc2VQYXJhbXMocXVlcnlQYXJhbXMsIGNvbmZpZy5vcHRpb25zLnBhcmFtcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHFQYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcyA9IHBhcnNlUGFyYW1zKHF1ZXJ5UGFyYW1zLCBxUGFyYW1zKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgbGV0IHVybDogc3RyaW5nID0gdGhpcy5iYXNlVXJsICsgcmVwbGFjZWRQYXRoO1xuICAgICAgICBsZXQgb3B0aW9uczogSVRkSHR0cFJFU1RPcHRpb25zV2l0aEJvZHkgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWcub3B0aW9ucywge1xuICAgICAgICAgIGJvZHk6IGJvZHksXG4gICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtcyxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBsZXQgcmVxdWVzdDogYW55ID0gdGhpcy5idWlsZFJlcXVlc3QoY29uZmlnLm1ldGhvZCwgdXJsLCBvcHRpb25zKTtcbiAgICAgICAgaWYgKHBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAvLyBzZWUgd2hpY2ggb25lIHdhcyB0aGUgcmVzcG9uc2UgcGFyYW1ldGVyIHNvIHdlIGNhbiBzZXQgdGhlIHJlcXVlc3Qgb2JzZXJ2YWJsZVxuICAgICAgICAgIGZvciAobGV0IHBhcmFtZXRlciBvZiBwYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICBpZiAocGFyYW1ldGVyLnR5cGUgPT09ICdyZXNwb25zZScpIHtcbiAgICAgICAgICAgICAgbmV3QXJnc1twYXJhbWV0ZXIuaW5kZXhdID0gcmVxdWVzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIGxldCByZXNwb25zZTogYW55ID0gd3JhcHBlZEZ1bmN0aW9uLmFwcGx5KHRoaXMsIG5ld0FyZ3MpO1xuICAgICAgICAvLyBpZiB0aGUgcmVzcG9uc2UgaXMgTk9PUF9IVFRQIG9yIHVuZGVmaW5lZCwgdGhlbiB3ZSByZXR1cm4gdGhlIHJlcXVlc3QgYXMgaXQgaXNcbiAgICAgICAgLy8gZWxzZSB3ZSByZXR1cm4gdGhlIHJlc3BvbnNlIGZyb20gdGhlIGlubmVyIGZ1bmN0aW9uXG4gICAgICAgIGlmIChyZXNwb25zZSA9PT0gTk9PUF9IVFRQIHx8IHJlc3BvbnNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xufVxuIiwiaW1wb3J0IHsgSVRkSHR0cFJFU1RPcHRpb25zIH0gZnJvbSAnLi4vLi4vJztcbmltcG9ydCB7IFRkQWJzdHJhY3RNZXRob2QgfSBmcm9tICcuL2Fic3RyYWN0LW1ldGhvZC5kZWNvcmF0b3InO1xuXG4vKipcbiAqIERlY29yYXRvciB0aGF0IGFkZHMgR0VUIHJlcXVlc3QgY2FwYWJpbGl0aWVzIHRvIGEgbWV0aG9kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBHRVQoY29uZmlnOiB7XG4gIHBhdGg6IHN0cmluZyxcbiAgb3B0aW9ucz86IElUZEh0dHBSRVNUT3B0aW9ucyxcbn0pOiBGdW5jdGlvbiB7XG4gIHJldHVybiBUZEFic3RyYWN0TWV0aG9kKDxhbnk+T2JqZWN0LmFzc2lnbih7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgfSwgY29uZmlnKSk7XG59XG4iLCJpbXBvcnQgeyBJVGRIdHRwUkVTVE9wdGlvbnMgfSBmcm9tICcuLi8uLi8nO1xuaW1wb3J0IHsgVGRBYnN0cmFjdE1ldGhvZCB9IGZyb20gJy4vYWJzdHJhY3QtbWV0aG9kLmRlY29yYXRvcic7XG5cbi8qKlxuICogRGVjb3JhdG9yIHRoYXQgYWRkcyBQT1NUIHJlcXVlc3QgY2FwYWJpbGl0aWVzIHRvIGEgbWV0aG9kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBQT1NUKGNvbmZpZzoge1xuICBwYXRoOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBJVGRIdHRwUkVTVE9wdGlvbnMsXG59KTogRnVuY3Rpb24ge1xuICByZXR1cm4gVGRBYnN0cmFjdE1ldGhvZCg8YW55Pk9iamVjdC5hc3NpZ24oe1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICB9LCBjb25maWcpKTtcbn1cbiIsImltcG9ydCB7IElUZEh0dHBSRVNUT3B0aW9ucyB9IGZyb20gJy4uLy4uLyc7XG5pbXBvcnQgeyBUZEFic3RyYWN0TWV0aG9kIH0gZnJvbSAnLi9hYnN0cmFjdC1tZXRob2QuZGVjb3JhdG9yJztcblxuLyoqXG4gKiBEZWNvcmF0b3IgdGhhdCBhZGRzIFBBVENIIHJlcXVlc3QgY2FwYWJpbGl0aWVzIHRvIGEgbWV0aG9kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBQQVRDSChjb25maWc6IHtcbiAgcGF0aDogc3RyaW5nLFxuICBvcHRpb25zPzogSVRkSHR0cFJFU1RPcHRpb25zLFxufSk6IEZ1bmN0aW9uIHtcbiAgcmV0dXJuIFRkQWJzdHJhY3RNZXRob2QoPGFueT5PYmplY3QuYXNzaWduKHtcbiAgICBtZXRob2Q6ICdQQVRDSCcsXG4gIH0sIGNvbmZpZykpO1xufVxuIiwiaW1wb3J0IHsgSVRkSHR0cFJFU1RPcHRpb25zIH0gZnJvbSAnLi4vLi4vJztcbmltcG9ydCB7IFRkQWJzdHJhY3RNZXRob2QgfSBmcm9tICcuL2Fic3RyYWN0LW1ldGhvZC5kZWNvcmF0b3InO1xuXG4vKipcbiAqIERlY29yYXRvciB0aGF0IGFkZHMgUFVUIHJlcXVlc3QgY2FwYWJpbGl0aWVzIHRvIGEgbWV0aG9kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBQVVQoY29uZmlnOiB7XG4gIHBhdGg6IHN0cmluZyxcbiAgb3B0aW9ucz86IElUZEh0dHBSRVNUT3B0aW9ucyxcbn0pOiBGdW5jdGlvbiB7XG4gIHJldHVybiBUZEFic3RyYWN0TWV0aG9kKDxhbnk+T2JqZWN0LmFzc2lnbih7XG4gICAgbWV0aG9kOiAnUFVUJyxcbiAgfSwgY29uZmlnKSk7XG59XG4iLCJpbXBvcnQgeyBJVGRIdHRwUkVTVE9wdGlvbnMgfSBmcm9tICcuLi8uLi8nO1xuaW1wb3J0IHsgVGRBYnN0cmFjdE1ldGhvZCB9IGZyb20gJy4vYWJzdHJhY3QtbWV0aG9kLmRlY29yYXRvcic7XG5cbi8qKlxuICogRGVjb3JhdG9yIHRoYXQgYWRkcyBERUxFVEUgcmVxdWVzdCBjYXBhYmlsaXRpZXMgdG8gYSBtZXRob2RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIERFTEVURShjb25maWc6IHtcbiAgcGF0aDogc3RyaW5nLFxuICBvcHRpb25zPzogSVRkSHR0cFJFU1RPcHRpb25zLFxufSk6IEZ1bmN0aW9uIHtcbiAgcmV0dXJuIFRkQWJzdHJhY3RNZXRob2QoPGFueT5PYmplY3QuYXNzaWduKHtcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxuICB9LCBjb25maWcpKTtcbn1cbiIsImltcG9ydCB7IG1peGluSHR0cCwgSVRkSHR0cFJFU1RDb25maWcgfSBmcm9tICcuLi8uLi9odHRwLm1peGluJztcblxuLyoqXG4gKiBEZWNvcmF0b3IgdXNlZCB0byBnaXZlIGEgc2VydmljZSBodHRwIGNhcGFiaWxpdGllc1xuICovXG5leHBvcnQgZnVuY3Rpb24gVGRIdHRwKGNvbmZpZzogSVRkSHR0cFJFU1RDb25maWcpOiBGdW5jdGlvbiB7XG4gIHJldHVybiBmdW5jdGlvbiA8VCBleHRlbmRzIHsgbmV3KC4uLmFyZ3M6IGFueVtdKToge30gfT4oY29uc3RydWN0b3I6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgbWl4aW5IdHRwKGNvbnN0cnVjdG9yLCBjb25maWcpIHtcbiAgICAgXG4gICAgfTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IFRkQWJzdHJhY3RQYXJhbSB9IGZyb20gJy4vYWJzdHJhY3QtcGFyYW0uZGVjb3JhdG9yJztcblxuLyoqXG4gKiBEZWNvcmF0b3IgdGhhdCBpcyB1c2VkIHRvIGRlZmluZSB3aGljaCBwYXJhbWV0ZXIgaXMgYW4gaHR0cCBwYXJhbWV0ZXIgaW4gYSBtZXRob2RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFRkUGFyYW0ocGFyYW06IHN0cmluZyk6IEZ1bmN0aW9uIHtcbiAgcmV0dXJuIFRkQWJzdHJhY3RQYXJhbSgncGFyYW0nLCBwYXJhbSk7XG59XG4iLCJpbXBvcnQgeyBUZEFic3RyYWN0UGFyYW0gfSBmcm9tICcuL2Fic3RyYWN0LXBhcmFtLmRlY29yYXRvcic7XG5cbi8qKlxuICogRGVjb3JhdG9yIHRoYXQgaXMgdXNlZCB0byBkZWZpbmUgd2hpY2ggcGFyYW1ldGVyIGlzIHRoZSBodHRwIGJvZHkgaW4gYSBtZXRob2RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFRkQm9keSgpOiBGdW5jdGlvbiB7XG4gIHJldHVybiBUZEFic3RyYWN0UGFyYW0oJ2JvZHknKTtcbn1cbiIsImltcG9ydCB7IFRkQWJzdHJhY3RQYXJhbSB9IGZyb20gJy4vYWJzdHJhY3QtcGFyYW0uZGVjb3JhdG9yJztcblxuLyoqXG4gKiBEZWNvcmF0b3IgdGhhdCBpcyB1c2VkIHRvIGRlZmluZSB3aGljaCBwYXJhbWV0ZXIgaXMgdGhlIGh0dHAgcmVzcG9uc2UgaW4gYSBtZXRob2RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFRkUmVzcG9uc2UoKTogRnVuY3Rpb24ge1xuICByZXR1cm4gVGRBYnN0cmFjdFBhcmFtKCdyZXNwb25zZScpO1xufVxuIiwiaW1wb3J0IHsgVGRBYnN0cmFjdFBhcmFtIH0gZnJvbSAnLi9hYnN0cmFjdC1wYXJhbS5kZWNvcmF0b3InO1xuXG4vKipcbiAqIERlY29yYXRvciB0aGF0IGlzIHVzZWQgdG8gZGVmaW5lIHdoaWNoIHBhcmFtZXRlciBpcyB0aGUgaHR0cCBxdWVyeSBwYXJhbWV0ZXJzIGluIGEgbWV0aG9kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZFF1ZXJ5UGFyYW1zKCk6IEZ1bmN0aW9uIHtcbiAgcmV0dXJuIFRkQWJzdHJhY3RQYXJhbSgncXVlcnlQYXJhbXMnKTtcbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyIsInRzbGliXzEuX192YWx1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUF3Q0EsSUFBYSxTQUFTLEdBQW9CLEVBQUUsQ0FBQyxTQUFTLENBQUM7Ozs7Ozs7Ozs7QUFVdkQsU0FBUyxVQUFVLENBQUMsS0FBZ0QsRUFBRSxRQUFrQjs7UUFDaEYsSUFBSSxHQUFVLEVBQUU7SUFDdEIsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O1lBQ3ZDLEdBQUcsR0FBUSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN0QixJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUNwQixNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7YUFDekQ7O2dCQUNHLElBQUksR0FBd0IsU0FBUzs7Z0JBQ3JDLEtBQUs7WUFFVCxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0s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