import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import {thunk} from 'redux-thunk'
import {applyMiddleware, createStore,compose} from 'redux'
import reducers from './reducers/index.js'
import { RecoilRoot } from 'recoil'

const store=createStore(reducers,compose(applyMiddleware(thunk)))
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <Provider store={store}>
    <RecoilRoot>
        <App />
        </RecoilRoot>
    </Provider>
  </StrictMode>

)
