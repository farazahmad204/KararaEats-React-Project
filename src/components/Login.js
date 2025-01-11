import React, { useState } from "react";


export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    nonFieldErrors: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous errors
    setErrors({
      username: "",
      password: "",
      nonFieldErrors: "",
    });

    // Validation
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.password) newErrors.password = "Password is required";
    // Optional custom validation: check email format
    if (formData.username && !/\S+@\S+\.\S+/.test(formData.username)) {
      newErrors.username = "Please enter a valid email address";
    }


    if (Object.keys(newErrors).length === 0) {
      // Submit the form, example using fetch or axios
      // You can replace this with an actual API call or form submission logic.
      console.log("Form submitted:", formData);
    } else {
      setErrors(newErrors); // Display errors
    }
  };

  return (
    <div className="login-container my-5" >
      <h3 className="login-heading">Login to Your Account</h3>
      <hr />

      <form onSubmit={handleSubmit}>
        {/* Username Field */}
        <div className="form-group">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Username"
          />
          {errors.username && <div className="text-danger">{errors.username}</div>}
        </div>

        {/* Password Field */}
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Password"
          />
          {errors.password && <div className="text-danger">{errors.password}</div>}
        </div>

        {/* Submit Button */}
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-block p-2 fancy-btn mt-4 w-100 mx-auto d-block"
          >
            <i className="fa fa-key" aria-hidden="true"></i> &nbsp; Login
          </button>
        </div>

        {/* Non-field errors */}
        {errors.nonFieldErrors && (
          <div className="form-group text-danger">{errors.nonFieldErrors}</div>
        )}
      </form>
            {/* Forgot password and Register Links */}
            <div className="contact-message">
          <p className="mt-3" style={{ color: "black", fontWeight: "bold" }}>
            Don't have an account?{" "}
            <a href="/register" className="link-style">
              Register here
            </a>
          </p>
          <p>
            <a href="/password-reset" className="link-style">
              Forgot your password?
            </a>
          </p>
        </div>
    </div>
  )
}
