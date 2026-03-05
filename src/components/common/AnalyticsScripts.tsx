"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

export default function AnalyticsScripts() {
    const [hasConsent, setHasConsent] = useState(false);

    useEffect(() => {
        // Check initial state
        const checkConsent = () => {
            if (localStorage.getItem("cookieConsent") === "granted") {
                setHasConsent(true);
            }
        };

        checkConsent();

        // Listen for the custom event from the CookieBanner
        const handleConsentGranted = () => {
            setHasConsent(true);
        };

        window.addEventListener("cookieConsentGranted", handleConsentGranted);

        return () => {
            window.removeEventListener("cookieConsentGranted", handleConsentGranted);
        };
    }, []);

    if (!hasConsent) return null;

    return (
        <>
            <Script
                id="tmr-code"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                    __html: `
                        var _tmr = window._tmr || (window._tmr = []);
                        _tmr.push({id: "3747120", type: "pageView", start: (new Date()).getTime()});
                        (function (d, w, id) {
                          if (d.getElementById(id)) return;
                          var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
                          ts.src = "https://top-fwz1.mail.ru/js/code.js";
                          var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
                          if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
                        })(document, window, "tmr-code");
                    `,
                }}
            />
            <Script
                id="yandex-metrika"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                    __html: `
                        (function(m,e,t,r,i,k,a){
                            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                            m[i].l=1*new Date();
                            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
                        })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=107155780', 'ym');

                        ym(107155780, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
                    `,
                }}
            />
            <noscript>
                <div>
                    <img
                        src="https://top-fwz1.mail.ru/counter?id=3747120;js=na"
                        style={{ position: "absolute", left: "-9999px" }}
                        alt="Top.Mail.Ru"
                    />
                </div>
            </noscript>
            <noscript>
                <div>
                    <img
                        src="https://mc.yandex.ru/watch/107155780"
                        style={{ position: "absolute", left: "-9999px" }}
                        alt=""
                    />
                </div>
            </noscript>
        </>
    );
}
