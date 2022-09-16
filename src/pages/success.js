import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Success = () => {
  const router = useRouter();
  const id = router.query.session_id;

  useEffect(() => {
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
        console.log("response@@@@@@@", json);
      });
  }, []);

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
