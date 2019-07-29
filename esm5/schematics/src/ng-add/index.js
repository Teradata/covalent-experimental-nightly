/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
        function (host) {
            addPackageToPackageJson(host, '@angular/material', "~" + materialVersion);
            addPackageToPackageJson(host, '@covalent/core', "~" + covalentCoreVersion);
            /** @type {?} */
            var components = [
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
            function (component) {
                if (component.enabled(options)) {
                    addPackageToPackageJson(host, component.dependency(), "~" + covalentCoreVersion);
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
    var templateSource = apply(url('./files'), [
        template(tslib_1.__assign({}, strings, options)),
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
    function (host) {
        var e_1, _a;
        /** @type {?} */
        var workspace = getWorkspace(host);
        /** @type {?} */
        var project = getProjectFromWorkspace(workspace);
        /** @type {?} */
        var targetOptions = getProjectTargetOptions(project, 'build');
        /** @type {?} */
        var assetPath = "src/theme.scss";
        /** @type {?} */
        var prebuiltThemePathSegment = "src/styles.scss";
        if (!targetOptions.styles) {
            targetOptions.styles = [assetPath];
        }
        else {
            /** @type {?} */
            var existingStyles = targetOptions.styles.map((/**
             * @param {?} s
             * @return {?}
             */
            function (s) { return (typeof s === 'string' ? s : s.input); }));
            try {
                for (var _b = tslib_1.__values(existingStyles.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = tslib_1.__read(_c.value, 2), index = _d[0], stylePath = _d[1];
                    if (stylePath === assetPath) {
                        return;
                    }
                    if (stylePath.includes(prebuiltThemePathSegment)) {
                        targetOptions.styles.splice(index, 0);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            targetOptions.styles.unshift(assetPath);
        }
        host.overwrite('angular.json', JSON.stringify(workspace, undefined, 2));
        return host;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsLyIsInNvdXJjZXMiOlsic2NoZW1hdGljcy9zcmMvbmctYWRkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFRLEtBQUssRUFBUSxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFN0YsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZFLE9BQU8sRUFBYyxZQUFZLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDckcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7QUFHbEUsTUFBTSxVQUFVLHVCQUF1QixDQUFDLE9BQWdCO0lBQ3RELE9BQU8sS0FBSyxDQUFDOzs7OztRQUNYLFVBQUMsSUFBVTtZQUNULHVCQUF1QixDQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBRSxNQUFJLGVBQWlCLENBQUMsQ0FBQztZQUMxRSx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBSSxtQkFBcUIsQ0FBQyxDQUFDOztnQkFFdkUsVUFBVSxHQUFpQjtnQkFDN0IsSUFBSSxZQUFZLEVBQUU7Z0JBQ2xCLElBQUksSUFBSSxFQUFFO2dCQUNWLElBQUksU0FBUyxFQUFFO2dCQUNmLElBQUksUUFBUSxFQUFFO2dCQUNkLElBQUksZ0JBQWdCLEVBQUU7YUFDdkI7WUFFRCxVQUFVLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsU0FBcUI7Z0JBQ3ZDLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDOUIsdUJBQXVCLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFJLG1CQUFxQixDQUFDLENBQUM7aUJBQ2xGO1lBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0QsVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUNuQixxQkFBcUIsRUFBRTtLQUN4QixDQUFDLENBQUM7QUFDTCxDQUFDOzs7OztBQUVELFNBQVMsVUFBVSxDQUFDLE9BQWdCOztRQUM1QixjQUFjLEdBQVEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUNoRCxRQUFRLHNCQUNILE9BQU8sRUFDUCxPQUFPLEVBQ1Y7S0FDSCxDQUFDO0lBQ0YsT0FBTyxjQUFjLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFDbkQsQ0FBQzs7OztBQUVELFNBQVMscUJBQXFCO0lBQzVCOzs7O0lBQU8sVUFBQyxJQUFVOzs7WUFDVixTQUFTLEdBQTJDLFlBQVksQ0FBQyxJQUFJLENBQUM7O1lBQ3RFLE9BQU8sR0FBNEMsdUJBQXVCLENBQUMsU0FBUyxDQUFDOztZQUNyRixhQUFhLEdBQVEsdUJBQXVCLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQzs7WUFDOUQsU0FBUyxHQUFXLGdCQUFnQjs7WUFDcEMsd0JBQXdCLEdBQVcsaUJBQWlCO1FBRTFELElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO1lBQ3pCLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNwQzthQUFNOztnQkFDQyxjQUFjLEdBQVEsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQyxDQUFNLElBQUssT0FBQSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLEVBQUM7O2dCQUV2RyxLQUErQixJQUFBLEtBQUEsaUJBQUEsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFBLGdCQUFBLDRCQUFFO29CQUFoRCxJQUFBLGdDQUFrQixFQUFqQixhQUFLLEVBQUUsaUJBQVM7b0JBQ3hCLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTt3QkFDM0IsT0FBTztxQkFDUjtvQkFDRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsd0JBQXdCLENBQUMsRUFBRTt3QkFDaEQsYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO3FCQUN2QztpQkFDRjs7Ozs7Ozs7O1lBQ0QsYUFBYSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDekM7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUMsRUFBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSdWxlLCBjaGFpbiwgVHJlZSwgbWVyZ2VXaXRoLCB1cmwsIGFwcGx5LCBicmFuY2hBbmRNZXJnZSwgdGVtcGxhdGUgfSBmcm9tICdAYW5ndWxhci1kZXZraXQvc2NoZW1hdGljcyc7XG5pbXBvcnQgeyBhZGRQYWNrYWdlVG9QYWNrYWdlSnNvbiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NjaGVtYXRpY3MvbmctYWRkL3BhY2thZ2UtY29uZmlnJztcbmltcG9ydCB7IElTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5pbXBvcnQgeyBjb3ZhbGVudENvcmVWZXJzaW9uLCBtYXRlcmlhbFZlcnNpb24gfSBmcm9tICcuL3ZlcnNpb24tbmFtZXMnO1xuaW1wb3J0IHsgSUNvbXBvbmVudCwgRHluYW1pY0Zvcm1zLCBIdHRwLCBIaWdobGlnaHQsIE1hcmtkb3duLCBGbGF2b3JlZE1hcmtkb3duIH0gZnJvbSAnLi9jb21wb25lbnRzJztcbmltcG9ydCB7IHN0cmluZ3MgfSBmcm9tICdAYW5ndWxhci1kZXZraXQvY29yZSc7XG5pbXBvcnQgeyBnZXRQcm9qZWN0RnJvbVdvcmtzcGFjZSwgZ2V0UHJvamVjdFRhcmdldE9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9jZGsvc2NoZW1hdGljcyc7XG5pbXBvcnQgeyBnZXRXb3Jrc3BhY2UgfSBmcm9tICdAc2NoZW1hdGljcy9hbmd1bGFyL3V0aWxpdHkvY29uZmlnJztcbmltcG9ydCB7IGV4cGVyaW1lbnRhbCB9IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERlcGVuZGVuY2llc0FuZEZpbGVzKG9wdGlvbnM6IElTY2hlbWEpOiBSdWxlIHtcbiAgcmV0dXJuIGNoYWluKFtcbiAgICAoaG9zdDogVHJlZSkgPT4ge1xuICAgICAgYWRkUGFja2FnZVRvUGFja2FnZUpzb24oaG9zdCwgJ0Bhbmd1bGFyL21hdGVyaWFsJywgYH4ke21hdGVyaWFsVmVyc2lvbn1gKTtcbiAgICAgIGFkZFBhY2thZ2VUb1BhY2thZ2VKc29uKGhvc3QsICdAY292YWxlbnQvY29yZScsIGB+JHtjb3ZhbGVudENvcmVWZXJzaW9ufWApO1xuXG4gICAgICBsZXQgY29tcG9uZW50czogSUNvbXBvbmVudFtdID0gW1xuICAgICAgICBuZXcgRHluYW1pY0Zvcm1zKCksXG4gICAgICAgIG5ldyBIdHRwKCksXG4gICAgICAgIG5ldyBIaWdobGlnaHQoKSxcbiAgICAgICAgbmV3IE1hcmtkb3duKCksXG4gICAgICAgIG5ldyBGbGF2b3JlZE1hcmtkb3duKCksXG4gICAgICBdO1xuXG4gICAgICBjb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudDogSUNvbXBvbmVudCkgPT4ge1xuICAgICAgICBpZiAoY29tcG9uZW50LmVuYWJsZWQob3B0aW9ucykpIHtcbiAgICAgICAgICBhZGRQYWNrYWdlVG9QYWNrYWdlSnNvbihob3N0LCBjb21wb25lbnQuZGVwZW5kZW5jeSgpLCBgfiR7Y292YWxlbnRDb3JlVmVyc2lvbn1gKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBtZXJnZUZpbGVzKG9wdGlvbnMpLFxuICAgIGFkZFRoZW1lVG9Bbmd1bGFySnNvbigpLFxuICBdKTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VGaWxlcyhvcHRpb25zOiBJU2NoZW1hKTogUnVsZSB7XG4gIGNvbnN0IHRlbXBsYXRlU291cmNlOiBhbnkgPSBhcHBseSh1cmwoJy4vZmlsZXMnKSwgW1xuICAgIHRlbXBsYXRlKHtcbiAgICAgIC4uLnN0cmluZ3MsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH0pLFxuICBdKTtcbiAgcmV0dXJuIGJyYW5jaEFuZE1lcmdlKG1lcmdlV2l0aCh0ZW1wbGF0ZVNvdXJjZSkpO1xufVxuXG5mdW5jdGlvbiBhZGRUaGVtZVRvQW5ndWxhckpzb24oKTogUnVsZSB7XG4gIHJldHVybiAoaG9zdDogVHJlZSkgPT4ge1xuICAgIGNvbnN0IHdvcmtzcGFjZTogZXhwZXJpbWVudGFsLndvcmtzcGFjZS5Xb3Jrc3BhY2VTY2hlbWEgPSBnZXRXb3Jrc3BhY2UoaG9zdCk7XG4gICAgY29uc3QgcHJvamVjdDogZXhwZXJpbWVudGFsLndvcmtzcGFjZS5Xb3Jrc3BhY2VQcm9qZWN0ID0gZ2V0UHJvamVjdEZyb21Xb3Jrc3BhY2Uod29ya3NwYWNlKTtcbiAgICBjb25zdCB0YXJnZXRPcHRpb25zOiBhbnkgPSBnZXRQcm9qZWN0VGFyZ2V0T3B0aW9ucyhwcm9qZWN0LCAnYnVpbGQnKTtcbiAgICBjb25zdCBhc3NldFBhdGg6IHN0cmluZyA9IGBzcmMvdGhlbWUuc2Nzc2A7XG4gICAgY29uc3QgcHJlYnVpbHRUaGVtZVBhdGhTZWdtZW50OiBzdHJpbmcgPSBgc3JjL3N0eWxlcy5zY3NzYDtcblxuICAgIGlmICghdGFyZ2V0T3B0aW9ucy5zdHlsZXMpIHtcbiAgICAgIHRhcmdldE9wdGlvbnMuc3R5bGVzID0gW2Fzc2V0UGF0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nU3R5bGVzOiBhbnkgPSB0YXJnZXRPcHRpb25zLnN0eWxlcy5tYXAoKHM6IGFueSkgPT4gKHR5cGVvZiBzID09PSAnc3RyaW5nJyA/IHMgOiBzLmlucHV0KSk7XG5cbiAgICAgIGZvciAobGV0IFtpbmRleCwgc3R5bGVQYXRoXSBvZiBleGlzdGluZ1N0eWxlcy5lbnRyaWVzKCkpIHtcbiAgICAgICAgaWYgKHN0eWxlUGF0aCA9PT0gYXNzZXRQYXRoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdHlsZVBhdGguaW5jbHVkZXMocHJlYnVpbHRUaGVtZVBhdGhTZWdtZW50KSkge1xuICAgICAgICAgIHRhcmdldE9wdGlvbnMuc3R5bGVzLnNwbGljZShpbmRleCwgMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRhcmdldE9wdGlvbnMuc3R5bGVzLnVuc2hpZnQoYXNzZXRQYXRoKTtcbiAgICB9XG4gICAgaG9zdC5vdmVyd3JpdGUoJ2FuZ3VsYXIuanNvbicsIEpTT04uc3RyaW5naWZ5KHdvcmtzcGFjZSwgdW5kZWZpbmVkLCAyKSk7XG4gICAgcmV0dXJuIGhvc3Q7XG4gIH07XG59XG4iXX0=