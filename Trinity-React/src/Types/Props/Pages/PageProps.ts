import TrinityPageType from '@/types/Models/Pages/TrinityPageType';
import Configs from '@/types/Models/Configs';

export type { TrinityPageType };
export default interface PageProps<TData> extends TrinityPageType {
    configs: Configs;
    data?: TData;
    localize: (key: string, ...args: Array<string>) => string;
}
