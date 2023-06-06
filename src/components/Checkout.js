import GoldenRetriever from '../assets/golden_retriever.jpg';
import LabradorRetriever from '../assets/labrador_retriever.jpg';

export const Checkout = () => {
    // const {pic, name , price} = dog;
  return (
    <div >
        <div  className="card card-checkout">
            <div className="checkout-image" >
                <img src={GoldenRetriever} alt="GoldenRetriever" />
            </div>
            <div>
            <p>I am  Bella</p>
            </div>

            <p>Price $ 1200 </p>
            <button>Add to Cart</button>
        </div>

        <div  className="card card-checkout">
            <div className="checkout-image" >
                <img src={LabradorRetriever} alt="LabradorRetriever" />
            </div>
            <div>
            <p>I am  Max</p>
            </div>
    
            <p>Price $ 900 </p>
            <button>Add to Cart</button>
    
        </div>
    </div>
  )
}
