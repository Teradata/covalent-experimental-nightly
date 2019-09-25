/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { chain, mergeWith, url, apply, branchAndMerge, template } from '@angular-devkit/schematics';
import { addPackageToPackageJson } from '@angular/material/schematics/ng-add/package-config';
import { covalentCoreVersion, materialVersion } from './version-names';
import { DynamicForms, Http, Highlight, Markdown, FlavoredMarkdown, Echarts, TextEditor, CodeEditor, } from './components';
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
                new Echarts(),
                new TextEditor(),
                new CodeEditor(),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsLyIsInNvdXJjZXMiOlsic2NoZW1hdGljcy9zcmMvbmctYWRkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFRLEtBQUssRUFBUSxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFN0YsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZFLE9BQU8sRUFFTCxZQUFZLEVBQ1osSUFBSSxFQUNKLFNBQVMsRUFDVCxRQUFRLEVBQ1IsZ0JBQWdCLEVBQ2hCLE9BQU8sRUFDUCxVQUFVLEVBQ1YsVUFBVSxHQUNYLE1BQU0sY0FBYyxDQUFDO0FBQ3RCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7Ozs7O0FBR2xFLE1BQU0sVUFBVSx1QkFBdUIsQ0FBQyxPQUFnQjtJQUN0RCxPQUFPLEtBQUssQ0FBQzs7Ozs7UUFDWCxVQUFDLElBQVU7WUFDVCx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsTUFBSSxlQUFpQixDQUFDLENBQUM7WUFDMUUsdUJBQXVCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQUksbUJBQXFCLENBQUMsQ0FBQzs7Z0JBRXZFLFVBQVUsR0FBaUI7Z0JBQzdCLElBQUksWUFBWSxFQUFFO2dCQUNsQixJQUFJLElBQUksRUFBRTtnQkFDVixJQUFJLFNBQVMsRUFBRTtnQkFDZixJQUFJLFFBQVEsRUFBRTtnQkFDZCxJQUFJLGdCQUFnQixFQUFFO2dCQUN0QixJQUFJLE9BQU8sRUFBRTtnQkFDYixJQUFJLFVBQVUsRUFBRTtnQkFDaEIsSUFBSSxVQUFVLEVBQUU7YUFDakI7WUFFRCxVQUFVLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsU0FBcUI7Z0JBQ3ZDLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDOUIsdUJBQXVCLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFJLG1CQUFxQixDQUFDLENBQUM7aUJBQ2xGO1lBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0QsVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUNuQixxQkFBcUIsRUFBRTtLQUN4QixDQUFDLENBQUM7QUFDTCxDQUFDOzs7OztBQUVELFNBQVMsVUFBVSxDQUFDLE9BQWdCOztRQUM1QixjQUFjLEdBQVEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUNoRCxRQUFRLHNCQUNILE9BQU8sRUFDUCxPQUFPLEVBQ1Y7S0FDSCxDQUFDO0lBQ0YsT0FBTyxjQUFjLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFDbkQsQ0FBQzs7OztBQUVELFNBQVMscUJBQXFCO0lBQzVCOzs7O0lBQU8sVUFBQyxJQUFVOzs7WUFDVixTQUFTLEdBQTJDLFlBQVksQ0FBQyxJQUFJLENBQUM7O1lBQ3RFLE9BQU8sR0FBNEMsdUJBQXVCLENBQUMsU0FBUyxDQUFDOztZQUNyRixhQUFhLEdBQVEsdUJBQXVCLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQzs7WUFDOUQsU0FBUyxHQUFXLGdCQUFnQjs7WUFDcEMsd0JBQXdCLEdBQVcsaUJBQWlCO1FBRTFELElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO1lBQ3pCLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNwQzthQUFNOztnQkFDQyxjQUFjLEdBQVEsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQyxDQUFNLElBQUssT0FBQSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLEVBQUM7O2dCQUV2RyxLQUErQixJQUFBLEtBQUEsaUJBQUEsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFBLGdCQUFBLDRCQUFFO29CQUFoRCxJQUFBLGdDQUFrQixFQUFqQixhQUFLLEVBQUUsaUJBQVM7b0JBQ3hCLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTt3QkFDM0IsT0FBTztxQkFDUjtvQkFDRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsd0JBQXdCLENBQUMsRUFBRTt3QkFDaEQsYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO3FCQUN2QztpQkFDRjs7Ozs7Ozs7O1lBQ0QsYUFBYSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDekM7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUMsRUFBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSdWxlLCBjaGFpbiwgVHJlZSwgbWVyZ2VXaXRoLCB1cmwsIGFwcGx5LCBicmFuY2hBbmRNZXJnZSwgdGVtcGxhdGUgfSBmcm9tICdAYW5ndWxhci1kZXZraXQvc2NoZW1hdGljcyc7XG5pbXBvcnQgeyBhZGRQYWNrYWdlVG9QYWNrYWdlSnNvbiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NjaGVtYXRpY3MvbmctYWRkL3BhY2thZ2UtY29uZmlnJztcbmltcG9ydCB7IElTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5pbXBvcnQgeyBjb3ZhbGVudENvcmVWZXJzaW9uLCBtYXRlcmlhbFZlcnNpb24gfSBmcm9tICcuL3ZlcnNpb24tbmFtZXMnO1xuaW1wb3J0IHtcbiAgSUNvbXBvbmVudCxcbiAgRHluYW1pY0Zvcm1zLFxuICBIdHRwLFxuICBIaWdobGlnaHQsXG4gIE1hcmtkb3duLFxuICBGbGF2b3JlZE1hcmtkb3duLFxuICBFY2hhcnRzLFxuICBUZXh0RWRpdG9yLFxuICBDb2RlRWRpdG9yLFxufSBmcm9tICcuL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgc3RyaW5ncyB9IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9jb3JlJztcbmltcG9ydCB7IGdldFByb2plY3RGcm9tV29ya3NwYWNlLCBnZXRQcm9qZWN0VGFyZ2V0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY2hlbWF0aWNzJztcbmltcG9ydCB7IGdldFdvcmtzcGFjZSB9IGZyb20gJ0BzY2hlbWF0aWNzL2FuZ3VsYXIvdXRpbGl0eS9jb25maWcnO1xuaW1wb3J0IHsgZXhwZXJpbWVudGFsIH0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L2NvcmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkRGVwZW5kZW5jaWVzQW5kRmlsZXMob3B0aW9uczogSVNjaGVtYSk6IFJ1bGUge1xuICByZXR1cm4gY2hhaW4oW1xuICAgIChob3N0OiBUcmVlKSA9PiB7XG4gICAgICBhZGRQYWNrYWdlVG9QYWNrYWdlSnNvbihob3N0LCAnQGFuZ3VsYXIvbWF0ZXJpYWwnLCBgfiR7bWF0ZXJpYWxWZXJzaW9ufWApO1xuICAgICAgYWRkUGFja2FnZVRvUGFja2FnZUpzb24oaG9zdCwgJ0Bjb3ZhbGVudC9jb3JlJywgYH4ke2NvdmFsZW50Q29yZVZlcnNpb259YCk7XG5cbiAgICAgIGxldCBjb21wb25lbnRzOiBJQ29tcG9uZW50W10gPSBbXG4gICAgICAgIG5ldyBEeW5hbWljRm9ybXMoKSxcbiAgICAgICAgbmV3IEh0dHAoKSxcbiAgICAgICAgbmV3IEhpZ2hsaWdodCgpLFxuICAgICAgICBuZXcgTWFya2Rvd24oKSxcbiAgICAgICAgbmV3IEZsYXZvcmVkTWFya2Rvd24oKSxcbiAgICAgICAgbmV3IEVjaGFydHMoKSxcbiAgICAgICAgbmV3IFRleHRFZGl0b3IoKSxcbiAgICAgICAgbmV3IENvZGVFZGl0b3IoKSxcbiAgICAgIF07XG5cbiAgICAgIGNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50OiBJQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIGlmIChjb21wb25lbnQuZW5hYmxlZChvcHRpb25zKSkge1xuICAgICAgICAgIGFkZFBhY2thZ2VUb1BhY2thZ2VKc29uKGhvc3QsIGNvbXBvbmVudC5kZXBlbmRlbmN5KCksIGB+JHtjb3ZhbGVudENvcmVWZXJzaW9ufWApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIG1lcmdlRmlsZXMob3B0aW9ucyksXG4gICAgYWRkVGhlbWVUb0FuZ3VsYXJKc29uKCksXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBtZXJnZUZpbGVzKG9wdGlvbnM6IElTY2hlbWEpOiBSdWxlIHtcbiAgY29uc3QgdGVtcGxhdGVTb3VyY2U6IGFueSA9IGFwcGx5KHVybCgnLi9maWxlcycpLCBbXG4gICAgdGVtcGxhdGUoe1xuICAgICAgLi4uc3RyaW5ncyxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfSksXG4gIF0pO1xuICByZXR1cm4gYnJhbmNoQW5kTWVyZ2UobWVyZ2VXaXRoKHRlbXBsYXRlU291cmNlKSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRoZW1lVG9Bbmd1bGFySnNvbigpOiBSdWxlIHtcbiAgcmV0dXJuIChob3N0OiBUcmVlKSA9PiB7XG4gICAgY29uc3Qgd29ya3NwYWNlOiBleHBlcmltZW50YWwud29ya3NwYWNlLldvcmtzcGFjZVNjaGVtYSA9IGdldFdvcmtzcGFjZShob3N0KTtcbiAgICBjb25zdCBwcm9qZWN0OiBleHBlcmltZW50YWwud29ya3NwYWNlLldvcmtzcGFjZVByb2plY3QgPSBnZXRQcm9qZWN0RnJvbVdvcmtzcGFjZSh3b3Jrc3BhY2UpO1xuICAgIGNvbnN0IHRhcmdldE9wdGlvbnM6IGFueSA9IGdldFByb2plY3RUYXJnZXRPcHRpb25zKHByb2plY3QsICdidWlsZCcpO1xuICAgIGNvbnN0IGFzc2V0UGF0aDogc3RyaW5nID0gYHNyYy90aGVtZS5zY3NzYDtcbiAgICBjb25zdCBwcmVidWlsdFRoZW1lUGF0aFNlZ21lbnQ6IHN0cmluZyA9IGBzcmMvc3R5bGVzLnNjc3NgO1xuXG4gICAgaWYgKCF0YXJnZXRPcHRpb25zLnN0eWxlcykge1xuICAgICAgdGFyZ2V0T3B0aW9ucy5zdHlsZXMgPSBbYXNzZXRQYXRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZXhpc3RpbmdTdHlsZXM6IGFueSA9IHRhcmdldE9wdGlvbnMuc3R5bGVzLm1hcCgoczogYW55KSA9PiAodHlwZW9mIHMgPT09ICdzdHJpbmcnID8gcyA6IHMuaW5wdXQpKTtcblxuICAgICAgZm9yIChsZXQgW2luZGV4LCBzdHlsZVBhdGhdIG9mIGV4aXN0aW5nU3R5bGVzLmVudHJpZXMoKSkge1xuICAgICAgICBpZiAoc3R5bGVQYXRoID09PSBhc3NldFBhdGgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0eWxlUGF0aC5pbmNsdWRlcyhwcmVidWlsdFRoZW1lUGF0aFNlZ21lbnQpKSB7XG4gICAgICAgICAgdGFyZ2V0T3B0aW9ucy5zdHlsZXMuc3BsaWNlKGluZGV4LCAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGFyZ2V0T3B0aW9ucy5zdHlsZXMudW5zaGlmdChhc3NldFBhdGgpO1xuICAgIH1cbiAgICBob3N0Lm92ZXJ3cml0ZSgnYW5ndWxhci5qc29uJywgSlNPTi5zdHJpbmdpZnkod29ya3NwYWNlLCB1bmRlZmluZWQsIDIpKTtcbiAgICByZXR1cm4gaG9zdDtcbiAgfTtcbn1cbiJdfQ==