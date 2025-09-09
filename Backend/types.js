const zod = require("zod");

const cardType = zod.object({
  name: zod.string(),
  description: zod.string(),
  interests: zod.array(zod.string())
});

const updateCard = zod.object({
  id: zod.string(),
  name: zod.string(),
  description: zod.string(),
});

module.exports = {
  cardType,
  updateCard,
};
