import { ITdHttpRESTOptions } from '../../';
/**
 * Decorator that adds PATCH request capabilities to a method
 */
export declare function PATCH(config: {
    path: string;
    options?: ITdHttpRESTOptions;
}): Function;
