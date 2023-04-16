class TrinityLocalizer {
    private readonly locale: { [key: string]: string } = {};
    private readonly fallbackLocale: { [key: string]: string } = {};

    constructor(locale: { [key: string]: string }, fallbackLocale: { [key: string]: string }) {
        this.locale = locale ?? {};
        this.fallbackLocale = fallbackLocale ?? {};
    }

    localize(key: string, ...args: Array<string>): string {
        let value = this.locale[key] ?? this.fallbackLocale[key] ?? key;
        for (let i = 0; i < args.length; i++) {
            value = value.replace(`{${i}}`, args[i]);
        }
        return value;
    }
}

export default TrinityLocalizer;
