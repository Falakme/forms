import { notFound } from "next/navigation";
import Script from "next/script";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ page: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { page } = await params;

  // Simple fallback title without fetching
  return {
    title: `Form ${page}`,
  };
}

export default async function Page({ params }: PageProps) {
  const { page } = await params;
  if (!page) {
    notFound();
  }

  // Check if form exists
  try {
    const response = await fetch(`https://tally.so/r/${page}`, {
      method: "HEAD", // Only get headers, not body
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; Bot/1.0)",
      },
    });

    if (response.status === 404) {
      notFound();
    }
  } catch (error) {
    // If fetch fails, assume form doesn't exist
    notFound();
  }

  return (
    <>
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
      />
      <div style={{ margin: 0, height: "100vh", overflow: "hidden" }}>
        <iframe
          data-tally-src={`https://tally.so/r/${page}`}
          width="100%"
          height="100%"
          title="Form"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            border: 0,
          }}
        ></iframe>
      </div>
    </>
  );
}

export const dynamic = "force-static";
