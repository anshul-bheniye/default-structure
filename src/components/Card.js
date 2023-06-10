 

export const Card = ({dog}) => {
  const {pic, name, breed, price} = dog;
 
  return (
    <div  className="card">
      <div className="image-container" >
      <img src={pic} alt={name} />
      </div>
      <div>
        <p>I am {name}</p>
        <p>my breed {breed} </p>
      </div>
      <div className="card-cta">
        <p>Price $ {price}</p>
        <button className="add">Add to Cart</button>
      </div>
    </div>
  )
}
