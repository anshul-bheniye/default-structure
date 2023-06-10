

export const Checkout = ({dog}) => {
    const {pic, name , price} = dog;
  return (
    <div >
        <div  className="card card-checkout">
            <div className="checkout-image" >
                <img src={pic} alt={name} />
            </div>
            <div>
            <p>I am  {name}</p>
            </div>

            <p>Price $ {price} </p>
            <button className="remove">Remove</button>
        </div>
    </div>
  )
}
