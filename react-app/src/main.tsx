import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from "react-redux"

// import router from './router'
import store from './store'

import '@/styles/main.scss'
import App from "@/App";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/*<RouterProvider router={router}/>*/}
  </Provider>
)
