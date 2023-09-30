import TrinityActionType from '@/types/Models/Actions/TrinityActionType';

export interface TrinityNotificationData {
    id: string | number;
    data: {
        title: string;
        body: string;
        bodyColor: string | null;
        icon: string | null;
        iconColor: string | null;
        image: string | null;
        action: TrinityActionType | null;
    };
}
