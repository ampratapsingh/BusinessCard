import React, { useState } from "react";

export function CreateCard() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [interests, setInterests] = useState(["", "", ""]);

  return (
    <div>
      <input
        style={{
          margin: "10px",
          padding: "10px",
          border: "1px solid black",
          borderRadius: "5px",
        }}
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        style={{
          margin: "10px",
          padding: "10px",
          border: "1px solid black",
          borderRadius: "5px",
        }}
        type="text"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      {interests.map((interest, index) => (
        <input
          key={index}
          style={{
            margin: "10px",
            padding: "10px",
            border: "1px solid black",
            borderRadius: "5px",
          }}
          type="text"
          placeholder={`Interest ${index + 1}`}
          onChange={(e) => {
            const newInterests = [...interests];
            newInterests[index] = e.target.value;
            setInterests(newInterests);
          }}
        />
      ))}

      <button onClick={() => {
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
        })
      }}>Create</button>
    
    </div>
  );
}
