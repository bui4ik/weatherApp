import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SelectAndButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  flex-wrap: wrap;
`

export const SelectContainer = styled.div`
  margin: 0 auto;
`

export const Button = styled.button`
  margin: 20px auto 20px 10px;
  border: 2px solid #fff;
  background-color: #64b5f6;
  color: #fff;
  padding: 6px 10px;

  @media (max-width: 425px) {
    margin: 10px auto 20px auto;
  }

  :hover {
    border: 2px solid #64b5f6;
    background-color: #fff;
    color: #64b5f6;
  }
`

export const RequestResult = styled.div`
  margin: 0 auto;
`
