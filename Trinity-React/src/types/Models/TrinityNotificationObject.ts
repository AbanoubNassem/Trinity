import TrinityActionType from '@/types/Models/Actions/TrinityActionType';

export interface TrinityNotificationData {
    title: string;
    body: string;
    bodyColor: string | null;
    icon: string | null;
    iconColor: string | null;
    image: string | null;
    action: TrinityActionType | null;
}

export interface TrinityNotificationObject {
    id?: string | number;
    data: string | TrinityNotificationData;
    created_at?: Date;
    read_at?: Date;
}
