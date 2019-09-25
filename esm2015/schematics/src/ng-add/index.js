/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { chain, mergeWith, url, apply, branchAndMerge, template } from '@angular-devkit/schematics';
import { addPackageToPackageJson } from '@angular/material/schematics/ng-add/package-config';
import { covalentCoreVersion, materialVersion } from './version-names';
import { DynamicForms, Http, Highlight, Markdown, FlavoredMarkdown, TextEditor, CodeEditor, } from './components';
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
                new TextEditor(),
                new CodeEditor(),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsLyIsInNvdXJjZXMiOlsic2NoZW1hdGljcy9zcmMvbmctYWRkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQVEsS0FBSyxFQUFRLFNBQVMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUU3RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkUsT0FBTyxFQUVMLFlBQVksRUFDWixJQUFJLEVBQ0osU0FBUyxFQUNULFFBQVEsRUFDUixnQkFBZ0IsRUFDaEIsVUFBVSxFQUNWLFVBQVUsR0FDWCxNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLHVCQUF1QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7OztBQUdsRSxNQUFNLFVBQVUsdUJBQXVCLENBQUMsT0FBZ0I7SUFDdEQsT0FBTyxLQUFLLENBQUM7Ozs7O1FBQ1gsQ0FBQyxJQUFVLEVBQUUsRUFBRTtZQUNiLHVCQUF1QixDQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBRSxJQUFJLGVBQWUsRUFBRSxDQUFDLENBQUM7WUFDMUUsdUJBQXVCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLElBQUksbUJBQW1CLEVBQUUsQ0FBQyxDQUFDOztnQkFFdkUsVUFBVSxHQUFpQjtnQkFDN0IsSUFBSSxZQUFZLEVBQUU7Z0JBQ2xCLElBQUksSUFBSSxFQUFFO2dCQUNWLElBQUksU0FBUyxFQUFFO2dCQUNmLElBQUksUUFBUSxFQUFFO2dCQUNkLElBQUksZ0JBQWdCLEVBQUU7Z0JBQ3RCLElBQUksVUFBVSxFQUFFO2dCQUNoQixJQUFJLFVBQVUsRUFBRTthQUNqQjtZQUVELFVBQVUsQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxTQUFxQixFQUFFLEVBQUU7Z0JBQzNDLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDOUIsdUJBQXVCLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLG1CQUFtQixFQUFFLENBQUMsQ0FBQztpQkFDbEY7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUM7UUFDRCxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQ25CLHFCQUFxQixFQUFFO0tBQ3hCLENBQUMsQ0FBQztBQUNMLENBQUM7Ozs7O0FBRUQsU0FBUyxVQUFVLENBQUMsT0FBZ0I7O1VBQzVCLGNBQWMsR0FBUSxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQ2hELFFBQVEsbUJBQ0gsT0FBTyxFQUNQLE9BQU8sRUFDVjtLQUNILENBQUM7SUFDRixPQUFPLGNBQWMsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztBQUNuRCxDQUFDOzs7O0FBRUQsU0FBUyxxQkFBcUI7SUFDNUI7Ozs7SUFBTyxDQUFDLElBQVUsRUFBRSxFQUFFOztjQUNkLFNBQVMsR0FBMkMsWUFBWSxDQUFDLElBQUksQ0FBQzs7Y0FDdEUsT0FBTyxHQUE0Qyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7O2NBQ3JGLGFBQWEsR0FBUSx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDOztjQUM5RCxTQUFTLEdBQVcsZ0JBQWdCOztjQUNwQyx3QkFBd0IsR0FBVyxpQkFBaUI7UUFFMUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7WUFDekIsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3BDO2FBQU07O2tCQUNDLGNBQWMsR0FBUSxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFDO1lBRXZHLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsSUFBSSxjQUFjLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ3ZELElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtvQkFDM0IsT0FBTztpQkFDUjtnQkFDRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsd0JBQXdCLENBQUMsRUFBRTtvQkFDaEQsYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUN2QzthQUNGO1lBQ0QsYUFBYSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDekM7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUMsRUFBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSdWxlLCBjaGFpbiwgVHJlZSwgbWVyZ2VXaXRoLCB1cmwsIGFwcGx5LCBicmFuY2hBbmRNZXJnZSwgdGVtcGxhdGUgfSBmcm9tICdAYW5ndWxhci1kZXZraXQvc2NoZW1hdGljcyc7XG5pbXBvcnQgeyBhZGRQYWNrYWdlVG9QYWNrYWdlSnNvbiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NjaGVtYXRpY3MvbmctYWRkL3BhY2thZ2UtY29uZmlnJztcbmltcG9ydCB7IElTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5pbXBvcnQgeyBjb3ZhbGVudENvcmVWZXJzaW9uLCBtYXRlcmlhbFZlcnNpb24gfSBmcm9tICcuL3ZlcnNpb24tbmFtZXMnO1xuaW1wb3J0IHtcbiAgSUNvbXBvbmVudCxcbiAgRHluYW1pY0Zvcm1zLFxuICBIdHRwLFxuICBIaWdobGlnaHQsXG4gIE1hcmtkb3duLFxuICBGbGF2b3JlZE1hcmtkb3duLFxuICBUZXh0RWRpdG9yLFxuICBDb2RlRWRpdG9yLFxufSBmcm9tICcuL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgc3RyaW5ncyB9IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9jb3JlJztcbmltcG9ydCB7IGdldFByb2plY3RGcm9tV29ya3NwYWNlLCBnZXRQcm9qZWN0VGFyZ2V0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY2hlbWF0aWNzJztcbmltcG9ydCB7IGdldFdvcmtzcGFjZSB9IGZyb20gJ0BzY2hlbWF0aWNzL2FuZ3VsYXIvdXRpbGl0eS9jb25maWcnO1xuaW1wb3J0IHsgZXhwZXJpbWVudGFsIH0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L2NvcmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkRGVwZW5kZW5jaWVzQW5kRmlsZXMob3B0aW9uczogSVNjaGVtYSk6IFJ1bGUge1xuICByZXR1cm4gY2hhaW4oW1xuICAgIChob3N0OiBUcmVlKSA9PiB7XG4gICAgICBhZGRQYWNrYWdlVG9QYWNrYWdlSnNvbihob3N0LCAnQGFuZ3VsYXIvbWF0ZXJpYWwnLCBgfiR7bWF0ZXJpYWxWZXJzaW9ufWApO1xuICAgICAgYWRkUGFja2FnZVRvUGFja2FnZUpzb24oaG9zdCwgJ0Bjb3ZhbGVudC9jb3JlJywgYH4ke2NvdmFsZW50Q29yZVZlcnNpb259YCk7XG5cbiAgICAgIGxldCBjb21wb25lbnRzOiBJQ29tcG9uZW50W10gPSBbXG4gICAgICAgIG5ldyBEeW5hbWljRm9ybXMoKSxcbiAgICAgICAgbmV3IEh0dHAoKSxcbiAgICAgICAgbmV3IEhpZ2hsaWdodCgpLFxuICAgICAgICBuZXcgTWFya2Rvd24oKSxcbiAgICAgICAgbmV3IEZsYXZvcmVkTWFya2Rvd24oKSxcbiAgICAgICAgbmV3IFRleHRFZGl0b3IoKSxcbiAgICAgICAgbmV3IENvZGVFZGl0b3IoKSxcbiAgICAgIF07XG5cbiAgICAgIGNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50OiBJQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIGlmIChjb21wb25lbnQuZW5hYmxlZChvcHRpb25zKSkge1xuICAgICAgICAgIGFkZFBhY2thZ2VUb1BhY2thZ2VKc29uKGhvc3QsIGNvbXBvbmVudC5kZXBlbmRlbmN5KCksIGB+JHtjb3ZhbGVudENvcmVWZXJzaW9ufWApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIG1lcmdlRmlsZXMob3B0aW9ucyksXG4gICAgYWRkVGhlbWVUb0FuZ3VsYXJKc29uKCksXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBtZXJnZUZpbGVzKG9wdGlvbnM6IElTY2hlbWEpOiBSdWxlIHtcbiAgY29uc3QgdGVtcGxhdGVTb3VyY2U6IGFueSA9IGFwcGx5KHVybCgnLi9maWxlcycpLCBbXG4gICAgdGVtcGxhdGUoe1xuICAgICAgLi4uc3RyaW5ncyxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfSksXG4gIF0pO1xuICByZXR1cm4gYnJhbmNoQW5kTWVyZ2UobWVyZ2VXaXRoKHRlbXBsYXRlU291cmNlKSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRoZW1lVG9Bbmd1bGFySnNvbigpOiBSdWxlIHtcbiAgcmV0dXJuIChob3N0OiBUcmVlKSA9PiB7XG4gICAgY29uc3Qgd29ya3NwYWNlOiBleHBlcmltZW50YWwud29ya3NwYWNlLldvcmtzcGFjZVNjaGVtYSA9IGdldFdvcmtzcGFjZShob3N0KTtcbiAgICBjb25zdCBwcm9qZWN0OiBleHBlcmltZW50YWwud29ya3NwYWNlLldvcmtzcGFjZVByb2plY3QgPSBnZXRQcm9qZWN0RnJvbVdvcmtzcGFjZSh3b3Jrc3BhY2UpO1xuICAgIGNvbnN0IHRhcmdldE9wdGlvbnM6IGFueSA9IGdldFByb2plY3RUYXJnZXRPcHRpb25zKHByb2plY3QsICdidWlsZCcpO1xuICAgIGNvbnN0IGFzc2V0UGF0aDogc3RyaW5nID0gYHNyYy90aGVtZS5zY3NzYDtcbiAgICBjb25zdCBwcmVidWlsdFRoZW1lUGF0aFNlZ21lbnQ6IHN0cmluZyA9IGBzcmMvc3R5bGVzLnNjc3NgO1xuXG4gICAgaWYgKCF0YXJnZXRPcHRpb25zLnN0eWxlcykge1xuICAgICAgdGFyZ2V0T3B0aW9ucy5zdHlsZXMgPSBbYXNzZXRQYXRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZXhpc3RpbmdTdHlsZXM6IGFueSA9IHRhcmdldE9wdGlvbnMuc3R5bGVzLm1hcCgoczogYW55KSA9PiAodHlwZW9mIHMgPT09ICdzdHJpbmcnID8gcyA6IHMuaW5wdXQpKTtcblxuICAgICAgZm9yIChsZXQgW2luZGV4LCBzdHlsZVBhdGhdIG9mIGV4aXN0aW5nU3R5bGVzLmVudHJpZXMoKSkge1xuICAgICAgICBpZiAoc3R5bGVQYXRoID09PSBhc3NldFBhdGgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0eWxlUGF0aC5pbmNsdWRlcyhwcmVidWlsdFRoZW1lUGF0aFNlZ21lbnQpKSB7XG4gICAgICAgICAgdGFyZ2V0T3B0aW9ucy5zdHlsZXMuc3BsaWNlKGluZGV4LCAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGFyZ2V0T3B0aW9ucy5zdHlsZXMudW5zaGlmdChhc3NldFBhdGgpO1xuICAgIH1cbiAgICBob3N0Lm92ZXJ3cml0ZSgnYW5ndWxhci5qc29uJywgSlNPTi5zdHJpbmdpZnkod29ya3NwYWNlLCB1bmRlZmluZWQsIDIpKTtcbiAgICByZXR1cm4gaG9zdDtcbiAgfTtcbn1cbiJdfQ==