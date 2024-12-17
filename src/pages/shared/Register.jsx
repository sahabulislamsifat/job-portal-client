import Lottie from "lottie-react";
import lottieAnimationData from "../../assets/lottie/Register-animation.json";

const Register = () => {
  // Regex for password validation
  const validPasswordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;

  // Handle form submission
  const handleRegister = (event) => {
    event.preventDefault();

    // Get form data
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Password validation
    if (!validPasswordRegex.test(password)) {
      alert(
        "Password must be at least 6 characters long, include at least one uppercase letter, one lowercase letter, and one number."
      );
      return;
    }

    // Log successful data
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    alert("Registration successful!");
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
            <form onSubmit={handleRegister} className="card-body">
              <h3 className="text-5xl font-bold">Register now!</h3>

              {/* Name Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>

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

              {/* Register Button */}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
