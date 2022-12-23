export function useUrlParams() {
    return new Proxy<any>(new URLSearchParams(window.location.search), {
        get(target: any, prop: string | symbol): any {
            return target.get(prop.toString());
        }
    });
}
