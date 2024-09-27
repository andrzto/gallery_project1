import roma from '../assets/img/roma.jpg';
import PropTypes from 'prop-types';


export const Roma = ( { className } ) => {
  return (
    <img src= { roma } alt="Coliseo Romano Roma, Italia" 
    className= {className}  />
  )
}

Roma.propTypes = {
    className: PropTypes.string
}