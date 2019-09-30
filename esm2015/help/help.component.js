/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, HostListener } from '@angular/core';
import { DEFAULT_HELP_COMP_LABELS } from './help.utils';
import { removeLeadingHash, isAnchorLink, MarkdownLoaderService } from '@covalent/markdown';
/**
 * @param {?} url
 * @return {?}
 */
function getTitleFromUrl(url) {
    if (url) {
        /** @type {?} */
        const temp = new URL(url);
        if (temp.hash) {
            return removeLeadingHash(temp.hash);
        }
        else {
            /** @type {?} */
            const path = temp.pathname.split('/');
            /** @type {?} */
            const fileName = path[path.length - 1];
            return fileName.replace(/\.[^/.]+$/, ''); // remove .md
        }
    }
    return undefined;
}
/**
 * @param {?} markdownString
 * @return {?}
 */
function getTitleFromMarkdownString(markdownString) {
    if (markdownString) {
        /** @type {?} */
        const firstLine = markdownString.split(/[\r\n]+/).find((/**
         * @param {?} line
         * @return {?}
         */
        (line) => !!line));
        return removeLeadingHash(firstLine).trim();
    }
    return undefined;
}
/**
 * @param {?} anchor
 * @return {?}
 */
function isMarkdownHref(anchor) {
    return !isAnchorLink(anchor) && anchor.pathname.endsWith('.md');
}
export class HelpComponent {
    /**
     * @param {?} _markdownUrlLoaderService
     */
    constructor(_markdownUrlLoaderService) {
        this._markdownUrlLoaderService = _markdownUrlLoaderService;
        this.historyStack = []; // history
        // currently rendered
        this.currentMenuItems = []; // current menu items
        // current menu items
        this.loading = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    clickListener(event) {
        /** @type {?} */
        const element = (/** @type {?} */ (event.srcElement));
        if (element.matches('a[href]') && isMarkdownHref((/** @type {?} */ (element)))) {
            this.handleLinkClick(event);
        }
    }
    /**
     * @return {?}
     */
    get showGoBackButton() {
        return this.historyStack.length > 0;
    }
    /**
     * @return {?}
     */
    get showMenu() {
        return this.currentMenuItems && this.currentMenuItems.length > 0;
    }
    /**
     * @return {?}
     */
    get showTdMarkdownLoader() {
        return !!this.currentMarkdownItem && !!this.currentMarkdownItem.url && !this.showTdMarkdown;
    }
    /**
     * @return {?}
     */
    get showTdMarkdown() {
        return !!this.currentMarkdownItem && !!this.currentMarkdownItem.markdownString;
    }
    /**
     * @return {?}
     */
    get url() {
        if (this.currentMarkdownItem) {
            return this.currentMarkdownItem.url;
        }
        return undefined;
    }
    /**
     * @return {?}
     */
    get httpOptions() {
        if (this.currentMarkdownItem) {
            return this.currentMarkdownItem.httpOptions;
        }
    }
    /**
     * @return {?}
     */
    get markdownString() {
        if (this.currentMarkdownItem) {
            return this.currentMarkdownItem.markdownString;
        }
    }
    /**
     * @return {?}
     */
    get anchor() {
        if (this.currentMarkdownItem) {
            return this.currentMarkdownItem.anchor;
        }
    }
    /**
     * @return {?}
     */
    get showEmptyState() {
        return !this.items || this.items.length < 1;
    }
    /**
     * @return {?}
     */
    get goHomeLabel() {
        return (this.labels && this.labels.goHome) || DEFAULT_HELP_COMP_LABELS.goHome;
    }
    /**
     * @return {?}
     */
    get goBackLabel() {
        return (this.labels && this.labels.goBack) || DEFAULT_HELP_COMP_LABELS.goBack;
    }
    /**
     * @return {?}
     */
    get emptyStateLabel() {
        return (this.labels && this.labels.emptyState) || DEFAULT_HELP_COMP_LABELS.emptyState;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.items) {
            this.reset();
        }
    }
    /**
     * @return {?}
     */
    reset() {
        // if single item and no children
        if (this.items && this.items.length === 1 && (!this.items[0].children || this.items[0].children.length === 0)) {
            this.currentMenuItems = [];
            this.currentMarkdownItem = this.items[0];
        }
        else {
            this.currentMenuItems = this.items;
            this.currentMarkdownItem = undefined;
        }
        this.historyStack = [];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    handleItemSelected(item) {
        if (this.currentMenuItems.length === 0) {
            // clicked on a markdown link within the current markdown file
            this.historyStack = [...this.historyStack, [this.currentMarkdownItem]];
        }
        else {
            this.historyStack = [...this.historyStack, this.currentMenuItems];
        }
        if (item.children &&
            item.children.length === 1 &&
            (!item.children[0].children || item.children[0].children.length === 0)) {
            // clicked on item with one child that has no children
            // don't show menu
            this.currentMenuItems = [];
            // render markdown
            this.currentMarkdownItem = item.children[0];
        }
        else if (item.children && item.children.length > 0) {
            // has children, go inside
            this.currentMenuItems = item.children;
        }
        else {
            // don't show menu
            this.currentMenuItems = [];
            // render markdown
            this.currentMarkdownItem = item;
        }
    }
    /**
     * @return {?}
     */
    goBack() {
        if (this.historyStack.length > 0) {
            /** @type {?} */
            const parent = this.historyStack[this.historyStack.length - 1];
            if (parent.length === 1 && (!parent[0].children || parent[0].children.length === 0)) {
                this.currentMenuItems = [];
                this.currentMarkdownItem = parent[0];
            }
            else {
                this.currentMenuItems = parent;
                this.currentMarkdownItem = undefined;
            }
            this.historyStack = this.historyStack.slice(0, -1);
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    getTitle(item) {
        return (item.title ||
            removeLeadingHash(item.anchor) ||
            getTitleFromUrl(item.url) ||
            getTitleFromMarkdownString(item.markdownString));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleLinkClick(event) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            /** @type {?} */
            const link = (/** @type {?} */ (event.target));
            /** @type {?} */
            const url = new URL(link.href);
            this.loading = true;
            try {
                /** @type {?} */
                const markdownString = yield this._markdownUrlLoaderService.load(url.href);
                // pass in url to be able to use currentMarkdownItem.url later on
                this.handleItemSelected({ markdownString, url: url.href });
            }
            catch (error) {
                /** @type {?} */
                const win = window.open(url.href, '_blank');
                win.focus();
            }
            finally {
                this.loading = false;
            }
        });
    }
}
HelpComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-help',
                template: "<ng-container *ngIf=\"!showEmptyState\">\n  <button mat-icon-button [matTooltip]=\"goHomeLabel\" (click)=\"reset()\">\n    <mat-icon [attr.aria-label]=\"goHomeLabel\">\n      home\n    </mat-icon>\n  </button>\n\n  <button *ngIf=\"showGoBackButton\" mat-icon-button [matTooltip]=\"goBackLabel\" (click)=\"goBack()\">\n    <mat-icon [attr.aria-label]=\"goBackLabel\">\n      arrow_back\n    </mat-icon>\n  </button>\n\n  <mat-action-list *ngIf=\"showMenu\">\n    <button\n      *ngFor=\"let item of currentMenuItems\"\n      (click)=\"handleItemSelected(item)\"\n      mat-list-item\n      [matTooltip]=\"getTitle(item)\"\n      matTooltipPosition=\"before\"\n      matTooltipShowDelay=\"500\"\n    >\n      <mat-icon matListIcon>\n        subject\n      </mat-icon>\n      <span class=\"text-truncate\">\n        {{ getTitle(item) }}\n      </span>\n    </button>\n  </mat-action-list>\n\n  <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\" color=\"accent\" class=\"sticky\"> </mat-progress-bar>\n\n  <td-flavored-markdown-loader\n    *ngIf=\"showTdMarkdownLoader\"\n    [url]=\"url\"\n    [httpOptions]=\"httpOptions\"\n    [anchor]=\"anchor\"\n    class=\"pad scroll-md\"\n  >\n  </td-flavored-markdown-loader>\n\n  <td-flavored-markdown\n    *ngIf=\"showTdMarkdown\"\n    [content]=\"markdownString\"\n    [hostedUrl]=\"url\"\n    [anchor]=\"anchor\"\n    class=\"pad scroll-md\"\n  >\n  </td-flavored-markdown>\n</ng-container>\n\n<div *ngIf=\"showEmptyState\" layout=\"column\" layout-align=\"center center\" class=\"tc-grey-500 mat-typography pad-lg\">\n  <mat-icon matListAvatar class=\"text-super push-bottom\">subject</mat-icon>\n  <h2>{{ emptyStateLabel }}</h2>\n</div>\n",
                styles: [":host{display:block;position:relative;height:inherit}.scroll-md{position:absolute;top:40px;bottom:0;right:0;left:0;overflow-y:auto}.sticky{position:absolute;top:0}"]
            }] }
];
/** @nocollapse */
HelpComponent.ctorParameters = () => [
    { type: MarkdownLoaderService }
];
HelpComponent.propDecorators = {
    items: [{ type: Input }],
    labels: [{ type: Input }],
    clickListener: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /**
     * items: IHelpMenuDataItem[]
     *
     * List of IHelpMenuDataItems to be rendered
     * @type {?}
     */
    HelpComponent.prototype.items;
    /**
     * labels?: IHelpComponentLabels
     *
     * Translated labels
     * @type {?}
     */
    HelpComponent.prototype.labels;
    /** @type {?} */
    HelpComponent.prototype.historyStack;
    /** @type {?} */
    HelpComponent.prototype.currentMarkdownItem;
    /** @type {?} */
    HelpComponent.prototype.currentMenuItems;
    /** @type {?} */
    HelpComponent.prototype.loading;
    /**
     * @type {?}
     * @private
     */
    HelpComponent.prototype._markdownUrlLoaderService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2hlbHAvIiwic291cmNlcyI6WyJoZWxwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekYsT0FBTyxFQUEyQyx3QkFBd0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNqRyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBRTVGLFNBQVMsZUFBZSxDQUFDLEdBQVc7SUFDbEMsSUFBSSxHQUFHLEVBQUU7O2NBQ0QsSUFBSSxHQUFRLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUM5QixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyQzthQUFNOztrQkFDQyxJQUFJLEdBQWEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztrQkFDekMsUUFBUSxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUM5QyxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYTtTQUN4RDtLQUNGO0lBQ0QsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQzs7Ozs7QUFFRCxTQUFTLDBCQUEwQixDQUFDLGNBQXNCO0lBQ3hELElBQUksY0FBYyxFQUFFOztjQUNaLFNBQVMsR0FBVyxjQUFjLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLElBQVksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBQztRQUN4RixPQUFPLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQzVDO0lBQ0QsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQzs7Ozs7QUFFRCxTQUFTLGNBQWMsQ0FBQyxNQUF5QjtJQUMvQyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xFLENBQUM7QUFPRCxNQUFNLE9BQU8sYUFBYTs7OztJQXFCeEIsWUFBb0IseUJBQWdEO1FBQWhELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBdUI7UUFOcEUsaUJBQVksR0FBMEIsRUFBRSxDQUFDLENBQUMsVUFBVTs7UUFFcEQscUJBQWdCLEdBQXdCLEVBQUUsQ0FBQyxDQUFDLHFCQUFxQjs7UUFFakUsWUFBTyxHQUFZLEtBQUssQ0FBQztJQUU4QyxDQUFDOzs7OztJQUd4RSxhQUFhLENBQUMsS0FBWTs7Y0FDbEIsT0FBTyxHQUFnQixtQkFBYSxLQUFLLENBQUMsVUFBVSxFQUFBO1FBQzFELElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxjQUFjLENBQUMsbUJBQW1CLE9BQU8sRUFBQSxDQUFDLEVBQUU7WUFDNUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7Ozs7SUFFRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7OztJQUVELElBQUksb0JBQW9CO1FBQ3RCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDOUYsQ0FBQzs7OztJQUVELElBQUksY0FBYztRQUNoQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUM7SUFDakYsQ0FBQzs7OztJQUVELElBQUksR0FBRztRQUNMLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzVCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQztTQUNyQztRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFDRCxJQUFJLFdBQVc7UUFDYixJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUM7U0FDN0M7SUFDSCxDQUFDOzs7O0lBQ0QsSUFBSSxjQUFjO1FBQ2hCLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzVCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQztTQUNoRDtJQUNILENBQUM7Ozs7SUFFRCxJQUFJLE1BQU07UUFDUixJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUM7U0FDeEM7SUFDSCxDQUFDOzs7O0lBRUQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSx3QkFBd0IsQ0FBQyxNQUFNLENBQUM7SUFDaEYsQ0FBQzs7OztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksd0JBQXdCLENBQUMsTUFBTSxDQUFDO0lBQ2hGLENBQUM7Ozs7SUFFRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSx3QkFBd0IsQ0FBQyxVQUFVLENBQUM7SUFDeEYsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7OztJQUVELEtBQUs7UUFDSCxpQ0FBaUM7UUFDakMsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzdHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUM7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ25DLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUM7U0FDdEM7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLElBQXVCO1FBQ3hDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdEMsOERBQThEO1lBQzlELElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1NBQ3hFO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ25FO1FBRUQsSUFDRSxJQUFJLENBQUMsUUFBUTtZQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUM7WUFDMUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsRUFDdEU7WUFDQSxzREFBc0Q7WUFDdEQsa0JBQWtCO1lBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7WUFDM0Isa0JBQWtCO1lBQ2xCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdDO2FBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNwRCwwQkFBMEI7WUFDMUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdkM7YUFBTTtZQUNMLGtCQUFrQjtZQUNsQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1lBQzNCLGtCQUFrQjtZQUNsQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7OztJQUVELE1BQU07UUFDSixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7a0JBQzFCLE1BQU0sR0FBd0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDbkYsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDbkYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN0QztpQkFBTTtnQkFDTCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO2dCQUMvQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxDQUFDO2FBQ3RDO1lBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRDtJQUNILENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLElBQXVCO1FBQzlCLE9BQU8sQ0FDTCxJQUFJLENBQUMsS0FBSztZQUNWLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDOUIsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDekIsMEJBQTBCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUNoRCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFSyxlQUFlLENBQUMsS0FBWTs7WUFDaEMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDOztrQkFDakIsSUFBSSxHQUFzQixtQkFBbUIsS0FBSyxDQUFDLE1BQU0sRUFBQTs7a0JBQ3pELEdBQUcsR0FBUSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUk7O3NCQUNJLGNBQWMsR0FBVyxNQUFNLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDbEYsaUVBQWlFO2dCQUNqRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQzVEO1lBQUMsT0FBTyxLQUFLLEVBQUU7O3NCQUNSLEdBQUcsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDO2dCQUNuRCxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDYjtvQkFBUztnQkFDUixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUN0QjtRQUNILENBQUM7S0FBQTs7O1lBaExGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsc3FEQUFvQzs7YUFFckM7Ozs7WUFoQ3lDLHFCQUFxQjs7O29CQXVDNUQsS0FBSztxQkFPTCxLQUFLOzRCQVVMLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7OztJQWpCakMsOEJBQW9DOzs7Ozs7O0lBT3BDLCtCQUFzQzs7SUFFdEMscUNBQXlDOztJQUN6Qyw0Q0FBdUM7O0lBQ3ZDLHlDQUEyQzs7SUFFM0MsZ0NBQXlCOzs7OztJQUViLGtEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJSGVscE1lbnVEYXRhSXRlbSwgSUhlbHBDb21wb25lbnRMYWJlbHMsIERFRkFVTFRfSEVMUF9DT01QX0xBQkVMUyB9IGZyb20gJy4vaGVscC51dGlscyc7XG5pbXBvcnQgeyByZW1vdmVMZWFkaW5nSGFzaCwgaXNBbmNob3JMaW5rLCBNYXJrZG93bkxvYWRlclNlcnZpY2UgfSBmcm9tICdAY292YWxlbnQvbWFya2Rvd24nO1xuXG5mdW5jdGlvbiBnZXRUaXRsZUZyb21VcmwodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAodXJsKSB7XG4gICAgY29uc3QgdGVtcDogVVJMID0gbmV3IFVSTCh1cmwpO1xuICAgIGlmICh0ZW1wLmhhc2gpIHtcbiAgICAgIHJldHVybiByZW1vdmVMZWFkaW5nSGFzaCh0ZW1wLmhhc2gpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwYXRoOiBzdHJpbmdbXSA9IHRlbXAucGF0aG5hbWUuc3BsaXQoJy8nKTtcbiAgICAgIGNvbnN0IGZpbGVOYW1lOiBzdHJpbmcgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG4gICAgICByZXR1cm4gZmlsZU5hbWUucmVwbGFjZSgvXFwuW14vLl0rJC8sICcnKTsgLy8gcmVtb3ZlIC5tZFxuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBnZXRUaXRsZUZyb21NYXJrZG93blN0cmluZyhtYXJrZG93blN0cmluZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKG1hcmtkb3duU3RyaW5nKSB7XG4gICAgY29uc3QgZmlyc3RMaW5lOiBzdHJpbmcgPSBtYXJrZG93blN0cmluZy5zcGxpdCgvW1xcclxcbl0rLykuZmluZCgobGluZTogc3RyaW5nKSA9PiAhIWxpbmUpO1xuICAgIHJldHVybiByZW1vdmVMZWFkaW5nSGFzaChmaXJzdExpbmUpLnRyaW0oKTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBpc01hcmtkb3duSHJlZihhbmNob3I6IEhUTUxBbmNob3JFbGVtZW50KTogYm9vbGVhbiB7XG4gIHJldHVybiAhaXNBbmNob3JMaW5rKGFuY2hvcikgJiYgYW5jaG9yLnBhdGhuYW1lLmVuZHNXaXRoKCcubWQnKTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtaGVscCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWxwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGVscC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBIZWxwQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgLyoqXG4gICAqIGl0ZW1zOiBJSGVscE1lbnVEYXRhSXRlbVtdXG4gICAqXG4gICAqIExpc3Qgb2YgSUhlbHBNZW51RGF0YUl0ZW1zIHRvIGJlIHJlbmRlcmVkXG4gICAqL1xuICBASW5wdXQoKSBpdGVtczogSUhlbHBNZW51RGF0YUl0ZW1bXTtcblxuICAvKipcbiAgICogbGFiZWxzPzogSUhlbHBDb21wb25lbnRMYWJlbHNcbiAgICpcbiAgICogVHJhbnNsYXRlZCBsYWJlbHNcbiAgICovXG4gIEBJbnB1dCgpIGxhYmVsczogSUhlbHBDb21wb25lbnRMYWJlbHM7XG5cbiAgaGlzdG9yeVN0YWNrOiBJSGVscE1lbnVEYXRhSXRlbVtdW10gPSBbXTsgLy8gaGlzdG9yeVxuICBjdXJyZW50TWFya2Rvd25JdGVtOiBJSGVscE1lbnVEYXRhSXRlbTsgLy8gY3VycmVudGx5IHJlbmRlcmVkXG4gIGN1cnJlbnRNZW51SXRlbXM6IElIZWxwTWVudURhdGFJdGVtW10gPSBbXTsgLy8gY3VycmVudCBtZW51IGl0ZW1zXG5cbiAgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX21hcmtkb3duVXJsTG9hZGVyU2VydmljZTogTWFya2Rvd25Mb2FkZXJTZXJ2aWNlKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgY2xpY2tMaXN0ZW5lcihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD5ldmVudC5zcmNFbGVtZW50O1xuICAgIGlmIChlbGVtZW50Lm1hdGNoZXMoJ2FbaHJlZl0nKSAmJiBpc01hcmtkb3duSHJlZig8SFRNTEFuY2hvckVsZW1lbnQ+ZWxlbWVudCkpIHtcbiAgICAgIHRoaXMuaGFuZGxlTGlua0NsaWNrKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBnZXQgc2hvd0dvQmFja0J1dHRvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5oaXN0b3J5U3RhY2subGVuZ3RoID4gMDtcbiAgfVxuXG4gIGdldCBzaG93TWVudSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50TWVudUl0ZW1zICYmIHRoaXMuY3VycmVudE1lbnVJdGVtcy5sZW5ndGggPiAwO1xuICB9XG5cbiAgZ2V0IHNob3dUZE1hcmtkb3duTG9hZGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuY3VycmVudE1hcmtkb3duSXRlbSAmJiAhIXRoaXMuY3VycmVudE1hcmtkb3duSXRlbS51cmwgJiYgIXRoaXMuc2hvd1RkTWFya2Rvd247XG4gIH1cblxuICBnZXQgc2hvd1RkTWFya2Rvd24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5jdXJyZW50TWFya2Rvd25JdGVtICYmICEhdGhpcy5jdXJyZW50TWFya2Rvd25JdGVtLm1hcmtkb3duU3RyaW5nO1xuICB9XG5cbiAgZ2V0IHVybCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmN1cnJlbnRNYXJrZG93bkl0ZW0pIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXJrZG93bkl0ZW0udXJsO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGdldCBodHRwT3B0aW9ucygpOiBvYmplY3Qge1xuICAgIGlmICh0aGlzLmN1cnJlbnRNYXJrZG93bkl0ZW0pIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXJrZG93bkl0ZW0uaHR0cE9wdGlvbnM7XG4gICAgfVxuICB9XG4gIGdldCBtYXJrZG93blN0cmluZygpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmN1cnJlbnRNYXJrZG93bkl0ZW0pIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXJrZG93bkl0ZW0ubWFya2Rvd25TdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGFuY2hvcigpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmN1cnJlbnRNYXJrZG93bkl0ZW0pIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXJrZG93bkl0ZW0uYW5jaG9yO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzaG93RW1wdHlTdGF0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuaXRlbXMgfHwgdGhpcy5pdGVtcy5sZW5ndGggPCAxO1xuICB9XG5cbiAgZ2V0IGdvSG9tZUxhYmVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICh0aGlzLmxhYmVscyAmJiB0aGlzLmxhYmVscy5nb0hvbWUpIHx8IERFRkFVTFRfSEVMUF9DT01QX0xBQkVMUy5nb0hvbWU7XG4gIH1cblxuICBnZXQgZ29CYWNrTGFiZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKHRoaXMubGFiZWxzICYmIHRoaXMubGFiZWxzLmdvQmFjaykgfHwgREVGQVVMVF9IRUxQX0NPTVBfTEFCRUxTLmdvQmFjaztcbiAgfVxuXG4gIGdldCBlbXB0eVN0YXRlTGFiZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKHRoaXMubGFiZWxzICYmIHRoaXMubGFiZWxzLmVtcHR5U3RhdGUpIHx8IERFRkFVTFRfSEVMUF9DT01QX0xBQkVMUy5lbXB0eVN0YXRlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLml0ZW1zKSB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgLy8gaWYgc2luZ2xlIGl0ZW0gYW5kIG5vIGNoaWxkcmVuXG4gICAgaWYgKHRoaXMuaXRlbXMgJiYgdGhpcy5pdGVtcy5sZW5ndGggPT09IDEgJiYgKCF0aGlzLml0ZW1zWzBdLmNoaWxkcmVuIHx8IHRoaXMuaXRlbXNbMF0uY2hpbGRyZW4ubGVuZ3RoID09PSAwKSkge1xuICAgICAgdGhpcy5jdXJyZW50TWVudUl0ZW1zID0gW107XG4gICAgICB0aGlzLmN1cnJlbnRNYXJrZG93bkl0ZW0gPSB0aGlzLml0ZW1zWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRNZW51SXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgICAgdGhpcy5jdXJyZW50TWFya2Rvd25JdGVtID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB0aGlzLmhpc3RvcnlTdGFjayA9IFtdO1xuICB9XG5cbiAgaGFuZGxlSXRlbVNlbGVjdGVkKGl0ZW06IElIZWxwTWVudURhdGFJdGVtKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY3VycmVudE1lbnVJdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIGNsaWNrZWQgb24gYSBtYXJrZG93biBsaW5rIHdpdGhpbiB0aGUgY3VycmVudCBtYXJrZG93biBmaWxlXG4gICAgICB0aGlzLmhpc3RvcnlTdGFjayA9IFsuLi50aGlzLmhpc3RvcnlTdGFjaywgW3RoaXMuY3VycmVudE1hcmtkb3duSXRlbV1dO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpc3RvcnlTdGFjayA9IFsuLi50aGlzLmhpc3RvcnlTdGFjaywgdGhpcy5jdXJyZW50TWVudUl0ZW1zXTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBpdGVtLmNoaWxkcmVuICYmXG4gICAgICBpdGVtLmNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJlxuICAgICAgKCFpdGVtLmNoaWxkcmVuWzBdLmNoaWxkcmVuIHx8IGl0ZW0uY2hpbGRyZW5bMF0uY2hpbGRyZW4ubGVuZ3RoID09PSAwKVxuICAgICkge1xuICAgICAgLy8gY2xpY2tlZCBvbiBpdGVtIHdpdGggb25lIGNoaWxkIHRoYXQgaGFzIG5vIGNoaWxkcmVuXG4gICAgICAvLyBkb24ndCBzaG93IG1lbnVcbiAgICAgIHRoaXMuY3VycmVudE1lbnVJdGVtcyA9IFtdO1xuICAgICAgLy8gcmVuZGVyIG1hcmtkb3duXG4gICAgICB0aGlzLmN1cnJlbnRNYXJrZG93bkl0ZW0gPSBpdGVtLmNoaWxkcmVuWzBdO1xuICAgIH0gZWxzZSBpZiAoaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIGhhcyBjaGlsZHJlbiwgZ28gaW5zaWRlXG4gICAgICB0aGlzLmN1cnJlbnRNZW51SXRlbXMgPSBpdGVtLmNoaWxkcmVuO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBkb24ndCBzaG93IG1lbnVcbiAgICAgIHRoaXMuY3VycmVudE1lbnVJdGVtcyA9IFtdO1xuICAgICAgLy8gcmVuZGVyIG1hcmtkb3duXG4gICAgICB0aGlzLmN1cnJlbnRNYXJrZG93bkl0ZW0gPSBpdGVtO1xuICAgIH1cbiAgfVxuXG4gIGdvQmFjaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5oaXN0b3J5U3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcGFyZW50OiBJSGVscE1lbnVEYXRhSXRlbVtdID0gdGhpcy5oaXN0b3J5U3RhY2tbdGhpcy5oaXN0b3J5U3RhY2subGVuZ3RoIC0gMV07XG4gICAgICBpZiAocGFyZW50Lmxlbmd0aCA9PT0gMSAmJiAoIXBhcmVudFswXS5jaGlsZHJlbiB8fCBwYXJlbnRbMF0uY2hpbGRyZW4ubGVuZ3RoID09PSAwKSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRNZW51SXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5jdXJyZW50TWFya2Rvd25JdGVtID0gcGFyZW50WzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TWVudUl0ZW1zID0gcGFyZW50O1xuICAgICAgICB0aGlzLmN1cnJlbnRNYXJrZG93bkl0ZW0gPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB0aGlzLmhpc3RvcnlTdGFjayA9IHRoaXMuaGlzdG9yeVN0YWNrLnNsaWNlKDAsIC0xKTtcbiAgICB9XG4gIH1cblxuICBnZXRUaXRsZShpdGVtOiBJSGVscE1lbnVEYXRhSXRlbSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgIGl0ZW0udGl0bGUgfHxcbiAgICAgIHJlbW92ZUxlYWRpbmdIYXNoKGl0ZW0uYW5jaG9yKSB8fFxuICAgICAgZ2V0VGl0bGVGcm9tVXJsKGl0ZW0udXJsKSB8fFxuICAgICAgZ2V0VGl0bGVGcm9tTWFya2Rvd25TdHJpbmcoaXRlbS5tYXJrZG93blN0cmluZylcbiAgICApO1xuICB9XG5cbiAgYXN5bmMgaGFuZGxlTGlua0NsaWNrKGV2ZW50OiBFdmVudCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbGluazogSFRNTEFuY2hvckVsZW1lbnQgPSA8SFRNTEFuY2hvckVsZW1lbnQ+ZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IHVybDogVVJMID0gbmV3IFVSTChsaW5rLmhyZWYpO1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG1hcmtkb3duU3RyaW5nOiBzdHJpbmcgPSBhd2FpdCB0aGlzLl9tYXJrZG93blVybExvYWRlclNlcnZpY2UubG9hZCh1cmwuaHJlZik7XG4gICAgICAvLyBwYXNzIGluIHVybCB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50TWFya2Rvd25JdGVtLnVybCBsYXRlciBvblxuICAgICAgdGhpcy5oYW5kbGVJdGVtU2VsZWN0ZWQoeyBtYXJrZG93blN0cmluZywgdXJsOiB1cmwuaHJlZiB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc3Qgd2luOiBXaW5kb3cgPSB3aW5kb3cub3Blbih1cmwuaHJlZiwgJ19ibGFuaycpO1xuICAgICAgd2luLmZvY3VzKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIl19