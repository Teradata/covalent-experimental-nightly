import { ITdHttpRESTOptions } from '../../';
/**
 * Decorator that adds GET request capabilities to a method
 */
export declare function GET(config: {
    path: string;
    options?: ITdHttpRESTOptions;
}): Function;
