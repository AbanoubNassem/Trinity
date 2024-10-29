export function useLocalize(): (key: string, ...args: Array<string>) => string {
    return window.trinityApp.localize;
}
