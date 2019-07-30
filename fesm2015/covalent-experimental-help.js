import { Component, ElementRef, Input, EventEmitter, Output, Inject, NgModule, Injectable, ɵɵdefineInjectable, ɵɵinject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __awaiter } from 'tslib';
import { removeLeadingHash, isAnchorLink, MarkdownLoaderService } from '@covalent/markdown';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CovalentFlavoredMarkdownModule } from '@covalent/flavored-markdown';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Overlay } from '@angular/cdk/overlay';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            .filter((/**
         * @param {?} link
         * @return {?}
         */
        (link) => isMarkdownHref(link)))
            .forEach((/**
         * @param {?} link
         * @return {?}
         */
        (link) => link.addEventListener('click', this.handleLinkClickBound)));
    }
    /**
     * @return {?}
     */
    removeLinkListeners() {
        Array.from(this._elementRef.nativeElement.querySelectorAll('a[href]'))
            .filter((/**
         * @param {?} link
         * @return {?}
         */
        (link) => isMarkdownHref(link)))
            .forEach((/**
         * @param {?} link
         * @return {?}
         */
        (link) => link.removeEventListener('click', this.handleLinkClickBound)));
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
                template: "<ng-container *ngIf=\"!showEmptyState\">\n  <button mat-icon-button [matTooltip]=\"goHomeLabel\" (click)=\"reset()\">\n    <mat-icon [attr.aria-label]=\"goHomeLabel\">\n      home\n    </mat-icon>\n  </button>\n\n  <button *ngIf=\"showGoBackButton\" mat-icon-button [matTooltip]=\"goBackLabel\" (click)=\"goBack()\">\n    <mat-icon [attr.aria-label]=\"goBackLabel\">\n      arrow_back\n    </mat-icon>\n  </button>\n\n  <mat-action-list *ngIf=\"showMenu\">\n    <button\n      *ngFor=\"let item of currentMenuItems\"\n      (click)=\"handleItemSelected(item)\"\n      mat-list-item\n      [matTooltip]=\"getTitle(item)\"\n      matTooltipPosition=\"before\"\n      matTooltipShowDelay=\"500\"\n    >\n      <mat-icon matListIcon>\n        subject\n      </mat-icon>\n      <span class=\"text-truncate\">\n        {{ getTitle(item) }}\n      </span>\n    </button>\n  </mat-action-list>\n\n  <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\" color=\"accent\" class=\"sticky\"> </mat-progress-bar>\n\n  <td-flavored-markdown-loader\n    *ngIf=\"showTdMarkdownLoader\"\n    [url]=\"url\"\n    [httpOptions]=\"httpOptions\"\n    [anchor]=\"anchor\"\n    class=\"pad scroll-md\"\n    (contentReady)=\"handleContentReady()\"\n  >\n  </td-flavored-markdown-loader>\n\n  <td-flavored-markdown\n    *ngIf=\"showTdMarkdown\"\n    [content]=\"markdownString\"\n    [hostedUrl]=\"url\"\n    [anchor]=\"anchor\"\n    class=\"pad scroll-md\"\n    (contentReady)=\"handleContentReady()\"\n  >\n  </td-flavored-markdown>\n</ng-container>\n\n<div *ngIf=\"showEmptyState\" layout=\"column\" layout-align=\"center center\" class=\"tc-grey-500 mat-typography pad-lg\">\n  <mat-icon matListAvatar class=\"text-super push-bottom\">subject</mat-icon>\n  <h2>{{ emptyStateLabel }}</h2>\n</div>\n",
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HelpWindowComponent {
    constructor() {
        this.draggable = false;
        this.toolbarColor = 'primary';
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
                template: "<div *ngIf=\"draggable\" cdkDrag cdkDragRootElement=\".cdk-overlay-pane\" cdkDragBoundary=\".cdk-overlay-container\">\n  <td-help-window-toolbar\n    cdkDragHandle\n    class=\"td-draggable-help-window-toolbar\"\n    [labels]=\"labels\"\n    [toolbarColor]=\"toolbarColor\"\n    (closed)=\"closed.emit()\"\n  >\n  </td-help-window-toolbar>\n\n  <td-help [items]=\"items\" [labels]=\"labels\" [style.height.px]=\"height\"> </td-help>\n</div>\n\n<div *ngIf=\"!draggable\">\n  <td-help-window-toolbar [labels]=\"labels\" [toolbarColor]=\"toolbarColor\" (closed)=\"closed.emit()\">\n  </td-help-window-toolbar>\n\n  <td-help [style.height.px]=\"height\" [items]=\"items\" [labels]=\"labels\"> </td-help>\n</div>\n",
                styles: [":host{display:inline-block}td-help{display:block;width:360px;max-width:100vw;max-height:100vh;overflow-y:auto}.td-draggable-help-window-toolbar{cursor:move}"]
            }] }
];
HelpWindowComponent.propDecorators = {
    items: [{ type: Input }],
    draggable: [{ type: Input }],
    labels: [{ type: Input }],
    toolbarColor: [{ type: Input }],
    closed: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                template: "<td-help-window\n  [items]=\"data.items\"\n  [labels]=\"data.labels\"\n  [draggable]=\"true\"\n  [toolbarColor]=\"data.toolbarColor\"\n  (closed)=\"handleClosed()\"\n>\n</td-help-window>\n",
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HelpWindowToolbarComponent {
    constructor() {
        this.toolbarColor = 'primary';
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
                template: "<mat-toolbar [color]=\"toolbarColor\">\n  <mat-toolbar-row>\n    <div layout=\"row\" layout-align=\"start center\" flex>\n      <span class=\"mat-title push-bottom-none\" flex>\n        {{ helpLabel }}\n      </span>\n      <!-- TODO: Resizing a drag-and-drop element was not working so removed minimize/maximize for now-->\n      <button mat-icon-button matTooltip=\"Close\" (click)=\"closed.emit()\">\n        <mat-icon [attr.aria-label]=\"closeLabel\">\n          close\n        </mat-icon>\n      </button>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n",
                styles: [""]
            }] }
];
HelpWindowToolbarComponent.propDecorators = {
    labels: [{ type: Input }],
    toolbarColor: [{ type: Input }],
    closed: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                declarations: [HelpComponent, HelpWindowComponent, HelpWindowToolbarComponent, DraggableHelpWindowDialogComponent],
                exports: [HelpComponent, HelpWindowComponent, DraggableHelpWindowDialogComponent],
                entryComponents: [DraggableHelpWindowDialogComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @param {?} config
     * @return {?}
     */
    open(config) {
        /** @type {?} */
        let draggableDialog = this._dialog.open(DraggableHelpWindowDialogComponent, Object.assign({ hasBackdrop: false, closeOnNavigation: true, panelClass: 'draggable-dialog-wrapper', position: { bottom: '0', right: '0' }, scrollStrategy: this.scrollStrategy }, config.dialogConfig));
        draggableDialog.componentInstance.data = {
            items: config.items,
            labels: config.labels,
            toolbarColor: 'toolbarColor' in config ? config.toolbarColor : 'primary',
        };
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
/** @nocollapse */ DraggableHelpWindowDialogService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DraggableHelpWindowDialogService_Factory() { return new DraggableHelpWindowDialogService(ɵɵinject(MatDialog), ɵɵinject(Overlay)); }, token: DraggableHelpWindowDialogService, providedIn: CovalentHelpModule });

export { CovalentHelpModule, DraggableHelpWindowDialogComponent, DraggableHelpWindowDialogService, HelpComponent, HelpWindowComponent, HelpWindowToolbarComponent as ɵa };
//# sourceMappingURL=covalent-experimental-help.js.map
