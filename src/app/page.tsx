"use client";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePay = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.post("/api/create-checkout-session");
      const stripe = await stripePromise;
      await stripe?.redirectToCheckout({ sessionId: res.data.id });
    } catch (err: any) {
      setError(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#111", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ background: "#222", borderRadius: 16, boxShadow: "0 4px 32px #0008", padding: 40, maxWidth: 400, width: "100%", textAlign: "center" }}>
        <h1 style={{ color: "#fff", fontSize: 32, fontWeight: 700, marginBottom: 8 }}>Golf Pro One-Time Payment</h1>
        <p style={{ color: "#ccc", fontSize: 18, marginBottom: 32 }}>
          Pay $20 to access premium golf content instantly!
        </p>
        <button
          onClick={handlePay}
          disabled={loading}
          style={{
            padding: "16px 0",
            fontSize: 20,
            fontWeight: 600,
            borderRadius: 8,
            border: "none",
            background: "linear-gradient(90deg, #4e9f3d, #1e5128)",
            color: "#fff",
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.7 : 1,
            width: "100%",
            transition: "opacity 0.2s"
          }}
        >
          {loading ? "Redirecting..." : "Pay $20 Now"}
        </button>
        {error && <div style={{ color: "#ff4d4f", fontWeight: 500, marginTop: 16 }}>{error}</div>}
      </div>
    </div>
  );
}
