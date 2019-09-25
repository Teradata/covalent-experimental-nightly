import { ISchema } from './schema';
export interface IComponent {
    enabled(options: ISchema): boolean;
    dependency(): string;
}
export declare class DynamicForms implements IComponent {
    enabled(options: ISchema): boolean;
    dependency(): string;
}
export declare class Http implements IComponent {
    enabled(options: ISchema): boolean;
    dependency(): string;
}
export declare class Highlight implements IComponent {
    enabled(options: ISchema): boolean;
    dependency(): string;
}
export declare class Markdown implements IComponent {
    enabled(options: ISchema): boolean;
    dependency(): string;
}
export declare class FlavoredMarkdown implements IComponent {
    enabled(options: ISchema): boolean;
    dependency(): string;
}
export declare class Echarts implements IComponent {
    enabled(options: ISchema): boolean;
    dependency(): string;
}
export declare class TextEditor implements IComponent {
    enabled(options: ISchema): boolean;
    dependency(): string;
}
export declare class CodeEditor implements IComponent {
    enabled(options: ISchema): boolean;
    dependency(): string;
}
