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

const Checkout3 = () => {
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

  const handlePay = async () => {
    if (price === "") {
      console.log("fill price field");
    } else if (quantity === "") {
      console.log("fill quantity field");
    } else {
      setLoading(true);
      const Quantity = quantity.replace(/["]+/g, "");
      const handleData = {
        payment_method: "",
        payment_method_title: "",
        set_paid: true,
        billing: {
          first_name: "",
          last_name: "",
          address_1: "",
          address_2: "",
          city: "",
          state: "",
          postcode: "",
          country: "",
          email: "dumy@gmail.com",
          phone: "",
        },
        shipping: {
          first_name: "test",
          last_name: "testing",
          address_1: "542 Elsie Drive",
          address_2: "542 Elsie Drive",
          city: "New York",
          state: "Washington",
          postcode: "90140",
          country: "United States",
        },
        line_items: [
          {
            product_id: 3975,
            quantity: Quantity,
            total: `${quantity * price}`,
          },
        ],
      };
      try {
        const response = await wooapi
          .post("orders", handleData)
          .then((data) => {
            localStorage.setItem("orderId", data.data.id);
            handleBuy();
          });
      } catch (error) {
        console.log("error", error.response);
      }
    }
  };
  function handleBuy() {
    setLoading(false);
    fetch("/api/checkout-api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        slug: "grey-classic",
        totalAmount: price,
        quantity: quantity,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        window.open(json.url, "_self");
      });
  }

  async function getSessionData() {
    setLoading(true);
    const orderId = localStorage.getItem("orderId");
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
      .then(async (json) => {
        const handleUpdate = {
          status: "completed",
          payment_method:
            json?.payment_method_types[0] === "card"
              ? "card"
              : json?.payment_method_types[0],
          payment_method_title: "Direct Bank Transfer",
          set_paid: true,
          billing: {
            first_name: json?.customer_details?.name,
            last_name: "",
            address_1: json?.customer_details?.address.line1,
            address_2: json?.customer_details?.address.line2,
            city: json?.customer_details?.address.city,
            state: json?.customer_details?.address.state,
            postcode: json?.customer_details?.address.postal_code,
            country: json?.customer_details?.address.country,
            email: json?.customer_details?.email,
            phone:
              json?.customer_details?.phone === null
                ? "(555) 555-5555"
                : json?.customer_details?.phone,
          },
          shipping: {
            first_name: json?.customer_details?.name,
            last_name: "",
            address_1: json?.customer_details?.address.line1,
            address_2: json?.customer_details?.address.line2,
            city: json?.customer_details?.address.city,
            state: json?.customer_details?.address.state,
            postcode: json?.customer_details?.address.postal_code,
            country: json?.customer_details?.address.country,
          },
          transaction_id: json?.payment_intent,
        };
        try {
          await wooapi.post(`orders/${orderId}`, handleUpdate).then((data) => {
            console.log("#############", data);
            setLoading(false);
          });
        } catch (error) {
          setLoading(false);
          console.log("error", error.response);
        }
      });
  }

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
            {!loading ? (
              <Button
                style={{ width: "50%", height: "3em" }}
                variant="contained"
              >
                <p>
                  Please wait...
                  <Loader />
                </p>
              </Button>
            ) : (
              <Button
                style={{ width: "50%", height: "3em" }}
                onClick={handlePay}
                variant="contained"
              >
                <div>
                  <p className="text">Buy</p>
                </div>
              </Button>
            )}
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
                <Link href="/checkout3">
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

export default Checkout3;
