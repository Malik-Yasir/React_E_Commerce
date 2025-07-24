import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import { Link } from 'react-router-dom'


const Card = () => {
  const {cart, setCart} = useContext(DataContext);
  return (
    <>
    <div className="container my-5"></div>
    {cart.length == 0 ?(
      <div className="text-center">
        <h1>Your Cart Is Empty</h1>
        <Link to={"/"} className='btn btn-warning mt-3'>Continue Shopping</Link>
      </div>
    ):(<>
    <div className="row d-flex justify-content-center ">
      {cart.map((product)=> <div key={product.id} className='col-lg-7 col-md-10 my-3'>
        <div className='card cart-card'>
          <div className=" g-0 d-flex justify-content-center align-items-center " style={{gap:'100px'}}>
            <div className="cal-md-4 d-flex justify-content-center align-items-center ">
              <img src={product.imgSrc} className='cart-img' alt="" />
            </div>
            <div className="cal-md-4 d-flex justify-content-center align-items-center" >
              <div className="card-body text-center">
                <h3 className="product title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}Pkr</p>
           <div className="button-group">
            <button className="btn add-to-cart"  onClick={() =>
                        addToCart(
                          product.id,
                          product.title,
                          product.price,
                          product.imgSrc
                        )
                      }>Buy Now</button>
           </div>
            
              </div>
            </div>
          </div>
        </div>
      </div>)}
    </div>
    <div className="text-center my-5">
      <div className="btn btn-warning mx-2">Check Out</div>
      <div onClick={()=>setCart([])} className="btn btn-danger mx-2">Clear Cart</div>
    </div>
    </>)}
    </>
  )
}

export default Card


