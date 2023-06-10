import { useTitle } from "../hook/useTitle"

import { Checkout } from "../components";
 


export const CartItems = ({title}) => {
  useTitle(title);

  const dogs = [ { "id":1 , "pic":"/assets/golden_retriever.jpg" , "name":"Bella","price":1200},
{ "id":2 , "pic":"/assets/labrador_retriever.jpg" , "name":"Max","price":900}]

  return (
 <div>
     <div className="cartitems">
      <p  className="cart-title">Cart Items: 2</p>
      <div>
        {dogs.map((dog)=> (<Checkout key={dog.id} dog={dog} />))}
      </div>
    </div>
 </div>
  )
}
