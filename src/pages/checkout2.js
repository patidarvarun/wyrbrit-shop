import React, { useState } from "react";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import Image from "next/image";

const Checkout2 = () => {
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleBuy = () => {
    fetch("/api/checkout-api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        slug: "navy-office",
        totalAmount: price,
        quantity: quantity,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        window.open(json.url, "_self");
      });
  };

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
          <p>
            Price :{" "}
            <input type="number" onChange={(e) => setPrice(e.target.value)} />
          </p>
          <p>
            Quantity :{" "}
            <input
              type="number"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </p>
          <br />
          <Button
            style={{ width: "50%", height: "3em" }}
            onClick={handleBuy}
            variant="contained"
          >
            <div>
              <p className="text">Buy</p>
            </div>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Checkout2;
