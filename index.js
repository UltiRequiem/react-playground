/* eslint-disable import/no-dynamic-require */

import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'

const APPS = {
  counterButton: 'projects/CounterButton',
  inputObserver: 'projects/InputObserver',
}

const App = lazy(() => import(`./src/${APPS.counterButton}`))

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>,
  document.getElementById('root')
)
