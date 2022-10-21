import React, { Suspense } from 'react';
import LazyLoader from '../components/MasterLayout/LazyLoader';
import MasterLayout from '../components/MasterLayout/MasterLayout';

const DashboardPage = () => {
    return (
        <>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>

                </Suspense>
            </MasterLayout>
        </>
    );
};

export default DashboardPage;