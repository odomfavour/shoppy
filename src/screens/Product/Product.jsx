import React, { useState, useEffect } from 'react'
import axios from '../../api/axios'
// import headset from '../../images/headset.jpg'
import './Product.css'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import Header from '../../components/Header/Header'
import { useGlobalContext } from '../../context/context';



const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const { cart, addProduct } = useGlobalContext();
    // const showProd = () => {
    //     alert(product.title)
    // }

    const onAddToCart = (product) => {
        const existingProduct = cartItems.find(item => item.id === product.id);
        if (existingProduct) {
            setCartItems(cartItems.map(item => (item.id === product.id ? { ...existingProduct, quantity: existingProduct.quantity + 1 } : item)))
        }else {
            setCartItems([...cartItems, { ...product, quantity: 1 }])
        }
    }

    useEffect(() => {
        const getProduct = async () => {
            try {
                setIsLoading(true)
                const { data } = await axios.get(`/products/${id}`)
                console.log(data)
                if (data) {
                    setProduct(data)
                }

                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getProduct();
    }, [id])
    return (
        <section>
            <Header onAdd={onAddToCart}/>
            <div className="container">
                <div className="mt-5">
                    {isLoading ? <Loader /> : <div className="row">
                        <div className="col-md-6 text-center">
                            <div className="product-box">
                                <img src={product.image} alt="booming bass" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h2 className='mt-5'>{product.title}</h2>
                            <h4>Category: <span>{product.category}</span></h4>
                            <hr />
                            <h4>Price: <span>&#8358;{product.price}</span></h4>
                            <hr />
                            <p>{product.description}</p>
                            <p>Rating: <span>{product.rating.rate}</span></p>
                            <hr />
                            <div>
                            {cart.some(e => e.id === product.id) ? <button className='btn btn-outline-primary' disabled>Already in cart</button> : <button className="btn btn-outline-primary" onClick={() => addProduct(product.id)}>Add to cart</button> }
                                                    
                            </div>
                        </div>
                    </div>}

                </div>
            </div>
        </section>
    )
}

export default Product