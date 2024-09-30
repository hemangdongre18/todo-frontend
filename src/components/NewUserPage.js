import React, { useState } from "react";
import './NewUserPage.css'; 

const NewUser = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
        } else {
            setError("");
            const UserData = {
                email: email,
                password: password
            };

            try{
                const response = await fetch("http://localhost:8080/api/users/CreateUser",{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(UserData)
                });

                const data = await response.text();
                console.log(data);
                setResponse(data);
                console.log(response);
                
                if(data === "Profile Created") {
                    console.log("User Created Successfully.", data);
                    setError("Profile created!");
                }
                else{
                    setError("Email Already Exists!");
                }
            }
            catch(error){
                console.log("Error: ", error);
                setResponse("Something went wrong.",);
            }
        }
    };

    return(
        <div className="info-container">
            <h2>User Information</h2>
            <form onSubmit={handleSubmit}>
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
                <div className="input-group">
                    <label htmlFor="password">Confirm Password:</label>
                    <input 
                        type="password" 
                        id="confirmPassword" 
                        name="confirmPassword" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required />
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit">Create</button>
                <h8 >or</h8>
                <div className="create-a-new-user-group">
                <a href="/" title='log in'>log in</a>
                </div>
            </form>
        </div>
    );
}

export default NewUser;