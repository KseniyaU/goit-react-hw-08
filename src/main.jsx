import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/components/App/App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from '../src/redux/contacts/store.js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
