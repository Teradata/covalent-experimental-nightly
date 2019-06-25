import { OnChanges, ElementRef, OnDestroy, SimpleChanges } from '@angular/core';
import { IHelpMenuDataItem, IHelpComponentLabels } from './help.utils';
import { MarkdownLoaderService } from '@covalent/markdown';
export declare class HelpComponent implements OnChanges, OnDestroy {
    private _elementRef;
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
    handleLinkClickBound: EventListenerOrEventListenerObject;
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
    constructor(_elementRef: ElementRef, _markdownUrlLoaderService: MarkdownLoaderService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    reset(): void;
    handleItemSelected(item: IHelpMenuDataItem): void;
    goBack(): void;
    getTitle(item: IHelpMenuDataItem): string;
    handleContentReady(): void;
    attachLinkListeners(): void;
    removeLinkListeners(): void;
    handleLinkClick(event: Event): Promise<void>;
}
