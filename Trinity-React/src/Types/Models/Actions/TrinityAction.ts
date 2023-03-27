import TrinityComponent from '@/types/Models/TrinityComponent';

export default interface TrinityAction extends TrinityComponent {
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
    schema?: Array<TrinityComponent>;
}
