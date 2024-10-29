import TrinityColumnType from '@/types/Models/Columns/TrinityColumnType';

export default interface ImageColumnType extends TrinityColumnType {
    alt?: string;
    width?: string;
    height: string;
    isCircular: boolean;
    isPreviewable: boolean;
    isDownloadable: boolean;
}
