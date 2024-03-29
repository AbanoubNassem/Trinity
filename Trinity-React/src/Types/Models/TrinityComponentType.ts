import { CSSProperties } from 'react';

export default interface TrinityComponentType {
    componentName: string;
    type: string;
    id: string;
    label: string;
    columnSpan: number;
    toggleable: boolean;
    isToggledHiddenByDefault: boolean;
    hidden: boolean;
    visible: boolean;
    tooltip?: string;
    style?: CSSProperties;
    disabled: boolean;
}
