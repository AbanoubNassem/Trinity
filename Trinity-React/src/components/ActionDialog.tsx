import React, { useState } from 'react';
import TrinityActionModel from '@/types/Models/Actions/TrinityAction';
import { Dialog } from 'primereact/dialog';
import GridLayout from '@/layouts/GridLayout';
import TrinityApp from '@/TrinityApp';
import usePageProps from '@/hooks/trinity_page_props';
import { Button } from 'primereact/button';
import { useConfigs } from '@/hooks/trinity_configs';
import TrinityAction from '@/utilities/trinity_action';
import { ErrorBag, Errors } from '@inertiajs/core/types/types';
import axios from 'axios';

interface Props {
    actionData?: { action: TrinityActionModel; items: Array<any> } | undefined;
    onHide: () => void;
}

export const ActionDialog = React.memo(({ actionData, onHide }: Props) => {
    const configs = useConfigs();
    const { resource } = usePageProps();
    const actionForm: { [k: string]: any } = {};
    const [errors, setErrors] = useState<Errors & ErrorBag>({});

    return (
        <Dialog
            visible={actionData !== undefined}
            onHide={onHide}
            dismissableMask={true}
            header={actionData?.action?.label ?? actionData?.action?.actionName}
            footer={
                <div>
                    <Button
                        label={TrinityApp.localize('cancel')}
                        icon="pi pi-times"
                        onClick={() => onHide()}
                        className="p-button-text"
                    />
                    <Button
                        label={TrinityApp.localize('run_action')}
                        icon="pi pi-check"
                        onClick={() => {
                            axios
                                .post(`/${configs.prefix}/actions/${resource?.name}/${actionData!.action!.actionName}`, {
                                    primaryKeys: actionData?.items,
                                    form: actionForm
                                })
                                .then((r) => r.data)
                                .then(async (response) => {
                                    if (response.data['errors']) {
                                        setErrors(response.data['errors']);
                                    } else {
                                        onHide();
                                    }
                                    await TrinityAction.handleResponse(response);
                                });
                        }}
                        autoFocus
                    />
                </div>
            }
        >
            <GridLayout
                configs={TrinityApp.configs}
                resource={resource!}
                component={actionData?.action as any}
                record={{}}
                formData={actionForm}
                setFieldValue={(name, fieldValue) => {
                    actionForm[name] = fieldValue;
                }}
                errors={errors}
                style={{ zIndex: 100 }}
                localize={TrinityApp.localize}
            />
        </Dialog>
    );
});
