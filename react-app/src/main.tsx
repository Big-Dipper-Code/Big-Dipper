import React from 'react'
// import ReactDOM from 'react-dom/client'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

// import router from './router'
import store from './store'

import '@/styles/main.scss'
import App from '@/App'

// const root = createRoot(document.getElementById('root'));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        {/* <RouterProvider router={router}/> */}
    </Provider>,
    document.getElementById('root')
)
