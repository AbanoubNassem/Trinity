import TrinityComponent from '@/types/Models/TrinityComponent';

export default interface DividerComponent extends TrinityComponent {
    dividerType?: 'solid' | 'dashed' | 'dotted';
    dividerLayout?: 'vertical' | 'horizontal';
    color?: string;
}
