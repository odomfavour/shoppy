import React from 'react'
import Header from '../../components/Header/Header'
// import headset from '../../images/headset.jpg'
// import { BsPlusSquareFill } from 'react-icons/bs'
import { FaMinus, FaTrash, FaPlus } from 'react-icons/fa'

import { useGlobalContext } from '../../context/context'

const Cart = () => {
    const { cart, loading, total, clearCart, remove, increase, decrease } = useGlobalContext()
    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <section>
            <Header />
            <div className="container">
                <div className="mt-5">
                    <div className="row">
                        <div className="col-md-9 col-12 order-md-1 order-2 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="cart-shelf">
                                        <h4>Cart: 2 items</h4>
                                        <hr />
                                        {cart.length > 0 ?
                                            <div>
                                                {cart.map(item => (
                                                    <div key={item.id}>
                                                        <div className="row">
                                                            <div className="col-md-2 col-4">
                                                                <img src={item.image} alt="" className='img-fluid' />
                                                            </div>
                                                            <div className="col-md-7 col-8">
                                                                <div className="row">
                                                                    <div className="col-md-8">
                                                                        <h6>{item.title}</h6>
                                                                        <p>Something</p>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>N {item.price}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex justify-content-between align-items-center base-control">
                                                            <button className='btn btn-primary' onClick={() => remove(item.id)}>
                                                                <FaTrash /> <span>Remove</span>
                                                            </button>
                                                            <div className='d-flex jusfy-content-between align-items-center'>
                                                                <button className='qty-btn me-3' onClick={() => decrease(item.id)}>
                                                                    <FaMinus />
                                                                </button>
                                                                <div>
                                                                    {item.amount}
                                                                </div>
                                                                <button className='qty-btn ms-3'  onClick={() => increase(item.id)}>
                                                                    <FaPlus />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                    </div>
                                                ))}</div>
                                            : <div className='text-center'>
                                                <h3 className="my-5">Your Cart is empty</h3>
                                            </div>}

                                    </div>
                                </div>
                            </div>
                            <button className='btn btn-primary mt-5' onClick={clearCart}>Clear Cart</button>
                        </div>
                        <div className="col-md-3 col-12 order-md-2 order-1 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div>
                                        <h6>CART SUMMARY</h6>
                                    </div>
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h6>Subtotal:</h6>
                                            <h6>₦{total}</h6>
                                        </div>
                                        <p>Delivery charges not added yet</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart