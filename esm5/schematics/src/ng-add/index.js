/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsLyIsInNvdXJjZXMiOlsic2NoZW1hdGljcy9zcmMvbmctYWRkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFRLEtBQUssRUFBUSxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFN0YsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZFLE9BQU8sRUFBYyxZQUFZLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2pILE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7Ozs7O0FBR2xFLE1BQU0sVUFBVSx1QkFBdUIsQ0FBQyxPQUFnQjtJQUN0RCxPQUFPLEtBQUssQ0FBQzs7Ozs7UUFDWCxVQUFDLElBQVU7WUFDVCx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsTUFBSSxlQUFpQixDQUFDLENBQUM7WUFDMUUsdUJBQXVCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQUksbUJBQXFCLENBQUMsQ0FBQzs7Z0JBRXZFLFVBQVUsR0FBaUI7Z0JBQzdCLElBQUksWUFBWSxFQUFFO2dCQUNsQixJQUFJLElBQUksRUFBRTtnQkFDVixJQUFJLFNBQVMsRUFBRTtnQkFDZixJQUFJLFFBQVEsRUFBRTtnQkFDZCxJQUFJLGdCQUFnQixFQUFFO2dCQUN0QixJQUFJLFVBQVUsRUFBRTthQUNqQjtZQUVELFVBQVUsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxTQUFxQjtnQkFDdkMsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUM5Qix1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLE1BQUksbUJBQXFCLENBQUMsQ0FBQztpQkFDbEY7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUM7UUFDRCxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQ25CLHFCQUFxQixFQUFFO0tBQ3hCLENBQUMsQ0FBQztBQUNMLENBQUM7Ozs7O0FBRUQsU0FBUyxVQUFVLENBQUMsT0FBZ0I7O1FBQzVCLGNBQWMsR0FBUSxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQ2hELFFBQVEsc0JBQ0gsT0FBTyxFQUNQLE9BQU8sRUFDVjtLQUNILENBQUM7SUFDRixPQUFPLGNBQWMsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztBQUNuRCxDQUFDOzs7O0FBRUQsU0FBUyxxQkFBcUI7SUFDNUI7Ozs7SUFBTyxVQUFDLElBQVU7OztZQUNWLFNBQVMsR0FBMkMsWUFBWSxDQUFDLElBQUksQ0FBQzs7WUFDdEUsT0FBTyxHQUE0Qyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7O1lBQ3JGLGFBQWEsR0FBUSx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDOztZQUM5RCxTQUFTLEdBQVcsZ0JBQWdCOztZQUNwQyx3QkFBd0IsR0FBVyxpQkFBaUI7UUFFMUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7WUFDekIsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3BDO2FBQU07O2dCQUNDLGNBQWMsR0FBUSxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFDLENBQU0sSUFBSyxPQUFBLENBQUMsT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsRUFBQzs7Z0JBRXZHLEtBQStCLElBQUEsS0FBQSxpQkFBQSxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUEsZ0JBQUEsNEJBQUU7b0JBQWhELElBQUEsZ0NBQWtCLEVBQWpCLGFBQUssRUFBRSxpQkFBUztvQkFDeEIsSUFBSSxTQUFTLEtBQUssU0FBUyxFQUFFO3dCQUMzQixPQUFPO3FCQUNSO29CQUNELElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFO3dCQUNoRCxhQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQ3ZDO2lCQUNGOzs7Ozs7Ozs7WUFDRCxhQUFhLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN6QztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJ1bGUsIGNoYWluLCBUcmVlLCBtZXJnZVdpdGgsIHVybCwgYXBwbHksIGJyYW5jaEFuZE1lcmdlLCB0ZW1wbGF0ZSB9IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9zY2hlbWF0aWNzJztcbmltcG9ydCB7IGFkZFBhY2thZ2VUb1BhY2thZ2VKc29uIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2NoZW1hdGljcy9uZy1hZGQvcGFja2FnZS1jb25maWcnO1xuaW1wb3J0IHsgSVNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcbmltcG9ydCB7IGNvdmFsZW50Q29yZVZlcnNpb24sIG1hdGVyaWFsVmVyc2lvbiB9IGZyb20gJy4vdmVyc2lvbi1uYW1lcyc7XG5pbXBvcnQgeyBJQ29tcG9uZW50LCBEeW5hbWljRm9ybXMsIEh0dHAsIEhpZ2hsaWdodCwgTWFya2Rvd24sIEZsYXZvcmVkTWFya2Rvd24sIENvZGVFZGl0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgc3RyaW5ncyB9IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9jb3JlJztcbmltcG9ydCB7IGdldFByb2plY3RGcm9tV29ya3NwYWNlLCBnZXRQcm9qZWN0VGFyZ2V0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY2hlbWF0aWNzJztcbmltcG9ydCB7IGdldFdvcmtzcGFjZSB9IGZyb20gJ0BzY2hlbWF0aWNzL2FuZ3VsYXIvdXRpbGl0eS9jb25maWcnO1xuaW1wb3J0IHsgZXhwZXJpbWVudGFsIH0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L2NvcmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkRGVwZW5kZW5jaWVzQW5kRmlsZXMob3B0aW9uczogSVNjaGVtYSk6IFJ1bGUge1xuICByZXR1cm4gY2hhaW4oW1xuICAgIChob3N0OiBUcmVlKSA9PiB7XG4gICAgICBhZGRQYWNrYWdlVG9QYWNrYWdlSnNvbihob3N0LCAnQGFuZ3VsYXIvbWF0ZXJpYWwnLCBgfiR7bWF0ZXJpYWxWZXJzaW9ufWApO1xuICAgICAgYWRkUGFja2FnZVRvUGFja2FnZUpzb24oaG9zdCwgJ0Bjb3ZhbGVudC9jb3JlJywgYH4ke2NvdmFsZW50Q29yZVZlcnNpb259YCk7XG5cbiAgICAgIGxldCBjb21wb25lbnRzOiBJQ29tcG9uZW50W10gPSBbXG4gICAgICAgIG5ldyBEeW5hbWljRm9ybXMoKSxcbiAgICAgICAgbmV3IEh0dHAoKSxcbiAgICAgICAgbmV3IEhpZ2hsaWdodCgpLFxuICAgICAgICBuZXcgTWFya2Rvd24oKSxcbiAgICAgICAgbmV3IEZsYXZvcmVkTWFya2Rvd24oKSxcbiAgICAgICAgbmV3IENvZGVFZGl0b3IoKSxcbiAgICAgIF07XG5cbiAgICAgIGNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50OiBJQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIGlmIChjb21wb25lbnQuZW5hYmxlZChvcHRpb25zKSkge1xuICAgICAgICAgIGFkZFBhY2thZ2VUb1BhY2thZ2VKc29uKGhvc3QsIGNvbXBvbmVudC5kZXBlbmRlbmN5KCksIGB+JHtjb3ZhbGVudENvcmVWZXJzaW9ufWApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIG1lcmdlRmlsZXMob3B0aW9ucyksXG4gICAgYWRkVGhlbWVUb0FuZ3VsYXJKc29uKCksXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBtZXJnZUZpbGVzKG9wdGlvbnM6IElTY2hlbWEpOiBSdWxlIHtcbiAgY29uc3QgdGVtcGxhdGVTb3VyY2U6IGFueSA9IGFwcGx5KHVybCgnLi9maWxlcycpLCBbXG4gICAgdGVtcGxhdGUoe1xuICAgICAgLi4uc3RyaW5ncyxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfSksXG4gIF0pO1xuICByZXR1cm4gYnJhbmNoQW5kTWVyZ2UobWVyZ2VXaXRoKHRlbXBsYXRlU291cmNlKSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRoZW1lVG9Bbmd1bGFySnNvbigpOiBSdWxlIHtcbiAgcmV0dXJuIChob3N0OiBUcmVlKSA9PiB7XG4gICAgY29uc3Qgd29ya3NwYWNlOiBleHBlcmltZW50YWwud29ya3NwYWNlLldvcmtzcGFjZVNjaGVtYSA9IGdldFdvcmtzcGFjZShob3N0KTtcbiAgICBjb25zdCBwcm9qZWN0OiBleHBlcmltZW50YWwud29ya3NwYWNlLldvcmtzcGFjZVByb2plY3QgPSBnZXRQcm9qZWN0RnJvbVdvcmtzcGFjZSh3b3Jrc3BhY2UpO1xuICAgIGNvbnN0IHRhcmdldE9wdGlvbnM6IGFueSA9IGdldFByb2plY3RUYXJnZXRPcHRpb25zKHByb2plY3QsICdidWlsZCcpO1xuICAgIGNvbnN0IGFzc2V0UGF0aDogc3RyaW5nID0gYHNyYy90aGVtZS5zY3NzYDtcbiAgICBjb25zdCBwcmVidWlsdFRoZW1lUGF0aFNlZ21lbnQ6IHN0cmluZyA9IGBzcmMvc3R5bGVzLnNjc3NgO1xuXG4gICAgaWYgKCF0YXJnZXRPcHRpb25zLnN0eWxlcykge1xuICAgICAgdGFyZ2V0T3B0aW9ucy5zdHlsZXMgPSBbYXNzZXRQYXRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZXhpc3RpbmdTdHlsZXM6IGFueSA9IHRhcmdldE9wdGlvbnMuc3R5bGVzLm1hcCgoczogYW55KSA9PiAodHlwZW9mIHMgPT09ICdzdHJpbmcnID8gcyA6IHMuaW5wdXQpKTtcblxuICAgICAgZm9yIChsZXQgW2luZGV4LCBzdHlsZVBhdGhdIG9mIGV4aXN0aW5nU3R5bGVzLmVudHJpZXMoKSkge1xuICAgICAgICBpZiAoc3R5bGVQYXRoID09PSBhc3NldFBhdGgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0eWxlUGF0aC5pbmNsdWRlcyhwcmVidWlsdFRoZW1lUGF0aFNlZ21lbnQpKSB7XG4gICAgICAgICAgdGFyZ2V0T3B0aW9ucy5zdHlsZXMuc3BsaWNlKGluZGV4LCAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGFyZ2V0T3B0aW9ucy5zdHlsZXMudW5zaGlmdChhc3NldFBhdGgpO1xuICAgIH1cbiAgICBob3N0Lm92ZXJ3cml0ZSgnYW5ndWxhci5qc29uJywgSlNPTi5zdHJpbmdpZnkod29ya3NwYWNlLCB1bmRlZmluZWQsIDIpKTtcbiAgICByZXR1cm4gaG9zdDtcbiAgfTtcbn1cbiJdfQ==