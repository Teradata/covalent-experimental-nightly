import { ElementRef, Renderer2, AfterViewInit, ChangeDetectorRef } from '@angular/core';
export declare class TdBreadcrumbComponent implements AfterViewInit {
    private _elementRef;
    private _renderer;
    private _changeDetectorRef;
    private _displayCrumb;
    private _width;
    separatorIcon: string;
    _displayIcon: boolean;
    /**
     * Whether to display the crumb or not
     */
    displayCrumb: boolean;
    /**
     * Width of the DOM element of the crumb
     */
    readonly width: number;
    private readonly displayBinding;
    constructor(_elementRef: ElementRef, _renderer: Renderer2, _changeDetectorRef: ChangeDetectorRef);
    ngAfterViewInit(): void;
    /**
     * Stop click propagation when clicking on icon
     */
    _handleIconClick(event: Event): void;
}
