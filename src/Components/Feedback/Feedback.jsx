import React, { useState } from "react";
import styles from "./Feedback.module.css";

export default function Feedback() {
  // Initial form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    comments: "",
  });

  // Handle input changes and update the form state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
    // You could also send this data to an API here
  };

  return (
    <div className={styles.feedbackContainer}>
      <div className={styles.feedbackBox}>
        <h2>Feedback Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          {/* Email Input */}
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          {/* Subject Input */}
          <label>
            Subject
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          {/* Comments Textarea */}
          <label>
            Comments
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          {/* Submit Button */}
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
}
