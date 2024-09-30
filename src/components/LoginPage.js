import React, { useState } from 'react';
import './LoginPage.css'; // You can create a separate CSS file for styling
import { useNavigate, useNavigation } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => { 
    e.preventDefault();

    const UserData = { email, password };

    try {
      const response = await fetch("http://localhost:8080/api/users/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(UserData)
      });

      const data = await response.text();

      if (data === "login successful!") {
        console.log("Login successfully!", data);
        navigate("/dashboard");
        
      } else {
        setError("Invalid Creds.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong.");
    }
  };

  return (
    <div className="login-container">
      <h2>ToDoo!</h2>
      <form onSubmit={handleSubmit}>  {}
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={email}  
            onChange={(e) => setEmail(e.target.value)}  
            required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={password}  
            onChange={(e) => setPassword(e.target.value)}  
            required />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Login</button>
        <h8>or</h8>
        <div className="create-a-new-user-group">
          <a href="/NewUserPage" title='newUser'>Create a new User</a>
        </div>
      </form>
    </div>
  );
};

export default Login;