import type { Component as VueComponent } from "vue";
import type { InertiaFormProps } from "@inertiajs/inertia-vue3";
import type Errors from "@/Types/errors";

export default interface ComponentProps<T> {
  component: T;
  is?: string | VueComponent | object;
  containerClass?: string;
  attrs?: object;
  form: InertiaFormProps<any>;
  errors: Errors;
  setFieldValue: (attr: string, value: any) => void;
}
