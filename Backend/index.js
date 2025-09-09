const express = require("express");
const app = express();
const { cardType, updateCard } = require("./types");
const { Card } = require("./db");
const cors = require("cors");

app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173"
}));

app.post("/card", async(req, res) => {
  const cardPayload = req.body;
  const parsedPayload = cardType.safeParse(cardPayload);
  if(!parsedPayload.success) {
    return res.status(411).json({
      message : "Invalid Payload"
    });
  }

  await Card.create({
    name: parsedPayload.data.name,
    description: parsedPayload.data.description,
    interests: parsedPayload.data.interests
  })

  res.json({
    message : "Card Created Successfully"
  })

});

app.get("/mycards", async(req, res) => {
  const mycards = await Card.find({});
  res.json({mycards});
})

app.put("/UpdateCard", async(req, res) => {
  const cardId = req.body;
  const parseId = updateCard.safeParse(cardId);
  if(!parseId.success) {
    return res.status(411).json({
      message : "Invalid Payload"
    });
  }

  await Card.updateOne({
    _id: parseId.id
  }, {
    $set:{
      name: parseId.name,
      description: parseId.description
    }
  })

  res.json({
    message : "Card Updated Successfully"
  })
})

app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
  next();
})




app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
