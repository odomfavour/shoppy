import React from 'react'
import './auth.css'
import {BsHandbagFill} from 'react-icons/bs'
import { NavLink } from 'react-bootstrap'

const AuthWrapper = ({ children }) => {
    return (
        <section className='auth-body'>
            <div className="auth-box">
                <div className='text-white text-center mb-5 heading'>
                    <NavLink to="/"><BsHandbagFill/> <span className='ms-1 mt-1'>Shoppy</span></NavLink>
                </div>
                {children}
            </div>
        </section>
    )
}

export default AuthWrapper