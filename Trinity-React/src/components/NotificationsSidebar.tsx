import { Sidebar } from 'primereact/sidebar';
import trinityApp from '@/TrinityApp';
import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { useLocalize } from '@/hooks/trinity_localizer';
import { DataScroller } from 'primereact/datascroller';
import axios from 'axios';
import IPaginator from '@/types/Models/Paginator';
import { TrinityNotificationData } from '@/types/Models/TrinityNotificationData';
import { useConfigs } from '@/hooks/trinity_configs';

const NotificationsSidebar = () => {
    const configs = useConfigs();
    const [showNotifications, setShowNotifications] = useState(false);
    const [notifications, setNotifications] = useState<Array<TrinityNotificationData>>([]);

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
    const itemTemplate = (notification: TrinityNotificationData) => {
        console.log('here', notification);
        return (
            <div
                key={notification.id}
                className="flex flex-wrap p-2 align-items-center gap-3"
            >
                {notification.data.image ? (
                    <img
                        className="w-4rem shadow-2 flex-shrink-0 border-round"
                        src={`https://primefaces.org/cdn/primereact/images/product/${notification.data.image}`}
                        alt={notification.data.title}
                    />
                ) : notification.data.icon ? (
                    <i className="pi pi-tag text-sm"></i>
                ) : null}

                <div className="flex-1 flex flex-column gap-2 xl:mr-8">
                    <span className="font-bold">{notification.data.title}</span>
                    <div className="flex align-items-center gap-2">
                        <i className="pi pi-tag text-sm"></i>
                        <span>{notification.data.body}</span>
                    </div>
                </div>
                <span className="font-bold text-900">${notification.data.image}</span>
            </div>
        );
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
