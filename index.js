/* eslint-disable import/no-dynamic-require */

import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'

import projectToLoad from './apps'

const App = lazy(() => import(`./src/${projectToLoad}`))

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>,
  document.getElementById('root')
)
