import { Sidebar } from 'primereact/sidebar';
import trinityApp from '@/TrinityApp';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { useLocalize } from '@/hooks/trinity_localizer';
import { VirtualScroller, VirtualScrollerTemplateOptions } from 'primereact/virtualscroller';
import axios from 'axios';
import { TrinityNotificationData, TrinityNotificationObject } from '@/types/Models/TrinityNotificationObject.ts';
import { useConfigs } from '@/hooks/trinity_configs';
import moment from 'moment';
import TrinityAction from '@/utilities/trinity_action.tsx';
import IPaginator from '@/types/Models/Paginator.ts';

const NotificationsSidebar = React.memo(() => {
    const configs = useConfigs();
    const [paginator, setPaginator] = useState<IPaginator<TrinityNotificationObject>>();
    const [showSidebar, setShowSidebar] = useState(false);
    const [notificationsCount, setNotificationsCount] = useState(trinityApp.databaseNotificationsCount ?? 0);
    const notificationsRef = useRef<Array<TrinityNotificationObject>>([]);
    const [loading, setLoading] = useState(false);
    //FIXME: a hack to force re-render
    const [_, setRerenderKey] = useState(0);
    const localize = useLocalize();

    const loadNotifications = async (currentPage: number = 0, perPage: number = 10, append: boolean = false) => {
        try {
            setLoading(true);

            const res = (await axios.get<any>(`/${configs.prefix}/notifications/all?page=${currentPage}&perPage=${perPage}`)).data;
            setPaginator(res.pagination as IPaginator<TrinityNotificationObject>);

            notificationsRef.current = append ? [...notificationsRef.current, ...res.pagination.data] : res.pagination.data;
            setNotificationsCount(res.unreadCount);
            setRerenderKey((prevKey) => prevKey + 1);
        } finally {
            setLoading(false);
        }
    };

    const readAllNotifications = async () => {
        try {
            setLoading(true);

            const res = (await axios.post(`/${configs.prefix}/notifications/read-all`)).data;
            if (res > 0) {
                notificationsRef.current = notificationsRef.current.map((n) => {
                    n.read_at = new Date();
                    return n;
                });
            }
            setNotificationsCount(0);
            setRerenderKey((prevKey) => prevKey + 1);
        } finally {
            setLoading(false);
        }
    };

    const clearAllNotifications = async () => {
        try {
            setLoading(true);

            const res = (await axios.post(`/${configs.prefix}/notifications/clear-all`)).data;
            if (res > 0) {
                notificationsRef.current = [];
            }
            setNotificationsCount(0);
            setRerenderKey((prevKey) => prevKey + 1);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        (async () => {
            await loadNotifications();
        })();

        trinityApp.hubConnection.on('TrinityPushNotification', (noti: TrinityNotificationData) => {
            //TODO:: FIXME:: a bit hacky way!
            notificationsRef.current.unshift({
                data: noti
            });
            setNotificationsCount((prevKey) => prevKey + 1);
        });

        return () => {
            trinityApp.hubConnection.off('TrinityPushNotification');
        };
    }, [configs]);
    const itemTemplate = (noti: TrinityNotificationObject, opt: VirtualScrollerTemplateOptions) => {
        const notification: TrinityNotificationData = typeof noti.data === 'string' ? JSON.parse(noti.data as string) : noti.data;
        const act = notification.action;

        return (
            <div
                key={noti.id ?? opt.index}
                className={`p-3 ${!noti.read_at ? 'border-left-3 border-primary' : ''}`}
            >
                <div className="flex align-items-center">
                    {notification.image ? (
                        <img
                            src={notification.image}
                            alt={notification.title}
                        />
                    ) : (
                        <i className={`pi ${notification.icon ?? 'pi-bell'}`}></i>
                    )}
                    <div className="flex flex-column ml-3 flex-1">
                        <div className="flex align-items-center justify-content-between mb-1">
                            <span className="font-bold">
                                {notification.title} {opt.index + 1}
                            </span>
                            <small>{moment(noti.created_at).fromNow()}</small>
                        </div>
                        <span className="text-sm line-height-3">{notification.body}</span>
                        {act && (
                            <div>
                                <Button
                                    severity={act.severity as any}
                                    aria-label={act.label}
                                    tooltip={act.label}
                                    tooltipOptions={{ position: 'top' }}
                                    icon={act.icon}
                                    style={act.style}
                                    text
                                    label={!act.icon ? act.label : undefined}
                                    className=" text-left"
                                    onClick={() => {
                                        TrinityAction.handle(act, `/${configs.prefix}/actions/notifications/${act.actionName}`, {
                                            primaryKeys: [String(noti.id)],
                                            form: {}
                                        });
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            {trinityApp.configs.isDatabaseNotificationsEnabled !== null ? (
                <>
                    <Button
                        rounded
                        text
                        className="mx-2"
                        onClick={() => setShowSidebar(true)}
                    >
                        <i
                            className="pi pi-bell p-overlay-badge"
                            style={{ fontSize: '1.6rem' }}
                        >
                            {notificationsCount > 0 ? (
                                <Badge
                                    value={notificationsCount}
                                    severity="danger"
                                />
                            ) : null}
                        </i>
                    </Button>

                    <Sidebar
                        visible={showSidebar}
                        onHide={() => setShowSidebar(false)}
                        position={trinityApp.isRtl ? 'left' : 'right'}
                        className="w-full md:w-20rem lg:w-30rem"
                        blockScroll
                        header={
                            <div className="flex flex-column">
                                {`${localize('notifications')} ${notificationsCount ? `(${notificationsCount})` : ''}`}
                                <span className="p-buttonset mt-2">
                                    <Button
                                        label={localize('read_all')}
                                        icon="pi pi-eye"
                                        text
                                        size="small"
                                        onClick={readAllNotifications}
                                    />
                                    <Button
                                        className="mx-2"
                                        label={localize('remove_all')}
                                        icon="pi pi-trash"
                                        text
                                        size="small"
                                        severity="danger"
                                        onClick={clearAllNotifications}
                                    />
                                </span>
                            </div>
                        }
                    >
                        {notificationsRef.current?.length ? (
                            <VirtualScroller
                                items={notificationsRef.current}
                                itemTemplate={itemTemplate}
                                itemSize={100}
                                numToleratedItems={5}
                                lazy
                                onLazyLoad={async (ev) => {
                                    if (loading) return;

                                    const page = Math.ceil(+ev.last / 10);
                                    if ((+ev.first == 0 && +ev.last == 10) || (Math.ceil((+ev.first + +ev.last) / 10) > page && paginator?.totalCount! > notificationsRef.current.length)) {
                                        await loadNotifications(paginator!.currentPage + 1, 10, true);
                                    }
                                }}
                                showLoader
                                loading={loading}
                                style={{ width: '100%', height: '90vh' }}
                            />
                        ) : null}
                    </Sidebar>
                </>
            ) : null}
        </>
    );
});

export default NotificationsSidebar;
