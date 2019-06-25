import { CommonModule } from '@angular/common';
import { __awaiter } from 'tslib';
import { removeLeadingHash, isAnchorLink, MarkdownLoaderService } from '@covalent/markdown';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CovalentFlavoredMarkdownModule } from '@covalent/flavored-markdown';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Component, Input, ElementRef, Output, EventEmitter, Inject, NgModule, Injectable, defineInjectable, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule, MatDialog } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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
        const firstLine = markdownString.split(/[\r\n]+/).find((line) => !!line);
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
class HelpComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _markdownUrlLoaderService
     */
    constructor(_elementRef, _markdownUrlLoaderService) {
        this._elementRef = _elementRef;
        this._markdownUrlLoaderService = _markdownUrlLoaderService;
        this.historyStack = []; // history
        // currently rendered
        this.currentMenuItems = []; // current menu items
        // current menu items
        this.loading = false;
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
        return (this.labels && this.labels.goHome) || 'Go home';
    }
    /**
     * @return {?}
     */
    get goBackLabel() {
        return (this.labels && this.labels.goBack) || 'Go back';
    }
    /**
     * @return {?}
     */
    get emptyStateLabel() {
        return (this.labels && this.labels.emptyState) || 'No item(s) to display';
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
    ngOnDestroy() {
        this.removeLinkListeners();
    }
    /**
     * @return {?}
     */
    reset() {
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
     * @return {?}
     */
    handleContentReady() {
        this.removeLinkListeners();
        this.handleLinkClickBound = this.handleLinkClick.bind(this);
        this.attachLinkListeners();
    }
    /**
     * @return {?}
     */
    attachLinkListeners() {
        // TODO: rxjs fromEvent
        Array.from(this._elementRef.nativeElement.querySelectorAll('a[href]'))
            .filter((link) => isMarkdownHref(link))
            .forEach((link) => link.addEventListener('click', this.handleLinkClickBound));
    }
    /**
     * @return {?}
     */
    removeLinkListeners() {
        Array.from(this._elementRef.nativeElement.querySelectorAll('a[href]'))
            .filter((link) => isMarkdownHref(link))
            .forEach((link) => link.removeEventListener('click', this.handleLinkClickBound));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleLinkClick(event) {
        return __awaiter(this, void 0, void 0, function* () {
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
                template: "<ng-container *ngIf=\"!showEmptyState\">\n<button\n  mat-icon-button\n  [matTooltip]=\"goHomeLabel\"\n  (click)=\"reset()\"\n>\n  <mat-icon\n    [attr.aria-label]=\"goHomeLabel\"\n  >\n    home\n  </mat-icon>\n</button>\n\n<button\n  *ngIf=\"showGoBackButton\"\n  mat-icon-button\n  [matTooltip]=\"goBackLabel\"\n  (click)=\"goBack()\"\n>\n  <mat-icon\n    [attr.aria-label]=\"goBackLabel\"\n  >\n    arrow_back\n  </mat-icon>\n</button>\n\n<mat-action-list\n  *ngIf=\"showMenu\"\n>\n  <button\n    *ngFor=\"let item of currentMenuItems\"\n    (click)=\"handleItemSelected(item)\"\n    mat-list-item\n    [matTooltip]=\"getTitle(item)\"\n    matTooltipPosition=\"before\"\n    matTooltipShowDelay=\"500\"\n  >\n    <mat-icon\n      matListIcon\n    >\n      subject\n    </mat-icon>\n    <span class=\"text-truncate\">\n      {{ getTitle(item) }}\n    </span>\n  </button>\n</mat-action-list>\n\n<mat-progress-bar\n  *ngIf=\"loading\"\n  mode=\"indeterminate\"\n  color=\"accent\"\n  class=\"sticky\"\n>\n</mat-progress-bar>\n\n<td-flavored-markdown-loader\n  *ngIf=\"showTdMarkdownLoader\"\n  [url]=\"url\"\n  [httpOptions]=\"httpOptions\"\n  [anchor]=\"anchor\"\n  class=\"pad scroll-md\"\n  (contentReady)=\"handleContentReady()\"\n>\n</td-flavored-markdown-loader>\n\n<td-flavored-markdown\n  *ngIf=\"showTdMarkdown\"\n  [content]=\"markdownString\"\n  [hostedUrl]=\"url\"\n  [anchor]=\"anchor\"\n  class=\"pad scroll-md\"\n  (contentReady)=\"handleContentReady()\"\n>\n</td-flavored-markdown>\n</ng-container>\n\n<div\n  *ngIf=\"showEmptyState\"\n  layout=\"column\"\n  layout-align=\"center center\"\n  class=\"tc-grey-500 mat-typography pad-lg\"\n>\n  <mat-icon matListAvatar class=\"text-super push-bottom\">subject</mat-icon>\n  <h2>{{ emptyStateLabel }}</h2>\n</div>\n",
                styles: [":host{display:block;position:relative;height:inherit}.scroll-md{position:absolute;top:40px;bottom:0;right:0;left:0;overflow-y:auto}.sticky{position:absolute;top:0}"]
            }] }
];
/** @nocollapse */
HelpComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: MarkdownLoaderService }
];
HelpComponent.propDecorators = {
    items: [{ type: Input }],
    labels: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class HelpWindowComponent {
    constructor() {
        this.draggable = false;
        // outputs only for non-draggable toolbar
        this.closed = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get height() {
        return 475;
    }
}
HelpWindowComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-help-window',
                template: "<div\n  *ngIf=\"draggable\"\n\n  cdkDrag\n  cdkDragRootElement=\".cdk-overlay-pane\"\n  cdkDragBoundary=\".cdk-overlay-container\"\n>\n  <td-help-window-toolbar\n    cdkDragHandle\n\n    class=\"td-draggable-help-window-toolbar\"\n\n    [labels]=\"labels\"\n\n    (closed)=\"closed.emit()\"\n  >\n</td-help-window-toolbar>\n\n  <td-help\n    [items]=\"items\"\n    [labels]=\"labels\"\n    [style.height.px]=\"height\"\n  >\n  </td-help>\n</div>\n\n\n<div\n  *ngIf=\"!draggable\"\n>\n  <td-help-window-toolbar\n    [labels]=\"labels\"\n\n    (closed)=\"closed.emit()\"\n  >\n</td-help-window-toolbar>\n\n  <td-help\n    [style.height.px]=\"height\"\n    [items]=\"items\"\n    [labels]=\"labels\"\n  >\n  </td-help>\n</div>\n",
                styles: [":host{display:inline-block}td-help{display:block;width:360px;max-width:100vw;max-height:100vh;overflow-y:auto}.td-draggable-help-window-toolbar{cursor:move}"]
            }] }
];
HelpWindowComponent.propDecorators = {
    items: [{ type: Input }],
    draggable: [{ type: Input }],
    labels: [{ type: Input }],
    closed: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class DraggableHelpWindowDialogComponent {
    /**
     * @param {?} data
     * @param {?} dialogRef
     */
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    /**
     * @return {?}
     */
    handleClosed() {
        this.dialogRef.close();
    }
}
DraggableHelpWindowDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-draggable-help-window-dialog',
                template: "<td-help-window\n  [items]=\"data.items\"\n  [labels]=\"data.labels\"\n  [draggable]=\"true\"\n\n  (closed)=\"handleClosed()\"\n>\n</td-help-window>\n",
                styles: ["::ng-deep.draggable-dialog-wrapper>.mat-dialog-container{padding:0}"]
            }] }
];
/** @nocollapse */
DraggableHelpWindowDialogComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
    { type: MatDialogRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class HelpWindowToolbarComponent {
    constructor() {
        this.closed = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get helpLabel() {
        return (this.labels && this.labels.help) || 'Help';
    }
    /**
     * @return {?}
     */
    get closeLabel() {
        return (this.labels && this.labels.close) || 'Close';
    }
}
HelpWindowToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-help-window-toolbar',
                template: "<mat-toolbar\n  color=\"primary\"\n>\n  <mat-toolbar-row>\n    <div\n      layout=\"row\"\n      layout-align=\"start center\"\n      flex\n    >\n      <span\n        class=\"mat-title push-bottom-none\"\n        flex\n      >\n        {{ helpLabel }}\n      </span>\n      <!-- TODO: Resizing a drag-and-drop element was not working so removed minimize/maximize for now-->\n      <button\n        mat-icon-button\n        matTooltip=\"Close\"\n        (click)=\"closed.emit()\"\n      >\n        <mat-icon\n          [attr.aria-label]=\"closeLabel\"\n        >\n          close\n        </mat-icon>\n      </button>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n",
                styles: [""]
            }] }
];
HelpWindowToolbarComponent.propDecorators = {
    labels: [{ type: Input }],
    closed: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class CovalentHelpModule {
}
CovalentHelpModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    // material
                    MatButtonModule,
                    MatTooltipModule,
                    MatListModule,
                    MatIconModule,
                    MatDialogModule,
                    MatProgressBarModule,
                    DragDropModule,
                    MatToolbarModule,
                    CovalentFlavoredMarkdownModule,
                ],
                declarations: [
                    HelpComponent,
                    HelpWindowComponent,
                    HelpWindowToolbarComponent,
                    DraggableHelpWindowDialogComponent,
                ],
                exports: [
                    HelpComponent,
                    HelpWindowComponent,
                    DraggableHelpWindowDialogComponent,
                ],
                entryComponents: [DraggableHelpWindowDialogComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class DraggableHelpWindowDialogService {
    /**
     * @param {?} _dialog
     * @param {?} overlay
     */
    constructor(_dialog, overlay) {
        this._dialog = _dialog;
        this.scrollStrategy = overlay.scrollStrategies.noop();
    }
    /**
     * @param {?} items
     * @param {?=} config
     * @param {?=} labels
     * @return {?}
     */
    open(items, config, labels) {
        /** @type {?} */
        let draggableDialog = this._dialog.open(DraggableHelpWindowDialogComponent, Object.assign({ hasBackdrop: false, closeOnNavigation: true, panelClass: 'draggable-dialog-wrapper', position: { bottom: '0', right: '0' }, scrollStrategy: this.scrollStrategy }, config));
        draggableDialog.componentInstance.data = { items, labels };
        return draggableDialog;
    }
}
DraggableHelpWindowDialogService.decorators = [
    { type: Injectable, args: [{
                providedIn: CovalentHelpModule,
            },] }
];
/** @nocollapse */
DraggableHelpWindowDialogService.ctorParameters = () => [
    { type: MatDialog },
    { type: Overlay }
];
/** @nocollapse */ DraggableHelpWindowDialogService.ngInjectableDef = defineInjectable({ factory: function DraggableHelpWindowDialogService_Factory() { return new DraggableHelpWindowDialogService(inject(MatDialog), inject(Overlay)); }, token: DraggableHelpWindowDialogService, providedIn: CovalentHelpModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { CovalentHelpModule, HelpComponent, HelpWindowComponent, DraggableHelpWindowDialogComponent, DraggableHelpWindowDialogService, HelpWindowToolbarComponent as ɵa };

//# sourceMappingURL=covalent-experimental-help.js.map