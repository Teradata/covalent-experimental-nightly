import { EventEmitter } from '@angular/core';
import { IHelpMenuDataItem, IHelpWindowComponentLabels, IHelpComponentLabels } from '../help.utils';
import { ThemePalette } from '@angular/material/core';
export declare class HelpWindowComponent {
    items: IHelpMenuDataItem[];
    labels: IHelpWindowComponentLabels;
    toolbarColor: ThemePalette;
    closed: EventEmitter<void>;
    readonly helpComponentLabels: IHelpComponentLabels;
    readonly helpLabel: string;
    readonly closeLabel: string;
}
