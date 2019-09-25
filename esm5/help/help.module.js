/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help.component';
import { HelpWindowComponent } from './help-window/help-window.component';
import { HelpWindowToolbarComponent } from './help-window/help-window-toolbar/help-window-toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CovalentFlavoredMarkdownModule } from '@covalent/flavored-markdown';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatToolbarModule } from '@angular/material/toolbar';
var CovalentHelpModule = /** @class */ (function () {
    function CovalentHelpModule() {
    }
    CovalentHelpModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        // material
                        MatButtonModule,
                        MatTooltipModule,
                        MatListModule,
                        MatIconModule,
                        MatDialogModule,
                        MatProgressBarModule,
                        DragDropModule,
                        MatToolbarModule,
                        CovalentFlavoredMarkdownModule,
                    ],
                    declarations: [HelpComponent, HelpWindowComponent, HelpWindowToolbarComponent],
                    exports: [HelpComponent, HelpWindowComponent],
                    entryComponents: [HelpWindowComponent],
                },] }
    ];
    return CovalentHelpModule;
}());
export { CovalentHelpModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZXhwZXJpbWVudGFsL2hlbHAvIiwic291cmNlcyI6WyJoZWxwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFN0Q7SUFBQTtJQW9CaUMsQ0FBQzs7Z0JBcEJqQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBRVosV0FBVzt3QkFDWCxlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsYUFBYTt3QkFDYixhQUFhO3dCQUNiLGVBQWU7d0JBQ2Ysb0JBQW9CO3dCQUNwQixjQUFjO3dCQUNkLGdCQUFnQjt3QkFFaEIsOEJBQThCO3FCQUMvQjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsMEJBQTBCLENBQUM7b0JBQzlFLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQztvQkFDN0MsZUFBZSxFQUFFLENBQUMsbUJBQW1CLENBQUM7aUJBQ3ZDOztJQUNnQyx5QkFBQztDQUFBLEFBcEJsQyxJQW9Ca0M7U0FBckIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIZWxwQ29tcG9uZW50IH0gZnJvbSAnLi9oZWxwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWxwV2luZG93Q29tcG9uZW50IH0gZnJvbSAnLi9oZWxwLXdpbmRvdy9oZWxwLXdpbmRvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVscFdpbmRvd1Rvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL2hlbHAtd2luZG93L2hlbHAtd2luZG93LXRvb2xiYXIvaGVscC13aW5kb3ctdG9vbGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7IE1hdExpc3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9saXN0JztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBNYXRQcm9ncmVzc0Jhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhcic7XG5pbXBvcnQgeyBDb3ZhbGVudEZsYXZvcmVkTWFya2Rvd25Nb2R1bGUgfSBmcm9tICdAY292YWxlbnQvZmxhdm9yZWQtbWFya2Rvd24nO1xuaW1wb3J0IHsgRHJhZ0Ryb3BNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcbmltcG9ydCB7IE1hdFRvb2xiYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sYmFyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcblxuICAgIC8vIG1hdGVyaWFsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgTWF0TGlzdE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBEcmFnRHJvcE1vZHVsZSxcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxuXG4gICAgQ292YWxlbnRGbGF2b3JlZE1hcmtkb3duTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtIZWxwQ29tcG9uZW50LCBIZWxwV2luZG93Q29tcG9uZW50LCBIZWxwV2luZG93VG9vbGJhckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtIZWxwQ29tcG9uZW50LCBIZWxwV2luZG93Q29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbSGVscFdpbmRvd0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50SGVscE1vZHVsZSB7fVxuIl19