import ComponentProps from '@/types/Props/Components/ComponentProps';
import { Divider } from 'primereact/divider';
import DividerComponent from '@/types/Models/Components/DividerComponent';

const DividerComponent = ({ component }: ComponentProps<DividerComponent>) => {
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
