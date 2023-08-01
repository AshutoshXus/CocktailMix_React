import { Link, useOutletContext } from 'react-router-dom'
import Wrapper from '../assets/wrappers/CocktailCard'

const CocktailCard = ({ id, name, image, info, glass }) => {
  return (
    <Wrapper>
      <div className="img-conatiner">
        <img src={image} className="img"></img>
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn">
          {' '}
          Details{' '}
        </Link>
      </div>
    </Wrapper>
  )
}
export default CocktailCard
