import '@babel/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import AppRoot from './AppRoot'

function render(Component) {
  ReactDOM.hydrate(
    <AppContainer>
      <Component />
    </AppContainer>, document.getElementById('react-root')
  )
}

render(AppRoot)

if(module.hot) {
  module.hot.accept("./AppRoot.js", () => {
    const NewAppRoot = require('./AppRoot.js').default
    render(NewAppRoot)
  })
}
