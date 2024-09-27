import { Link } from 'react-router-dom';
import { Barcelona } from './Barcelona';
import { Londres } from './Londres';
import { Moscu } from './Moscu';
import { Paris } from './Paris';
import { Roma } from './Roma';
import { Santorini } from './Santorini';

export const Navigation = () => {
  return (
    <div className='container thumbnail-container mt-2'>
      <Link to='/barcelona' className='links'>
        <figure className='thumbnail-image-size'>
          <Barcelona />
          <figcaption>Barcelona-España</figcaption>
        </figure>
      </Link>
      <Link to='/londres' className='links'>
        <figure className='thumbnail-image-size'>
          <Londres />
          <figcaption>Londres-Inglaterra</figcaption>
        </figure>
      </Link>
      <Link to='/moscu' className='links'>
        <figure className='thumbnail-image-size'>
          <Moscu />
          <figcaption>Moscú-Rusia</figcaption>
        </figure>
      </Link>
      <Link to='/paris' className='links'>
        <figure className='thumbnail-image-size'>
          <Paris />
          <figcaption>Paris-Francia</figcaption>
        </figure>
      </Link>
      <Link to='/roma' className='links'>
        <figure className='thumbnail-image-size'>
          <Roma />
          <figcaption>Roma-Italia</figcaption>
        </figure>
      </Link>
      <Link to='/santorini' className='links'>
        <figure className='thumbnail-image-size'>
          <Santorini />
          <figcaption>Santorini-Grecia</figcaption>
        </figure>
      </Link>
    </div>
  )
}