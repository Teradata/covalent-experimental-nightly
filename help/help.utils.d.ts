export interface IHelpMenuDataItem {
    title?: string;
    url?: string;
    httpOptions?: object;
    markdownString?: string;
    anchor?: string;
    children?: IHelpMenuDataItem[];
}
export interface IHelpComponentLabels {
    goHome?: string;
    goBack?: string;
    emptyState?: string;
}
export interface IHelpWindowComponentLabels extends IHelpComponentLabels {
    help?: string;
    close?: string;
}
export declare const DEFAULT_HELP_COMP_LABELS: IHelpComponentLabels;
export declare const DEFAULT_HELP_WINDOW_COMP_LABELS: IHelpWindowComponentLabels;
