import { EventEmitter } from '@angular/core';
import { IHelpMenuDataItem, IHelpWindowComponentLabels } from '../help.utils';
import { ThemePalette } from '@angular/material/core';
export declare class HelpWindowComponent {
    items: IHelpMenuDataItem[];
    draggable: boolean;
    labels: IHelpWindowComponentLabels;
    toolbarColor: ThemePalette;
    closed: EventEmitter<void>;
    readonly height: number;
}
