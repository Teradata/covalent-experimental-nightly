import { Type } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http } from '@angular/http';
import { HttpInterceptorService } from '@covalent/http';
import { Observable } from 'rxjs';
export declare type TdHttpMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'HEAD' | 'PUT' | 'OPTIONS';
export declare type TdHttpRESTResponseType = 'arraybuffer' | 'blob' | 'json' | 'text';
export declare type TdHttpRESTObserve = 'body' | 'response' | 'events';
export interface ITdHttpRESTConfig {
    baseHeaders?: HttpHeaders;
    baseUrl: string;
    defaultObserve?: TdHttpRESTObserve;
    defaultResponseType?: TdHttpRESTResponseType;
    httpServiceType?: Type<Http | HttpClient | HttpInterceptorService>;
}
export interface ITdHttpRESTOptions {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: TdHttpRESTObserve;
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    responseType?: TdHttpRESTResponseType;
    reportProgress?: boolean;
    withCredentials?: boolean;
}
export interface ITdHttpRESTOptionsWithBody extends ITdHttpRESTOptions {
    body?: any;
}
export declare const NOOP_HTTP: Observable<any>;
declare type Constructor<T> = new (...args: any[]) => T;
/**
 * Mixin to augment a service with http helpers.
 * @internal
 */
export declare function mixinHttp(base: any, config: ITdHttpRESTConfig): Constructor<any>;
export {};
