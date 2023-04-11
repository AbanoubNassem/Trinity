import React, { CSSProperties } from 'react';
import TrinityField from '@/types/Models/Fields/TrinityField';
import { Errors, ErrorBag } from '@inertiajs/core/types/types';
declare const BaseFieldComponent: ({ component, errors, children, style }: {
    component: TrinityField;
    errors: Errors & ErrorBag;
    children?: React.ReactNode;
    style?: CSSProperties | undefined;
}) => JSX.Element;
export default BaseFieldComponent;
