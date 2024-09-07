import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { ReactNode } from "react";
import SessionProviderWrapper from "./sessionProviderWrapper";

function RootLayout({
  children,
  pageProps,
}: {
  children: ReactNode;
  pageProps: any;
}) {
  return (
    <SessionProviderWrapper session={pageProps?.session}>
      <html>
        <body>{children}</body>
      </html>
    </SessionProviderWrapper>
  );
}

export default RootLayout;
