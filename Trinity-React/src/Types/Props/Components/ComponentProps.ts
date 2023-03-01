import BaseComponent from '@/types/Models/TrinityComponent';

export default interface ComponentProps<T extends BaseComponent> {
    component: T;
}
