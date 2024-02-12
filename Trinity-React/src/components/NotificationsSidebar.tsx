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
    const [showNotifications, setShowNotifications] = useState(false);
    const [notificationsCount, setNotificationsCount] = useState(trinityApp.databaseNotificationsCount ?? 0);
    const notificationsRef = useRef<Array<TrinityNotificationObject>>([]);
    const [loading, setLoading] = useState(false);
    //FIXME: a hack to force re-render
    const [_, setRerenderKey] = useState(0);
    const localize = useLocalize();

    const loadNotifications = async (currentPage: number = 0, perPage: number = 10, append: boolean = false) => {
        try {
            setLoading(true);

            const paginator = (await axios.get<IPaginator<TrinityNotificationObject>>(`/${configs.prefix}/notifications/all?page=${currentPage}&perPage=${perPage}`)).data;
            notificationsRef.current = append ? [...notificationsRef.current, ...paginator.data] : paginator.data;
            setNotificationsCount(paginator.totalCount ?? notificationsRef.current.length);
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
                className="p-3"
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
                        onClick={() => setShowNotifications(true)}
                    >
                        <i
                            className="pi pi-bell p-overlay-badge"
                            style={{ fontSize: '1.6rem' }}
                        >
                            {trinityApp.databaseNotificationsCount! > 0 ? (
                                <Badge
                                    value={notificationsCount}
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
                        blockScroll
                        header={`${localize('notifications')} ${notificationsCount ? `(${notificationsCount})` : ''}`}
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
                                    if ((+ev.first == 0 && +ev.last == 10) || (Math.ceil((+ev.first + +ev.last) / 10) > page && notificationsCount > notificationsRef.current.length)) {
                                        await loadNotifications(page, 10, true);
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
