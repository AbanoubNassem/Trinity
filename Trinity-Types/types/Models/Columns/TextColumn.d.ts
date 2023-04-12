import TrinityColumn from '@/types/Models/Columns/TrinityColumn';
export default interface TextColumn extends TrinityColumn {
    url?: string;
    openUrlInNewTab: boolean;
    dateTimeFormat?: string;
    timeAgo: boolean;
    currency?: string;
}
