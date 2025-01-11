import React from "react";

export default function Alert({alert}) {

const convertoUppercase = (word="success")=> {
        const lower=word.toLowerCase()
        return lower.charAt(0).toUpperCase()+lower.slice(1)

    }

    // Ensure alert is defined before accessing its properties
  if (!alert) {
    return null; // Optionally, return null if there's no alert to show
  }

  return (
    <div className={`alert alert-${alert.type} alert-dismissible fade show text-center`} role="alert">
    {convertoUppercase(alert.type)}! <strong>{convertoUppercase (alert.msg) || 'This is a default alert message'}</strong>
    {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
  </div>
  );
}
