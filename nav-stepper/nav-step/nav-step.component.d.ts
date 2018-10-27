import { ElementRef, AfterViewInit, OnInit, Renderer2, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
export declare enum StepState {
    None = "none",
    Required = "required",
    Complete = "complete"
}
export declare class TdNavStepComponent implements AfterViewInit, OnInit {
    private _elementRef;
    private router;
    private _renderer;
    private _changeDetectorRef;
    private _displayStep;
    private _displayLine;
    private _width;
    private _active;
    number: number;
    /**
     * routerLink?: string
     * routerLink to navigate to
     * Defaults to empty
     */
    routerLink: string;
    /**
     * state?: StepState
     * state of step
     * Defaults to none
     */
    state: StepState;
    /**
     * sublabel?: string
     * Sublabel to display in step header
     * Defaults to empty
     */
    sublabel: string;
    constructor(_elementRef: ElementRef, router: Router, _renderer: Renderer2, _changeDetectorRef: ChangeDetectorRef);
    isRequired(): boolean;
    isComplete(): boolean;
    /**
    * Whether to display the step or not
    */
    displayStep: boolean;
    /**
    * Whether to display the step or not
    */
    displayLine: boolean;
    /**
     * Whether step is active
     */
    readonly active: boolean;
    /**
     * Width of the DOM element of the step
     */
    readonly width: number;
    /**
     * Gets the display style of the crumb
     */
    readonly displayBinding: string;
    ngAfterViewInit(): void;
    ngOnInit(): void;
}
