/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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
export const NOOP_HTTP = of(undefined);
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
    const args = [];
    for (let i = 0; i < types.length; i++) {
        /** @type {?} */
        const arg = types[i];
        if (Array.isArray(arg)) {
            if (arg.length === 0) {
                throw new Error('Arguments array must have arguments.');
            }
            /** @type {?} */
            let type = undefined;
            /** @type {?} */
            let flags = 0 /* Default */;
            for (let j = 0; j < arg.length; j++) {
                /** @type {?} */
                const meta = arg[j];
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
    class HttpInternalClass extends base {
        /**
         * @param {?} _injector
         */
        constructor(_injector) {
            super(...injectArgs(new ɵReflectionCapabilities().parameters(base), _injector));
            this._injector = _injector;
            this.buildConfig();
        }
    }
    HttpInternalClass.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    HttpInternalClass.ctorParameters = () => [
        { type: Injector }
    ];
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
    return class extends HttpInternalClass {
        /**
         * @return {?}
         */
        get baseUrl() {
            return (typeof (this.basePath) === 'string' ?
                this.basePath.replace(/\/$/, '') : '') + this._baseUrl;
        }
        /**
         * Method used to setup the configuration parameters and get an instance of the http service
         * @return {?}
         */
        buildConfig() {
            this.http = this._injector.get(config.httpServiceType || HttpClient);
            this._baseUrl = config && config.baseUrl ? config.baseUrl.replace(/\/$/, '') : '';
            this._baseHeaders = config && config.baseHeaders ? config.baseHeaders : new HttpHeaders();
            this._defaultObserve = config && config.defaultObserve ? config.defaultObserve : 'body';
            this._defaultResponseType = config && config.defaultResponseType ? config.defaultResponseType : 'json';
        }
        /**
         * Method used to build the default headers using the base headers
         * @return {?}
         */
        buildHeaders() {
            /** @type {?} */
            let headersObj = {};
            this._baseHeaders.keys().forEach((key) => {
                headersObj[key] = this._baseHeaders.get(key);
            });
            return new HttpHeaders(headersObj);
        }
        /* tslint:disable-next-line */
        /**
         * @template HttpResponse
         * @param {?} method
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
        buildRequest(method, url, options) {
            return this._buildRequest(method, url, options);
        }
        /**
         * Method used to build the request depending on the `http` service and TdHttpMethod
         * @param {?} method
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
        _buildRequest(method, url, options = {}) {
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
                let headers = this.buildHeaders();
                if (options.headers instanceof HttpHeaders) {
                    ((/** @type {?} */ (options.headers))).keys().forEach((key) => {
                        headers = headers.set(key, ((/** @type {?} */ (options.headers))).get(key));
                    });
                }
                else {
                    for (let key in options.headers) {
                        headers = headers.set(key, (/** @type {?} */ (options.headers[key])));
                    }
                }
                options.headers = headers;
            }
            if (this.http instanceof HttpInterceptorService || this.http instanceof Http) {
                /** @type {?} */
                let headers = new Headers();
                ((/** @type {?} */ (options.headers))).keys().forEach((key) => {
                    headers.set(key, ((/** @type {?} */ (options.headers))).get(key));
                });
                /** @type {?} */
                let params = new URLSearchParams();
                if (options.params) {
                    if (options.params instanceof HttpParams) {
                        options.params.keys().forEach((key) => {
                            params.set(key, ((/** @type {?} */ (options.params))).get(key));
                        });
                    }
                    else {
                        for (let key in options.params) {
                            params.set(key, (/** @type {?} */ (options.params[key])));
                        }
                    }
                }
                /** @type {?} */
                let observable = ((/** @type {?} */ (this.http))).request(url, {
                    headers: headers,
                    method: method,
                    body: options.body ? options.body : undefined,
                    params: params,
                });
                if (options.observe === 'body') {
                    if (options.responseType === 'json') {
                        return (/** @type {?} */ (observable.pipe(map((response) => response.json()))));
                    }
                    else if (options.responseType === 'text') {
                        return (/** @type {?} */ (observable.pipe(map((response) => response.text()))));
                    }
                    else if (options.responseType === 'blob') {
                        return (/** @type {?} */ (observable.pipe(map((response) => response.blob()))));
                    }
                    else if (options.responseType === 'arraybuffer') {
                        return (/** @type {?} */ (observable.pipe(map((response) => response.arrayBuffer()))));
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
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5taXhpbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvaHR0cC8iLCJzb3VyY2VzIjpbImh0dHAubWl4aW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBUSxVQUFVLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFlLFFBQVEsRUFDakYsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQWtCLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxJQUFJLEVBQVksT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQVFyQyx1Q0FNQzs7O0lBTEMsd0NBQTBCOztJQUMxQixvQ0FBZ0I7O0lBQ2hCLDJDQUFtQzs7SUFDbkMsZ0RBQTZDOztJQUM3Qyw0Q0FBbUU7Ozs7O0FBR3JFLHdDQVdDOzs7SUFWQyxxQ0FFRTs7SUFDRixxQ0FBNEI7O0lBQzVCLG9DQUVFOztJQUNGLDBDQUFzQzs7SUFDdEMsNENBQXlCOztJQUN6Qiw2Q0FBMEI7Ozs7O0FBRzVCLGdEQUVDOzs7SUFEQywwQ0FBVzs7O0FBR2IsTUFBTSxPQUFPLFNBQVMsR0FBb0IsRUFBRSxDQUFDLFNBQVMsQ0FBQzs7Ozs7Ozs7OztBQVV2RCxTQUFTLFVBQVUsQ0FBQyxLQUFnRCxFQUFFLFFBQWtCOztVQUNoRixJQUFJLEdBQVUsRUFBRTtJQUN0QixLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUs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bmplY3RhYmxlLCBJbmplY3RvciwgybVSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzLCBJbmplY3RGbGFncywgT3B0aW9uYWwsXG4gIFNraXBTZWxmLCBTZWxmLCBJbmplY3QsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzLCBVUkxTZWFyY2hQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEh0dHBJbnRlcmNlcHRvclNlcnZpY2UgfSBmcm9tICdAY292YWxlbnQvaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCB0eXBlIFRkSHR0cE1ldGhvZCA9ICdHRVQnIHwgJ1BPU1QnIHwgJ1BBVENIJyB8ICdERUxFVEUnIHwgJ0hFQUQnIHwgJ1BVVCcgfCAnT1BUSU9OUyc7XG5cbmV4cG9ydCB0eXBlIFRkSHR0cFJFU1RSZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuXG5leHBvcnQgdHlwZSBUZEh0dHBSRVNUT2JzZXJ2ZSA9ICdib2R5JyB8ICdyZXNwb25zZScgfCAnZXZlbnRzJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRIdHRwUkVTVENvbmZpZyB7XG4gIGJhc2VIZWFkZXJzPzogSHR0cEhlYWRlcnM7XG4gIGJhc2VVcmw6IHN0cmluZztcbiAgZGVmYXVsdE9ic2VydmU/OiBUZEh0dHBSRVNUT2JzZXJ2ZTtcbiAgZGVmYXVsdFJlc3BvbnNlVHlwZT86IFRkSHR0cFJFU1RSZXNwb25zZVR5cGU7XG4gIGh0dHBTZXJ2aWNlVHlwZT86IFR5cGU8SHR0cCB8IEh0dHBDbGllbnQgfCBIdHRwSW50ZXJjZXB0b3JTZXJ2aWNlPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRIdHRwUkVTVE9wdGlvbnMge1xuICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XG4gICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gIH07XG4gIG9ic2VydmU/OiBUZEh0dHBSRVNUT2JzZXJ2ZTtcbiAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcbiAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICB9O1xuICByZXNwb25zZVR5cGU/OiBUZEh0dHBSRVNUUmVzcG9uc2VUeXBlO1xuICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkSHR0cFJFU1RPcHRpb25zV2l0aEJvZHkgZXh0ZW5kcyBJVGRIdHRwUkVTVE9wdGlvbnMge1xuICBib2R5PzogYW55O1xufVxuXG5leHBvcnQgY29uc3QgTk9PUF9IVFRQOiBPYnNlcnZhYmxlPGFueT4gPSBvZih1bmRlZmluZWQpO1xuXG50eXBlIENvbnN0cnVjdG9yPFQ+ID0gbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gVDtcblxuLyoqXG4gKiBETyBOT1QgTU9ESUZZXG4gKiBUYWtlbiBmcm9tIGFuZ3VsYXIgc2luY2UgdGhleSBkb250IGV4cG9zZSB0aGlzIGZ1bmN0aW9uXG4gKiBUaGlzIGlzIHVzZWQgaW50ZXJuYWxseSB0byBpbmplY3Qgc2VydmljZXMgZnJvbSB0aGUgY29uc3RydWN0b3Igb2YgdGhlIGJhc2Ugc2VydmljZSB1c2luZyB0aGUgbWl4aW5IdHRwXG4gKiBAaW50ZXJuYWxcbiAqL1xuZnVuY3Rpb24gaW5qZWN0QXJncyh0eXBlczogKFR5cGU8YW55PnwgSW5qZWN0aW9uVG9rZW48YW55PnwgYW55W10pW10sIGluamVjdG9yOiBJbmplY3Rvcik6IGFueVtdIHtcbiAgY29uc3QgYXJnczogYW55W10gPSBbXTtcbiAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHR5cGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYXJnOiBhbnkgPSB0eXBlc1tpXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG4gICAgICBpZiAoYXJnLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FyZ3VtZW50cyBhcnJheSBtdXN0IGhhdmUgYXJndW1lbnRzLicpO1xuICAgICAgfVxuICAgICAgbGV0IHR5cGU6IFR5cGU8YW55Pnx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgICBsZXQgZmxhZ3M6IEluamVjdEZsYWdzID0gSW5qZWN0RmxhZ3MuRGVmYXVsdDtcblxuICAgICAgZm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IGFyZy5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBtZXRhOiBhbnkgPSBhcmdbal07XG4gICAgICAgIGlmIChtZXRhIGluc3RhbmNlb2YgT3B0aW9uYWwgfHwgbWV0YS5uZ01ldGFkYXRhTmFtZSA9PT0gJ09wdGlvbmFsJykge1xuICAgICAgICAgIC8qIHRzbGludDpkaXNhYmxlICovXG4gICAgICAgICAgZmxhZ3MgfD0gSW5qZWN0RmxhZ3MuT3B0aW9uYWw7XG4gICAgICAgIH0gZWxzZSBpZiAobWV0YSBpbnN0YW5jZW9mIFNraXBTZWxmIHx8IG1ldGEubmdNZXRhZGF0YU5hbWUgPT09ICdTa2lwU2VsZicpIHtcbiAgICAgICAgICBmbGFncyB8PSBJbmplY3RGbGFncy5Ta2lwU2VsZjtcbiAgICAgICAgfSBlbHNlIGlmIChtZXRhIGluc3RhbmNlb2YgU2VsZiB8fCBtZXRhLm5nTWV0YWRhdGFOYW1lID09PSAnU2VsZicpIHtcbiAgICAgICAgICBmbGFncyB8PSBJbmplY3RGbGFncy5TZWxmO1xuICAgICAgICB9IGVsc2UgaWYgKG1ldGEgaW5zdGFuY2VvZiBJbmplY3QpIHtcbiAgICAgICAgICB0eXBlID0gbWV0YS50b2tlbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0eXBlID0gbWV0YTtcbiAgICAgICAgfVxuICAgICAgICAvKiB0c2xpbnQ6ZW5hYmxlICovXG4gICAgICB9XG5cbiAgICAgIGFyZ3MucHVzaChpbmplY3Rvci5nZXQodHlwZSAhLCBmbGFncykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcmdzLnB1c2goaW5qZWN0b3IuZ2V0KGFyZykpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJncztcbn1cblxuLyoqIFxuICogTWl4aW4gdG8gYXVnbWVudCBhIHNlcnZpY2Ugd2l0aCBodHRwIGhlbHBlcnMuXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1peGluSHR0cChiYXNlOiBhbnksIGNvbmZpZzogSVRkSHR0cFJFU1RDb25maWcpOiBDb25zdHJ1Y3Rvcjxhbnk+IHtcbiAgLyoqXG4gICAqIEludGVybmFsIGNsYXNzIHVzZWQgdG8gZ2V0IGFuIGluc3RhbmNlIG9mIEluamVjdG9yIGZvciBpbnRlcm5hbCB1c2FnZSBwbHVzIGFsc29cbiAgICogYSB3YXkgdG8gaW5qZWN0IHNlcnZpY2VzIGZyb20gdGhlIGNvbnN0cnVjdG9yIG9mIHRoZSB1bmRlcmx5aW5nIHNlcnZpY2VcbiAgICogQGludGVybmFsXG4gICAqL1xuICBASW5qZWN0YWJsZSgpXG4gIGFic3RyYWN0IGNsYXNzIEh0dHBJbnRlcm5hbENsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIF9pbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICAgIHN1cGVyKC4uLmluamVjdEFyZ3MobmV3IMm1UmVmbGVjdGlvbkNhcGFiaWxpdGllcygpLnBhcmFtZXRlcnMoYmFzZSksIF9pbmplY3RvcikpO1xuICAgICAgdGhpcy5idWlsZENvbmZpZygpO1xuICAgIH1cbiAgICBhYnN0cmFjdCBidWlsZENvbmZpZygpOiB2b2lkO1xuICB9XG4gIC8qKlxuICAgKiBBY3R1YWxsIGNsYXNzIGJlaW5nIHJldHVybmVkIHdpdGggYWxsIHRoZSBob29rcyBmb3IgaHR0cCB1c2FnZVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIEh0dHBJbnRlcm5hbENsYXNzIHtcbiAgICBwcml2YXRlIF9iYXNlVXJsOiBzdHJpbmc7XG4gICAgZ2V0IGJhc2VVcmwoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAodHlwZW9mKHRoaXMuYmFzZVBhdGgpID09PSAnc3RyaW5nJyA/XG4gICAgICAgIHRoaXMuYmFzZVBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSA6ICcnKSArIHRoaXMuX2Jhc2VVcmw7XG4gICAgfVxuICAgIHByaXZhdGUgX2Jhc2VIZWFkZXJzOiBIdHRwSGVhZGVycztcbiAgICBwcml2YXRlIF9kZWZhdWx0T2JzZXJ2ZT86IFRkSHR0cFJFU1RPYnNlcnZlO1xuICAgIHByaXZhdGUgX2RlZmF1bHRSZXNwb25zZVR5cGU/OiBUZEh0dHBSRVNUUmVzcG9uc2VUeXBlO1xuXG4gICAgaHR0cDogSHR0cENsaWVudCB8IEh0dHBJbnRlcmNlcHRvclNlcnZpY2UgfCBIdHRwO1xuXG4gICAgLyoqXG4gICAgICogTWV0aG9kIHVzZWQgdG8gc2V0dXAgdGhlIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBhbmQgZ2V0IGFuIGluc3RhbmNlIG9mIHRoZSBodHRwIHNlcnZpY2VcbiAgICAgKi9cbiAgICBidWlsZENvbmZpZygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaHR0cCA9IHRoaXMuX2luamVjdG9yLmdldChjb25maWcuaHR0cFNlcnZpY2VUeXBlIHx8IEh0dHBDbGllbnQpO1xuICAgICAgdGhpcy5fYmFzZVVybCA9IGNvbmZpZyAmJiBjb25maWcuYmFzZVVybCA/IGNvbmZpZy5iYXNlVXJsLnJlcGxhY2UoL1xcLyQvLCAnJykgOiAnJztcbiAgICAgIHRoaXMuX2Jhc2VIZWFkZXJzID0gY29uZmlnICYmIGNvbmZpZy5iYXNlSGVhZGVycyA/IGNvbmZpZy5iYXNlSGVhZGVycyA6IG5ldyBIdHRwSGVhZGVycygpO1xuICAgICAgdGhpcy5fZGVmYXVsdE9ic2VydmUgPSBjb25maWcgJiYgY29uZmlnLmRlZmF1bHRPYnNlcnZlID8gY29uZmlnLmRlZmF1bHRPYnNlcnZlIDogJ2JvZHknO1xuICAgICAgdGhpcy5fZGVmYXVsdFJlc3BvbnNlVHlwZSA9IGNvbmZpZyAmJiBjb25maWcuZGVmYXVsdFJlc3BvbnNlVHlwZSA/IGNvbmZpZy5kZWZhdWx0UmVzcG9uc2VUeXBlIDogJ2pzb24nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ldGhvZCB1c2VkIHRvIGJ1aWxkIHRoZSBkZWZhdWx0IGhlYWRlcnMgdXNpbmcgdGhlIGJhc2UgaGVhZGVyc1xuICAgICAqL1xuICAgIGJ1aWxkSGVhZGVycygpOiBIdHRwSGVhZGVycyB7XG4gICAgICBsZXQgaGVhZGVyc09iajoge1trZXk6IHN0cmluZ106IGFueX0gPSB7fTtcbiAgICAgIHRoaXMuX2Jhc2VIZWFkZXJzLmtleXMoKS5mb3JFYWNoKChrZXk6IGFueSkgPT4ge1xuICAgICAgICBoZWFkZXJzT2JqW2tleV0gPSB0aGlzLl9iYXNlSGVhZGVycy5nZXQoa2V5KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBIdHRwSGVhZGVycyhoZWFkZXJzT2JqKTtcbiAgICB9XG5cbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICBidWlsZFJlcXVlc3Q8UmVzcG9uc2U+KG1ldGhvZDogJ1BPU1QnIHwgJ1BVVCcgfCAnUEFUQ0gnLCB1cmw6IHN0cmluZywgb3B0aW9ucz86IElUZEh0dHBSRVNUT3B0aW9uc1dpdGhCb2R5KTogT2JzZXJ2YWJsZTxSZXNwb25zZT47XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgYnVpbGRSZXF1ZXN0PEh0dHBSZXNwb25zZT4obWV0aG9kOiAnUE9TVCcgfCAnUFVUJyB8ICdQQVRDSCcsIHVybDogc3RyaW5nLCBvcHRpb25zPzogSVRkSHR0cFJFU1RPcHRpb25zV2l0aEJvZHkpOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZT47XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgYnVpbGRSZXF1ZXN0PFJlc3BvbnNlPihtZXRob2Q6ICdHRVQnIHwgJ0RFTEVURScsIHVybDogc3RyaW5nLCBvcHRpb25zPzogSVRkSHR0cFJFU1RPcHRpb25zKTogT2JzZXJ2YWJsZTxSZXNwb25zZT47XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgYnVpbGRSZXF1ZXN0PEh0dHBSZXNwb25zZT4obWV0aG9kOiAnR0VUJyB8ICdERUxFVEUnLCB1cmw6IHN0cmluZywgb3B0aW9ucz86IElUZEh0dHBSRVNUT3B0aW9ucyk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPjtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICBidWlsZFJlcXVlc3Q8UmVzcG9uc2U+KG1ldGhvZDogVGRIdHRwTWV0aG9kLCB1cmw6IHN0cmluZywgb3B0aW9ucz86IElUZEh0dHBSRVNUT3B0aW9uc1dpdGhCb2R5KTogT2JzZXJ2YWJsZTxSZXNwb25zZT47XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgYnVpbGRSZXF1ZXN0PEh0dHBSZXNwb25zZT4obWV0aG9kOiBUZEh0dHBNZXRob2QsIHVybDogc3RyaW5nLCBvcHRpb25zPzogSVRkSHR0cFJFU1RPcHRpb25zV2l0aEJvZHkpOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2J1aWxkUmVxdWVzdChtZXRob2QsIHVybCwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWV0aG9kIHVzZWQgdG8gYnVpbGQgdGhlIHJlcXVlc3QgZGVwZW5kaW5nIG9uIHRoZSBgaHR0cGAgc2VydmljZSBhbmQgVGRIdHRwTWV0aG9kXG4gICAgICovXG4gICAgcHJpdmF0ZSBfYnVpbGRSZXF1ZXN0KG1ldGhvZDogVGRIdHRwTWV0aG9kLCB1cmw6IHN0cmluZywgb3B0aW9uczogSVRkSHR0cFJFU1RPcHRpb25zV2l0aEJvZHkgPSB7fSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICBpZiAoIW9wdGlvbnMucmVzcG9uc2VUeXBlKSB7XG4gICAgICAgIG9wdGlvbnMucmVzcG9uc2VUeXBlID0gdGhpcy5fZGVmYXVsdFJlc3BvbnNlVHlwZTtcbiAgICAgIH1cbiAgICAgIGlmICghb3B0aW9ucy5vYnNlcnZlKSB7XG4gICAgICAgIG9wdGlvbnMub2JzZXJ2ZSA9IHRoaXMuX2RlZmF1bHRPYnNlcnZlO1xuICAgICAgfVxuICAgICAgaWYgKCFvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzID0gdGhpcy5idWlsZEhlYWRlcnMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IHRoaXMuYnVpbGRIZWFkZXJzKCk7XG4gICAgICAgIGlmIChvcHRpb25zLmhlYWRlcnMgaW5zdGFuY2VvZiBIdHRwSGVhZGVycykge1xuICAgICAgICAgICg8SHR0cEhlYWRlcnM+b3B0aW9ucy5oZWFkZXJzKS5rZXlzKCkuZm9yRWFjaCgoa2V5OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldChrZXksICg8SHR0cEhlYWRlcnM+b3B0aW9ucy5oZWFkZXJzKS5nZXQoa2V5KSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yIChsZXQga2V5IGluIG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KGtleSwgPGFueT5vcHRpb25zLmhlYWRlcnNba2V5XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMuaGVhZGVycyA9IGhlYWRlcnM7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5odHRwIGluc3RhbmNlb2YgSHR0cEludGVyY2VwdG9yU2VydmljZSB8fCB0aGlzLmh0dHAgaW5zdGFuY2VvZiBIdHRwKSB7XG4gICAgICAgIGxldCBoZWFkZXJzOiBIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgKDxIdHRwSGVhZGVycz5vcHRpb25zLmhlYWRlcnMpLmtleXMoKS5mb3JFYWNoKChrZXk6IGFueSkgPT4ge1xuICAgICAgICAgIGhlYWRlcnMuc2V0KGtleSwgKDxIdHRwSGVhZGVycz5vcHRpb25zLmhlYWRlcnMpLmdldChrZXkpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBwYXJhbXM6IFVSTFNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMucGFyYW1zKSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMucGFyYW1zIGluc3RhbmNlb2YgSHR0cFBhcmFtcykge1xuICAgICAgICAgICAgb3B0aW9ucy5wYXJhbXMua2V5cygpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgIHBhcmFtcy5zZXQoa2V5LCAoPEh0dHBQYXJhbXM+b3B0aW9ucy5wYXJhbXMpLmdldChrZXkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gb3B0aW9ucy5wYXJhbXMpIHtcbiAgICAgICAgICAgICAgcGFyYW1zLnNldChrZXksIDxhbnk+b3B0aW9ucy5wYXJhbXNba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiA9ICg8SHR0cEludGVyY2VwdG9yU2VydmljZT50aGlzLmh0dHApLnJlcXVlc3QodXJsLCB7XG4gICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICBib2R5OiBvcHRpb25zLmJvZHkgPyBvcHRpb25zLmJvZHkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAob3B0aW9ucy5vYnNlcnZlID09PSAnYm9keScpIHtcbiAgICAgICAgICBpZiAob3B0aW9ucy5yZXNwb25zZVR5cGUgPT09ICdqc29uJykge1xuICAgICAgICAgICAgcmV0dXJuIDxhbnk+b2JzZXJ2YWJsZS5waXBlKFxuICAgICAgICAgICAgICBtYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgICByZXR1cm4gPGFueT5vYnNlcnZhYmxlLnBpcGUoXG4gICAgICAgICAgICAgIG1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS50ZXh0KCkpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMucmVzcG9uc2VUeXBlID09PSAnYmxvYicpIHtcbiAgICAgICAgICAgIHJldHVybiA8YW55Pm9ic2VydmFibGUucGlwZShcbiAgICAgICAgICAgICAgbWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmJsb2IoKSksXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5yZXNwb25zZVR5cGUgPT09ICdhcnJheWJ1ZmZlcicpIHtcbiAgICAgICAgICAgIHJldHVybiA8YW55Pm9ic2VydmFibGUucGlwZShcbiAgICAgICAgICAgICAgbWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmFycmF5QnVmZmVyKCkpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5vYnNlcnZlID09PSAnZXZlbnRzJykge1xuICAgICAgICAgIHRocm93IEVycm9yKCdcImV2ZW50c1wiIG5vdCBzdXBwcG9ydGVkIGluIEBhbmd1bGFyL2h0dHAnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoPEh0dHBDbGllbnQ+dGhpcy5odHRwKS5yZXF1ZXN0KG1ldGhvZCwgdXJsLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG4iXX0=