import { QueryList, OnInit, OnDestroy, AfterContentInit, DoCheck, ChangeDetectorRef, ElementRef } from '@angular/core';
import { TdNavStepComponent } from '../nav-step/nav-step.component';
export declare class TdHorizontalStepperComponent implements OnInit, DoCheck, AfterContentInit, OnDestroy {
    private _elementRef;
    private _changeDetectorRef;
    private _resizeSubscription;
    private _widthSubject;
    private _resizing;
    private _showLeftArrow;
    private _showRightArrow;
    private _leftHidden;
    private _rightHidden;
    _steps: QueryList<TdNavStepComponent>;
    hiddenSteps: TdNavStepComponent[];
    constructor(_elementRef: ElementRef, _changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngDoCheck(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    readonly nativeElementWidth: number;
    /**
     * The total count of individual steps
     */
    readonly count: number;
    /**
     * Should we show the left Arrow
     */
    readonly showLeftArrow: boolean;
    /**
     * Should we show the right Arrow
     */
    readonly showRightArrow: boolean;
    showHiddenLeftStep(): void;
    showHiddenRightStep(): void;
    /**
     * Set the step line separators and display numbers
     */
    private setStepSettings;
    private displayWidthAvailableSteps;
}
