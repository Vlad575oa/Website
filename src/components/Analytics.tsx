import Script from "next/script";

export default function Analytics() {
    return (
        <>
            {/* 
        Google Analytics / GTM wrapper.
        strategy="afterInteractive" strictly ensures this does NOT block the main thread
        or delay LCP/FCP for the SEO pages.
      */}
            <Script
                id="analytics-placeholder"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            // Analytics logic here. Safe from blocking render.
            // console.log("Analytics loaded non-blocking.");
          `,
                }}
            />
        </>
    );
}
