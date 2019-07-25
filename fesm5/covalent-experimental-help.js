import { CommonModule } from '@angular/common';
import { removeLeadingHash, isAnchorLink, MarkdownLoaderService } from '@covalent/markdown';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CovalentFlavoredMarkdownModule } from '@covalent/flavored-markdown';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatToolbarModule } from '@angular/material/toolbar';
import { __assign, __spread, __awaiter, __generator } from 'tslib';
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
            this.historyStack = __spread(this.historyStack, [[this.currentMarkdownItem]]);
        }
        else {
            this.historyStack = __spread(this.historyStack, [this.currentMenuItems]);
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
        return __awaiter(this, void 0, void 0, function () {
            var link, url, markdownString, error_1, win;
            return __generator(this, function (_a) {
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
                    template: "<ng-container *ngIf=\"!showEmptyState\">\n  <button mat-icon-button [matTooltip]=\"goHomeLabel\" (click)=\"reset()\">\n    <mat-icon [attr.aria-label]=\"goHomeLabel\">\n      home\n    </mat-icon>\n  </button>\n\n  <button *ngIf=\"showGoBackButton\" mat-icon-button [matTooltip]=\"goBackLabel\" (click)=\"goBack()\">\n    <mat-icon [attr.aria-label]=\"goBackLabel\">\n      arrow_back\n    </mat-icon>\n  </button>\n\n  <mat-action-list *ngIf=\"showMenu\">\n    <button\n      *ngFor=\"let item of currentMenuItems\"\n      (click)=\"handleItemSelected(item)\"\n      mat-list-item\n      [matTooltip]=\"getTitle(item)\"\n      matTooltipPosition=\"before\"\n      matTooltipShowDelay=\"500\"\n    >\n      <mat-icon matListIcon>\n        subject\n      </mat-icon>\n      <span class=\"text-truncate\">\n        {{ getTitle(item) }}\n      </span>\n    </button>\n  </mat-action-list>\n\n  <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\" color=\"accent\" class=\"sticky\"> </mat-progress-bar>\n\n  <td-flavored-markdown-loader\n    *ngIf=\"showTdMarkdownLoader\"\n    [url]=\"url\"\n    [httpOptions]=\"httpOptions\"\n    [anchor]=\"anchor\"\n    class=\"pad scroll-md\"\n    (contentReady)=\"handleContentReady()\"\n  >\n  </td-flavored-markdown-loader>\n\n  <td-flavored-markdown\n    *ngIf=\"showTdMarkdown\"\n    [content]=\"markdownString\"\n    [hostedUrl]=\"url\"\n    [anchor]=\"anchor\"\n    class=\"pad scroll-md\"\n    (contentReady)=\"handleContentReady()\"\n  >\n  </td-flavored-markdown>\n</ng-container>\n\n<div *ngIf=\"showEmptyState\" layout=\"column\" layout-align=\"center center\" class=\"tc-grey-500 mat-typography pad-lg\">\n  <mat-icon matListAvatar class=\"text-super push-bottom\">subject</mat-icon>\n  <h2>{{ emptyStateLabel }}</h2>\n</div>\n",
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var HelpWindowComponent = /** @class */ (function () {
    function HelpWindowComponent() {
        this.draggable = false;
        // outputs only for non-draggable toolbar
        this.closed = new EventEmitter();
    }
    Object.defineProperty(HelpWindowComponent.prototype, "height", {
        get: /**
         * @return {?}
         */
        function () {
            return 475;
        },
        enumerable: true,
        configurable: true
    });
    HelpWindowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-help-window',
                    template: "<div *ngIf=\"draggable\" cdkDrag cdkDragRootElement=\".cdk-overlay-pane\" cdkDragBoundary=\".cdk-overlay-container\">\n  <td-help-window-toolbar\n    cdkDragHandle\n    class=\"td-draggable-help-window-toolbar\"\n    [labels]=\"labels\"\n    (closed)=\"closed.emit()\"\n  >\n  </td-help-window-toolbar>\n\n  <td-help [items]=\"items\" [labels]=\"labels\" [style.height.px]=\"height\"> </td-help>\n</div>\n\n<div *ngIf=\"!draggable\">\n  <td-help-window-toolbar [labels]=\"labels\" (closed)=\"closed.emit()\"> </td-help-window-toolbar>\n\n  <td-help [style.height.px]=\"height\" [items]=\"items\" [labels]=\"labels\"> </td-help>\n</div>\n",
                    styles: [":host{display:inline-block}td-help{display:block;width:360px;max-width:100vw;max-height:100vh;overflow-y:auto}.td-draggable-help-window-toolbar{cursor:move}"]
                }] }
    ];
    HelpWindowComponent.propDecorators = {
        items: [{ type: Input }],
        draggable: [{ type: Input }],
        labels: [{ type: Input }],
        closed: [{ type: Output }]
    };
    return HelpWindowComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var DraggableHelpWindowDialogComponent = /** @class */ (function () {
    function DraggableHelpWindowDialogComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    /**
     * @return {?}
     */
    DraggableHelpWindowDialogComponent.prototype.handleClosed = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    DraggableHelpWindowDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-draggable-help-window-dialog',
                    template: "<td-help-window [items]=\"data.items\" [labels]=\"data.labels\" [draggable]=\"true\" (closed)=\"handleClosed()\">\n</td-help-window>\n",
                    styles: ["::ng-deep.draggable-dialog-wrapper>.mat-dialog-container{padding:0}"]
                }] }
    ];
    /** @nocollapse */
    DraggableHelpWindowDialogComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
        { type: MatDialogRef }
    ]; };
    return DraggableHelpWindowDialogComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var HelpWindowToolbarComponent = /** @class */ (function () {
    function HelpWindowToolbarComponent() {
        this.closed = new EventEmitter();
    }
    Object.defineProperty(HelpWindowToolbarComponent.prototype, "helpLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.labels && this.labels.help) || 'Help';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelpWindowToolbarComponent.prototype, "closeLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.labels && this.labels.close) || 'Close';
        },
        enumerable: true,
        configurable: true
    });
    HelpWindowToolbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-help-window-toolbar',
                    template: "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <div layout=\"row\" layout-align=\"start center\" flex>\n      <span class=\"mat-title push-bottom-none\" flex>\n        {{ helpLabel }}\n      </span>\n      <!-- TODO: Resizing a drag-and-drop element was not working so removed minimize/maximize for now-->\n      <button mat-icon-button matTooltip=\"Close\" (click)=\"closed.emit()\">\n        <mat-icon [attr.aria-label]=\"closeLabel\">\n          close\n        </mat-icon>\n      </button>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n",
                    styles: [""]
                }] }
    ];
    HelpWindowToolbarComponent.propDecorators = {
        labels: [{ type: Input }],
        closed: [{ type: Output }]
    };
    return HelpWindowToolbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var CovalentHelpModule = /** @class */ (function () {
    function CovalentHelpModule() {
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
    return CovalentHelpModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var DraggableHelpWindowDialogService = /** @class */ (function () {
    function DraggableHelpWindowDialogService(_dialog, overlay) {
        this._dialog = _dialog;
        this.scrollStrategy = overlay.scrollStrategies.noop();
    }
    /**
     * @param {?} items
     * @param {?=} config
     * @param {?=} labels
     * @return {?}
     */
    DraggableHelpWindowDialogService.prototype.open = /**
     * @param {?} items
     * @param {?=} config
     * @param {?=} labels
     * @return {?}
     */
    function (items, config, labels) {
        /** @type {?} */
        var draggableDialog = this._dialog.open(DraggableHelpWindowDialogComponent, __assign({ hasBackdrop: false, closeOnNavigation: true, panelClass: 'draggable-dialog-wrapper', position: { bottom: '0', right: '0' }, scrollStrategy: this.scrollStrategy }, config));
        draggableDialog.componentInstance.data = { items: items, labels: labels };
        return draggableDialog;
    };
    DraggableHelpWindowDialogService.decorators = [
        { type: Injectable, args: [{
                    providedIn: CovalentHelpModule,
                },] }
    ];
    /** @nocollapse */
    DraggableHelpWindowDialogService.ctorParameters = function () { return [
        { type: MatDialog },
        { type: Overlay }
    ]; };
    /** @nocollapse */ DraggableHelpWindowDialogService.ngInjectableDef = defineInjectable({ factory: function DraggableHelpWindowDialogService_Factory() { return new DraggableHelpWindowDialogService(inject(MatDialog), inject(Overlay)); }, token: DraggableHelpWindowDialogService, providedIn: CovalentHelpModule });
    return DraggableHelpWindowDialogService;
}());

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