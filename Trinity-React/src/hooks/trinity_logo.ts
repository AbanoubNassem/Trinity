import { useConfigs } from '@/hooks/trinity_configs';
import { ThemeMode } from '@/Types/Models/Configs';

export function useLogo() {
    const configs = useConfigs();

    return configs?.themeMode == ThemeMode.Dark ? configs.whiteLogo ?? '/trinity/dist/logo.svg' : configs?.darkLogo ?? '/trinity/dist/logo.svg';
}
