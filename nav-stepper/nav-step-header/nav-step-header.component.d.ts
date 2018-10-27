import { ICanDisable, ICanDisableRipple } from '@covalent/core/common';
import { StepState } from '../nav-step/nav-step.component';
export declare class TdNavStepHeaderBase {
}
export declare const _TdNavStepHeaderMixinBase: (new (...args: any[]) => ICanDisableRipple) & (new (...args: any[]) => ICanDisable) & typeof TdNavStepHeaderBase;
export declare class TdNavStepHeaderComponent extends _TdNavStepHeaderMixinBase implements ICanDisable, ICanDisableRipple {
    /**
     * Should display the line after the step
     */
    displayLine: boolean;
    /**
     * Number assigned to [TdNavStepHeaderComponent].
     */
    number: number;
    /**
     * active?: boolean
     * Sets for active/inactive states on header.
     */
    active: boolean;
    /**
     * state?: StepState or ['none' | 'required' | 'complete']
     * Sets styles for state of header.
     * Defaults to [StepState.None | 'none'].
     */
    state: StepState;
    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     */
    isComplete(): boolean;
    /**
     * Returns 'true' if [state] equals to [StepState.Required | 'required'], else 'false'.
     */
    isRequired(): boolean;
}
