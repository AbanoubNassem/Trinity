import { useConfigs } from '@/hooks/trinity_configs';
import { ThemeMode } from '@/types/Models/Configs';

export function useLogo() {
    const configs = useConfigs();

    return configs?.themeMode == ThemeMode.Dark ? configs.whiteLogo ?? `/${configs?.prefix}/trinity/logo.svg` : configs?.darkLogo ?? `/${configs?.prefix}/trinity/logo.svg`;
}
