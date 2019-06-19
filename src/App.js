import React, { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { ThemeProvider } from 'emotion-theming'
import store, { history } from 'store'
import theme from 'config/theme'
import Routes from 'routes'
import GlobalStyle from 'GlobalStyle'

const App = () => (
  <StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
    <GlobalStyle />
  </StrictMode>
)

export default App
