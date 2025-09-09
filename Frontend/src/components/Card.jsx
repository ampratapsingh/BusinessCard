import React from "react";

export function Card({ cards }) {
  return (
    <div style={styles.container}>
      {cards.map((card, index) => (
        <div
          key={index}
          style={styles.card}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0px 6px 16px rgba(0, 0, 0, 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0px)";
            e.currentTarget.style.boxShadow = "0px 4px 12px rgba(0, 0, 0, 0.1)";
          }}
        >
          {/* Name */}
          <h2 style={styles.name}>{card.name}</h2>

          {/* Description */}
          <p style={styles.description}>{card.description}</p>

          {/* Interests */}
          <h3 style={styles.sectionTitle}>Interests</h3>
          <ul style={styles.interestsList}>
            {card.interests.map((interest, i) => (
              <li key={i} style={styles.interestItem}>
                {interest}
              </li>
            ))}
          </ul>

          {/* Social Buttons */}
          <div style={styles.buttonGroup}>
            <button
              style={styles.linkedinButton}
              onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
              LinkedIn
            </button>
            <button
              style={styles.twitterButton}
              onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
              Twitter
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// 🎨 Centralized Styles
const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    padding: "20px",
  },
  card: {
    margin: "10px",
    padding: "20px",
    border: "1px solid #e0e0e0",
    borderRadius: "12px",
    width: "350px",
    backgroundColor: "white",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  name: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "5px",
    textAlign: "center",
  },
  description: {
    fontSize: "1rem",
    color: "#555",
    textAlign: "center",
    marginBottom: "15px",
    fontStyle: "italic",
  },
  sectionTitle: {
    fontSize: "1.2rem",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#444",
  },
  interestsList: {
    paddingLeft: "20px",
    marginBottom: "15px",
    color: "#555",
  },
  interestItem: {
    marginBottom: "4px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  linkedinButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#0077b5",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
  twitterButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#1DA1F2",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
