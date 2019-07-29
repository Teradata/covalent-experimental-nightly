/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { chain, mergeWith, url, apply, branchAndMerge, template } from '@angular-devkit/schematics';
import { addPackageToPackageJson } from '@angular/material/schematics/ng-add/package-config';
import { covalentCoreVersion, materialVersion } from './version-names';
import { DynamicForms, Http, Highlight, Markdown, FlavoredMarkdown } from './components';
import { strings } from '@angular-devkit/core';
import { getProjectFromWorkspace, getProjectTargetOptions } from '@angular/cdk/schematics';
import { getWorkspace } from '@schematics/angular/utility/config';
/**
 * @param {?} options
 * @return {?}
 */
export function addDependenciesAndFiles(options) {
    return chain([
        (/**
         * @param {?} host
         * @return {?}
         */
        (host) => {
            addPackageToPackageJson(host, '@angular/material', `~${materialVersion}`);
            addPackageToPackageJson(host, '@covalent/core', `~${covalentCoreVersion}`);
            /** @type {?} */
            let components = [
                new DynamicForms(),
                new Http(),
                new Highlight(),
                new Markdown(),
                new FlavoredMarkdown(),
            ];
            components.forEach((/**
             * @param {?} component
             * @return {?}
             */
            (component) => {
                if (component.enabled(options)) {
                    addPackageToPackageJson(host, component.dependency(), `~${covalentCoreVersion}`);
                }
            }));
        }),
        mergeFiles(options),
        addThemeToAngularJson(),
    ]);
}
/**
 * @param {?} options
 * @return {?}
 */
function mergeFiles(options) {
    /** @type {?} */
    const templateSource = apply(url('./files'), [
        template(Object.assign({}, strings, options)),
    ]);
    return branchAndMerge(mergeWith(templateSource));
}
/**
 * @return {?}
 */
