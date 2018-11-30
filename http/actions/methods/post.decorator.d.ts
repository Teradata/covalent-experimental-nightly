import { ITdHttpRESTOptions } from '../../';
/**
 * Decorator that adds POST request capabilities to a method
 */
export declare function POST(config: {
    path: string;
    options?: ITdHttpRESTOptions;
}): Function;
