import { MatDialogRef } from '@angular/material/dialog';
export declare class DraggableHelpWindowDialogComponent {
    data: any;
    dialogRef: MatDialogRef<DraggableHelpWindowDialogComponent>;
    constructor(data: any, dialogRef: MatDialogRef<DraggableHelpWindowDialogComponent>);
    handleClosed(): void;
}
