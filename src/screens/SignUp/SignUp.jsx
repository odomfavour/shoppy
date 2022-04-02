import React from 'react'
import { NavLink } from 'react-router-dom'
import AuthWrapper from '../../layout/AuthWrapper/AuthWrapper'
const SignUp = () => {
  return (
    <AuthWrapper>
      <form action="">
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email" placeholder="name@example.com" />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" placeholder="com" />
        </div>
        <div class="d-grid">
          <button class="btn btn-primary" type="button">Sign Up</button>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3">
            <p>Already have an Account?</p>
            <NavLink to="/login">Login</NavLink>
        </div>
      </form>
    </AuthWrapper>

  )
}

export default SignUp