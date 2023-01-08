export default interface BaseComponent {
    componentName: string;
    type: string;
    label: string;
    columnSpan: number;
    toggleable: boolean;
    isToggledHiddenByDefault: boolean;
    hidden: boolean;
    visible: boolean;
    tooltip?: string;
}
