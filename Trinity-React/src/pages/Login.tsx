import React, { useContext, useEffect, useState } from 'react';
import usePageProps from '@/hooks/trinity_page_props';
import { Head } from '@/components/Head';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { LayoutContext } from '@/contexts/LayoutContext';
import { useLogo } from '@/hooks/trinity_logo';
import { useConfigs } from '@/hooks/trinity_configs';
import { useForm } from '@inertiajs/react';
import { useLocalize } from '@/hooks/trinity_localizer';

const Login = () => {
    const configs = useConfigs();
    const { errors, data: responseData } = usePageProps();
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const { layoutConfig } = useContext(LayoutContext);
    const logo = useLogo();
    const localize = useLocalize();
    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden', { 'p-input-filled': layoutConfig.inputStyle === 'filled' });

    const { data, setData, post, processing } = useForm({
        email: '',
        password: '',
        remember: false
    });

    useEffect(() => {
        if (responseData) {
            location.href = String(responseData);
        }
    }, [responseData]);

    return (
        <>
            <Head />

            <div className={containerClassName}>
                <div className="flex flex-column align-items-center justify-content-center">
                    <img
                        src={logo}
                        alt={configs.title}
                        className="mb-5 w-6rem flex-shrink-0"
                    />
                    <div
                        style={{
                            borderRadius: '56px',
                            padding: '0.3rem',
                            background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)'
                        }}
                    >
                        <form
                            className="w-full surface-card py-8 px-5 sm:px-8"
                            style={{ borderRadius: '53px' }}
                            onSubmit={(e) => {
                                e.preventDefault();
                                post(``);
                            }}
                        >
                            <div>
                                <div className="field">
                                    <label
                                        htmlFor="email1"
                                        className="block text-900 text-xl font-medium mb-2"
                                    >
                                        {localize('email')}
                                    </label>
                                    <InputText
                                        type="email"
                                        required
                                        placeholder={localize('email_address')}
                                        className={classNames('w-full md:w-30rem mb-3', { 'p-invalid': errors.email })}
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        style={{ padding: '1rem' }}
                                    />
                                    {errors.email && <small className="p-error w-full block md:w-30rem">{errors.email}</small>}
                                </div>
                                <div className="field">
                                    <label className="block text-900 font-medium text-xl mb-2">{localize('password')}</label>
                                    <Password
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                            setData('password', e.target.value);
                                        }}
                                        placeholder={localize('password')}
                                        type="password"
                                        required
                                        toggleMask
                                        className={classNames('w-full mb-3', { 'p-invalid': errors.password })}
                                        inputClassName="w-full p-3 md:w-30rem"
                                    />
                                    {errors.password && <small className="p-error w-full block md:w-30rem">{errors.password}</small>}
                                </div>
                                <div className="flex align-items-center justify-content-between mb-5 gap-5">
                                    <div className="flex align-items-center">
                                        <Checkbox
                                            checked={checked}
                                            onChange={(e) => {
                                                setChecked(e.checked ?? false);
                                                setData('remember', e.checked ?? false);
                                            }}
                                            className="mr-2"
                                        />
                                        <label htmlFor="rememberme1">{localize('remember_me')}</label>
                                    </div>
                                    {/*<a*/}
                                    {/*    className="font-medium no-underline ml-2 text-right cursor-pointer"*/}
                                    {/*    style={{ color: 'var(--primary-color)' }}*/}
                                    {/*>*/}
                                    {/*    Forgot password?*/}
                                    {/*</a>*/}
                                </div>

                                <Button
                                    label={localize('sign_in')}
                                    className="w-full p-3 text-xl"
                                    type="submit"
                                    loading={processing}
                                    disabled={processing}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

Login.layout = null as any;
export default Login;
