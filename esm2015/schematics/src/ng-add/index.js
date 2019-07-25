/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
            components.forEach((component) => {
                if (component.enabled(options)) {
                    addPackageToPackageJson(host, component.dependency(), `~${covalentCoreVersion}`);
                }
            });
        },
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
    return (host) => {
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
            const existingStyles = targetOptions.styles.map((s) => (typeof s === 'string' ? s : s.input));
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
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsLyIsInNvdXJjZXMiOlsic2NoZW1hdGljcy9zcmMvbmctYWRkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQVEsS0FBSyxFQUFRLFNBQVMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUU3RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkUsT0FBTyxFQUFjLFlBQVksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNyRyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLHVCQUF1QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7OztBQUdsRSxNQUFNLFVBQVUsdUJBQXVCLENBQUMsT0FBZ0I7SUFDdEQsT0FBTyxLQUFLLENBQUM7UUFDWCxDQUFDLElBQVUsRUFBRSxFQUFFO1lBQ2IsdUJBQXVCLENBQUMsSUFBSSxFQUFFLG1CQUFtQixFQUFFLElBQUksZUFBZSxFQUFFLENBQUMsQ0FBQztZQUMxRSx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7O2dCQUV2RSxVQUFVLEdBQWlCO2dCQUM3QixJQUFJLFlBQVksRUFBRTtnQkFDbEIsSUFBSSxJQUFJLEVBQUU7Z0JBQ1YsSUFBSSxTQUFTLEVBQUU7Z0JBQ2YsSUFBSSxRQUFRLEVBQUU7Z0JBQ2QsSUFBSSxnQkFBZ0IsRUFBRTthQUN2QjtZQUVELFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFxQixFQUFFLEVBQUU7Z0JBQzNDLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDOUIsdUJBQXVCLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLG1CQUFtQixFQUFFLENBQUMsQ0FBQztpQkFDbEY7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFDRCxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQ25CLHFCQUFxQixFQUFFO0tBQ3hCLENBQUMsQ0FBQztBQUNMLENBQUM7Ozs7O0FBRUQsU0FBUyxVQUFVLENBQUMsT0FBZ0I7O1VBQzVCLGNBQWMsR0FBUSxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQ2hELFFBQVEsbUJBQ0gsT0FBTyxFQUNQLE9BQU8sRUFDVjtLQUNILENBQUM7SUFDRixPQUFPLGNBQWMsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztBQUNuRCxDQUFDOzs7O0FBRUQsU0FBUyxxQkFBcUI7SUFDNUIsT0FBTyxDQUFDLElBQVUsRUFBRSxFQUFFOztjQUNkLFNBQVMsR0FBb0IsWUFBWSxDQUFDLElBQUksQ0FBQzs7Y0FDL0MsT0FBTyxHQUFxQix1QkFBdUIsQ0FBQyxTQUFTLENBQUM7O2NBQzlELGFBQWEsR0FBUSx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDOztjQUM5RCxTQUFTLEdBQVcsZ0JBQWdCOztjQUNwQyx3QkFBd0IsR0FBVyxpQkFBaUI7UUFFMUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7WUFDekIsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3BDO2FBQU07O2tCQUNDLGNBQWMsR0FBUSxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXZHLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsSUFBSSxjQUFjLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ3ZELElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtvQkFDM0IsT0FBTztpQkFDUjtnQkFDRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsd0JBQXdCLENBQUMsRUFBRTtvQkFDaEQsYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUN2QzthQUNGO1lBQ0QsYUFBYSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDekM7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSdWxlLCBjaGFpbiwgVHJlZSwgbWVyZ2VXaXRoLCB1cmwsIGFwcGx5LCBicmFuY2hBbmRNZXJnZSwgdGVtcGxhdGUgfSBmcm9tICdAYW5ndWxhci1kZXZraXQvc2NoZW1hdGljcyc7XG5pbXBvcnQgeyBhZGRQYWNrYWdlVG9QYWNrYWdlSnNvbiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NjaGVtYXRpY3MvbmctYWRkL3BhY2thZ2UtY29uZmlnJztcbmltcG9ydCB7IElTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5pbXBvcnQgeyBjb3ZhbGVudENvcmVWZXJzaW9uLCBtYXRlcmlhbFZlcnNpb24gfSBmcm9tICcuL3ZlcnNpb24tbmFtZXMnO1xuaW1wb3J0IHsgSUNvbXBvbmVudCwgRHluYW1pY0Zvcm1zLCBIdHRwLCBIaWdobGlnaHQsIE1hcmtkb3duLCBGbGF2b3JlZE1hcmtkb3duIH0gZnJvbSAnLi9jb21wb25lbnRzJztcbmltcG9ydCB7IHN0cmluZ3MgfSBmcm9tICdAYW5ndWxhci1kZXZraXQvY29yZSc7XG5pbXBvcnQgeyBnZXRQcm9qZWN0RnJvbVdvcmtzcGFjZSwgZ2V0UHJvamVjdFRhcmdldE9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9jZGsvc2NoZW1hdGljcyc7XG5pbXBvcnQgeyBnZXRXb3Jrc3BhY2UgfSBmcm9tICdAc2NoZW1hdGljcy9hbmd1bGFyL3V0aWxpdHkvY29uZmlnJztcbmltcG9ydCB7IFdvcmtzcGFjZVNjaGVtYSwgV29ya3NwYWNlUHJvamVjdCB9IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9jb3JlL3NyYy93b3Jrc3BhY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkRGVwZW5kZW5jaWVzQW5kRmlsZXMob3B0aW9uczogSVNjaGVtYSk6IFJ1bGUge1xuICByZXR1cm4gY2hhaW4oW1xuICAgIChob3N0OiBUcmVlKSA9PiB7XG4gICAgICBhZGRQYWNrYWdlVG9QYWNrYWdlSnNvbihob3N0LCAnQGFuZ3VsYXIvbWF0ZXJpYWwnLCBgfiR7bWF0ZXJpYWxWZXJzaW9ufWApO1xuICAgICAgYWRkUGFja2FnZVRvUGFja2FnZUpzb24oaG9zdCwgJ0Bjb3ZhbGVudC9jb3JlJywgYH4ke2NvdmFsZW50Q29yZVZlcnNpb259YCk7XG5cbiAgICAgIGxldCBjb21wb25lbnRzOiBJQ29tcG9uZW50W10gPSBbXG4gICAgICAgIG5ldyBEeW5hbWljRm9ybXMoKSxcbiAgICAgICAgbmV3IEh0dHAoKSxcbiAgICAgICAgbmV3IEhpZ2hsaWdodCgpLFxuICAgICAgICBuZXcgTWFya2Rvd24oKSxcbiAgICAgICAgbmV3IEZsYXZvcmVkTWFya2Rvd24oKSxcbiAgICAgIF07XG5cbiAgICAgIGNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50OiBJQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIGlmIChjb21wb25lbnQuZW5hYmxlZChvcHRpb25zKSkge1xuICAgICAgICAgIGFkZFBhY2thZ2VUb1BhY2thZ2VKc29uKGhvc3QsIGNvbXBvbmVudC5kZXBlbmRlbmN5KCksIGB+JHtjb3ZhbGVudENvcmVWZXJzaW9ufWApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIG1lcmdlRmlsZXMob3B0aW9ucyksXG4gICAgYWRkVGhlbWVUb0FuZ3VsYXJKc29uKCksXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBtZXJnZUZpbGVzKG9wdGlvbnM6IElTY2hlbWEpOiBSdWxlIHtcbiAgY29uc3QgdGVtcGxhdGVTb3VyY2U6IGFueSA9IGFwcGx5KHVybCgnLi9maWxlcycpLCBbXG4gICAgdGVtcGxhdGUoe1xuICAgICAgLi4uc3RyaW5ncyxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfSksXG4gIF0pO1xuICByZXR1cm4gYnJhbmNoQW5kTWVyZ2UobWVyZ2VXaXRoKHRlbXBsYXRlU291cmNlKSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRoZW1lVG9Bbmd1bGFySnNvbigpOiBSdWxlIHtcbiAgcmV0dXJuIChob3N0OiBUcmVlKSA9PiB7XG4gICAgY29uc3Qgd29ya3NwYWNlOiBXb3Jrc3BhY2VTY2hlbWEgPSBnZXRXb3Jrc3BhY2UoaG9zdCk7XG4gICAgY29uc3QgcHJvamVjdDogV29ya3NwYWNlUHJvamVjdCA9IGdldFByb2plY3RGcm9tV29ya3NwYWNlKHdvcmtzcGFjZSk7XG4gICAgY29uc3QgdGFyZ2V0T3B0aW9uczogYW55ID0gZ2V0UHJvamVjdFRhcmdldE9wdGlvbnMocHJvamVjdCwgJ2J1aWxkJyk7XG4gICAgY29uc3QgYXNzZXRQYXRoOiBzdHJpbmcgPSBgc3JjL3RoZW1lLnNjc3NgO1xuICAgIGNvbnN0IHByZWJ1aWx0VGhlbWVQYXRoU2VnbWVudDogc3RyaW5nID0gYHNyYy9zdHlsZXMuc2Nzc2A7XG5cbiAgICBpZiAoIXRhcmdldE9wdGlvbnMuc3R5bGVzKSB7XG4gICAgICB0YXJnZXRPcHRpb25zLnN0eWxlcyA9IFthc3NldFBhdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBleGlzdGluZ1N0eWxlczogYW55ID0gdGFyZ2V0T3B0aW9ucy5zdHlsZXMubWFwKChzOiBhbnkpID0+ICh0eXBlb2YgcyA9PT0gJ3N0cmluZycgPyBzIDogcy5pbnB1dCkpO1xuXG4gICAgICBmb3IgKGxldCBbaW5kZXgsIHN0eWxlUGF0aF0gb2YgZXhpc3RpbmdTdHlsZXMuZW50cmllcygpKSB7XG4gICAgICAgIGlmIChzdHlsZVBhdGggPT09IGFzc2V0UGF0aCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3R5bGVQYXRoLmluY2x1ZGVzKHByZWJ1aWx0VGhlbWVQYXRoU2VnbWVudCkpIHtcbiAgICAgICAgICB0YXJnZXRPcHRpb25zLnN0eWxlcy5zcGxpY2UoaW5kZXgsIDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0YXJnZXRPcHRpb25zLnN0eWxlcy51bnNoaWZ0KGFzc2V0UGF0aCk7XG4gICAgfVxuICAgIGhvc3Qub3ZlcndyaXRlKCdhbmd1bGFyLmpzb24nLCBKU09OLnN0cmluZ2lmeSh3b3Jrc3BhY2UsIHVuZGVmaW5lZCwgMikpO1xuICAgIHJldHVybiBob3N0O1xuICB9O1xufVxuIl19