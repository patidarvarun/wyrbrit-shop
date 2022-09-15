import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Grid } from "@mui/material";
import Image from "next/image";
import Button from "@mui/material/Button";
let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51LabasSBAnAyyheh1eHmZUT6yHELndmIh1LvJy4eDuMZQo3kATeWkh0dHCI90hUvxQdFhlaCBhrNyQ1VQDVoJCno001vmRtGRk"
    );
  }

  return stripePromise;
};

const CheckoutPage = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: "price_1LabmoSBAnAyyhehRWmkn3tt",
    quantity: 1,
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `http://localhost:3000/success`,
    cancelUrl: `http://localhost:3000/cancel`,
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  return (
    <div className="checkout">
      <h1 style={{ textAlign: "center" }}>Stripe Payment</h1>
      <Grid
        style={{
          textAlign: "center",
          padding: " 40px",
          border: "1px solid",
          width: " fit-content",
          margin: "0 auto",
        }}
      >
        <Grid item xs={12}>
          <Image src="/shirt.jpg" width="350" height="200" />
          <p>Price : $100</p>
          <br />
          <Button
            style={{ width: "23em !important", height: "3em !important" }}
            onClick={redirectToCheckout}
            disabled={isLoading}
            variant="contained"
          >
            <div>
              <p className="text">{isLoading ? "Loading" : "Buy"}</p>
            </div>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CheckoutPage;
