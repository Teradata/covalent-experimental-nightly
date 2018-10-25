(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@covalent/experimental/template-rename-me-experiment-module', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.experimental = global.covalent.experimental || {}, global.covalent.experimental['template-rename-me-experiment-module'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

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

    exports.CovalentRenameMeModule = CovalentRenameMeModule;
    exports.TdRenameMeComponent = TdRenameMeComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtZXhwZXJpbWVudGFsLXRlbXBsYXRlLXJlbmFtZS1tZS1leHBlcmltZW50LW1vZHVsZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvdGVtcGxhdGUtcmVuYW1lLW1lLWV4cGVyaW1lbnQtbW9kdWxlL3JlbmFtZS1tZS5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvdGVtcGxhdGUtcmVuYW1lLW1lLWV4cGVyaW1lbnQtbW9kdWxlL3JlbmFtZS1tZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLXJlbmFtZU1lJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVuYW1lLW1lLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9yZW5hbWUtbWUuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZFJlbmFtZU1lQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBzdHViXG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFRkUmVuYW1lTWVDb21wb25lbnQgfSBmcm9tICcuL3JlbmFtZS1tZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUZFJlbmFtZU1lQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVGRSZW5hbWVNZUNvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRSZW5hbWVNZU1vZHVsZSB7XG5cbn1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBU0U7O1NBRUM7O29CQVRGQSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGFBQWE7d0JBRXZCLDhFQUF5Qzs7cUJBQzFDOzs7O1FBT0QsMEJBQUM7S0FYRDs7Ozs7O0FDRkE7UUFLQTtTQWFDOztvQkFiQUMsYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVk7eUJBQ2I7d0JBQ0QsWUFBWSxFQUFFOzRCQUNaLG1CQUFtQjt5QkFDcEI7d0JBQ0QsT0FBTyxFQUFFOzRCQUNQLG1CQUFtQjt5QkFDcEI7cUJBQ0Y7O1FBR0QsNkJBQUM7S0FiRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==