import { ITdHttpRESTOptions } from '../../';
/**
 * Decorator that adds PUT request capabilities to a method
 */
export declare function PUT(config: {
    path: string;
    options?: ITdHttpRESTOptions;
}): Function;
