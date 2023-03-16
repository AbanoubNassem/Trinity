import trinityApp from '@/TrinityApp';

export function useLocalize(): (key: string, ...args: Array<string>) => string {
    return trinityApp.localize;
}
