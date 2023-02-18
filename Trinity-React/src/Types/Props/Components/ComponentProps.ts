import BaseComponent from '@/types/Models/BaseComponent';

export default interface ComponentProps<T extends BaseComponent> {
    component: T;
}
