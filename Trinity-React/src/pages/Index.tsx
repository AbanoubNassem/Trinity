import React from 'react';
import usePageProps from '@/hooks/trinity_page_props';
import { Head } from '@/components/Head';
import Table from '@/components/Table';

const Index = () => {
    const { resource } = usePageProps();

    return (
        <>
            <Head title={resource?.pluralLabel}></Head>

            <div className="grid">
                <div className="col-12">
                    <div className="card">
                        <h5>{resource?.pluralLabel}</h5>

                        <Table />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
