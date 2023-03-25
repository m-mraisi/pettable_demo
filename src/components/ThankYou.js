import React from "react";
import "./ThankYou.css";
import { useLocation } from "react-router-dom";

const ThankYou = () => {
  const location = useLocation();
  const subscriptionPlan = location.state.subscriptionPlan;

  return (
    <div className="thank-you-container">
      <h2 className="thankyou-text">Thank you for subscribing!</h2>
      <p>You have subscribed to the {subscriptionPlan} plan.</p>
    </div>
  );
};

export default ThankYou;
