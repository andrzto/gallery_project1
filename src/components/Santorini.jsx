import santorini from '../assets/img/santorini.jpg';
import PropTypes from 'prop-types';


export const Santorini = ( { className } ) => {
  return (
    <img src= { santorini } alt="Paisaje de Santorini, Grecia" 
    className= {className}  />
  )
}

Santorini.propTypes = {
    className: PropTypes.string
}