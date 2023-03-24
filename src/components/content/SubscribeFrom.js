import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SubscribeForm.css";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      history.push("/thankyou");
    } else {
      setError("Please enter a valid email address.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateEmail();
  };

  return (
    <form
      className="form-container"
      id="subscribe-form"
      onSubmit={handleSubmit}
    >
      <h2 className="form-title">Subscribe to our product</h2>
      <div className="form-group">
        <select id="subscription-plan" name="subscription-plan">
          <option value="value1">ESA-Friendly Housing</option>
          <option value="value2">Pet-Friendly Travel Accommodations</option>
        </select>
        <div className="sub-form">
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="submit-button">
            SUBSCRIBE NOW
          </button>
        </div>
        {error && <p className="error-message">{error}</p>}
      </div>
    </form>
  );
};

export default SubscribeForm;
