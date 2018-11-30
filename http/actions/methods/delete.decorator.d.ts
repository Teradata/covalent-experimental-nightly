import { ITdHttpRESTOptions } from '../../';
/**
 * Decorator that adds DELETE request capabilities to a method
 */
export declare function DELETE(config: {
    path: string;
    options?: ITdHttpRESTOptions;
}): Function;
