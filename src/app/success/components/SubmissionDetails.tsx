"use client";

import { useSearchParams } from "next/navigation";

export default function SubmissionDetails() {
  const searchParams = useSearchParams();

  const formName =
    searchParams.get("formName") || searchParams.get("form_name");
  const submissionId =
    searchParams.get("submissionId") || searchParams.get("submission_id");
  const respondentId =
    searchParams.get("respondentId") || searchParams.get("respondent_id");

  // If no parameters are provided, show a generic message
  if (!formName && !submissionId && !respondentId) {
    return (
      <div className="text-sm" style={{ color: "#DFDFDE", opacity: 0.8 }}>
        Your submission has been recorded.
      </div>
    );
  }

  return (
    <div className="space-y-4 text-sm">
      {formName && (
        <div
          className="rounded-md p-3"
          style={{
            backgroundColor: "rgba(223, 223, 222, 0.04)",
            border: "1px solid rgba(223, 223, 222, 0.08)",
          }}
        >
          <div
            className="text-xs mb-2"
            style={{ color: "#DFDFDE", opacity: 0.6 }}
          >
            Form Name
          </div>
          <div className="font-mono" style={{ color: "#DFDFDE" }}>
            {formName}
          </div>
        </div>
      )}

      {submissionId && (
        <div
          className="rounded-md p-3"
          style={{
            backgroundColor: "rgba(223, 223, 222, 0.04)",
            border: "1px solid rgba(223, 223, 222, 0.08)",
          }}
        >
          <div
            className="text-xs mb-2"
            style={{ color: "#DFDFDE", opacity: 0.6 }}
          >
            Submission ID
          </div>
          <div
            className="font-mono text-xs break-all"
            style={{ color: "#DFDFDE" }}
          >
            {submissionId}
          </div>
        </div>
      )}

      {respondentId && (
        <div
          className="rounded-md p-3"
          style={{
            backgroundColor: "rgba(223, 223, 222, 0.04)",
            border: "1px solid rgba(223, 223, 222, 0.08)",
          }}
        >
          <div
            className="text-xs mb-2"
            style={{ color: "#DFDFDE", opacity: 0.6 }}
          >
            Respondent ID
          </div>
          <div
            className="font-mono text-xs break-all"
            style={{ color: "#DFDFDE" }}
          >
            {respondentId}
          </div>
        </div>
      )}
    </div>
  );
}
