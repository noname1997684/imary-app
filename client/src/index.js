import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import {thunk} from 'redux-thunk'
import {applyMiddleware, createStore,compose} from 'redux'
import reducer from './reducers/index.js'
import { RecoilRoot } from 'recoil'


const store = createStore(reducer,compose(applyMiddleware(thunk)))
const root = createRoot(document.getElementById('root'))

root.render(
<Provider store={store}>
<RecoilRoot>
     <App/>
</RecoilRoot>
   
</Provider>

)