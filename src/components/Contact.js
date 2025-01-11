import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    mobile: "",
    message: "",
    nonFieldErrors: "",
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
    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    if (!formData.message) newErrors.message = "Message cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // You can send the data to your backend here
      // Example: axios.post('/contact_us', formData);
    }
  };

  return (
    <div className="login-container">
      <h3 className="login-heading " style={{  padding: "5px" }}>Contact Us</h3>
      <div className="contact-message">
      <strong>
        <span
          style={{ backgroundColor: "hsl(0, 8%, 27%)", padding: "1px" }}
        >
          Get in touch with us!
        </span>
      </strong>
      <hr/>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Full username Field */}
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

        {/* Email Field */}
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Email"
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>

        {/* Mobile Field */}
        <div className="form-group">
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Mobile"
          />
          {errors.mobile && <div className="text-danger">{errors.mobile}</div>}
        </div>

        {/* Message Field */}
        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Message"
            rows="4"
          />
          {errors.message && <div className="text-danger">{errors.message}</div>}
        </div>

        {/* Submit Button */}
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-block p-2 fancy-btn mt-4 w-100 mx-auto d-block"
          >
            <i className="fa fa-key" aria-hidden="true"></i> &nbsp; Submit
          </button>
        </div>

        {/* Non-field errors */}
        {errors.nonFieldErrors && (
          <div className="form-group text-danger">{errors.nonFieldErrors}</div>
        )}
      </form>
    </div>
  );
}
