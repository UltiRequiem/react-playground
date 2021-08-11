/* eslint-disable import/no-dynamic-require */

import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'

const APPS = {
  counterButton: 'CounterButton',
  inputObserver: 'InputObserver',
}

const App = lazy(() => import(`./proyects/${APPS.counterButton}`))

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>,
  document.getElementById('root')
)
