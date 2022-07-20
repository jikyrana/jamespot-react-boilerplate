import * as React from 'react';
import { ExtensionProvider } from 'jamespot-react-core';
import { AppScreen } from './components/Test.screen';



const App = () => (
    <React.Suspense fallback={<></>}>
        <ExtensionProvider>
            <AppScreen/>
        </ExtensionProvider>
    </React.Suspense>
);

export default App;