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
        window.open(json.url, "_self");
      });
  }, []);

  return (
    <div>
      <h1>Success</h1>
      <h2>Thank you for your purchase!</h2>
    </div>
  );
};

export default Success;
