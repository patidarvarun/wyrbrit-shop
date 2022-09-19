import { useState, useEffect, useCallback } from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const Success = () => {
  const router = useRouter();
  const id = router.query.session_id;
  const [sessionData, setSessionData] = useState("");

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
