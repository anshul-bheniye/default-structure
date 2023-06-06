 
 import {dogs} from '../db/adoptMe'
 import {Card} from '../components';
 import { useTitle } from '../hook/useTitle';

export const Home = ({title}) => {
 useTitle(title);

 return (
    <section className='card-container' >
      {dogs.map((dog)=>(
        <div key={dog.id} >
          <Card dog={dog} />
        </div>
        
      ))}
    </section>
  )
}
