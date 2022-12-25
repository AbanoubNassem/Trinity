import type Errors from "@/Types/Models/errors";
import type BaseComponent from "@/Types/Models/BaseComponent";
import {InertiaFormProps} from "@inertiajs/inertia-react";

export default interface LayoutProps<T extends BaseComponent> {
  component: T;
  form: InertiaFormProps<any>;
  errors: Errors;
}
