import { Sidebar } from 'primereact/sidebar';
import trinityApp from '@/TrinityApp';
import { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { useLocalize } from '@/hooks/trinity_localizer';
import { DataScroller } from 'primereact/datascroller';
import axios from 'axios';
import { TrinityNotificationData, TrinityNotificationObject } from '@/types/Models/TrinityNotificationObject.ts';
import { useConfigs } from '@/hooks/trinity_configs';

const NotificationsSidebar = () => {
    const configs = useConfigs();
    const [showNotifications, setShowNotifications] = useState(false);
    const [notifications, setNotifications] = useState<Array<TrinityNotificationObject>>([]);

    const localize = useLocalize();

    const loadNotifications = async (currentPage: number = 0, perPage: number = 10, append: boolean = false) => {
        const paginator = (await axios.get(`/${configs.prefix}/notifications/all?page=${currentPage}&perPage=${perPage}`)).data;
        setNotifications(append ? [...notifications, ...paginator.data] : paginator.data);
    };

    useEffect(() => {
        (async () => {
            await loadNotifications();
        })();
    }, []);
    const itemTemplate = (noti: TrinityNotificationObject) => {
        const notification: TrinityNotificationData = JSON.parse(noti.data as string);
        console.log('here', noti.id, notification);
        return <div className=""></div>;
    };

    return (
        <>
            {trinityApp.databaseNotificationsCount !== null ? (
                <>
                    <Button
                        rounded
                        text
                        className="mx-2"
                        onClick={() => setShowNotifications(true)}
                    >
                        <i
                            className="pi pi-bell p-overlay-badge"
                            style={{ fontSize: '1.6rem' }}
                        >
                            {trinityApp.databaseNotificationsCount! > 0 ? (
                                <Badge
                                    value={trinityApp.databaseNotificationsCount}
                                    severity="danger"
                                />
                            ) : null}
                        </i>
                    </Button>

                    <Sidebar
                        visible={showNotifications}
                        onHide={() => setShowNotifications(false)}
                        position={trinityApp.isRtl ? 'left' : 'right'}
                        className="w-full md:w-20rem lg:w-30rem"
                    >
                        <h2>{localize('notifications')}</h2>
                        {notifications?.length && (
                            <DataScroller
                                lazy
                                value={notifications}
                                onLazyLoad={async (ev) => {
                                    const offset = ev.first - ev.rows;
                                    await loadNotifications(offset < 0 ? 0 : offset, ev.rows, offset > 0);
                                }}
                                itemTemplate={itemTemplate}
                                inline
                                rows={10}
                            />
                        )}
                    </Sidebar>
                </>
            ) : null}
        </>
    );
};

export default NotificationsSidebar;
