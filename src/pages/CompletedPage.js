import React, { Suspense } from 'react';
import LazyLoader from '../components/MasterLayout/LazyLoader';
import MasterLayout from '../components/MasterLayout/MasterLayout';

const CompletedPage = () => {
    return (
        <>
        <MasterLayout>
        <Suspense fallback={<LazyLoader/>}>

                </Suspense>
        </MasterLayout>
            
        </>
    );
};

export default CompletedPage;