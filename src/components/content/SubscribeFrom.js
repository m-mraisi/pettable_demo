import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SubscribeForm.css";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [selectedOption, setSelectedOption] = useState("ESA-Friendly Housing");
  const history = useHistory();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      history.push({
        pathname: "/thankyou",
        state: { subscriptionPlan: selectedOption },
      });
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
        <div id="subscription-plan" className="subscription-plan">
          <button
            type="button"
            className={
              selectedOption === "ESA-Friendly Housing" ? "selected" : ""
            }
            value="ESA-Friendly Housing"
            id="btn-esa-housing"
            name="btn-esa-housing"
            onClick={handleOptionChange}
          >
            ESA-Friendly Housing
          </button>
          <button
            type="button"
            className={
              selectedOption === "Pet-Friendly Travel Accommodations"
                ? "selected"
                : ""
            }
            value="Pet-Friendly Travel Accommodations"
            id="btn-esa-travel"
            name="btn-esa-travel"
            onClick={handleOptionChange}
          >
            Pet-Friendly Travel Accommodations
          </button>
        </div>
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
