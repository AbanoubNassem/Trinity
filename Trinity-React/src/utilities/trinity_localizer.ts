class TrinityLocalizer {
    private readonly locale: { [key: string]: string } = {};

    constructor(locale: { [key: string]: string }) {
        this.locale = locale;
    }

    localize(key: string, ...args: Array<string>): string {
        let value = this.locale[key] || key;
        for (let i = 0; i < args.length; i++) {
            value = value.replace(`{${i}}`, args[i]);
        }
        return value;
    }
}

export default TrinityLocalizer;
