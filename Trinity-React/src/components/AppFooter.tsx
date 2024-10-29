import { useLogo } from '@/hooks/trinity_logo';
import { useConfigs } from '@/hooks/trinity_configs';

const AppFooter = () => {
    const configs = useConfigs();
    const logo = useLogo();

    return (
        <div className="layout-footer">
            {configs.footer ? (
                <div dangerouslySetInnerHTML={{ __html: configs.footer.value }}></div>
            ) : (
                <>
                    <span className="font-medium ml-2">© {new Date().getFullYear()}</span>
                    <img
                        src={logo}
                        alt={configs.title}
                        height="20"
                        className="mx-2"
                    />
                </>
            )}
        </div>
    );
};

export default AppFooter;
