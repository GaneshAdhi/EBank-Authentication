import {
  NotFoundMainContainer,
  PageNotFoundImage,
  PageNotFoundHeading,
  PageNotFoundDescription,
} from './styledComponents'

const NotFound = () => (
  <NotFoundMainContainer>
    <PageNotFoundImage
      alt="not found"
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
    />
    <PageNotFoundHeading>Page Not Found</PageNotFoundHeading>
    <PageNotFoundDescription>
      We are sorry, the page you requested could not be found
    </PageNotFoundDescription>
  </NotFoundMainContainer>
)

export default NotFound
