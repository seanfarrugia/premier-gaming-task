import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const font = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], 
  display: "swap",
});

export const metadata: Metadata = {
  title: "Play Online Casino Games | Premier Gaming",
  description: "Discover top online slot games, table games, and more at Premier Gaming. Enjoy a premium casino experience with exciting titles from leading providers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-blue-50`}>
        {children}
      </body>
    </html>
  );
}
