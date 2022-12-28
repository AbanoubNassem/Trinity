import React, { useContext, useState } from 'react';
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
import { useForm } from '@inertiajs/inertia-react';
import { Method } from '@inertiajs/inertia';

const Login = () => {
    const configs = useConfigs();
    const pageProps = usePageProps();
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const { layoutConfig } = useContext(LayoutContext);
    const logo = useLogo();
    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden', { 'p-input-filled': layoutConfig.inputStyle === 'filled' });

    const { data, setData, submit, processing } = useForm({
        email: '',
        password: '',
        remember: false
    });

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
                                submit(Method.POST, '');
                            }}
                        >
                            <div>
                                <div className="field">
                                    <label
                                        htmlFor="email1"
                                        className="block text-900 text-xl font-medium mb-2"
                                    >
                                        Email
                                    </label>
                                    <InputText
                                        type="email"
                                        required
                                        placeholder="Email address"
                                        className={classNames('w-full md:w-30rem mb-3', { 'p-invalid': pageProps.errors?.value['Email'] })}
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        style={{ padding: '1rem' }}
                                    />
                                    {pageProps.errors?.value['Email'] && (
                                        <small className="p-error w-full block md:w-30rem">
                                            {pageProps.errors?.value['Email'].map((e, index) => (
                                                <span
                                                    className="flex"
                                                    key={index}
                                                >
                                                    {e}
                                                </span>
                                            ))}
                                        </small>
                                    )}
                                </div>
                                <div className="field">
                                    <label className="block text-900 font-medium text-xl mb-2">Password</label>
                                    <Password
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                            setData('password', e.target.value);
                                        }}
                                        placeholder="Password"
                                        type="password"
                                        required
                                        toggleMask
                                        className={classNames('w-full mb-3', { 'p-invalid': pageProps.errors?.value['Password'] })}
                                        inputClassName="w-full p-3 md:w-30rem"
                                    />
                                    {pageProps.errors?.value['Password'] && (
                                        <small className="p-error w-full block md:w-30rem">
                                            {pageProps.errors?.value['Password'].map((e, index) => (
                                                <span
                                                    className="flex"
                                                    key={index}
                                                >
                                                    {e}
                                                </span>
                                            ))}
                                        </small>
                                    )}
                                </div>
                                <div className="flex align-items-center justify-content-between mb-5 gap-5">
                                    <div className="flex align-items-center">
                                        <Checkbox
                                            checked={checked}
                                            onChange={(e) => {
                                                setChecked(e.checked);
                                                setData('remember', e.checked);
                                            }}
                                            className="mr-2"
                                        />
                                        <label htmlFor="rememberme1">Remember me</label>
                                    </div>
                                    <a
                                        className="font-medium no-underline ml-2 text-right cursor-pointer"
                                        style={{ color: 'var(--primary-color)' }}
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                <div className="field">
                                    {pageProps.errors?.value[''] && (
                                        <small className="p-error w-full block md:w-30rem">
                                            {pageProps.errors?.value[''].map((e, index) => (
                                                <span
                                                    className="flex"
                                                    key={index}
                                                >
                                                    {e}
                                                </span>
                                            ))}
                                        </small>
                                    )}
                                </div>

                                <Button
                                    label="Sign In"
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