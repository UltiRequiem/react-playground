import ReactDOM from 'react-dom'

import App from './app'

function loadApp() {
  ReactDOM.render(<App />, document.getElementById('root'))
}

export default loadApp
