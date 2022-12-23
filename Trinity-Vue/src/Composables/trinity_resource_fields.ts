import { usePageProps } from "@/Composables/trinity_page_props";
import type BaseComponent from "@/Types/Models/BaseComponent";
import type BaseLayout from "@/Types/Models/BaseLayout";
import type BaseField from "@/Types/Models/BaseField";

export function useGetResourceFields() {
  const pageProps = usePageProps();

  const fields: Array<BaseField> = [];
  for (const component of pageProps.value.resource?.schema ?? []) {
    getInnerFields(fields, component);
  }
  return fields;
}

function getInnerFields(fields: Array<BaseField>, component: BaseComponent) {
  switch (component.type) {
    case "Field":
      fields.push(component as BaseField);
      break;
    case "Layout": {
      for (const innerComponent of (component as BaseLayout).schema) {
        getInnerFields(fields, innerComponent);
      }
      break;
    }
  }
}
