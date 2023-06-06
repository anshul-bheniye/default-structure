import { useTitle } from "../hook/useTitle"
// import {dogs} from '../db/adoptMe'
import { Checkout } from "../components";
 

export const CartItems = ({title}) => {
  useTitle(title);
  return (
 <div>
     <div className="cartitems">
      <p  className="cart-title">Cart Items: 2</p>
      {/* <div>
        {dogs.map((dog)=>(
          <div key={dog.id}>
            <Checkout dog={dog}/>
          </div>
        ))}
      </div> */}
      <div>
        <Checkout />
      </div>
    </div>
 </div>
  )
}
