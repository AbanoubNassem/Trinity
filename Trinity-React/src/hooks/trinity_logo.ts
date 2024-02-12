import { useConfigs } from '@/hooks/trinity_configs';
import { ThemeMode } from '@/types/Models/Configs';

export function useLogo() {
    const configs = useConfigs();
    let url = '';
    // @ts-ignore
    if (import.meta.env.DEV) {
        url = configs.viteUrl;
    } else {
        url = `/${configs?.prefix}/trinity/dist`;
    }

    return configs?.themeMode == ThemeMode.Dark ? configs.whiteLogo ?? `${url}/logo.svg` : configs?.darkLogo ?? `${url}/logo.svg`;
}
