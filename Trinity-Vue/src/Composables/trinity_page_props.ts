import { usePage } from "@inertiajs/inertia-vue3";
import type { Resource } from "@/Types/Resource";
import type Configs from "@/Types/Configs";
import { shallowRef, watch } from "vue";
import type Errors from "@/Types/errors";

export function usePageProps<T extends object>() {
  const { props: $props } = usePage<{
    controller: {
      configs?: Configs;
      resources?: Array<Resource>;
      resource?: Resource;
      data?: T;
      errors?: Errors;
    };
    sharedProps: {};
  }>();

  const trinityProps = shallowRef<{
    configs?: Configs;
    resources?: Array<Resource>;
    resource?: Resource;
    data?: T;
    errors?: Errors;
  }>({
    ...$props.value.controller,
    ...$props.value.sharedProps,
  });

  watch($props, (value) => {
    trinityProps.value = {
      ...value.controller,
      ...value.sharedProps,
    };
  });

  return trinityProps;
}
