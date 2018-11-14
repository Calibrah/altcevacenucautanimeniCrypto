import {reactotronRedux as reduxPlugin} from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'
import Immutable from 'seamless-immutable'
import Reactotron, {networking} from 'reactotron-react-native'
import apisaucePlugin from 'reactotron-apisauce'

// https://github.com/infinitered/reactotron for more options!
Reactotron
    .configure({
        name: 'CoinWatcher',
        host: 'localhost'
    })
    .useReactNative()
    .use(reduxPlugin({onRestore: Immutable}))
    .use(sagaPlugin())
    .use(networking())
    .use(apisaucePlugin())
    .connect()

// Let's clear Reactotron on every time we load the app
Reactotron.clear()

// Totally hacky, but this allows you to not both importing reactotron-react-native
// on every file.  This is just DEV mode, so no big deal.
console.tron = Reactotron

export default Reactotron
