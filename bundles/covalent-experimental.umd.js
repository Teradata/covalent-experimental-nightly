(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@covalent/core/breadcrumbs'), require('@covalent/core/tab-select')) :
    typeof define === 'function' && define.amd ? define('@covalent/experimental', ['exports', '@angular/core', '@angular/common', '@covalent/core/breadcrumbs', '@covalent/core/tab-select'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.experimental = {}),global.ng.core,global.ng.common,global.covalent.core.breadcrumbs,global.covalent.core['tab-select']));
}(this, (function (exports,core,common,breadcrumbs,tabSelect) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdRenameMeComponent = /** @class */ (function () {
        function TdRenameMeComponent() {
            // stub
        }
        TdRenameMeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-renameMe',
                        template: "<a href=\"https://github.com/Teradata/covalent\"> Test Link </a>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        TdRenameMeComponent.ctorParameters = function () { return []; };
        return TdRenameMeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var CovalentRenameMeModule = /** @class */ (function () {
        function CovalentRenameMeModule() {
        }
        CovalentRenameMeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        declarations: [
                            TdRenameMeComponent,
                        ],
                        exports: [
                            TdRenameMeComponent,
                        ],
                    },] }
        ];
        return CovalentRenameMeModule;
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

    exports.ɵa = breadcrumbs.ɵa;
    exports.CovalentBreadcrumbsModule = breadcrumbs.CovalentBreadcrumbsModule;
    exports.TdBreadcrumbsComponent = breadcrumbs.TdBreadcrumbsComponent;
    exports.CovalentTabSelectModule = tabSelect.CovalentTabSelectModule;
    exports.TdTabSelectBase = tabSelect.TdTabSelectBase;
    exports._TdTabSelectMixinBase = tabSelect._TdTabSelectMixinBase;
    exports.TdTabSelectComponent = tabSelect.TdTabSelectComponent;
    exports.TdTabOptionBase = tabSelect.TdTabOptionBase;
    exports._TdTabOptionMixinBase = tabSelect._TdTabOptionMixinBase;
    exports.TdTabOptionComponent = tabSelect.TdTabOptionComponent;
    exports.CovalentRenameMeModule = CovalentRenameMeModule;
    exports.TdRenameMeComponent = TdRenameMeComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtZXhwZXJpbWVudGFsLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC90ZW1wbGF0ZS1yZW5hbWUtbWUtZXhwZXJpbWVudC1tb2R1bGUvcmVuYW1lLW1lLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2V4cGVyaW1lbnRhbC90ZW1wbGF0ZS1yZW5hbWUtbWUtZXhwZXJpbWVudC1tb2R1bGUvcmVuYW1lLW1lLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtcmVuYW1lTWUnLFxuICBzdHlsZVVybHM6IFsnLi9yZW5hbWUtbWUuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlbmFtZS1tZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkUmVuYW1lTWVDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIHN0dWJcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgVGRSZW5hbWVNZUNvbXBvbmVudCB9IGZyb20gJy4vcmVuYW1lLW1lLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRkUmVuYW1lTWVDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUZFJlbmFtZU1lQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudFJlbmFtZU1lTW9kdWxlIHtcblxufVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFTRTs7U0FFQzs7b0JBVEZBLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsYUFBYTt3QkFFdkIsOEVBQXlDOztxQkFDMUM7Ozs7UUFPRCwwQkFBQztLQVhEOzs7Ozs7QUNGQTtRQUtBO1NBYUM7O29CQWJBQyxhQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFOzRCQUNQQyxtQkFBWTt5QkFDYjt3QkFDRCxZQUFZLEVBQUU7NEJBQ1osbUJBQW1CO3lCQUNwQjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1AsbUJBQW1CO3lCQUNwQjtxQkFDRjs7UUFHRCw2QkFBQztLQWJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9