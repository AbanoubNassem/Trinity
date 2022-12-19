import { usePageProps } from "@/Composables/trinity_page_props";
import type Field from "@/Types/Field";
import type BaseComponent from "@/Types/BaseComponent";
import type BaseLayout from "@/Types/BaseLayout";

export function useGetResourceFields() {
  const pageProps = usePageProps();

  const fields: Array<Field> = [];
  for (const component of pageProps.value.resource?.schema ?? []) {
    getInnerFields(fields, component);
  }
  return fields;
}

function getInnerFields(fields: Array<Field>, component: BaseComponent) {
  switch (component.type) {
    case "Field":
      fields.push(component as Field);
      break;
    case "Layout": {
      for (const innerComponent of (component as BaseLayout).schema) {
        getInnerFields(fields, innerComponent);
      }
      break;
    }
  }
}
