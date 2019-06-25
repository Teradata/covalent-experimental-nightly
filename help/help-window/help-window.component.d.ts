import { EventEmitter } from '@angular/core';
import { IHelpMenuDataItem, IHelpWindowComponentLabels } from '../help.utils';
export declare class HelpWindowComponent {
    items: IHelpMenuDataItem[];
    draggable: boolean;
    labels: IHelpWindowComponentLabels;
    closed: EventEmitter<void>;
    readonly height: number;
}
