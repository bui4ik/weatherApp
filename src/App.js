import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from 'routes'
import GlobalStyle from 'GlobalStyle'
import * as S from './styles'

const App = () => (
  <BrowserRouter>
    <S.PageContainer>
      <S.ContentWrapper>
        <Routes />
      </S.ContentWrapper>
    </S.PageContainer>
    <GlobalStyle />
  </BrowserRouter>
)

export default App
