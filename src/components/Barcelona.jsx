import barcelona from '../assets/img/barcelona.jpg';
import PropTypes from 'prop-types';


export const Barcelona = ( { className } ) => {
  return (
    <img src= { barcelona } alt="Sagrada Familia Barcelona, España" 
    className= {className}  />
  )
}

Barcelona.propTypes = {
    className: PropTypes.string
}