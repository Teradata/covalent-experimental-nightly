import { MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { IHelpMenuDataItem, IHelpWindowComponentLabels } from '../help.utils';
import { Overlay } from '@angular/cdk/overlay';
import { ThemePalette } from '@angular/material/core';
import { HelpWindowComponent } from '../help-window/help-window.component';
import { TdDialogService } from '@covalent/core/dialogs';
interface IDraggableHelpWindowDialogServiceConfig {
    items: IHelpMenuDataItem[];
    dialogConfig?: MatDialogConfig;
    labels?: IHelpWindowComponentLabels;
    toolbarColor?: ThemePalette;
}
export declare class DraggableHelpWindowDialogService {
    private _overlay;
    private _tdDialogService;
    constructor(_overlay: Overlay, _tdDialogService: TdDialogService);
    open(config: IDraggableHelpWindowDialogServiceConfig): MatDialogRef<HelpWindowComponent>;
}
export {};
