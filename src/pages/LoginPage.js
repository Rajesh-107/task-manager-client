import React, { Suspense } from 'react';
import Login from '../components/Login/Login';
import LazyLoader from '../components/MasterLayout/LazyLoader';

const LoginPage = () => {
    return (
        <div>
            <Suspense fallback={<LazyLoader/>}>
                <Login></Login>
            </Suspense>
        </div>
    );
};

export default LoginPage;