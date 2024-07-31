"use client";
import { ToastContainer } from "react-toastify";
import "@/css/style.css";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import Loader from "../components/ui/loader";
import { Inter } from "next/font/google";
import { I18nextProvider } from "react-i18next";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 100);
  }, []);

  return (
    <I18nextProvider>
      <html suppressHydrationWarning={true} lang="en">
        <body className={inter.className}>
          <div>{loading ? <Loader /> : children}</div>
          <ToastContainer />
        </body>
      </html>
    </I18nextProvider>
  );
}
