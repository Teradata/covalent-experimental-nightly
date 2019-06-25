import { EventEmitter } from '@angular/core';
import { IHelpWindowToolbarComponentLabels } from '../../help.utils';
export declare class HelpWindowToolbarComponent {
    labels: IHelpWindowToolbarComponentLabels;
    closed: EventEmitter<void>;
    readonly helpLabel: string;
    readonly closeLabel: string;
}
