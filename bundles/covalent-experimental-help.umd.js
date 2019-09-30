(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@covalent/markdown'), require('@angular/material/button'), require('@angular/material/tooltip'), require('@angular/material/list'), require('@angular/material/icon'), require('@angular/material/progress-bar'), require('@covalent/flavored-markdown'), require('@angular/material/toolbar'), require('@angular/cdk/overlay'), require('@covalent/core/dialogs')) :
    typeof define === 'function' && define.amd ? define('@covalent/experimental/help', ['exports', '@angular/core', '@angular/common', '@covalent/markdown', '@angular/material/button', '@angular/material/tooltip', '@angular/material/list', '@angular/material/icon', '@angular/material/progress-bar', '@covalent/flavored-markdown', '@angular/material/toolbar', '@angular/cdk/overlay', '@covalent/core/dialogs'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.experimental = global.covalent.experimental || {}, global.covalent.experimental.help = {}), global.ng.core, global.ng.common, global.markdown, global.ng.material.button, global.ng.material.tooltip, global.ng.material.list, global.ng.material.icon, global.ng.material['progress-bar'], global.flavoredMarkdown, global.ng.material.toolbar, global.ng.cdk.overlay, global.dialogs));
}(this, function (exports, core, common, markdown, button, tooltip, list, icon, progressBar, flavoredMarkdown, toolbar, overlay, dialogs) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DEFAULT_HELP_COMP_LABELS = {
        goHome: 'Go home',
        goBack: 'Go back',
        emptyState: 'No item(s) to display',
    };
    /** @type {?} */
    var DEFAULT_HELP_WINDOW_COMP_LABELS = {
        help: 'Help',
        close: 'Close',
    };

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
            var temp = new URL(url);
            if (temp.hash) {
                return markdown.removeLeadingHash(temp.hash);
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
            var firstLine = markdownString.split(/[\r\n]+/).find((/**
             * @param {?} line
             * @return {?}
             */
            function (line) { return !!line; }));
            return markdown.removeLeadingHash(firstLine).trim();
        }
        return undefined;
    }
    /**
     * @param {?} anchor
     * @return {?}
     */
    function isMarkdownHref(anchor) {
        return !markdown.isAnchorLink(anchor) && anchor.pathname.endsWith('.md');
    }
    var HelpComponent = /** @class */ (function () {
        function HelpComponent(_markdownUrlLoaderService) {
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
        HelpComponent.prototype.clickListener = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var element = (/** @type {?} */ (event.srcElement));
            if (element.matches('a[href]') && isMarkdownHref((/** @type {?} */ (element)))) {
                this.handleLinkClick(event);
            }
        };
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
                return (this.labels && this.labels.goHome) || DEFAULT_HELP_COMP_LABELS.goHome;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HelpComponent.prototype, "goBackLabel", {
            get: /**
             * @return {?}
             */
            function () {
                return (this.labels && this.labels.goBack) || DEFAULT_HELP_COMP_LABELS.goBack;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HelpComponent.prototype, "emptyStateLabel", {
            get: /**
             * @return {?}
             */
            function () {
                return (this.labels && this.labels.emptyState) || DEFAULT_HELP_COMP_LABELS.emptyState;
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
        HelpComponent.prototype.reset = /**
         * @return {?}
         */
        function () {
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
                markdown.removeLeadingHash(item.anchor) ||
                getTitleFromUrl(item.url) ||
                getTitleFromMarkdownString(item.markdownString));
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
            { type: core.Component, args: [{
                        selector: 'td-help',
                        template: "<ng-container *ngIf=\"!showEmptyState\">\n  <button mat-icon-button [matTooltip]=\"goHomeLabel\" (click)=\"reset()\">\n    <mat-icon [attr.aria-label]=\"goHomeLabel\">\n      home\n    </mat-icon>\n  </button>\n\n  <button *ngIf=\"showGoBackButton\" mat-icon-button [matTooltip]=\"goBackLabel\" (click)=\"goBack()\">\n    <mat-icon [attr.aria-label]=\"goBackLabel\">\n      arrow_back\n    </mat-icon>\n  </button>\n\n  <mat-action-list *ngIf=\"showMenu\">\n    <button\n      *ngFor=\"let item of currentMenuItems\"\n      (click)=\"handleItemSelected(item)\"\n      mat-list-item\n      [matTooltip]=\"getTitle(item)\"\n      matTooltipPosition=\"before\"\n      matTooltipShowDelay=\"500\"\n    >\n      <mat-icon matListIcon>\n        subject\n      </mat-icon>\n      <span class=\"text-truncate\">\n        {{ getTitle(item) }}\n      </span>\n    </button>\n  </mat-action-list>\n\n  <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\" color=\"accent\" class=\"sticky\"> </mat-progress-bar>\n\n  <td-flavored-markdown-loader\n    *ngIf=\"showTdMarkdownLoader\"\n    [url]=\"url\"\n    [httpOptions]=\"httpOptions\"\n    [anchor]=\"anchor\"\n    class=\"pad scroll-md\"\n  >\n  </td-flavored-markdown-loader>\n\n  <td-flavored-markdown\n    *ngIf=\"showTdMarkdown\"\n    [content]=\"markdownString\"\n    [hostedUrl]=\"url\"\n    [anchor]=\"anchor\"\n    class=\"pad scroll-md\"\n  >\n  </td-flavored-markdown>\n</ng-container>\n\n<div *ngIf=\"showEmptyState\" layout=\"column\" layout-align=\"center center\" class=\"tc-grey-500 mat-typography pad-lg\">\n  <mat-icon matListAvatar class=\"text-super push-bottom\">subject</mat-icon>\n  <h2>{{ emptyStateLabel }}</h2>\n</div>\n",
                        styles: [":host{display:block;position:relative;height:inherit}.scroll-md{position:absolute;top:40px;bottom:0;right:0;left:0;overflow-y:auto}.sticky{position:absolute;top:0}"]
                    }] }
        ];
        /** @nocollapse */
        HelpComponent.ctorParameters = function () { return [
            { type: markdown.MarkdownLoaderService }
        ]; };
        HelpComponent.propDecorators = {
            items: [{ type: core.Input }],
            labels: [{ type: core.Input }],
            clickListener: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return HelpComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HelpWindowComponent = /** @class */ (function () {
        function HelpWindowComponent() {
            this.toolbarColor = 'primary';
            this.closed = new core.EventEmitter();
        }
        Object.defineProperty(HelpWindowComponent.prototype, "helpComponentLabels", {
            get: /**
             * @return {?}
             */
            function () {
                if (this.labels) {
                    var _a = this.labels, goHome = _a.goHome, goBack = _a.goBack, emptyState = _a.emptyState;
                    return {
                        goHome: goHome,
                        goBack: goBack,
                        emptyState: emptyState,
                    };
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HelpWindowComponent.prototype, "helpLabel", {
            get: /**
             * @return {?}
             */
            function () {
                return (this.labels && this.labels.help) || DEFAULT_HELP_WINDOW_COMP_LABELS.help;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HelpWindowComponent.prototype, "closeLabel", {
            get: /**
             * @return {?}
             */
            function () {
                return (this.labels && this.labels.close) || DEFAULT_HELP_WINDOW_COMP_LABELS.close;
            },
            enumerable: true,
            configurable: true
        });
        HelpWindowComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-help-window',
                        template: "<mat-toolbar [color]=\"toolbarColor\" class=\"td-help-window-toolbar\">\n  <mat-toolbar-row>\n    <div layout=\"row\" layout-align=\"start center\" flex>\n      <span class=\"mat-title push-bottom-none\" flex>\n        {{ helpLabel }}\n      </span>\n      <!-- TODO: Resizing a drag-and-drop element was not working so removed minimize/maximize for now-->\n      <button mat-icon-button matTooltip=\"Close\" (click)=\"closed.emit()\" class=\"td-help-window-close\">\n        <mat-icon [attr.aria-label]=\"closeLabel\">\n          close\n        </mat-icon>\n      </button>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<td-help [items]=\"items\" [labels]=\"helpComponentLabels\"> </td-help>\n",
                        styles: [":host{height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host.td-draggable-help-window .td-help-window-toolbar{cursor:move}::ng-deep .td-draggable-help-window-wrapper>.mat-dialog-container{padding:0}"]
                    }] }
        ];
        HelpWindowComponent.propDecorators = {
            items: [{ type: core.Input }],
            labels: [{ type: core.Input }],
            toolbarColor: [{ type: core.Input }],
            closed: [{ type: core.Output }]
        };
        return HelpWindowComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CovalentHelpModule = /** @class */ (function () {
        function CovalentHelpModule() {
        }
        CovalentHelpModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            // material
                            button.MatButtonModule,
                            tooltip.MatTooltipModule,
                            list.MatListModule,
                            icon.MatIconModule,
                            progressBar.MatProgressBarModule,
                            toolbar.MatToolbarModule,
                            flavoredMarkdown.CovalentFlavoredMarkdownModule,
                        ],
                        declarations: [HelpComponent, HelpWindowComponent],
                        exports: [HelpComponent, HelpWindowComponent],
                        entryComponents: [HelpWindowComponent],
                    },] }
        ];
        return CovalentHelpModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DraggableHelpWindowDialogService = /** @class */ (function () {
        function DraggableHelpWindowDialogService(_overlay, _tdDialogService) {
            this._overlay = _overlay;
            this._tdDialogService = _tdDialogService;
        }
        /**
         * @param {?} config
         * @return {?}
         */
        DraggableHelpWindowDialogService.prototype.open = /**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            /** @type {?} */
            var CDK_OVERLAY_CUSTOM_CLASS = 'td-draggable-help-window-wrapper';
            /** @type {?} */
            var draggableDialog = this._tdDialogService.openDraggable({
                component: HelpWindowComponent,
                config: __assign({ hasBackdrop: false, closeOnNavigation: true, panelClass: CDK_OVERLAY_CUSTOM_CLASS, position: { bottom: '0', right: '0' }, scrollStrategy: this._overlay.scrollStrategies.noop(), height: '475px', width: '360px' }, config.dialogConfig),
                dragHandleSelectors: ['.td-help-window-toolbar'],
                draggableClass: 'td-draggable-help-window',
            });
            draggableDialog.componentInstance.items = config.items;
            draggableDialog.componentInstance.labels = config.labels;
            draggableDialog.componentInstance.toolbarColor = 'toolbarColor' in config ? config.toolbarColor : 'primary';
            draggableDialog.componentInstance.closed.subscribe((/**
             * @return {?}
             */
            function () { return draggableDialog.close(); }));
            return draggableDialog;
        };
        DraggableHelpWindowDialogService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: CovalentHelpModule,
                    },] }
        ];
        /** @nocollapse */
        DraggableHelpWindowDialogService.ctorParameters = function () { return [
            { type: overlay.Overlay },
            { type: dialogs.TdDialogService }
        ]; };
        /** @nocollapse */ DraggableHelpWindowDialogService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DraggableHelpWindowDialogService_Factory() { return new DraggableHelpWindowDialogService(core.ɵɵinject(overlay.Overlay), core.ɵɵinject(dialogs.TdDialogService)); }, token: DraggableHelpWindowDialogService, providedIn: CovalentHelpModule });
        return DraggableHelpWindowDialogService;
    }());

    exports.CovalentHelpModule = CovalentHelpModule;
    exports.DEFAULT_HELP_COMP_LABELS = DEFAULT_HELP_COMP_LABELS;
    exports.DEFAULT_HELP_WINDOW_COMP_LABELS = DEFAULT_HELP_WINDOW_COMP_LABELS;
    exports.DraggableHelpWindowDialogService = DraggableHelpWindowDialogService;
    exports.HelpComponent = HelpComponent;
    exports.HelpWindowComponent = HelpWindowComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=covalent-experimental-help.umd.js.map
