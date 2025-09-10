import React, { useState } from "react";

export function CreateCard() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [interests, setInterests] = useState(["", "", ""]);

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.heading}>✨ Create a New Card</h2>

      {/* Name */}
      <input
        style={styles.input}
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onFocus={(e) => (e.target.style.borderColor = "#0077b5")}
        onBlur={(e) => (e.target.style.borderColor = "#ddd")}
      />

      {/* Description */}
      <input
        style={styles.input}
        type="text"
        placeholder="Description (e.g. Web Developer)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        onFocus={(e) => (e.target.style.borderColor = "#0077b5")}
        onBlur={(e) => (e.target.style.borderColor = "#ddd")}
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
          onFocus={(e) => (e.target.style.borderColor = "#0077b5")}
          onBlur={(e) => (e.target.style.borderColor = "#ddd")}
        />
      ))}

      {/* Button */}
      <button
        style={styles.button}
        onMouseEnter={(e) => {
          e.target.style.background = "linear-gradient(135deg, #006699, #0099cc)";
          e.target.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "linear-gradient(135deg, #0077b5, #00a0dc)";
          e.target.style.transform = "translateY(0px)";
        }}
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
        🚀 Create Card
      </button>
    </div>
  );
}

// 🎨 Stylish Centralized Styles
const styles = {
  formContainer: {
    maxWidth: "420px",
    margin: "40px auto",
    padding: "25px",
    borderRadius: "16px",
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.12)",
    background: "linear-gradient(145deg, #ffffff, #f7f9fc)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    marginBottom: "22px",
    fontSize: "1.7rem",
    fontWeight: "700",
    color: "#222",
    letterSpacing: "0.5px",
  },
  input: {
    width: "100%",
    margin: "10px 0",
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    fontSize: "1rem",
    outline: "none",
    transition: "all 0.3s ease",
    boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.05)",
  },
  button: {
    marginTop: "20px",
    padding: "14px 22px",
    width: "100%",
    border: "none",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #0077b5, #00a0dc)",
    color: "white",
    fontSize: "1.05rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0px 4px 10px rgba(0, 119, 181, 0.3)",
  },
};
