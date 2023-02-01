import { useLogo } from '@/hooks/trinity_logo';
import { useConfigs } from '@/hooks/trinity_configs';

const AppFooter = () => {
    const configs = useConfigs();
    const logo = useLogo();

    return (
        <div className="layout-footer">
            <img
                src={logo}
                alt={configs.title}
                height="20"
                className="mr-2"
            />
            by
            <span className="font-medium ml-2">Abanoub Nassem</span>
        </div>
    );
};

export default AppFooter;
