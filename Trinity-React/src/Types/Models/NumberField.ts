import type BaseField from '@/Types/Models/BaseField';

export default interface NumberField extends BaseField {
    formatMode?: string;
    minFractionDigits?: number;
    maxFractionDigits?: number;
    currency?: string;
    currencyDisplay?: string;
    inputSuffix?: string;
    inputPrefix?: string;
    min?: number;
    max?: number;
    step?: number;
    showButtons?: boolean;
    buttonLayout?: string;
    incrementButtonClassName?: string;
    decrementButtonClassName?: string;
    incrementButtonIcon?: string;
    decrementButtonIcon?: string;
}
