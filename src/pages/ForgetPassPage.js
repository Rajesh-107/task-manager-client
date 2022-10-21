import React, { Suspense } from 'react';
import LazyLoader from '../components/MasterLayout/LazyLoader';

const ForgetPassPage = () => {
    return (
        <div>
            <Suspense fallback={<LazyLoader/>}>

</Suspense>
        </div>
    );
};

export default ForgetPassPage;