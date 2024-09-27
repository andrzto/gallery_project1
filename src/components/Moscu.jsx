import moscu from '../assets/img/moscu.jpg';
import PropTypes from 'prop-types';


export const Moscu = ( { className } ) => {
  return (
    <img src= { moscu } alt="Plaza Roja Moscú, Rusia" 
    className= {className}  />
  )
}

Moscu.propTypes = {
    className: PropTypes.string
}