import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import './styles/index.css'
// 1
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'

// 2
const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj8uzx7tu04he0117i2o6m6eg'
})

// 3
const client = new ApolloClient({
  networkInterface
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
  , document.getElementById('root')
)
registerServiceWorker()