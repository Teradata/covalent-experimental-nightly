/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function IComponent() { }
if (false) {
    /**
     * @param {?} options
     * @return {?}
     */
    IComponent.prototype.enabled = function (options) { };
    /**
     * @return {?}
     */
    IComponent.prototype.dependency = function () { };
}
export class DynamicForms {
    /**
     * @param {?} options
     * @return {?}
     */
    enabled(options) {
        return options.dynamicForms;
    }
    /**
     * @return {?}
     */
    dependency() {
        return '@covalent/dynamic-forms';
    }
}
export class Http {
    /**
     * @param {?} options
     * @return {?}
     */
    enabled(options) {
        return options.http;
    }
    /**
     * @return {?}
     */
    dependency() {
        return '@covalent/http';
    }
}
export class Highlight {
    /**
     * @param {?} options
     * @return {?}
     */
    enabled(options) {
        return options.highlight;
    }
    /**
     * @return {?}
     */
    dependency() {
        return '@covalent/highlight';
    }
}
export class Markdown {
    /**
     * @param {?} options
     * @return {?}
     */
    enabled(options) {
        return options.markdown;
    }
    /**
     * @return {?}
     */
    dependency() {
        return '@covalent/markdown';
    }
}
export class FlavoredMarkdown {
    /**
     * @param {?} options
     * @return {?}
     */
    enabled(options) {
        return options.flavoredMarkdown;
    }
    /**
     * @return {?}
     */
    dependency() {
        return '@covalent/flavored-markdown';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9leHBlcmltZW50YWwvIiwic291cmNlcyI6WyJzY2hlbWF0aWNzL3NyYy9uZy1hZGQvY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsZ0NBR0M7Ozs7OztJQUZDLHNEQUFtQzs7OztJQUNuQyxrREFBcUI7O0FBR3ZCLE1BQU0sT0FBTyxZQUFZOzs7OztJQUNoQixPQUFPLENBQUMsT0FBZ0I7UUFDN0IsT0FBTyxPQUFPLENBQUMsWUFBWSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFTSxVQUFVO1FBQ2YsT0FBTyx5QkFBeUIsQ0FBQztJQUNuQyxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sSUFBSTs7Ozs7SUFDUixPQUFPLENBQUMsT0FBZ0I7UUFDN0IsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFTSxVQUFVO1FBQ2YsT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sU0FBUzs7Ozs7SUFDYixPQUFPLENBQUMsT0FBZ0I7UUFDN0IsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFTSxVQUFVO1FBQ2YsT0FBTyxxQkFBcUIsQ0FBQztJQUMvQixDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sUUFBUTs7Ozs7SUFDWixPQUFPLENBQUMsT0FBZ0I7UUFDN0IsT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFTSxVQUFVO1FBQ2YsT0FBTyxvQkFBb0IsQ0FBQztJQUM5QixDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQUNwQixPQUFPLENBQUMsT0FBZ0I7UUFDN0IsT0FBTyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVNLFVBQVU7UUFDZixPQUFPLDZCQUE2QixDQUFDO0lBQ3ZDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudCB7XG4gIGVuYWJsZWQob3B0aW9uczogSVNjaGVtYSk6IGJvb2xlYW47XG4gIGRlcGVuZGVuY3koKTogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgRHluYW1pY0Zvcm1zIGltcGxlbWVudHMgSUNvbXBvbmVudCB7XG4gIHB1YmxpYyBlbmFibGVkKG9wdGlvbnM6IElTY2hlbWEpOiBib29sZWFuIHtcbiAgICByZXR1cm4gb3B0aW9ucy5keW5hbWljRm9ybXM7XG4gIH1cblxuICBwdWJsaWMgZGVwZW5kZW5jeSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnQGNvdmFsZW50L2R5bmFtaWMtZm9ybXMnO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBIdHRwIGltcGxlbWVudHMgSUNvbXBvbmVudCB7XG4gIHB1YmxpYyBlbmFibGVkKG9wdGlvbnM6IElTY2hlbWEpOiBib29sZWFuIHtcbiAgICByZXR1cm4gb3B0aW9ucy5odHRwO1xuICB9XG5cbiAgcHVibGljIGRlcGVuZGVuY3koKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0Bjb3ZhbGVudC9odHRwJztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0IGltcGxlbWVudHMgSUNvbXBvbmVudCB7XG4gIHB1YmxpYyBlbmFibGVkKG9wdGlvbnM6IElTY2hlbWEpOiBib29sZWFuIHtcbiAgICByZXR1cm4gb3B0aW9ucy5oaWdobGlnaHQ7XG4gIH1cblxuICBwdWJsaWMgZGVwZW5kZW5jeSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnQGNvdmFsZW50L2hpZ2hsaWdodCc7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hcmtkb3duIGltcGxlbWVudHMgSUNvbXBvbmVudCB7XG4gIHB1YmxpYyBlbmFibGVkKG9wdGlvbnM6IElTY2hlbWEpOiBib29sZWFuIHtcbiAgICByZXR1cm4gb3B0aW9ucy5tYXJrZG93bjtcbiAgfVxuXG4gIHB1YmxpYyBkZXBlbmRlbmN5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdAY292YWxlbnQvbWFya2Rvd24nO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGbGF2b3JlZE1hcmtkb3duIGltcGxlbWVudHMgSUNvbXBvbmVudCB7XG4gIHB1YmxpYyBlbmFibGVkKG9wdGlvbnM6IElTY2hlbWEpOiBib29sZWFuIHtcbiAgICByZXR1cm4gb3B0aW9ucy5mbGF2b3JlZE1hcmtkb3duO1xuICB9XG5cbiAgcHVibGljIGRlcGVuZGVuY3koKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0Bjb3ZhbGVudC9mbGF2b3JlZC1tYXJrZG93bic7XG4gIH1cbn1cbiJdfQ==