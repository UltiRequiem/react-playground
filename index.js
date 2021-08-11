/* eslint-disable import/no-dynamic-require */

import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'

const APPS = {
  counterButton: 'proyects/CounterButton',
  inputObserver: 'proyects/InputObserver',
}

function loadApp(path) {
  import(path).then((App) => {
    ReactDOM.render(
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>,
      document.getElementById('root')
    )
  })
}

loadApp(APPS.inputObserver)
