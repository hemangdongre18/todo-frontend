import React from "react";
import './NewUserPage.css'; 

const NewUser = () => {
    return(
        <div className="info-container">
            <h2>User Information</h2>
            <form>
                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required />
                </div>
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