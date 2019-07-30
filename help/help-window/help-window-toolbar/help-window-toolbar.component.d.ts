import { EventEmitter } from '@angular/core';
import { IHelpWindowToolbarComponentLabels } from '../../help.utils';
import { ThemePalette } from '@angular/material/core';
export declare class HelpWindowToolbarComponent {
    labels: IHelpWindowToolbarComponentLabels;
    toolbarColor: ThemePalette;
    closed: EventEmitter<void>;
    readonly helpLabel: string;
    readonly closeLabel: string;
}
