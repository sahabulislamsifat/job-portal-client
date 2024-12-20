import React, { useContext } from "react";
import Lottie from "lottie-react";
import lottieAnimationData from "../../assets/lottie/login.json";
import AuthContext from "../../context/AuthContext";
import SocialLogin from "../shared/SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
  const validPasswordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;

  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log("in SignIn Page:", location);
  const from = location.state || "/";

  const handleSignIn = (event) => {
    event.preventDefault();
    // Get form data
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Password validation
    if (!validPasswordRegex.test(password)) {
      alert(
        "Password must be at least 6 characters long, include at least one uppercase letter, one lowercase letter, and one number."
      );
      return;
    }
    alert("Registration successful!");

    signInUser(email, password)
      .then((result) => {
        console.log("User Login:", result.user), navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* Lottie Animation */}
          <div className="text-center lg:text-left w-96">
            <Lottie animationData={lottieAnimationData}></Lottie>
          </div>

          {/* Registration Form */}
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignIn} className="card-body">
              <h3 className="text-4xl text-center font-bold">Log In</h3>
              {/* Email Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              {/* LogIn Button */}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Log In</button>
              </div>
            </form>
            <div className="flex justify-center mb-8">
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
