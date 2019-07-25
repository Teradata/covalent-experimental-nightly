/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
            components.forEach(function (component) {
                if (component.enabled(options)) {
                    addPackageToPackageJson(host, component.dependency(), "~" + covalentCoreVersion);
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
    var templateSource = apply(url('./files'), [
        template(tslib_1.__assign({}, strings, options)),
    ]);
    return branchAndMerge(mergeWith(templateSource));
}
/**
 * @return {?}
 */
function addThemeToAngularJson() {
    return function (host) {
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
            var existingStyles = targetOptions.styles.map(function (s) { return (typeof s === 'string' ? s : s.input); });
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
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsLyIsInNvdXJjZXMiOlsic2NoZW1hdGljcy9zcmMvbmctYWRkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFRLEtBQUssRUFBUSxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFN0YsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZFLE9BQU8sRUFBYyxZQUFZLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDckcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7QUFHbEUsTUFBTSxVQUFVLHVCQUF1QixDQUFDLE9BQWdCO0lBQ3RELE9BQU8sS0FBSyxDQUFDO1FBQ1gsVUFBQyxJQUFVO1lBQ1QsdUJBQXVCLENBQUMsSUFBSSxFQUFFLG1CQUFtQixFQUFFLE1BQUksZUFBaUIsQ0FBQyxDQUFDO1lBQzFFLHVCQUF1QixDQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFJLG1CQUFxQixDQUFDLENBQUM7O2dCQUV2RSxVQUFVLEdBQWlCO2dCQUM3QixJQUFJLFlBQVksRUFBRTtnQkFDbEIsSUFBSSxJQUFJLEVBQUU7Z0JBQ1YsSUFBSSxTQUFTLEVBQUU7Z0JBQ2YsSUFBSSxRQUFRLEVBQUU7Z0JBQ2QsSUFBSSxnQkFBZ0IsRUFBRTthQUN2QjtZQUVELFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFxQjtnQkFDdkMsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUM5Qix1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLE1BQUksbUJBQXFCLENBQUMsQ0FBQztpQkFDbEY7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFDRCxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQ25CLHFCQUFxQixFQUFFO0tBQ3hCLENBQUMsQ0FBQztBQUNMLENBQUM7Ozs7O0FBRUQsU0FBUyxVQUFVLENBQUMsT0FBZ0I7O1FBQzVCLGNBQWMsR0FBUSxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQ2hELFFBQVEsc0JBQ0gsT0FBTyxFQUNQLE9BQU8sRUFDVjtLQUNILENBQUM7SUFDRixPQUFPLGNBQWMsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztBQUNuRCxDQUFDOzs7O0FBRUQsU0FBUyxxQkFBcUI7SUFDNUIsT0FBTyxVQUFDLElBQVU7OztZQUNWLFNBQVMsR0FBb0IsWUFBWSxDQUFDLElBQUksQ0FBQzs7WUFDL0MsT0FBTyxHQUFxQix1QkFBdUIsQ0FBQyxTQUFTLENBQUM7O1lBQzlELGFBQWEsR0FBUSx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDOztZQUM5RCxTQUFTLEdBQVcsZ0JBQWdCOztZQUNwQyx3QkFBd0IsR0FBVyxpQkFBaUI7UUFFMUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7WUFDekIsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3BDO2FBQU07O2dCQUNDLGNBQWMsR0FBUSxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQU0sSUFBSyxPQUFBLENBQUMsT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FBQzs7Z0JBRXZHLEtBQStCLElBQUEsS0FBQSxpQkFBQSxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUEsZ0JBQUEsNEJBQUU7b0JBQWhELElBQUEsZ0NBQWtCLEVBQWpCLGFBQUssRUFBRSxpQkFBUztvQkFDeEIsSUFBSSxTQUFTLEtBQUssU0FBUyxFQUFFO3dCQUMzQixPQUFPO3FCQUNSO29CQUNELElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFO3dCQUNoRCxhQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQ3ZDO2lCQUNGOzs7Ozs7Ozs7WUFDRCxhQUFhLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN6QztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJ1bGUsIGNoYWluLCBUcmVlLCBtZXJnZVdpdGgsIHVybCwgYXBwbHksIGJyYW5jaEFuZE1lcmdlLCB0ZW1wbGF0ZSB9IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9zY2hlbWF0aWNzJztcbmltcG9ydCB7IGFkZFBhY2thZ2VUb1BhY2thZ2VKc29uIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2NoZW1hdGljcy9uZy1hZGQvcGFja2FnZS1jb25maWcnO1xuaW1wb3J0IHsgSVNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcbmltcG9ydCB7IGNvdmFsZW50Q29yZVZlcnNpb24sIG1hdGVyaWFsVmVyc2lvbiB9IGZyb20gJy4vdmVyc2lvbi1uYW1lcyc7XG5pbXBvcnQgeyBJQ29tcG9uZW50LCBEeW5hbWljRm9ybXMsIEh0dHAsIEhpZ2hsaWdodCwgTWFya2Rvd24sIEZsYXZvcmVkTWFya2Rvd24gfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgc3RyaW5ncyB9IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9jb3JlJztcbmltcG9ydCB7IGdldFByb2plY3RGcm9tV29ya3NwYWNlLCBnZXRQcm9qZWN0VGFyZ2V0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY2hlbWF0aWNzJztcbmltcG9ydCB7IGdldFdvcmtzcGFjZSB9IGZyb20gJ0BzY2hlbWF0aWNzL2FuZ3VsYXIvdXRpbGl0eS9jb25maWcnO1xuaW1wb3J0IHsgV29ya3NwYWNlU2NoZW1hLCBXb3Jrc3BhY2VQcm9qZWN0IH0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L2NvcmUvc3JjL3dvcmtzcGFjZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREZXBlbmRlbmNpZXNBbmRGaWxlcyhvcHRpb25zOiBJU2NoZW1hKTogUnVsZSB7XG4gIHJldHVybiBjaGFpbihbXG4gICAgKGhvc3Q6IFRyZWUpID0+IHtcbiAgICAgIGFkZFBhY2thZ2VUb1BhY2thZ2VKc29uKGhvc3QsICdAYW5ndWxhci9tYXRlcmlhbCcsIGB+JHttYXRlcmlhbFZlcnNpb259YCk7XG4gICAgICBhZGRQYWNrYWdlVG9QYWNrYWdlSnNvbihob3N0LCAnQGNvdmFsZW50L2NvcmUnLCBgfiR7Y292YWxlbnRDb3JlVmVyc2lvbn1gKTtcblxuICAgICAgbGV0IGNvbXBvbmVudHM6IElDb21wb25lbnRbXSA9IFtcbiAgICAgICAgbmV3IER5bmFtaWNGb3JtcygpLFxuICAgICAgICBuZXcgSHR0cCgpLFxuICAgICAgICBuZXcgSGlnaGxpZ2h0KCksXG4gICAgICAgIG5ldyBNYXJrZG93bigpLFxuICAgICAgICBuZXcgRmxhdm9yZWRNYXJrZG93bigpLFxuICAgICAgXTtcblxuICAgICAgY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQ6IElDb21wb25lbnQpID0+IHtcbiAgICAgICAgaWYgKGNvbXBvbmVudC5lbmFibGVkKG9wdGlvbnMpKSB7XG4gICAgICAgICAgYWRkUGFja2FnZVRvUGFja2FnZUpzb24oaG9zdCwgY29tcG9uZW50LmRlcGVuZGVuY3koKSwgYH4ke2NvdmFsZW50Q29yZVZlcnNpb259YCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgbWVyZ2VGaWxlcyhvcHRpb25zKSxcbiAgICBhZGRUaGVtZVRvQW5ndWxhckpzb24oKSxcbiAgXSk7XG59XG5cbmZ1bmN0aW9uIG1lcmdlRmlsZXMob3B0aW9uczogSVNjaGVtYSk6IFJ1bGUge1xuICBjb25zdCB0ZW1wbGF0ZVNvdXJjZTogYW55ID0gYXBwbHkodXJsKCcuL2ZpbGVzJyksIFtcbiAgICB0ZW1wbGF0ZSh7XG4gICAgICAuLi5zdHJpbmdzLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9KSxcbiAgXSk7XG4gIHJldHVybiBicmFuY2hBbmRNZXJnZShtZXJnZVdpdGgodGVtcGxhdGVTb3VyY2UpKTtcbn1cblxuZnVuY3Rpb24gYWRkVGhlbWVUb0FuZ3VsYXJKc29uKCk6IFJ1bGUge1xuICByZXR1cm4gKGhvc3Q6IFRyZWUpID0+IHtcbiAgICBjb25zdCB3b3Jrc3BhY2U6IFdvcmtzcGFjZVNjaGVtYSA9IGdldFdvcmtzcGFjZShob3N0KTtcbiAgICBjb25zdCBwcm9qZWN0OiBXb3Jrc3BhY2VQcm9qZWN0ID0gZ2V0UHJvamVjdEZyb21Xb3Jrc3BhY2Uod29ya3NwYWNlKTtcbiAgICBjb25zdCB0YXJnZXRPcHRpb25zOiBhbnkgPSBnZXRQcm9qZWN0VGFyZ2V0T3B0aW9ucyhwcm9qZWN0LCAnYnVpbGQnKTtcbiAgICBjb25zdCBhc3NldFBhdGg6IHN0cmluZyA9IGBzcmMvdGhlbWUuc2Nzc2A7XG4gICAgY29uc3QgcHJlYnVpbHRUaGVtZVBhdGhTZWdtZW50OiBzdHJpbmcgPSBgc3JjL3N0eWxlcy5zY3NzYDtcblxuICAgIGlmICghdGFyZ2V0T3B0aW9ucy5zdHlsZXMpIHtcbiAgICAgIHRhcmdldE9wdGlvbnMuc3R5bGVzID0gW2Fzc2V0UGF0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nU3R5bGVzOiBhbnkgPSB0YXJnZXRPcHRpb25zLnN0eWxlcy5tYXAoKHM6IGFueSkgPT4gKHR5cGVvZiBzID09PSAnc3RyaW5nJyA/IHMgOiBzLmlucHV0KSk7XG5cbiAgICAgIGZvciAobGV0IFtpbmRleCwgc3R5bGVQYXRoXSBvZiBleGlzdGluZ1N0eWxlcy5lbnRyaWVzKCkpIHtcbiAgICAgICAgaWYgKHN0eWxlUGF0aCA9PT0gYXNzZXRQYXRoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdHlsZVBhdGguaW5jbHVkZXMocHJlYnVpbHRUaGVtZVBhdGhTZWdtZW50KSkge1xuICAgICAgICAgIHRhcmdldE9wdGlvbnMuc3R5bGVzLnNwbGljZShpbmRleCwgMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRhcmdldE9wdGlvbnMuc3R5bGVzLnVuc2hpZnQoYXNzZXRQYXRoKTtcbiAgICB9XG4gICAgaG9zdC5vdmVyd3JpdGUoJ2FuZ3VsYXIuanNvbicsIEpTT04uc3RyaW5naWZ5KHdvcmtzcGFjZSwgdW5kZWZpbmVkLCAyKSk7XG4gICAgcmV0dXJuIGhvc3Q7XG4gIH07XG59XG4iXX0=