import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { DraggableHelpWindowDialogComponent } from './draggable-help-window-dialog.component';
import { IHelpMenuDataItem, IHelpWindowComponentLabels } from '../help.utils';
import { Overlay, NoopScrollStrategy } from '@angular/cdk/overlay';
export declare class DraggableHelpWindowDialogService {
    private _dialog;
    scrollStrategy: NoopScrollStrategy;
    constructor(_dialog: MatDialog, overlay: Overlay);
    open(items: IHelpMenuDataItem[], config?: MatDialogConfig, labels?: IHelpWindowComponentLabels): MatDialogRef<DraggableHelpWindowDialogComponent>;
}
