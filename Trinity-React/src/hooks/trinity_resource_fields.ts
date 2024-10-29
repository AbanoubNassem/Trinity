import usePageProps from '@/hooks/trinity_page_props';
import TrinityFieldType from '@/types/Models/Fields/TrinityFieldType';
import BaseComponent from '@/types/Models/TrinityComponentType';
import TrinityLayoutType from '@/types/Models/Layouts/TrinityLayoutType';

export function useTrinityFields() {
    const pageProps = usePageProps();

    const fields: Array<TrinityFieldType> = [];
    for (const component of pageProps.resource?.schema ?? []) {
        getInnerFields(fields, component);
    }
    return fields;
}

function getInnerFields(fields: Array<TrinityFieldType>, component: BaseComponent) {
    switch (component.type) {
        case 'Field':
            fields.push(component as TrinityFieldType);
            break;
        case 'Layout': {
            for (const innerComponent of (component as TrinityLayoutType).schema) {
                getInnerFields(fields, innerComponent);
            }
            break;
        }
    }
}
