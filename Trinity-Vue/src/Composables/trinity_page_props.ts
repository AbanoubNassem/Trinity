import { usePage } from "@inertiajs/inertia-vue3";
import type { Resource } from "@/Models/Resource";
import type IPaginator from "@/Models/Paginator";
import type Field from "@/Models/Field";
import type Configs from "@/Models/Configs";
import type { Ref, UnwrapRef } from "vue";
import { ref, watch } from "vue";
import type Errors from "@/Models/errors";

export const usePageProps = (): Ref<
  UnwrapRef<
    {
      configs?: Configs;
      resources?: Array<Resource>;
      resource?: Resource;
      paginator?: IPaginator;
      errors?: Errors;
    } & { [key: string]: object }
  >
> => {
  const { props: $props } = usePage<{
    controller: {
      resource: Resource;
      paginator: IPaginator;
    };
    sharedProps: {};
  }>();

  const trinityProps = ref({
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
};
