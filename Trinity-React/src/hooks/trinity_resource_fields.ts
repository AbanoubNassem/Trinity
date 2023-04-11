import usePageProps from '@/hooks/trinity_page_props';
import TrinityField from '@/types/Models/Fields/TrinityField';
import BaseComponent from '@/types/Models/TrinityComponent';
import TrinityLayout from '@/types/Models/Layouts/TrinityLayout';

export function useTrinityFields() {
    const pageProps = usePageProps();

    const fields: Array<TrinityField> = [];
    for (const component of pageProps.resource?.schema ?? []) {
        getInnerFields(fields, component);
    }
    return fields;
}

function getInnerFields(fields: Array<TrinityField>, component: BaseComponent) {
    switch (component.type) {
        case 'Field':
            fields.push(component as TrinityField);
            break;
        case 'Layout': {
            for (const innerComponent of (component as TrinityLayout).schema) {
                getInnerFields(fields, innerComponent);
            }
            break;
        }
    }
}
