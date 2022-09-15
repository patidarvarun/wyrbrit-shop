const stripe = require("stripe")(
  "sk_test_51LabasSBAnAyyheh89V5X2XUcvdbHgZGuYzKTuW6Q2QsvAykAnnIHeymcTPmaWzlXJv5MtIdNyENRxqXkNQ8mHcr00a5Oqd4Gk"
);

module.exports = async (req, res) => {
  const { id } = req.body;
  try {
    const session = await stripe.checkout.sessions.retrieve(id);
    console.log("#####sss##########", session);
    return session;
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};
