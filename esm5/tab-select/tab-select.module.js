/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortalModule } from '@angular/cdk/portal';
import { MatTabsModule } from '@angular/material/tabs';
import { TdTabSelectComponent } from './tab-select.component';
import { TdTabOptionComponent } from './tab-option.component';
var CovalentTabSelectModule = /** @class */ (function () {
    function CovalentTabSelectModule() {
    }
    CovalentTabSelectModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        TdTabSelectComponent,
                        TdTabOptionComponent,
                    ],
                    // directives, components, and pipes owned by this NgModule
                    imports: [
                        /** Angular Modules */
                        CommonModule,
                        FormsModule,
                        /** Material Modules */
                        PortalModule,
                        MatTabsModule,
                    ],
                    // modules needed to run this module
                    exports: [
                        TdTabSelectComponent,
                        TdTabOptionComponent,
                    ],
                },] }
    ];
    return CovalentTabSelectModule;
}());
export { CovalentTabSelectModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXNlbGVjdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL3RhYi1zZWxlY3QvIiwic291cmNlcyI6WyJ0YWItc2VsZWN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFOUQ7SUFBQTtJQWtCc0MsQ0FBQzs7Z0JBbEJ0QyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLG9CQUFvQjt3QkFDcEIsb0JBQW9CO3FCQUNyQjs7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHNCQUFzQjt3QkFDdEIsWUFBWTt3QkFDWixXQUFXO3dCQUNYLHVCQUF1Qjt3QkFDdkIsWUFBWTt3QkFDWixhQUFhO3FCQUNkOztvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asb0JBQW9CO3dCQUNwQixvQkFBb0I7cUJBQ3JCO2lCQUNGOztJQUNxQyw4QkFBQztDQUFBLEFBbEJ2QyxJQWtCdUM7U0FBMUIsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IE1hdFRhYnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJzJztcblxuaW1wb3J0IHsgVGRUYWJTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL3RhYi1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IFRkVGFiT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi90YWItb3B0aW9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRkVGFiU2VsZWN0Q29tcG9uZW50LFxuICAgIFRkVGFiT3B0aW9uQ29tcG9uZW50LFxuICBdLCAvLyBkaXJlY3RpdmVzLCBjb21wb25lbnRzLCBhbmQgcGlwZXMgb3duZWQgYnkgdGhpcyBOZ01vZHVsZVxuICBpbXBvcnRzOiBbXG4gICAgLyoqIEFuZ3VsYXIgTW9kdWxlcyAqL1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICAvKiogTWF0ZXJpYWwgTW9kdWxlcyAqL1xuICAgIFBvcnRhbE1vZHVsZSxcbiAgICBNYXRUYWJzTW9kdWxlLFxuICBdLCAvLyBtb2R1bGVzIG5lZWRlZCB0byBydW4gdGhpcyBtb2R1bGVcbiAgZXhwb3J0czogW1xuICAgIFRkVGFiU2VsZWN0Q29tcG9uZW50LFxuICAgIFRkVGFiT3B0aW9uQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudFRhYlNlbGVjdE1vZHVsZSB7fVxuIl19