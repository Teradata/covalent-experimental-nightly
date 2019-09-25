import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { chain, branchAndMerge, mergeWith, apply, url, template } from '@angular-devkit/schematics';
import { addPackageToPackageJson } from '@angular/material/schematics/ng-add/package-config';
import { strings } from '@angular-devkit/core';
import { getProjectFromWorkspace, getProjectTargetOptions } from '@angular/cdk/schematics';
import { getWorkspace } from '@schematics/angular/utility/config';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdRenameMeComponent {
    constructor() {
        // stub
    }
}
TdRenameMeComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-renameMe',
                template: "<a href=\"https://github.com/Teradata/covalent\"> Test Link </a>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
TdRenameMeComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CovalentRenameMeModule {
}
CovalentRenameMeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [TdRenameMeComponent],
                exports: [TdRenameMeComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const covalentCoreVersion = '2.0.0';
/** @type {?} */
const materialVersion = '7.0.1';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DynamicForms {
    /**
     * @param {?} options
     * @return {?}
     */
    enabled(options) {
        return options.dynamicForms;
    }
    /**
     * @return {?}
     */
    dependency() {
        return '@covalent/dynamic-forms';
    }
}
class Http {
    /**
     * @param {?} options
     * @return {?}
     */
    enabled(options) {
        return options.http;
    }
    /**
     * @return {?}
     */
    dependency() {
        return '@covalent/http';
    }
}
class Highlight {
    /**
     * @param {?} options
     * @return {?}
     */
    enabled(options) {
        return options.highlight;
    }
    /**
     * @return {?}
     */
    dependency() {
        return '@covalent/highlight';
    }
}
class Markdown {
    /**
     * @param {?} options
     * @return {?}
     */
    enabled(options) {
        return options.markdown;
    }
    /**
     * @return {?}
     */
    dependency() {
        return '@covalent/markdown';
    }
}
class FlavoredMarkdown {
    /**
     * @param {?} options
     * @return {?}
     */
    enabled(options) {
        return options.flavoredMarkdown;
    }
    /**
     * @return {?}
     */
    dependency() {
        return '@covalent/flavored-markdown';
    }
}
class CodeEditor {
    /**
     * @param {?} options
     * @return {?}
     */
    enabled(options) {
        return options.codeEditor;
    }
    /**
     * @return {?}
     */
    dependency() {
        return '@covalent/code-editor';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} options
 * @return {?}
 */
function addDependenciesAndFiles(options) {
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

export { CovalentRenameMeModule, TdRenameMeComponent, addDependenciesAndFiles };
//# sourceMappingURL=covalent-experimental.js.map
