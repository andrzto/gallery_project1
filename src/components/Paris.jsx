import paris from '../assets/img/paris.jpg';
import PropTypes from 'prop-types';


export const Paris = ( { className } ) => {
  return (
    <img src= { paris } alt="Torre Effiel Paris, Francia" 
    className= {className}  />
  )
}

Paris.propTypes = {
    className: PropTypes.string
}