import styled from 'styled-components'

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #64b5f6;
`

export const ContentWrapper = styled.div`
  max-width: 500px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  border: 2px solid #fff;
  padding: 20px;
  margin: 0 10px;

  @media (max-width: 500px) {
    padding: 20px 5px;
  }
`
