import { people } from './data.js';
import React from 'react';


import sec88 from '../../assets/images/sec-2-1.jpg';

export function getImageUrl(person) {
  return (
    
    person.imageUrl
  );
}

export default function List() {
  const listItems = people.map(person =>
    <div className='col-lg-3 col-md-6'>
      <div className="box" key={person.id}>
      {/* <img
        src={getImageUrl(person)}
        alt={person.name}
      /> */}
      <img src={require('../../assets/images/sec-2-1.jpg')} alt="React Logo"  />
      <div className='text'>
        <h6>{person.nmbr}</h6>
        <h3>{person.title}</h3>
        <p>{person.des}</p>
      </div>

     
      </div>
    </div>

    
    
  );

  // const listItems = people.map(person =>
  //   <li key={person.id}>
  //     <img
  //       src={getImageUrl(person)}
  //       alt={person.name}
  //     />
  //     <p>
  //       <b>{person.name}</b>
  //         {' ' + person.profession + ' '}
  //         known for {person.accomplishment}
  //     </p>
  //   </li>
  // );
  return (
    <article>

      <div className="row">{listItems}</div>
    </article>
  
  );
}



