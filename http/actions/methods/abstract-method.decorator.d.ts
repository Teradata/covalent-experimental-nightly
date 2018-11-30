import { HttpParams } from '@angular/common/http';
import { TdHttpMethod, ITdHttpRESTOptions } from '../../http.mixin';
/**
 * Method used to copy parameters from an array or HttpParams object
 * into a centrilized HttpParams object
 * @internal
 */
export declare function parseParams(target: HttpParams, source: HttpParams | {
    [key: string]: string | string[];
}): HttpParams;
/**
 * Abstract implementation of the http method decorator
 * @internal
 */
export declare function TdAbstractMethod(config: {
    method: TdHttpMethod;
    path: string;
    options?: ITdHttpRESTOptions;
}): Function;
