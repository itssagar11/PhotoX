import React from "react";


const LoginPopUp = () => {


    return (
        <form class="login-form">
            <div class="social-login">
              
                <button class="google-btn">Login with Google</button>
            </div>
            <div class="manual-login">
                <span>Login With Email</span><br /><br />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" id="password" />
                <button type="button" id="toggle-password">Show</button>
                <button type="submit">Login</button>
            </div>
        </form>
    )
}
export default React.memo(LoginPopUp);