import BaseField from '@/types/Models/Fields/BaseField';
import BaseComponent from '@/types/Models/BaseComponent';

export default interface RepeaterField extends BaseField {
    schema?: Array<BaseComponent>;
    isCollapsible: boolean;
}
