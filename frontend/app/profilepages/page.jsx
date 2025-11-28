"use client";

import { SessionProvider } from "next-auth/react";
import ProfilePage from "./profilepage";

export default function Page() {
  return (
    <SessionProvider>
      <ProfilePage />
    </SessionProvider>
  );
}
