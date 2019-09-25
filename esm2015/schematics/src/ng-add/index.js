/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { chain, mergeWith, url, apply, branchAndMerge, template } from '@angular-devkit/schematics';
import { addPackageToPackageJson } from '@angular/material/schematics/ng-add/package-config';
import { covalentCoreVersion, materialVersion } from './version-names';
import { DynamicForms, Http, Highlight, Markdown, FlavoredMarkdown, CodeEditor } from './components';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsLyIsInNvdXJjZXMiOlsic2NoZW1hdGljcy9zcmMvbmctYWRkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQVEsS0FBSyxFQUFRLFNBQVMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUU3RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkUsT0FBTyxFQUFjLFlBQVksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDakgsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7QUFHbEUsTUFBTSxVQUFVLHVCQUF1QixDQUFDLE9BQWdCO0lBQ3RELE9BQU8sS0FBSyxDQUFDOzs7OztRQUNYLENBQUMsSUFBVSxFQUFFLEVBQUU7WUFDYix1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxlQUFlLEVBQUUsQ0FBQyxDQUFDO1lBQzFFLHVCQUF1QixDQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLG1CQUFtQixFQUFFLENBQUMsQ0FBQzs7Z0JBRXZFLFVBQVUsR0FBaUI7Z0JBQzdCLElBQUksWUFBWSxFQUFFO2dCQUNsQixJQUFJLElBQUksRUFBRTtnQkFDVixJQUFJLFNBQVMsRUFBRTtnQkFDZixJQUFJLFFBQVEsRUFBRTtnQkFDZCxJQUFJLGdCQUFnQixFQUFFO2dCQUN0QixJQUFJLFVBQVUsRUFBRTthQUNqQjtZQUVELFVBQVUsQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxTQUFxQixFQUFFLEVBQUU7Z0JBQzNDLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDOUIsdUJBQXVCLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLG1CQUFtQixFQUFFLENBQUMsQ0FBQztpQkFDbEY7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUM7UUFDRCxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQ25CLHFCQUFxQixFQUFFO0tBQ3hCLENBQUMsQ0FBQztBQUNMLENBQUM7Ozs7O0FBRUQsU0FBUyxVQUFVLENBQUMsT0FBZ0I7O1VBQzVCLGNBQWMsR0FBUSxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQ2hELFFBQVEsbUJBQ0gsT0FBTyxFQUNQLE9BQU8sRUFDVjtLQUNILENBQUM7SUFDRixPQUFPLGNBQWMsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztBQUNuRCxDQUFDOzs7O0FBRUQsU0FBUyxxQkFBcUI7SUFDNUI7Ozs7SUFBTyxDQUFDLElBQVUsRUFBRSxFQUFFOztjQUNkLFNBQVMsR0FBMkMsWUFBWSxDQUFDLElBQUksQ0FBQzs7Y0FDdEUsT0FBTyxHQUE0Qyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7O2NBQ3JGLGFBQWEsR0FBUSx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDOztjQUM5RCxTQUFTLEdBQVcsZ0JBQWdCOztjQUNwQyx3QkFBd0IsR0FBVyxpQkFBaUI7UUFFMUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7WUFDekIsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3BDO2FBQU07O2tCQUNDLGNBQWMsR0FBUSxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFDO1lBRXZHLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsSUFBSSxjQUFjLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ3ZELElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtvQkFDM0IsT0FBTztpQkFDUjtnQkFDRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsd0JBQXdCLENBQUMsRUFBRTtvQkFDaEQsYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUN2QzthQUNGO1lBQ0QsYUFBYSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDekM7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUMsRUFBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSdWxlLCBjaGFpbiwgVHJlZSwgbWVyZ2VXaXRoLCB1cmwsIGFwcGx5LCBicmFuY2hBbmRNZXJnZSwgdGVtcGxhdGUgfSBmcm9tICdAYW5ndWxhci1kZXZraXQvc2NoZW1hdGljcyc7XG5pbXBvcnQgeyBhZGRQYWNrYWdlVG9QYWNrYWdlSnNvbiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NjaGVtYXRpY3MvbmctYWRkL3BhY2thZ2UtY29uZmlnJztcbmltcG9ydCB7IElTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5pbXBvcnQgeyBjb3ZhbGVudENvcmVWZXJzaW9uLCBtYXRlcmlhbFZlcnNpb24gfSBmcm9tICcuL3ZlcnNpb24tbmFtZXMnO1xuaW1wb3J0IHsgSUNvbXBvbmVudCwgRHluYW1pY0Zvcm1zLCBIdHRwLCBIaWdobGlnaHQsIE1hcmtkb3duLCBGbGF2b3JlZE1hcmtkb3duLCBDb2RlRWRpdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzJztcbmltcG9ydCB7IHN0cmluZ3MgfSBmcm9tICdAYW5ndWxhci1kZXZraXQvY29yZSc7XG5pbXBvcnQgeyBnZXRQcm9qZWN0RnJvbVdvcmtzcGFjZSwgZ2V0UHJvamVjdFRhcmdldE9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9jZGsvc2NoZW1hdGljcyc7XG5pbXBvcnQgeyBnZXRXb3Jrc3BhY2UgfSBmcm9tICdAc2NoZW1hdGljcy9hbmd1bGFyL3V0aWxpdHkvY29uZmlnJztcbmltcG9ydCB7IGV4cGVyaW1lbnRhbCB9IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERlcGVuZGVuY2llc0FuZEZpbGVzKG9wdGlvbnM6IElTY2hlbWEpOiBSdWxlIHtcbiAgcmV0dXJuIGNoYWluKFtcbiAgICAoaG9zdDogVHJlZSkgPT4ge1xuICAgICAgYWRkUGFja2FnZVRvUGFja2FnZUpzb24oaG9zdCwgJ0Bhbmd1bGFyL21hdGVyaWFsJywgYH4ke21hdGVyaWFsVmVyc2lvbn1gKTtcbiAgICAgIGFkZFBhY2thZ2VUb1BhY2thZ2VKc29uKGhvc3QsICdAY292YWxlbnQvY29yZScsIGB+JHtjb3ZhbGVudENvcmVWZXJzaW9ufWApO1xuXG4gICAgICBsZXQgY29tcG9uZW50czogSUNvbXBvbmVudFtdID0gW1xuICAgICAgICBuZXcgRHluYW1pY0Zvcm1zKCksXG4gICAgICAgIG5ldyBIdHRwKCksXG4gICAgICAgIG5ldyBIaWdobGlnaHQoKSxcbiAgICAgICAgbmV3IE1hcmtkb3duKCksXG4gICAgICAgIG5ldyBGbGF2b3JlZE1hcmtkb3duKCksXG4gICAgICAgIG5ldyBDb2RlRWRpdG9yKCksXG4gICAgICBdO1xuXG4gICAgICBjb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudDogSUNvbXBvbmVudCkgPT4ge1xuICAgICAgICBpZiAoY29tcG9uZW50LmVuYWJsZWQob3B0aW9ucykpIHtcbiAgICAgICAgICBhZGRQYWNrYWdlVG9QYWNrYWdlSnNvbihob3N0LCBjb21wb25lbnQuZGVwZW5kZW5jeSgpLCBgfiR7Y292YWxlbnRDb3JlVmVyc2lvbn1gKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBtZXJnZUZpbGVzKG9wdGlvbnMpLFxuICAgIGFkZFRoZW1lVG9Bbmd1bGFySnNvbigpLFxuICBdKTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VGaWxlcyhvcHRpb25zOiBJU2NoZW1hKTogUnVsZSB7XG4gIGNvbnN0IHRlbXBsYXRlU291cmNlOiBhbnkgPSBhcHBseSh1cmwoJy4vZmlsZXMnKSwgW1xuICAgIHRlbXBsYXRlKHtcbiAgICAgIC4uLnN0cmluZ3MsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH0pLFxuICBdKTtcbiAgcmV0dXJuIGJyYW5jaEFuZE1lcmdlKG1lcmdlV2l0aCh0ZW1wbGF0ZVNvdXJjZSkpO1xufVxuXG5mdW5jdGlvbiBhZGRUaGVtZVRvQW5ndWxhckpzb24oKTogUnVsZSB7XG4gIHJldHVybiAoaG9zdDogVHJlZSkgPT4ge1xuICAgIGNvbnN0IHdvcmtzcGFjZTogZXhwZXJpbWVudGFsLndvcmtzcGFjZS5Xb3Jrc3BhY2VTY2hlbWEgPSBnZXRXb3Jrc3BhY2UoaG9zdCk7XG4gICAgY29uc3QgcHJvamVjdDogZXhwZXJpbWVudGFsLndvcmtzcGFjZS5Xb3Jrc3BhY2VQcm9qZWN0ID0gZ2V0UHJvamVjdEZyb21Xb3Jrc3BhY2Uod29ya3NwYWNlKTtcbiAgICBjb25zdCB0YXJnZXRPcHRpb25zOiBhbnkgPSBnZXRQcm9qZWN0VGFyZ2V0T3B0aW9ucyhwcm9qZWN0LCAnYnVpbGQnKTtcbiAgICBjb25zdCBhc3NldFBhdGg6IHN0cmluZyA9IGBzcmMvdGhlbWUuc2Nzc2A7XG4gICAgY29uc3QgcHJlYnVpbHRUaGVtZVBhdGhTZWdtZW50OiBzdHJpbmcgPSBgc3JjL3N0eWxlcy5zY3NzYDtcblxuICAgIGlmICghdGFyZ2V0T3B0aW9ucy5zdHlsZXMpIHtcbiAgICAgIHRhcmdldE9wdGlvbnMuc3R5bGVzID0gW2Fzc2V0UGF0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nU3R5bGVzOiBhbnkgPSB0YXJnZXRPcHRpb25zLnN0eWxlcy5tYXAoKHM6IGFueSkgPT4gKHR5cGVvZiBzID09PSAnc3RyaW5nJyA/IHMgOiBzLmlucHV0KSk7XG5cbiAgICAgIGZvciAobGV0IFtpbmRleCwgc3R5bGVQYXRoXSBvZiBleGlzdGluZ1N0eWxlcy5lbnRyaWVzKCkpIHtcbiAgICAgICAgaWYgKHN0eWxlUGF0aCA9PT0gYXNzZXRQYXRoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdHlsZVBhdGguaW5jbHVkZXMocHJlYnVpbHRUaGVtZVBhdGhTZWdtZW50KSkge1xuICAgICAgICAgIHRhcmdldE9wdGlvbnMuc3R5bGVzLnNwbGljZShpbmRleCwgMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRhcmdldE9wdGlvbnMuc3R5bGVzLnVuc2hpZnQoYXNzZXRQYXRoKTtcbiAgICB9XG4gICAgaG9zdC5vdmVyd3JpdGUoJ2FuZ3VsYXIuanNvbicsIEpTT04uc3RyaW5naWZ5KHdvcmtzcGFjZSwgdW5kZWZpbmVkLCAyKSk7XG4gICAgcmV0dXJuIGhvc3Q7XG4gIH07XG59XG4iXX0=