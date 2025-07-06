import {useState} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  LoginMainContainer,
  LoginInnerCard,
  LoginImg,
  LoginFormAndHeadinCard,
  LoginHeading,
  LoginFormContainer,
  LabelTitle,
  LoginInput,
  LoginButton,
  LoginErrorMsg,
} from './styledComponents'

const Login = props => {
  const [userIdName, setUserId] = useState('')
  const [pinText, setPinId] = useState('')
  const [showErrorStatus, setErrorStatus] = useState(false)
  const [showErrorText, setErrorText] = useState('')

  const onUserIdSet = event => {
    setUserId(event.target.value)
  }

  const onUserPinSet = event => {
    setPinId(event.target.value)
  }

  const onSubmitdetail = async event => {
    event.preventDefault()
    const url = 'https://apis.ccbp.in/ebank/login'
    const userData = {user_id: userIdName, pin: pinText}
    const options = {method: 'POST', body: JSON.stringify(userData)}

    const resposnse = await fetch(url, options)
    const data = await resposnse.json()
    if (resposnse.ok) {
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      const {history} = props
      history.replace('/')
    } else {
      const errortext = data.error_msg
      setErrorText(errortext)
      setErrorStatus(true)
    }
  }

  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <LoginMainContainer>
      <LoginInnerCard>
        <LoginImg
          alt="website login"
          src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
        />
        <LoginFormAndHeadinCard>
          <LoginHeading>Welcome Back!</LoginHeading>
          <LoginFormContainer onSubmit={onSubmitdetail}>
            <LabelTitle htmlFor="userId">User ID</LabelTitle>
            <LoginInput
              value={userIdName}
              onChange={onUserIdSet}
              id="userId"
              type="text"
              placeholder="Enter User ID"
            />
            <LabelTitle htmlFor="passwordId">PIN</LabelTitle>
            <LoginInput
              value={pinText}
              onChange={onUserPinSet}
              id="passwordId"
              type="password"
              placeholder="Enter PIN"
            />
            <LoginButton type="submit">Login</LoginButton>
            {showErrorStatus && <LoginErrorMsg>{showErrorText}</LoginErrorMsg>}
          </LoginFormContainer>
        </LoginFormAndHeadinCard>
      </LoginInnerCard>
    </LoginMainContainer>
  )
}

export default Login
