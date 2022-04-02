import React from 'react'
import AuthWrapper from '../../layout/AuthWrapper/AuthWrapper'
import { NavLink } from 'react-router-dom'
const LogIn = () => {
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
          <button class="btn btn-primary" type="button">Log in</button>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <p>Don't have an Account?</p>
          <NavLink to="/sign-up">Sign Up</NavLink>
        </div>
      </form>
    </AuthWrapper>
  )
}

export default LogIn