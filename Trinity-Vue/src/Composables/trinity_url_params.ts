export function useUrlParams() {
  return new Proxy<any>(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => JSON.parse(searchParams.get(prop.toString())),
  });
}
