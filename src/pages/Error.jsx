import Wrapper from '../assets/wrappers/ErrorPage'
import { Link, useRouteError } from 'react-router-dom'
import img from '../assets/not-found.svg'

const Error = () => {
  const error = useRouteError()
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} />
          <h3>Ohhhh!</h3>
          <p> Page Not Found </p>
          <Link to="/">Back Home</Link>
        </div>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <div>Something Went Wrong</div>
    </Wrapper>
  )
}
export default Error
