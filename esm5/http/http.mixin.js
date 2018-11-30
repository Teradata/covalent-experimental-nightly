/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector, ɵReflectionCapabilities, Optional, SkipSelf, Self, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { HttpInterceptorService } from '@covalent/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
/**
 * @record
 */
export function ITdHttpRESTConfig() { }
if (false) {
    /** @type {?|undefined} */
    ITdHttpRESTConfig.prototype.baseHeaders;
    /** @type {?} */
    ITdHttpRESTConfig.prototype.baseUrl;
    /** @type {?|undefined} */
    ITdHttpRESTConfig.prototype.defaultObserve;
    /** @type {?|undefined} */
    ITdHttpRESTConfig.prototype.defaultResponseType;
    /** @type {?|undefined} */
    ITdHttpRESTConfig.prototype.httpServiceType;
}
/**
 * @record
 */
export function ITdHttpRESTOptions() { }
if (false) {
    /** @type {?|undefined} */
    ITdHttpRESTOptions.prototype.headers;
    /** @type {?|undefined} */
    ITdHttpRESTOptions.prototype.observe;
    /** @type {?|undefined} */
    ITdHttpRESTOptions.prototype.params;
    /** @type {?|undefined} */
    ITdHttpRESTOptions.prototype.responseType;
    /** @type {?|undefined} */
    ITdHttpRESTOptions.prototype.reportProgress;
    /** @type {?|undefined} */
    ITdHttpRESTOptions.prototype.withCredentials;
}
/**
 * @record
 */
