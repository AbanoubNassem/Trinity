import TrinityColumnType from '@/types/Models/Columns/TrinityColumnType';

export default interface TextColumnType extends TrinityColumnType {
    url?: string;
    openUrlInNewTab: boolean;
    dateTimeFormat?: string;
    timeAgo: boolean;
    currency?: string;
}
