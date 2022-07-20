import React from 'react';
import JRCore from 'jamespot-react-core';

const TestApp = React.lazy(
    () => import(/* webpackChunkName: "TestApp" */ './TestNjara.app')
);

JRCore.extensionAdd('TestNjara', () => import(/* webpackChunkName: "TestNjara" */'./TestNjara.app'));
JRCore.router.addRoute({
        path:'testNjara',
        element: (
            <React.Suspense fallback={<></>}>
                <TestApp />
            </React.Suspense>
        ),
    }); 

