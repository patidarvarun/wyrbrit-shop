import { useState, useEffect, useCallback } from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import wooCredential from "../data/wooCommerce/wooCredentialKey";

const Success = () => {
  const router = useRouter();
  const id = router.query.session_id;
  const [sessionData, setSessionData] = useState("");
  const wooapi = wooCredential();

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
        setSessionData(json);
      });
  }
  useEffect(() => {
    getSessionData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const handleData = {
      payment_method: "bacs",
      payment_method_title: "Direct Bank Transfer",
      set_paid: true,
      billing: {
        first_name: "John",
        last_name: "Doe",
        address_1: "969 Market",
        address_2: "",
        city: "San Francisco",
        state: "CA",
        postcode: "94103",
        country: "US",
        email: "john.doe@example.com",
        phone: "(555) 555-5555",
      },
      shipping: {
        first_name: "John",
        last_name: "Doe",
        address_1: "969 Market",
        address_2: "",
        city: "San Francisco",
        state: "CA",
        postcode: "94103",
        country: "US",
      },
      line_items: [
        {
          product_id: 93,
          quantity: 2,
        },
        {
          product_id: 22,
          variation_id: 23,
          quantity: 1,
        },
      ],
      shipping_lines: [
        {
          method_id: "flat_rate",
          method_title: "Flat Rate",
          total: "10.00",
        },
      ],
    };
    try {
      const response = await wooapi.post("orders", handleData).then((data) => {
        console.log("daatatata", data);
      });
    } catch (error) {
      console.log("error", error.response);
    }
  };

  console.log("sessionData", sessionData);

  return (
    <div>
      <h1>Success</h1>
      <h2>Thank you for your purchase!!</h2>
      <Link href="/checkout2">
        <Button style={{ width: "10%", height: "3em" }} variant="contained">
          <div>
            <p className="text">Back</p>
          </div>
        </Button>
      </Link>
    </div>
  );
};

export default Success;
