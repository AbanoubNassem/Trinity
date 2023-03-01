import TrinityField from '@/types/Models/Fields/TrinityField';

export default interface NumberField extends TrinityField {
    formatMode?: 'decimal' | 'currency' | undefined;
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
    buttonLayout?: 'stacked' | 'horizontal' | 'vertical' | undefined;
    incrementButtonClassName?: string;
    decrementButtonClassName?: string;
    incrementButtonIcon?: string;
    decrementButtonIcon?: string;
}
