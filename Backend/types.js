const zod = require("zod");

const cardType = zod.object({
  name: zod.string(),
  description: zod.string(),
  interests: [{
    interest1: zod.string(),
    interest2: zod.string(),
    interest3: zod.string()
  }]
})

const updateCard = zod.object({
  id: zod.string(),
  name: zod.string(),
  description: zod.string()
})

module.exports = {
  cardType,
  updateCard
}