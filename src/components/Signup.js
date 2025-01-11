import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    whatsapp_num: "",
    address: "",
    password1: "",
    password2: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    whatsapp_num: "",
    address: "",
    password1: "",
    password2: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.whatsapp_num) newErrors.whatsapp_num = "WhatsApp number is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.password1) newErrors.password1 = "Password is required";
    if (formData.password1 !== formData.password2) newErrors.password2 = "Passwords must match";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted", formData);
      // You can replace this with an actual API call or form submission logic.
    }
  };

  return (
    <div className="login-container">
      <h3 className="text-center animated slideInUp mb-4">
        <i className="fa fa-user-plus" aria-hidden="true"></i>&nbsp;&nbsp;Create Your Account
      </h3>
      <hr/>
      <form onSubmit={handleSubmit} className="animated fadeInUp ">
  {/* Username Field */}
  <div className="form-group">
    <label htmlFor="username" className="form-label text-dark">Username<span className="text-danger">*</span></label>
    <input
      type="text"
      id="username"
      name="username"
      value={formData.username}
      onChange={handleInputChange}
      className="form-control"
      placeholder="Username"
    />
    {errors.username && <div className="text-danger">{errors.username}</div>}
  </div>

  {/* Email Field */}
  <div className="form-group">
    <label htmlFor="email" className="form-label text-dark">Email<span className="text-danger">*</span></label>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      className="form-control"
      placeholder="Email"
    />
    {errors.email && <div className="text-danger">{errors.email}</div>}
  </div>

  {/* WhatsApp Number Field */}
  <div className="form-group">
    <label htmlFor="whatsapp_num" className="form-label text-dark">WhatsApp Number<span className="text-danger">*</span></label>
    <input
      type="text"
      id="whatsapp_num"
      name="whatsapp_num"
      value={formData.whatsapp_num}
      onChange={handleInputChange}
      className="form-control"
      placeholder="WhatsApp Number"
    />
    {errors.whatsapp_num && <div className="text-danger">{errors.whatsapp_num}</div>}
  </div>

  {/* Address Field */}
  <div className="form-group">
    <label htmlFor="address" className="form-label text-dark">Address<span className="text-danger">*</span></label>
    <input
      type="text"
      id="address"
      name="address"
      value={formData.address}
      onChange={handleInputChange}
      className="form-control"
      placeholder="Address"
    />
    {errors.address && <div className="text-danger ">{errors.address}</div>}
  </div>

  {/* Password1 Field */}
  <div className="form-group">
    <label htmlFor="password1" className="form-label text-dark">Password</label>
    <input
      type="password"
      id="password1"
      name="password1"
      value={formData.password1}
      onChange={handleInputChange}
      className="form-control"
      placeholder="Password"
    />
    {errors.password1 && <div className="text-danger">{errors.password1}</div>}
  </div>

  {/* Password2 Field */}
  <div className="form-group">
    <label htmlFor="password2" className="form-label text-dark">Confirm Password</label>
    <input
      type="password"
      id="password2"
      name="password2"
      value={formData.password2}
      onChange={handleInputChange}
      className="form-control"
      placeholder="Confirm Password"
    />
    {errors.password2 && <div className="text-danger text-dark">{errors.password2}</div>}
  </div>

  {/* Submit Button */}
  <div className="form-group">
    <button type="submit" className="btn btn-block p-2 fancy-btn">
      <i className="fa fa-user-plus" aria-hidden="true"></i>&nbsp;&nbsp;Create Account
    </button>
  </div>

  {/* Already have an account link */}
  <div className="text-center mt-3">
    <p>
      Already have an account? <a href="/login">Login here</a>
    </p>
  </div>
</form>

    </div>
  );
};

export default RegistrationForm;
