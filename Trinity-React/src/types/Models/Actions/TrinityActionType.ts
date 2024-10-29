import TrinityComponentType from '@/types/Models/TrinityComponentType';

export default interface TrinityActionType extends TrinityComponentType {
    actionName: string;
    icon?: string;
    severity: string;
    url?: string;
    openUrlInNewTab: boolean;
    requiresConfirmation: boolean;
    confirmHeader?: string;
    confirmHeaderClassNames?: string;
    confirmText?: string;
    confirmTextClassNames?: string;
    confirmTextIcon?: string;
    confirmButtonText?: string;
    confirmButtonIcon?: string;
    confirmButtonClassNames?: string;
    cancelButtonText?: string;
    cancelButtonIcon?: string;
    cancelButtonClassNames?: string;
    schema?: Array<TrinityComponentType>;
}
