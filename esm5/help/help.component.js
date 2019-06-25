/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ElementRef } from '@angular/core';
import { removeLeadingHash, isAnchorLink, MarkdownLoaderService } from '@covalent/markdown';
/**
 * @param {?} url
 * @return {?}
 */
function getTitleFromUrl(url) {
    if (url) {
        /** @type {?} */
        var temp = new URL(url);
        if (temp.hash) {
            return removeLeadingHash(temp.hash);
        }
        else {
            /** @type {?} */
            var path = temp.pathname.split('/');
            /** @type {?} */
            var fileName = path[path.length - 1];
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
        var firstLine = markdownString.split(/[\r\n]+/).find(function (line) { return !!line; });
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
var HelpComponent = /** @class */ (function () {
    function HelpComponent(_elementRef, _markdownUrlLoaderService) {
        this._elementRef = _elementRef;
        this._markdownUrlLoaderService = _markdownUrlLoaderService;
        this.historyStack = []; // history
        // currently rendered
        this.currentMenuItems = []; // current menu items
        // current menu items
        this.loading = false;
    }
    Object.defineProperty(HelpComponent.prototype, "showGoBackButton", {
        get: /**
         * @return {?}
         */
        function () {
            return this.historyStack.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelpComponent.prototype, "showMenu", {
        get: /**
         * @return {?}
         */
        function () {
            return this.currentMenuItems && this.currentMenuItems.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelpComponent.prototype, "showTdMarkdownLoader", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.currentMarkdownItem && !!this.currentMarkdownItem.url && !this.showTdMarkdown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelpComponent.prototype, "showTdMarkdown", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.currentMarkdownItem && !!this.currentMarkdownItem.markdownString;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelpComponent.prototype, "url", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.currentMarkdownItem) {
                return this.currentMarkdownItem.url;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelpComponent.prototype, "httpOptions", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.currentMarkdownItem) {
                return this.currentMarkdownItem.httpOptions;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelpComponent.prototype, "markdownString", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.currentMarkdownItem) {
                return this.currentMarkdownItem.markdownString;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelpComponent.prototype, "anchor", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.currentMarkdownItem) {
                return this.currentMarkdownItem.anchor;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelpComponent.prototype, "showEmptyState", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.items || this.items.length < 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelpComponent.prototype, "goHomeLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.labels && this.labels.goHome) || 'Go home';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelpComponent.prototype, "goBackLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.labels && this.labels.goBack) || 'Go back';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelpComponent.prototype, "emptyStateLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.labels && this.labels.emptyState) || 'No item(s) to display';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    HelpComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.items) {
            this.reset();
        }
    };
    /**
     * @return {?}
     */
    HelpComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeLinkListeners();
    };
    /**
     * @return {?}
     */
    HelpComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.removeLinkListeners();
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
    };
    /**
     * @param {?} item
     * @return {?}
     */
    HelpComponent.prototype.handleItemSelected = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this.currentMenuItems.length === 0) {
            // clicked on a markdown link within the current markdown file
            this.historyStack = tslib_1.__spread(this.historyStack, [[this.currentMarkdownItem]]);
        }
        else {
            this.historyStack = tslib_1.__spread(this.historyStack, [this.currentMenuItems]);
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
    };
    /**
     * @return {?}
     */
    HelpComponent.prototype.goBack = /**
     * @return {?}
     */
    function () {
        if (this.historyStack.length > 0) {
            /** @type {?} */
            var parent_1 = this.historyStack[this.historyStack.length - 1];
            if (parent_1.length === 1 && (!parent_1[0].children || parent_1[0].children.length === 0)) {
                this.currentMenuItems = [];
                this.currentMarkdownItem = parent_1[0];
            }
            else {
                this.currentMenuItems = parent_1;
                this.currentMarkdownItem = undefined;
            }
            this.historyStack = this.historyStack.slice(0, -1);
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    HelpComponent.prototype.getTitle = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return (item.title ||
            removeLeadingHash(item.anchor) ||
            getTitleFromUrl(item.url) ||
            getTitleFromMarkdownString(item.markdownString));
    };
    /**
     * @return {?}
     */
    HelpComponent.prototype.handleContentReady = /**
     * @return {?}
     */
    function () {
        this.removeLinkListeners();
        this.handleLinkClickBound = this.handleLinkClick.bind(this);
        this.attachLinkListeners();
    };
    /**
     * @return {?}
     */
    HelpComponent.prototype.attachLinkListeners = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // TODO: rxjs fromEvent
        Array.from(this._elementRef.nativeElement.querySelectorAll('a[href]'))
            .filter(function (link) { return isMarkdownHref(link); })
            .forEach(function (link) { return link.addEventListener('click', _this.handleLinkClickBound); });
    };
    /**
     * @return {?}
     */
    HelpComponent.prototype.removeLinkListeners = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Array.from(this._elementRef.nativeElement.querySelectorAll('a[href]'))
            .filter(function (link) { return isMarkdownHref(link); })
            .forEach(function (link) { return link.removeEventListener('click', _this.handleLinkClickBound); });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    HelpComponent.prototype.handleLinkClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var link, url, markdownString, error_1, win;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        link = (/** @type {?} */ (event.target));
                        url = new URL(link.href);
                        this.loading = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, this._markdownUrlLoaderService.load(url.href)];
                    case 2:
                        markdownString = _a.sent();
                        // pass in url to be able to use currentMarkdownItem.url later on
                        this.handleItemSelected({ markdownString: markdownString, url: url.href });
                        return [3 /*break*/, 5];
                    case 3:
                        error_1 = _a.sent();
                        win = window.open(url.href, '_blank');
                        win.focus();
                        return [3 /*break*/, 5];
                    case 4:
                        this.loading = false;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    HelpComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-help',
                    template: "<ng-container *ngIf=\"!showEmptyState\">\n<button\n  mat-icon-button\n  [matTooltip]=\"goHomeLabel\"\n  (click)=\"reset()\"\n>\n  <mat-icon\n    [attr.aria-label]=\"goHomeLabel\"\n  >\n    home\n  </mat-icon>\n</button>\n\n<button\n  *ngIf=\"showGoBackButton\"\n  mat-icon-button\n  [matTooltip]=\"goBackLabel\"\n  (click)=\"goBack()\"\n>\n  <mat-icon\n    [attr.aria-label]=\"goBackLabel\"\n  >\n    arrow_back\n  </mat-icon>\n</button>\n\n<mat-action-list\n  *ngIf=\"showMenu\"\n>\n  <button\n    *ngFor=\"let item of currentMenuItems\"\n    (click)=\"handleItemSelected(item)\"\n    mat-list-item\n    [matTooltip]=\"getTitle(item)\"\n    matTooltipPosition=\"before\"\n    matTooltipShowDelay=\"500\"\n  >\n    <mat-icon\n      matListIcon\n    >\n      subject\n    </mat-icon>\n    <span class=\"text-truncate\">\n      {{ getTitle(item) }}\n    </span>\n  </button>\n</mat-action-list>\n\n<mat-progress-bar\n  *ngIf=\"loading\"\n  mode=\"indeterminate\"\n  color=\"accent\"\n  class=\"sticky\"\n>\n</mat-progress-bar>\n\n<td-flavored-markdown-loader\n  *ngIf=\"showTdMarkdownLoader\"\n  [url]=\"url\"\n  [httpOptions]=\"httpOptions\"\n  [anchor]=\"anchor\"\n  class=\"pad scroll-md\"\n  (contentReady)=\"handleContentReady()\"\n>\n</td-flavored-markdown-loader>\n\n<td-flavored-markdown\n  *ngIf=\"showTdMarkdown\"\n  [content]=\"markdownString\"\n  [hostedUrl]=\"url\"\n  [anchor]=\"anchor\"\n  class=\"pad scroll-md\"\n  (contentReady)=\"handleContentReady()\"\n>\n</td-flavored-markdown>\n</ng-container>\n\n<div\n  *ngIf=\"showEmptyState\"\n  layout=\"column\"\n  layout-align=\"center center\"\n  class=\"tc-grey-500 mat-typography pad-lg\"\n>\n  <mat-icon matListAvatar class=\"text-super push-bottom\">subject</mat-icon>\n  <h2>{{ emptyStateLabel }}</h2>\n</div>\n",
                    styles: [":host{display:block;position:relative;height:inherit}.scroll-md{position:absolute;top:40px;bottom:0;right:0;left:0;overflow-y:auto}.sticky{position:absolute;top:0}"]
                }] }
    ];
    /** @nocollapse */
    HelpComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: MarkdownLoaderService }
    ]; };
    HelpComponent.propDecorators = {
        items: [{ type: Input }],
        labels: [{ type: Input }]
    };
    return HelpComponent;
}());
export { HelpComponent };
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
    /** @type {?} */
    HelpComponent.prototype.handleLinkClickBound;
    /** @type {?} */
    HelpComponent.prototype._elementRef;
    /** @type {?} */
    HelpComponent.prototype._markdownUrlLoaderService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2hlbHAvIiwic291cmNlcyI6WyJoZWxwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLFVBQVUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFFbEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQUU1RixTQUFTLGVBQWUsQ0FBQyxHQUFXO0lBQ2xDLElBQUksR0FBRyxFQUFFOztZQUNELElBQUksR0FBUSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDOUIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsT0FBTyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckM7YUFBTTs7Z0JBQ0MsSUFBSSxHQUFhLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Z0JBQ3pDLFFBQVEsR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDOUMsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWE7U0FDeEQ7S0FDRjtJQUNELE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUM7Ozs7O0FBRUQsU0FBUywwQkFBMEIsQ0FBQyxjQUFzQjtJQUN4RCxJQUFJLGNBQWMsRUFBRTs7WUFDWixTQUFTLEdBQVcsY0FBYyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFZLElBQUssT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sQ0FBQztRQUN4RixPQUFPLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0tB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LEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDOzs7O3dCQUVyRCxHQUFHLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQzt3QkFDbkQsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDOzs7d0JBRVosSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Ozs7OztLQUV4Qjs7Z0JBak1GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsOHZEQUFvQzs7aUJBRXJDOzs7O2dCQWxDcUMsVUFBVTtnQkFFTixxQkFBcUI7Ozt3QkF1QzVELEtBQUs7eUJBT0wsS0FBSzs7SUFnTFIsb0JBQUM7Q0FBQSxBQWxNRCxJQWtNQztTQTdMWSxhQUFhOzs7Ozs7OztJQU14Qiw4QkFBb0M7Ozs7Ozs7SUFPcEMsK0JBQXNDOztJQUV0QyxxQ0FBeUM7O0lBQ3pDLDRDQUF1Qzs7SUFDdkMseUNBQTJDOztJQUUzQyxnQ0FBeUI7O0lBQ3pCLDZDQUF5RDs7SUF5RDdDLG9DQUErQjs7SUFBRSxrREFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUhlbHBNZW51RGF0YUl0ZW0sIElIZWxwQ29tcG9uZW50TGFiZWxzIH0gZnJvbSAnLi9oZWxwLnV0aWxzJztcbmltcG9ydCB7IHJlbW92ZUxlYWRpbmdIYXNoLCBpc0FuY2hvckxpbmssIE1hcmtkb3duTG9hZGVyU2VydmljZSB9IGZyb20gJ0Bjb3ZhbGVudC9tYXJrZG93bic7XG5cbmZ1bmN0aW9uIGdldFRpdGxlRnJvbVVybCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICh1cmwpIHtcbiAgICBjb25zdCB0ZW1wOiBVUkwgPSBuZXcgVVJMKHVybCk7XG4gICAgaWYgKHRlbXAuaGFzaCkge1xuICAgICAgcmV0dXJuIHJlbW92ZUxlYWRpbmdIYXNoKHRlbXAuaGFzaCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBhdGg6IHN0cmluZ1tdID0gdGVtcC5wYXRobmFtZS5zcGxpdCgnLycpO1xuICAgICAgY29uc3QgZmlsZU5hbWU6IHN0cmluZyA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgICAgIHJldHVybiBmaWxlTmFtZS5yZXBsYWNlKC9cXC5bXi8uXSskLywgJycpOyAvLyByZW1vdmUgLm1kXG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGdldFRpdGxlRnJvbU1hcmtkb3duU3RyaW5nKG1hcmtkb3duU3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAobWFya2Rvd25TdHJpbmcpIHtcbiAgICBjb25zdCBmaXJzdExpbmU6IHN0cmluZyA9IG1hcmtkb3duU3RyaW5nLnNwbGl0KC9bXFxyXFxuXSsvKS5maW5kKChsaW5lOiBzdHJpbmcpID0+ICEhbGluZSk7XG4gICAgcmV0dXJuIHJlbW92ZUxlYWRpbmdIYXNoKGZpcnN0TGluZSkudHJpbSgpO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGlzTWFya2Rvd25IcmVmKGFuY2hvcjogSFRNTEFuY2hvckVsZW1lbnQpOiBib29sZWFuIHtcbiAgcmV0dXJuICFpc0FuY2hvckxpbmsoYW5jaG9yKSAmJiBhbmNob3IucGF0aG5hbWUuZW5kc1dpdGgoJy5tZCcpO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1oZWxwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlbHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oZWxwLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEhlbHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBpdGVtczogSUhlbHBNZW51RGF0YUl0ZW1bXVxuICAgKlxuICAgKiBMaXN0IG9mIElIZWxwTWVudURhdGFJdGVtcyB0byBiZSByZW5kZXJlZFxuICAgKi9cbiAgQElucHV0KCkgaXRlbXM6IElIZWxwTWVudURhdGFJdGVtW107XG5cbiAgLyoqXG4gICAqIGxhYmVscz86IElIZWxwQ29tcG9uZW50TGFiZWxzXG4gICAqXG4gICAqIFRyYW5zbGF0ZWQgbGFiZWxzXG4gICAqL1xuICBASW5wdXQoKSBsYWJlbHM6IElIZWxwQ29tcG9uZW50TGFiZWxzO1xuXG4gIGhpc3RvcnlTdGFjazogSUhlbHBNZW51RGF0YUl0ZW1bXVtdID0gW107IC8vIGhpc3RvcnlcbiAgY3VycmVudE1hcmtkb3duSXRlbTogSUhlbHBNZW51RGF0YUl0ZW07IC8vIGN1cnJlbnRseSByZW5kZXJlZFxuICBjdXJyZW50TWVudUl0ZW1zOiBJSGVscE1lbnVEYXRhSXRlbVtdID0gW107IC8vIGN1cnJlbnQgbWVudSBpdGVtc1xuXG4gIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaGFuZGxlTGlua0NsaWNrQm91bmQ6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3Q7XG5cbiAgZ2V0IHNob3dHb0JhY2tCdXR0b24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaGlzdG9yeVN0YWNrLmxlbmd0aCA+IDA7XG4gIH1cblxuICBnZXQgc2hvd01lbnUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudE1lbnVJdGVtcyAmJiB0aGlzLmN1cnJlbnRNZW51SXRlbXMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIGdldCBzaG93VGRNYXJrZG93bkxvYWRlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmN1cnJlbnRNYXJrZG93bkl0ZW0gJiYgISF0aGlzLmN1cnJlbnRNYXJrZG93bkl0ZW0udXJsICYmICF0aGlzLnNob3dUZE1hcmtkb3duO1xuICB9XG5cbiAgZ2V0IHNob3dUZE1hcmtkb3duKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuY3VycmVudE1hcmtkb3duSXRlbSAmJiAhIXRoaXMuY3VycmVudE1hcmtkb3duSXRlbS5tYXJrZG93blN0cmluZztcbiAgfVxuXG4gIGdldCB1cmwoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5jdXJyZW50TWFya2Rvd25JdGVtKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFya2Rvd25JdGVtLnVybDtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBnZXQgaHR0cE9wdGlvbnMoKTogb2JqZWN0IHtcbiAgICBpZiAodGhpcy5jdXJyZW50TWFya2Rvd25JdGVtKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFya2Rvd25JdGVtLmh0dHBPcHRpb25zO1xuICAgIH1cbiAgfVxuICBnZXQgbWFya2Rvd25TdHJpbmcoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5jdXJyZW50TWFya2Rvd25JdGVtKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFya2Rvd25JdGVtLm1hcmtkb3duU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIGdldCBhbmNob3IoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5jdXJyZW50TWFya2Rvd25JdGVtKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFya2Rvd25JdGVtLmFuY2hvcjtcbiAgICB9XG4gIH1cblxuICBnZXQgc2hvd0VtcHR5U3RhdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLml0ZW1zIHx8IHRoaXMuaXRlbXMubGVuZ3RoIDwgMTtcbiAgfVxuXG4gIGdldCBnb0hvbWVMYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAodGhpcy5sYWJlbHMgJiYgdGhpcy5sYWJlbHMuZ29Ib21lKSB8fCAnR28gaG9tZSc7XG4gIH1cblxuICBnZXQgZ29CYWNrTGFiZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKHRoaXMubGFiZWxzICYmIHRoaXMubGFiZWxzLmdvQmFjaykgfHwgJ0dvIGJhY2snO1xuICB9XG5cbiAgZ2V0IGVtcHR5U3RhdGVMYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAodGhpcy5sYWJlbHMgJiYgdGhpcy5sYWJlbHMuZW1wdHlTdGF0ZSkgfHwgJ05vIGl0ZW0ocykgdG8gZGlzcGxheSc7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9tYXJrZG93blVybExvYWRlclNlcnZpY2U6IE1hcmtkb3duTG9hZGVyU2VydmljZSkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuaXRlbXMpIHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZUxpbmtMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZlTGlua0xpc3RlbmVycygpO1xuICAgIC8vIGlmIHNpbmdsZSBpdGVtIGFuZCBubyBjaGlsZHJlblxuICAgIGlmICh0aGlzLml0ZW1zICYmIHRoaXMuaXRlbXMubGVuZ3RoID09PSAxICYmICghdGhpcy5pdGVtc1swXS5jaGlsZHJlbiB8fCB0aGlzLml0ZW1zWzBdLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgIHRoaXMuY3VycmVudE1lbnVJdGVtcyA9IFtdO1xuICAgICAgdGhpcy5jdXJyZW50TWFya2Rvd25JdGVtID0gdGhpcy5pdGVtc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJyZW50TWVudUl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAgIHRoaXMuY3VycmVudE1hcmtkb3duSXRlbSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy5oaXN0b3J5U3RhY2sgPSBbXTtcbiAgfVxuXG4gIGhhbmRsZUl0ZW1TZWxlY3RlZChpdGVtOiBJSGVscE1lbnVEYXRhSXRlbSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmN1cnJlbnRNZW51SXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBjbGlja2VkIG9uIGEgbWFya2Rvd24gbGluayB3aXRoaW4gdGhlIGN1cnJlbnQgbWFya2Rvd24gZmlsZVxuICAgICAgdGhpcy5oaXN0b3J5U3RhY2sgPSBbLi4udGhpcy5oaXN0b3J5U3RhY2ssIFt0aGlzLmN1cnJlbnRNYXJrZG93bkl0ZW1dXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaXN0b3J5U3RhY2sgPSBbLi4udGhpcy5oaXN0b3J5U3RhY2ssIHRoaXMuY3VycmVudE1lbnVJdGVtc107XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgaXRlbS5jaGlsZHJlbiAmJlxuICAgICAgaXRlbS5jaGlsZHJlbi5sZW5ndGggPT09IDEgJiZcbiAgICAgICghaXRlbS5jaGlsZHJlblswXS5jaGlsZHJlbiB8fCBpdGVtLmNoaWxkcmVuWzBdLmNoaWxkcmVuLmxlbmd0aCA9PT0gMClcbiAgICApIHtcbiAgICAgIC8vIGNsaWNrZWQgb24gaXRlbSB3aXRoIG9uZSBjaGlsZCB0aGF0IGhhcyBubyBjaGlsZHJlblxuICAgICAgLy8gZG9uJ3Qgc2hvdyBtZW51XG4gICAgICB0aGlzLmN1cnJlbnRNZW51SXRlbXMgPSBbXTtcbiAgICAgIC8vIHJlbmRlciBtYXJrZG93blxuICAgICAgdGhpcy5jdXJyZW50TWFya2Rvd25JdGVtID0gaXRlbS5jaGlsZHJlblswXTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBoYXMgY2hpbGRyZW4sIGdvIGluc2lkZVxuICAgICAgdGhpcy5jdXJyZW50TWVudUl0ZW1zID0gaXRlbS5jaGlsZHJlbjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZG9uJ3Qgc2hvdyBtZW51XG4gICAgICB0aGlzLmN1cnJlbnRNZW51SXRlbXMgPSBbXTtcbiAgICAgIC8vIHJlbmRlciBtYXJrZG93blxuICAgICAgdGhpcy5jdXJyZW50TWFya2Rvd25JdGVtID0gaXRlbTtcbiAgICB9XG4gIH1cblxuICBnb0JhY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaGlzdG9yeVN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHBhcmVudDogSUhlbHBNZW51RGF0YUl0ZW1bXSA9IHRoaXMuaGlzdG9yeVN0YWNrW3RoaXMuaGlzdG9yeVN0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgaWYgKHBhcmVudC5sZW5ndGggPT09IDEgJiYgKCFwYXJlbnRbMF0uY2hpbGRyZW4gfHwgcGFyZW50WzBdLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TWVudUl0ZW1zID0gW107XG4gICAgICAgIHRoaXMuY3VycmVudE1hcmtkb3duSXRlbSA9IHBhcmVudFswXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3VycmVudE1lbnVJdGVtcyA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5jdXJyZW50TWFya2Rvd25JdGVtID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgdGhpcy5oaXN0b3J5U3RhY2sgPSB0aGlzLmhpc3RvcnlTdGFjay5zbGljZSgwLCAtMSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VGl0bGUoaXRlbTogSUhlbHBNZW51RGF0YUl0ZW0pOiBzdHJpbmcge1xuICAgIHJldHVybiAoXG4gICAgICBpdGVtLnRpdGxlIHx8XG4gICAgICByZW1vdmVMZWFkaW5nSGFzaChpdGVtLmFuY2hvcikgfHxcbiAgICAgIGdldFRpdGxlRnJvbVVybChpdGVtLnVybCkgfHxcbiAgICAgIGdldFRpdGxlRnJvbU1hcmtkb3duU3RyaW5nKGl0ZW0ubWFya2Rvd25TdHJpbmcpXG4gICAgKTtcbiAgfVxuXG4gIGhhbmRsZUNvbnRlbnRSZWFkeSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZUxpbmtMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmhhbmRsZUxpbmtDbGlja0JvdW5kID0gdGhpcy5oYW5kbGVMaW5rQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmF0dGFjaExpbmtMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGF0dGFjaExpbmtMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgLy8gVE9ETzogcnhqcyBmcm9tRXZlbnRcbiAgICBBcnJheS5mcm9tKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZdJykpXG4gICAgICAuZmlsdGVyKChsaW5rOiBIVE1MQW5jaG9yRWxlbWVudCkgPT4gaXNNYXJrZG93bkhyZWYobGluaykpXG4gICAgICAuZm9yRWFjaCgobGluazogSFRNTEVsZW1lbnQpID0+IGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUxpbmtDbGlja0JvdW5kKSk7XG4gIH1cblxuICByZW1vdmVMaW5rTGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIEFycmF5LmZyb20odGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl0nKSlcbiAgICAgIC5maWx0ZXIoKGxpbms6IEhUTUxBbmNob3JFbGVtZW50KSA9PiBpc01hcmtkb3duSHJlZihsaW5rKSlcbiAgICAgIC5mb3JFYWNoKChsaW5rOiBIVE1MRWxlbWVudCkgPT4gbGluay5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlTGlua0NsaWNrQm91bmQpKTtcbiAgfVxuXG4gIGFzeW5jIGhhbmRsZUxpbmtDbGljayhldmVudDogRXZlbnQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGxpbms6IEhUTUxBbmNob3JFbGVtZW50ID0gPEhUTUxBbmNob3JFbGVtZW50PmV2ZW50LnRhcmdldDtcbiAgICBjb25zdCB1cmw6IFVSTCA9IG5ldyBVUkwobGluay5ocmVmKTtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBtYXJrZG93blN0cmluZzogc3RyaW5nID0gYXdhaXQgdGhpcy5fbWFya2Rvd25VcmxMb2FkZXJTZXJ2aWNlLmxvYWQodXJsLmhyZWYpO1xuICAgICAgLy8gcGFzcyBpbiB1cmwgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudE1hcmtkb3duSXRlbS51cmwgbGF0ZXIgb25cbiAgICAgIHRoaXMuaGFuZGxlSXRlbVNlbGVjdGVkKHsgbWFya2Rvd25TdHJpbmcsIHVybDogdXJsLmhyZWYgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnN0IHdpbjogV2luZG93ID0gd2luZG93Lm9wZW4odXJsLmhyZWYsICdfYmxhbmsnKTtcbiAgICAgIHdpbi5mb2N1cygpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==