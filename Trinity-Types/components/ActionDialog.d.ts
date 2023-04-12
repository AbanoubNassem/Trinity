import React from 'react';
import TrinityActionModel from '@/types/Models/Actions/TrinityAction';
interface Props {
    actionData?: {
        action: TrinityActionModel;
        items: Array<any>;
    } | undefined;
    onHide: () => void;
}
export declare const ActionDialog: React.MemoExoticComponent<({ actionData, onHide }: Props) => JSX.Element>;
export {};
