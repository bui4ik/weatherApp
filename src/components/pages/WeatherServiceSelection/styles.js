import styled from 'styled-components'

export const LogoContainer = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto 10px auto;

  svg {
    width: 100px;
    height: 100px;
  }
`

export const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
  margin: 0 auto 10px auto;
`

export const Text = styled.div`
  font-size: 15px;
  color: #fff;
  margin: 0 auto 20px auto;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`

export const Button = styled.button`
  padding: 5px 10px;
  margin: 0 10px;
  color: #fff;
  border: 2px solid #fff;
  background-color: #f44336;

  :hover {
    color: #f44336;
    border: 2px solid #f44336;
    background-color: #fff;
  }
`
