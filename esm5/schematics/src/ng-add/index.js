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
            var components = [new DynamicForms(), new Http(), new Highlight(), new Markdown(), new FlavoredMarkdown()];
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
            var existingStyles = targetOptions.styles.map(function (s) { return typeof s === 'string' ? s : s.input; });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsLyIsInNvdXJjZXMiOlsic2NoZW1hdGljcy9zcmMvbmctYWRkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFRLEtBQUssRUFBUSxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFN0YsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZFLE9BQU8sRUFBYyxZQUFZLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDckcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7QUFHbEUsTUFBTSxVQUFVLHVCQUF1QixDQUFDLE9BQWdCO0lBQ3RELE9BQU8sS0FBSyxDQUFDO1FBQ1gsVUFBQyxJQUFVO1lBQ1QsdUJBQXVCLENBQUMsSUFBSSxFQUFFLG1CQUFtQixFQUFFLE1BQUksZUFBaUIsQ0FBQyxDQUFDO1lBQzFFLHVCQUF1QixDQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFJLG1CQUFxQixDQUFDLENBQUM7O2dCQUV2RSxVQUFVLEdBQWlCLENBQUMsSUFBSSxZQUFZLEVBQUUsRUFBRSxJQUFJLElBQUksRUFBRSxFQUFFLElBQUksU0FBUyxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLGdCQUFnQixFQUFFLENBQUM7WUFFeEgsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFNBQXFCO2dCQUN2QyxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQzlCLHVCQUF1QixDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsVUFBVSxFQUFFLEVBQUUsTUFBSSxtQkFBcUIsQ0FBQyxDQUFDO2lCQUNsRjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNELFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDbkIscUJBQXFCLEVBQUU7S0FDeEIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQzs7Ozs7QUFFRCxTQUFTLFVBQVUsQ0FBQyxPQUFnQjs7UUFDNUIsY0FBYyxHQUFRLEtBQUssQ0FDL0IsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUNkO1FBQ0UsUUFBUSxzQkFDSCxPQUFPLEVBQ1AsT0FBTyxFQUNWO0tBQ0gsQ0FDRjtJQUNELE9BQU8sY0FBYyxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBQ25ELENBQUM7Ozs7QUFFRCxTQUFTLHFCQUFxQjtJQUM1QixPQUFPLFVBQUMsSUFBVTs7O1lBQ1YsU0FBUyxHQUFvQixZQUFZLENBQUMsSUFBSSxDQUFDOztZQUMvQyxPQUFPLEdBQXFCLHVCQUF1QixDQUFDLFNBQVMsQ0FBQzs7WUFDOUQsYUFBYSxHQUFRLHVCQUF1QixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7O1lBQzlELFNBQVMsR0FBWSxnQkFBZ0I7O1lBQ3JDLHdCQUF3QixHQUFXLGlCQUFpQjtRQUUxRCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtZQUN6QixhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDcEM7YUFBTTs7Z0JBQ0MsY0FBYyxHQUFRLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBTSxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQW5DLENBQW1DLENBQUM7O2dCQUVyRyxLQUErQixJQUFBLEtBQUEsaUJBQUEsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFBLGdCQUFBLDRCQUFFO29CQUFoRCxJQUFBLGdDQUFrQixFQUFqQixhQUFLLEVBQUUsaUJBQVM7b0JBQ3hCLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTt3QkFDM0IsT0FBTztxQkFDUjtvQkFDRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsd0JBQXdCLENBQUMsRUFBRTt3QkFDaEQsYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO3FCQUN2QztpQkFDRjs7Ozs7Ozs7O1lBQ0QsYUFBYSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDekM7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSdWxlLCBjaGFpbiwgVHJlZSwgbWVyZ2VXaXRoLCB1cmwsIGFwcGx5LCBicmFuY2hBbmRNZXJnZSwgdGVtcGxhdGUgfSBmcm9tICdAYW5ndWxhci1kZXZraXQvc2NoZW1hdGljcyc7XG5pbXBvcnQgeyBhZGRQYWNrYWdlVG9QYWNrYWdlSnNvbiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NjaGVtYXRpY3MvbmctYWRkL3BhY2thZ2UtY29uZmlnJztcbmltcG9ydCB7IElTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5pbXBvcnQgeyBjb3ZhbGVudENvcmVWZXJzaW9uLCBtYXRlcmlhbFZlcnNpb24gfSBmcm9tICcuL3ZlcnNpb24tbmFtZXMnO1xuaW1wb3J0IHsgSUNvbXBvbmVudCwgRHluYW1pY0Zvcm1zLCBIdHRwLCBIaWdobGlnaHQsIE1hcmtkb3duLCBGbGF2b3JlZE1hcmtkb3duIH0gZnJvbSAnLi9jb21wb25lbnRzJztcbmltcG9ydCB7IHN0cmluZ3MgfSBmcm9tICdAYW5ndWxhci1kZXZraXQvY29yZSc7XG5pbXBvcnQgeyBnZXRQcm9qZWN0RnJvbVdvcmtzcGFjZSwgZ2V0UHJvamVjdFRhcmdldE9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9jZGsvc2NoZW1hdGljcyc7XG5pbXBvcnQgeyBnZXRXb3Jrc3BhY2UgfSBmcm9tICdAc2NoZW1hdGljcy9hbmd1bGFyL3V0aWxpdHkvY29uZmlnJztcbmltcG9ydCB7IFdvcmtzcGFjZVNjaGVtYSwgV29ya3NwYWNlUHJvamVjdCB9IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9jb3JlL3NyYy93b3Jrc3BhY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkRGVwZW5kZW5jaWVzQW5kRmlsZXMob3B0aW9uczogSVNjaGVtYSk6IFJ1bGUge1xuICByZXR1cm4gY2hhaW4oW1xuICAgIChob3N0OiBUcmVlKSA9PiB7XG4gICAgICBhZGRQYWNrYWdlVG9QYWNrYWdlSnNvbihob3N0LCAnQGFuZ3VsYXIvbWF0ZXJpYWwnLCBgfiR7bWF0ZXJpYWxWZXJzaW9ufWApO1xuICAgICAgYWRkUGFja2FnZVRvUGFja2FnZUpzb24oaG9zdCwgJ0Bjb3ZhbGVudC9jb3JlJywgYH4ke2NvdmFsZW50Q29yZVZlcnNpb259YCk7XG5cbiAgICAgIGxldCBjb21wb25lbnRzOiBJQ29tcG9uZW50W10gPSBbbmV3IER5bmFtaWNGb3JtcygpLCBuZXcgSHR0cCgpLCBuZXcgSGlnaGxpZ2h0KCksIG5ldyBNYXJrZG93bigpLCBuZXcgRmxhdm9yZWRNYXJrZG93bigpXTtcblxuICAgICAgY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQ6IElDb21wb25lbnQpID0+IHtcbiAgICAgICAgaWYgKGNvbXBvbmVudC5lbmFibGVkKG9wdGlvbnMpKSB7XG4gICAgICAgICAgYWRkUGFja2FnZVRvUGFja2FnZUpzb24oaG9zdCwgY29tcG9uZW50LmRlcGVuZGVuY3koKSwgYH4ke2NvdmFsZW50Q29yZVZlcnNpb259YCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgbWVyZ2VGaWxlcyhvcHRpb25zKSxcbiAgICBhZGRUaGVtZVRvQW5ndWxhckpzb24oKSxcbiAgXSk7XG59XG5cbmZ1bmN0aW9uIG1lcmdlRmlsZXMob3B0aW9uczogSVNjaGVtYSk6IFJ1bGUge1xuICBjb25zdCB0ZW1wbGF0ZVNvdXJjZTogYW55ID0gYXBwbHkoXG4gICAgdXJsKCcuL2ZpbGVzJyksXG4gICAgW1xuICAgICAgdGVtcGxhdGUoe1xuICAgICAgICAuLi5zdHJpbmdzLFxuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgfSksXG4gICAgXSxcbiAgKTtcbiAgcmV0dXJuIGJyYW5jaEFuZE1lcmdlKG1lcmdlV2l0aCh0ZW1wbGF0ZVNvdXJjZSkpO1xufVxuXG5mdW5jdGlvbiBhZGRUaGVtZVRvQW5ndWxhckpzb24oKTogUnVsZSB7XG4gIHJldHVybiAoaG9zdDogVHJlZSkgPT4ge1xuICAgIGNvbnN0IHdvcmtzcGFjZTogV29ya3NwYWNlU2NoZW1hID0gZ2V0V29ya3NwYWNlKGhvc3QpO1xuICAgIGNvbnN0IHByb2plY3Q6IFdvcmtzcGFjZVByb2plY3QgPSBnZXRQcm9qZWN0RnJvbVdvcmtzcGFjZSh3b3Jrc3BhY2UpO1xuICAgIGNvbnN0IHRhcmdldE9wdGlvbnM6IGFueSA9IGdldFByb2plY3RUYXJnZXRPcHRpb25zKHByb2plY3QsICdidWlsZCcpO1xuICAgIGNvbnN0IGFzc2V0UGF0aDogc3RyaW5nID0gIGBzcmMvdGhlbWUuc2Nzc2A7XG4gICAgY29uc3QgcHJlYnVpbHRUaGVtZVBhdGhTZWdtZW50OiBzdHJpbmcgPSBgc3JjL3N0eWxlcy5zY3NzYDtcblxuICAgIGlmICghdGFyZ2V0T3B0aW9ucy5zdHlsZXMpIHtcbiAgICAgIHRhcmdldE9wdGlvbnMuc3R5bGVzID0gW2Fzc2V0UGF0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nU3R5bGVzOiBhbnkgPSB0YXJnZXRPcHRpb25zLnN0eWxlcy5tYXAoKHM6IGFueSkgPT4gdHlwZW9mIHMgPT09ICdzdHJpbmcnID8gcyA6IHMuaW5wdXQpO1xuXG4gICAgICBmb3IgKGxldCBbaW5kZXgsIHN0eWxlUGF0aF0gb2YgZXhpc3RpbmdTdHlsZXMuZW50cmllcygpKSB7XG4gICAgICAgIGlmIChzdHlsZVBhdGggPT09IGFzc2V0UGF0aCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3R5bGVQYXRoLmluY2x1ZGVzKHByZWJ1aWx0VGhlbWVQYXRoU2VnbWVudCkpIHtcbiAgICAgICAgICB0YXJnZXRPcHRpb25zLnN0eWxlcy5zcGxpY2UoaW5kZXgsIDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0YXJnZXRPcHRpb25zLnN0eWxlcy51bnNoaWZ0KGFzc2V0UGF0aCk7XG4gICAgfVxuICAgIGhvc3Qub3ZlcndyaXRlKCdhbmd1bGFyLmpzb24nLCBKU09OLnN0cmluZ2lmeSh3b3Jrc3BhY2UsIHVuZGVmaW5lZCwgMikpO1xuICAgIHJldHVybiBob3N0O1xuICB9O1xufVxuIl19