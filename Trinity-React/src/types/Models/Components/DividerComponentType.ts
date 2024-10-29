import TrinityComponentType from '@/types/Models/TrinityComponentType';

export default interface DividerComponentType extends TrinityComponentType {
    dividerType?: 'solid' | 'dashed' | 'dotted';
    dividerLayout?: 'vertical' | 'horizontal';
    color?: string;
}
