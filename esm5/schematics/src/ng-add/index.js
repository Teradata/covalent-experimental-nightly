/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsLyIsInNvdXJjZXMiOlsic2NoZW1hdGljcy9zcmMvbmctYWRkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFRLEtBQUssRUFBUSxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFN0YsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZFLE9BQU8sRUFFTCxZQUFZLEVBQ1osSUFBSSxFQUNKLFNBQVMsRUFDVCxRQUFRLEVBQ1IsZ0JBQWdCLEVBQ2hCLFVBQVUsRUFDVixVQUFVLEdBQ1gsTUFBTSxjQUFjLENBQUM7QUFDdEIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7QUFHbEUsTUFBTSxVQUFVLHVCQUF1QixDQUFDLE9BQWdCO0lBQ3RELE9BQU8sS0FBSyxDQUFDOzs7OztRQUNYLFVBQUMsSUFBVTtZQUNULHVCQUF1QixDQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBRSxNQUFJLGVBQWlCLENBQUMsQ0FBQztZQUMxRSx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBSSxtQkFBcUIsQ0FBQyxDQUFDOztnQkFFdkUsVUFBVSxHQUFpQjtnQkFDN0IsSUFBSSxZQUFZLEVBQUU7Z0JBQ2xCLElBQUksSUFBSSxFQUFFO2dCQUNWLElBQUksU0FBUyxFQUFFO2dCQUNmLElBQUksUUFBUSxFQUFFO2dCQUNkLElBQUksZ0JBQWdCLEVBQUU7Z0JBQ3RCLElBQUksVUFBVSxFQUFFO2dCQUNoQixJQUFJLFVBQVUsRUFBRTthQUNqQjtZQUVELFVBQVUsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxTQUFxQjtnQkFDdkMsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUM5Qix1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLE1BQUksbUJBQXFCLENBQUMsQ0FBQztpQkFDbEY7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUM7UUFDRCxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQ25CLHFCQUFxQixFQUFFO0tBQ3hCLENBQUMsQ0FBQztBQUNMLENBQUM7Ozs7O0FBRUQsU0FBUyxVQUFVLENBQUMsT0FBZ0I7O1FBQzVCLGNBQWMsR0FBUSxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQ2hELFFBQVEsc0JBQ0gsT0FBTyxFQUNQLE9BQU8sRUFDVjtLQUNILENBQUM7SUFDRixPQUFPLGNBQWMsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztBQUNuRCxDQUFDOzs7O0FBRUQsU0FBUyxxQkFBcUI7SUFDNUI7Ozs7SUFBTyxVQUFDLElBQVU7OztZQUNWLFNBQVMsR0FBMkMsWUFBWSxDQUFDLElBQUksQ0FBQzs7WUFDdEUsT0FBTyxHQUE0Qyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7O1lBQ3JGLGFBQWEsR0FBUSx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDOztZQUM5RCxTQUFTLEdBQVcsZ0JBQWdCOztZQUNwQyx3QkFBd0IsR0FBVyxpQkFBaUI7UUFFMUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7WUFDekIsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3BDO2FBQU07O2dCQUNDLGNBQWMsR0FBUSxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFDLENBQU0sSUFBSyxPQUFBLENBQUMsT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsRUFBQzs7Z0JBRXZHLEtBQStCLElBQUEsS0FBQSxpQkFBQSxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUEsZ0JBQUEsNEJBQUU7b0JBQWhELElBQUEsZ0NBQWtCLEVBQWpCLGFBQUssRUFBRSxpQkFBUztvQkFDeEIsSUFBSSxTQUFTLEtBQUssU0FBUyxFQUFFO3dCQUMzQixPQUFPO3FCQUNSO29CQUNELElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFO3dCQUNoRCxhQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQ3ZDO2lCQUNGOzs7Ozs7Ozs7WUFDRCxhQUFhLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN6QztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJ1bGUsIGNoYWluLCBUcmVlLCBtZXJnZVdpdGgsIHVybCwgYXBwbHksIGJyYW5jaEFuZE1lcmdlLCB0ZW1wbGF0ZSB9IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9zY2hlbWF0aWNzJztcbmltcG9ydCB7IGFkZFBhY2thZ2VUb1BhY2thZ2VKc29uIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2NoZW1hdGljcy9uZy1hZGQvcGFja2FnZS1jb25maWcnO1xuaW1wb3J0IHsgSVNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcbmltcG9ydCB7IGNvdmFsZW50Q29yZVZlcnNpb24sIG1hdGVyaWFsVmVyc2lvbiB9IGZyb20gJy4vdmVyc2lvbi1uYW1lcyc7XG5pbXBvcnQge1xuICBJQ29tcG9uZW50LFxuICBEeW5hbWljRm9ybXMsXG4gIEh0dHAsXG4gIEhpZ2hsaWdodCxcbiAgTWFya2Rvd24sXG4gIEZsYXZvcmVkTWFya2Rvd24sXG4gIFRleHRFZGl0b3IsXG4gIENvZGVFZGl0b3IsXG59IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBzdHJpbmdzIH0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L2NvcmUnO1xuaW1wb3J0IHsgZ2V0UHJvamVjdEZyb21Xb3Jrc3BhY2UsIGdldFByb2plY3RUYXJnZXRPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3NjaGVtYXRpY3MnO1xuaW1wb3J0IHsgZ2V0V29ya3NwYWNlIH0gZnJvbSAnQHNjaGVtYXRpY3MvYW5ndWxhci91dGlsaXR5L2NvbmZpZyc7XG5pbXBvcnQgeyBleHBlcmltZW50YWwgfSBmcm9tICdAYW5ndWxhci1kZXZraXQvY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREZXBlbmRlbmNpZXNBbmRGaWxlcyhvcHRpb25zOiBJU2NoZW1hKTogUnVsZSB7XG4gIHJldHVybiBjaGFpbihbXG4gICAgKGhvc3Q6IFRyZWUpID0+IHtcbiAgICAgIGFkZFBhY2thZ2VUb1BhY2thZ2VKc29uKGhvc3QsICdAYW5ndWxhci9tYXRlcmlhbCcsIGB+JHttYXRlcmlhbFZlcnNpb259YCk7XG4gICAgICBhZGRQYWNrYWdlVG9QYWNrYWdlSnNvbihob3N0LCAnQGNvdmFsZW50L2NvcmUnLCBgfiR7Y292YWxlbnRDb3JlVmVyc2lvbn1gKTtcblxuICAgICAgbGV0IGNvbXBvbmVudHM6IElDb21wb25lbnRbXSA9IFtcbiAgICAgICAgbmV3IER5bmFtaWNGb3JtcygpLFxuICAgICAgICBuZXcgSHR0cCgpLFxuICAgICAgICBuZXcgSGlnaGxpZ2h0KCksXG4gICAgICAgIG5ldyBNYXJrZG93bigpLFxuICAgICAgICBuZXcgRmxhdm9yZWRNYXJrZG93bigpLFxuICAgICAgICBuZXcgVGV4dEVkaXRvcigpLFxuICAgICAgICBuZXcgQ29kZUVkaXRvcigpLFxuICAgICAgXTtcblxuICAgICAgY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQ6IElDb21wb25lbnQpID0+IHtcbiAgICAgICAgaWYgKGNvbXBvbmVudC5lbmFibGVkKG9wdGlvbnMpKSB7XG4gICAgICAgICAgYWRkUGFja2FnZVRvUGFja2FnZUpzb24oaG9zdCwgY29tcG9uZW50LmRlcGVuZGVuY3koKSwgYH4ke2NvdmFsZW50Q29yZVZlcnNpb259YCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgbWVyZ2VGaWxlcyhvcHRpb25zKSxcbiAgICBhZGRUaGVtZVRvQW5ndWxhckpzb24oKSxcbiAgXSk7XG59XG5cbmZ1bmN0aW9uIG1lcmdlRmlsZXMob3B0aW9uczogSVNjaGVtYSk6IFJ1bGUge1xuICBjb25zdCB0ZW1wbGF0ZVNvdXJjZTogYW55ID0gYXBwbHkodXJsKCcuL2ZpbGVzJyksIFtcbiAgICB0ZW1wbGF0ZSh7XG4gICAgICAuLi5zdHJpbmdzLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9KSxcbiAgXSk7XG4gIHJldHVybiBicmFuY2hBbmRNZXJnZShtZXJnZVdpdGgodGVtcGxhdGVTb3VyY2UpKTtcbn1cblxuZnVuY3Rpb24gYWRkVGhlbWVUb0FuZ3VsYXJKc29uKCk6IFJ1bGUge1xuICByZXR1cm4gKGhvc3Q6IFRyZWUpID0+IHtcbiAgICBjb25zdCB3b3Jrc3BhY2U6IGV4cGVyaW1lbnRhbC53b3Jrc3BhY2UuV29ya3NwYWNlU2NoZW1hID0gZ2V0V29ya3NwYWNlKGhvc3QpO1xuICAgIGNvbnN0IHByb2plY3Q6IGV4cGVyaW1lbnRhbC53b3Jrc3BhY2UuV29ya3NwYWNlUHJvamVjdCA9IGdldFByb2plY3RGcm9tV29ya3NwYWNlKHdvcmtzcGFjZSk7XG4gICAgY29uc3QgdGFyZ2V0T3B0aW9uczogYW55ID0gZ2V0UHJvamVjdFRhcmdldE9wdGlvbnMocHJvamVjdCwgJ2J1aWxkJyk7XG4gICAgY29uc3QgYXNzZXRQYXRoOiBzdHJpbmcgPSBgc3JjL3RoZW1lLnNjc3NgO1xuICAgIGNvbnN0IHByZWJ1aWx0VGhlbWVQYXRoU2VnbWVudDogc3RyaW5nID0gYHNyYy9zdHlsZXMuc2Nzc2A7XG5cbiAgICBpZiAoIXRhcmdldE9wdGlvbnMuc3R5bGVzKSB7XG4gICAgICB0YXJnZXRPcHRpb25zLnN0eWxlcyA9IFthc3NldFBhdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBleGlzdGluZ1N0eWxlczogYW55ID0gdGFyZ2V0T3B0aW9ucy5zdHlsZXMubWFwKChzOiBhbnkpID0+ICh0eXBlb2YgcyA9PT0gJ3N0cmluZycgPyBzIDogcy5pbnB1dCkpO1xuXG4gICAgICBmb3IgKGxldCBbaW5kZXgsIHN0eWxlUGF0aF0gb2YgZXhpc3RpbmdTdHlsZXMuZW50cmllcygpKSB7XG4gICAgICAgIGlmIChzdHlsZVBhdGggPT09IGFzc2V0UGF0aCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3R5bGVQYXRoLmluY2x1ZGVzKHByZWJ1aWx0VGhlbWVQYXRoU2VnbWVudCkpIHtcbiAgICAgICAgICB0YXJnZXRPcHRpb25zLnN0eWxlcy5zcGxpY2UoaW5kZXgsIDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0YXJnZXRPcHRpb25zLnN0eWxlcy51bnNoaWZ0KGFzc2V0UGF0aCk7XG4gICAgfVxuICAgIGhvc3Qub3ZlcndyaXRlKCdhbmd1bGFyLmpzb24nLCBKU09OLnN0cmluZ2lmeSh3b3Jrc3BhY2UsIHVuZGVmaW5lZCwgMikpO1xuICAgIHJldHVybiBob3N0O1xuICB9O1xufVxuIl19