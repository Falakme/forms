import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forms by Falak",
  description: "Interactive forms and surveys.",
  openGraph: {
    title: "Forms by Falak",
    description: "Interactive forms and surveys.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Forms by Falak",
    description: "Interactive forms and surveys.",
  },
};

export default function Home() {
  redirect("https://falak.me");
  return null;
}
