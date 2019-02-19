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
            let components = [new DynamicForms(), new Http(), new Highlight(), new Markdown(), new FlavoredMarkdown()];
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
            const existingStyles = targetOptions.styles.map((s) => typeof s === 'string' ? s : s.input);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsLyIsInNvdXJjZXMiOlsic2NoZW1hdGljcy9zcmMvbmctYWRkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQVEsS0FBSyxFQUFRLFNBQVMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUU3RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkUsT0FBTyxFQUFjLFlBQVksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNyRyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLHVCQUF1QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7OztBQUdsRSxNQUFNLFVBQVUsdUJBQXVCLENBQUMsT0FBZ0I7SUFDdEQsT0FBTyxLQUFLLENBQUM7UUFDWCxDQUFDLElBQVUsRUFBRSxFQUFFO1lBQ2IsdUJBQXVCLENBQUMsSUFBSSxFQUFFLG1CQUFtQixFQUFFLElBQUksZUFBZSxFQUFFLENBQUMsQ0FBQztZQUMxRSx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7O2dCQUV2RSxVQUFVLEdBQWlCLENBQUMsSUFBSSxZQUFZLEVBQUUsRUFBRSxJQUFJLElBQUksRUFBRSxFQUFFLElBQUksU0FBUyxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLGdCQUFnQixFQUFFLENBQUM7WUFFeEgsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQXFCLEVBQUUsRUFBRTtnQkFDM0MsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUM5Qix1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO2lCQUNsRjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNELFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDbkIscUJBQXFCLEVBQUU7S0FDeEIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQzs7Ozs7QUFFRCxTQUFTLFVBQVUsQ0FBQyxPQUFnQjs7VUFDNUIsY0FBYyxHQUFRLEtBQUssQ0FDL0IsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUNkO1FBQ0UsUUFBUSxtQkFDSCxPQUFPLEVBQ1AsT0FBTyxFQUNWO0tBQ0gsQ0FDRjtJQUNELE9BQU8sY0FBYyxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBQ25ELENBQUM7Ozs7QUFFRCxTQUFTLHFCQUFxQjtJQUM1QixPQUFPLENBQUMsSUFBVSxFQUFFLEVBQUU7O2NBQ2QsU0FBUyxHQUFvQixZQUFZLENBQUMsSUFBSSxDQUFDOztjQUMvQyxPQUFPLEdBQXFCLHVCQUF1QixDQUFDLFNBQVMsQ0FBQzs7Y0FDOUQsYUFBYSxHQUFRLHVCQUF1QixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7O2NBQzlELFNBQVMsR0FBWSxnQkFBZ0I7O2NBQ3JDLHdCQUF3QixHQUFXLGlCQUFpQjtRQUUxRCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtZQUN6QixhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDcEM7YUFBTTs7a0JBQ0MsY0FBYyxHQUFRLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUVyRyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLElBQUksY0FBYyxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUN2RCxJQUFJLFNBQVMsS0FBSyxTQUFTLEVBQUU7b0JBQzNCLE9BQU87aUJBQ1I7Z0JBQ0QsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLEVBQUU7b0JBQ2hELGFBQWEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDdkM7YUFDRjtZQUNELGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEUsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUnVsZSwgY2hhaW4sIFRyZWUsIG1lcmdlV2l0aCwgdXJsLCBhcHBseSwgYnJhbmNoQW5kTWVyZ2UsIHRlbXBsYXRlIH0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L3NjaGVtYXRpY3MnO1xuaW1wb3J0IHsgYWRkUGFja2FnZVRvUGFja2FnZUpzb24gfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zY2hlbWF0aWNzL25nLWFkZC9wYWNrYWdlLWNvbmZpZyc7XG5pbXBvcnQgeyBJU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuaW1wb3J0IHsgY292YWxlbnRDb3JlVmVyc2lvbiwgbWF0ZXJpYWxWZXJzaW9uIH0gZnJvbSAnLi92ZXJzaW9uLW5hbWVzJztcbmltcG9ydCB7IElDb21wb25lbnQsIER5bmFtaWNGb3JtcywgSHR0cCwgSGlnaGxpZ2h0LCBNYXJrZG93biwgRmxhdm9yZWRNYXJrZG93biB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBzdHJpbmdzIH0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L2NvcmUnO1xuaW1wb3J0IHsgZ2V0UHJvamVjdEZyb21Xb3Jrc3BhY2UsIGdldFByb2plY3RUYXJnZXRPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3NjaGVtYXRpY3MnO1xuaW1wb3J0IHsgZ2V0V29ya3NwYWNlIH0gZnJvbSAnQHNjaGVtYXRpY3MvYW5ndWxhci91dGlsaXR5L2NvbmZpZyc7XG5pbXBvcnQgeyBXb3Jrc3BhY2VTY2hlbWEsIFdvcmtzcGFjZVByb2plY3QgfSBmcm9tICdAYW5ndWxhci1kZXZraXQvY29yZS9zcmMvd29ya3NwYWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERlcGVuZGVuY2llc0FuZEZpbGVzKG9wdGlvbnM6IElTY2hlbWEpOiBSdWxlIHtcbiAgcmV0dXJuIGNoYWluKFtcbiAgICAoaG9zdDogVHJlZSkgPT4ge1xuICAgICAgYWRkUGFja2FnZVRvUGFja2FnZUpzb24oaG9zdCwgJ0Bhbmd1bGFyL21hdGVyaWFsJywgYH4ke21hdGVyaWFsVmVyc2lvbn1gKTtcbiAgICAgIGFkZFBhY2thZ2VUb1BhY2thZ2VKc29uKGhvc3QsICdAY292YWxlbnQvY29yZScsIGB+JHtjb3ZhbGVudENvcmVWZXJzaW9ufWApO1xuXG4gICAgICBsZXQgY29tcG9uZW50czogSUNvbXBvbmVudFtdID0gW25ldyBEeW5hbWljRm9ybXMoKSwgbmV3IEh0dHAoKSwgbmV3IEhpZ2hsaWdodCgpLCBuZXcgTWFya2Rvd24oKSwgbmV3IEZsYXZvcmVkTWFya2Rvd24oKV07XG5cbiAgICAgIGNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50OiBJQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIGlmIChjb21wb25lbnQuZW5hYmxlZChvcHRpb25zKSkge1xuICAgICAgICAgIGFkZFBhY2thZ2VUb1BhY2thZ2VKc29uKGhvc3QsIGNvbXBvbmVudC5kZXBlbmRlbmN5KCksIGB+JHtjb3ZhbGVudENvcmVWZXJzaW9ufWApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIG1lcmdlRmlsZXMob3B0aW9ucyksXG4gICAgYWRkVGhlbWVUb0FuZ3VsYXJKc29uKCksXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBtZXJnZUZpbGVzKG9wdGlvbnM6IElTY2hlbWEpOiBSdWxlIHtcbiAgY29uc3QgdGVtcGxhdGVTb3VyY2U6IGFueSA9IGFwcGx5KFxuICAgIHVybCgnLi9maWxlcycpLFxuICAgIFtcbiAgICAgIHRlbXBsYXRlKHtcbiAgICAgICAgLi4uc3RyaW5ncyxcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIH0pLFxuICAgIF0sXG4gICk7XG4gIHJldHVybiBicmFuY2hBbmRNZXJnZShtZXJnZVdpdGgodGVtcGxhdGVTb3VyY2UpKTtcbn1cblxuZnVuY3Rpb24gYWRkVGhlbWVUb0FuZ3VsYXJKc29uKCk6IFJ1bGUge1xuICByZXR1cm4gKGhvc3Q6IFRyZWUpID0+IHtcbiAgICBjb25zdCB3b3Jrc3BhY2U6IFdvcmtzcGFjZVNjaGVtYSA9IGdldFdvcmtzcGFjZShob3N0KTtcbiAgICBjb25zdCBwcm9qZWN0OiBXb3Jrc3BhY2VQcm9qZWN0ID0gZ2V0UHJvamVjdEZyb21Xb3Jrc3BhY2Uod29ya3NwYWNlKTtcbiAgICBjb25zdCB0YXJnZXRPcHRpb25zOiBhbnkgPSBnZXRQcm9qZWN0VGFyZ2V0T3B0aW9ucyhwcm9qZWN0LCAnYnVpbGQnKTtcbiAgICBjb25zdCBhc3NldFBhdGg6IHN0cmluZyA9ICBgc3JjL3RoZW1lLnNjc3NgO1xuICAgIGNvbnN0IHByZWJ1aWx0VGhlbWVQYXRoU2VnbWVudDogc3RyaW5nID0gYHNyYy9zdHlsZXMuc2Nzc2A7XG5cbiAgICBpZiAoIXRhcmdldE9wdGlvbnMuc3R5bGVzKSB7XG4gICAgICB0YXJnZXRPcHRpb25zLnN0eWxlcyA9IFthc3NldFBhdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBleGlzdGluZ1N0eWxlczogYW55ID0gdGFyZ2V0T3B0aW9ucy5zdHlsZXMubWFwKChzOiBhbnkpID0+IHR5cGVvZiBzID09PSAnc3RyaW5nJyA/IHMgOiBzLmlucHV0KTtcblxuICAgICAgZm9yIChsZXQgW2luZGV4LCBzdHlsZVBhdGhdIG9mIGV4aXN0aW5nU3R5bGVzLmVudHJpZXMoKSkge1xuICAgICAgICBpZiAoc3R5bGVQYXRoID09PSBhc3NldFBhdGgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0eWxlUGF0aC5pbmNsdWRlcyhwcmVidWlsdFRoZW1lUGF0aFNlZ21lbnQpKSB7XG4gICAgICAgICAgdGFyZ2V0T3B0aW9ucy5zdHlsZXMuc3BsaWNlKGluZGV4LCAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGFyZ2V0T3B0aW9ucy5zdHlsZXMudW5zaGlmdChhc3NldFBhdGgpO1xuICAgIH1cbiAgICBob3N0Lm92ZXJ3cml0ZSgnYW5ndWxhci5qc29uJywgSlNPTi5zdHJpbmdpZnkod29ya3NwYWNlLCB1bmRlZmluZWQsIDIpKTtcbiAgICByZXR1cm4gaG9zdDtcbiAgfTtcbn1cbiJdfQ==