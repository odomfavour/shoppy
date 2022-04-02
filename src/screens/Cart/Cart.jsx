import React from 'react'
import Header from '../../components/Header/Header'
import headset from '../../images/headset.jpg'
// import { BsPlusSquareFill } from 'react-icons/bs'
import { FaMinus, FaTrash, FaPlus } from 'react-icons/fa'

const Cart = () => {
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
                                        <div className="row">
                                            <div className="col-md-2 col-4">
                                                <img src={headset} alt="" className='img-fluid' />
                                            </div>
                                            <div className="col-md-7 col-8">
                                                <div className="row">
                                                    <div className="col-md-8">
                                                        <h6>Oraimo H85D 2 In 1 Smart Headphone Premium Sound - Black</h6>
                                                        <p>Something</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <p>N 3000</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center base-control">
                                            <div className='base-trash'>
                                                <FaTrash /> <span>Remove</span>
                                            </div>
                                            <div className='d-flex jusfy-content-between align-items-center'>
                                                <button className='qty-btn me-3'>
                                                    <FaMinus />
                                                </button>
                                                <div>
                                                    1
                                                </div>
                                                <button className='qty-btn ms-3'>
                                                    <FaPlus />
                                                </button>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                            </div>
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
                                            <h6>₦ 55,990</h6>
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