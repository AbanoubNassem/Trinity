import usePageProps from '@/hooks/trinity_page_props';
import BaseField from '@/types/Models/Fields/BaseField';
import BaseComponent from '@/types/Models/BaseComponent';
import BaseLayout from '@/types/Models/Layouts/BaseLayout';

export function useTrinityFields() {
    const pageProps = usePageProps();

    const fields: Array<BaseField> = [];
    for (const component of pageProps.resource?.schema ?? []) {
        getInnerFields(fields, component);
    }
    return fields;
}

function getInnerFields(fields: Array<BaseField>, component: BaseComponent) {
    switch (component.type) {
        case 'Field':
            fields.push(component as BaseField);
            break;
        case 'Layout': {
            for (const innerComponent of (component as BaseLayout).schema) {
                getInnerFields(fields, innerComponent);
            }
            break;
        }
    }
}
