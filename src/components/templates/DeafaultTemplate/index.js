import React from 'react'
import * as S from './styles'

const DefaultPageTemplate = ({ children }) => (
  <S.PageContainer>
    <S.ContentWrapper>{children}</S.ContentWrapper>
  </S.PageContainer>
)

export default DefaultPageTemplate
