(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/http'), require('@covalent/http'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@covalent/experimental/http', ['exports', '@angular/core', '@angular/common/http', '@angular/http', '@covalent/http', 'rxjs', 'rxjs/operators'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.experimental = global.covalent.experimental || {}, global.covalent.experimental.http = {}),global.ng.core,global.ng.common.http,global.ng.http,global.covalent.http,global.rxjs,global.rxjs.operators));
}(this, (function (exports,core,http,http$1,http$2,rxjs,operators) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NOOP_HTTP = rxjs.of(undefined);
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
                    if (meta instanceof core.Optional || meta.ngMetadataName === 'Optional') {
                        /* tslint:disable */
                        flags |= 8 /* Optional */;
                    }
                    else if (meta instanceof core.SkipSelf || meta.ngMetadataName === 'SkipSelf') {
                        flags |= 4 /* SkipSelf */;
                    }
                    else if (meta instanceof core.Self || meta.ngMetadataName === 'Self') {
                        flags |= 2 /* Self */;
                    }
                    else if (meta instanceof core.Inject) {
                        type = meta.token;
                    }
                    else {
                        type = meta;
                    }
                    /* tslint:enable */
                }
                args.push(injector.get(( /** @type {?} */(type)), flags));
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
                var _this = _super.apply(this, __spread(injectArgs(new core.ɵReflectionCapabilities().parameters(base), _injector))) || this;
                _this._injector = _injector;
                _this.buildConfig();
                return _this;
            }
            HttpInternalClass.decorators = [
                { type: core.Injectable },
            ];
            /** @nocollapse */
            HttpInternalClass.ctorParameters = function () {
                return [
                    { type: core.Injector }
                ];
            };
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
                 */ function () {
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
                    this.http = this._injector.get(config.httpServiceType || http.HttpClient);
                    this._baseUrl = config && config.baseUrl ? config.baseUrl.replace(/\/$/, '') : '';
                    this._baseHeaders = config && config.baseHeaders ? config.baseHeaders : new http.HttpHeaders();
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
                    return new http.HttpHeaders(headersObj);
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
                    if (options === void 0) {
                        options = {};
                    }
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
                        if (options.headers instanceof http.HttpHeaders) {
                            (( /** @type {?} */(options.headers))).keys().forEach(function (key) {
                                headers_1 = headers_1.set(key, (( /** @type {?} */(options.headers))).get(key));
                            });
                        }
                        else {
                            for (var key in options.headers) {
                                headers_1 = headers_1.set(key, ( /** @type {?} */(options.headers[key])));
                            }
                        }
                        options.headers = headers_1;
                    }
                    if (this.http instanceof http$2.HttpInterceptorService || this.http instanceof http$1.Http) {
                        /** @type {?} */
                        var headers_2 = new http$1.Headers();
                        (( /** @type {?} */(options.headers))).keys().forEach(function (key) {
                            headers_2.set(key, (( /** @type {?} */(options.headers))).get(key));
                        });
                        /** @type {?} */
                        var params_1 = new http$1.URLSearchParams();
                        if (options.params) {
                            if (options.params instanceof http.HttpParams) {
                                options.params.keys().forEach(function (key) {
                                    params_1.set(key, (( /** @type {?} */(options.params))).get(key));
                                });
                            }
                            else {
                                for (var key in options.params) {
                                    params_1.set(key, ( /** @type {?} */(options.params[key])));
                                }
                            }
                        }
                        /** @type {?} */
                        var observable = (( /** @type {?} */(this.http))).request(url, {
                            headers: headers_2,
                            method: method,
                            body: options.body ? options.body : undefined,
                            params: params_1,
                        });
                        if (options.observe === 'body') {
                            if (options.responseType === 'json') {
                                return ( /** @type {?} */(observable.pipe(operators.map(function (response) { return response.json(); }))));
                            }
                            else if (options.responseType === 'text') {
                                return ( /** @type {?} */(observable.pipe(operators.map(function (response) { return response.text(); }))));
                            }
                            else if (options.responseType === 'blob') {
                                return ( /** @type {?} */(observable.pipe(operators.map(function (response) { return response.blob(); }))));
                            }
                            else if (options.responseType === 'arraybuffer') {
                                return ( /** @type {?} */(observable.pipe(operators.map(function (response) { return response.arrayBuffer(); }))));
                            }
                        }
                        else if (options.observe === 'events') {
                            throw Error('"events" not suppported in @angular/http');
                        }
                        return observable;
                    }
                    else {
                        return (( /** @type {?} */(this.http))).request(method, url, options);
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
        if (source instanceof http.HttpParams) {
            source.keys().forEach(function (key) {
                // skip if value is undefined
                if ((( /** @type {?} */(source))).get(key) !== undefined) {
                    queryParams = queryParams.set(key, (( /** @type {?} */(source))).get(key));
                }
            });
        }
        else {
            for (var key in source) {
                // skip if value is undefined
                if (( /** @type {?} */(source[key])) !== undefined) {
                    queryParams = queryParams.set(key, ( /** @type {?} */(source[key])));
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
                    var queryParams = new http.HttpParams();
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
                        catch (e_1_1) {
                            e_1 = { error: e_1_1 };
                        }
                        finally {
                            try {
                                if (parameters_1_1 && !parameters_1_1.done && (_a = parameters_1.return))
                                    _a.call(parameters_1);
                            }
                            finally {
                                if (e_1)
                                    throw e_1.error;
                            }
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
                        catch (e_2_1) {
                            e_2 = { error: e_2_1 };
                        }
                        finally {
                            try {
                                if (parameters_2_1 && !parameters_2_1.done && (_b = parameters_2.return))
                                    _b.call(parameters_2);
                            }
                            finally {
                                if (e_2)
                                    throw e_2.error;
                            }
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
        return TdAbstractMethod(( /** @type {?} */(Object.assign({
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
        return TdAbstractMethod(( /** @type {?} */(Object.assign({
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
        return TdAbstractMethod(( /** @type {?} */(Object.assign({
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
        return TdAbstractMethod(( /** @type {?} */(Object.assign({
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
        return TdAbstractMethod(( /** @type {?} */(Object.assign({
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

    exports.GET = GET;
    exports.POST = POST;
    exports.PATCH = PATCH;
    exports.PUT = PUT;
    exports.DELETE = DELETE;
    exports.TdHttp = TdHttp;
    exports.TdParam = TdParam;
    exports.TdBody = TdBody;
    exports.TdResponse = TdResponse;
    exports.TdQueryParams = TdQueryParams;
    exports.mixinHttp = mixinHttp;
    exports.NOOP_HTTP = NOOP_HTTP;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtZXhwZXJpbWVudGFsLWh0dHAudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9odHRwL2h0dHAubWl4aW4udHMiLCJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvaHR0cC9hY3Rpb25zL3BhcmFtcy9hYnN0cmFjdC1wYXJhbS5kZWNvcmF0b3IudHMiLCJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvaHR0cC9hY3Rpb25zL21ldGhvZHMvYWJzdHJhY3QtbWV0aG9kLmRlY29yYXRvci50cyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9odHRwL2FjdGlvbnMvbWV0aG9kcy9nZXQuZGVjb3JhdG9yLnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2h0dHAvYWN0aW9ucy9tZXRob2RzL3Bvc3QuZGVjb3JhdG9yLnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2h0dHAvYWN0aW9ucy9tZXRob2RzL3BhdGNoLmRlY29yYXRvci50cyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC9odHRwL2FjdGlvbnMvbWV0aG9kcy9wdXQuZGVjb3JhdG9yLnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2h0dHAvYWN0aW9ucy9tZXRob2RzL2RlbGV0ZS5kZWNvcmF0b3IudHMiLCJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvaHR0cC9hY3Rpb25zL2NsYXNzL2h0dHAuZGVjb3JhdG9yLnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2h0dHAvYWN0aW9ucy9wYXJhbXMvcGFyYW0uZGVjb3JhdG9yLnRzIiwibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2h0dHAvYWN0aW9ucy9wYXJhbXMvYm9keS5kZWNvcmF0b3IudHMiLCJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvaHR0cC9hY3Rpb25zL3BhcmFtcy9yZXNwb25zZS5kZWNvcmF0b3IudHMiLCJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvaHR0cC9hY3Rpb25zL3BhcmFtcy9xdWVyeS1wYXJhbXMuZGVjb3JhdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgVHlwZSwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIMOJwrVSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzLCBJbmplY3RGbGFncywgT3B0aW9uYWwsXG4gIFNraXBTZWxmLCBTZWxmLCBJbmplY3QsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzLCBVUkxTZWFyY2hQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEh0dHBJbnRlcmNlcHRvclNlcnZpY2UgfSBmcm9tICdAY292YWxlbnQvaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCB0eXBlIFRkSHR0cE1ldGhvZCA9ICdHRVQnIHwgJ1BPU1QnIHwgJ1BBVENIJyB8ICdERUxFVEUnIHwgJ0hFQUQnIHwgJ1BVVCcgfCAnT1BUSU9OUyc7XG5cbmV4cG9ydCB0eXBlIFRkSHR0cFJFU1RSZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuXG5leHBvcnQgdHlwZSBUZEh0dHBSRVNUT2JzZXJ2ZSA9ICdib2R5JyB8ICdyZXNwb25zZScgfCAnZXZlbnRzJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRIdHRwUkVTVENvbmZpZyB7XG4gIGJhc2VIZWFkZXJzPzogSHR0cEhlYWRlcnM7XG4gIGJhc2VVcmw6IHN0cmluZztcbiAgZGVmYXVsdE9ic2VydmU/OiBUZEh0dHBSRVNUT2JzZXJ2ZTtcbiAgZGVmYXVsdFJlc3BvbnNlVHlwZT86IFRkSHR0cFJFU1RSZXNwb25zZVR5cGU7XG4gIGh0dHBTZXJ2aWNlVHlwZT86IFR5cGU8SHR0cCB8IEh0dHBDbGllbnQgfCBIdHRwSW50ZXJjZXB0b3JTZXJ2aWNlPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRIdHRwUkVTVE9wdGlvbnMge1xuICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XG4gICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gIH07XG4gIG9ic2VydmU/OiBUZEh0dHBSRVNUT2JzZXJ2ZTtcbiAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcbiAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICB9O1xuICByZXNwb25zZVR5cGU/OiBUZEh0dHBSRVNUUmVzcG9uc2VUeXBlO1xuICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkSHR0cFJFU1RPcHRpb25zV2l0aEJvZHkgZXh0ZW5kcyBJVGRIdHRwUkVTVE9wdGlvbnMge1xuICBib2R5PzogYW55O1xufVxuXG5leHBvcnQgY29uc3QgTk9PUF9IVFRQOiBPYnNlcnZhYmxlPGFueT4gPSBvZih1bmRlZmluZWQpO1xuXG50eXBlIENvbnN0cnVjdG9yPFQ+ID0gbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gVDtcblxuLyoqXG4gKiBETyBOT1QgTU9ESUZZXG4gKiBUYWtlbiBmcm9tIGFuZ3VsYXIgc2luY2UgdGhleSBkb250IGV4cG9zZSB0aGlzIGZ1bmN0aW9uXG4gKiBUaGlzIGlzIHVzZWQgaW50ZXJuYWxseSB0byBpbmplY3Qgc2VydmljZXMgZnJvbSB0aGUgY29uc3RydWN0b3Igb2YgdGhlIGJhc2Ugc2VydmljZSB1c2luZyB0aGUgbWl4aW5IdHRwXG4gKiBAaW50ZXJuYWxcbiAqL1xuZnVuY3Rpb24gaW5qZWN0QXJncyh0eXBlczogKFR5cGU8YW55PnwgSW5qZWN0aW9uVG9rZW48YW55PnwgYW55W10pW10sIGluamVjdG9yOiBJbmplY3Rvcik6IGFueVtdIHtcbiAgY29uc3QgYXJnczogYW55W10gPSBbXTtcbiAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHR5cGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYXJnOiBhbnkgPSB0eXBlc1tpXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG4gICAgICBpZiAoYXJnLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FyZ3VtZW50cyBhcnJheSBtdXN0IGhhdmUgYXJndW1lbnRzLicpO1xuICAgICAgfVxuICAgICAgbGV0IHR5cGU6IFR5cGU8YW55Pnx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgICBsZXQgZmxhZ3M6IEluamVjdEZsYWdzID0gSW5qZWN0RmxhZ3MuRGVmYXVsdDtcblxuICAgICAgZm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IGFyZy5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBtZXRhOiBhbnkgPSBhcmdbal07XG4gICAgICAgIGlmIChtZXRhIGluc3RhbmNlb2YgT3B0aW9uYWwgfHwgbWV0YS5uZ01ldGFkYXRhTmFtZSA9PT0gJ09wdGlvbmFsJykge1xuICAgICAgICAgIC8qIHRzbGludDpkaXNhYmxlICovXG4gICAgICAgICAgZmxhZ3MgfD0gSW5qZWN0RmxhZ3MuT3B0aW9uYWw7XG4gICAgICAgIH0gZWxzZSBpZiAobWV0YSBpbnN0YW5jZW9mIFNraXBTZWxmIHx8IG1ldGEubmdNZXRhZGF0YU5hbWUgPT09ICdTa2lwU2VsZicpIHtcbiAgICAgICAgICBmbGFncyB8PSBJbmplY3RGbGFncy5Ta2lwU2VsZjtcbiAgICAgICAgfSBlbHNlIGlmIChtZXRhIGluc3RhbmNlb2YgU2VsZiB8fCBtZXRhLm5nTWV0YWRhdGFOYW1lID09PSAnU2VsZicpIHtcbiAgICAgICAgICBmbGFncyB8PSBJbmplY3RGbGFncy5TZWxmO1xuICAgICAgICB9IGVsc2UgaWYgKG1ldGEgaW5zdGFuY2VvZiBJbmplY3QpIHtcbiAgICAgICAgICB0eXBlID0gbWV0YS50b2tlbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0eXBlID0gbWV0YTtcbiAgICAgICAgfVxuICAgICAgICAvKiB0c2xpbnQ6ZW5hYmxlICovXG4gICAgICB9XG5cbiAgICAgIGFyZ3MucHVzaChpbmplY3Rvci5nZXQodHlwZSAhLCBmbGFncykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcmdzLnB1c2goaW5qZWN0b3IuZ2V0KGFyZykpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJncztcbn1cblxuLyoqIFxuICogTWl4aW4gdG8gYXVnbWVudCBhIHNlcnZpY2Ugd2l0aCBodHRwIGhlbHBlcnMuXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1peGluSHR0cChiYXNlOiBhbnksIGNvbmZpZzogSVRkSHR0cFJFU1RDb25maWcpOiBDb25zdHJ1Y3Rvcjxhbnk+IHtcbiAgLyoqXG4gICAqIEludGVybmFsIGNsYXNzIHVzZWQgdG8gZ2V0IGFuIGluc3RhbmNlIG9mIEluamVjdG9yIGZvciBpbnRlcm5hbCB1c2FnZSBwbHVzIGFsc29cbiAgICogYSB3YXkgdG8gaW5qZWN0IHNlcnZpY2VzIGZyb20gdGhlIGNvbnN0cnVjdG9yIG9mIHRoZSB1bmRlcmx5aW5nIHNlcnZpY2VcbiAgICogQGludGVybmFsXG4gICAqL1xuICBASW5qZWN0YWJsZSgpXG4gIGFic3RyYWN0IGNsYXNzIEh0dHBJbnRlcm5hbENsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIF9pbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICAgIHN1cGVyKC4uLmluamVjdEFyZ3MobmV3IMOJwrVSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzKCkucGFyYW1ldGVycyhiYXNlKSwgX2luamVjdG9yKSk7XG4gICAgICB0aGlzLmJ1aWxkQ29uZmlnKCk7XG4gICAgfVxuICAgIGFic3RyYWN0IGJ1aWxkQ29uZmlnKCk6IHZvaWQ7XG4gIH1cbiAgLyoqXG4gICAqIEFjdHVhbGwgY2xhc3MgYmVpbmcgcmV0dXJuZWQgd2l0aCBhbGwgdGhlIGhvb2tzIGZvciBodHRwIHVzYWdlXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgSHR0cEludGVybmFsQ2xhc3Mge1xuICAgIHByaXZhdGUgX2Jhc2VVcmw6IHN0cmluZztcbiAgICBnZXQgYmFzZVVybCgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICh0eXBlb2YodGhpcy5iYXNlUGF0aCkgPT09ICdzdHJpbmcnID9cbiAgICAgICAgdGhpcy5iYXNlUGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIDogJycpICsgdGhpcy5fYmFzZVVybDtcbiAgICB9XG4gICAgcHJpdmF0ZSBfYmFzZUhlYWRlcnM6IEh0dHBIZWFkZXJzO1xuICAgIHByaXZhdGUgX2RlZmF1bHRPYnNlcnZlPzogVGRIdHRwUkVTVE9ic2VydmU7XG4gICAgcHJpdmF0ZSBfZGVmYXVsdFJlc3BvbnNlVHlwZT86IFRkSHR0cFJFU1RSZXNwb25zZVR5cGU7XG5cbiAgICBodHRwOiBIdHRwQ2xpZW50IHwgSHR0cEludGVyY2VwdG9yU2VydmljZSB8IEh0dHA7XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdXNlZCB0byBzZXR1cCB0aGUgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIGFuZCBnZXQgYW4gaW5zdGFuY2Ugb2YgdGhlIGh0dHAgc2VydmljZVxuICAgICAqL1xuICAgIGJ1aWxkQ29uZmlnKCk6IHZvaWQge1xuICAgICAgdGhpcy5odHRwID0gdGhpcy5faW5qZWN0b3IuZ2V0KGNvbmZpZy5odHRwU2VydmljZVR5cGUgfHwgSHR0cENsaWVudCk7XG4gICAgICB0aGlzLl9iYXNlVXJsID0gY29uZmlnICYmIGNvbmZpZy5iYXNlVXJsID8gY29uZmlnLmJhc2VVcmwucmVwbGFjZSgvXFwvJC8sICcnKSA6ICcnO1xuICAgICAgdGhpcy5fYmFzZUhlYWRlcnMgPSBjb25maWcgJiYgY29uZmlnLmJhc2VIZWFkZXJzID8gY29uZmlnLmJhc2VIZWFkZXJzIDogbmV3IEh0dHBIZWFkZXJzKCk7XG4gICAgICB0aGlzLl9kZWZhdWx0T2JzZXJ2ZSA9IGNvbmZpZyAmJiBjb25maWcuZGVmYXVsdE9ic2VydmUgPyBjb25maWcuZGVmYXVsdE9ic2VydmUgOiAnYm9keSc7XG4gICAgICB0aGlzLl9kZWZhdWx0UmVzcG9uc2VUeXBlID0gY29uZmlnICYmIGNvbmZpZy5kZWZhdWx0UmVzcG9uc2VUeXBlID8gY29uZmlnLmRlZmF1bHRSZXNwb25zZVR5cGUgOiAnanNvbic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWV0aG9kIHVzZWQgdG8gYnVpbGQgdGhlIGRlZmF1bHQgaGVhZGVycyB1c2luZyB0aGUgYmFzZSBoZWFkZXJzXG4gICAgICovXG4gICAgYnVpbGRIZWFkZXJzKCk6IEh0dHBIZWFkZXJzIHtcbiAgICAgIGxldCBoZWFkZXJzT2JqOiB7W2tleTogc3RyaW5nXTogYW55fSA9IHt9O1xuICAgICAgdGhpcy5fYmFzZUhlYWRlcnMua2V5cygpLmZvckVhY2goKGtleTogYW55KSA9PiB7XG4gICAgICAgIGhlYWRlcnNPYmpba2V5XSA9IHRoaXMuX2Jhc2VIZWFkZXJzLmdldChrZXkpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IEh0dHBIZWFkZXJzKGhlYWRlcnNPYmopO1xuICAgIH1cblxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIGJ1aWxkUmVxdWVzdDxSZXNwb25zZT4obWV0aG9kOiAnUE9TVCcgfCAnUFVUJyB8ICdQQVRDSCcsIHVybDogc3RyaW5nLCBvcHRpb25zPzogSVRkSHR0cFJFU1RPcHRpb25zV2l0aEJvZHkpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPjtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICBidWlsZFJlcXVlc3Q8SHR0cFJlc3BvbnNlPihtZXRob2Q6ICdQT1NUJyB8ICdQVVQnIHwgJ1BBVENIJywgdXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBJVGRIdHRwUkVTVE9wdGlvbnNXaXRoQm9keSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPjtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICBidWlsZFJlcXVlc3Q8UmVzcG9uc2U+KG1ldGhvZDogJ0dFVCcgfCAnREVMRVRFJywgdXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBJVGRIdHRwUkVTVE9wdGlvbnMpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPjtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICBidWlsZFJlcXVlc3Q8SHR0cFJlc3BvbnNlPihtZXRob2Q6ICdHRVQnIHwgJ0RFTEVURScsIHVybDogc3RyaW5nLCBvcHRpb25zPzogSVRkSHR0cFJFU1RPcHRpb25zKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U+O1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIGJ1aWxkUmVxdWVzdDxSZXNwb25zZT4obWV0aG9kOiBUZEh0dHBNZXRob2QsIHVybDogc3RyaW5nLCBvcHRpb25zPzogSVRkSHR0cFJFU1RPcHRpb25zV2l0aEJvZHkpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPjtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICBidWlsZFJlcXVlc3Q8SHR0cFJlc3BvbnNlPihtZXRob2Q6IFRkSHR0cE1ldGhvZCwgdXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBJVGRIdHRwUkVTVE9wdGlvbnNXaXRoQm9keSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPiB7XG4gICAgICByZXR1cm4gdGhpcy5fYnVpbGRSZXF1ZXN0KG1ldGhvZCwgdXJsLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdXNlZCB0byBidWlsZCB0aGUgcmVxdWVzdCBkZXBlbmRpbmcgb24gdGhlIGBodHRwYCBzZXJ2aWNlIGFuZCBUZEh0dHBNZXRob2RcbiAgICAgKi9cbiAgICBwcml2YXRlIF9idWlsZFJlcXVlc3QobWV0aG9kOiBUZEh0dHBNZXRob2QsIHVybDogc3RyaW5nLCBvcHRpb25zOiBJVGRIdHRwUkVTVE9wdGlvbnNXaXRoQm9keSA9IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgIGlmICghb3B0aW9ucy5yZXNwb25zZVR5cGUpIHtcbiAgICAgICAgb3B0aW9ucy5yZXNwb25zZVR5cGUgPSB0aGlzLl9kZWZhdWx0UmVzcG9uc2VUeXBlO1xuICAgICAgfVxuICAgICAgaWYgKCFvcHRpb25zLm9ic2VydmUpIHtcbiAgICAgICAgb3B0aW9ucy5vYnNlcnZlID0gdGhpcy5fZGVmYXVsdE9ic2VydmU7XG4gICAgICB9XG4gICAgICBpZiAoIW9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICBvcHRpb25zLmhlYWRlcnMgPSB0aGlzLmJ1aWxkSGVhZGVycygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gdGhpcy5idWlsZEhlYWRlcnMoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuaGVhZGVycyBpbnN0YW5jZW9mIEh0dHBIZWFkZXJzKSB7XG4gICAgICAgICAgKDxIdHRwSGVhZGVycz5vcHRpb25zLmhlYWRlcnMpLmtleXMoKS5mb3JFYWNoKChrZXk6IGFueSkgPT4ge1xuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KGtleSwgKDxIdHRwSGVhZGVycz5vcHRpb25zLmhlYWRlcnMpLmdldChrZXkpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoa2V5LCA8YW55Pm9wdGlvbnMuaGVhZGVyc1trZXldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzID0gaGVhZGVycztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmh0dHAgaW5zdGFuY2VvZiBIdHRwSW50ZXJjZXB0b3JTZXJ2aWNlIHx8IHRoaXMuaHR0cCBpbnN0YW5jZW9mIEh0dHApIHtcbiAgICAgICAgbGV0IGhlYWRlcnM6IEhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICAoPEh0dHBIZWFkZXJzPm9wdGlvbnMuaGVhZGVycykua2V5cygpLmZvckVhY2goKGtleTogYW55KSA9PiB7XG4gICAgICAgICAgaGVhZGVycy5zZXQoa2V5LCAoPEh0dHBIZWFkZXJzPm9wdGlvbnMuaGVhZGVycykuZ2V0KGtleSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHBhcmFtczogVVJMU2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICBpZiAob3B0aW9ucy5wYXJhbXMpIHtcbiAgICAgICAgICBpZiAob3B0aW9ucy5wYXJhbXMgaW5zdGFuY2VvZiBIdHRwUGFyYW1zKSB7XG4gICAgICAgICAgICBvcHRpb25zLnBhcmFtcy5rZXlzKCkuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgcGFyYW1zLnNldChrZXksICg8SHR0cFBhcmFtcz5vcHRpb25zLnBhcmFtcykuZ2V0KGtleSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBvcHRpb25zLnBhcmFtcykge1xuICAgICAgICAgICAgICBwYXJhbXMuc2V0KGtleSwgPGFueT5vcHRpb25zLnBhcmFtc1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9ic2VydmFibGU6IE9ic2VydmFibGU8UmVzcG9uc2U+ID0gKDxIdHRwSW50ZXJjZXB0b3JTZXJ2aWNlPnRoaXMuaHR0cCkucmVxdWVzdCh1cmwsIHtcbiAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgIGJvZHk6IG9wdGlvbnMuYm9keSA/IG9wdGlvbnMuYm9keSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvcHRpb25zLm9ic2VydmUgPT09ICdib2R5Jykge1xuICAgICAgICAgIGlmIChvcHRpb25zLnJlc3BvbnNlVHlwZSA9PT0gJ2pzb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gPGFueT5vYnNlcnZhYmxlLnBpcGUoXG4gICAgICAgICAgICAgIG1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMucmVzcG9uc2VUeXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgICAgIHJldHVybiA8YW55Pm9ic2VydmFibGUucGlwZShcbiAgICAgICAgICAgICAgbWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSksXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5yZXNwb25zZVR5cGUgPT09ICdibG9iJykge1xuICAgICAgICAgICAgcmV0dXJuIDxhbnk+b2JzZXJ2YWJsZS5waXBlKFxuICAgICAgICAgICAgICBtYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuYmxvYigpKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnJlc3BvbnNlVHlwZSA9PT0gJ2FycmF5YnVmZmVyJykge1xuICAgICAgICAgICAgcmV0dXJuIDxhbnk+b2JzZXJ2YWJsZS5waXBlKFxuICAgICAgICAgICAgICBtYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKSksXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLm9ic2VydmUgPT09ICdldmVudHMnKSB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoJ1wiZXZlbnRzXCIgbm90IHN1cHBwb3J0ZWQgaW4gQGFuZ3VsYXIvaHR0cCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICg8SHR0cENsaWVudD50aGlzLmh0dHApLnJlcXVlc3QobWV0aG9kLCB1cmwsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbiIsImRlY2xhcmUgY29uc3QgUmVmbGVjdDogYW55O1xuZXhwb3J0IHR5cGUgVGRQYXJhbVR5cGUgPSAncGFyYW0nIHwgJ3Jlc3BvbnNlJyB8ICdib2R5JyB8ICdxdWVyeVBhcmFtcyc7XG5cbmV4cG9ydCBjb25zdCB0ZEh0dHBSRVNUUGFyYW06IFN5bWJvbCA9IFN5bWJvbCgnVGRIdHRwUkVTVFBhcmFtJyk7XG5cbi8qKlxuICogQWJzdHJhY3QgaW1wbGVtZW50YXRpb24gb2YgdGhlIGh0dHAgcGFyYW0gZGVjb3JhdG9yXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFRkQWJzdHJhY3RQYXJhbSh0eXBlOiBUZFBhcmFtVHlwZSwgcGFyYW0/OiBzdHJpbmcpOiBGdW5jdGlvbiB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBPYmplY3QsIHByb3BlcnR5S2V5OiBzdHJpbmcgfCBzeW1ib2wsIHBhcmFtZXRlckluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBsZXQgcGFyYW1ldGVyczogeyBpbmRleDogbnVtYmVyLCBwYXJhbTogc3RyaW5nLCB0eXBlOiBUZFBhcmFtVHlwZSB9W10gPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKHRkSHR0cFJFU1RQYXJhbSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSkgfHwgW107XG4gICAgcGFyYW1ldGVycy5wdXNoKHtcbiAgICAgIGluZGV4OiBwYXJhbWV0ZXJJbmRleCxcbiAgICAgIHBhcmFtOiBwYXJhbSxcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgfSk7XG4gICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YSh0ZEh0dHBSRVNUUGFyYW0sIHBhcmFtZXRlcnMsIHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgVGRIdHRwTWV0aG9kLCBJVGRIdHRwUkVTVE9wdGlvbnMsIElUZEh0dHBSRVNUT3B0aW9uc1dpdGhCb2R5LCBOT09QX0hUVFAgfSBmcm9tICcuLi8uLi9odHRwLm1peGluJztcbmltcG9ydCB7IFRkUGFyYW1UeXBlLCB0ZEh0dHBSRVNUUGFyYW0gfSBmcm9tICcuLi9wYXJhbXMvYWJzdHJhY3QtcGFyYW0uZGVjb3JhdG9yJztcblxuZGVjbGFyZSBjb25zdCBSZWZsZWN0OiBhbnk7XG5cbi8qKlxuICogTWV0aG9kIHVzZWQgdG8gY29weSBwYXJhbWV0ZXJzIGZyb20gYW4gYXJyYXkgb3IgSHR0cFBhcmFtcyBvYmplY3RcbiAqIGludG8gYSBjZW50cmlsaXplZCBIdHRwUGFyYW1zIG9iamVjdFxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBhcmFtcyh0YXJnZXQ6IEh0dHBQYXJhbXMsIHNvdXJjZTogSHR0cFBhcmFtcyB8IHtba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXX0pOiBIdHRwUGFyYW1zIHtcbiAgbGV0IHF1ZXJ5UGFyYW1zOiBIdHRwUGFyYW1zID0gdGFyZ2V0O1xuICBpZiAoc291cmNlIGluc3RhbmNlb2YgSHR0cFBhcmFtcykge1xuICAgIHNvdXJjZS5rZXlzKCkuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIC8vIHNraXAgaWYgdmFsdWUgaXMgdW5kZWZpbmVkXG4gICAgICBpZiAoKDxIdHRwUGFyYW1zPnNvdXJjZSkuZ2V0KGtleSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBxdWVyeVBhcmFtcyA9IHF1ZXJ5UGFyYW1zLnNldChrZXksICg8SHR0cFBhcmFtcz5zb3VyY2UpLmdldChrZXkpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gc291cmNlKSB7XG4gICAgICAvLyBza2lwIGlmIHZhbHVlIGlzIHVuZGVmaW5lZFxuICAgICAgaWYgKDxhbnk+c291cmNlW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBxdWVyeVBhcmFtcyA9IHF1ZXJ5UGFyYW1zLnNldChrZXksIDxhbnk+c291cmNlW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcXVlcnlQYXJhbXM7XG59XG5cbi8qKlxuICogQWJzdHJhY3QgaW1wbGVtZW50YXRpb24gb2YgdGhlIGh0dHAgbWV0aG9kIGRlY29yYXRvclxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZEFic3RyYWN0TWV0aG9kKGNvbmZpZzoge1xuICBtZXRob2Q6IFRkSHR0cE1ldGhvZCxcbiAgcGF0aDogc3RyaW5nLFxuICBvcHRpb25zPzogSVRkSHR0cFJFU1RPcHRpb25zLFxufSk6IEZ1bmN0aW9uIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgcHJvcGVydHlOYW1lOiBzdHJpbmcsIGRlc2NyaXB0b3I6IFR5cGVkUHJvcGVydHlEZXNjcmlwdG9yPEZ1bmN0aW9uPik6IGFueSB7XG4gICAgbGV0IHdyYXBwZWRGdW5jdGlvbjogRnVuY3Rpb24gPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIC8vIHJlcGxhY2UgbWV0aG9kIGNhbGwgd2l0aCBvdXIgb3duIGFuZCBwcm94eSBpdFxuICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoKTogYW55IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCByZXBsYWNlZFBhdGg6IHN0cmluZyA9IGNvbmZpZy5wYXRoO1xuICAgICAgICBsZXQgcGFyYW1ldGVyczogeyBpbmRleDogbnVtYmVyLCBwYXJhbTogc3RyaW5nLCB0eXBlOiBUZFBhcmFtVHlwZSB9W10gPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKHRkSHR0cFJFU1RQYXJhbSwgdGFyZ2V0LCBwcm9wZXJ0eU5hbWUpO1xuICAgICAgICBsZXQgbmV3QXJnczogYW55W10gPSBbXTtcbiAgICAgICAgbGV0IGJvZHk6IGFueTtcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zOiBIdHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICAgICAgaWYgKHBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAvLyBtYXAgcGFyYW1ldGVycyBhbmQgc2VlIHdoaWNoIHR5cGUgdGhleSBhcmUgdG8gYWN0IG9uIHRoZW1cbiAgICAgICAgICBmb3IgKGxldCBwYXJhbWV0ZXIgb2YgcGFyYW1ldGVycykge1xuICAgICAgICAgICAgaWYgKHBhcmFtZXRlci50eXBlID09PSAncGFyYW0nKSB7XG4gICAgICAgICAgICAgIG5ld0FyZ3NbcGFyYW1ldGVyLmluZGV4XSA9IGFyZ3VtZW50c1twYXJhbWV0ZXIuaW5kZXhdO1xuICAgICAgICAgICAgICByZXBsYWNlZFBhdGggPSByZXBsYWNlZFBhdGgucmVwbGFjZSgnOicgKyBwYXJhbWV0ZXIucGFyYW0sIGFyZ3VtZW50c1twYXJhbWV0ZXIuaW5kZXhdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyYW1ldGVyLnR5cGUgPT09ICdib2R5Jykge1xuICAgICAgICAgICAgICBuZXdBcmdzW3BhcmFtZXRlci5pbmRleF0gPSBhcmd1bWVudHNbcGFyYW1ldGVyLmluZGV4XTtcbiAgICAgICAgICAgICAgYm9keSA9IGFyZ3VtZW50c1twYXJhbWV0ZXIuaW5kZXhdO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJhbWV0ZXIudHlwZSA9PT0gJ3F1ZXJ5UGFyYW1zJykge1xuICAgICAgICAgICAgICBuZXdBcmdzW3BhcmFtZXRlci5pbmRleF0gPSBhcmd1bWVudHNbcGFyYW1ldGVyLmluZGV4XTtcbiAgICAgICAgICAgICAgbGV0IHFQYXJhbXM6IEh0dHBQYXJhbXMgfCB7W2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW119ID0gYXJndW1lbnRzW3BhcmFtZXRlci5pbmRleF07XG4gICAgICAgICAgICAgIGlmIChjb25maWcub3B0aW9ucyAmJiBjb25maWcub3B0aW9ucy5wYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcyA9IHBhcnNlUGFyYW1zKHF1ZXJ5UGFyYW1zLCBjb25maWcub3B0aW9ucy5wYXJhbXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChxUGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMgPSBwYXJzZVBhcmFtcyhxdWVyeVBhcmFtcywgcVBhcmFtcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIGxldCB1cmw6IHN0cmluZyA9IHRoaXMuYmFzZVVybCArIHJlcGxhY2VkUGF0aDtcbiAgICAgICAgbGV0IG9wdGlvbnM6IElUZEh0dHBSRVNUT3B0aW9uc1dpdGhCb2R5ID0gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnLm9wdGlvbnMsIHtcbiAgICAgICAgICBib2R5OiBib2R5LFxuICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbXMsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgbGV0IHJlcXVlc3Q6IGFueSA9IHRoaXMuYnVpbGRSZXF1ZXN0KGNvbmZpZy5tZXRob2QsIHVybCwgb3B0aW9ucyk7XG4gICAgICAgIGlmIChwYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgLy8gc2VlIHdoaWNoIG9uZSB3YXMgdGhlIHJlc3BvbnNlIHBhcmFtZXRlciBzbyB3ZSBjYW4gc2V0IHRoZSByZXF1ZXN0IG9ic2VydmFibGVcbiAgICAgICAgICBmb3IgKGxldCBwYXJhbWV0ZXIgb2YgcGFyYW1ldGVycykge1xuICAgICAgICAgICAgaWYgKHBhcmFtZXRlci50eXBlID09PSAncmVzcG9uc2UnKSB7XG4gICAgICAgICAgICAgIG5ld0FyZ3NbcGFyYW1ldGVyLmluZGV4XSA9IHJlcXVlc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBsZXQgcmVzcG9uc2U6IGFueSA9IHdyYXBwZWRGdW5jdGlvbi5hcHBseSh0aGlzLCBuZXdBcmdzKTtcbiAgICAgICAgLy8gaWYgdGhlIHJlc3BvbnNlIGlzIE5PT1BfSFRUUCBvciB1bmRlZmluZWQsIHRoZW4gd2UgcmV0dXJuIHRoZSByZXF1ZXN0IGFzIGl0IGlzXG4gICAgICAgIC8vIGVsc2Ugd2UgcmV0dXJuIHRoZSByZXNwb25zZSBmcm9tIHRoZSBpbm5lciBmdW5jdGlvblxuICAgICAgICBpZiAocmVzcG9uc2UgPT09IE5PT1BfSFRUUCB8fCByZXNwb25zZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IElUZEh0dHBSRVNUT3B0aW9ucyB9IGZyb20gJy4uLy4uLyc7XG5pbXBvcnQgeyBUZEFic3RyYWN0TWV0aG9kIH0gZnJvbSAnLi9hYnN0cmFjdC1tZXRob2QuZGVjb3JhdG9yJztcblxuLyoqXG4gKiBEZWNvcmF0b3IgdGhhdCBhZGRzIEdFVCByZXF1ZXN0IGNhcGFiaWxpdGllcyB0byBhIG1ldGhvZFxuICovXG5leHBvcnQgZnVuY3Rpb24gR0VUKGNvbmZpZzoge1xuICBwYXRoOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBJVGRIdHRwUkVTVE9wdGlvbnMsXG59KTogRnVuY3Rpb24ge1xuICByZXR1cm4gVGRBYnN0cmFjdE1ldGhvZCg8YW55Pk9iamVjdC5hc3NpZ24oe1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gIH0sIGNvbmZpZykpO1xufVxuIiwiaW1wb3J0IHsgSVRkSHR0cFJFU1RPcHRpb25zIH0gZnJvbSAnLi4vLi4vJztcbmltcG9ydCB7IFRkQWJzdHJhY3RNZXRob2QgfSBmcm9tICcuL2Fic3RyYWN0LW1ldGhvZC5kZWNvcmF0b3InO1xuXG4vKipcbiAqIERlY29yYXRvciB0aGF0IGFkZHMgUE9TVCByZXF1ZXN0IGNhcGFiaWxpdGllcyB0byBhIG1ldGhvZFxuICovXG5leHBvcnQgZnVuY3Rpb24gUE9TVChjb25maWc6IHtcbiAgcGF0aDogc3RyaW5nLFxuICBvcHRpb25zPzogSVRkSHR0cFJFU1RPcHRpb25zLFxufSk6IEZ1bmN0aW9uIHtcbiAgcmV0dXJuIFRkQWJzdHJhY3RNZXRob2QoPGFueT5PYmplY3QuYXNzaWduKHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgfSwgY29uZmlnKSk7XG59XG4iLCJpbXBvcnQgeyBJVGRIdHRwUkVTVE9wdGlvbnMgfSBmcm9tICcuLi8uLi8nO1xuaW1wb3J0IHsgVGRBYnN0cmFjdE1ldGhvZCB9IGZyb20gJy4vYWJzdHJhY3QtbWV0aG9kLmRlY29yYXRvcic7XG5cbi8qKlxuICogRGVjb3JhdG9yIHRoYXQgYWRkcyBQQVRDSCByZXF1ZXN0IGNhcGFiaWxpdGllcyB0byBhIG1ldGhvZFxuICovXG5leHBvcnQgZnVuY3Rpb24gUEFUQ0goY29uZmlnOiB7XG4gIHBhdGg6IHN0cmluZyxcbiAgb3B0aW9ucz86IElUZEh0dHBSRVNUT3B0aW9ucyxcbn0pOiBGdW5jdGlvbiB7XG4gIHJldHVybiBUZEFic3RyYWN0TWV0aG9kKDxhbnk+T2JqZWN0LmFzc2lnbih7XG4gICAgbWV0aG9kOiAnUEFUQ0gnLFxuICB9LCBjb25maWcpKTtcbn1cbiIsImltcG9ydCB7IElUZEh0dHBSRVNUT3B0aW9ucyB9IGZyb20gJy4uLy4uLyc7XG5pbXBvcnQgeyBUZEFic3RyYWN0TWV0aG9kIH0gZnJvbSAnLi9hYnN0cmFjdC1tZXRob2QuZGVjb3JhdG9yJztcblxuLyoqXG4gKiBEZWNvcmF0b3IgdGhhdCBhZGRzIFBVVCByZXF1ZXN0IGNhcGFiaWxpdGllcyB0byBhIG1ldGhvZFxuICovXG5leHBvcnQgZnVuY3Rpb24gUFVUKGNvbmZpZzoge1xuICBwYXRoOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBJVGRIdHRwUkVTVE9wdGlvbnMsXG59KTogRnVuY3Rpb24ge1xuICByZXR1cm4gVGRBYnN0cmFjdE1ldGhvZCg8YW55Pk9iamVjdC5hc3NpZ24oe1xuICAgIG1ldGhvZDogJ1BVVCcsXG4gIH0sIGNvbmZpZykpO1xufVxuIiwiaW1wb3J0IHsgSVRkSHR0cFJFU1RPcHRpb25zIH0gZnJvbSAnLi4vLi4vJztcbmltcG9ydCB7IFRkQWJzdHJhY3RNZXRob2QgfSBmcm9tICcuL2Fic3RyYWN0LW1ldGhvZC5kZWNvcmF0b3InO1xuXG4vKipcbiAqIERlY29yYXRvciB0aGF0IGFkZHMgREVMRVRFIHJlcXVlc3QgY2FwYWJpbGl0aWVzIHRvIGEgbWV0aG9kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBERUxFVEUoY29uZmlnOiB7XG4gIHBhdGg6IHN0cmluZyxcbiAgb3B0aW9ucz86IElUZEh0dHBSRVNUT3B0aW9ucyxcbn0pOiBGdW5jdGlvbiB7XG4gIHJldHVybiBUZEFic3RyYWN0TWV0aG9kKDxhbnk+T2JqZWN0LmFzc2lnbih7XG4gICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgfSwgY29uZmlnKSk7XG59XG4iLCJpbXBvcnQgeyBtaXhpbkh0dHAsIElUZEh0dHBSRVNUQ29uZmlnIH0gZnJvbSAnLi4vLi4vaHR0cC5taXhpbic7XG5cbi8qKlxuICogRGVjb3JhdG9yIHVzZWQgdG8gZ2l2ZSBhIHNlcnZpY2UgaHR0cCBjYXBhYmlsaXRpZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFRkSHR0cChjb25maWc6IElUZEh0dHBSRVNUQ29uZmlnKTogRnVuY3Rpb24ge1xuICByZXR1cm4gZnVuY3Rpb24gPFQgZXh0ZW5kcyB7IG5ldyguLi5hcmdzOiBhbnlbXSk6IHt9IH0+KGNvbnN0cnVjdG9yOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBjbGFzcyBleHRlbmRzIG1peGluSHR0cChjb25zdHJ1Y3RvciwgY29uZmlnKSB7XG4gICAgIFxuICAgIH07XG4gIH07XG59XG4iLCJpbXBvcnQgeyBUZEFic3RyYWN0UGFyYW0gfSBmcm9tICcuL2Fic3RyYWN0LXBhcmFtLmRlY29yYXRvcic7XG5cbi8qKlxuICogRGVjb3JhdG9yIHRoYXQgaXMgdXNlZCB0byBkZWZpbmUgd2hpY2ggcGFyYW1ldGVyIGlzIGFuIGh0dHAgcGFyYW1ldGVyIGluIGEgbWV0aG9kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZFBhcmFtKHBhcmFtOiBzdHJpbmcpOiBGdW5jdGlvbiB7XG4gIHJldHVybiBUZEFic3RyYWN0UGFyYW0oJ3BhcmFtJywgcGFyYW0pO1xufVxuIiwiaW1wb3J0IHsgVGRBYnN0cmFjdFBhcmFtIH0gZnJvbSAnLi9hYnN0cmFjdC1wYXJhbS5kZWNvcmF0b3InO1xuXG4vKipcbiAqIERlY29yYXRvciB0aGF0IGlzIHVzZWQgdG8gZGVmaW5lIHdoaWNoIHBhcmFtZXRlciBpcyB0aGUgaHR0cCBib2R5IGluIGEgbWV0aG9kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZEJvZHkoKTogRnVuY3Rpb24ge1xuICByZXR1cm4gVGRBYnN0cmFjdFBhcmFtKCdib2R5Jyk7XG59XG4iLCJpbXBvcnQgeyBUZEFic3RyYWN0UGFyYW0gfSBmcm9tICcuL2Fic3RyYWN0LXBhcmFtLmRlY29yYXRvcic7XG5cbi8qKlxuICogRGVjb3JhdG9yIHRoYXQgaXMgdXNlZCB0byBkZWZpbmUgd2hpY2ggcGFyYW1ldGVyIGlzIHRoZSBodHRwIHJlc3BvbnNlIGluIGEgbWV0aG9kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZFJlc3BvbnNlKCk6IEZ1bmN0aW9uIHtcbiAgcmV0dXJuIFRkQWJzdHJhY3RQYXJhbSgncmVzcG9uc2UnKTtcbn1cbiIsImltcG9ydCB7IFRkQWJzdHJhY3RQYXJhbSB9IGZyb20gJy4vYWJzdHJhY3QtcGFyYW0uZGVjb3JhdG9yJztcblxuLyoqXG4gKiBEZWNvcmF0b3IgdGhhdCBpcyB1c2VkIHRvIGRlZmluZSB3aGljaCBwYXJhbWV0ZXIgaXMgdGhlIGh0dHAgcXVlcnkgcGFyYW1ldGVycyBpbiBhIG1ldGhvZFxuICovXG5leHBvcnQgZnVuY3Rpb24gVGRRdWVyeVBhcmFtcygpOiBGdW5jdGlvbiB7XG4gIHJldHVybiBUZEFic3RyYWN0UGFyYW0oJ3F1ZXJ5UGFyYW1zJyk7XG59XG4iXSwibmFtZXMiOlsib2YiLCJPcHRpb25hbCIsIlNraXBTZWxmIiwiU2VsZiIsIkluamVjdCIsInRzbGliXzEuX19leHRlbmRzIiwiybVSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzIiwiSW5qZWN0YWJsZSIsIkluamVjdG9yIiwiSHR0cENsaWVudCIsIkh0dHBIZWFkZXJzIiwiSHR0cEludGVyY2VwdG9yU2VydmljZSIsIkh0dHAiLCJIZWFkZXJzIiwiVVJMU2VhcmNoUGFyYW1zIiwiSHR0cFBhcmFtcyIsIm1hcCIsInRzbGliXzEuX192YWx1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztJQWNBO0lBRUEsSUFBSSxhQUFhLEdBQUcsVUFBUyxDQUFDLEVBQUUsQ0FBQztRQUM3QixhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7YUFDaEMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDNUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQztnQkFBRSxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO29CQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQy9FLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUM7QUFFRixhQUFnQixTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDMUIsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQixTQUFTLEVBQUUsS0FBSyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ3ZDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJ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