import { OnChanges, SimpleChanges } from '@angular/core';
import { IHelpMenuDataItem, IHelpComponentLabels } from './help.utils';
import { MarkdownLoaderService } from '@covalent/markdown';
export declare class HelpComponent implements OnChanges {
    private _markdownUrlLoaderService;
    /**
     * items: IHelpMenuDataItem[]
     *
     * List of IHelpMenuDataItems to be rendered
     */
    items: IHelpMenuDataItem[];
    /**
     * labels?: IHelpComponentLabels
     *
     * Translated labels
     */
    labels: IHelpComponentLabels;
    historyStack: IHelpMenuDataItem[][];
    currentMarkdownItem: IHelpMenuDataItem;
    currentMenuItems: IHelpMenuDataItem[];
    loading: boolean;
    constructor(_markdownUrlLoaderService: MarkdownLoaderService);
    clickListener(event: Event): void;
    readonly showGoBackButton: boolean;
    readonly showMenu: boolean;
    readonly showTdMarkdownLoader: boolean;
    readonly showTdMarkdown: boolean;
    readonly url: string;
    readonly httpOptions: object;
    readonly markdownString: string;
    readonly anchor: string;
    readonly showEmptyState: boolean;
    readonly goHomeLabel: string;
    readonly goBackLabel: string;
    readonly emptyStateLabel: string;
    ngOnChanges(changes: SimpleChanges): void;
    reset(): void;
    handleItemSelected(item: IHelpMenuDataItem): void;
    goBack(): void;
    getTitle(item: IHelpMenuDataItem): string;
    handleLinkClick(event: Event): Promise<void>;
}
