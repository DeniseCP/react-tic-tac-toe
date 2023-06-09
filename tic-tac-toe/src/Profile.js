import React
  from 'react';
import { getImageUrl } from './utils';
export function Profile() {
  return (

    <Card>
      <Avatar size={ 100 } person={ {
        name: 'Katsuko Saruhashi',
        imageId: 'YfeOqp2'
      } }></Avatar>
    </Card>
  );
}

function Avatar({ person, size }) {
  return (
    <img
      className='avatar'
      src={ getImageUrl(person) }
      alt={ person.name }
      width={ size }
      height={ size }
    />
  );
}

function Card({ children }) {
  return (
    <div className='card'>
      { children }
    </div>
  );
}
