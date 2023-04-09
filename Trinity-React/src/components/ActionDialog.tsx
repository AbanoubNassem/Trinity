import React, { useRef, useState } from 'react';
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
    const form = useRef<HTMLFormElement>(null);
    const formData: { [k: string]: any } = {};
    const [errors, setErrors] = useState<Errors & ErrorBag>({});

    const submit = () => {
        axios
            .post(`/${configs.prefix}/actions/${resource?.name}/${actionData!.action!.actionName}`, {
                primaryKeys: actionData?.items,
                form: formData
            })
            .then((r) => r.data)
            .then(async (response) => {
                if (response.data?.errors) {
                    setErrors(response.data.errors);
                    return;
                } else {
                    onHide();
                }
                await TrinityAction.handleResponse(response);
            });
    };

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
                            form.current?.requestSubmit();
                        }}
                        autoFocus
                    />
                </div>
            }
        >
            <form
                ref={form}
                onSubmit={(e) => {
                    e.preventDefault();
                    submit();
                }}
            >
                <GridLayout
                    configs={TrinityApp.configs}
                    resource={resource!}
                    component={actionData?.action as any}
                    record={{}}
                    formData={formData}
                    setFieldValue={(name, fieldValue) => {
                        formData[name] = fieldValue;
                    }}
                    errors={errors}
                    style={{ zIndex: 100 }}
                    localize={TrinityApp.localize}
                />
            </form>
        </Dialog>
    );
});
