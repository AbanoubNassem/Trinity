import TrinityColumn from '@/types/Models/Columns/TrinityColumn';
export default interface ImageColumn extends TrinityColumn {
    alt?: string;
    width?: string;
    height: string;
    isCircular: boolean;
    isPreviewable: boolean;
    isDownloadable: boolean;
}
