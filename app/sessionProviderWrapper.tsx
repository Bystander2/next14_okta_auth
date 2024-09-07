"use client";
import { Session } from "next-auth";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

function SessionProviderWrapper({
  children,
  session,
}: {
  children: ReactNode;
  session: Session;
}) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

export default SessionProviderWrapper;
