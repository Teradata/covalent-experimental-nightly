import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { DraggableHelpWindowDialogComponent } from './draggable-help-window-dialog.component';
import { IHelpMenuDataItem, IHelpWindowComponentLabels } from '../help.utils';
import { Overlay, NoopScrollStrategy } from '@angular/cdk/overlay';
import { ThemePalette } from '@angular/material/core';
interface IDraggableHelpWindowDialogServiceConfig {
    items: IHelpMenuDataItem[];
    dialogConfig?: MatDialogConfig;
    labels?: IHelpWindowComponentLabels;
    toolbarColor?: ThemePalette;
}
export declare class DraggableHelpWindowDialogService {
    private _dialog;
    scrollStrategy: NoopScrollStrategy;
    constructor(_dialog: MatDialog, overlay: Overlay);
    open(config: IDraggableHelpWindowDialogServiceConfig): MatDialogRef<DraggableHelpWindowDialogComponent>;
}
export {};
