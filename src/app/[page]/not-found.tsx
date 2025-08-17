import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Form doesn't exist
      </h1>
      <Link
        href="/"
        style={{
          backgroundColor: "#007cba",
          color: "white",
          padding: "12px 24px",
          borderRadius: "6px",
          textDecoration: "none",
          fontSize: "16px",
        }}
      >
        Go home
      </Link>
    </div>
  );
}
