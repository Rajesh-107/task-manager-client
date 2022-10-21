import React, { Suspense } from 'react';
import LazyLoader from '../components/MasterLayout/LazyLoader';
import MasterLayout from '../components/MasterLayout/MasterLayout';

const Canceledpage = () => {
    return (
        <>
        <MasterLayout>
        <Suspense fallback={<LazyLoader/>}>

                </Suspense>
        </MasterLayout>
           
        </>
    );
};

export default Canceledpage;