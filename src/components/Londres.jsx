import londres from '../assets/img/londres.jpg';
import PropTypes from 'prop-types';


export const Londres = ( { className } ) => {
  return (
    <img src= { londres } alt="Paisaje Londres, Inglaterra" 
    className= {className}  />
  )
}

Londres.propTypes = {
    className: PropTypes.string
}