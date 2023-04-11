import { router } from '@inertiajs/react';
import { confirmDialog } from 'primereact/confirmdialog';
import TrinityActionModel from '@/types/Models/Actions/TrinityAction';
import axios from 'axios';
import TrinityApp from '@/TrinityApp';
import React from 'react';

class TrinityAction {
    public static handle(action: TrinityActionModel, actionUrl: string, data: any) {
        if (action.requiresConfirmation && !action.schema?.length) {
            confirmDialog({
                header: action.confirmHeader,
                headerClassName: action.confirmHeaderClassNames,
                message: action.confirmText,
                contentClassName: action.confirmTextClassNames,
                icon: action.confirmTextIcon,
                acceptLabel: action.confirmButtonText,
                acceptIcon: action.confirmButtonIcon,
                acceptClassName: action.confirmButtonClassNames,
                rejectLabel: action.cancelButtonText,
                rejectIcon: action.cancelButtonIcon,
                rejectClassName: action.cancelButtonClassNames,
                accept: () => this.performAction(action, actionUrl, data),
                reject: () => {}
            });

            return;
        }

        this.performAction(action, actionUrl, data);
    }

    private static performAction(action: TrinityActionModel, actionUrl: string, data: any) {
        if (action.url) {
            return this.visit(action.url, action.openUrlInNewTab);
        }

        this.post(action, actionUrl, data);
    }

    private static post(action: TrinityActionModel, actionUrl: string, data: any) {
        axios
            .post(actionUrl, data)
            .then((r) => r.data)
            .then(async (res) => {
                await this.handleResponse(action, res);
            });
    }

    public static async handleResponse(action: TrinityActionModel, responseData: Array<any> = []) {
        for (const response of responseData)
            switch (response.type) {
                case 'errors':
                case 'notifications': {
                    TrinityApp.toast?.show(response.data['notifications']);
                    break;
                }
                case 'redirect': {
                    this.visit(response.data['url'], response.data['openUrlInNewTab'] ?? action.openUrlInNewTab);
                    break;
                }
                case 'download': {
                    await this.download(response.data['url'], response.data['filename']);
                    break;
                }
            }
    }

    private static async download(url: string, filename: string) {
        const response = await axios({
            method: 'get',
            url: url,
            responseType: 'blob'
        });

        const urlObject = window.URL || window.webkitURL;
        const objectUrl = urlObject.createObjectURL(response.data);

        const link = document.createElement('a');
        link.href = objectUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    private static visit(url: string, openUrlInNewTab: boolean) {
        if (url.startsWith('http')) {
            window.open(url, openUrlInNewTab ? '_blank' : '_self');
            return;
        }

        router.visit(url);
    }
}

export default TrinityAction;
