import { useLogo } from '@/hooks/trinity_logo';
import { useConfigs } from '@/hooks/trinity_configs';
import { Head } from '@/components/Head';

import { useLocalize } from '@/hooks/trinity_localizer';

const Error = ({ statusCode, reasonPhrase }: { statusCode: number; reasonPhrase: string }) => {
    const configs = useConfigs();
    const localize = useLocalize();

    return (
        <>
            <Head title={localize('error')} />
            <div className="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
                <div className="flex flex-column align-items-center justify-content-center">
                    <img
                        src={useLogo()}
                        alt={configs.title}
                        className="mb-5 w-6rem flex-shrink-0"
                    />
                    <div
                        style={{
                            borderRadius: '56px',
                            padding: '0.3rem',
                            background: 'linear-gradient(rgb(255 2 2 / 62%) 10%, rgba(33, 150, 243, 0) 30%)'
                        }}
                    >
                        <div
                            className="w-full surface-card py-8 px-5 sm:px-8 flex flex-column align-items-center"
                            style={{ borderRadius: '53px' }}
                        >
                            <span className="text-red-500 font-bold text-3xl">{statusCode}</span>
                            <h1 className="text-900 font-bold text-5xl mb-2">{localize('whoops')}</h1>
                            <div className="text-600 mb-5">{reasonPhrase}</div>
                            <a href={`/${configs.prefix}`}>
                                <div className="w-full flex align-items-center py-5 border-300 border-bottom-1">
                                    <span
                                        className="flex justify-content-center align-items-center bg-cyan-400 border-round"
                                        style={{ height: '3.5rem', width: '3.5rem' }}
                                    >
                                        <i className="text-50 pi pi-fw pi-home text-2xl"></i>
                                    </span>
                                    <span className="ml-4 flex flex-column">
                                        <span className="text-900 lg:text-xl font-medium mb-1">{localize('dashboard')}</span>
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Error.layout = null as any;
export default Error;
