import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserContextProvider } from './MainContext.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import Error from './components/Error.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
     <UserContextProvider>
        <ErrorBoundary fallback={<Error />}>
            <App />
        </ErrorBoundary>
    </UserContextProvider>
)
