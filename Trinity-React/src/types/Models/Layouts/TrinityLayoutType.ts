import TrinityComponentType from '@/types/Models/TrinityComponentType';

export default interface TrinityLayoutType extends TrinityComponentType {
    columns?: number;

    schema: Array<TrinityComponentType>;
}
