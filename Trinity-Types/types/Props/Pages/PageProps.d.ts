import TrinityPage from '@/types/Models/Pages/TrinityPage';
import Configs from '@/types/Models/Configs';
export { TrinityPage };
export default interface PageProps<TData> extends TrinityPage {
    configs: Configs;
    data?: TData;
    localize: (key: string, ...args: Array<string>) => string;
}
