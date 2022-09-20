import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Link from "next/link";
import wooCredential from "../data/wooCommerce/wooCredentialKey";
import Loader from "../components/common/loader";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Checkout2 = () => {
  const router = useRouter();
  const wooapi = wooCredential();
  const id = router.query.session_id;
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    window.location.replace("/checkout2");
  };
  const [loading, setLoading] = useState(false);

  const handleBuy = () => {
    localStorage.setItem("quantity", quantity);
    localStorage.setItem("price", price);
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

  function getSessionData() {
    fetch("/api/userData/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        setLoading(true);
        handleSubmit(json);
      });
  }

  const handleSubmit = async (sessionData) => {
    let productQuantity = localStorage.getItem("quantity");
    let productPrice = localStorage.getItem("price");
    console.log("sessionDatasessionDatasessionData", sessionData);
    const handleData = {
      payment_method:
        sessionData?.payment_method_types[0] === "card"
          ? "card"
          : sessionData?.payment_method_types[0],
      payment_method_title: "Direct Bank Transfer",
      set_paid: true,
      billing: {
        first_name: sessionData?.customer_details?.name,
        last_name: "",
        address_1: sessionData?.customer_details?.address.line1,
        address_2: sessionData?.customer_details?.address.line2,
        city: sessionData?.customer_details?.address.city,
        state: sessionData?.customer_details?.address.state,
        postcode: sessionData?.customer_details?.address.postal_code,
        country: sessionData?.customer_details?.address.country,
        email: sessionData?.customer_details?.email,
        phone:
          sessionData?.customer_details?.phone === null
            ? "(555) 555-5555"
            : sessionData?.customer_details?.phone,
      },
      shipping: {
        first_name: sessionData?.customer_details?.name,
        last_name: "",
        address_1: sessionData?.customer_details?.address.line1,
        address_2: sessionData?.customer_details?.address.line2,
        city: sessionData?.customer_details?.address.city,
        state: sessionData?.customer_details?.address.state,
        postcode: sessionData?.customer_details?.address.postal_code,
        country: sessionData?.customer_details?.address.country,
      },
      line_items: [
        {
          product_id: 3960,
          name: "navy-office",
          quantity: productQuantity,
          total: `${productQuantity * productPrice}`,
        },
      ],
      // shipping_lines: [
      //   {
      //     method_id: sessionData?.payment_intent,
      //     method_title:
      //       sessionData?.payment_method_types[0] === "card"
      //         ? "card"
      //         : sessionData?.payment_method_types[0],
      //     total: `${sessionData?.amount_total / 100}`,
      //   },
      // ],
      transaction_id: sessionData?.payment_intent,
      status:
        sessionData?.status === "complete" ? "completed" : sessionData?.status,
    };
    console.log("$$$$$$$$$$$$", handleData);
    try {
      const response = await wooapi.post("orders", handleData).then((data) => {
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
      console.log("error", error.response);
    }
  };

  useEffect(() => {
    getSessionData();
    handleOpen();
  }, [id]);
  return (
    <div className="checkout">
      <h1 style={{ textAlign: "center" }}></h1>
      {id === undefined ? (
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
      ) : (
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            {loading ? (
              <center>
                <Box sx={style}>
                  <Loader />
                  <p>Please wait...</p>
                </Box>
              </center>
            ) : (
              <Box sx={style}>
                <h1>Success</h1>
                <h4>Thank you for your purchase!!</h4>
                <Link href="/checkout2">
                  <Button
                    style={{ width: "10%", height: "3em" }}
                    variant="contained"
                  >
                    <div>
                      <p className="text">Back</p>
                    </div>
                  </Button>
                </Link>
              </Box>
            )}
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Checkout2;
