import type { Metadata } from "next";
import { Fredoka, Nunito, Barlow_Condensed } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const fredoka = Fredoka({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
});

const nunito = Nunito({
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const barlow = Barlow_Condensed({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kit Recursos da Copa – Material Pedagógico para Anos Iniciais",
  description:
    "Kit pedagógico temático da Copa do Mundo para 1º ao 5º ano. 4 recursos imprimíveis de Português e Matemática alinhados à BNCC.",
};

const GTM_ID = "GTM-TH27QL37";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${fredoka.variable} ${nunito.variable} ${barlow.variable}`}
    >
      <head>
        {/* Google Tag Manager — o mais alto possível no <head> */}
        <Script
          id="gtm-head"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) — imediatamente após <body> */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
