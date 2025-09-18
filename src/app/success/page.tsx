import { Metadata } from "next";
import { Suspense } from "react";
import SubmissionDetails from "./components/SubmissionDetails";

export const metadata: Metadata = {
  title: "Form Submitted Successfully",
  description: "Thank you for your submission.",
  openGraph: {
    title: "Form Submitted Successfully",
    description: "Thank you for your submission.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Form Submitted Successfully",
    description: "Thank you for your submission.",
  },
};

function SuccessContent() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: "#1A1917" }}
    >
      <div
        className="max-w-md w-full p-8 text-center rounded-lg"
        style={{
          color: "#DFDFDE",
          backgroundColor: "rgba(223, 223, 222, 0.02)",
          border: "1px solid rgba(223, 223, 222, 0.1)",
        }}
      >
        <div className="mb-8">
          {/* Success Icon */}
          <div className="mb-6">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto"
              style={{ backgroundColor: "rgba(34, 197, 94, 0.1)" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#22C55E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
          </div>

          <h1 className="text-xl font-medium mb-3" style={{ color: "#DFDFDE" }}>
            Form Submitted
          </h1>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "#DFDFDE", opacity: 0.7 }}
          >
            Thank you for your response. We've received your submission
            successfully.
          </p>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <SubmissionDetails />
        </Suspense>

        <div
          className="mt-8 pt-6"
          style={{ borderTop: "1px solid rgba(223, 223, 222, 0.1)" }}
        >
          <a
            href="https://falak.me"
            className="text-sm underline underline-offset-4 transition-opacity duration-200 hover:opacity-80 inline-flex items-center"
            style={{ color: "#DFDFDE", opacity: 0.8 }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Falak.me
          </a>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return <SuccessContent />;
}

export const dynamic = "force-static";
