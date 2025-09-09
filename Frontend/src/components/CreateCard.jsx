import React, { useState } from "react";

export function CreateCard() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [interests, setInterests] = useState(["", "", ""]);

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.heading}>Create a New Card</h2>

      {/* Name */}
      <input
        style={styles.input}
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Description */}
      <input
        style={styles.input}
        type="text"
        placeholder="Description (e.g. Web Developer)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* Interests */}
      {interests.map((interest, index) => (
        <input
          key={index}
          style={styles.input}
          type="text"
          placeholder={`Interest ${index + 1}`}
          value={interest}
          onChange={(e) => {
            const newInterests = [...interests];
            newInterests[index] = e.target.value;
            setInterests(newInterests);
          }}
        />
      ))}

      {/* Button */}
      <button
        style={styles.button}
        onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
        onMouseLeave={(e) => (e.target.style.opacity = "1")}
        onClick={() => {
          fetch("http://localhost:3000/card", {
            method: "POST",
            body: JSON.stringify({
              name,
              description,
              interests,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
        }}
      >
        Create Card
      </button>
    </div>
  );
}

// 🎨 Centralized Styles
const styles = {
  formContainer: {
    maxWidth: "400px",
    margin: "30px auto",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    width: "100%",
    margin: "10px 0",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "1rem",
    outline: "none",
    transition: "0.2s",
  },
  button: {
    marginTop: "15px",
    padding: "12px 20px",
    width: "100%",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#0077b5",
    color: "white",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.2s",
  },
};
