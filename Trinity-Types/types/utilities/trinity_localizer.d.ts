declare class TrinityLocalizer {
    private readonly locale;
    private readonly fallbackLocale;
    constructor(locale: {
        [key: string]: string;
    }, fallbackLocale: {
        [key: string]: string;
    });
    localize(key: string, ...args: Array<string>): string;
}
export default TrinityLocalizer;
