import Configs from '@/types/Models/Configs';
import trinityApp from '@/TrinityApp';

export function useConfigs(): Configs {
    return trinityApp.configs;
}
