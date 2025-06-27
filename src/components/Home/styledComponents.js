import styeld from 'styled-components'

export const HomeMainContainer = styeld.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: #152850;
  padding: 10px;
`

export const HomeHeader = styeld.div`
  max-width: 1010px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
`

export const HomeHeaderLogo = styeld.img`
  height: 45px;
  width: auto;
`

export const HomeLogoutButton = styeld.button`
  height: 45px;
  width: 85px;
  background-color: transparent;
  border: 2px solid #ffffff;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
`

export const HomeContenContainer = styeld.div`
  max-width: 1010px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
`

export const HomeHeading = styeld.h1`
  font-family: 'Roboto';
  font-size: 42px;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
`

export const CreditCard = styeld.img`
  height: 265px;
  width: auto;
  align-self: center;
  margin-top: 35px;
`
