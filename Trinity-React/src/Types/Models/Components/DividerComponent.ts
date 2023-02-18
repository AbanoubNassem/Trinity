import BaseComponent from '@/types/Models/BaseComponent';

export default interface DividerComponent extends BaseComponent {
    dividerType?: 'solid' | 'dashed' | 'dotted';
    dividerLayout?: 'vertical' | 'horizontal';
    color?: string;
}
