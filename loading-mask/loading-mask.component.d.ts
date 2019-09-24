import { ElementRef, OnInit } from '@angular/core';
export declare class TdLoadingMaskComponent implements OnInit {
    _defaultAnimationDuration: string;
    /**
     * Binding style rules on input values
     */
    borderRadius: string;
    width: string;
    height: string;
    animated: boolean;
    /**
     * Referencing animation span to dynamically change animation duration
     */
    animSpan: ElementRef;
    animationDuration: string;
    /**
     * Changing animation duration onInit
     * Binding animation onInit to prevent constant animation duration changes
     *
     */
    ngOnInit(): void;
}
