import React from 'react';
import './LoginPage.css'; // You can create a separate CSS file for styling

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
        <h8 >or</h8>
        <div className="create-a-new-user-group">
        <a href='www.google.com' title='newUser'>Create a new User</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
