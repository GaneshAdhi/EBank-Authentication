import styled from 'styled-components'

export const LoginMainContainer = styled.div`
  background-color: #152850;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const LoginInnerCard = styled.div`
  background-color: #e0eefe;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 25px;
  max-height: 550px;
  max-width: 640px;
  overflow: hidden;
`

export const LoginImg = styled.img`
  height: 320px;
  width: 50%;
  margin: 20px;
`

export const LoginFormAndHeadinCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  background-color: #ffffff;
  height: 550px;
  width: 50%;
  border-radius: 20px 0px 0px 20px;
`

export const LoginHeading = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  color: #183b56;
  font-family: 'Roboto';
  margin-bottom: 30px;
`

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const LabelTitle = styled.label`
  color: #5a7184;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`

export const LoginInput = styled.input`
  height: 37px;
  padding-left: 6px;
  padding-right: 7px;
  color: #183b56;
  font-size: 15px;
  font-family: 'Roboto';
  outline: none;
  background-color: transparent;
  border: 2px solid #c3cad9;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 16px;
`

export const LoginButton = styled.button`
  height: 45px;
  background-color: #1565d8;
  color: #ffffff;
  font-weight: 600;
  font-family: 'Roboto';
  font-size: 16px;
  border none;
  outline: none;
  cursor: pointer;
  border-radius: 9px;
  margin-top: 15px;
`

export const LoginErrorMsg = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  margin-top: 14px;
`
