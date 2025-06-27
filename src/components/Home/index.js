import Cookies from 'js-cookie'

import {
  HomeMainContainer,
  HomeHeader,
  HomeHeaderLogo,
  HomeLogoutButton,
  HomeContenContainer,
  HomeHeading,
  CreditCard,
} from './styledComponents'

const Home = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/ebank/login')
  }

  return (
    <HomeMainContainer>
      <HomeHeader>
        <HomeHeaderLogo
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
        />
        <HomeLogoutButton onClick={onLogout} type="button">
          Logout
        </HomeLogoutButton>
      </HomeHeader>
      <HomeContenContainer>
        <HomeHeading>Your Flexibility, Our Excellence</HomeHeading>
        <CreditCard
          alt="digital card"
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
        />
      </HomeContenContainer>
    </HomeMainContainer>
  )
}

export default Home
