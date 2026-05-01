import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Netflix",
  description: "Netflix Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="mx-auto w-93.75 min-h-screen">{children}</div>
      </body>
    </html>
  );
}
