import React from 'react';
import Reactotron from './Config/ReactotronConfig';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';

import {store} from './Redux/CreateStore';
import {persistor} from './Redux/CreateStore'

import MainRootComponent from './Component/MainRootComponent'

const App = () => {
    return(
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <MainRootComponent />
            </PersistGate>
        </Provider>
    )
}

export default App;