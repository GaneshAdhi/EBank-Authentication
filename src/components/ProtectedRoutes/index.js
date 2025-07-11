import {Route, Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

const ProtectedRoutes = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Route {...props} />
  }
  return <Redirect to="/ebank/login" />
}

export default ProtectedRoutes
