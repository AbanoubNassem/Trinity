import TrinityFieldType from '@/types/Models/Fields/TrinityFieldType';
import * as React from 'react';
import { InputNumberPassThroughType } from 'primereact/inputnumber';

export default interface NumberFieldType extends TrinityFieldType {
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
    incrementButtonIcon?: InputNumberPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    decrementButtonIcon?: InputNumberPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}
