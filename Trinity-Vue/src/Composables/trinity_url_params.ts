export function useUrlParams() {
  return new Proxy<any>(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop.toString()),
  });
}
