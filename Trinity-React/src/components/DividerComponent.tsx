import ComponentProps from '@/types/Props/Components/ComponentProps';
import { Divider } from 'primereact/divider';
import DividerComponentType from '@/types/Models/Components/DividerComponentType';

const DividerComponent = ({ component }: ComponentProps<DividerComponentType>) => {
    return (
        <>
            {component.color && (
                <style>{`
                #${component.id}:before {
                    border-color: ${component.color};
                }
            `}</style>
            )}
            <Divider
                id={component.id}
                style={component.style}
                type={component.dividerType}
                layout={component.dividerLayout}
            />
        </>
    );
};

export default DividerComponent;