function addThemeToAngularJson() {
    return (/**
     * @param {?} host
     * @return {?}
     */
    (host) => {
        /** @type {?} */
        const workspace = getWorkspace(host);
        /** @type {?} */
        const project = getProjectFromWorkspace(workspace);
        /** @type {?} */
        const targetOptions = getProjectTargetOptions(project, 'build');
        /** @type {?} */
        const assetPath = `src/theme.scss`;
        /** @type {?} */
        const prebuiltThemePathSegment = `src/styles.scss`;
        if (!targetOptions.styles) {
            targetOptions.styles = [assetPath];
        }
        else {
            /** @type {?} */
            const existingStyles = targetOptions.styles.map((/**
             * @param {?} s
             * @return {?}
             */
            (s) => (typeof s === 'string' ? s : s.input)));
            for (let [index, stylePath] of existingStyles.entries()) {
                if (stylePath === assetPath) {
                    return;
                }
                if (stylePath.includes(prebuiltThemePathSegment)) {
                    targetOptions.styles.splice(index, 0);
                }
            }
            targetOptions.styles.unshift(assetPath);
        }
        host.overwrite('angular.json', JSON.stringify(workspace, undefined, 2));
        return host;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsLyIsInNvdXJjZXMiOlsic2NoZW1hdGljcy9zcmMvbmctYWRkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQVEsS0FBSyxFQUFRLFNBQVMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUU3RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkUsT0FBTyxFQUFjLFlBQVksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNyRyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLHVCQUF1QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7OztBQUdsRSxNQUFNLFVBQVUsdUJBQXVCLENBQUMsT0FBZ0I7SUFDdEQsT0FBTyxLQUFLLENBQUM7Ozs7O1FBQ1gsQ0FBQyxJQUFVLEVBQUUsRUFBRTtZQUNiLHVCQUF1QixDQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBRSxJQUFJLGVBQWUsRUFBRSxDQUFDLENBQUM7WUFDMUUsdUJBQXVCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLElBQUksbUJBQW1CLEVBQUUsQ0FBQyxDQUFDOztnQkFFdkUsVUFBVSxHQUFpQjtnQkFDN0IsSUFBSSxZQUFZLEVBQUU7Z0JBQ2xCLElBQUksSUFBSSxFQUFFO2dCQUNWLElBQUksU0FBUyxFQUFFO2dCQUNmLElBQUksUUFBUSxFQUFFO2dCQUNkLElBQUksZ0JBQWdCLEVBQUU7YUFDdkI7WUFFRCxVQUFVLENBQUMsT0FBTzs7OztZQUFDLENBQUMsU0FBcUIsRUFBRSxFQUFFO2dCQUMzQyxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQzlCLHVCQUF1QixDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7aUJBQ2xGO1lBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0QsVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUNuQixxQkFBcUIsRUFBRTtLQUN4QixDQUFDLENBQUM7QUFDTCxDQUFDOzs7OztBQUVELFNBQVMsVUFBVSxDQUFDLE9BQWdCOztVQUM1QixjQUFjLEdBQVEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUNoRCxRQUFRLG1CQUNILE9BQU8sRUFDUCxPQUFPLEVBQ1Y7S0FDSCxDQUFDO0lBQ0YsT0FBTyxjQUFjLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFDbkQsQ0FBQzs7OztBQUVELFNBQVMscUJBQXFCO0lBQzVCOzs7O0lBQU8sQ0FBQyxJQUFVLEVBQUUsRUFBRTs7Y0FDZCxTQUFTLEdBQTJDLFlBQVksQ0FBQyxJQUFJLENBQUM7O2NBQ3RFLE9BQU8sR0FBNEMsdUJBQXVCLENBQUMsU0FBUyxDQUFDOztjQUNyRixhQUFhLEdBQVEsdUJBQXVCLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQzs7Y0FDOUQsU0FBUyxHQUFXLGdCQUFnQjs7Y0FDcEMsd0JBQXdCLEdBQVcsaUJBQWlCO1FBRTFELElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO1lBQ3pCLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNwQzthQUFNOztrQkFDQyxjQUFjLEdBQVEsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHOzs7O1lBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBQztZQUV2RyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLElBQUksY0FBYyxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUN2RCxJQUFJLFNBQVMsS0FBSyxTQUFTLEVBQUU7b0JBQzNCLE9BQU87aUJBQ1I7Z0JBQ0QsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLEVBQUU7b0JBQ2hELGFBQWEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDdkM7YUFDRjtZQUNELGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEUsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDLEVBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUnVsZSwgY2hhaW4sIFRyZWUsIG1lcmdlV2l0aCwgdXJsLCBhcHBseSwgYnJhbmNoQW5kTWVyZ2UsIHRlbXBsYXRlIH0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L3NjaGVtYXRpY3MnO1xuaW1wb3J0IHsgYWRkUGFja2FnZVRvUGFja2FnZUpzb24gfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zY2hlbWF0aWNzL25nLWFkZC9wYWNrYWdlLWNvbmZpZyc7XG5pbXBvcnQgeyBJU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuaW1wb3J0IHsgY292YWxlbnRDb3JlVmVyc2lvbiwgbWF0ZXJpYWxWZXJzaW9uIH0gZnJvbSAnLi92ZXJzaW9uLW5hbWVzJztcbmltcG9ydCB7IElDb21wb25lbnQsIER5bmFtaWNGb3JtcywgSHR0cCwgSGlnaGxpZ2h0LCBNYXJrZG93biwgRmxhdm9yZWRNYXJrZG93biB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBzdHJpbmdzIH0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L2NvcmUnO1xuaW1wb3J0IHsgZ2V0UHJvamVjdEZyb21Xb3Jrc3BhY2UsIGdldFByb2plY3RUYXJnZXRPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3NjaGVtYXRpY3MnO1xuaW1wb3J0IHsgZ2V0V29ya3NwYWNlIH0gZnJvbSAnQHNjaGVtYXRpY3MvYW5ndWxhci91dGlsaXR5L2NvbmZpZyc7XG5pbXBvcnQgeyBleHBlcmltZW50YWwgfSBmcm9tICdAYW5ndWxhci1kZXZraXQvY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREZXBlbmRlbmNpZXNBbmRGaWxlcyhvcHRpb25zOiBJU2NoZW1hKTogUnVsZSB7XG4gIHJldHVybiBjaGFpbihbXG4gICAgKGhvc3Q6IFRyZWUpID0+IHtcbiAgICAgIGFkZFBhY2thZ2VUb1BhY2thZ2VKc29uKGhvc3QsICdAYW5ndWxhci9tYXRlcmlhbCcsIGB+JHttYXRlcmlhbFZlcnNpb259YCk7XG4gICAgICBhZGRQYWNrYWdlVG9QYWNrYWdlSnNvbihob3N0LCAnQGNvdmFsZW50L2NvcmUnLCBgfiR7Y292YWxlbnRDb3JlVmVyc2lvbn1gKTtcblxuICAgICAgbGV0IGNvbXBvbmVudHM6IElDb21wb25lbnRbXSA9IFtcbiAgICAgICAgbmV3IER5bmFtaWNGb3JtcygpLFxuICAgICAgICBuZXcgSHR0cCgpLFxuICAgICAgICBuZXcgSGlnaGxpZ2h0KCksXG4gICAgICAgIG5ldyBNYXJrZG93bigpLFxuICAgICAgICBuZXcgRmxhdm9yZWRNYXJrZG93bigpLFxuICAgICAgXTtcblxuICAgICAgY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQ6IElDb21wb25lbnQpID0+IHtcbiAgICAgICAgaWYgKGNvbXBvbmVudC5lbmFibGVkKG9wdGlvbnMpKSB7XG4gICAgICAgICAgYWRkUGFja2FnZVRvUGFja2FnZUpzb24oaG9zdCwgY29tcG9uZW50LmRlcGVuZGVuY3koKSwgYH4ke2NvdmFsZW50Q29yZVZlcnNpb259YCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgbWVyZ2VGaWxlcyhvcHRpb25zKSxcbiAgICBhZGRUaGVtZVRvQW5ndWxhckpzb24oKSxcbiAgXSk7XG59XG5cbmZ1bmN0aW9uIG1lcmdlRmlsZXMob3B0aW9uczogSVNjaGVtYSk6IFJ1bGUge1xuICBjb25zdCB0ZW1wbGF0ZVNvdXJjZTogYW55ID0gYXBwbHkodXJsKCcuL2ZpbGVzJyksIFtcbiAgICB0ZW1wbGF0ZSh7XG4gICAgICAuLi5zdHJpbmdzLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9KSxcbiAgXSk7XG4gIHJldHVybiBicmFuY2hBbmRNZXJnZShtZXJnZVdpdGgodGVtcGxhdGVTb3VyY2UpKTtcbn1cblxuZnVuY3Rpb24gYWRkVGhlbWVUb0FuZ3VsYXJKc29uKCk6IFJ1bGUge1xuICByZXR1cm4gKGhvc3Q6IFRyZWUpID0+IHtcbiAgICBjb25zdCB3b3Jrc3BhY2U6IGV4cGVyaW1lbnRhbC53b3Jrc3BhY2UuV29ya3NwYWNlU2NoZW1hID0gZ2V0V29ya3NwYWNlKGhvc3QpO1xuICAgIGNvbnN0IHByb2plY3Q6IGV4cGVyaW1lbnRhbC53b3Jrc3BhY2UuV29ya3NwYWNlUHJvamVjdCA9IGdldFByb2plY3RGcm9tV29ya3NwYWNlKHdvcmtzcGFjZSk7XG4gICAgY29uc3QgdGFyZ2V0T3B0aW9uczogYW55ID0gZ2V0UHJvamVjdFRhcmdldE9wdGlvbnMocHJvamVjdCwgJ2J1aWxkJyk7XG4gICAgY29uc3QgYXNzZXRQYXRoOiBzdHJpbmcgPSBgc3JjL3RoZW1lLnNjc3NgO1xuICAgIGNvbnN0IHByZWJ1aWx0VGhlbWVQYXRoU2VnbWVudDogc3RyaW5nID0gYHNyYy9zdHlsZXMuc2Nzc2A7XG5cbiAgICBpZiAoIXRhcmdldE9wdGlvbnMuc3R5bGVzKSB7XG4gICAgICB0YXJnZXRPcHRpb25zLnN0eWxlcyA9IFthc3NldFBhdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBleGlzdGluZ1N0eWxlczogYW55ID0gdGFyZ2V0T3B0aW9ucy5zdHlsZXMubWFwKChzOiBhbnkpID0+ICh0eXBlb2YgcyA9PT0gJ3N0cmluZycgPyBzIDogcy5pbnB1dCkpO1xuXG4gICAgICBmb3IgKGxldCBbaW5kZXgsIHN0eWxlUGF0aF0gb2YgZXhpc3RpbmdTdHlsZXMuZW50cmllcygpKSB7XG4gICAgICAgIGlmIChzdHlsZVBhdGggPT09IGFzc2V0UGF0aCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3R5bGVQYXRoLmluY2x1ZGVzKHByZWJ1aWx0VGhlbWVQYXRoU2VnbWVudCkpIHtcbiAgICAgICAgICB0YXJnZXRPcHRpb25zLnN0eWxlcy5zcGxpY2UoaW5kZXgsIDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0YXJnZXRPcHRpb25zLnN0eWxlcy51bnNoaWZ0KGFzc2V0UGF0aCk7XG4gICAgfVxuICAgIGhvc3Qub3ZlcndyaXRlKCdhbmd1bGFyLmpzb24nLCBKU09OLnN0cmluZ2lmeSh3b3Jrc3BhY2UsIHVuZGVmaW5lZCwgMikpO1xuICAgIHJldHVybiBob3N0O1xuICB9O1xufVxuIl19