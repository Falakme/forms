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

  return (
    <>
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
      />
      <Script id="title-logger" strategy="afterInteractive">
        {`
          console.log('Initial page title:', document.title);
          
          // Listen for Tally form loaded event
          window.addEventListener('message', function(event) {
            if (event.origin === 'https://tally.so') {
              try {
                const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
                console.log('Message from Tally:', data);
                
                if (data.event === 'Tally.FormLoaded' && data.payload && data.payload.formId) {
                  console.log('Form loaded, fetching title for:', data.payload.formId);
                  
                  // Fetch title from our API
                  fetch('/api/form-title?formId=' + data.payload.formId)
                    .then(response => response.json())
                    .then(result => {
                      console.log('Got title from API:', result.title);
                      if (result.title) {
                        document.title = result.title;
                        console.log('Updated page title to:', document.title);
                      }
                    })
                    .catch(error => {
                      console.log('Failed to fetch title from API:', error);
                    });
                }
              } catch (e) {
                console.log('Error parsing Tally message:', e);
              }
            }
          });
        `}
      </Script>
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
