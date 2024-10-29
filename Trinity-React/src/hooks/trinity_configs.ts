import Configs from '@/types/Models/Configs';

export function useConfigs(): Configs {
    return window.trinityApp.configs;
}
