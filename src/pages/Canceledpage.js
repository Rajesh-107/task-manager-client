import React, { Suspense } from 'react';
import Canceled from '../components/Canceled/Canceled';
import LazyLoader from '../components/MasterLayout/LazyLoader';
import MasterLayout from '../components/MasterLayout/MasterLayout';

const Canceledpage = () => {
    return (
        <>
        <MasterLayout>
        <Suspense fallback={<LazyLoader/>}>
        <Canceled></Canceled>
                </Suspense>
        </MasterLayout>
           
        </>
    );
};

export default Canceledpage;