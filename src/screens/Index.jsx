import React, { useState, useEffect } from 'react'
import axios from '../api/axios'
import '../index.css'
import { BsStarFill } from "react-icons/bs";
import { Form } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import Header from '../components/Header/Header';

import { useGlobalContext } from '../context/context';
// const getStar = (starCount) => {
//     console.log(starCount)
//     for(let fi=1; 1 <= starCount; i++) {
//         console.log(1)
//     }
// }

const Index = () => {
    const [products, setProducts] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [categories, setCategories] = useState(null)
    const [category, setCategory] = useState("")
    const { cart, addProduct } = useGlobalContext()

  
    const getCategory = async (category) => {
        console.log(category)
        try {
            setIsLoading(true)
            const { data } = await axios.get(`/products/category/${category}`)
            console.log(data)
            setProducts(data)
            setCategory()
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const getProducts = async () => {
            try {
                setIsLoading(true)
                const { data } = await axios.get('/products')
                console.log(data)
                if (data) {
                    setProducts(data)
                }

                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }

        const getCategories = async () => {
            try {
                const { data } = await axios.get('/products/categories')
                console.log(data)
                setCategories(data)
            } catch (error) {
                console.log(error)
            }
        }
        getProducts();
        getCategories();
    }, [])

    return (
        <section>
            <Header/>
            <div className="container">
                <div className="mt-5 all-products">
                    <div className='row mb-5'>
                        <div className="col-md-9"></div>
                        <div className="col-md-3">
                            {categories ? <Form.Select aria-label="Default select example" value={category} onChange={(e) => {getCategory(e.target.value)}}>
                                <option>Open this select menu</option>
                                {categories.map((category, index) => (
                                    <option value={category} key={index}>{category}</option>
                                ))}
                            </Form.Select> : ""}

                        </div>
                    </div>
                    {isLoading ? <Loader /> :
                        <div className="row">
                            {products.map((product) => (
                                <div className="col-md-3 mb-3" key={product.id}>
                                    {/* <Link to={{ pathname: `/product/${product.id}`, state: { products: product } }}> */}
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <h6>{product.category}</h6>
                                                <div className="product-image-box text-center p-3">
                                                    <img src={product.image} alt={product.title} className="img-fluid" />
                                                </div>
                                                <p className='mt-3'>{product.title}</p>
                                                <h5>{product.price}</h5>
                                                <div>
                                                    <BsStarFill />
                                                    {product.rating.rate}
                                                </div>
                                                <div className="text-center">
                                                    {cart.some(e => e.id === product.id) ? <button className='btn btn-outline-primary' disabled>Already in cart</button> : <button className="btn btn-outline-primary" onClick={() => addProduct(product.id)}>Add to cart</button> }
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    {/* </Link> */}
                                </div>
                            ))}
                        </div>}
                </div>
            </div>
        </section>
    )
}

export default Index