export function ITdHttpRESTOptionsWithBody() { }
if (false) {
    /** @type {?|undefined} */
    ITdHttpRESTOptionsWithBody.prototype.body;
}
/** @type {?} */
export var NOOP_HTTP = of(undefined);
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
export function mixinHttp(base, config) {
    /**
     * Internal class used to get an instance of Injector for internal usage plus also
     * a way to inject services from the constructor of the underlying service
     * \@internal
     * @abstract
     */
    var HttpInternalClass = /** @class */ (function (_super) {
        tslib_1.__extends(HttpInternalClass, _super);
        function HttpInternalClass(_injector) {
            var _this = _super.apply(this, tslib_1.__spread(injectArgs(new ɵReflectionCapabilities().parameters(base), _injector))) || this;
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
    if (false) {
        /** @type {?} */
        HttpInternalClass.prototype._injector;
        /**
         * @abstract
         * @return {?}
         */
        HttpInternalClass.prototype.buildConfig = function () { };
    }
    /**
     * Actuall class being returned with all the hooks for http usage
     * @internal
     */
    return /** @class */ (function (_super) {
        tslib_1.__extends(class_1, _super);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5taXhpbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvaHR0cC8iLCJzb3VyY2VzIjpbImh0dHAubWl4aW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQVEsVUFBVSxFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBZSxRQUFRLEVBQ2pGLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFrQixNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsSUFBSSxFQUFZLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFRckMsdUNBTUM7OztJQUxDLHdDQUEwQjs7SUFDMUIsb0NBQWdCOztJQUNoQiwyQ0FBbUM7O0lBQ25DLGdEQUE2Qzs7SUFDN0MsNENBQW1FOzs7OztBQUdyRSx3Q0FXQzs7O0lBVkMscUNBRUU7O0lBQ0YscUNBQTRCOztJQUM1QixvQ0FFRTs7SUFDRiwwQ0FBc0M7O0lBQ3RDLDRDQUF5Qjs7SUFDekIsNkNBQTBCOzs7OztBQUc1QixnREFFQzs7O0lBREMsMENBQVc7OztBQUdiLE1BQU0sS0FBTyxTQUFTLEdBQW9CLEVBQUUsQ0FBQyxTQUFTLENBQUM7Ozs7Ozs7Ozs7QUFVdkQsU0FBUyxVQUFVLENBQUMsS0FBZ0QsRUFBRSxRQUFrQjs7UUFDaEYsSUFBSSxHQUFVLEVBQUU7SUFDdEIsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O1lBQ3ZDLEdBQUcsR0FBUSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN0QixJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUNwQixNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7YUFDekQ7O2dCQUNHLElBQUksR0FBd0IsU0FBUzs7Z0JBQ3JDLEtBQUssa0JBQW1DO1lBRTVDLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztvQkFDckMsSUFBSSxHQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksSUFBSSxZQUFZLFFBQVEsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLFVBQVUsRUFBRTtvQkFDbEUsb0JBQW9CO29CQUNwQixLQUFLLG9CQUF3QixDQUFDO2lCQUMvQjtxQkFBTSxJQUFJLElBQUksWUFBWSxRQUFRLElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxVQUFVLEVBQUU7b0JBQ3pFLEtBQUssb0JBQXdCLENBQUM7aUJBQy9CO3FCQUFNLElBQUksSUFBSSxZQUFZLElBQUksSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLE1BQU0sRUFBRTtvQkFDakUsS0FBSyxnQkFBb0IsQ0FBQztpQkFDM0I7cUJBQU0sSUFBSSxJQUFJLFlBQVksTUFBTSxFQUFFO29CQUNqQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDbkI7cUJBQU07b0JBQ0wsSUFBSSxHQUFHLElBQUksQ0FBQztpQkFDYjtnQkFDRCxtQkFBbUI7YUFDcEI7WUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsbUJBQUEsSUFBSSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN4QzthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDOUI7S0FDRjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQzs7Ozs7Ozs7QUFNRCxNQUFNLFVBQVUsU0FBUyxDQUFDLElBQVMsRUFBRSxNQUF5Qjs7Ozs7OztJQU01RDtRQUN5Qyw2Q0FBSTtRQUMzQywyQkFBbUIsU0FBbUI7WUFBdEMsZ0RBQ1csVUFBVSxDQUFDLElBQUksdUJBQXVCLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxDQUFDLFdBRS9FO1lBSGtCLGVBQVMsR0FBVCxTQUFTLENBQVU7WUFFcEMsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDOztRQUNyQixDQUFDOztvQkFMRixVQUFVOzs7O29CQWhHYyxRQUFROztRQXVHakMsd0JBQUM7S0FBQSxBQVBELENBQ3lDLElBQUksR0FNNUM7OztRQUxhLHNDQUEwQjs7Ozs7UUFJdEMsMERBQTZCOztJQUUvQjs7O09BR0c7SUFDSDtRQUFxQixtQ0FBaUI7UUFBL0I7O1FBMkhQLENBQUM7UUF6SEMsc0JBQUksNEJBQU87Ozs7WUFBWDtnQkFDRSxPQUFPLENBQUMsT0FBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzNELENBQUM7OztXQUFBO1FBT0Q7O1dBRUc7Ozs7O1FBQ0gsNkJBQVc7Ozs7UUFBWDtZQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGVBQWUsSUFBSSxVQUFVLENBQUMsQ0FBQztZQUNyRSxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNsRixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQzFGLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUN4RixJQUFJLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDekcsQ0FBQztRQUVEOztXQUVHOzs7OztRQUNILDhCQUFZOzs7O1FBQVo7WUFBQSxpQkFNQzs7Z0JBTEssVUFBVSxHQUF5QixFQUFFO1lBQ3pDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBUTtnQkFDeEMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQy9DLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBWUQsOEJBQThCOzs7Ozs7Ozs7UUFDOUIsOEJBQVk7Ozs7Ozs7O1FBQVosVUFBMkIsTUFBb0IsRUFBRSxHQUFXLEVBQUUsT0FBb0M7WUFDaEcsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbEQsQ0FBQztRQUVEOztXQUVHOzs7Ozs7OztRQUNLLCtCQUFhOzs7Ozs7O1FBQXJCLFVBQXNCLE1BQW9CLEVBQUUsR0FBVyxFQUFFLE9BQXdDO1lBQXhDLHdCQUFBLEVBQUEsWUFBd0M7WUFDL0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUU7Z0JBQ3pCLE9BQU8sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDO2FBQ2xEO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7Z0JBQ3BCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQzthQUN4QztZQUNELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFO2dCQUNwQixPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN2QztpQkFBTTs7b0JBQ0QsU0FBTyxHQUFnQixJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUM5QyxJQUFJLE9BQU8sQ0FBQyxPQUFPLFlBQVksV0FBVyxFQUFFO29CQUMxQyxDQUFDLG1CQUFhLE9BQU8sQ0FBQyxPQUFPLEVBQUEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQVE7d0JBQ3JELFNBQU8sR0FBRyxTQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFhLE9BQU8sQ0FBQyxPQUFPLEVBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUN0RSxDQUFDLENBQUMsQ0FBQztpQkFDSjtxQkFBTTtvQkFDTCxLQUFLLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7d0JBQy9CLFNBQU8sR0FBRyxTQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxtQkFBSyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFBLENBQUMsQ0FBQztxQkFDdkQ7aUJBQ0Y7Z0JBQ0QsT0FBTyxDQUFDLE9BQU8sR0FBRyxTQUFPLENBQUM7YUFDM0I7WUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLFlBQVksc0JBQXNCLElBQUksSUFBSSxDQUFDLElBQUksWUFBWSxJQUFJLEVBQUU7O29CQUN4RSxTQUFPLEdBQVksSUFBSSxPQUFPLEVBQUU7Z0JBQ3BDLENBQUMsbUJBQWEsT0FBTyxDQUFDLE9BQU8sRUFBQSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBUTtvQkFDckQsU0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBYSxPQUFPLENBQUMsT0FBTyxFQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDNUQsQ0FBQyxDQUFDLENBQUM7O29CQUNDLFFBQU0sR0FBb0IsSUFBSSxlQUFlLEVBQUU7Z0JBQ25ELElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtvQkFDbEIsSUFBSSxPQUFPLENBQUMsTUFBTSxZQUFZLFVBQVUsRUFBRTt3QkFDeEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFXOzRCQUN4QyxRQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFZLE9BQU8sQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUN6RCxDQUFDLENBQUMsQ0FBQztxQkFDSjt5QkFBTTt3QkFDTCxLQUFLLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7NEJBQzlCLFFBQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLG1CQUFLLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUEsQ0FBQyxDQUFDO3lCQUMzQztxQkFDRjtpQkFDRjs7b0JBQ0csVUFBVSxHQUF5QixDQUFDLG1CQUF3QixJQUFJLENBQUMsSUFBSSxFQUFBLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFO29CQUN0RixPQUFPLEVBQUUsU0FBTztvQkFDaEIsTUFBTSxFQUFFLE1BQU07b0JBQ2QsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVM7b0JBQzdDLE1BQU0sRUFBRSxRQUFNO2lCQUNmLENBQUM7Z0JBQ0YsSUFBSSxPQUFPLENBQUMsT0FBTyxLQUFLLE1BQU0sRUFBRTtvQkFDOUIsSUFBSSxPQUFPLENBQUMsWUFBWSxLQUFLLE1BQU0sRUFBRTt3QkFDbkMsT0FBTyxtQkFBSyxVQUFVLENBQUMsSUFBSSxDQUN6QixHQUFHLENBQUMsVUFBQyxRQUFrQixJQUFLLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUM3QyxFQUFBLENBQUM7cUJBQ0g7eUJBQU0sSUFBSSxPQUFPLENBQUMsWUFBWSxLQUFLLE1BQU0sRUFBRTt3QkFDMUMsT0FBTyxtQkFBSyxVQUFVLENBQUMsSUFBSSxDQUN6QixHQUFHLENBQUMsVUFBQyxRQUFrQixJQUFLLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUM3QyxFQUFBLENBQUM7cUJBQ0g7eUJBQU0sSUFBSSxPQUFPLENBQUMsWUFBWSxLQUFLLE1BQU0sRUFBRTt3QkFDMUMsT0FBTyxtQkFBSyxVQUFVLENBQUMsSUFBSSxDQUN6QixHQUFHLENBQUMsVUFBQyxRQUFrQixJQUFLLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUM3QyxFQUFBLENBQUM7cUJBQ0g7eUJBQU0sSUFBSSxPQUFPLENBQUMsWUFBWSxLQUFLLGFBQWEsRUFBRTt3QkFDakQsT0FBTyxtQkFBSyxVQUFVLENBQUMsSUFBSSxDQUN6QixHQUFHLENBQUMsVUFBQyxRQUFrQixJQUFLLE9BQUEsUUFBUSxDQUFDLFdBQVcsRUFBRSxFQUF0QixDQUFzQixDQUFDLENBQ3BELEVBQUEsQ0FBQztxQkFDSDtpQkFDRjtxQkFBTSxJQUFJLE9BQU8sQ0FBQyxPQUFPLEtBQUssUUFBUSxFQUFFO29CQUN2QyxNQUFNLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO2lCQUN6RDtnQkFDRCxPQUFPLFVBQVUsQ0FBQzthQUNuQjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsbUJBQVksSUFBSSxDQUFDLElBQUksRUFBQSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDOUQ7UUFDSCxDQUFDO1FBQ0gsY0FBQztJQUFELENBQUMsQUEzSE0sQ0FBYyxpQkFBaUIsR0EySHBDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUsIEluamVjdGFibGUsIEluamVjdG9yLCDJtVJlZmxlY3Rpb25DYXBhYmlsaXRpZXMsIEluamVjdEZsYWdzLCBPcHRpb25hbCxcbiAgU2tpcFNlbGYsIFNlbGYsIEluamVjdCwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMsIFVSTFNlYXJjaFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yU2VydmljZSB9IGZyb20gJ0Bjb3ZhbGVudC9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IHR5cGUgVGRIdHRwTWV0aG9kID0gJ0dFVCcgfCAnUE9TVCcgfCAnUEFUQ0gnIHwgJ0RFTEVURScgfCAnSEVBRCcgfCAnUFVUJyB8ICdPUFRJT05TJztcblxuZXhwb3J0IHR5cGUgVGRIdHRwUkVTVFJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG5cbmV4cG9ydCB0eXBlIFRkSHR0cFJFU1RPYnNlcnZlID0gJ2JvZHknIHwgJ3Jlc3BvbnNlJyB8ICdldmVudHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZEh0dHBSRVNUQ29uZmlnIHtcbiAgYmFzZUhlYWRlcnM/OiBIdHRwSGVhZGVycztcbiAgYmFzZVVybDogc3RyaW5nO1xuICBkZWZhdWx0T2JzZXJ2ZT86IFRkSHR0cFJFU1RPYnNlcnZlO1xuICBkZWZhdWx0UmVzcG9uc2VUeXBlPzogVGRIdHRwUkVTVFJlc3BvbnNlVHlwZTtcbiAgaHR0cFNlcnZpY2VUeXBlPzogVHlwZTxIdHRwIHwgSHR0cENsaWVudCB8IEh0dHBJbnRlcmNlcHRvclNlcnZpY2U+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZEh0dHBSRVNUT3B0aW9ucyB7XG4gIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcbiAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgfTtcbiAgb2JzZXJ2ZT86IFRkSHR0cFJFU1RPYnNlcnZlO1xuICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xuICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gIH07XG4gIHJlc3BvbnNlVHlwZT86IFRkSHR0cFJFU1RSZXNwb25zZVR5cGU7XG4gIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRIdHRwUkVTVE9wdGlvbnNXaXRoQm9keSBleHRlbmRzIElUZEh0dHBSRVNUT3B0aW9ucyB7XG4gIGJvZHk/OiBhbnk7XG59XG5cbmV4cG9ydCBjb25zdCBOT09QX0hUVFA6IE9ic2VydmFibGU8YW55PiA9IG9mKHVuZGVmaW5lZCk7XG5cbnR5cGUgQ29uc3RydWN0b3I8VD4gPSBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBUO1xuXG4vKipcbiAqIERPIE5PVCBNT0RJRllcbiAqIFRha2VuIGZyb20gYW5ndWxhciBzaW5jZSB0aGV5IGRvbnQgZXhwb3NlIHRoaXMgZnVuY3Rpb25cbiAqIFRoaXMgaXMgdXNlZCBpbnRlcm5hbGx5IHRvIGluamVjdCBzZXJ2aWNlcyBmcm9tIHRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgYmFzZSBzZXJ2aWNlIHVzaW5nIHRoZSBtaXhpbkh0dHBcbiAqIEBpbnRlcm5hbFxuICovXG5mdW5jdGlvbiBpbmplY3RBcmdzKHR5cGVzOiAoVHlwZTxhbnk+fCBJbmplY3Rpb25Ub2tlbjxhbnk+fCBhbnlbXSlbXSwgaW5qZWN0b3I6IEluamVjdG9yKTogYW55W10ge1xuICBjb25zdCBhcmdzOiBhbnlbXSA9IFtdO1xuICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdHlwZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBhcmc6IGFueSA9IHR5cGVzW2ldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcbiAgICAgIGlmIChhcmcubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQXJndW1lbnRzIGFycmF5IG11c3QgaGF2ZSBhcmd1bWVudHMuJyk7XG4gICAgICB9XG4gICAgICBsZXQgdHlwZTogVHlwZTxhbnk+fHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAgIGxldCBmbGFnczogSW5qZWN0RmxhZ3MgPSBJbmplY3RGbGFncy5EZWZhdWx0O1xuXG4gICAgICBmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgYXJnLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IG1ldGE6IGFueSA9IGFyZ1tqXTtcbiAgICAgICAgaWYgKG1ldGEgaW5zdGFuY2VvZiBPcHRpb25hbCB8fCBtZXRhLm5nTWV0YWRhdGFOYW1lID09PSAnT3B0aW9uYWwnKSB7XG4gICAgICAgICAgLyogdHNsaW50OmRpc2FibGUgKi9cbiAgICAgICAgICBmbGFncyB8PSBJbmplY3RGbGFncy5PcHRpb25hbDtcbiAgICAgICAgfSBlbHNlIGlmIChtZXRhIGluc3RhbmNlb2YgU2tpcFNlbGYgfHwgbWV0YS5uZ01ldGFkYXRhTmFtZSA9PT0gJ1NraXBTZWxmJykge1xuICAgICAgICAgIGZsYWdzIHw9IEluamVjdEZsYWdzLlNraXBTZWxmO1xuICAgICAgICB9IGVsc2UgaWYgKG1ldGEgaW5zdGFuY2VvZiBTZWxmIHx8IG1ldGEubmdNZXRhZGF0YU5hbWUgPT09ICdTZWxmJykge1xuICAgICAgICAgIGZsYWdzIHw9IEluamVjdEZsYWdzLlNlbGY7XG4gICAgICAgIH0gZWxzZSBpZiAobWV0YSBpbnN0YW5jZW9mIEluamVjdCkge1xuICAgICAgICAgIHR5cGUgPSBtZXRhLnRva2VuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHR5cGUgPSBtZXRhO1xuICAgICAgICB9XG4gICAgICAgIC8qIHRzbGludDplbmFibGUgKi9cbiAgICAgIH1cblxuICAgICAgYXJncy5wdXNoKGluamVjdG9yLmdldCh0eXBlICEsIGZsYWdzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyZ3MucHVzaChpbmplY3Rvci5nZXQoYXJnKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcmdzO1xufVxuXG4vKiogXG4gKiBNaXhpbiB0byBhdWdtZW50IGEgc2VydmljZSB3aXRoIGh0dHAgaGVscGVycy5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5IdHRwKGJhc2U6IGFueSwgY29uZmlnOiBJVGRIdHRwUkVTVENvbmZpZyk6IENvbnN0cnVjdG9yPGFueT4ge1xuICAvKipcbiAgICogSW50ZXJuYWwgY2xhc3MgdXNlZCB0byBnZXQgYW4gaW5zdGFuY2Ugb2YgSW5qZWN0b3IgZm9yIGludGVybmFsIHVzYWdlIHBsdXMgYWxzb1xuICAgKiBhIHdheSB0byBpbmplY3Qgc2VydmljZXMgZnJvbSB0aGUgY29uc3RydWN0b3Igb2YgdGhlIHVuZGVybHlpbmcgc2VydmljZVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIEBJbmplY3RhYmxlKClcbiAgYWJzdHJhY3QgY2xhc3MgSHR0cEludGVybmFsQ2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgX2luamVjdG9yOiBJbmplY3Rvcikge1xuICAgICAgc3VwZXIoLi4uaW5qZWN0QXJncyhuZXcgybVSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzKCkucGFyYW1ldGVycyhiYXNlKSwgX2luamVjdG9yKSk7XG4gICAgICB0aGlzLmJ1aWxkQ29uZmlnKCk7XG4gICAgfVxuICAgIGFic3RyYWN0IGJ1aWxkQ29uZmlnKCk6IHZvaWQ7XG4gIH1cbiAgLyoqXG4gICAqIEFjdHVhbGwgY2xhc3MgYmVpbmcgcmV0dXJuZWQgd2l0aCBhbGwgdGhlIGhvb2tzIGZvciBodHRwIHVzYWdlXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgSHR0cEludGVybmFsQ2xhc3Mge1xuICAgIHByaXZhdGUgX2Jhc2VVcmw6IHN0cmluZztcbiAgICBnZXQgYmFzZVVybCgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICh0eXBlb2YodGhpcy5iYXNlUGF0aCkgPT09ICdzdHJpbmcnID9cbiAgICAgICAgdGhpcy5iYXNlUGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIDogJycpICsgdGhpcy5fYmFzZVVybDtcbiAgICB9XG4gICAgcHJpdmF0ZSBfYmFzZUhlYWRlcnM6IEh0dHBIZWFkZXJzO1xuICAgIHByaXZhdGUgX2RlZmF1bHRPYnNlcnZlPzogVGRIdHRwUkVTVE9ic2VydmU7XG4gICAgcHJpdmF0ZSBfZGVmYXVsdFJlc3BvbnNlVHlwZT86IFRkSHR0cFJFU1RSZXNwb25zZVR5cGU7XG5cbiAgICBodHRwOiBIdHRwQ2xpZW50IHwgSHR0cEludGVyY2VwdG9yU2VydmljZSB8IEh0dHA7XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdXNlZCB0byBzZXR1cCB0aGUgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIGFuZCBnZXQgYW4gaW5zdGFuY2Ugb2YgdGhlIGh0dHAgc2VydmljZVxuICAgICAqL1xuICAgIGJ1aWxkQ29uZmlnKCk6IHZvaWQge1xuICAgICAgdGhpcy5odHRwID0gdGhpcy5faW5qZWN0b3IuZ2V0KGNvbmZpZy5odHRwU2VydmljZVR5cGUgfHwgSHR0cENsaWVudCk7XG4gICAgICB0aGlzLl9iYXNlVXJsID0gY29uZmlnICYmIGNvbmZpZy5iYXNlVXJsID8gY29uZmlnLmJhc2VVcmwucmVwbGFjZSgvXFwvJC8sICcnKSA6ICcnO1xuICAgICAgdGhpcy5fYmFzZUhlYWRlcnMgPSBjb25maWcgJiYgY29uZmlnLmJhc2VIZWFkZXJzID8gY29uZmlnLmJhc2VIZWFkZXJzIDogbmV3IEh0dHBIZWFkZXJzKCk7XG4gICAgICB0aGlzLl9kZWZhdWx0T2JzZXJ2ZSA9IGNvbmZpZyAmJiBjb25maWcuZGVmYXVsdE9ic2VydmUgPyBjb25maWcuZGVmYXVsdE9ic2VydmUgOiAnYm9keSc7XG4gICAgICB0aGlzLl9kZWZhdWx0UmVzcG9uc2VUeXBlID0gY29uZmlnICYmIGNvbmZpZy5kZWZhdWx0UmVzcG9uc2VUeXBlID8gY29uZmlnLmRlZmF1bHRSZXNwb25zZVR5cGUgOiAnanNvbic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWV0aG9kIHVzZWQgdG8gYnVpbGQgdGhlIGRlZmF1bHQgaGVhZGVycyB1c2luZyB0aGUgYmFzZSBoZWFkZXJzXG4gICAgICovXG4gICAgYnVpbGRIZWFkZXJzKCk6IEh0dHBIZWFkZXJzIHtcbiAgICAgIGxldCBoZWFkZXJzT2JqOiB7W2tleTogc3RyaW5nXTogYW55fSA9IHt9O1xuICAgICAgdGhpcy5fYmFzZUhlYWRlcnMua2V5cygpLmZvckVhY2goKGtleTogYW55KSA9PiB7XG4gICAgICAgIGhlYWRlcnNPYmpba2V5XSA9IHRoaXMuX2Jhc2VIZWFkZXJzLmdldChrZXkpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IEh0dHBIZWFkZXJzKGhlYWRlcnNPYmopO1xuICAgIH1cblxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIGJ1aWxkUmVxdWVzdDxSZXNwb25zZT4obWV0aG9kOiAnUE9TVCcgfCAnUFVUJyB8ICdQQVRDSCcsIHVybDogc3RyaW5nLCBvcHRpb25zPzogSVRkSHR0cFJFU1RPcHRpb25zV2l0aEJvZHkpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPjtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICBidWlsZFJlcXVlc3Q8SHR0cFJlc3BvbnNlPihtZXRob2Q6ICdQT1NUJyB8ICdQVVQnIHwgJ1BBVENIJywgdXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBJVGRIdHRwUkVTVE9wdGlvbnNXaXRoQm9keSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPjtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICBidWlsZFJlcXVlc3Q8UmVzcG9uc2U+KG1ldGhvZDogJ0dFVCcgfCAnREVMRVRFJywgdXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBJVGRIdHRwUkVTVE9wdGlvbnMpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPjtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICBidWlsZFJlcXVlc3Q8SHR0cFJlc3BvbnNlPihtZXRob2Q6ICdHRVQnIHwgJ0RFTEVURScsIHVybDogc3RyaW5nLCBvcHRpb25zPzogSVRkSHR0cFJFU1RPcHRpb25zKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U+O1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIGJ1aWxkUmVxdWVzdDxSZXNwb25zZT4obWV0aG9kOiBUZEh0dHBNZXRob2QsIHVybDogc3RyaW5nLCBvcHRpb25zPzogSVRkSHR0cFJFU1RPcHRpb25zV2l0aEJvZHkpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPjtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICBidWlsZFJlcXVlc3Q8SHR0cFJlc3BvbnNlPihtZXRob2Q6IFRkSHR0cE1ldGhvZCwgdXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBJVGRIdHRwUkVTVE9wdGlvbnNXaXRoQm9keSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPiB7XG4gICAgICByZXR1cm4gdGhpcy5fYnVpbGRSZXF1ZXN0KG1ldGhvZCwgdXJsLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdXNlZCB0byBidWlsZCB0aGUgcmVxdWVzdCBkZXBlbmRpbmcgb24gdGhlIGBodHRwYCBzZXJ2aWNlIGFuZCBUZEh0dHBNZXRob2RcbiAgICAgKi9cbiAgICBwcml2YXRlIF9idWlsZFJlcXVlc3QobWV0aG9kOiBUZEh0dHBNZXRob2QsIHVybDogc3RyaW5nLCBvcHRpb25zOiBJVGRIdHRwUkVTVE9wdGlvbnNXaXRoQm9keSA9IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgIGlmICghb3B0aW9ucy5yZXNwb25zZVR5cGUpIHtcbiAgICAgICAgb3B0aW9ucy5yZXNwb25zZVR5cGUgPSB0aGlzLl9kZWZhdWx0UmVzcG9uc2VUeXBlO1xuICAgICAgfVxuICAgICAgaWYgKCFvcHRpb25zLm9ic2VydmUpIHtcbiAgICAgICAgb3B0aW9ucy5vYnNlcnZlID0gdGhpcy5fZGVmYXVsdE9ic2VydmU7XG4gICAgICB9XG4gICAgICBpZiAoIW9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICBvcHRpb25zLmhlYWRlcnMgPSB0aGlzLmJ1aWxkSGVhZGVycygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gdGhpcy5idWlsZEhlYWRlcnMoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuaGVhZGVycyBpbnN0YW5jZW9mIEh0dHBIZWFkZXJzKSB7XG4gICAgICAgICAgKDxIdHRwSGVhZGVycz5vcHRpb25zLmhlYWRlcnMpLmtleXMoKS5mb3JFYWNoKChrZXk6IGFueSkgPT4ge1xuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KGtleSwgKDxIdHRwSGVhZGVycz5vcHRpb25zLmhlYWRlcnMpLmdldChrZXkpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoa2V5LCA8YW55Pm9wdGlvbnMuaGVhZGVyc1trZXldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzID0gaGVhZGVycztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmh0dHAgaW5zdGFuY2VvZiBIdHRwSW50ZXJjZXB0b3JTZXJ2aWNlIHx8IHRoaXMuaHR0cCBpbnN0YW5jZW9mIEh0dHApIHtcbiAgICAgICAgbGV0IGhlYWRlcnM6IEhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICAoPEh0dHBIZWFkZXJzPm9wdGlvbnMuaGVhZGVycykua2V5cygpLmZvckVhY2goKGtleTogYW55KSA9PiB7XG4gICAgICAgICAgaGVhZGVycy5zZXQoa2V5LCAoPEh0dHBIZWFkZXJzPm9wdGlvbnMuaGVhZGVycykuZ2V0KGtleSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHBhcmFtczogVVJMU2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICBpZiAob3B0aW9ucy5wYXJhbXMpIHtcbiAgICAgICAgICBpZiAob3B0aW9ucy5wYXJhbXMgaW5zdGFuY2VvZiBIdHRwUGFyYW1zKSB7XG4gICAgICAgICAgICBvcHRpb25zLnBhcmFtcy5rZXlzKCkuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgcGFyYW1zLnNldChrZXksICg8SHR0cFBhcmFtcz5vcHRpb25zLnBhcmFtcykuZ2V0KGtleSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBvcHRpb25zLnBhcmFtcykge1xuICAgICAgICAgICAgICBwYXJhbXMuc2V0KGtleSwgPGFueT5vcHRpb25zLnBhcmFtc1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9ic2VydmFibGU6IE9ic2VydmFibGU8UmVzcG9uc2U+ID0gKDxIdHRwSW50ZXJjZXB0b3JTZXJ2aWNlPnRoaXMuaHR0cCkucmVxdWVzdCh1cmwsIHtcbiAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgIGJvZHk6IG9wdGlvbnMuYm9keSA/IG9wdGlvbnMuYm9keSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvcHRpb25zLm9ic2VydmUgPT09ICdib2R5Jykge1xuICAgICAgICAgIGlmIChvcHRpb25zLnJlc3BvbnNlVHlwZSA9PT0gJ2pzb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gPGFueT5vYnNlcnZhYmxlLnBpcGUoXG4gICAgICAgICAgICAgIG1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMucmVzcG9uc2VUeXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgICAgIHJldHVybiA8YW55Pm9ic2VydmFibGUucGlwZShcbiAgICAgICAgICAgICAgbWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSksXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5yZXNwb25zZVR5cGUgPT09ICdibG9iJykge1xuICAgICAgICAgICAgcmV0dXJuIDxhbnk+b2JzZXJ2YWJsZS5waXBlKFxuICAgICAgICAgICAgICBtYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuYmxvYigpKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnJlc3BvbnNlVHlwZSA9PT0gJ2FycmF5YnVmZmVyJykge1xuICAgICAgICAgICAgcmV0dXJuIDxhbnk+b2JzZXJ2YWJsZS5waXBlKFxuICAgICAgICAgICAgICBtYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKSksXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLm9ic2VydmUgPT09ICdldmVudHMnKSB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoJ1wiZXZlbnRzXCIgbm90IHN1cHBwb3J0ZWQgaW4gQGFuZ3VsYXIvaHR0cCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICg8SHR0cENsaWVudD50aGlzLmh0dHApLnJlcXVlc3QobWV0aG9kLCB1cmwsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbiJdfQ==